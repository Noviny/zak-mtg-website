// @flow
import React, { Component, Node } from 'react'

const url = name =>
  `http://gatherer.wizards.com/Pages/Search/Default.aspx?name=+[${name
    .split(' ')
    .join(']+[')}]`

export default class Card extends Component {
  render() {
    const { children, name, showFullImage } = this.props

    return <a href={url(name)}>{children || name}</a>
  }
}
