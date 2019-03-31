/* eslint-disable no-redeclare */
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
    title: PropTypes.string,
    selectors: PropTypes.array,
    selector: PropTypes.object,
    preloader: PropTypes.node,
    wrapper: PropTypes.func,
    onLoad: PropTypes.func,
    onError: PropTypes.func,
    className: PropTypes.string
  }
  processSVG(e) {
    this.preProcessSVG(e)
  }
  processSelectors(svg) {
    var svgSelects = svg.querySelectorAll('*')
    if (this.props.selectors) {
      var selectors = this.props.selectors
      for (var s of selectors) {
        var {index, attrs} = s
        var Elem = svgSelects[index]
        for (var _attrs in attrs) {
          Elem.setAttribute(_attrs, attrs[_attrs])
        }
      }
    } else {
      var {index, attrs} = this.props.selector
      var Elem = svgSelects[index]
      for (var _attrs in attrs) {
        Elem.setAttribute(_attrs, attrs[_attrs])
      }
    }
    return svg
  }
  preProcessSVG(e) {
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
    }
    if (this.props.selectors || this.props.selector) svgElem = this.processSelectors(svgElem)
    return svgElem.outerHTML
  }
  render() {
    const {
      src,
      preloader,
      onLoad,
      onError,
      wrapper,
      className
    } = this.props
    const sProps = { preloader, onLoad, onError, wrapper, className }

    return (
      <SVG
        src={src}
        // eslint-disable-next-line react/jsx-no-bind
        processSVG={this.preProcessSVG.bind(this)}
        {...sProps}
      >
        <img src={src} width={this.props.width} height={this.props.height} alt='source' />
      </SVG>
    )
  }
}
