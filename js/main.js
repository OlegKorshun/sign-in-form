// Show/hide social media buttons //
let triggerShow = document.getElementById("trigger-show");
let triggerHide = document.getElementById("trigger-hide");
var socialBtns = document.querySelectorAll('#socialBtnsList > li'); 

triggerShow.onclick = function() {
	for(var indx = 0; indx < socialBtns.length; indx++){
    if (socialBtns[indx].classList.contains("hidden-attribute")) {
      socialBtns[indx].classList.remove("hide-content");
    }
  };
  
	triggerShow.classList.add("hide-content");
	triggerHide.classList.remove("hide-content");
}

triggerHide.onclick = function() {
	for(var indx = 0; indx < socialBtns.length; indx++){
    if (socialBtns[indx].classList.contains("hidden-attribute")) {
      socialBtns[indx].classList.add("hide-content");
    }
  };
  
	triggerHide.classList.add("hide-content");
	triggerShow.classList.remove("hide-content");
}
////////////////////////////////////



// Show Toggle Password Visibility //
let togglePasswordVisibility= document.getElementById("toggle-password-visibility");
let inputPassword = document.getElementById("inputPassword");

inputPassword.oninput = function() {
	if(inputPassword.value) {
		togglePasswordVisibility.classList.remove("hide-content");
	} else {
		togglePasswordVisibility.classList.add("hide-content");
	}
}

// Toggle Password Visibility //
togglePasswordVisibility.onclick = function() {
	if (inputPassword.type === "password") {
		inputPassword.type = "text";
	} else {
		inputPassword.type = "password";
	}
}
////////////////////////////////////


// Animation for inputs //
const signInForm = document.getElementById("signInForm");
const inputs = signInForm.querySelectorAll("input");
function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

for(var indx = 0; indx < inputs.length; indx++){
	inputs[indx].addEventListener("focus", addcl);
	inputs[indx].addEventListener("blur", remcl);
};
////////////////////////////////////