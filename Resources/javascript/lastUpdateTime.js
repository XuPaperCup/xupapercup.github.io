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
      var TimeData = new Date(repo.updated_at);
      // Process Data
      var local_date = TimeData.getDate();
      var local_fullyear = TimeData.getFullYear();
      var local_hours = TimeData.getHours();
      var local_minutes = TimeData.getMinutes();
      var local_seconds = TimeData.getSeconds();
      var local_month = TimeData.getMonth();
      var local_day = null;
      // Change Math Week Number to Chinese Week Number
      switch (TimeData.getDay()) {
        case 1:
          local_day = "一";
          break;
        case 2:
          local_day = "二";
          break;
        case 3:
          local_day = "三";
          break;
        case 4:
          local_day = "四";
          break;
        case 5:
          local_day = "五";
          break;
        case 6:
          local_day = "六";
          break;
        case 7:
          local_day = "日";
      }
      // Output message
      message = `最後更新時間: ${local_fullyear}年${local_month}月${local_date}日${local_hours}時${local_minutes}分${local_seconds}秒 (星期${local_day})<BR>`;
      }
    });
  }
  // Update the content of the element with the message
  lastUpdateTime.innerHTML = message;
};
// Get data from GitHub API
xhttp.open("GET", "https://api.github.com/users/xupapercup/repos", true);
xhttp.send();