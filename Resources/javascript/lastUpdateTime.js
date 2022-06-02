const requireRepo = "xupapercup.github.io";

var xhttp = new XMLHttpRequest();
// Get a reference to the element we want to update
lastUpdateTime = document.getElementById('lastUpdateTime');
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);
    repos.forEach((repo)=>{
      if (repo.name == requireRepo)
      message = `Last Update Time: ${new Date(repo.updated_at)}<BR>`;
    });
  }
  // Update the content of the element with the message
  lastUpdateTime.innerHTML = message;
};

xhttp.open("GET", "https://api.github.com/users/xupapercup/repos", true);
xhttp.send();