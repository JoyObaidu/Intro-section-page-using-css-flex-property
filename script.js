function openNav() {
    document.getElementById('nav-menu').style.display = "block";
    document.querySelector('body').style.backgroundColor =  "hsl(0, 0%, 41%)";
}

function closeNav(){
    document.getElementById('nav-menu').style.display = "none";
    document.querySelector('body').style.backgroundColor =  "hsl(0, 0%, 98%)";
}

function dropBtn() {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    if (dropdowns.classList.contains('show')) {
        dropdowns.classList.remove('show');
    } else {
        dropdowns.classList.add('show');
    }
}

