// User can create a note - How to persist a list of them - use stringify/parse to put array into localStorage - DONE
// User can edit a note
// User can delete a note
// When closing the browser window the notes will be stored and when the User returns, the data will be retrieved
const notes = JSON.parse(window.localStorage.getItem('notes')) || [];

document.addEventListener("DOMContentLoaded", () => {
  if (notes !== []) {
    const list = document.getElementsByTagName("ul")[0];
    notes.map((note, index) => {
      let listItem = document.createElement("li");
      let editBtn = document.createElement("button");
      editBtn.innerHTML = "Edit";
      editBtn.id = index;
      editBtn.setAttribute("onclick", "editNote(event, this.id)");
      listItem.innerHTML = note;
      listItem.appendChild(editBtn);
      list.appendChild(listItem);
    });
  }
});

const createNote = () => {
  let text = document.getElementById("note-text").value;
  notes.push(text);
  window.localStorage.setItem("notes", JSON.stringify(notes));
};

const editNote = (event, id) => {
  // retrieve index of current text in list
  // change that index to hold newText
  console.log(id);
  let index = Number(id);
  let li = document.getElementById(index);
  let inputBox = document.createElement("input");
  inputBox.type = "text";
  li.appendChild(inputBox);
  let submit = document.createElement("button");
  submit.innerHTML = "Submit";
  inputBox.appendChild(submit);
};



