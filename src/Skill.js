import React, { Component } from 'react'

export default class Skill extends Component {
  render() {
    return (
        <div className="item">
            <h3 className="level-title">{this.props.item.name}</h3>
            <div className="progress level-bar">
                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: this.props.item.percent}}></div>
            </div>                               
        </div>
    )
  }
}
