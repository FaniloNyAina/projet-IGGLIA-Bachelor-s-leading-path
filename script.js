
function openTab(evt, id) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("contenu-onglet");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
}

function toggleMatieres(id) {
    let matiereList = document.getElementById(id);
    if (matiereList.style.display === "block") {
        matiereList.style.display = "none";
    } else {
        matiereList.style.display = "block";
    }
}