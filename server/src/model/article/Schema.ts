import {Schema} from 'mongoose'

module.exports = new Schema({
  // 发布时间
  time: Number,
  // 内容
  content: String,
  // 标题
  title: String,
  // 简介
  describe: String
})