import React, {Component} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import marked from 'marked'
import hljs from 'highlight.js'
import Logo from '../../components/Logo'
import {ServerUrl} from '../../const'
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import 'highlight.js/styles/mono-blue.css'

export type ArticleItemType = {
    _id: string,
    time: number,
    content: string,
    title: string,
    describe: string
}
interface IBrowse {
    state: {
        article?: ArticleItemType
    }
}
// @setTitle("blog title")
class BrowsePage extends Component<RouteComponentProps<{id: string}>, IBrowse["state"]> {
    private _cancelToken: {token, cancel}
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        nprogress.start()
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value
        })
    }

    componentDidMount() {
        this.fetchData()
        nprogress.inc(0.7)
    }

    componentWillUnmount() {
        this.getRequestCancelTag().cancel()
    }

    componentWillUpdate(nextProps, nextState) {
        const {article = {}} = nextState
        document.title = article.title || ""
    }

    render() {
        const {article} = this.state
        return (
            <div className="browse-container">
                <div className="title-container">
                    <Logo />
                </div>
                <div className="markdown-body">
                    {article && <div dangerouslySetInnerHTML={{__html: marked(article.content)}} />}
                </div>
            </div>
        )
    }

    /**
     * 获取数据
     */
    fetchData() {
        const {id} = this.props.match.params
        const url = `${ServerUrl}/blog/article/${id}`
        axios.get(url, {
            cancelToken: this.getRequestCancelTag().token
        }).then(res => {
            nprogress.done()
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