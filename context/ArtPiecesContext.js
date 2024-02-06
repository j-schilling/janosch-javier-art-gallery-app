import React, { createContext, useContext, useState } from "react";

const ArtPiecesContext = createContext();

export const useArtPieces = () => useContext(ArtPiecesContext);

export const ArtPiecesProvider = ({ children }) => {
  const [artPiecesInfo, setArtPiecesInfo] = useState({});

  const toggleFavorite = (artPiece) => {
    const { slug } = artPiece;
    setArtPiecesInfo((currentInfo) => ({
      ...currentInfo,
      [slug]: {
        ...artPiece,
        ...currentInfo[slug],
        isFavorite: !currentInfo[slug]?.isFavorite,
      },
    }));
  };

  return (
    <ArtPiecesContext.Provider value={{ artPiecesInfo, toggleFavorite }}>
      {children}
    </ArtPiecesContext.Provider>
  );
};
