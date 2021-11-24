# Projektuppgift:

Kompletteringsuppgiften går ut på att göra en statisk kundkorg
som uppdateras. Målet är att göra en enkel hemsida där en kan
boka biobiljetter för barn/ordinarie/pensionär. Det ska gå att
uppdatera antalet biobiljetter samt att går totalsumman över 
500 kr så bjuds kunden på popcorn.

Funktionerna som ska vara med:

* När användaren ändrar biljettantal så ska uträkningen ske på en gång.
* Det ska vara omöjligt att skriva in felaktiga alt. negativa värden som antal.
* Om beställningen är på mer än eller lika med 500 kr så ska det ingå en popcorn. 
om summan inte uppnåtts så ska det visas hur långt som är kvar till att få den.

Vad som ska vara med på sidan:

* Öka och minska antalet biljetter per kategori
* Visa antalet biljetter man har i kundkorgen
* Visa totalsumman för varje biljettyp
* Visa totalkostnad för besöket
* Visa hur många fria Popcorn man får med i besöket, om totalsumman 
är under 500kr visa hur långt det är kvar till fri popcorn.

**Dokumentation**

Eftersom det är JavaScript som är det svåraste för mig, bestämde jag mig för
att ta itu med den först. Jag började med att göra en simpel skiss i html och 
lite css bara för att se på ett ungefär var jag ville att allt skulle ligga.

*Beskriv lite olika lösningar*

Jag började med att ta det jag förstod från förra uppgiften. Den här gången var
jag noga med att ta en funktion i taget och skriva kommentarer ovanför varje funktion.
Jag löste gratis popcorn på liknande sätt till fri frakt, mer eller mindre samma
funktion. Jag lade till en pattern tag i input för att förhindra tecken och symboler
samt min tag för att inte kunna få mindre än 0 biljetter per kategori. Hittade här
hur jag kunde skriva det: https://programmerall.com/article/67191848345/

*Något som var besvärligt att får till*

Absolur besvärligast var att få till totalsummorna. Både per kategori och totalt.
Men som tur var fick jag lite hintar av min sambos bror. Han förklarade att det
underlättar att definiera priset och antalet högst upp och sen kalla på funktionerna
vid varje knapp och det hjälpte mig fram till en lösning på problemet. Den ser inte 
så vacker ut men den fungerar iallafall.

*Motivera en specifik lösning*

Jag valde att lägga till minus och plus knappar runt min input. Dels för att det
blir tydligare att klicka på och dels för att det blev lättare att skriva en 
funktion för dem. Jag gjorde input till text istället för number för att få
bort increase och decrease pilarna i input boxen. Tog lite hjälp från den här
videon: https://www.youtube.com/watch?v=2purijiQrf4&ab_channel=Codewithcreativecoder

*Lämna ett exempel på lösning som valdes bort*

Det relaterar lite kring det jag nämnde ovan. Jag tror att det kanske skulle
hjälpt med andra problem om jag valt att ha kvar number i input men valde bort
det då jag inte lyckades få till en funktion för att dess input skulle uppdatera
totalerna.

*Förslag på förbättring*

Ärligt talat så känner jag mig nöjd med det jag fick till den här gången.
Jag lärde mig så mycket på att få göra om en ny uppgift. Är övertygad om att min
kod går att korta ner ytterligare. Framförallt så blev min html kod väldigt lång.
Blev lite besviken på att jag inte hittade en lösning på hur manuell input i biljett
boxarna ska uppdateras i totalerna. Ska klura vidare på det även om jag inte hinner
bli klar med det i tid till inlämningen.




