// Zadanie 3
// function search() {
//    const liczba = 16;
//    console.log(`Zadeklarowana liczba: ${liczba}`);
// }

// // Zadanie 4
// function search () {
//    const ciag_1 = 'Java';
//    const ciag_2 = 'Script';
//
//    console.log(`Połączony ciąg znaków: ${ciag_1}${ciag_2}`);
// }
// search();

// Zadanie 5
// function search () {
//    const imie = 'ola';
//    const wiek = 22;
// console.log(`Imie: ${imie}\nWiek: ${wiek}`);
//Przełamanie linji możemy zrobić \n
// }
// search();

//  Zad 6 “Sprawdzanie typu danych zmiennych przy pomocy typeof”.
//
// function search () {
//    const a = 'JS';
//    const b = 16;
//    const c = true;
//    console.log(`a: ${typeof a}\nb: ${typeof b}\nc: ${typeof c}`);
//        }
// search()

// Zad 7 "Operator + jako operator konkatenacji oraz operator dodawania”.
//
// function search () {
//     const a = '4';
//     const b = 2;
//
//     console.log(a + b);
//     console.log(Number(a)+b);
// }
//
// search();


// --------“Metoda prompt()--------

// Zad 8 “Metoda prompt() - pobieranie liczby od użytkownika”.
//
// function search () {
//     const liczba = Number(prompt(`Podaj liczbe`));
//     console.log(`Podana liczba: ${liczba}`);
//     console.log(typeof(liczba));
// }
// search();
// // Zad 9
// “Metoda prompt() - pobieranie łańcucha znaków od użytkownika”.
//
// function search () {
//     const imie = prompt(` Podaj swoje imie.`)
//     console.log(`Podane imie: ${imie}`);
// }
// search();

// Zad 10 “Metoda prompt() - sprawdzanie typu danych wprowadzonych przez użytkownika”.
//
//
// function search () {
//     const liczba = Number(prompt(`Podaj liczbe:`));
//     const imie = String(prompt(`Podaj imie:`));
//
//     console.log(`Liczba: ${liczba}\t Typ danych: ${typeof(liczba)}`);
//     console.log(`Imie: ${imie}\t Typ danych: ${typeof(imie)}`);
// }
//
// search();

// Zad 11 “Metoda prompt() z dwoma parametrami”.
//
//
// function search() {
//     const rok_urodzenia = prompt(`Podaj date urodzenia: `, `DD-MM-RRRR`);
//     console.log(rok_urodzenia);
// }
// search()

// Zad 12 “Metoda prompt() - prosty kalkulator” z instrukcja switch.
//
//
// function search () {
//     const liczba_1 = prompt(`Podaj pierwszą liczbe.`);
//     const znak = prompt(`Podaj znak prostej operacji matematycznej`,` + - * /`);
//     const liczba_2 = prompt(`Podaj drugą liczbe.`);
//     let wynik;
//     console.log(wynik)
//     console.log(liczba_1,liczba_2);
//
//     switch (znak) {
//         case '+':
//             wynik = liczba_1 + liczba_2;
//             console.log(`${liczba_1} ${znak} ${liczba_2} = ${wynik}`);
//             break;
//         case '-':
//             wynik = liczba_1 - liczba_2;
//             console.log(`${liczba_1} ${znak} ${liczba_2} = ${wynik}`);
//             break;
//         case '*':
//             wynik = liczba_1 * liczba_2;
//             console.log(`${liczba_1} ${znak} ${liczba_2} = ${wynik}`);
//             break;
//         case '/':
//             wynik = liczba_1 / liczba_2;
//             console.log(`${liczba_1} ${znak} ${liczba_2} = ${wynik}`);
//             break;
//         default:
//             console.log(`Podano zly znak`);
//
//
//     }
// }
//
// search();

// Zad 13 “Dodawania dwóch zmiennych typu number”.
//
//
// function search() {
//     const a = 15;
//     const b = 13;
//     const wynik = a + b;
//
//     console.log(wynik);
// }
//
// search()

