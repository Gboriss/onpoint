let slideControl1 = document.querySelector(".slide1-control")
let slideControl2 = document.querySelector(".slide2-control")
let slideControl3 = document.querySelector(".slide3-control")
let showContainer = document.querySelector(".show-container")
let changeRange = document.querySelector(".range-slide")

// Toggle page buttons
slideControl1.addEventListener("click", function(evt) {
	evt.preventDefault();
	slideControl1.classList.add("active")
	slideControl2.classList.remove("active")
	slideControl3.classList.remove("active")
	if(showContainer.classList.contains("show-slide2")) {
		showContainer.classList.remove("show-slide2")
	}

	if(showContainer.classList.contains("show-slide3")) {
		showContainer.classList.remove("show-slide3")
	}

	showContainer.classList.add("show-slide1");
});

slideControl2.addEventListener("click", function(evt) {
	evt.preventDefault()
	slideControl1.classList.remove("active")
	slideControl2.classList.add("active")
	slideControl3.classList.remove("active")
	if(showContainer.classList.contains("show-slide1")) {
		showContainer.classList.remove("show-slide1")
	}

	if(showContainer.classList.contains("show-slide3")) {
		showContainer.classList.remove("show-slide3")
	}
	
	showContainer.classList.add("show-slide2")
})

slideControl3.addEventListener("click", function(evt) {
	evt.preventDefault();
	slideControl1.classList.remove("active")
	slideControl2.classList.remove("active")
	slideControl3.classList.add("active")
	if(showContainer.classList.contains("show-slide1")) {
		showContainer.classList.remove("show-slide1")
	}

	if(showContainer.classList.contains("show-slide2")) {
		showContainer.classList.remove("show-slide2")
	}
	
	showContainer.classList.add("show-slide3")
});

// Slider functionality
changeRange.addEventListener("input", changeValue)

function changeValue() {
	let valueRange = document.querySelector(".range-slide").value
	let slideContainer3 = document.querySelector(".slide3-container")
	if(valueRange <= 100 && valueRange > 75) {

		slideContainer3.classList.remove("show-item2")
		slideContainer3.classList.add("show-item3")
	}

	if(valueRange <= 75 && valueRange > 25) {

		slideContainer3.classList.remove("show-item3")
		slideContainer3.classList.remove("show-item1")
		slideContainer3.classList.add("show-item2")
	}

	if(valueRange >= 0 && valueRange <= 25) {

		slideContainer3.classList.remove("show-item2")
		slideContainer3.classList.add("show-item1")
	}
}

// Defining swipes
let touchstartY = 0
let touchendY = 0

showContainer.addEventListener('touchstart', function(event) {
    touchstartY = event.touches[0].clientY
}, false)

showContainer.addEventListener('touchend', function(event) {
    touchendY = event.changedTouches[0].clientY
    moveTouch()
}, false)



 function moveTouch() {
 	// Swipe down
	if (touchendY < touchstartY && showContainer.classList.contains("show-slide1")) {
		showContainer.classList.remove("show-slide1")
		showContainer.classList.add("show-slide2")
		slideControl1.classList.remove("active")
		slideControl2.classList.add("active")
    } else {
	    	if (touchendY < touchstartY && showContainer.classList.contains("show-slide2")) {
			showContainer.classList.remove("show-slide2")
			showContainer.classList.add("show-slide3")
			slideControl2.classList.remove("active")
			slideControl3.classList.add("active")
    	}
    }

    // Swipe up

    if (touchendY > touchstartY && showContainer.classList.contains("show-slide2")) {
        showContainer.classList.remove("show-slide2")
		showContainer.classList.add("show-slide1")
		slideControl2.classList.remove("active")
		slideControl1.classList.add("active")
    } else {
	    	if (touchendY > touchstartY && showContainer.classList.contains("show-slide3")) {
			showContainer.classList.remove("show-slide3")
			showContainer.classList.add("show-slide2")
			slideControl3.classList.remove("active")
			slideControl2.classList.add("active")
    	}
    }
}