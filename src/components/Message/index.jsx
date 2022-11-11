import React, { Component } from 'react';

class Message extends Component {
  state = {
    isRead: false,
  };

  handleRead = () => {
    const { isRead } = this / this.state;
    this.setState({ isRead: !isRead });
  };
  render() {
    const { author, text } = this.props;
    return (
      <article>
        <h1>Message:</h1>
        <p>
          {author}: <i>"{text}"</i>
        </p>
        <button onClick={this.handleRead} disabled={this.state.isRead}>
          Read
        </button>
      </article>
    );
  }
}

export default Message;
