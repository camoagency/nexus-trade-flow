/* ===========================================================================
   PARTNER BEARBEITEN

   Partner bearbeiten: Block kopieren, Werte anpassen, Datei speichern, per Git
   pushen. Reihenfolge hier = Reihenfolge auf der Seite. Leeres Array = Sektion
   wird ausgeblendet.

   Ein Block sieht so aus (die Kommas zwischen den Bloecken nicht vergessen):

     { name: "Firmenname",
       url:  "https://www.beispiel.com",
       logo: "/assets/img/partners/beispiel.svg",
       note: { en: "Text auf Englisch",
               de: "Text auf Deutsch",
               es: "Text auf Spanisch" } }

   name  Pflichtfeld. Ohne Namen wird der Block uebersprungen.
   url   Optional. Leer lassen ("") wenn nicht verlinkt werden soll.
   logo  Optional. Datei vorher nach assets/img/partners/ legen.
   note  Optional. Ein kurzer Satz je Sprache.

   WICHTIG: Partnerlogos nur mit schriftlicher Freigabe des jeweiligen
   Unternehmens einbauen.
   =========================================================================== */

var PARTNERS = [];

window.PARTNERS = PARTNERS;