// Zadanie 14  “Obliczenie pola koła”.
//
//
// function search() {
//     const PI = 3.14;
//     const promien = 5;
//     let pole;
//
//     pole = PI * promien * promien;
//     console.log(`Pole kola o promieniu ${promien} cm wynosi: ${pole} cm^2`);
// }
// search()

// // Zad 15 Napisz skrypt, w którym należy zadeklarować:
// //
//
// function search() {
//     const podstawa_a = 8;
//     const podstawa_b = 3;
//     const wysokosc = 5
//     let pole_trapezu;
//
//     pole_trapezu = wysokosc * (podstawa_a + podstawa_b)/2;
// console.log(`Pole trapezu o nastepujących podstawach ${podstawa_a} cm oraz ${podstawa_b} cm i wysokości ${wysokosc} cm wynosi ${pole_trapezu} cm^2 `);
// }
// search()

// Zad 16 “Obliczenie średniej z liczb”.
//
//
// function search() {
//     const a = 10;
//     const b = 13;
//     const c = 25;
//
//     console.log(`Średnia z liczb: ${a},${b},${c} wynosi:${(a+b+c)/3}`);
//
// }
// search()

// Zad 17
// function search () {
//     const liczba = 16;
//
//     console.log(`Pierwiastek kwadratowy z liczby ${liczba} wynosi ${Math.sqrt(liczba)}`);
// }
//
// search()

// Zad 18 - “Wykorzystanie metody cbrt() do wyznaczenia pierwiastka sześciennego”.
//
// function search () {
//     const liczba = 27;
//
//     console.log(`Pierwiastek szescienny z ${liczba} wynosi ${Math.cbrt(liczba)}`);
// }
//
// search()

// Zad 19 - “Wykorzystanie metody abs() do wyznaczenia wartości bezwzględnej”.
//
// function search() {
//     const x = -5; const y = 6;
//
//     console.log(`Wartość bezwzgledna z ${x} wynosi: ${Math.abs(x)}`);
//     console.log(`Wartość bezwzgledna z ${y} wynosi: ${Math.abs(y)}`);
//
// }
//
// search()

// Zad 20 -  “Wykorzystanie metod ceil() oraz floor() do zaokrąglania liczb”.
//
// function search() {
//     const x = 4.5;
//     const y = 5.3;
//
//     console.log(`x: ${x}, y:${y} \nZaokragllenie liczby do góry ${Math.ceil(x)}\nZaokragllenie liczby do dół ${Math.floor(y)}`)
// }
// search()

// Zad 21 -  “Wyznaczenie rozwiązań równania kwadratowego”.
//
//
// function search() {
//     const a = 1, b = 3, c = -4;
//     let delta, x1, x2;
//
//     delta = (b * b) - (4 * a * c);
//     x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     x2 = (-b - Math.sqrt(delta)) / (2 * a);
//
//     console.log('Rozwiazania rownania kwadratowego x^2 + 3x - 4 = 0');
//     console.log(`x1: ${x1}`);
//     console.log(`x2: ${x2}`);
// }
// search()

// Zad 22 - “Obliczenie kwoty końcowej inwestycji”.
// function search() {
//     const kwota = 20000, stopa_procentowa = 0.02, kapitalizacja = 4;
//     let wartosc_koncowa;
//
//     wartosc_koncowa = kwota * Math.pow((1 + stopa_procentowa), kapitalizacja);
//     console.log(`Wartosc koncowa inwestycji wynosi: ${wartosc_koncowa} PLN`);
// }
//
// search()

// 23 -  “Operator relacyjny ‘>’ oraz '<'.
//
// function search() {
//
//     const  warunek1 = 9 > 2;
//     const  warunek2 = 5 > 7;
//
//     console.log(warunek1,warunek2)
// }
// search()

