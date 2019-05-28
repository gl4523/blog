import React, {Component} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import Logo from '../../components/Logo'
class BrowsePage extends Component<RouteComponentProps<{id: string}>> {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const {id} = this.props.match.params
    }

    render() {
        console.log(this.props)
        return (
            <div className="browse-container">
                <div className="title-container">
                    <Logo />
                </div>
                <div className="md-body">
                    
                </div>
            </div>
        )
    }
}

export default BrowsePage