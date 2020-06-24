// User can create a note
// User can edit a note
// User can delete a note
// When closing the browser window the notes will be stored and when the User returns, the data will be retrieved

const createNote = (text) => {
  localStorage.setItem("note": text);
}


