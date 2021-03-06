import React from 'react';
import NavLink from './NavLink';
import { browserHistory } from 'react-router';

class Repos extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repos/${userName}/${repo}`;
    browserHistory.push(path);
  }

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName" /> / {' '}
              <input type="text" placeholder="repo" /> / {' '}
              <button type="sumbit">Go</button>
            </form>
          </li>
          { this.props.children }
        </ul>
      </div>
    )
  }
}

export default Repos;
