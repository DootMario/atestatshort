// import * as boot from "external/bootstrap-5.3.3-dist/js"

function worh() {
    const homeLinks = document.getElementById('homeLinks');
    if (window.outerWidth<= 700) {
        homeLinks.classList.remove('btn-group')
        homeLinks.classList.add('btn-group-vertical')
    }
    else{
        homeLinks.classList.remove('btn-group-vertical')
        homeLinks.classList.add('btn-group')
    }

}