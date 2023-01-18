        /*Time countdown*/

import { activities } from "./activities"

    var countDownDate = new Date("Jun 21, 2023 09:00:00").getTime()
    var x = setInterval(function(){
        var now = new Date().getTime()
        var distance = countDownDate - now

        var days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)

        document.getElementById('days').innerHTML = days
        document.getElementById('hours').innerHTML = hours
        document.getElementById('minutes').innerHTML = minutes
        document.getElementById('seconds').innerHTML = seconds

        if (distance < 0){
            clearInterval(x)
            document.getElementById('days').innerHTML = '00'
            document.getElementById('hours').innerHTML = '00'
            document.getElementById('minutes').innerHTML = '00'
            document.getElementById('seconds').innerHTML = '00'
        }

    }, 1000)


    const dict = activities

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


    /*Brisanje prošlih događaja iz dict*/

        sada = new Date('May 15, 2023').getTime()
        for (const događaj of Object.values(dict)){
            if (događaj < sada){
                delete dict[key_for_value(dict, događaj)]
            }
        }

        /*Menjanje teksta sledećih aktivnosti*/

        lista = all_keys_for_value(dict, Math.min.apply(Math, Object.values(dict)))
        if (lista.length == 1){
            const tekst_sledeće = lista[0]
            document.getElementById('aktivnost').innerHTML = tekst_sledeće
        }
        if (lista.length == 2){
            const tekst_sledeće = lista[0]
            document.getElementById('aktivnost').innerHTML = tekst_sledeće
            const tekst_sledeće_1 = lista[1]
            document.getElementById('aktivnost1').innerHTML = tekst_sledeće_1
        }
        if (lista.length == 3){
            const tekst_sledeće = lista[0]
            document.getElementById('aktivnost').innerHTML = tekst_sledeće
            const tekst_sledeće_1 = lista[1]
            document.getElementById('aktivnost1').innerHTML = tekst_sledeće_1
            const tekst_sledeće_2 = lista[2]
            document.getElementById('aktivnost2').innerHTML = tekst_sledeće_2
        }
        if (lista.length == 4){
            const tekst_sledeće = lista[0]
            document.getElementById('aktivnost').innerHTML = tekst_sledeće
            const tekst_sledeće_1 = lista[1]
            document.getElementById('aktivnost1').innerHTML = tekst_sledeće_1
            const tekst_sledeće_2 = lista[2]
            document.getElementById('aktivnost2').innerHTML = tekst_sledeće_2
            const tekst_sledeće_3 = lista[3]
            document.getElementById('aktivnost3').innerHTML = tekst_sledeće_3
        }



        /*Menjanje datuma sledeće aktivnosti*/
        const datum_sledece = dobijanje_datuma(Math.min.apply(Math, Object.values(dict)))
        document.getElementById('datum').innerHTML = datum_sledece

