import { lastUpdateTime } from "../global_Resources/javascript/lastUpdateTime.js";

export function bottomFrame() {
    if (language == "en-us") {
        lastUpdateTime((message) => {
            // Waiting Code
            const bottom_line = `<HR>\n
            <FONT size="5">Current Language: English</FONT>\n
            <FONT size="5"><div id="lastUpdateTime">${message}</div></FONT>
            <FONT size="5" style="background-color: gray; color: white">Got a problem or suggestion? Tell them in Home Page➡Miscellaneous➡Report Website Issue(s)!</FONT>\n
            <FONT size="5" color="#AFAFAF" style="float: right; text-align: right;">XuPaperCup's Website\n
            <a href="https://github.com/XuPaperCup/xupapercup.github.io" target="_blank" id="powered">Build in <b>GitHub</b></a></FONT>`;
            let bottom_frame = document.getElementById("bottom_frame");
            bottom_frame.innerHTML = bottom_line;
        });
        // Non-Waiting Code
    }
}