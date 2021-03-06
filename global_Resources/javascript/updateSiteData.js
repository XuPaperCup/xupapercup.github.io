// Preset Constant Word
const current_status_data = "Current Status: Finish Building";
const recent_update_data = "Recent Update: en-us/MCBE addon Learning Material (100%, official version is out!)";
const upcoming_change_data = "Upcoming Change: Reorder en-us Index Wedsite Layout (100%)";

// Get a reference to the element we want to update
var current_status = document.getElementById("current_status");
var recent_update = document.getElementById("recent_update");
var upcoming_change = document.getElementById("upcoming_change");

// Update the content of the element with the message
current_status.innerHTML = current_status_data;
recent_update.innerHTML = recent_update_data;
upcoming_change.innerHTML = upcoming_change_data;