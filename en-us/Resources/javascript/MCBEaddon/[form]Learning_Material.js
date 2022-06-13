let chapterObject = {
    "Chapter 1": ["Lesson 1", "Lesson 2"]
}

window.onload = function() {
    var chapterSel = document.getElementById("chapter");
    var lessonSel = document.getElementById("lesson");
    for (var x in chapterObject) {
        chapterSel.options[chapterSel.options.length] = new Option(x, x);
    }
    chapterSel.onchange = function() {
        //Empty Lesson dropdown
        lessonSel.length = 2;
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
}