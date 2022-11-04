// Legacy xhr Module - [lastUpdateTime]
const lastUpdateTime = () => new Promise(function(resolve) {
  const requireRepo = "xupapercup.github.io";
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let repos = JSON.parse(this.responseText);
      repos.forEach((repo) => {
        if (repo.name == requireRepo) {
        // Store Time Data from GitHub API
        let TimeData = new Date(repo.pushed_at);
        // Define Data Variable
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
        //  Convert Math Week Number to English/Chinese Week Word
        if (language === "en-us") {
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
              break;
          }
        }
        if (language === "zh-hant") {
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
              break;
          }
        }
        // Return output base on language [For Debug Use `${new Date(repo.updated_at)}`]
        if (language == "en-us") {
          return resolve(`Website Last Update Time (Local Time): ${fullyear}/${month}/${date} ${hours}h${minutes}m${seconds}s (${day})</FONT><BR>`);
        }
        if (language == "zh-hant") {
          return resolve(`網站最後更新時間(本地時間): ${fullyear}年${month}月${date}日${hours}時${minutes}分${seconds}秒 (星期${day})</FONT><BR>`);
        }
        }
      });
    };
  };
  // Get data from GitHub API
  xhr.open("GET", "https://api.github.com/users/xupapercup/repos", true);
  xhr.send();
});
// Export function to be used
export { lastUpdateTime };