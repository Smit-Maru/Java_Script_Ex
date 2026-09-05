const API_URL: string = "http://localhost:3000/students";

interface Student {
    id?: string;
    name: string;
    age: number;
    course: string;
}

const form = document.getElementById("studentForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const courseInput = document.getElementById("course") as HTMLInputElement;
const studentList = document.getElementById("studentList") as HTMLDivElement;

// GET STUDENTS
function GetStudent(): void {
    fetch(API_URL)
        .then((response: Response) => response.json())
        .then((data: Student[]) => {
            studentList.innerHTML = "";
            data.forEach((student: Student): void => {
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

                deleteBtn.addEventListener("click", (): void => {
                    if (student.id) {
                        DeleteStudent(student.id);
                    }
                });

                updateBtn.addEventListener("click", (): void => {
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
        .catch((error: unknown) => console.log(error));
}

// ADD STUDENT
function AddStudent(event: SubmitEvent): void {
    event.preventDefault();

    const student: Omit<Student, "id"> = {
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
        .then((response: Response) => response.json())
        .then((data: Student) => {
            console.log("Added:", data);
            form.reset();
            GetStudent();
        })
        .catch((error: unknown) => console.log(error));
}

// DELETE STUDENT
function DeleteStudent(id: string): void {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
        .then((response: Response) => {
            if (response.ok) {
                alert("Student Deleted");
                GetStudent();
            }
        })
        .catch((error: unknown) => alert(String(error)));
}

// UPDATE STUDENT
function UpdateStudent(id: string): void {
    const name: string | null = prompt("Enter new name:");
    const age: string | null = prompt("Enter new age:");
    const course: string | null = prompt("Enter new course:");

    const updatedStudent: Omit<Student, "id"> = {
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
        .then((response: Response) => response.json())
        .then((data: Student) => {
            console.log("Updated Data:", data);
            GetStudent();
        })
        .catch((error: unknown) => console.log(error));
}

form.addEventListener("submit", AddStudent);

// INITIAL GET REQUEST
GetStudent();

// DIVIDE FUNCTION
function Div(a: number, b: number): void {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        const ans: number = a / b;
        console.log(ans);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
        }
    }
}

Div(10, 0);