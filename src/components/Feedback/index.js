import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {clicked: false}

  onclickthankYou = () => {
    this.setState({clicked: true})
  }

  emojiPage = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="emoji-container">
        <h1 className="feedback-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-container">
          {emojis.map(emoji => (
            <li className="list-item" key={emoji.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onclickthankYou}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <p>{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankyouPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankyou-text">Thank you!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {clicked} = this.state
    return (
      <div className="bg-container">
        {clicked ? this.thankyouPage() : this.emojiPage()}
      </div>
    )
  }
}

export default Feedback
