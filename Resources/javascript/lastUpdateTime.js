var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);
    document.writeln("This Website Last Update Date:");
    repos.forEach((repo)=>{
      document.writeln(`<code>${repo.name}</code>: <em>${new Date(repo.updated_at)}</em><br>`);
    });
  }
};
xhttp.open("GET", "https://api.github.com/repos/xupapercup/xupapercup.github.io", true);
xhttp.send();