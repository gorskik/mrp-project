function buildGHPtable() {
    var tabelka = document.getElementById('GHPcontainer');
    tabelka.innerHTML = `<h1>GHP</h1> <table>
    <tr>
    <td>tydzień</td> <td>1</td> <td>2</td> <td>3</td> <td>4</td> <td>5</td> <td>6</td> <td>7</td> <td>8</td> <td>9</td> <td>10</td>

    </tr>

    <tr>
    <td>Przewidywany popyt</td><td class = 'przewidywanyPopyt c'></td> <td class = 'przewidywanyPopyt c'></td><td class = 'przewidywanyPopyt c'></td><td class = 'przewidywanyPopyt c'></td><td class = 'przewidywanyPopyt c'></td><td class = 'przewidywanyPopyt c'></td><td class = 'przewidywanyPopyt c'></td><td class = 'przewidywanyPopyt c'></td><td class = 'przewidywanyPopyt c'></td><td class = 'przewidywanyPopyt c'></td>
    </tr>

    <tr>
    <td>Produkcja</td><td class = 'produkcja c'></td> <td class = 'produkcja c'></td> <td class = 'produkcja c'></td> <td class = 'produkcja c'></td> <td class = 'produkcja c'></td> <td class = 'produkcja c'></td> <td class = 'produkcja c'></td> <td class = 'produkcja c'></td> <td class = 'produkcja c'></td> <td class = 'produkcja c'></td> 


    </tr>
    <td>Dostępne</td><td class = 'dostepne c'></td> <td class = 'dostepne c'></td> <td class = 'dostepne c'></td> <td class = 'dostepne c'></td> <td class = 'dostepne c'></td> <td class = 'dostepne c'></td> <td class = 'dostepne c'></td> <td class = 'dostepne c'></td> <td class = 'dostepne c'></td> <td class = 'dostepne c'></td> 

    </tr>

    </table>
    `

}


//przepraszam za ten hardkod, cebo mozesz to ogarnac lmao
function createCalculatedTable(nazwa, tytul) {
    let container = document.getElementById("tables-container");
    container.innerHTML += `</table>
    <h1>${tytul}</h1>
    <table style="border: 1px solid black; padding:30px">
        <tr>
            <th>Dane/Okres</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>

         </tr>
        <tr>
            <td>Całkowite zapotrzebowanie
            </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa} c'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa} c'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa} c'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa} c'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa} c'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa} c'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa} c'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa} c'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa} c'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa} c'> </td>
            
        </tr>
        <tr>
            <td>Planowane przyjęcia</td>
            <td class = 'planowanePrzyjecia${nazwa} c'> </td> 
            <td class = 'planowanePrzyjecia${nazwa} c'> </td>
            <td class = 'planowanePrzyjecia${nazwa} c'> </td> 
            <td class = 'planowanePrzyjecia${nazwa} c'> </td>
            <td class = 'planowanePrzyjecia${nazwa} c'> </td> 
            <td class = 'planowanePrzyjecia${nazwa} c'> </td>
            <td class = 'planowanePrzyjecia${nazwa} c'> </td>
            <td class = 'planowanePrzyjecia${nazwa} c'> </td>
            <td class = 'planowanePrzyjecia${nazwa} c'> </td>
            <td class = 'planowanePrzyjecia${nazwa} c'> </td>
            

        </tr>
        <tr>
            <td>Przewidywane na stanie</td>           
            <td class = 'przewidywaneNaStanie${nazwa} c'> </td> 
            <td class = 'przewidywaneNaStanie${nazwa} c'> </td>
            <td class = 'przewidywaneNaStanie${nazwa} c'> </td> 
            <td class = 'przewidywaneNaStanie${nazwa} c'> </td>
            <td class = 'przewidywaneNaStanie${nazwa} c'> </td> 
            <td class = 'przewidywaneNaStanie${nazwa} c'> </td>
            <td class = 'przewidywaneNaStanie${nazwa} c'> </td>
            <td class = 'przewidywaneNaStanie${nazwa} c'> </td>
            <td class = 'przewidywaneNaStanie${nazwa} c'> </td>
            <td class = 'przewidywaneNaStanie${nazwa} c'> </td>
            
        </tr>
        <tr>
            <td>Zapotrzebowanie netto</td>
            <td class = 'zapotrzebowanieNetto${nazwa} c'> </td> 
            <td class = 'zapotrzebowanieNetto${nazwa} c'> </td>
            <td class = 'zapotrzebowanieNetto${nazwa} c'> </td> 
            <td class = 'zapotrzebowanieNetto${nazwa} c'> </td>
            <td class = 'zapotrzebowanieNetto${nazwa} c'> </td> 
            <td class = 'zapotrzebowanieNetto${nazwa} c'> </td>
            <td class = 'zapotrzebowanieNetto${nazwa} c'> </td>
            <td class = 'zapotrzebowanieNetto${nazwa} c'> </td>
            <td class = 'zapotrzebowanieNetto${nazwa} c'> </td>
            <td class = 'zapotrzebowanieNetto${nazwa} c'> </td>
            
        </tr>
        <tr>
            <td>Planowane zamówienia</td>
            <td class = 'planowaneZamówienia${nazwa} c'> </td>
            <td class = 'planowaneZamówienia${nazwa} c'> </td>
            <td class = 'planowaneZamówienia${nazwa} c'> </td> 
            <td class = 'planowaneZamówienia${nazwa} c'> </td>
            <td class = 'planowaneZamówienia${nazwa} c'> </td> 
            <td class = 'planowaneZamówienia${nazwa} c'> </td>
            <td class = 'planowaneZamówienia${nazwa} c'> </td>
            <td class = 'planowaneZamówienia${nazwa} c'> </td>
            <td class = 'planowaneZamówienia${nazwa} c'> </td>
            <td class = 'planowaneZamówienia${nazwa} c'> </td>
            
        </tr>
        <tr>
            <td>Planowane przyjęcie zamówień</td>
            <td class = 'planowanePrzyjecieZamowien${nazwa} c'> </td> 
            <td class = 'planowanePrzyjecieZamowien${nazwa} c'> </td>
            <td class = 'planowanePrzyjecieZamowien${nazwa} c'> </td> 
            <td class = 'planowanePrzyjecieZamowien${nazwa} c'> </td>
            <td class = 'planowanePrzyjecieZamowien${nazwa} c'> </td> 
            <td class = 'planowanePrzyjecieZamowien${nazwa} c'> </td>
            <td class = 'planowanePrzyjecieZamowien${nazwa} c'> </td>
            <td class = 'planowanePrzyjecieZamowien${nazwa} c'> </td>
            <td class = 'planowanePrzyjecieZamowien${nazwa} c'> </td>
            <td class = 'planowanePrzyjecieZamowien${nazwa} c'> </td>
            
        </tr>

    </table>
    
    `

}







