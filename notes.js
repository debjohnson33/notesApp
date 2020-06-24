// User can create a note - How to persist a list of them?
// User can edit a note
// User can delete a note
// When closing the browser window the notes will be stored and when the User returns, the data will be retrieved

const createNote = () => {
  let text = document.getElementById("note-text").value;

  window.localStorage.setItem("note", text);
};


