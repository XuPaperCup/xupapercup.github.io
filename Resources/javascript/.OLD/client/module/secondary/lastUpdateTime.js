// Fetch Module - [lastUpdateTime]
async function lastUpdateTime() {
    const requireRepo = "xupapercup.github.io";
    // resp = response
    const resp = await fetch("https://api.github.com/users/xupapercup/repos");
    const repos = await resp.json();
    for (const repo of repos) {
      if (repo.name == requireRepo) {
        // Store Time Data from GitHub API
        let TimeData = new Date(repo.pushed_at);
        // Define Time Data Variable
        let date = TimeData.getDate();
        let fullyear = TimeData.getFullYear();
        let hours = TimeData.getHours();
        let minutes = TimeData.getMinutes();
        let seconds = TimeData.getSeconds();
        // Fix Math Month Number
        let month = TimeData.getMonth() + 1;
        // Change Math Week Number to English/Chinese Week Word
        var day = null;
        if (language === "en-us") {
          const map = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          day = map[TimeData.getDay()];
        }
        if (language === "zh-hant") {
          const map = ["日", "一", "二", "三", "四", "五", "六"];
          day = map[TimeData.getDay()];
        }
        // Return output base on language [For Debug Use `${new Date(repo.updated_at)}`]
        if (language === "en-us") {
          return `Website Last Update Time (Local Time): ${fullyear}/${month}/${date} ${hours}h${minutes}m${seconds}s (${day})</FONT><BR>`;
        }
        if (language === "zh-hant") {
          return `網站最後更新時間(本地時間): ${fullyear}年${month}月${date}日${hours}時${minutes}分${seconds}秒 (星期${day})</FONT><BR>`;
        }
      }
    }
}
export { lastUpdateTime };