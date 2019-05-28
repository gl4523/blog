import React, {Component} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import ReactMarkDown from 'react-markdown'
import Logo from '../../components/Logo'
import {ServerUrl} from '../../const'
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
    private _cancelToken: {token, cancel}
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.fetchData()
    }

    componentWillUnmount() {
        this.getRequestCancelTag().cancel()
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
        const url = `${ServerUrl}/blog/article/5ced4fd0fafa7c072862dd5f`

        axios.get(url, {
            cancelToken: this.getRequestCancelTag().token
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

    /**
     * 获取请求取消Token
     */
    getRequestCancelTag = (): {token, cancel} => {
        if (!this._cancelToken) {
            this._cancelToken = axios.CancelToken.source()
        }
        return this._cancelToken
    }
}

export default BrowsePage