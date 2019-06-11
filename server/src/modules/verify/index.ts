import KoaRouter from 'koa-router'

const router = new KoaRouter()

router.get('.well-known/pki-validation/fileauth.txt', async (ctx, next) => {
  ctx.body = "201906100000002fhzdvo9khzzynia2a1rkctv6k5zp1slhlqumkinau2unmzwcy"
})

module.exports = router