// 24 -  “Operator relacyjny ‘!==’”.
//
// function search() {
//     const wartoscWyrazeniaLogocznego1 = 5 !== 0;  const wartoscWyrazeniaLogocznego2 = 4 !== 4;
//
//     console.log(`Wartość wyrażenia logicznego 5 !== 0 ${wartoscWyrazeniaLogocznego1} \nWartość wyrazenia logicznego 4 !== 4 ${ wartoscWyrazeniaLogocznego2}`)
// }
//
// search()

// Zad 25  “Operator logiczny ‘&amp;&amp;’ (AND)”.
// function search() {
//     const warunek1 = (3 > 2) && (6 < 4);
//     const warunek2 = (4 > 2) && (7 > 3);
//
//     console.log(`Wartość wyrazenia logicznego (3 > 2) && (6 < 4); ${warunek1} \nWartość wyrazenia logicznego (3 > 2) && (6 < 4); ${warunek2} `);
// }
//
// search()

// Zad 26  “Operator logiczny ‘||’ (OR)”.
//
// function search() {
//     const warunek1 = 15 > 13 || 4 < 9;
//     const warunek2 = 5 > 4 || 24 > 26;
//
//     console.log(`Wartość wyrażenia logicznego 15 > 13 || 4 < 9; ${warunek1} \nWartość wyrażenia logicznego 5 > 4 || 24 < 26; ${warunek2}`);
// }
// search()

// Zad  27  “Zamiana wartości dwóch zmiennych przy pomocy operatora przypisania ‘=’ “.
//
// function search() {
//     let liczba_1 = 15, liczba_2 = 10;
//     let temp;
//
//     console.log(`Pierwsza liczba przed zamiana: ${liczba_1}`);
//     console.log(`Druga liczba przed zamiana: ${liczba_2}`);
//
//     temp = liczba_1;
//     liczba_1 = liczba_2;
//     liczba_2 = temp;
//
//     console.log(`Pierwsza liczba po zamiana: ${liczba_1}`);
//     console.log(`Druga liczba po zamiana: ${liczba_2}`);
// }

// Zad 28  “Operator modulo ‘%’”. Math.floor zaokrągla w doł.
//
// const sznur60cm = 60;
// const kawalek7cm = 7;
// let resztkaSznura;
// let ilośćKawałków7cm;
//
// resztkaSznura = sznur60cm % kawalek7cm;
// ilośćKawałków7cm = Math.floor(sznur60cm / kawalek7cm);
// console.log(`ilość kawałków po 7 cm to ${ilośćKawałków7cm} reszta sznura ${resztkaSznura}`);
//

//Zad 29  “Operator inkrementacji ‘++’ oraz dekrementacji ‘--’”.
//
// function search() {
//     let liczba = 5;
//     console.log(`${liczba}`);
//     liczba++;
//     console.log(`Liczba po inkrementacji ${liczba}`);
//     liczba--;
//     console.log(`liczba po dekrementacji ${liczba}`);
// }
// search();

// Zad 30  “Operator potęgowania '**'"
//
// function search() {
//     const wartosc5 = 5;
//     const wartosc3 = 3;
//     let wynik;
// wynik = Math.pow(wartosc5, wartosc3)
//     console.log(`5^3 = ${wynik}`)
// }
// search()

// Zad 31  “Obliczenie wskaźnika BMI z wykorzystaniem poznanych operatorów”.
//
// function search() {
//
//     const patryk_waga = 83, patryk_wysokosc = 1.86;
//     const kuba_waga = 65, kuba_wysokosc = 1.75;
//
//     let patryk_bmi = patryk_waga / (patryk_wysokosc * patryk_wysokosc);
//     let kuba_bmi = kuba_waga / (kuba_wysokosc * kuba_wysokosc);
//
//     console.log(`Dane Patryka - waga: ${patryk_waga} kg, wysokosc: ${patryk_wysokosc} m`);
//     console.log(`BMI Patryka: ${Math.round(patryk_bmi * 100) / 100}`);
//     console.log(`Dane Kuby - waga: ${kuba_waga} kg, wysokosc: ${kuba_wysokosc} m`);
//     console.log(`BMI Kuby: ${Math.round(kuba_bmi * 100) / 100}`);
//
// }
// search()

