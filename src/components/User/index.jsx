import React, { Component } from 'react';

class User extends Component {
  render() {
    const { name, lastname, isLike, handleLike, handleDelete, id } = this.props;
    return (
      <>
        <p>
          {name} {lastname}. Like:{isLike ? 1 : 0}
        </p>
        <button onClick={() => handleLike(id)} disabled={isLike}>
          Like
        </button>
        <button onClick={() => handleDelete(id)}>Delete user</button>
      </>
    );
  }
}

export default User;
