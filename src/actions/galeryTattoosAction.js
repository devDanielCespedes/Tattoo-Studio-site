const styleGalerySelected = 'SELECTED_STYLE_GALERY';

 export default function galeryTattoos(style) {
    return {
        type: styleGalerySelected,
        tattoosGalery: style,
    }
}
