function display_404_en_us() {
    // Change Language Value
    var language = "en-us";
    // Preset Constant Word - Body
    let body_line1_data = "<u>Error - The Web Page requested does not exist</u>";
    let body_line2_data = "Sorry, we could not found the Web Page or Page Directory that you requested.";
    let body_line3_data = "[Please check your directory and page name is existed and spell correctly]";
    let body_line4_data = "Click Go Back or Welcome Page for going back to the previous page or welcome page.";
    // Preset Constant Word - Data
    let data_line1_data = "Error type: Not found error";
    let data_line2_data = "Error code: HTML 404";
    let data_line3_data = "Display Language: English";
    let data_line4_data = '<div id="lastUpdateTime">Website Last Update Time (Local Time): Getting GitHub API Data...</div>';
    lastUpdateTime();
    let data_line5_data = "XuPaperCup's Website";
    let data_line6_data = '<a href="https://pages.github.com/" target="_blank" id="powered">Powered by <b>GitHub</b> Pages</a>';
}