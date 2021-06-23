
function javscr(){
    console.log("js started...");
    var key = document.getElementById("cipherKey").value;
    var text = document.getElementById("cipherText").value;
    var d = 1;// differnece between encryption 
    if (document.getElementById("decrypt").checked == true) {
        d = -1;
    } else {
        d = 1;
    }
    var letters = text.split("").map(x=>x.charCodeAt(0));
    var shifts = key.toLowerCase().split("").map(x=>x.charCodeAt(0));
    var out = ""
    for (let i = 0; i < shifts.length; i++) { 
        if (shifts[i]  >= "a".charCodeAt(0) && shifts[i] <= "z".charCodeAt(0)) {
            shifts[i] -= "a".charCodeAt(0);
        } else {
            shifts[i] = 0;
        }
    }
    var returnOffset = 0;
    for (let i = 0, j = 0; i < letters.length; i++, j++) { 
        var sI = ((j-document.getElementById("offset").value)%shifts.length+shifts.length)%shifts.length
        if (letters[i]  >= "a".charCodeAt(0) && letters[i] <= "z".charCodeAt(0)) {
            var temp = letters[i] - "a".charCodeAt(0);
            temp = (temp + d*shifts[sI] +26) % 26;
            letters[i] = temp + "a".charCodeAt(0);
        } else if (letters[i]  >= "A".charCodeAt(0) && letters[i] <= "Z".charCodeAt(0)) {
            var temp = letters[i] - "A".charCodeAt(0);
            temp = (temp + d*shifts[sI] +26) % 26;
            letters[i] = temp + "A".charCodeAt(0);
        } else {
            j--;
        }
        out = out + String.fromCharCode(letters[i]);
        if (letters[i] == 10) {
            returnOffset += 1;
        }
    }

    console.log(letters);
    
    //var out = letters.join();
    console.log(out);
    document.getElementById("outputText").innerHTML = out;
}