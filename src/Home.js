import React, { Component } from 'react'

export default class Home extends Component {
constructor() {
    super();
    this.state = {
        name: 'Nick',
        age: 25
    }
}

  render() {
    return (
      <div>Home</div>
    )
  }
}
