import {Component} from 'react'
import MainImg from '../mainImage'
import TabItems from '../tabItem'
import EachImage from '../imageList'
import './index.css'

class HomePageApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTabId: 'FRUIT',
      index: 0,
      count: 0,
      time: 60,
    }
  }

  componentDidMount() {
    this.timerId = setInterval(this.thick, 1000)
  }

  thick = () => {
    this.setState(prevState => ({time: prevState.time - 1}))
  }

  getTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  displayScore = () => {
    const {count} = this.state

    return (
      <div className="result-main-container">
        <div className="result-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy-img"
          />
          <p className="your-score">YOUR SCORE</p>
          <p className="final-score">{count}</p>
          <div className="button-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset-logo"
            />
            <button
              type="button"
              className="play-button"
              onClick={this.playAgain}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      </div>
    )
  }

  getDisplayOfPlayGround = () => {
    const {tabsList, imagesList} = this.props
    const filteredList = this.getFilteredImgs()
    const {index} = this.state

    return (
      <div>
        <div className="main-img-container">
          <MainImg
            image={imagesList[index]}
            key={imagesList[0].id}
            getMainId={this.getMainId}
          />
        </div>
        <ul className="tab-item-container">
          {tabsList.map(eachTab => (
            <TabItems
              eachTab={eachTab}
              key={eachTab.tabId}
              clickOnTabItem={this.getTabId}
            />
          ))}
        </ul>
        <div className="images-container">
          <ul className="each-img-container">
            {filteredList.map(eachImgList => (
              <EachImage
                eachImgList={eachImgList}
                key={eachImgList.id}
                onChangeImg={this.onChangeImg}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  getFilteredImgs = () => {
    const {imagesList} = this.props
    const {activeTabId} = this.state

    const filteredData = imagesList.filter(
      eachCart => eachCart.category === activeTabId,
    )
    return filteredData
  }

  onChangeImg = id => {
    const {imagesList} = this.props
    const {index} = this.state
    const randomNumber = Math.ceil(Math.random() * (imagesList.length - 1))

    this.setState({
      index: randomNumber,
    })

    if (imagesList[index].id !== id) {
      this.displayScore()
      clearInterval(this.timerId)
    }
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  playAgain = () => {
    this.setState({
      count: 0,
      activeTabId: 'FRUIT',
      time: 60,
    })
    this.timerId = setInterval(this.thick, 1000)
  }

  gerResult = () => {
    const {time} = this.state

    if (time === 0) {
      return this.displayScore()
    }

    return this.getDisplayOfPlayGround()
  }

  render() {
    const {count, time} = this.state

    if (time === 0) {
      clearInterval(this.timerId)
    }

    return (
      <div className="bg-container">
        <nav className="nav-item-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
            alt="website logo"
            className="website-logo"
          />
          <ul className="score-time-container">
            <p className="score">Score:</p>
            <p className="score">{count}</p>
            <li className="time-timer-logo-container">
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                  alt="timer"
                  className="timer-logo"
                />
              </li>
              <p className="time">{time} sec</p>
            </li>
          </ul>
        </nav>
        {this.gerResult()}
      </div>
    )
  }
}

export default HomePageApp
