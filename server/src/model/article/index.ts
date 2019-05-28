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

/**
 * 通过id获取数据
 * @param id 
 */
function findById(_id: string) {
  return new Promise((resolve, reject) => {
    const query = Model.find()
    query.setQuery({_id})
    query.exec((err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

/**
 * 插入数据
 * @param body 
 */
function insert(body: any) {
  const model = new Model(body)
  return model.save()
}

export default {
  findAll,
  insert,
  findById
}