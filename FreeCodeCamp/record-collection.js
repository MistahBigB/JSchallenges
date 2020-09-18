// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  // If value is empty (""), delete the given property from the album.
  if (value == '') {
    delete collection[id][prop];
  }
  // If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
  else if (prop != 'tracks' && value != ''){
    collection[id][prop] = value
  }

//if prop == tracks and collection.id doesn't have tracks, make a track array, and add it to that id 
  else if (prop != '' && !collection[id].hasOwnProperty(prop)) {
    collection[id][prop] = [];
    collection[id][prop].push(value)
  }
  //If prop == tracks and value isn't empty, push the value onto the end of the album's existing tracks array.
  else if (prop == 'tracks' && value != ''){
    collection[id][prop].push(value)
  } 
  return collection;
}

updateRecords(5439, "artist", "ABBA");
