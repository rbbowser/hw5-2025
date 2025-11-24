var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	// Initialize the video element
	video = document.querySelector("#player1");

	// Turn off autoplay and mute
	video.autoplay = false;
	video.loop = false;

	// Log that video is initialized
	console.log("Video initialized");
});

// Play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// Update volume display
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

// Pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow down button - decrease speed by 10%
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Speed up button - increase speed by dividing by 0.9 (reverse of slow down)
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Skip ahead button - advance by 10 seconds, loop to start if at end
document.querySelector("#skip").addEventListener("click", function() {
	// Check if skipping would go past the end
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		// Loop back to start
		video.currentTime = 0;
		console.log("Go back to beginning");
	}
	console.log("Current time is " + video.currentTime);
});

// Mute button - toggle mute/unmute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
	}
});

// Volume slider - update video volume and display
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value + "%";
});

// Old School button - add oldSchool class
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// Original button - remove oldSchool class
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
