import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (
      <div class="container">
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <div class="form-group col-sm-4 pt-10">
            <label for="msg">Message:</label>
            <input type="text" class="form-control" id="msg" placeholder="Enter your message.." name="msg" 
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}
            />
        </div>
        <div class="form-group pt-35">
           <button type="submit" class="btn btn-primary">Send</button>
        </div>
      </form>
      </div>
    )
  }
}

export default ChatInput
