function findHighestProfit(data){
    if(data){
        // deklarasi variabel profitAwal yang bernilai 0
        let profitAwal = 0
        // menghitung panjang parameter data kemudian disimpan di variabel panjang
        let panjang = data.length
        
        for (a = 0; a < panjang; a++){
            for (x = a+1; x < panjang; x++){
                let profit = data[x]-data[a]

                if (profit > profitAwal){
                    profitAwal = profit
                    
                }
            }
        }
        
        //jika hasil profitAwal lebih dari 0 maka
        if(profitAwal > 0){
            return profitAwal
        } else {
            //jika hasil profitAwal adalah 0 atau kurang dari 0 maka
            return "Tidak bisa Mendapatkan Profit Hari ini"
        }
    } 
}

console.log(findHighestProfit([10, 2, 11, 20, 3, 5]));
//18
// console.log(findHighestProfit([33, 29, 11, 3]))
// //Tidak bisa Mendapatkan Profit Hari ini