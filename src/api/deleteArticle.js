export default () => {
  //删除文章
  var todo = AV.Object.createWithoutData('Todo', '57328ca079bc44005c2472d0');
todo.destroy().then(function (success) {
// 删除成功
}, function (error) {
// 删除失败
});
}


