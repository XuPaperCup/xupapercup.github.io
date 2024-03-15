// Module - [showPageLoc]
function showPageLoc() {
let page_location_data = window.location
let page_location = document.getElementById("page_location");
    if (page_location === null) {
        console.log(`\nUnable to execute Module [showPageLoc],\nReason: There is no "page_location" identifier in this web page element.`);
    }
    else {
        if (language === "en-us") {
            page_location.innerHTML = `Requested Page Directory: ${page_location_data}`;
        }
        if (language === "zh-hant") {
            page_location.innerHTML = `請求的頁面目錄: ${page_location_data}`;
        }
    }
}
export { showPageLoc };