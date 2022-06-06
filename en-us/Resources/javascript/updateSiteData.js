// Preset Constant Value
const current_status_data = "Current Status: Building";
const recent_update_data = "Recent Update: en-us/404.html (100%)";
const upcoming_change_data = "Upcoming Change: zh-hant/404.html (0%)";

// Get a reference to the element we want to update
current_status = document.getElementById("current_status");
recent_update = document.getElementById("recent_update");
upcoming_change = document.getElementById("upcoming_change");

// Update the content of the element with the message
current_status.innerHTML = current_status_data;
recent_update.innerHTML = recent_update_data;
upcoming_change.innerHTML = upcoming_change_data;