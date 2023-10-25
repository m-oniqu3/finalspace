"use client";

import { Character } from "@/types";
import { createContext, useContext, useReducer } from "react";

interface IFavouritesContext {
  state: Favourites;
  dispatch: React.Dispatch<Action>;
}

const FavouritesContext = createContext<IFavouritesContext | null>(null);

interface Props {
  children: React.ReactNode;
}

interface Favourites {
  characters: Character[];
}

enum ActionTypes {
  add_to_favourites = "add_to_favourites",
}

interface Action {
  type: ActionTypes;
  payload: Character;
}

function reducer(state: Favourites, action: Action) {
  // ...

  const { type } = action;

  switch (type) {
    case ActionTypes.add_to_favourites:
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };

    default:
      return state;
  }
}

export default function FavouritesContextProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, { characters: [] });

  const values = {
    state,
    dispatch,
  };

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
