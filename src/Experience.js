import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
        <div className="item">
            <div className="meta">
                <div className="upper-row">
                    <h3 className="job-title">{this.props.item.title}</h3>
                    <div className="time">{this.props.item.period}</div>
                </div>
                <div className="company"><a href={this.props.item.companyURL} target="_blank">{this.props.item.company}</a></div>
            </div>
            <div className="details">{this.props.item.details}</div>
        </div>
    )
  }
}
