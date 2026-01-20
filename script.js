window.onload = function() {
            alert("Welcome to my page!");
        };

function changeTheme() {
    const body = document.body;
    body.classList.toggle("change-body");

    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.toggle("change-section");
    });

    const headerFooter = document.querySelectorAll("#head-foot");
    headerFooter.forEach(element => {
        element.classList.toggle("change-head-foot");
    });

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.classList.toggle("change-a");
    });

    const btn = document.getElementById("themeBtn");
    btn.classList.toggle("cshange-btn");

    const counter = document.getElementById("counter");
    counter.innerText = Number(counter.innerText) + 1;
    
}

function showAboutMe() {
    const aboutMe = document.getElementById("aboutMe");
    aboutMe.classList.toggle("show-article");
}
function showEducation() {
    const education = document.getElementById("education");
    education.classList.toggle("show-article");
}
function showExperience() {
    const experience = document.getElementById("experience");
    experience.classList.toggle("show-article");
}
function showSkills() {
    const skills = document.getElementById("skills");
    skills.classList.toggle("show-article");
}