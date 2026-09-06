/* ===========================================================================
   BESCHAFFUNGSPLATTFORMEN BEARBEITEN

   Das sind die Handelsplattformen, ueber die Nexus Trade + Flow Maschinen
   beschafft. Es sind KEINE Partner, KEINE Kunden und KEINE Referenzen.
   Die Seite darf das auch nirgends behaupten.

   Bearbeiten: Block kopieren, Werte anpassen, Datei speichern, per Git pushen.
   Reihenfolge hier = Reihenfolge auf der Seite. Leeres Array = die gesamte
   Sektion wird ausgeblendet, es bleibt kein leerer Rahmen stehen.

   Ein Block sieht so aus (die Kommas zwischen den Bloecken nicht vergessen):

     { name: "Firmenname",
       url:  "https://www.beispiel.com/",
       logo: "/assets/img/partners/beispiel.svg" }

   name  Pflichtfeld. Ohne Namen wird der Block uebersprungen.
   url   Adresse der Startseite. Ohne Tracking-Parameter wie gclid oder utm_.
   logo  Optional. Fehlt das Feld, wird der Name als Wortmarke gesetzt.

   ---------------------------------------------------------------------------
   ACHTUNG, SPERRE VOR DEM LIVEGANG

   Das Feld "logo" bleibt leer, bis eine SCHRIFTLICHE ANWEISUNG DES KUNDEN
   vorliegt, dass Nexus Trade + Flow zur Darstellung dieser Marken berechtigt
   ist. Fremde Wort-Bild-Marken auf einer gewerblichen Seite koennen
   Paragraf 14 MarkenG und Paragraf 5 UWG beruehren, wenn sie eine
   Geschaeftsbeziehung nahelegen, die nicht besteht.

   Bis dahin: ausschliesslich Textlinks. Diese Sperre nicht eigenmaechtig
   aufloesen.
   =========================================================================== */

var PARTNERS = [
  { name: "Sodineg France",    url: "https://www.sodineg.com/" },
  { name: "traktorpool",       url: "https://www.traktorpool.de/" },
  { name: "TractorHouse",      url: "https://www.tractor-house.de/" },
  { name: "technikboerse",     url: "https://www.technikboerse.com/" },
  { name: "Agriaffaires",      url: "https://www.agriaffaires.de/" },
  { name: "TruckScout24",      url: "https://www.truckscout24.de/" },
  { name: "Raiffeisen-Börse",  url: "https://www.xn--raiffeisen-brse-ktb.de/" },
  { name: "tec24",             url: "https://de.tec24.com/" }
];

window.PARTNERS = PARTNERS;
