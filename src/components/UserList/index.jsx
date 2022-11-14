import React, { Component } from 'react';
import User from '../User';

class UserList extends Component {
  state = {
    users: [
      { id: 1, name: 'Bob', lastname: 'Bobovich', isLike: false },
      { id: 2, name: 'Rob', lastname: 'Robovich', isLike: false },
      { id: 3, name: 'Test', lastname: 'Testovich', isLike: false },
      { id: 4, name: 'Task', lastname: 'Taskovich', isLike: false },
    ],
  };
  handleLike = (userId) => {
    this.setState({
      users: this.state.users.map((user) => {
        return {
          ...user,
          isLike: userId === user.id ? true : user.isLike,
        };
      }),
    });
  };
  handleDelete = (userId) => {
    this.setState({
      users: this.state.users.filter((user) => userId !== user.id),
    });
  };
  render() {
    const list = this.state.users.map(({ id, name, lastname, isLike }) => (
      <li key={id}>
        <User
          id={id}
          name={name}
          lastname={lastname}
          isLike={isLike}
          handleLike={this.handleLike}
          handleDelete={this.handleDelete}
        />
      </li>
    ));
    return (
      <article>
        <h1>Users:</h1>
        <ul>{list}</ul>
      </article>
    );
  }
}

export default UserList;
