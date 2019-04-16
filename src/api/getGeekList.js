export default () => {
  //  获取文章列表
  const query = new AV.Query('Article')
  query.include('image')
  query.descending('createdAt')
  
  var GeekList = []
  query.matches('type','geek')
  query.find().then( (articles) => {
    articles.forEach( article => {
      let id = article.get('objectId')
      let title = article.get('title')
      let tag = article.get('tag')
      let time = article.get('releaseTime')
      let description = article.get('description')
      let articleImage = article.get('image');
      let coverImg = require('../assets/imgs/banner.jpg')
      if(articleImage) {
        coverImg = articleImage.get('url');
      }
      GeekList.push({
        id,
        title,
        tag,
        time,
        description,
        coverImg
      });
    })
  })
  return GeekList
}