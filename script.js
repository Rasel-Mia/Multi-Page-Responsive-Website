var topSection = document.getElementById('top');
var projectsSection = document.getElementById('projects');
var topLink = document.getElementById('top-link');
var projectsLink = document.getElementById('projects-link');

console.log(topSection.offsetTop);

topLink.onclick = function () { window.scrollTo(0, topSection.offsetTop - navHeight); };
projectsLink.onclick = function () { window.scrollTo(0, projectsSection.offsetTop - navHeight); };

