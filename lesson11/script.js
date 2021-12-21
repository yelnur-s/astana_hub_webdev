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


if (localStorage.getItem("students")) {
    students = JSON.parse(localStorage.getItem("students"))
} else {
    setStorage()
}


const studentsDiv = document.getElementById("students");




const searchInput = document.getElementById("search");

function showStudents() {


    let filteredStuents = students.filter(item =>
        item.name.includes(searchInput.value) ||
        `${item.age}`.includes(searchInput.value) ||
        `${item.gpa}`.includes(searchInput.value)
    )

    studentsDiv.innerHTML = filteredStuents.map((item, i) =>
        `<div class="students-item">
            <div>${i+1}</div>
            <div class="cell" id="name-${i}">${item.name}</div>
            <div class="cell" id="age-${i}">${item.age}</div>
            <div class="cell" id="gpa-${i}">${item.gpa}</div>
            <div> <span onclick="deleteStudent(${i})"> Delete </span> </div>
        </div>
    `
    ).join('');


    let cells = document.getElementsByClassName("cell")
    for (cell of cells) {
        cell.addEventListener('dblclick', startEdit)
        cell.addEventListener('blur', onBlur)
    }

}

function startEdit() {
    this.setAttribute("contenteditable", true)
}

function onBlur() {
    console.log("test", this.innerHTML)
    this.setAttribute("contenteditable", false)
    let p = this.id.split("-") // "name-1" => ["name", "1"]
    students[p[1]][p[0]] = this.innerHTML;
    setStorage()
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
    setStorage()
}

function setStorage() {
    localStorage.setItem("students", JSON.stringify(students))
}


function deleteStudent(i) {
    students.splice(i, 1);
    showStudents()
    setStorage()
}




function editStudent(i) {
    document.getElementById("edit-form-" + i).classList.add("active")
}

function saveEdited(editId) {
    const edit_name = document.querySelector("#edit-name-" + editId)
    const edit_age = document.querySelector("#edit-age-" + editId)
    const edit_gpa = document.querySelector("#edit-gpa-" + editId)

    students[editId].name = edit_name.value
    students[editId].age = edit_age.value
    students[editId].gpa = edit_gpa.value
    edit_name.value = ""
    edit_age.value = ""
    edit_gpa.value = ""

    document.getElementById("edit-form-" + editId).classList.remove("active")
    showStudents();
}


function search() {
    showStudents()
}

document.getElementById("add-button").addEventListener('click', addStudent)