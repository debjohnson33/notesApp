// User can create a note - How to persist a list of them - use stringify/parse to put array into localStorage - DONE
// User can edit a note - DONE
// User can delete a note - ? Deletes from localStorage but doesn't reload to remove the deleted note
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
      let deleteBtn = document.createElement("button");
      deleteBtn.id = "delete" + index;
      deleteBtn.innerHTML = "Delete Item";
      deleteBtn.onclick = function() {
        deleteNote(event, index);
      }
      listItem.innerHTML = note;
      listItem.appendChild(editBtn);
      listItem.appendChild(deleteBtn);
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
  let index = Number(id);
  const list = document.getElementsByTagName("ul")[0];
  let editForm = document.createElement("form");
  let inputBox = document.createElement("input");
  inputBox.type = "text";
  inputBox.value = notes[index];
  inputBox.id = "newText";
  editForm.appendChild(inputBox);
  let submit = document.createElement("button");
  submit.innerHTML = "Submit Edit";
  submit.onclick = function() {
    submitEdit(event, index);
  }
  editForm.appendChild(submit);
  list.appendChild(editForm);
};

const submitEdit = (event, id) => {
  let newText = document.getElementById("newText").value;
  let index = Number(id);
  notes[index] = newText;
  window.localStorage.setItem("notes", JSON.stringify(notes));
};

const deleteNote = (event, id) => {
  let index = Number(id);
  notes.splice(index, 1);
  window.localStorage.setItem("notes", JSON.stringify(notes));
};

