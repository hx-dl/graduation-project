<template>
  <div class="register">
    <van-cell-group>
      <van-field 
        class="username"
        v-model="username"
        placeholder="请输入用户名" 
        clearable label="用户名"
        right-icon="question-o"
        @focus="handleClear"
        :error-message="usernameMessage"
        error-message-align='right'
        @click-right-icon="$toast('注册时的手机号或邮箱账号')"
        required
      />
      <van-field
        class="password"
        v-model="password"
        :type="passwordType"
        placeholder="请输入密码"
        label="密码"
        clearable
        @focus="handleClear"
        :right-icon="eyeType"
        :error-message="passwordMessage"
        error-message-align='right'
        @click-right-icon="handlePasswordToggle"
        required
      />
      <van-field 
        class="nickname"
        v-model="nickname"
        placeholder="请输入昵称" 
        clearable label="昵称"
        right-icon="question-o"
        @focus="handleClear"
        :error-message="usernameMessage"
        error-message-align='right'
        @click-right-icon="$toast('对他人可见的称呼')"
      />
      <van-field
        class="email"
        v-model="email"
        type="email"
        placeholder="请输入邮箱"
        label="邮箱"
        clearable
        @focus="handleClear"
        :error-message="passwordMessage"
        error-message-align='right'
        @click-right-icon="handlePasswordToggle"
      />
      <van-button type="primary" size="large" text="注册" @click="toRegister"/>
    </van-cell-group>
    <div class="other">
      <a class="login" @click="toLoginPage">已有账号?去登录</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      nickname: '',
      password: '',
      email: '',
      usernameMessage: '',
      passwordMessage: '',
      eyeType: 'closed-eye',
      passwordType: 'password'
    }
  },
  methods: {
    handlePasswordToggle() {
      if(this.passwordType === 'password') {
        this.eyeType = 'closed-eye'
        this.passwordType = 'text'
      }else {
        this.eyeType = 'eye-o'
        this.passwordType = 'password'
      }
    },
    handleClear() {
      this.usernameMessage = ''
      this.passwordMessage = ''
    },
    toLoginPage() {
      this.$parent.$emit('checkType')
    },
    toRegister() {
      if(!this.username || !this.password) return
      var user = new AV.User();
      user.setUsername(this.username);
      user.set('nickname', this.nickname);
      user.setPassword(this.password);
      user.setEmail(this.email);
      user.signUp().then( loginedUser => {
        this.$toast('注册成功')
        localStorage.loginedUser = JSON.stringify(loginedUser)
        this.$router.push({path: '/home'})
      }, error => {
        alert(JSON.stringify(error));
      })
    },
  }
}
</script>
<style lang="stylus" scoped>
.username
  margin-top .4rem
.password
  margin-top .2rem
.other
  display flex
  justify-content flex-end
  padding .2rem
  .login
    font-size .14rem
    color #25a4bb
    text-decoration underline
    &:active
      color orange
</style>


