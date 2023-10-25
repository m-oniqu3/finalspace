export enum ActionTypes {
  add_to_characters = "add_to_characters",
}

interface CardData {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  url: string;
  link: string;
  created_at: number;
}

export interface Action {
  type: ActionTypes;
  payload: CardData;
}

export interface State {
  characters: { [key: string]: CardData };
}

function reducer(state: State, action: Action) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.add_to_characters:
      const characters = Object.assign({}, state.characters);

      if (characters[payload.id]) {
        delete characters[payload.id];
      } else {
        characters[payload.id] = payload;
      }

      //return the new state
      return Object.assign({}, state, { characters });

    default:
      return state;
  }
}

export default reducer;
