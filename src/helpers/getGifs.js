export const getGifs = async ( category ) => {

    const baseUrlGifs = 'https://api.giphy.com/v1/gifs/';
    const apiKey = 'N5SS9KbLBisQvDvbuqm8Dtrz2fllSRxn';
    const encodeCategory = `${ encodeURI( category ) }`;

    const resp = await fetch(`${baseUrlGifs}search?q=${ encodeCategory }&api_key=${apiKey}`);
    //Como la resp tiene una data dentro de la constante data, podemos desestructurar obteniendo la data directamente.
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

}