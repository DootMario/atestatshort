// import * as boot from "external/bootstrap-5.3.3-dist/js"

const homeLinks = document.getElementById('homeLinks');

function worh() {

    if (window.innerWidth<= 800) {
        homeLinks.classList.remove('btn-group')
        homeLinks.classList.add('btn-group-vertical')
    }

}