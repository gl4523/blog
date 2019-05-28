import KoaRouter from 'koa-router'
import ArticleModel from '../../model/article'
const router = new KoaRouter()

router.prefix('/blog')

// 获取blog列表
router.get('/list', async (ctx, next) => {
  const list = await ArticleModel.findAll()
  ctx.body = list
})

// 添加内容
router.post('/add', async (ctx, next) => {
  const request: any = ctx.request
  try {
    await ArticleModel.insert(request.body)
    ctx.body = {code: 0}
  } catch (e) {
    ctx.body = {code: 1}
  }
})


module.exports = router