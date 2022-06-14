function processValue() {
    // Get droplist value
    let chapterValue = document.getElementById("chapter").value;
    let lessonValue = document.getElementById("lesson").value;
    let output;
    // Tell user the data is processing
    output = `Processing your data request...<BR>
    (If it takes too long to process, try to refresh the Web Page and Get Data again.)`;
    document.getElementById("output").innerHTML = output;
    // Use switch and if to process data
    output = null;
    switch (chapterValue) {
        case "0":
            output = `<TABLE>
            <tr><td class="warning">Please select a valid chapter and lesson!</td></tr>
            </TABLE>`
            break;
        case "Chapter 1":
            if (lessonValue == "1||2") {
                output = `<TABLE>
                <tr><td class="warning">Please select a valid lesson!</td></tr>
                </TABLE>`
            }
            if (lessonValue == "Lesson 1") {
                output = `<TABLE>
                <tr><th>Chapter/Lesson</th><th>MCBE version</th><th>Download Source</th></tr>
                <tr><td>Chapter 1 Lesson 1</td><td>Not applicable</td><td align="center"><button type="button" onclick="window.location.href='Website/MCBEaddon/Useful_Link.html'" id="index">Useful Link</button></td></tr>
                <tr><th colspan="2" align="left">Reference Video By XuPaperCup in Youtube</th><th>Lesson Objective</th></tr>
                <tr><td colspan="2" align="left"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yisl7sQQ5BY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td><td>1. Install 7-zip on your pc<BR>2. Install Visual Studio Code on your pc</td></tr>
                </TABLE>`;
            }
            if (lessonValue == "Lesson 2") {
                output = `Currently there is no data stored here, you can check back later.`
            }
            break;
    }
    // Output the result
    document.getElementById("output").innerHTML = output;
}