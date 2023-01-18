        /*Time countdown*/

        const activities = {
            'Izjašnjavanje učenika iz kog predmeta će raditi treći test.' : new Date('Dec 31, 2022').getTime(),
            'Provera tačnosti izjašnjenja iz kog predmeta će učenici raditi treći test.': new Date('Jan 27, 2023').getTime(),
            'Promena odluke o trećem testu.': new Date('Jan 31, 2023 15:00:00').getTime(),
            'Objavljivanje konačnog izjašnjenja učenika o trećem testu.': new Date('Feb 1, 2023 08:00:00').getTime(),
            'Probni završni ispit - matematika': new Date('Mart 24, 2023 12:00:00').getTime(),
            'Probni završni ispit - srpski jezik i treći test': new Date('Mart 25, 2023 09:00:00').getTime(),
            'Analiza probnog završnog ispita': new Date('Mart 31, 2023').getTime(),
            'Elektronsko i neposredno prijavljivanje kandidata za prijemni ispit.': new Date('April 24, 2023 16:00:00').getTime(),
            'Prijemni ispiti u umetničkim školama likovne oblasti.': new Date('May 12, 2023').getTime(),
            'Prijemni ispit za učenike sa posebnim sposobnostima za biologiju i hemiju.': new Date('May 13, 2023').getTime(),
            'Prijemni ispit za učenike sa posebnim sposobnostima za scenske i audio-vizuelne umetnosti.': new Date('May 13, 2023').getTime(),
            'Prijemni ispit za učenike sa posebnim sposobnostima za filološke nauke.': new Date('May 14, 2023').getTime(),
            'Prijemni ispit za učenike sa posebnim sposobnostima za računarstvo i informatiku i fiziku (matematika).': new Date('May 20, 2023').getTime(),
            'Prijemni ispit za učenike sa posebnim sposobnostima za geografiju i istoriju.': new Date('May 20, 2023').getTime(),
            'Prijemni ispit za učenike sa posebnim sposobnostima za fiziku.': new Date('May 20, 2023').getTime(),
            'Prijemni ispit za odeljenja u kojima se nastava ostvaruje na stranom jeziku.': new Date('May 20, 2023').getTime(),
            'Prijemni ispit u muzičkim školama.': new Date('May 21, 2023').getTime(),
            'Prijemni ispit u baletskim školama.': new Date('May 21, 2023').getTime(),
            'Prijemni ispit za učenike sa posebnim sposobnostima za matematiku.': new Date('May 21, 2023 10:00:00').getTime(),
            'Preliminarni rezultati prijemnih ispita.': new Date('May 23, 2023').getTime(),
            'Podnošenje i rešavanje prigovora na preliminarne rezultate prijemnih ispita.': new Date('May 23, 2023').getTime(),
            'Konačni rezultati prijemnih ispita.': new Date('May 24, 2023').getTime(),
            'Prijavljivanje učenika i podnošenje sportske dokumentacije za Sportsku gimnaziju i sportska odeljenja pri ostalim gimnazijama.': new Date('Jun 10, 2023').getTime(),
            'Prijemni ispit za IBO odeljenja u gimnazijama.': new Date('Jun 17, 2023').getTime(),
            'Završni ispit - srpski jezik': new Date('Jun 21, 2023 09:00:00').getTime(),
            'Završni ispit - matematika': new Date('Jun 22, 2023 09:00:00').getTime(),
            'Završni ispit - treći test': new Date('Jun 23, 2023 09:00:00').getTime(),
            'Preliminarni rezultati završnog ispita.': new Date('Jun 25, 2023').getTime(),
            'Elektronski prigovori na preliminarne rezultate završnog ispita.': new Date('Jun 25, 2023').getTime(),
            'Prigovori na preliminarne rezultate završnog ispita - neposredno u školi.': new Date('Jun 26, 2023').getTime(),
            'Dostavljanje odgovora prvostepene komisije na prigovore.': new Date('Jun 27, 2023').getTime(),
            'Prigovori za drugostepenu komisiju.': new Date('Jun 27, 2023').getTime(),
            'Dostavljanje odgovora drugostepene komisije na prigovore.': new Date('Jun 27, 2023 16:00:00').getTime(),
            'Objavljivanje konačnih rezultata završnog ispita.': new Date('Jun 28, 2023 08:00:00').getTime(),
            'Upis u muzičke i baletske škole.': new Date('Jun 28, 2023 15:00:00').getTime(),
            'Elektronsko popunjavanje liste želja.': new Date('Jun 29, 2023 08:00:00').getTime(),
            'Popunjavanje liste želja neposredno u školi.': new Date('Jun 30, 2023 08:00:00').getTime(),
            'Prigovori na liste želja i unošenje ispravki.': new Date('Jul 1, 2023 08:00:00').getTime(),
            'Objavljivanje konačne liste želja učenika.': new Date('Jul 2, 2023 08:00:00').getTime(),
            'Objavljivanje konačnih rezultata raspodele po školama i obrazovnim profilima.': new Date('Jul 3, 2023').getTime(),
            'Objavljivanje preostalih slobodnih mesta za upis u drugom upisnom krugu.': new Date('Jul 3, 2023').getTime(),
            'Popunjavanje liste želja za drugi upisni krug.': new Date('Jul 3, 2023').getTime(),
            'Neposredno podnošenje prijave za upis učenika u srednje škole, osim za muzičke i baletske škole.': new Date('Jul 3, 2023').getTime(),
            'Objavljivanje konačnog rasporeda učenika po školama u drugom upisnom krugu.': new Date('Jul 4, 2023 23:59:00').getTime(),
            'Objavljivanje preostalih slobodnih mesta za upis posle drugog upisnog kruga.': new Date('Jul 5, 2023 08:00:00').getTime(),
            'Podnošenje prijave za upis u srednje škole za drugi upisni krug, osim za muzičke i baletske škole.': new Date('Jul 5, 2023 15:00:00').getTime(),
            'Elektronsko podnošenje prijave za upis učenika u srednje škole posle prvog i drugog upisnog kruga.': new Date('Jul 7, 2023 15:00:00').getTime(),
            'Završni ispit - avgustovski rok - srpski jezik': new Date('Aug 16, 2023').getTime(),
            'Završni ispit - avgustovski rok - matematika': new Date('Aug 17, 2023').getTime(),
            'Završni ispit - avgustovski rok - treći test': new Date('Aug 18, 2023').getTime(),
            'Preliminarni rezultati avgustovskog završnog ispita na nivou škole.': new Date('Aug 21, 2023').getTime(),
            'Prigovori na rezultate avgustovskog završnog ispita i podnošenje molbi za upis (u okružnim upisnim komisijama).': new Date('Aug 22, 2023').getTime(),
            'Unos odluka o upisu.': new Date('Aug 23, 2023').getTime(),
            'Upis učenika u srednje škole - treći upisni krug, osim za muzičke i baletske škole.': new Date('Aug 24, 2023').getTime(),
            'Prijavljivanje i raspoređivanje vanrednih učenika starijih od 17 godina za upis u srednju školu.': new Date('Aug 25, 2023').getTime()
        }

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

        sada = new Date().getTime()
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


        /*From file script2.js*/

        
        const dict2 = activities
    
        /*function key_for_value(dictionary, value) {
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
    
    
        Brisanje prošlih događaja iz dict2
            sada = new Date('May 15, 2023').getTime()
            for (const događaj of Object.values(dict2)){
                if (događaj < sada){
                    delete dict2[key_for_value(dict2, događaj)]
                }
            }*/

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

    
    
