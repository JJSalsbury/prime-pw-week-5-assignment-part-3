console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished ) {
 title = title;
 artist = artist;
 yearPublished = yearPublished;

let album = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
}

collection.push(album);
  return album;
}

console.log( addToCollection('Sittin On The Dock of the Bay', 'Otis Redding', 1968));
console.log( addToCollection('Hurt', 'Nine Inch Nails', 1995));
console.log( addToCollection('Come and Get Your Love', 'Redbone', 1973));
console.log( addToCollection('Bring It On Home To Me', 'Sam Cooke', 1962));
console.log( addToCollection('Try a Little Tenderness', 'Otis Redding', 1966));
console.log( addToCollection('Hush', 'Deep Purple', 1968));//console log 2
console.log( collection );

function showCollection ( array ) {
  console.log( 'Albums in collection:', array.length );
  for (let i = 0; i < array.length; i++) {
    console.log( array[i].title, "by", array[i].artist, "published in", array[i].yearPublished );
  }
}
showCollection( collection );
