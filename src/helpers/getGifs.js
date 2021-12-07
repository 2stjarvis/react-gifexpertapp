

export const getGifs=async (category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2frctLPG1Vu5KkAGYLPYAWGiyB3il7HJ`;

    const {data}=await (await fetch(url)).json();

    //const {data} =await resp.json();

    const gifs= data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    return gifs;
}