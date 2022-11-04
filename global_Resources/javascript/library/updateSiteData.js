// Preset Constant Word
const current_status_data = "Current Status: Website Avaliable to use";
const recent_update_data = "Recent Update: Bottom Frame Optimization (100%) [Released!]";
const upcoming_change_data = "Upcoming Change: Revamp Home Page Social Media Section (100%)";

// Get a reference to the element we want to update
let current_status = document.getElementById("current_status");
let recent_update = document.getElementById("recent_update");
let upcoming_change = document.getElementById("upcoming_change");

// Update the content of the element with the message
current_status.innerHTML = current_status_data;
recent_update.innerHTML = recent_update_data;
upcoming_change.innerHTML = upcoming_change_data;