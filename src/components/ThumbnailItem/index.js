// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachList, changeState} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = eachList
  const onButtonClick = () => {
    changeState(imageUrl, imageAltText)
  }
  return (
    <li className="list">
      <button className="button" type="button" onClick={onButtonClick}>
        <img
          src={thumbnailUrl}
          className="thumbnailurl"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
