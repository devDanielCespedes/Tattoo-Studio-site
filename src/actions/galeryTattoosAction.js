const styleGalerySelected = 'SELECTED_STYLE_GALERY';

 export default function galeryTattoosAction(arrTattoosStyle, aboutStyle, styleFeatures, specialt) {
    return {
        type: styleGalerySelected,
        tattoosGalery: arrTattoosStyle,
        aboutStyle,
        styleFeatures,
        specialt,
    }
}
