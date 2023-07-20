import './index.css'

const TabItems = props => {
  const {eachTab, clickOnTabItem} = props
  const {displayText, tabId} = eachTab

  const sendTabId = () => {
    clickOnTabItem(tabId)
  }

  return (
    <li className="list-container">
      <button type="button" className="tab-style" onClick={sendTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
