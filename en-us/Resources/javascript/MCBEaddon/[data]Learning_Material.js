function processValue() {
    // Get droplist value
    let chapterValue = document.getElementById("chapter").value;
    let lessonValue = document.getElementById("lesson").value;
    let output;
    // Tell user the data is processing
    output = "Processing your data request...";
    document.getElementById("output").innerHTML = output;
    // Use switch and if to process data
    output = null;
    switch (chapterValue) {
        case "0":
            output = "Please select a valid chapter and lesson!"
            break;
        case "Chapter 1":
            if (lessonValue == "0") {
                output = "Please select a valid lesson!"
            }
            if (lessonValue == "Lesson 1") {
                output = "Input: ch1-1"
            }
            if (lessonValue == "Lesson 2") {
                output = "Input: ch1-2"
            }
            break;
    }
    // Output the result
    document.getElementById("output").innerHTML = output;
}