import artistsData from "../artistsData";

const INITIAL_STATE = {
  tattoosGalery: artistsData[0].tattoosGalery,
  aboutStyle: artistsData[0].aboutStyle,
  styleFeatures: artistsData[0].styleFeatures,
};

function galeryTattoosReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SELECTED_STYLE_GALERY":
      return {
        tattoosGalery: action.tattoosGalery,
        aboutStyle: action.aboutStyle,
        styleFeatures: action.styleFeatures,
      };
    default:
      return state;
  }
}

export default galeryTattoosReducer;
