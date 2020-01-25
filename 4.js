function findDuplicates(kata){

    //deklarasi variabel hasil yang bertipe data array
    let hasil = []
    // regular expression untuk mencari huruf dan karakter
    let reg = /[A-Za-z!@#$%^&*()_,.]/g

    //pengetesan parameter kata menggunakan regex, jika nilainya true maka 
    if(reg.test(kata) == true){
        
        // menghilangkan spasi pada parameter kemudian menggabungkannya kembali dan disimpan ke variabel huruf
        let huruf = kata.split(" ").join("")
        
        //mengonversi huruf besar ke huruf kecil jika ada, serta mengelompokkan karakter yang sama
        let arr = huruf.toLowerCase().split("").sort().join("").match(/(.)\1+/g)
        if (arr == null ){
            //jika tidak ada karakter yang sama maka tampil
            hasil ="Tidak ada karakter yang berulang!"
        } else {
            //jika ada karakter yang sama maka
            for (var a = 0; a < arr.length; a++)
            {
                // menghitung jumlah masing masing karakter yang sama
                let x = arr[a].charAt()+ ':' + arr[a].length
            hasil.push(x)
            }
        }
    } else {
        //jika nilainya false maka
        hasil = "Input anda bukan string!"
    }
    //mengembalikan nilai yang telah diinput
    return hasil
}
console.log("Hari apa saja saya bisa!")
console.log(findDuplicates("Hari apa saja saya bisa!"))

console.log("cepat kerjakan!!!")
console.log(findDuplicates("cepat kerjakan!!!"))

console.log("Adobe")
console.log(findDuplicates("Adobe"))

console.log(33)
console.log(findDuplicates(33))