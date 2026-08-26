const URL = "http://localhost:3000/students";

const form = document.getElementById("studentForm");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");

const studentList = document.getElementById("studentList");

function GetStudent() {

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            studentList.innerHTML = "";
            data.forEach(student => {
                studentList.innerHTML += `
                    <div>
                        <h3>${student.name}</h3>
                        <p>Age: ${student.age}</p>
                        <p>Course: ${student.course}</p>
                        <button onclick="DeleteStudent('${student.id}')">
                            Delete
                        </button>
                        <button onclick="UpdateStudent('${student.id}')">
                            Update
                        </button>
                        <hr>
                    </div>
                `;
            });
        })
        .catch(error => console.log(error));
}

function AddStudent(event) {
    event.preventDefault();
    const student = {
        name: nameInput.value,
        age: Number(ageInput.value),
        course: courseInput.value
    };
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Added:", data);
        form.reset();
        GetStudent();
    })
    .catch(error => console.log(error));
}

function DeleteStudent(id){
  console.log("This Call");
  
  console.log("Delete ID",id);
  
  fetch(`${URL}/${id}`,{
    method:"DELETE"
  })
  .then(response => {
    if(response.ok){
      alert("Student Delete")
      GetStudent();
    }
  }).catch(error => alert(error))
}

function UpdateStudent(id){
  const name = prompt("Enter new name : ")
  const age = prompt("Enter new age:");
  const course = prompt("Enter new course:");
  const updatedStudent = {
    name : name,
    age : age,
    course : course
  };

  fetch(`${URL}/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedStudent)
  })
  .then(response => response.json())
  .then(data => {
    console.log("Updated Data",data);
    GetStudent();
  })
  .catch(error => console.log(error));
}

form.addEventListener("submit", AddStudent);

GetStudent();