// Zad 32   “Obliczenie kosztów paliwa przy pomocy poznanych operatorów”.
//
// function search() {
//     const benzyna = 5.21, diesel = 4.95;
//     const pojazd_a_spalanie = 8, pojazd_b_spalanie = 7.5;
//
//     console.log(`Koszt przejechania 100 km dla pojazdu A: ${Math.round((pojazd_a_spalanie * benzyna) * 100) / 100} PLN`);
//     console.log(`Koszt przejechania 100 km dla pojazdu B: ${Math.round((pojazd_b_spalanie * diesel) * 100) / 100} PLN`);
//
// }
// search()

// --- INSTRUKCJE WARUNKOWE --

// Zad 33 “Instrukcja warunkowa”.
// Napisz skrypt, w którym należy zadeklarować zmienną przechowującą wartość. Zdefiniuj instrukcje warunkową, która będzie wypisywać komunikat
// Wartosc zmiennej jest ujemna w przypadku kiedy wartość zmiennej będzie mniejsza od 0.
//
// function search() {
//     const wartosc = 2;
//
//     if (wartosc < 0) {
//         console.log(`Wartość zmiennej jest ujemna ${wartosc}`)
//     } else {
//         console.log(`Wartość jest dodatnia.`)
//     }
// }
// search()

// Zad 34  “Instrukcja warunkowa”.
//
// function search() {
//     const wartosc4 = 4;
//     const wartosc15 = 15;
//
//     if (wartosc4 && wartosc15 > 0) {
//         console.log(`wartosci zmiennych ${wartosc15} i ${wartosc4} są dodatnie.`)
//     }
//
// }
//
// search()

// // Zad 35 “Instrukcja warunkowa” Parzysta nie parzysta.
// function search() {
//     const liczba = 23;
//
//     if (liczba % 2 === 0) {
//         console.log('Wartosc zmiennej jest parzysta');
//     } else {
//         console.log('Wartosc zmiennej jest nieparzysta');
//     }
// }
// search()

// Zad 36  “Instrukcja warunkowa do sprawdzenia pełnoletności”.
//
// function search() {
//     const wiekKuby = 3;
//     if (wiekKuby > 18) {
//         console.log(`Kuba ma wiecej niż 18 lat prawda bo ma ${wiekKuby}`)
//     } else {
//         console.log(`Kuba ma mniej niż 18 lat ma ${wiekKuby}`)
//     }
// }
// search()

// Zad 37  “Zagnieżdżona instrukcja warunkowa else if {”.
// Logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true
//
// function search() {
//     const a = -15; const b = 22; const c = 43;
//     if (a > b && a > c) {
//         console.log(`${a} jest njwiekszą Liczbą`);
//     } else if ( b > a && b > c){
//         console.log(`${b} jest njwiekszą Liczbą`);
//
//     } else if (c > a && c > b) {
//         console.log(`${c} jest njwiekszą Liczbą`);
//     }
// }
// search()

//Zad 38 BYŁ PROBLEM!! “Rok przestępny sprawdzany przy pomocy instrukcji warunkowej”.
//
// function rokPrzystepny() {
//   const rok = 2025;
//
//     if ((rok % 4 === 0 && rok % 100 !== 0) || rok % 400 === 0) {
//         console.log(`Rok ${rok} jest przestepny`);
//     } else {
//         console.log(`Rok ${rok} nie jest przestepny`);
//     }
//
//
// }
// rokPrzystepny()

