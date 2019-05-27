import React, {Component} from 'react'
import ReactMarkDown from 'react-markdown'
class App extends Component {
    render() {
        const markdown = '``` \n function \n ```'
        return (
            <div>
                <ReactMarkDown source={markdown} />
            </div> 
        )
    }
}

export default App