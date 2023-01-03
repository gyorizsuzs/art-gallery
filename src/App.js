import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { addDoc, collection, DocumentReference } from "firebase/firestore";
import { db } from "./components/authentication/firebase/Firebase";

import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Artwork from "./components/artwork/Artwork";
import ArtworkList from "./components/artwork-list/ArtworkList";
import Authentication from "./components/authentication/auth-component/Authentication";
import NotFoundPage from "./components/notfoundpage/NotFoundPage";

import "./App.css";

const App = () => {
  const [favoriteGallery, setFavoriteGallery] = useState([]);

  const addFireBase = () => {
    const favsCollRef = collection(db, "favorites");
    addDoc(favsCollRef, { favoriteGallery })
      .then((response) => {
        console.log(response.firestore._authCredentials.currentUser.uid);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFavorite = (isActive, item) => {
    if (isActive) {
      setFavoriteGallery(favoriteGallery.concat(item));
      addFireBase();
    } else {
      setFavoriteGallery(favoriteGallery.filter((fav) => item.id !== fav.id));
    }
  };

  return (
    <div>
      <Navigation />
      <div
        style={{ maxWidth: "1800px", marginTop: "70px", marginInline: "auto" }}
      >
        <Routes>
          <Route path="/artworks/:id" element={<Artwork />} />
          <Route
            path="/artworks"
            element={<ArtworkList handleFavorite={handleFavorite} />}
          />
          <Route
            path="/favorites"
            element={
              <ArtworkList
                favoriteGallery={favoriteGallery}
                handleFavorite={handleFavorite}
              />
            }
          />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
