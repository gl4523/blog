import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
interface IArticle {
    props: {
        title: string,
        describe: string,
        time: number,
        id: string
    }
}

class Article extends Component<IArticle["props"]> {
    constructor(props) {
        super(props)
    }

    render() {
        const {id} = this.props
        return (
            <div className="article-item-container">
                <div className="title">
                    <span><Link to={`/article/123`}>标题标题标题</Link></span>
                </div>
                <div className="time">
                    <span>January 03, 2019</span>
                </div>
                <div className="describe">
                    <span>这篇文章总结了我入门年段这一年半以来的一些东西，希望能让你有所帮助</span>
                </div>
            </div>
        )
    }
}

export default Article