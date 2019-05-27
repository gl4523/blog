// import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import './style/github-markdown.css'
const root = document.querySelector('#app')

ReactDOM.render(<App />, root)

if (process.env.NODE_ENV !== 'production') {
    var module
    if(module.hot){
        module.hot.accept()
    }
}