// Zad 39 “Zagnieżdżona instrukcja warunkowa”.
//
// function search() {
//     const wartosc = -22;
//     if (wartosc > 0 ) {
//         console.log(`Wartość jest dodatnia. ${wartosc}`)
//     } else if (wartosc === 0) {
//         console.log(`Wartość jest równa 0 ${wartosc}`)
//     } else if (wartosc < 0) {
//         console.log(`Wartość jest ujemna ${wartosc}`)
//     }
// }
// search()

// Zad 40  “Instrukcja warunkowa do sprawdzenia poprawności kątów w trójkącie”.
//
// const a = 60, b = 60, c = 60;
//     let suma;
//
//     suma = a + b + c;
//     if (suma === 180 && a > 0 && b > 0 && c > 0) {
//         console.log(`Trojkat(${a}, ${b}, ${c}) jest poprawny`);
//     } else {
//         console.log(`Trojkat(${a}, ${b}, ${c}) nie jest poprawny`)
//     }

// Zad 41  “Instrukcja warunkowa do wskazania, które BMI jest większe”.
//
// function search() {
//     const patryk_waga = 83, patryk_wysokosc = 1.86;
//     const kuba_waga = 65, kuba_wysokosc = 1.75;
//
//     let patryk_bmi = patryk_waga / (patryk_wysokosc * patryk_wysokosc);
//     let kuba_bmi = kuba_waga / (kuba_wysokosc * kuba_wysokosc);
//
//     console.log(`Dane Patryka - waga: ${patryk_waga} kg, wysokosc: ${patryk_wysokosc} m`);
//     console.log(`BMI Patryka: ${Math.round(patryk_bmi * 100) / 100}`);
//     console.log(`Dane Kuby - waga: ${kuba_waga} kg, wysokosc: ${kuba_wysokosc} m`);
//     console.log(`BMI Kuby: ${Math.round(kuba_bmi * 100) / 100}`);
//
//     if (patryk_bmi > kuba_bmi) {
//         console.log(`Wskaznik BMI Patryka jest wiekszy od wskaznika BMI Kuby o ${Math.round((patryk_bmi - kuba_bmi) * 100) / 100}`);
//     } else {
//         console.log(`Wskaznik BMI Kuby jest wiekszy od wskaznika BMI Patryka o ${Math.round((kuba_bmi - patryk_bmi) * 100) / 100}`);
//     }
// }
// search()

// Zad 42 Math.round, if, else
//
// function search() {
//     const benzyna = 5.21, diesel = 4.95;
//     const pojazd_a_spalanie = 8, pojazd_b_spalanie = 7.5;
//
//     console.log(`Koszt przejechania 100 km dla pojazdu A: ${Math.round((pojazd_a_spalanie * benzyna) * 100) / 100} PLN`);
//     console.log(`Koszt przejechania 100 km dla pojazdu B: ${Math.round((pojazd_b_spalanie * diesel) * 100) / 100} PLN`);
//
//     const pojazd_a_koszt_550_km = 5.5 * pojazd_a_spalanie * benzyna;
//     const pojazd_b_koszt_550_km = 5.5 * pojazd_b_spalanie * diesel;
//
//     console.log(`Koszt przejechania 550 km dla pojazdu A: ${Math.round((pojazd_a_koszt_550_km) * 100) / 100} PLN`);
//     console.log(`Koszt przejechania 550 km dla pojazdu B: ${Math.round((pojazd_b_koszt_550_km) * 100) / 100} PLN`);
//
//     if (pojazd_a_koszt_550_km > pojazd_b_koszt_550_km) {
//         console.log(`Koszt przejechania 550 km jest tansze dla pojazdu A niz dla pojazdu B o ${Math.round((pojazd_a_koszt_550_km - pojazd_b_koszt_550_km) * 100) / 100} PLN`);
//     } else {
//         console.log(`Koszt przejechania 550 km jest tansze dla pojazdu B niz dla pojazdu A o ${Math.round((pojazd_b_koszt_550_km - pojazd_a_koszt_550_km) * 100) / 100} PLN`);
//     }
// }
// search()

// --------- switch() ---------

