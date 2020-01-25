function biodata(nama, umur) {
    return{
        name : nama,
        age : umur,
        address : "Jl. Rajawali Utara no.75 RT.04 RW.01 Pekalongan Utara, Kota Pekalongan",
        hobbies : ["Nonton Film", "Koding", "Futsal", "Main Game"],
        is_married : false,
        list_school : [
            {
                name : "TK Kutilang 1 Pekalongan",
                year_in : 2004,
                year_out : 2006,
                major : "null"
            },
            {
                name : "SD Muhammadiyah 1 Pekalongan",
                year_in : 2006,
                year_out : 2012,
                major : "null"
            },
            {
                name : "SMP Negeri 1 Pekalongan",
                year_in : 2012,
                year_out : 2015,
                major : "null"
            },
            {
                name : "SMK Telkom Purwokerto",
                year_in : 2015,
                year_out : 2018,
                major : "Teknik Komputer dan Jaringan"
            }
        ],
        skills : [
            {
                skill_name : "javascript",level : "beginner"
            },
            {
                skill_name : "html",level : "advance"
            },
            {
                skill_name : "adobe_illustrator", level: "beginner"
            }
        ],
        interest_in_coding : true
    }
}

console.log(biodata("Adia Mahardika", 19))