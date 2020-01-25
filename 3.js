function count_handshake(jmlOrang){
    //deklarasi variabel i yang berisi 0
    let i = 0
    //deklarasi variabel jabatTangan yang berisi 0
    let jabatTangan = 0

    //perulangan untuk menghitung jumlah jabat tangan
    while(i < jmlOrang){
        
        jabatTangan +=i
        
        i++
    }

    return jabatTangan
}

console.log(count_handshake(3))

console.log(count_handshake(5))
