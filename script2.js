import { activities } from "./activities";



        const dict2 = activities
    
        function key_for_value(dictionary, value) {
            return Object.keys(dictionary).find(key => dictionary[key] === value);
        }
    
    
    
        function all_keys_for_value(dictionary, value) {
            return Object.keys(dictionary).filter(key => dictionary[key] === value);
        }
    
    
    
    
    
    
    
        function dobijanje_datuma(p){
            const godina = new Date(p).getFullYear()
            const mesec = new Date(p).getMonth() + 1
            const dan = new Date(p).getDate()
            const konacno = dan + '. ' + mesec + '. ' + godina + '.   '
            return konacno
        }
    
    
        /*Brisanje prošlih događaja iz dict2*/
            sada = new Date('May 15, 2023').getTime()
            for (const događaj of Object.values(dict2)){
                if (događaj < sada){
                    delete dict2[key_for_value(dict2, događaj)]
                }
            }

            /*Dobijanje rečnika bez već prikazanog događaja*/
            l = all_keys_for_value(dict, Math.min.apply(Math, Object.values(dict)))
            for (const i of l){
                delete dict2[i]
            }



            /*Menjanje teksta sledećih aktivnosti*/
    
            lista2 = all_keys_for_value(dict2, Math.min.apply(Math, Object.values(dict2)))
            if (lista2.length == 1){
                const tekst_sledeće2 = lista2[0]
                document.getElementById('a').innerHTML = tekst_sledeće2
            }
            if (lista2.length == 2){
                const tekst_sledeće2 = lista2[0]
                document.getElementById('a').innerHTML = tekst_sledeće2
                const tekst_sledeće2_1 = lista2[1]
                document.getElementById('a1').innerHTML = tekst_sledeće2_1
            }
            if (lista2.length == 3){
                const tekst_sledeće2 = lista2[0]
                document.getElementById('a').innerHTML = tekst_sledeće2
                const tekst_sledeće2_1 = lista2[1]
                document.getElementById('a1').innerHTML = tekst_sledeće2_1
                const tekst_sledeće2_2 = lista2[2]
                document.getElementById('a2').innerHTML = tekst_sledeće2_2
            }
            if (lista2.length == 4){
                const tekst_sledeće2 = lista2[0]
                document.getElementById('a').innerHTML = tekst_sledeće2
                const tekst_sledeće2_1 = lista2[1]
                document.getElementById('a1').innerHTML = tekst_sledeće2_1
                const tekst_sledeće2_2 = lista2[2]
                document.getElementById('a2').innerHTML = tekst_sledeće2_2
                const tekst_sledeće2_3 = lista2[3]
                document.getElementById('a3').innerHTML = tekst_sledeće2_3
            }
    
    
    
            /*Menjanje datuma sledeće aktivnosti*/
            const datum_sledece2 = dobijanje_datuma(Math.min.apply(Math, Object.values(dict2)))
            document.getElementById('d').innerHTML = datum_sledece2

    
    