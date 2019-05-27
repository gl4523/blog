import KoaRouter from 'koa-router'
import ArticleModel from '../../model/article'
const router = new KoaRouter()

router.prefix('/blog')

// 获取blog列表
router.get('/list', async (ctx, next) => {
  const list = await ArticleModel.findAll()
  ctx.body = list
})


module.exports = router