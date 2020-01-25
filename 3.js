function count_handshake(jmlOrang){
    let i = 0
    let jabatTangan = 0

    while(i < jmlOrang){
        jabatTangan +=i
        i++
    }

    return jabatTangan
}

// console.log(count_handshake(3))
console.log(count_handshake(5))
