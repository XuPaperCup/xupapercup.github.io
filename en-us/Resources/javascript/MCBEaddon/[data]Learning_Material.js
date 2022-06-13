function processValue() {
    let chapterValue = document.getElementById("chapter").value;
    let lessonValue = document.getElementById("lesson").value;
    let output = null;
    switch (chapterValue) {
        case "0":
            output = "Please select a chapter and a lesson!"
            break;
        case "Chapter 1":
            if (lessonValue == "0") {
                output = "Please select a lesson!"
            }
            if (lessonValue == "Lesson 1") {
                output = "ch1L1"
            }
            if (lessonValue == "Lesson 2") {
                output = "ch1L2"
            }
            break;
    }
    document.getElementById("output").innerHTML = output;
}