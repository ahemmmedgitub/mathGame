import './index.css'

const EachImage = props => {
  const {eachImgList, onChangeImg} = props
  const {imageUrl, thumbnailUrl, id} = eachImgList

  const changeImage = () => {
    onChangeImg(id)
  }

  return (
    <li className="list-img-container">
      <button type="button" onClick={changeImage} className="img-btn">
        <img src={thumbnailUrl} alt="thumbnail" className="each-img" />
      </button>
    </li>
  )
}
export default EachImage
