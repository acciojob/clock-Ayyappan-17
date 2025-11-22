//your JS code here. If required.
function updateTimer() {
    const timerElement = document.getElementById("timer");
    const now = new Date();

    // Format: Date + Time
    timerElement.textContent = now.toLocaleString();
}

// Update immediately
updateTimer();

// Update every 1 second
setInterval(updateTimer, 1000);
