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
      let TimeData = new Date(repo.pushed_at);
      // Process Data
      let date = TimeData.getDate();
      let fullyear = TimeData.getFullYear();
      let hours = TimeData.getHours();
      let minutes = TimeData.getMinutes();
      let seconds = TimeData.getSeconds();
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
          day = "一";
          break;
        case 2:
          day = "二";
          break;
        case 3:
          day = "三";
          break;
        case 4:
          day = "四";
          break;
        case 5:
          day = "五";
          break;
        case 6:
          day = "六";
          break;
        case 0:
          day = "日";
      }
      // Output message [For Debug Use `${new Date(repo.updated_at)}`]
      message = `網站最後更新時間(本地時間): ${fullyear}年${month}月${date}日${hours}時${minutes}分${seconds}秒 (星期${day})</FONT><BR>`;
      }
    });
  }
  // Update the content of the element with the message
  lastUpdateTime.innerHTML = message;
};
// Get data from GitHub API
xhttp.open("GET", "https://api.github.com/users/xupapercup/repos", true);
xhttp.send();