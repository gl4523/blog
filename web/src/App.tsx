import React, {Component} from 'react'
import {Switch, Route, HashRouter} from 'react-router-dom'
import Home from './pages/home'
import Browse from './pages/browse'
import Studio from './pages/studio'
class App extends Component {
    render() {
        // const markdown = '## 标题\n```js\nfunction\n```'
        // return (
        //     <div className="md-body">
        //         <ReactMarkDown source={markdown} />
        //     </div> 
        // )
        return (
            <div style={{margin: '0 auto'}}>
                <HashRouter>
                    <Switch>
                        <Route path="/article/:id" component={Browse}></Route>
                        <Route path="/studio" component={Studio}></Route>
                        <Route path="/" exact component={Home}></Route>
                    </Switch>
                </HashRouter>
            </div>
        )
        
    }
}

export default App