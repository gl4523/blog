import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
interface IArticle {
    props: {
        title: string,
        describe: string,
        time: number,
        _id: string
    }
}

class Article extends Component<IArticle["props"]> {
    constructor(props) {
        super(props)
    }

    render() {
        const {_id, title, time, describe} = this.props
        return (
            <div className="article-item-container">
                <div className="title">
                    <span><Link to={`/article/${_id}`}>{title}</Link></span>
                </div>
                <div className="time">
                    <span>{new Date(time).toDateString()}</span>
                </div>
                <div className="describe">
                    <span>{describe}</span>
                </div>
            </div>
        )
    }
}

export default Article