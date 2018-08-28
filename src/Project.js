import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
        <div className="item">
            <span className="project-title"><a href="#hook">{this.props.item.name}</a></span> - <span className="project-tagline">{this.props.item.detail}</span>
        </div>
    )
  }
}
