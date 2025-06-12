export const getGifs = async (category) => {
  const apiKey = 'xwuy7ZWK67BGNdoj7BbUoHhXIYsP4V3d'; 
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(category)}&limit=10`;

  const resp = await fetch(url);
  if (!resp.ok) throw new Error('Error en la respuesta: ' + resp.status);

  const { data } = await resp.json();

  console.log('Data from Giphy API:', data); // <-- VERIFICAR AQUÍ

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium?.url || '',
  }));

  console.log('Gifs procesados:', gifs); // <-- VERIFICAR AQUÍ

  return gifs;
}
