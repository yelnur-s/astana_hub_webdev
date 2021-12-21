let students = [{
        name: "Ziya",
        age: 18,
        gpa: 3.7,
        adress: {
            country: "KZ",
            city: "Almaty"
        },
        decode: true
    },
    {
        name: "Alikhan",
        age: 17,
        gpa: 3.7,
        adress: {
            country: "KZ",
            city: "Almaty"
        },
        decode: true
    },
    {
        name: "Dimash",
        age: 21,
        gpa: 3.8,
        adress: {
            country: "KZ",
            city: "Almaty"
        },
        decode: true
    },
    {
        name: "Askar",
        age: 16,
        gpa: 2,
        adress: {
            country: "RU",
            city: "Moskow"
        },
        decode: false
    },
    {
        name: "Ira",
        age: 35,
        gpa: 2.5,
        adress: {
            country: "RU",
            city: "Piter"
        },
        decode: false
    }
]


const studentsDiv = document.getElementById("students");

function showStudents() {
    studentsDiv.innerHTML = students.map((item, index) =>
        `<div class="students-item">
                <div>${index+1}</div>
                <div>${item.name}</div>
                <div>${item.age}</div>
                <div>${item.gpa}</div>
                <div> <span onclick="editStudent(${index})"> Edit </span> <span onclick="deleteStudent(${index})"> Delete </span> </div>
        </div>`
    ).join('');
}

showStudents()

const name = document.querySelector("#name")
const age = document.querySelector("#age")
const gpa = document.querySelector("#gpa")

function addStudent() {

    students.push({
        name: name.value,
        age: age.value,
        gpa: gpa.value
    })

    name.value = "";
    age.value = "";
    gpa.value = "";

    showStudents();
}


function deleteStudent(i) {
    students.splice(i, 1);
    showStudents()
}

const edit_name = document.querySelector("#edit-name")
const edit_age = document.querySelector("#edit-age")
const edit_gpa = document.querySelector("#edit-gpa")

function editStudent(i) {
    console.log(i)
    edit_name.value = students[i].name
    edit_age.value = students[i].age
    edit_gpa.value = students[i].gpa
}