import React, { useEffect, useRef, useState } from 'react'

import './ArtworkListItem.css'

const ArtworkListItem = ({ item, gridContainerRef, handleFavorite }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [itemResized, setItemResized] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const ref = useRef()

  useEffect(() => {
    if (imageLoaded) {
      const rowHeight = parseInt(
        window
          .getComputedStyle(gridContainerRef.current)
          .getPropertyValue('grid-auto-rows')
      )

      const rowGap = parseInt(
        window
          .getComputedStyle(gridContainerRef.current)
          .getPropertyValue('grid-row-gap')
      )

      const item = ref.current

      const rowSpan = Math.ceil(
        (item.querySelector('.content').getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      )

      item.style.gridRowEnd = 'span ' + rowSpan

      setTimeout(() => {
        setItemResized(true)
      }, 600)
    }
  }, [gridContainerRef, imageLoaded])

  useEffect(() => {
    handleFavorite(isActive, item)
  }, [isActive])

  const { images, title, people, classification, id } = item

  return (
    <div
      ref={ref}
      className={itemResized ? 'gallery-item show' : 'gallery-item'}
      id={id}
    >
      <div className="content">
        <img
          src={images[0].baseimageurl}
          onLoad={() => setImageLoaded(true)}
          alt=""
        />

        <div className="gallery-item-info">
          {people && (
            <div className="item-people">
              {people.map((person) => (
                <div key={person.personid}>{person.displayname}</div>
              ))}
            </div>
          )}
          {title && <div className="item-title">{title}</div>}
          {classification && (
            <span className="item-classification">{classification}</span>
          )}
        </div>
      </div>
      <div>
        <button
          className={isActive ? 'fav-button-active' : 'fav-button-inactive'}
          key={item.objectid}
          onClick={async () => setIsActive(!isActive)}
        ></button>
      </div>
    </div>
  )
}

export default ArtworkListItem
