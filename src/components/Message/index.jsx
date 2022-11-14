import React, { Component } from 'react';

class Message extends Component {
  state = {
    isRead: false,
  };

  handleRead = () => {
    this.setState({ isRead: !this.state.isRead });
  };
  render() {
    const { author, text } = this.props;
    const { isRead } = this.state;
    return (
      <article>
        <h1>Message:</h1>
        <p>
          {author}: <i>"{text}"</i>
        </p>
        <button onClick={this.handleRead} disabled={isRead}>
          {isRead ? 'Message is read' : 'Read'}
        </button>
      </article>
    );
  }
}

export default Message;
