var isStart = false;
var milisec = 0;
var sec = 0;
var minute = 0;
var timer;
var counter = 0;

function startOrStop() {
    if (!isStart) {
        isStart = true;
        timer = setInterval(modifyTimer, 10);
    } else {
        isStart = false;
        clearInterval(timer);
    }
}

function modifyTimer() {
    if (milisec < 100) {
        milisec += 1;
        document.getElementById("milisecond-display").innerHTML = milisec.toLocaleString(undefined, { minimumIntegerDigits: 2 });
    } else {
        milisec = 1;
        if (sec < 60) {
            sec += 1;
            document.getElementById("second-display").innerHTML = sec.toLocaleString(undefined, { minimumIntegerDigits: 2 });
        } else {
            sec = 1;
            if (minute < 60) {
                minute += 1;
                document.getElementById("minute-display").innerHTML = minute.toLocaleString(undefined, { minimumIntegerDigits: 2 });
            } else (window.clearInterval(timer));
        }
    }
}

function lapTimer() {
    counter++;
    if (counter == 1) {
        let lapHead = document.createElement("thead");
        lapHead.innerHTML = `
        <tr>
        <th>No.</th>
        <th>Time</th>
        </tr>`;
        document.getElementById("lap-table").appendChild(lapHead);
        let lapBody = document.createElement("tbody");
        lapBody.id = "lap-records";
        document.getElementById("lap-table").appendChild(lapBody);
    };
    let lapRecord = document.createElement("tr");
    lapRecord.innerHTML = `<td>${counter}</td>
    <td>${minute.toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${sec.toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${milisec.toLocaleString(undefined, { minimumIntegerDigits: 2 })}</td>`;

    document.getElementById("lap-records").appendChild(lapRecord);
}

function resetTimer() {
    isStart = false;
    clearInterval(timer);

    milisec = 0;
    sec = 0;
    minute = 0;
    counter = 0;

    document.getElementById("milisecond-display").innerHTML = milisec.toLocaleString(undefined, { minimumIntegerDigits: 2 });
    document.getElementById("second-display").innerHTML = sec.toLocaleString(undefined, { minimumIntegerDigits: 2 });
    document.getElementById("minute-display").innerHTML = minute.toLocaleString(undefined, { minimumIntegerDigits: 2 });
    document.getElementById("lap-table").innerHTML = "";

}