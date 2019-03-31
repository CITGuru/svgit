import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import styles from './styles.css'

export default class SVGIT extends Component {
  static propTypes = {
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string,
    title: PropTypes.string
  }
  processSVG(e) {
    var parser = new window.DOMParser()
    var doc = parser.parseFromString(e, 'image/svg+xml')
    var svgElem = doc.querySelector('svg')
    if (this.props.width) svgElem.setAttribute('width', this.props.width + 'px')
    if (this.props.height) svgElem.setAttribute('height', this.props.height + 'px')
    if (this.props.fill) svgElem.setAttribute('fill', this.props.fill + 'px')
    if (this.props.title) {
      var titleElem = svgElem.querySelector('title')
      if (titleElem) {
        titleElem.innerHTML = this.props.title
      } else {
        titleElem = document.createElement('title')
        titleElem.innerHTML = this.props.title
      }
      console.log(titleElem)
    }
    return svgElem.outerHTML
  }
  render() {
    const {
      src
    } = this.props

    return (
      <SVG
        src={src}
        // eslint-disable-next-line react/jsx-no-bind
        processSVG={this.processSVG.bind(this)}
      >
        <img src={src} alt='source' />
      </SVG>
    )
  }
}
