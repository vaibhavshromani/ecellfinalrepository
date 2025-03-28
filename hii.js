function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
