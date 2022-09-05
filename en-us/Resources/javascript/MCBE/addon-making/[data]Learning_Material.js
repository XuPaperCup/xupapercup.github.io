function processValue() {
    // Get droplist value
    let chapterValue = document.getElementById("chapter").value;
    let lessonValue = document.getElementById("lesson").value;
    let output;
    // Tell user the data is processing
    output =
    `<TABLE><tr><td>
    Processing your data request...<BR>
    (If it takes too long to process, try to refresh the Web Page and Get Data again.)
    </td></tr></TABLE>`;
    document.getElementById("output").innerHTML = output;
    // Use -switch- and -if- to process data
    output = null;
    switch (chapterValue) {
        case "0":
            output =
            `<TABLE>
            <tr><td class="warning">Please select a valid chapter and lesson!</td></tr>
            </TABLE>`
            break;
        case "Chapter 1":
            if (lessonValue == "1") {
                output =
                `<TABLE>
                <tr><td class="warning">Please select a valid lesson!</td></tr>
                </TABLE>`
            }
            if (lessonValue == "2") {
                output =
                `<TABLE>
                <tr><td class="warning">Please select a valid lesson!</td></tr>
                </TABLE>`
            }
            if (lessonValue == "Lesson 1") {
                output =
            `<TABLE>
                <tr valign="middle">
                    <th>Chapter/Lesson</th>
                    <th>MCBE version</th>
                    <th>Lesson Publish Date</th>
                    <th>Download Source</th>
                    <th>File Size</th></tr>
                <tr valign="middle">
                    <td>Basic Chapter 1 Lesson 1</td>
                    <td>Not applicable</td>
                    <td>2022/6/12</td>
                    <td align="center"><a href="Useful_Link.html" target="_blank"><button type="button" id="index">Useful Link</button></a></td>
                    <td>Not applicable</td></tr>
                </TABLE><TABLE>
                <tr valign="top">
                    <th align="left">Reference Video By XuPaperCup in Youtube</th>
                    <th>Lesson Name</th>
                    <th>Lesson Objective</th></tr>
                <tr valign="top">
                    <td align="left"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yisl7sQQ5BY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
                    <td>Pre-installation/<BR>Installing app to be used</td>
                    <td>1. Install 7-zip on your pc<BR>2. Install Visual Studio Code on your pc</td></tr>
            </TABLE>`;
            }
            if (lessonValue == "Lesson 2") {
                output =
            `<TABLE>
                <tr valign="middle">
                    <th>Chapter/Lesson</th>
                    <th>MCBE version</th>
                    <th>Lesson Publish Date</th>
                    <th>Download Source</th>
                    <th>File Size</th></tr>
                <tr valign="middle">
                    <td>Basic Chapter 1 Lesson 2</td>
                    <td>v1.19</td>
                    <td>In Making Progress...</td>
                    <td align="center"><a href="https://github.com/XuPaperCup/MCBEaddon_learn/releases/download/basic_ch1-2/basic_ch1-2.zip" target="_blank"><button type="button" id="index">GitHub</button></a></td>
                    <td>940 Bytes</td></tr>
                </TABLE><TABLE>
                <tr valign="top">
                    <th align="left">Reference Video By XuPaperCup in Youtube</th>
                    <th>Lesson Name</th>
                    <th>Lesson Objective</th></tr>
                <tr valign="top">
                    <td align="left">In Making Progress...</td>
                    <td>Addon Base Pack</td>
                    <td>In Making Progress...</td></tr>
            </TABLE>`
            }
            break;
    }
    // Output the result
    document.getElementById("output").innerHTML = output;
}