const requireRepo = "xupapercup.github.io";

var xhttp = new XMLHttpRequest();
// Get a reference to the element we want to update
lastUpdateTime = document.getElementById('lastUpdateTime');
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);
    repos.forEach((repo)=>{
      if (repo.name == requireRepo) {
      // Store Time Data from GitHub API
      var TimeData = new Date(repo.pushed_at);
      // Process Data
      var date = TimeData.getDate();
      var fullyear = TimeData.getFullYear();
      var hours = TimeData.getHours();
      var minutes = TimeData.getMinutes();
      var seconds = TimeData.getSeconds();
      var month = null;
      // Fix Math Month Number
      switch (TimeData.getMonth()) {
        case 0:
          month = "1";
          break;
        case 1:
          month = "2";
          break;
        case 2:
          month = "3";
          break;
        case 3:
          month = "4";
          break;
        case 4:
          month = "5";
          break;
        case 5:
          month = "6";
          break;
        case 6:
          month = "7";
          break;
        case 7:
          month = "8";
          break;
        case 8:
          month = "9";
          break;
        case 9:
          month = "10";
          break;
        case 10:
          month = "11";
          break;
        case 11:
          month = "12";
          break;
      }
      var day = null;
      // Change Math Week Number to Chinese Week Number
      switch (TimeData.getDay()) {
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
          break;
        case 0:
          day = "Sunday";
      }
      // Output message [For Debug Use `${new Date(repo.updated_at)}`]
      message = `Website Last Update Time (Local Time): ${fullyear}/${month}/${date} ${hours}h${minutes}m${seconds}s (${day})</FONT><BR>`;
      }
    });
  }
  // Update the content of the element with the message
  lastUpdateTime.innerHTML = message;
};
// Get data from GitHub API
xhttp.open("GET", "https://api.github.com/users/xupapercup/repos", true);
xhttp.send();