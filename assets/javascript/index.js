//Init tooltips
tippy(".tech", {
	placement: "bottom"
});

$(() => {
	$("body").fadeIn("slow");
	$("#profile").addClass("load");
});

let scrollpos = window.scrollY;
let header = document.getElementById("header");
let navcontent = document.getElementById("nav-content");
let brandname = document.getElementById("brandname");
let toToggle = document.querySelectorAll(".toggleColour");

document.addEventListener("scroll", function() {
	/*Apply classes for slide in bar*/
	scrollpos = window.scrollY;

	if (scrollpos > 10) {
		header.classList.add("bg-white");
		//Use to switch toggleColour colours
		for (let i = 0; i < toToggle.length; i++) {
			toToggle[i].classList.add("text-gray-800");
			toToggle[i].classList.remove("text-white");
		}
		header.classList.add("shadow");
		navcontent.classList.remove("bg-gray-100");
		navcontent.classList.add("bg-white");
	} else {
		header.classList.remove("bg-white");
		//Use to switch toggleColour colours
		for (let i = 0; i < toToggle.length; i++) {
			toToggle[i].classList.add("text-white");
			toToggle[i].classList.remove("text-gray-800");
		}

		header.classList.remove("shadow");
		navcontent.classList.remove("bg-white");
		navcontent.classList.add("bg-gray-100");
	}
});

/*Toggle dropdown list*/
/*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

let navMenuDiv = document.getElementById("nav-content");
let navMenu = document.getElementById("nav-toggle");

document.onclick = check;
function check(e) {
	let target = (e && e.target) || (event && event.srcElement);

	//Nav Menu
	if (!checkParent(target, navMenuDiv)) {
		// click NOT on the menu
		if (checkParent(target, navMenu)) {
			// click on the link
			if (navMenuDiv.classList.contains("hidden")) {
				navMenuDiv.classList.remove("hidden");
			} else {
				navMenuDiv.classList.add("hidden");
			}
		} else {
			// click both outside link and outside menu, hide menu
			navMenuDiv.classList.add("hidden");
		}
	}
}
function checkParent(t, elm) {
	while (t.parentNode) {
		if (t == elm) {
			return true;
		}
		t = t.parentNode;
	}
	return false;
}

let resumeButton = $("#resume-button");
let resume = $("#resume-iframe");

let resumeExpand = async () => {
	if(resume.is(":hidden")) {
		await resume.slideDown("slow");
		resumeButton.text("Hide me!");
	} else {
		await resume.slideUp();
		resumeButton.text("Show me!");
	}
	
}

resumeButton.click(resumeExpand);


let projects = $("#projects-display");
let projectButton = $("#project-expand")

let projectExpand = async () => {
	if(projects.is(":hidden")) {
		await projects.slideDown("slow").css('display', 'flex');
		projectButton.text("HIDE");
	} else {
		await projects.slideUp();
		projectButton.text("SHOW");
	}
	
}

projectButton.click(projectExpand);

$("#contact-form").submit((e) => {
	e.preventDefault();
})

$("#form-send").click(() => {	
	let name = $("#grid-name").val();
	let email = $("#grid-email").val();
	let message = $("#grid-message").val();

	if (name === "" || email === "" || message === ""){
		$("#form-error").show();
		return false;
	} else {
		$("#form-error").hide();
		$("#contact-form").submit();
		$("#grid-name").val("");
		$("#grid-email").val("");
		$("#grid-message").val("");
	}
	
})