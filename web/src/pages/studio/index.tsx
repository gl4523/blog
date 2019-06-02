import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {ServerUrl} from '../../const'
import {isLocal} from '../../utils'
import './index.scss'

interface IStudio {
  state: {
    title: string,
    describe: string,
    content: string
  }
}
class StudioPage extends Component<any, IStudio["state"]> {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      describe: '',
      content: ''
    }
  }
  render() {
  
    return isLocal() ? (
      <div className="studio-container">
        <form>
          <div className="from-item">
            <label htmlFor="title">标题</label>
            <input 
            type="text" 
            name="title" 
            id="title"
            onChange={this.getHandleChange('title')}
            />
          </div>
          <div className="from-item">
            <label htmlFor="describe">描述</label>
            <input 
            type="text" 
            name="describe" 
            id="describe" 
            onChange={this.getHandleChange('describe')} 
            />
          </div>
          <div className="from-item">
            <label htmlFor="content">内容</label>
            <textarea 
            onChange={this.getHandleChange('content')}>
            </textarea>
          </div>

          
        </form>
        <button onClick={this.handleClickSubmit}>提交</button>
      </div>
    ) : <Redirect to="/" />
  }

  getHandleChange = (key: string) => {
    return (e) => {
      const value = e.target.value
      this.setState(preState => {
        return Object.assign(preState, {
          [key]: value
        })
      })
    }
  }

  handleClickSubmit = async () => {
    const {title, describe, content} = this.state
    if (title && describe && content) {
      const url = `${ServerUrl}/blog/add`
      const res = await axios.post(url, {
        title,
        content,
        describe,
        time: Date.now()
      })
      console.log(res)
    } else {
      alert('存在未输入项')
    }
  }
}

export default StudioPage