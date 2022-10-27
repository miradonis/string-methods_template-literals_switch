const firstName = "Stef";
const lastName = "AAAnie";
const age = 120;
const place_of_birth = "Wonderland";
const size = 2.47;
const weight = 78;
const hobby = "Reiskörner zählen";
const computer_game = "Hello Kitty";
const favorite_food = "Löwenzahn";
const favorite_place = "Saturn";
const favorite_sport = "Lichtschalter an und ausschalten";
const favorite_fashion_brand = "Orchillon";
const favorite_season = "sumwin";
const favorite_vacation_spot = "Dreamland";

document.getElementById(
  "myText"
).innerHTML = `Hallo, mein Name ist "${firstName} ${lastName}". Ich bin ${age} Jahre alt und ${weight} Tonnen schwer.
 Obwohl ich noch ein Teenager bin, bin ich schon ${size} Meter groß. 
 Geboren bin ich in ${place_of_birth}. Mein Lieblingsurlaubsort ist 
 ${favorite_vacation_spot}. Mein Lieblingshobby ist ${hobby}. Ich spiele gern ${computer_game} und esse dabei ${favorite_food}. Außerdem besuche ich total gern den ${favorite_place}. Sport mache ich auch, am liebsten "${favorite_sport}". Meine Lieblingsklamottenmarke ist von ${favorite_fashion_brand}.`;
