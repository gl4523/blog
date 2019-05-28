import React, {Component} from 'react'
import Introduce from './components/introduce'
import Article from './components/article'
import Logo from '../../components/Logo'
import './index.scss'

class HomePage extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="home-page-container">
                <div className="title-container">
                    <Logo />
                </div>
                <div className="introduce-comp-container">
                    <Introduce />
                </div>
                <div className="articles-list">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>
            </div>
        )
    }
}

export default HomePage