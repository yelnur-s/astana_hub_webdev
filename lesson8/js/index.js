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