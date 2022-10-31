// legacy xhr module avaliable for Module [lastUpdateTime], (filepath: '../secondary/legacy/lastUpdateTime.js')
// modern fetch module avaliable for Module [lastUpdateTime], (filepath: '../secondary/lastUpdateTime.js')
import { lastUpdateTime } from '../secondary/lastUpdateTime.js';

// Module - [showBttmFrame] await [lastUpdateTime]
async function showBttmFrame() {
    // Configure CSS (Does NOT Work)
    /* const csslink = document.createElement("link");
    csslink.src = "./showBttmFrame.css";
    csslink.type = "stylesheet";
    document.head.append(csslink);
    console.log(csslink) */
    // Display Bottom Line
    if (language === "en-us") {
        let bottom_frame = document.getElementById("bottom_frame");
            if (bottom_frame === null) {
                console.log(`\nUnable to execute Module [showBttmFrame] await [lastUpdateTime],\nReason: There is no "bottom_frame" identifier in this web page element.`);
            }
            else {
                let updateTimeMsg;
            try {
                updateTimeMsg = await lastUpdateTime(); 
            } catch (e) {
                console.log(e);
                updateTimeMsg = `<FONT color="red">Error! ${e}</FONT>`;
            }
            const bottom_line = `<HR>\n
            <FONT size="5">Current Language: English</FONT><BR>
            <FONT size="5"><div id="lastUpdateTime">${updateTimeMsg}</div></FONT>
            <FONT size="5" style="background-color: gray; color: white">Got a problem or suggestion? Tell them in Home Page➡Miscellaneous➡Report Website Issue(s)!</FONT><BR>
            <FONT size="5" color="#AFAFAF" style="float: right; text-align: right;">XuPaperCup's Website<BR>
            <a href="https://github.com/XuPaperCup/xupapercup.github.io" target="_blank" id="powered">Build in <b>GitHub</b></a></FONT>`;
            bottom_frame.innerHTML = bottom_line;
        }
    }
}
export { showBttmFrame };