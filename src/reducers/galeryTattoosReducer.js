import artistsData from "../artistsData";

const INITIAL_STATE = {
  tattoosGalery: artistsData[0].tattoosGalery,
};

function galeryTattoosReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SELECTED_STYLE_GALERY":
      return {
        tattoosGalery: action.selectedStyle,
      };
    default:
      return state;
  }
}

export default galeryTattoosReducer;
