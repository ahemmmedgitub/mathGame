import './index.css'

const MainImg = props => {
  const {image} = props
  const {imageUrl} = image

  return (
    <div className="Img-container">
      <img src={imageUrl} alt="match" className="main-Img" />
    </div>
  )
}
export default MainImg
