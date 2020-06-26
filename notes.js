// User can create a note - How to persist a list of them - use stringify/parse to put array into localStorage - DONE
// User can edit a note
// User can delete a note
// When closing the browser window the notes will be stored and when the User returns, the data will be retrieved
const notes = JSON.parse(window.localStorage.getItem('notes')) || [];

document.addEventListener("DOMContentLoaded", () => {
  if (notes !== []) {
    console.log(notes);
  }
});

const createNote = () => {
  let text = document.getElementById("note-text").value;
  notes.push(text);
  window.localStorage.setItem("notes", JSON.stringify(notes));
};



