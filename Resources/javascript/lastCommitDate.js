var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);
    document.write("<h3>k3llydev github repositories w/last updated</h3>");
    repos.forEach((repo)=>{
      document.write(`<code>${xupapercup.github.io}</code>: <em>${new Date(repo.updated_at)}</em><br>`);
    });
  }
};
xhttp.open("GET", "https://api.github.com/users/xupapercup/repos", true);
xhttp.send();