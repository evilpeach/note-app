console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
  try {
    let noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNotes = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  }
  let duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

let getAll = () => {
  // console.log('Getting All Notes');
  return fetchNotes();
}

let getNote = (title) => {
  // console.log('Reading Note: ', title);
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
}

let removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);  
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
}

let logNote = (note) => {
  debugger;
  console.log('-----');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNotes,
  getAll,
  getNote,
  removeNote,
  logNote
}

// ES6
// export function addNotes() {
//   console.log('Add notes');
//   return 'New Notes'
// }

// export function add(a, b) {
//   return a + b;
// }