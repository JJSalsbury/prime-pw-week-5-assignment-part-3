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

console.log( 'Adding 6 albums to my collection:' );
console.log( 'ADD TO COLLECTION:', addToCollection('Sittin On The Dock of the Bay', 'Otis Redding', 1968));
console.log( 'ADD TO COLLECTION:', addToCollection('Hurt', 'Nine Inch Nails', 1995));
console.log( 'ADD TO COLLECTION:', addToCollection('Come and Get Your Love', 'Redbone', 1973));
console.log( 'ADD TO COLLECTION:', addToCollection('Bring It On Home To Me', 'Sam Cooke', 1962));
console.log( 'ADD TO COLLECTION:', addToCollection('Try a Little Tenderness', 'Otis Redding', 1966));
console.log( 'ADD TO COLLECTION:', addToCollection('Hush', 'Deep Purple', 1968));
console.log( 'COLLECTION ARRAY: Test- (number of albums in collection):', collection );

function showCollection ( array ) {
  console.log( 'SHOW COLLECTION:  Test- (albums in collection):', array.length );
  for (let i = 0; i < array.length; i++) {
    console.log( array[i].title, "by", array[i].artist, "published in", array[i].yearPublished );
  }
}

showCollection( collection );

function findByArtist ( artist ) {
  let artistName = [];
  for (let i = 0; i < collection.length; i++) {
    if (artist === collection[i].artist) {
      artistName.push(collection[i]);
    }
  }
  return artistName;
}
console.log('FIND BY ARTIST: Test- (search Otis Redding, should log 2 results):', findByArtist('Otis Redding'));
console.log('FIND BY ARTIST: Test- (search Ray Charles, should log empty array):', findByArtist('Ray Charles'));
console.log('FIND BY ARTIST: Test- (search Redbone, should log 1 result):', findByArtist('Redbone'));

function search ( searchObject ) {
  let searchCollection = [];

  if ( ('artist' in searchObject) && ('year' in searchObject) ) {
    for (let i = 0; i < collection.length; i++) {
      if (searchObject.artist === collection[i].artist && searchObject.year === collection[i].yearPublished) {
        searchCollection.push(searchObject);
        }
      }
      return searchCollection;
    }
    return collection;
  }

test1 = {
  artist: 'Ray Charles',
  year: 1957 }

console.log('SEARCH: Test- (search Ray Charles by artist and year search criteria, should log empty array):', search(test1));

test2 = {
  artist: 'Otis Redding',
  year: 1966 }

console.log('SEARCH: Test- (search Otis Redding by artist and year search criteria, should log 1 results):', search(test2));
