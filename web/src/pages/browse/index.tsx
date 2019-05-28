import React, {Component} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import ReactMarkDown from 'react-markdown'
import Logo from '../../components/Logo'
import axios from 'axios'
interface IBrowse {
    state: {
        article?: {
            _id: number,
            time: number,
            content: string,
            title: string,
            describe: string
        }
    }
}
class BrowsePage extends Component<RouteComponentProps<{id: string}>, IBrowse["state"]> {
    private _cancelToken
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.fetchData()
    }

    componentWillUnmount() {
        this._cancelToken && this._cancelToken("Operation canceled by the user")
    }

    render() {
        const {article} = this.state
        return (
            <div className="browse-container">
                <div className="title-container">
                    <Logo />
                </div>
                <div className="md-body">
                    {article && <ReactMarkDown source={article.content} />}
                </div>
            </div>
        )
    }

    /**
     * 获取数据
     */
    fetchData() {
        const {id} = this.props.match.params
        const url = 'http://localhost:8085/blog/article/5cece5a437689e1a0c986fdd'
        const {cancel, token} = axios.CancelToken.source()
        this._cancelToken = cancel
        axios.get(url, {
            cancelToken: token
        }).then(res => {
            const {code, data} = res.data
            if (code) {
                // TODO
            } else {
                this.setState({
                    article: data
                })
            }
        }).catch(console.log)
    }
}

export default BrowsePage