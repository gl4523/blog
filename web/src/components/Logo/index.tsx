import React from 'react'
import {Link} from 'react-router-dom'
const LogoImg = require('../../assets/img/logo.png')

export default function(props) {
    return (
        <Link to="/"><img src={LogoImg}></img></Link>
    )
}