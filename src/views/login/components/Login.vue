<template>
  <div class="login">
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
      />
      <van-button type="primary" size="large" text="快速登录" @click="toLogin"/>
    </van-cell-group>

    <div class="other">
      <a class="register" @click="toRegisterPage">现在注册</a>
      <a class="forget" @click="toResetPassword">忘记密码?</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
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
    toLogin() {
      if(this.username && this.password) {
        AV.User.logIn(this.username, this.password).then( loginedUser => {
          localStorage.loginedUser = JSON.stringify(loginedUser)
          this.$router.push({
            path: '/user'
          })
        }, error => {
          this.$notify(`${error}`.slice(0,20))
        })
      }else {
          if(!this.username) {
            this.usernameMessage = '用户名不能为空'
          }
          if(!this.password) {
            this.passwordMessage = '请输入密码'
          }
          return
      }
    },
    toRegisterPage() {
      this.$parent.$emit('checkType')
    },
    toResetPassword() {

    }
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
  justify-content space-between
  padding .2rem
  .register,.forget
    font-size .14rem
    color #25a4bb
    text-decoration underline
    &:active
      color orange
</style>


