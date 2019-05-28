import React from 'react'
const HeadImg = require('../../../../assets/img/head.png')
import './index.scss'

export default function (props) {
    return (
        <div className="introduce-container">
            <img src={HeadImg} className="head-img"/>
            <span className="introduce">
                学如逆水行舟，不进则退。一入前端深似海
            </span>
        </div>
    )
}