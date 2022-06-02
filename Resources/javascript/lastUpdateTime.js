var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);
    repos.forEach((repo)=>{
      document.getElementById('lastUpdateTime').innerHTML += `<code>${repo.xupapercup.github.io}</code>: <em>${new Date(repo.updated_at)}</em><br>`;
    });
  }
};
xhttp.open("GET", "https://api.github.com/users/xupapercup/repos", true);
xhttp.send();