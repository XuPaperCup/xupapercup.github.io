// Preset Constant Value
const current_status_data = "Current Status: Resting";
const next_update_data = "Next Update: MCBE addon Teaching Material (0%)";

// Get a reference to the element we want to update
current_status = document.getElementById("current_status");
next_update = document.getElementById("next_update");

// Update the content of the element with the message
current_status.innerHTML = current_status_data;
next_update.innerHTML = next_update_data;