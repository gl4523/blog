import React, {Component} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import Introduce from './components/introduce'
import Article from './components/article'
import Logo from '../../components/Logo'
import BottomNav from '../../components/BottomNav'
import {ServerUrl} from '../../const'
import axios from 'axios'
import { ArticleItemType } from '../browse'
import './index.scss'
interface IHome {
    state: {
        list: ArticleItemType[]
    }
}
class HomePage extends Component<RouteComponentProps, IHome["state"]> {
    private _sourceToken: {token, cancel}
    constructor(props) {
        super(props)
        this.state = {list: []}
    }

    componentDidMount() {
        this.fetchData()
        document.title = "Gump Blog"
    }

    componentWillUnmount() {
        this.getRequestCancelTag().cancel()
    }

    render() {
        const {list = []} = this.state
        return (
            <div className="home-page-container">
                <div className="title-container">
                    <Logo />
                </div>
                <div className="introduce-comp-container">
                    <Introduce />
                </div>
                <div className="articles-list">
                    {list.length ? list.map(item => <Article key={item._id} _id={item._id} time={item.time} title={item.title} describe={item.describe} />) : null}
                </div>
                <div className="bottom-container">
                    <BottomNav />
                </div>
            </div>
        )
    }

    /**
     * 获取列表数据
     */
    fetchData = async () => {
        const url = `${ServerUrl}/blog/list`
        try {
            const res = await axios.get(url, {
                cancelToken: this.getRequestCancelTag().token
            })
            const {code, data} = res.data
            !code && this.setState(preState => {
                return {
                    list: [...data]
                }
            })
        } catch (e) {
            // TODO
        }
        
    }

    /**
     * 获取请求取消Token
     */
    getRequestCancelTag = (): {token, cancel} => {
        if (!this._sourceToken) {
            this._sourceToken = axios.CancelToken.source()
        } 
        return this._sourceToken
    }
}

export default HomePage