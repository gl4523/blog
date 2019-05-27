import React, {Component} from 'react'
import ReactMarkDown from 'react-markdown'
class App extends Component {
    render() {
        const markdown = '## 标题\n```js\nfunction\n```'
        return (
            <div className="md-body">
                <ReactMarkDown source={markdown} />
            </div> 
        )
    }
}

export default App