// Zad 43 switch()
//
// function search() {
// const kolor = 4
//     switch (kolor) {
//         case 1:
//             console.log(`Zielony`)
//             break;
//         case 2:
//                 console.log(`Niebieski`)
//             break;
//         case 3:
//             console.log(`Czerwony`)
//             break;
//         default:
//             console.log(`Coś innego.`)
//     }
// }
// search()

// Zad 44  “Instrukcja wyboru switch do wybrania dnia tygodnia”.
// let dzienTygodnia = 4;
//
// switch (dzienTygodnia) {
//     case 1:
//         console.log(`Poniedziałek`)
//         break
//     case 2:
//         console.log(`Wt`)
//         break
//     case 3:
//         console.log(`Śr`)
//         break
//     case 4:
//         console.log(`CZW`)
//         break
//     case 5:
//         console.log(`PT`)
//         break
//     case 6:
//         console.log(`SB`)
//         break
//     case 7:
//         console.log(`ND`)
//         break
//     default:
//
// }

// Zad 45  Stworzenia prostego kalkulatora”.
//
// function search() {
//     const znak = '*';
//     const liczba_1 = 8, liczba_2 = 12.5;
//
//     switch (znak) {
//         case '+':
//             console.log(`${liczba_1} + ${liczba_2} = ${liczba_1 + liczba_2}`);
//             break;
//         case '-':
//             console.log(`${liczba_1} - ${liczba_2} = ${liczba_1 - liczba_2}`);
//             break;
//         case '*':
//             console.log(`${liczba_1} * ${liczba_2} = ${liczba_1 * liczba_2}`);
//             break;
//         case '/':
//             console.log(`${liczba_1} / ${liczba_2} = ${liczba_1 / liczba_2}`);
//             break;
//         default:
//             console.log('Zly znak');
//     }
// }
// search()

// Zad 46 “Instrukcja switch wykorzystana do zamówienia w restauracji”.
//
// function restauracja(napoje, jedzenie) {
//     switch (jedzenie) {
//         case 1:
//             console.log(`Pasta z kurczakiem`)
//             break;
//         case 2:
//             console.log(`spageti`)
//             break;
//         case 3:
//             console.log(`Burgery`)
//             break;
//         default:
//             console.log(`Nie ma takienu numeru w karcie.`)
//     }
//
//     switch (napoje) {
//         case 1:
//             console.log(`cola`)
//             break;
//         case 2:
//             console.log(`woda`)
//             break;
//         case 3:
//             console.log(`Lemoniada`)
//             break;
//         default:
//             console.log(`Nie ma takiego zamówienia.`)
//     }
// }
// restauracja(2,1);

// Zad 47  “Instrukcja switch do określenia płci”.
//
// function garden(plec) {
//     switch (plec) {
//         case `k`:
//             console.log(`Kobieta`)
//             break;
//         case `m`:
//             console.log(`Meżczyzna`)
//             break;
//         default:
//             console.log(`Wpisz tylko K albo M.`)
//     }
// }
//     garden(`m`);

// Zad 48  “Instrukcja switch do określenia ilości dni w danym miesiącu”.
// function search() {
//     const numer_miesiaca = 5;
//     let ilosc_dni;
//
//     switch (numer_miesiaca) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             ilosc_dni = 31;
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             ilosc_dni = 30;
//             break;
//         case 2:
//             ilosc_dni = 28;
//             break;
//         default:
//             ilosc_dni = 0;
//             break;
//     }
//
//     if (ilosc_dni) {
//         console.log(`Ilosc dni w podanym miesiacu wynosi: ${ilosc_dni}`);
//     } else {
//         console.log(`Podana zostala niepoprawna wartosc`);
//     }
// }
//
// search()

// Deklaracji funkcji,    //
//                        //
// Wyrażenia funkcyjnego. //,
//                        //
// Funkcji strzałkowej.   //

// Zad 49  “Deklaracja funkcji”.
//
//     function print () {
//         console.log(`JavaScript ES6: deklaracja funkcji`)
//     }
//
//     print()

