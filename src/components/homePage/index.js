import {Component} from 'react'
import MainImg from '../mainImage'
import TabItems from '../tabItem'
import EachImage from '../imageList'
import './index.css'

class HomePageApp extends Component {
  state = {
    activeTabId: 'FRUIT',
    index: 0,
    count: 0,
    time: 60,
    winAndPlay: true,
  }

  getTabId = tabId => {
    this.setState({activeTabId: tabId})
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

    if (imagesList[index].id === id) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  getTimeDecrement = () => {
    const {time} = this.state

    let timer = time

    setInterval(() => {
      timer -= 1
      return timer
    }, 1000)
  }

  render() {
    const {tabsList, imagesList} = this.props
    const filteredList = this.getFilteredImgs()
    const {index, count, time, winAndPlay} = this.state

    const displayTimeDecrement = this.getTimeDecrement()

    return (
      <div className="bg-container">
        <nav className="nav-item-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
            alt="website logo"
            className="website-logo"
          />
          <div className="score-time-container">
            <p className="score">Score {count}</p>
            <div className="time-timer-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-logo"
              />
              <p className="time">{time} sec</p>
            </div>
          </div>
        </nav>
        {winAndPlay ? (
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
        ) : (
          <div className="result-main-container">
            <div className="result-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                alt="trophy"
                className="troply-img"
              />
              <p>Your Score {count}</p>
              <div className="button-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                  className="reset-logo"
                />
                <button type="button" className="play-button">
                  PLAY AGAIN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default HomePageApp
