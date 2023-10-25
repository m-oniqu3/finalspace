"use client";

import reducer, { Action, State } from "@/contexts/reducer";
import { createContext, useContext, useReducer } from "react";

interface IFavouritesContext {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const FavouritesContext = createContext<IFavouritesContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function FavouritesContextProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, {
    characters: {},
  });

  const values = { state, dispatch };

  console.log(state);

  return (
    <FavouritesContext.Provider value={values}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export function useFavouriteContext() {
  const context = useContext(FavouritesContext);
  if (context === null) {
    throw new Error(
      "useFavouriteContext must be used within the FavouritesContextProvider"
    );
  }
  return context;
}
