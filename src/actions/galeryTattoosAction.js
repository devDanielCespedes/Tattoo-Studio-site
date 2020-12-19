const styleGalerySelected = 'SELECTED_STYLE_GALERY';

 export default function galeryTattoosAction(arrTattoosStyle) {
    return {
        type: styleGalerySelected,
        tattoosGalery: arrTattoosStyle,
    }
}
