import './index.css'

const HistoryItem = props => {
  const {historyDetails, deletedList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeletedList = () => {
    deletedList(id)
  }

  return (
    <li className="list-item">
      <div className="time-appinfo-class">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="appinfo-class">
          <img src={logoUrl} alt="domain logo" className="logo-img" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        className="buton"
        onClick={onDeletedList}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
