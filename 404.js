// Default Language
var language = "en-us";

// Require module
function lastUpdateTime_function() {
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
          // Change Math Week Number to English/Chinese Week Word
          if (language == "en-us") {
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
          if (language == "zh-hant") {
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
          // Output message base on language [For Debug Use `${new Date(repo.updated_at)}`]
          if (language == "en-us") {
            message = `Website Last Update Time (Local Time): ${fullyear}/${month}/${date} ${hours}h${minutes}m${seconds}s (${day})</FONT><BR>`;
          }
          if (language == "zh-hant") {
            message = `網站最後更新時間(本地時間): ${fullyear}年${month}月${date}日${hours}時${minutes}分${seconds}秒 (星期${day})</FONT><BR>`;
          }
          }
        });
      }
      // Update the content of the element with the message
      lastUpdateTime.innerHTML = message;
    };
    // Get data from GitHub API
    xhttp.open("GET", "https://api.github.com/users/xupapercup/repos", true);
    xhttp.send();
}

function page_location_function() {
    // Preset Constant Function
    let page_location_data_new = window.location
    
    // Get a reference to the element we want to update
    var page_location = document.getElementById("page_location");
    
    // Update the content of the element with the message
    if (language == "en-us") {
        page_location.innerHTML = "Requested Page Directory: " + page_location_data_new;
    }
    if (language == "zh-hant") {
        page_location.innerHTML = "請求的頁面目錄: " + page_location_data_new;
    }
}

// 404 function - en-us
function display_404_in_en_us() {
    // Change Language Value
    language = "en-us";
    // Preset Constant Word - Body
    let body_line1_data = "<u>Error - The Web Page/Page Directory requested does not exist</u>";
    let body_line2_data = "Sorry, we could not found the Web Page or Page Directory that you requested.";
    let body_line3_data = "[Please check your directory and page name is existed and spell correctly]";
    let body_line4_data = "Click Go Back or Welcome Page to exit this error page";
    // Preset Constant Word - Data
    let data_line1_data = "Error type: Web Page Not found";
    let data_line2_data = 'Error code: <a href="https://zh.wikipedia.org/zh-tw/HTTP_404" target="_blank" id="powered">HTML 404</a>';
    let data_line3_data = "Display Language: English";
    let data_line4_data = '<div id="lastUpdateTime">Website Last Update Time (Local Time): Getting GitHub API Data...</div>';
    let data_line5_data = 'XuPaperCup&apos;s Website<BR><a href="https://pages.github.com/" target="_blank" id="powered">Powered by <b>GitHub</b> Pages</a>';
    let page_location_data_original = "Requested Page Directory: Loading...";
    // Preset Constant Word - Button
    let function_button_data = '<button id="back" type="button" onclick="window.history.back()"><FONT size="2" align="center">Go Back</FONT><BR>⬅</button> <button id="home" type="button" onclick="window.location.href=\'https://xupapercup.github.io/index.html\'"><FONT size="2" align="center">Welcome<BR>Page</FONT><BR>⌂</button>';
    let show_language_button_data = '<input id="lang" type="button" value="用繁體中文語言來顯示" onclick="display_404_in_zh_hant();">';
    // Get a reference to the element we want to update - Body
    let body_line1 = document.getElementById("body_line1");
    let body_line2 = document.getElementById("body_line2");
    let body_line3 = document.getElementById("body_line3");
    let body_line4 = document.getElementById("body_line4");
    // Get a reference to the element we want to update - Data
    let data_line1 = document.getElementById("data_line1");
    let data_line2 = document.getElementById("data_line2");
    let data_line3 = document.getElementById("data_line3");
    let data_line4 = document.getElementById("data_line4");
    let data_line5 = document.getElementById("data_line5");
    let page_location = document.getElementById("page_location");
    // Get a reference to the element we want to update - Button
    let function_button  = document.getElementById("function_button");
    let show_language_button = document.getElementById("show_language_button");
    // Update the content of the element with the message - Body
    body_line1.innerHTML = body_line1_data;
    body_line2.innerHTML = body_line2_data;
    body_line3.innerHTML = body_line3_data;
    body_line4.innerHTML = body_line4_data;
    // Update the content of the element with the message - Data
    data_line1.innerHTML = data_line1_data;
    data_line2.innerHTML = data_line2_data;
    data_line3.innerHTML = data_line3_data;
    data_line4.innerHTML = data_line4_data;
    lastUpdateTime_function();
    data_line5.innerHTML = data_line5_data;
    page_location.innerHTML = page_location_data_original;
    page_location_function();
    // Update the content of the element with the message - Button
    function_button.innerHTML = function_button_data;
    show_language_button.innerHTML = show_language_button_data;
}

