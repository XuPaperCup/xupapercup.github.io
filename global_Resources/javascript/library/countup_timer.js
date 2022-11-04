var countup_minutesLabel = document.getElementById("countup_minutes");
var countup_secondsLabel = document.getElementById("countup_seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime()
{
    ++totalSeconds;
    countup_secondsLabel.innerHTML = pad(totalSeconds%60);
    countup_minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val)
{
    var valString = val + "";
    if(valString.length < 2)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
    }