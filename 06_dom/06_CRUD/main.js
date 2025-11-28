
// Array to store records
let users = [];

// Selected ID for update
let updateId = null;
let id = 1;

// DOM Elements
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const tableBody = document.getElementById("table-body");

//Create User
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (name === "" || age === "") return alert("Enter valid data!");

  const newUser = {
    id: id,
    name,
    age,
  };

        users.push(newUser);
        id++;
  nameInput.value = "";
  ageInput.value = "";

  renderTable();
});

//Render Table
function renderTable() {
  tableBody.innerHTML = "";

  users.forEach((u) => {
    tableBody.innerHTML += `
      <tr>
        <td>${u.id}</td>
        <td>${u.name}</td>
        <td>${u.age}</td>
        <td>
          <button onclick="editUser(${u.id})">Edit</button>
          <button onclick="deleteUser(${u.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// ======================================================================
// UPDATE
// ======================================================================
function editUser(id) {
  const user = users.find((u) => u.id === id);

  nameInput.value = user.name;
  ageInput.value = user.age;

  updateId = id;
  addBtn.style.display = "none";
  updateBtn.style.display = "inline-block";
}

updateBtn.addEventListener("click", () => {
  const user = users.find((u) => u.id === updateId);

  user.name = nameInput.value;
  user.age = ageInput.value;

  updateBtn.style.display = "none";
  addBtn.style.display = "inline-block";
  nameInput.value = "";
  ageInput.value = "";

  updateId = null;
  renderTable();
});

// ======================================================================
// DELETE
// ======================================================================
function deleteUser(id) {
  users = users.filter((u) => u.id !== id);
  renderTable();
}

// Initial render For First Render
renderTable();
