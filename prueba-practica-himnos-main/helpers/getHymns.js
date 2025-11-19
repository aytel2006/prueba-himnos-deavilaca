/*
    Esta función obtiene la lista de los himnos por idioma usando un API no documentada de la Iglesia, 
    el idioma se refiere al código de 3 letras minúsculas de cada idioma, ejemplo eng,spa,fra,por
    el arrelgo resultante contiene objetos de la forma: {songNumber, Title, urlAccompaniment, urlVocalCongregation}
    donde los últimos dos atributos corresponden a las url del audio de "sólo música" y "música con voces"
*/
export const getHymnsByLang = async (lang) => {
  const urlApi = `https://www.churchofjesuschrist.org/media/music/api?type=songsFilteredList&lang=${lang}&identifier=%7B%22lang%22%3A%22${lang}%22%2C%22limit%22%3A500%2C%22offset%22%3A0%2C%22orderByKey%22%3A%5B%22bookSongPosition%22%5D%2C%22bookQueryList%22%3A%5B%22hymns%22%5D%7D&batchSize=20`;
  const response = await fetch(urlApi);
  if (response.ok) {
    let d = await response.json();
    return d.data.map((r) => ({
      songNumber: r.songNumber,
      title: r.title,
      urlAccompaniment: r.assets.find(
        (s) => s.assetType === "AUDIO_ACCOMPANIMENT",
      )?.distributionUrl,
      urlVocalCongregation: r.assets.find(
        (t) => t.assetType === "AUDIO_VOCAL_CONGREGATION",
      )?.distributionUrl,
    }));
  }
};
