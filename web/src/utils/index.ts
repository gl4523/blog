import React from 'react'

/**
 * 装饰器
 * @param WrapComponent 
 */
export function setTitleFromProps(WrapComponent) {
  return class extends React.Component {
    componentDidMount() {
      const {title = ""} = this.props as any
      document.title = title
    }

    render() {
      return React.createElement(WrapComponent, this.props)
    }
  }
}

/**
 * 判断当时是否本地环境
 */
export function isLocal(): boolean {
  return [/127\.0\.0\.1/, /localhost/].some(reg => reg.test(location.hostname))
}