// 404 function - zh-hant
function display_404_in_zh_hant() {
    // Change Language Value
    language = "zh-hant";
    // Preset Constant Word - Body
    let body_line1_data = "<u>錯誤 - 請求的頁面/網頁目錄不存在</u>";
    let body_line2_data = "抱歉，我們找不到所請求的頁面或網頁目錄";
    let body_line3_data = "[請檢查您的網頁目錄和頁面名稱是否存在並且拼寫正確]";
    let body_line4_data = "單擊返回上一頁或回到首頁來離開此錯誤網頁";
    // Preset Constant Word - Data
    let data_line1_data = "錯誤類型: 找不到網頁";
    let data_line2_data = '錯誤代碼: <a href="https://zh.wikipedia.org/zh-tw/HTTP_404" target="_blank" id="powered">HTML 404</a>';
    let data_line3_data = "顯示語言: 繁體中文";
    let data_line4_data = '<div id="lastUpdateTime">網站最後更新時間(本地時間): 讀取GitHub API數據中...</div>';
    let data_line5_data = 'XuPaperCup的網站<BR><a href="https://pages.github.com/" target="_blank" id="powered">由&thinsp;<b>GitHub</b>&thinsp;Pages&thinsp;提供支持</a>';
    let page_location_data_original = "請求的頁面目錄: 讀取數據中...";
    // Preset Constant Word - Button
    let function_button_data = '<button id="back" type="button" onclick="window.history.back()"><FONT size="2">返回上一頁</FONT><BR>⬅</button> <button id="home" type="button" onclick="window.location.href=\'https://xupapercup.github.io/index.html\'"><FONT size="2" align="center">回到首頁</FONT><BR>⌂</button>';
    let show_language_button_data = '<input id="lang" type="button" value="Display in English Language" onclick="display_404_in_en_us();">';
    // Get a reference to the element we want to update - Body
    let body_line1 = document.getElementById("body_line1");
    let body_line2 = document.getElementById("body_line2");
    let body_line3 = document.getElementById("body_line3");
    let body_line4 = document.getElementById("body_line4");
    // Get a reference to the element we want to update - Data
    let data_line1 = document.getElementById("data_line1");
    let data_line2 = document.getElementById("data_line2");
    let data_line3 = document.getElementById("data_line3");
    let data_line4 = document.getElementById("data_line4");
    let data_line5 = document.getElementById("data_line5");
    let page_location = document.getElementById("page_location");
    // Get a reference to the element we want to update - Button
    let function_button  = document.getElementById("function_button");
    let show_language_button = document.getElementById("show_language_button");
    // Update the content of the element with the message - Body
    body_line1.innerHTML = body_line1_data;
    body_line2.innerHTML = body_line2_data;
    body_line3.innerHTML = body_line3_data;
    body_line4.innerHTML = body_line4_data;
    // Update the content of the element with the message - Data
    data_line1.innerHTML = data_line1_data;
    data_line2.innerHTML = data_line2_data;
    data_line3.innerHTML = data_line3_data;
    data_line4.innerHTML = data_line4_data;
    lastUpdateTime_function();
    data_line5.innerHTML = data_line5_data;
    page_location.innerHTML = page_location_data_original;
    page_location_function();
    // Update the content of the element with the message - Button
    function_button.innerHTML = function_button_data;
    show_language_button.innerHTML = show_language_button_data;
}