// Zad 50  “Wypisywanie zmiennych przy pomocy deklaracji funkcji”.
//
// function adding() {
//     const a = 5;
//     const b = 7;
//
//     console.log(`Wynik dodawania ${a} + ${b} = ${a + b}`);
// }
//
// adding()

// Zad 51  “Deklaracja funkcji z wykorzystaniem obliczeń”.
//
// function addinga(a, b) {
//     console.log(`Wynik dodawania ${a} + ${b} = ${a + b}`)
// }
// addinga(15, 7)

// Zad 52   “Deklaracja funkcji dla sprawdzenia podzielności liczby przez 2”.
//
// function podziel(liczba) {
// if (liczba % 2 === 0) {
//     console.log(`Przekazana liczba ${liczba} jest podzielna przez 2`)
//     } else {
//     console.log(`Przekazana liczba ${liczba} nie jest podzielna przez 2`)
// }
// }
// podziel(10)

// Zad 53 “Deklaracja funkcji parametr domyslny dla wyboru trybu prania”.
//
// function trybPralki(numerTrybu = 0) {
//     switch (numerTrybu) {
//         case 0:
//             console.log('Wybrano tryb: Szybkie pranie');
//             break;
//         case 1:
//             console.log('Wybrano tryb: Mieszane');
//             break;
//         case 2:
//             console.log('Wybrano tryb: Bawelna');
//             break;
//         case 3:
//             console.log('Wybrano tryb: Biale');
//             break;
//         case 4:
//             console.log('Wybrano tryb: Sportowe');
//             break;
//         default:
//             console.log('Nie ma takiego trybu!');
//     }
// }
//
// trybPralki();
// trybPralki(2);
// trybPralki(5);

// Zad 54  “Deklaracja funkcji dla obliczenia pola koła”.
//
// function promien(d) {
//     return (d / 2);
// }
//
// function poleKola() {
//     const PI = 3.14;
//     console.log(`Pole kola o promieniu ${promien(8)} wynosi: ${PI * promien(8) * promien(8)}`);
// }
// poleKola();

// Zad 56  “Wypisywanie zmiennych przy pomocy wyrażenia funkcyjnego”.
//
// function mnozenie() {
//     const a = 6;
//     const b = 9;
//
//     console.log(`Wynik mnożenia ${a} * ${b} = ${a * b}`)
// }
// mnozenie()

// Zad 57  “Wyrażenie funkcyjne z parametrami z wykorzystaniem obliczeń”.
// const multiplication = function(a, b) {
//  console.log(`Wynik mnozenia ${a} * ${b} = ${a * b}`);
// }
//
// multiplication(5, 9);

// Zad 58 “Wyrażenie funkcyjne dla sprawdzenia podzielności liczby przez 3”.
//
// const podzielPrzez3 = function (a) {
//  if (a % 3 === 0){
//   console.log(`Przekazana liczba ${a} jest podzielna przez 3`)
//  } else {
//   console.log(`Przekazana liczba ${a} nie jest podzielna przez 3.`)
//  }
//
// }
// podzielPrzez3(15)

// Zad 59 %  “Wyrażenie funkcyjne dla obliczenia ceny biletu z uwzględnieniem zniżki”. % Procenty na zniżke jak zamienic procenty na zniżke.
//
// const cenaBiletu = function (cena_biletu, znizka = 0) {
//     if (znizka === 0) {
//         console.log(`Cena biletu normalnego wynosi: ${cena_biletu} PLN`);
//     } else if (znizka > 0 && znizka < 100) {
//         console.log(`Cena biletu ze znizka(${znizka}%) wynosi: ${cena_biletu - (cena_biletu * (znizka / 100))} PLN`);
//     } else {
//         console.log(`Podano bledna wartosc dla znizki`);
//     }
// }
//
// cenaBiletu(50, 50)

