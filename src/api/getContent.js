export default (id,callback) => {
  //  获取指定 id 的文章信息
  const query = new AV.Query('Article')
  query.include('image')
  query.descending('createdAt')
  let currentArticle = {}
  query.get(id)
    .then( res => {
      let id = res.get('objectId')
      let title = res.get('title')
      let time = res.get('releaseTime')
      let content = res.get('content')
      let articleImage = res.get('image')
      let coverImg = require('../assets/imgs/banner.jpg')
      if( articleImage ) {
        coverImg = articleImage.get('url');
      }
      currentArticle = {
        id,
        title,
        time,
        content: marked(content),
        coverImg
      }
      callback(currentArticle)
    })
}