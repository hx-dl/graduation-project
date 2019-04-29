export default (id, edit = false) => {
  //  获取指定 id 的文章信息
  return new Promise( (resolve) => {
    const query = new AV.Query('Article')
    let currentArticle = {}
    query.include('image')
    query.get(id).then( res => {
      let id = res.get('objectId')
      let title = res.get('title')
      let time = res.get('releaseTime')
      let content = res.get('content')
      let articleImage = res.get('image')
      let coverImg = '../assets/imgs/banner.jpg'
      if( articleImage ) {
        coverImg = articleImage.get('url')
      }
      if(edit) {
        resolve(content)
      }else {
        currentArticle = {
          id,
          title,
          time,
          content: marked(content),
          coverImg
        }
        resolve(currentArticle)
      }
    })
  })
}