// Zad 60  “Wyrażenie funkcyjne do obliczenia pola stożka”.
//
// const PI = 3.14;
//
// const polePodstawyStozka = function(promien) {
//     return PI * promien * promien;
// }
//
// const poleBoczneStozka = function(promien, dlugosc) {
//     return PI * promien * dlugosc;
// }
//
// const poleCalkowiteStozka = function() {
//     console.log(`Pole stozka wynosi: ${polePodstawyStozka(5) + poleBoczneStozka(5, 7)}`);
// }
//
// poleCalkowiteStozka();


// === FUNKCJA STRZALKOWA => === //

// Zad 61 "Funkcja Strzalkowa"
//
// const strzalkowa = () => {
//     console.log(`To jest funkcja strzalkowa`);
// }
// strzalkowa();

// Zad 62  “Wypisywanie zmiennych przy pomocy funkcji strzałkowej”.
//
// const division = () =>{
//   const a = 10;
//   const b = 4;
//
//   console.log(`Wynik dzielenia ${a} / ${b} = ${a / b}`)
// };
// division();

// Zad 63  “Funkcja strzałkowa z parametrami z wykorzystaniem obliczeń”.
//
// const division = (a, b) => {
//     console.log(`Wynik dzielenia: ${a} / ${b} = ${a / b}`);
// }
// division(15, 4)

// Zad 64  “Wyrażenie funkcyjne dla sprawdzenia podzielności liczby przez dzielnik”.
//
// const divisibility = (liczba, dzielnik) => {
//     if (liczba % dzielnik === 0){
//         console.log(`Przekazana liczba ${liczba} jest podzielna przez ${dzielnik}`)
//     } else {
//         console.log(`Przekazana liczba ${liczba} nie jest podzielna przez ${dzielnik}`)
//     }
//
// }
// divisibility(20,5
// )

// Zad 65   “Funkcja strzałkowa dla obliczenia ceny biletu z uwzględnieniem zniżki”.
// zniżka znizka procentowa %%%%%%%%%
//
// const cenaBiletu = (cena_biletu, rodzaj_znizki = 'normalny') => {
//     switch (rodzaj_znizki) {
//         case 'normalny':
//             console.log(`Cena biletu normalnego: ${cena_biletu} PLN`);
//             break;
//         case 'studencki':
//             console.log(`Cena biletu ze znizka studencka(51%) wynosi: ${cena_biletu - (cena_biletu * 0.51)} PLN`);
//             break;
//         case 'seniora':
//             console.log(`Cena biletu ze znizka seniora(30%) wynosi: ${cena_biletu - (cena_biletu * 0.30)} PLN`);
//             break;
//         case 'weterana wojennego':
//             console.log(`Cena biletu ze znizka weterana wojennego(37%) wynosi: ${cena_biletu - (cena_biletu * 0.37)} PLN`);
//             break;
//         default:
//             console.log(`Nie ma takiej znizkki!`);
//     }
// }
// cenaBiletu(32)

// Zad 66  “Wyrażenie funkcyjne do obliczenia pola kwadratu oraz sześcianu”.
//
// const poleKwadratu = (bok) => {
//     return bok * bok;
// }
//
// const poleSzescianu = () => {
//     console.log(`Pole szescianu wynosi: ${poleKwadratu(4) * 6}`);
// }
//
// poleSzescianu();


// -- METODY  --- OBIEKTY  ---   TABLICE -- //

// Zad 67  “Uzyskiwanie dostępu do elementów tablicy”.
//
// const kolory = [`niebieski`, `czerwony`, `zielony`, `czarny`];
//
// console.log(`Kolor o indeksie 0: ${kolory[0]}`)
// console.log(`Kolor o indeksie 0: ${kolory[3]}`)

// Zad 68    “Wypisywanie wszystkich elementów z tablicy”.
//
// const liczby = [5.43, 23.54, 23.5, 9.45, 7.23];
//
// console.log(`Wszystkie elementy w tablicy ${liczby}`)

