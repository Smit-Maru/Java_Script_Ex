"use strict";
const API_URL = "http://localhost:3000/students";
const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");
const studentList = document.getElementById("studentList");
// GET STUDENTS
function GetStudent() {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
        studentList.innerHTML = "";
        data.forEach((student) => {
            const studentDiv = document.createElement("div");
            const name = document.createElement("h3");
            const age = document.createElement("p");
            const course = document.createElement("p");
            const deleteBtn = document.createElement("button");
            const updateBtn = document.createElement("button");
            const hr = document.createElement("hr");
            name.textContent = student.name;
            age.textContent = `Age: ${student.age}`;
            course.textContent = `Course: ${student.course}`;
            deleteBtn.textContent = "Delete";
            updateBtn.textContent = "Update";
            deleteBtn.addEventListener("click", () => {
                if (student.id) {
                    DeleteStudent(student.id);
                }
            });
            updateBtn.addEventListener("click", () => {
                if (student.id) {
                    UpdateStudent(student.id);
                }
            });
            studentDiv.append(name);
            studentDiv.append(age);
            studentDiv.append(course);
            studentDiv.append(deleteBtn);
            studentDiv.append(updateBtn);
            studentDiv.append(hr);
            studentList.append(studentDiv);
        });
    })
        .catch((error) => console.log(error));
}
// ADD STUDENT
function AddStudent(event) {
    event.preventDefault();
    const student = {
        name: nameInput.value,
        age: Number(ageInput.value),
        course: courseInput.value
    };
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then((response) => response.json())
        .then((data) => {
        console.log("Added:", data);
        form.reset();
        GetStudent();
    })
        .catch((error) => console.log(error));
}
// DELETE STUDENT
function DeleteStudent(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
        .then((response) => {
        if (response.ok) {
            alert("Student Deleted");
            GetStudent();
        }
    })
        .catch((error) => alert(String(error)));
}
// UPDATE STUDENT
function UpdateStudent(id) {
    const name = prompt("Enter new name:");
    const age = prompt("Enter new age:");
    const course = prompt("Enter new course:");
    const updatedStudent = {
        name: name ?? "",
        age: Number(age),
        course: course ?? ""
    };
    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedStudent)
    })
        .then((response) => response.json())
        .then((data) => {
        console.log("Updated Data:", data);
        GetStudent();
    })
        .catch((error) => console.log(error));
}
form.addEventListener("submit", AddStudent);
// INITIAL GET REQUEST
GetStudent();
// DIVIDE FUNCTION
function Div(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        const ans = a / b;
        console.log(ans);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
        }
    }
}
Div(10, 0);
