var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Video initialized");
});

// Play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

// Pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow down button
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Speed up button
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Skip ahead button
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

// Volume slider
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value + "%";
});

// Old School button
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// Original button
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
