function usernameValidity(username){
     // regular expression untuk mencari huruf a-z dan karakter _ dan .
    let checkUsrname1 = /[a-z_.]/g
     // regular expression untuk mencari huruf A-Z dan karakter selain _ dan .
    let checkUsrname2 = /[A-Z!@#$%^&*-]/g

    //cek apakah panjang username lebih minimal 8 dan maksimal 12
    if(username.length >= 8 && username.length <= 12){
        //jika true maka dilanjut test menggunakan regex checkUsrname1
        if(checkUsrname1.test(username)){
            //jika true maka dilanjut test menggunakan regex checkUsrname2
            if(checkUsrname2.test(username)){
                //jika terdapat huruf besar atau simbol yang ada pada regex checkUsrname2 maka return false
                return false;
            } else {
                //jika tidak ada maka return true
                return true;
            }
        }
    }
    return false;
}

function passwordValidity(password){
    // regular expression untuk mencari alphanumeric
    let alphanumeric = /[0-9a-zA-Z]/g
    // regular expression untuk mencari angka
    let angka = /[0-9]/
    // regular expression untuk mencari simbol
    let simbol = /[!@#$%&_-]/g

    // jika alphanumeric, angka, dan simbol bernilai true dan panjang password = 9 maka
    if (alphanumeric.test(password) && angka.test(password) && simbol.test(password) && password.length == 9) {
        //tampilkan true
        return true;
    }
    //jika sumuanya atau salah satu bernilai false, maka tampilkan false
    return false;
}

console.log("Username : john.smith")
console.log(usernameValidity("john.smith"))
//true

console.log("Username : johnsmith26")
console.log(usernameValidity("johnsmith26"))
//true

console.log("Username : JOHNSmith")
console.log(usernameValidity("JOHNSmith"))
//false

console.log("Password : j0hn5m!th")
console.log(passwordValidity("j0hn5m!th"))
//true