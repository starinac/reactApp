import React, {Component} from 'react'


class Nav extends Component {

  render() {

    return (
        <ul class="menu">
        <li class="first" title="Landing"><a href="/" class="home">home</a></li>
        <li class="second" title="To-Do"><a href="/todo" class="fa fa-th-list">instructions</a></li>
      </ul>
    )
  }
}


export default Nav;