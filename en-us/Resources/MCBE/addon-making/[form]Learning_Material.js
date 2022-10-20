let chapterObject = {
    "Chapter 1": ["Lesson 1", "Lesson 2"]
}

window.onload = function() {
    let chapterSel = document.getElementById("chapter");
    let lessonSel = document.getElementById("lesson");
    for (var x in chapterObject) {
        chapterSel.options[chapterSel.options.length] = new Option(x, x);
    }
    chapterSel.onchange = function() {
        //Empty Lesson dropdown and Output
        lessonSel.length = 2;
        if (document.getElementById("chapter").selectedIndex == 0) {
            document.getElementById("lesson").selectedIndex = 0;
        } else {
            document.getElementById("lesson").selectedIndex = 1;
        }
        document.getElementById("output").innerHTML = "";
        //Display correct values
        var y = chapterObject[this.value];
        for (
            var i = 0;
            i < y.length;
            i++
        ) {
        lessonSel.options[lessonSel.options.length] = new Option(y[i], y[i]);
        }
    }
    lessonSel.onchange = function() {
        //Empty Output
        document.getElementById("output").innerHTML = ""
    }
}

window.onbeforeunload = function() {
    document.getElementById("chapter").selectedIndex = -1;
    document.getElementById("lesson").selectedIndex = -1;
}