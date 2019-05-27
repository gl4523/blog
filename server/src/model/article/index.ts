import Model from './Model'

/**
 * 查找所有数据
 */
function findAll() {
  return new Promise((resolve, reject) => {
    const query = Model.find()
    query.setOptions({})
    query.exec((err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

export default {findAll}