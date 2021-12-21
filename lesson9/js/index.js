const aside = document.getElementById("aside")


function openAside() {
    aside.classList.add('active')
    console.dir(document.getElementById("aside"))
}

function closeAside() {
    aside.classList.remove("active")
}

function openSecondAside(id) {
    document.getElementById(id).classList.add('active')
}

function backAside(id) {
    document.getElementById(id).classList.remove('active')
}


function toggleCollapse(e) {
    if (e.target.classList[e.target.classList.length - 1] === "active") {
        e.target.classList.remove("active")
        e.target.nextElementSibling.style.height = 0;
    } else {
        e.target.classList.add("active")
        e.target.nextElementSibling.style.height = (e.target.nextElementSibling.scrollHeight + 1) + "px";

    }
}