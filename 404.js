// Default Language
var language = "en-us";
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
    let data_line2_data = 'Error code: <a href="https://zh.wikipedia.org/zh-tw/HTTP_404" target="_blank" id="powered">HTTP 404</a>';
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
    let body_line4_data = "點擊返回上一頁或回到首頁來離開此錯誤網頁";
    // Preset Constant Word - Data
    let data_line1_data = "錯誤類型: 找不到網頁";
    let data_line2_data = '錯誤代碼: <a href="https://zh.wikipedia.org/zh-tw/HTTP_404" target="_blank" id="powered" >HTTP 404</a>';
    let data_line3_data = "顯示語言: 繁體中文";
    let data_line4_data = '<div id="lastUpdateTime">網站最後更新時間(本地時間): 讀取GitHub API數據中...</div>';
    let data_line5_data = 'XuPaperCup的網站<BR><a href="https://pages.github.com/" target="_blank" id="powered" style="float: none; text-align: center;">由&thinsp;<b>GitHub</b>&thinsp;Pages&thinsp;提供支持</a>';
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