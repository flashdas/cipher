
function VigenereCipher(){
    var key = document.getElementById("cipherKey").value;
    var text = document.getElementById("cipherText").value;
    var d = 1;
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
        var sI = ((j-document.getElementById("offset").value)%
        shifts.length+shifts.length)%shifts.length;

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

    document.getElementById("outputText").innerHTML = out;
    //console.log("output: " + out);
}

// Curstesy of https://stackoverflow.com/questions/14070105/pre-fill-form-field-via-url-in-html
function setUrlParams() {
    var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`

    for(var i = 0; i < hashParams.length; i++){
        var p = hashParams[i].split('=');
        if (document.getElementById(p[0]) != null && decodeURIComponent(p[1]) != null) {
            document.getElementById(p[0]).value = decodeURIComponent(p[1]);
        }
    }
    //console.log("Loaded elements: "+ hashParams);
}


function kryptos(){
    var key1 = document.getElementById("key1").value; console.log("key 1="+key1);
    var key2 = document.getElementById("key2").value.toLowerCase();
    var text = document.getElementById("cipherText").value;
    var d = 1; if (document.getElementById("decrypt").checked == true) {d = -1;} 
    var alph = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0; i < key2.length ; i++) {
        alph = alph.replace(key2.substr(i, 1), "");
    }
    alph = key2 + alph;
    document.getElementById("alphabet").innerHTML = alph;
    console.log("alph=" + alph);

    var letters = text.split("");

    var shifts = new Array(key1.length).fill(0);
    for (let i = 0; i < shifts.length; i++) { 
        if (key1.toLowerCase()[i]  >= "a" && key1.toLowerCase()[i] <= "z") {
            shifts[i] = alph.indexOf(key1.toLowerCase()[i]);
        } /*else {
            shifts[i] = 0;
        }//*/
    }console.log("shifts="+shifts);
    ///////////////////////////////////////////////////////////////
    
    var out = "";
    for (let i = 0, j = 0; i < letters.length; i++, j++) { 
        var sI = j % shifts.length;
        if (letters[i]  >= "a" && letters[i] <= "z") {
            // temp = letter's number in alph
            var temp = alph.indexOf(letters[i]);

            // increase temp by key1
            temp = (temp + d*shifts[sI] + 26) % 26;

            // letter[i] = temp
            letters[i] = alph.charAt(temp);

        } else if (letters[i]  >= "A" && letters[i] <= "Z") {
            // dont forget to convert to/from upper case
            // temp = letter's number in alph
     //       console.log("letters = " + letters + "  i="+i+"  j="+j);
            var temp = alph.indexOf(letters[i].toLowerCase());

            // increase temp by key1
            temp = (temp + d*shifts[sI] + 26) % 26;

            // letter[i] = temp
            letters[i] = alph.charAt(temp).toUpperCase();
             ////////////////////////Continue from here.
        } else {
            j--;
        }
        out = out + letters[i];
        
        
    }
 //   console.log("out = " + letters);
    document.getElementById("outputText").innerHTML = out;
    //console.log("output: " + out);
    /** */
}

function k1(){
    document.getElementById("key1").value = "PALIMPSEST";
    document.getElementById("key2").value = "KRYPTOS";
    document.getElementById("cipherText").innerHTML = 
    `EMUFPHZLRFAXYUSDJKZLDKRNSHGNFIVJ
YQTQUXQBQVYUVLLTREVJYQTMKYRDMFD`
}
function k2(){
    document.getElementById("key1").value = "ABSCISSA";
    document.getElementById("key2").value = "KRYPTOS";
    document.getElementById("cipherText").innerHTML = 
    `VFPJUDEEHZWETZYVGWHKKQETGFQJNCE
GGWHKK?DQMCPFQZDQMMIAGPFXHQRLG
TIMVMZJANQLVKQEDAGDVFRPJUNGEUNA
QZGZLECGYUXUEENJTBJLBQCRTBJDFHRR
YIZETKZEMVDUFKSJHKFWHKUWQLSZFTI
HHDDDUVH?DWKBFUFPWNTDFIYCUQZERE
EVLDKFEZMOQQJLTTUGSYQPFEUNLAVIDX
FLGGTEZ?FKZBSFDQVGOGIPUFXHHDRKF
FHQNTGPUAECNUVPDJMQCLQUMUNEDFQ
ELZZVRRGKFFVOEEXBDMVPNFQXEZLGRE
DNQFMPNZGLFLPMRJQYALMGNUVPDXVKP
DQUMEBEDMHDAFMJGZNUPLGEWJLLAETG`
}
function swap(){
    var temp = document.getElementById("key1").value;
    document.getElementById("key1").value = document.getElementById("key2").value;
    document.getElementById("key2").value = temp;
}