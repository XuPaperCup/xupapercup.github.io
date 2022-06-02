var xhttp = new XMLHttpRequest();
var message = null;
var lastUpdateTime = null;
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);
    repos.forEach((repo)=>{
      lastUpdateTime = document.getElementById('lastUpdateTime'),
      message = `<code>${repo.name}</code>: <em>${new Date(repo.updated_at)}</em><br>`;
      lastUpdateTime.innerHTML = message;
    });
  }
};
xhttp.open("GET", "https://api.github.com/repos/xupapercup/xupapercup.github.io", true);
xhttp.send();