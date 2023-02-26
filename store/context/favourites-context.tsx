import React, { createContext, ReactNode, useState } from "react";

interface FavouritesContextType {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
}

export const FavouritesContext = createContext<FavouritesContextType>({
  ids: [],
  addFavourite: (id: string) => null,
  removeFavourite: (id: string) => null,
});

const FavouritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState<string[]>([]);

  function addFavourite(id: string) {
    setFavouriteMealIds((prev) => [...prev, id]);
  }

  function removeFavourite(id: string) {
    setFavouriteMealIds((prev) => prev.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite,
    removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
