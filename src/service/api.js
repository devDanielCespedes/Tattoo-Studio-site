export async function getTattooItensFetch(query) {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?';
    try{
        const url = `${endpoint}=q${query}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        alert(error)
    }
}