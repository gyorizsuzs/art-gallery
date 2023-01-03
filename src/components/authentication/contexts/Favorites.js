import { createContext, useState, useEffect } from 'react'
/* import FAVOURITES from 'THEFETCHCOMPONENT'; */

export const FavoritesContext = createContext({
    favorites: [],
})

export const FavoritesProvider = ({ children, favoriteGallery }) => {
    return <FavoritesContext.Provider value={favoriteGallery}>{children}</FavoritesContext.Provider>
}

export default FavoritesProvider
