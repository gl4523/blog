import React from 'react'
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