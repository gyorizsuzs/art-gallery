import React, { useState, useRef } from 'react'
import { Navigate } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'

import Search from '../search/Search'
import ArtworkListItem from './artwork-list-item/ArtworkListItem'
import './ArtworkList.css'

const ArtworkList = (props) => {
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState('')
  const { loading, error, info, records } = useFetch(page, keyword)
  const gridContainerRef = useRef(null)

  const handleFavorite = props.handleFavorite
  const favoriteGallery = props.favoriteGallery

  if (favoriteGallery) {
    console.log('Hello WOrld')
  }

  const handleSearch = (keyword) => {
    setKeyword(keyword)
    setPage(0)
  }

  if (error) {
    return <Navigate replace to="/404" />
  }

  return (
    <div className="gallery-list-page">
      <Search info={info} handleSearch={handleSearch} />
      <div ref={gridContainerRef} className="gallery-grid-container">
        {favoriteGallery
          ? favoriteGallery.map((item) => (
              <ArtworkListItem
                key={item.objectid}
                item={item}
                gridContainerRef={gridContainerRef}
                handleFavorite={handleFavorite}
              />
            ))
          : records.map((item) => (
              <ArtworkListItem
                key={item.objectid}
                item={item}
                gridContainerRef={gridContainerRef}
                handleFavorite={handleFavorite}
              />
            ))}
      </div>

      {loading && (
        <div className="lds-ring-container">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      <div className="load-button-container">
        <button className="load-button" onClick={() => setPage(page + 1)}>
          Load more
        </button>
      </div>
    </div>
  )
}

export default ArtworkList
