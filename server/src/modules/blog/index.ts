import KoaRouter from 'koa-router'
import ArticleModel from '../../model/article'
const router = new KoaRouter()

router.prefix('/blog')

// 获取blog列表
router.get('/list', async (ctx, next) => {
  try {
    const list = await ArticleModel.findAll()
    ctx.body = {code: 0, data: list }
  } catch (e) {
    ctx.body = {code: 1, message: e}
  }
})

// 获取blog
router.get('/article/:id', async (ctx, next) => {
  const id = ctx.params.id
  const data = await ArticleModel.findById(id)
  if (data && data[0]) {
    ctx.body = {data: data[0], code: 0}
  } else {
    ctx.body = {code: 1}
  }
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