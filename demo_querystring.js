const fs = require("fs");

var valid = fs.readFileSync("input2.txt", "utf8")
var validArr = valid.split("\n")

function validate() {

    var validPasswords = 0


for (var i = 0; i < validArr.length;i++) {

    var low =  validArr[i].match(/\d+/g)[0];
    var high = validArr[i].match(/\d+/g)[1];
    var password = validArr[i].match(/[a-zA-Z]+/g)[1];
    var letter = validArr[i].match(/[a-zA-Z]+/g)[0];

    if (test(password, low, high, letter)) {
        validPasswords++
    }

}


console.log("Number of valid passwords: " + validPasswords);



}

test = function(password, low, high, letter) {

    var count = 0 

    for (i=0; i< password.length; i++) {
        if (password.charAt(i) === letter) {
            count++
        }
       
    }

    if (low <= count && count <= high) {
        return true
    } else {
        return false 
    }

    
}

validate();
