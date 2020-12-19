const styleGalerySelected = 'SELECTED_STYLE_GALERY';

 export default function galeryTattoos(arrTattoosStyle) {
    return {
        type: styleGalerySelected,
        tattoosGalery: arrTattoosStyle,
    }
}
