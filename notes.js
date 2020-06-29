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
      deleteBtn.id = index;
      deleteBtn.innerHTML = "Delete Item";
      deleteBtn.setAttribute("onclick", "deleteNote(event, this.id)");
      listItem.innerHTML = note;
      listItem.id = index;
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
  let listItem = document.getElementById(index);
  let p = document.createElement("p");
  p.innerHTML = "Are you sure you want to delete?";
  listItem.appendChild(p);
  let yes = document.createElement("button");
  yes.innerHTML = "Yes";
  yes.id = "yes";
  yes.onclick = function() {
    submitDelete(event, index);
  }
  listItem.appendChild(yes);
  let no = document.createElement("button");
  no.innerHTML = "No";
  no.id = "no";
  no.onclick = function() {
    submitCancel(event, index);
  }
  listItem.appendChild(no);
};

const submitDelete = (event, id) => {
  let index = Number(id);
  notes.splice(index, 1);
  let listItem = document.getElementById(index);
  let p = document.getElementsByTagName("p")[0];
  let yes = document.getElementById("yes");
  let no = document.getElementById("no");
  listItem.remove();
  p.remove();
  yes.remove();
  no.remove();
  window.localStorage.setItem("notes", JSON.stringify(notes));
};

const submitCancel = (event, id) => {
  let p = document.getElementsByTagName("p")[0];
  let yes = document.getElementById("yes");
  let no = document.getElementById("no");
  p.remove();
  yes.remove();
  no.remove();
}

