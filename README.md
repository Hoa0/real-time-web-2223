# Coffee guessing game

> “Coffee Guessing Game” is een real-time web applicatie die gebouwd is met Node.js, Socket.io en Ejs. <br>In deze game kunnen gebruikers hun kennis van koffiesoorten testen door te raden welke koffie op de afbeelding wordt weergeven. Bij elk correct antwoord krijgt de gebruiker een punt. De game bestaat uit vijf rondes en na elke ronde wordt de score van elke gebruiker bijgehouden. Verder bevat de game ook een chatfunctie waarmee gebruikers met elkaar kunnen communiceren en discussiëren.

## Demo

Link demo: [Coffee guessing game](https://rtw-2023.adaptable.app/)

> Gehost via: [adaptable](https://adaptable.io)

#### Gebruikersnaam invullen

<img src="https://github.com/Hoa0/real-time-web-2223/blob/main/public/img-docu/RTW-coffee-1.png" width="300">

#### Het begin scherm

<img src="https://github.com/Hoa0/real-time-web-2223/blob/main/public/img-docu/rtw-coffee-2.png" width="400">

#### Game einde

<img src="https://github.com/Hoa0/real-time-web-2223/blob/main/public/img-docu/rtw-coffee-3.png" width="400">

## Installaties

Stap 1: Om dit project lokaal te gebruiken, clone dit project:

```commandline
git clone https://github.com/Hoa0/real-time-web-2223.git
```

Stap 2: Om de geüpdatete versies van de gebruikte packages voor dit project op te halen, installeer NPM packages:

```commandline
npm install
```

Stap 3:

Project starten met:

```commandline
npm start
```

Project starten met nodemon:

```commandline
npm run dev
```

## Proof of concept

### Concept 1:

api: MovieMet de API van [themoviedb](https://developer.themoviedb.org/docs). Verschillende feiten weergeven van acteurs, waarbij je als gebruiker kunt aangeven of de feiten waar of niet waar zijn. Antwoorden kunnen via de chatfunctie opgegeven worden en de gebruiker krijgt gelijk feedback te zien, of zijn antwoord correct is.

#### Functionaliteiten

- Gebruikersnaam invullen
- Communiceren met andere tegenstanders via de chat
- Feedback ontvangen van je antwoorden
- Je kan zien hoeveel gebruikers er online zijn
- Data uit de API halen en dit weergeven (namen van acteurs en feiten)

### Concept 2:

Met de API van [dog-api](https://dog.ceo/dog-api/). Afbeeldingen van honden weergeven, waarbij gebruikers de mogelijkheid hebben om het ras van de hond te raden. Met behulp van de API worden willekeurige afbeeldingen van verschillende hondenrassen opgehaald en aan de gebruikers gepresenteerd. Helaas staat er in deze api geen hondenras type, waardoor ik het niet kan gebruiken. Tenzij ik het zelf ga implementeren.

### Concept 3:

Met de API van [coffee-api](https://raw.githubusercontent.com/jermbo/SampleAPIs/main/server/api/coffee.json) kunnen gebruikers koffie soorten raden. Met behulp van de API worden willekeurige afbeeldingen en de titel van de koffie opgehaald en dit weergeven. Zodra de gebruiker een antwoord heeft gekozen, ontvangen ze gelijk feedback via de chat. Bij een correct antwoord, krijg je een punt.

#### Functionaliteiten

- Gebruikersnaam invullen
- Communiceren met andere tegenstanders via de chat
- Feedback ontvangen van je antwoorden
- Je kan zien hoeveel gebruikers er online zijn
- Data uit de API halen en dit weergeven (Afbeeldingen url, koffie titels)
- Score bijhouden
- Aantal rondes bijhouden

### Gekozen concept:

Concept 3: koffie API

#### Job story

- Als gebruiker wil ik kunnen deelnemen aan een koffiequiz, waarbij ik verschillende koffiesoorten kan raden op basis van een koffie afbeelding. Na het invoeren van mijn antwoord wil ik direct feedback ontvangen om te weten of mijn antwoord correct was of niet.

- Als gebruiker wil ik bij een koffiequiz de mogelijkheid hebben om mijn score te kunnen zien van hoeveel antwoorden ik correct heb geraden, zodat ik mijn voortgang kan volgen en dit kan verbeteren.

- Als gebruiker wil ik communiceren met andere gebruikers, zodat ik met hen kan discussiëren over deze game. Daarnaast wil ik kunnen zien wie er online zijn, zodat ik weet met wie ik direct interactie kan hebben.

## Functionaliteiten

- [x] Gebruikersnaam opgeven
- [x] Communiceren via chat
- [x] Zien wie er aan het typen is
- [x] Feedback ontvangen van je antwoorden
- [x] Score en aantal rondes worden bijgehouden
- [x] Koffie afbeeldingen en titel gegevens worden uit de API gehaald

<img src="https://github.com/Hoa0/real-time-web-2223/blob/main/public/img-docu/rtw-schets.png" width="400">

## Gebruikte technologiën

- HTML, CSS & JavaScript
- EJS
- Node.js
- NPM
- Express
- Socket.io

## API

Voor dit project heb ik gebruikt gemaakt van de [coffee-api](https://raw.githubusercontent.com/jermbo/SampleAPIs/main/server/api/coffee.json)

Via google heb ik gezocht naar een geschikte koffie api, die heb ik uiteindelijk gevonden op de website van [sampleapis](https://sampleapis.com/) en dit is de [originele api link](https://sampleapis.com/api-list/coffee). Na twee weken werden de data van deze api aangepast, waardoor ik alleen maar ‘test test test’ data kreeg te zien. Vervolgens heb ik op de github van [sampleapis - github](https://github.com/jermbo/SampleAPIs) gekeken en vond ik de juiste en volledige json data van de koffie API. Deze link heb ik gebruikt voor dit project, ook heb ik met Shyanta besproken of dit mogelijk was om deze linkt te gebruiken van github en dat was geen probleem.

### API URL

`GET https://raw.githubusercontent.com/jermbo/SampleAPIs/main/server/api/coffee.json `

<details>
<summary>API JSON structuur </summary>

```json
{
  "metaData": [
    {
      "title": "Coffee",
      "longDesc": "Basic list of descriptions and ingredients used for the most popular coffee drinks",
      "desc": "API for popular coffee drinks",
      "featured": true,
      "categories": ["food & beverage", "list"]
    }
  ],
  "hot": [
    {
      "title": "Black",
      "description": "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
      "ingredients": ["Coffee"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
      "id": 1
    },
    {
      "title": "Latte",
      "description": "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
      "ingredients": ["Espresso", "Steamed Milk"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg",
      "id": 2
    },
    {
      "title": "Cappuccino",
      "description": "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
      "ingredients": ["Espresso", "Steamed Milk", "Foam"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg",
      "id": 3
    },
    {
      "title": "Americano",
      "description": "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.",
      "ingredients": ["Espresso", "Hot Water"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg",
      "id": 4
    },
    {
      "title": "Espresso",
      "description": "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
      "ingredients": ["1oz Espresso"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
      "id": 5
    },
    {
      "title": "Doppio",
      "description": "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
      "ingredients": ["2oz Espresso"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Doppio.jpg/2560px-Doppio.jpg",
      "id": 6
    },
    {
      "title": "Cortado",
      "description": "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.",
      "ingredients": ["1oz Espresso", "1oz Steamed Milk"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg",
      "id": 7
    },
    {
      "title": "Red Eye",
      "description": "Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.",
      "ingredients": ["Coffee", "Espresso"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Linea_doubleespresso.jpg",
      "id": 8
    },
    {
      "title": "Galão",
      "description": "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
      "ingredients": ["Espresso", "Foamed milk"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg",
      "id": 9
    },
    {
      "title": "Lungo",
      "description": "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
      "ingredients": ["Long pulled espresso"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Caff%C3%A8_lungo.JPG",
      "id": 10
    },
    {
      "title": "Macchiato",
      "description": "The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.",
      "ingredients": ["Espresso", "Foam"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/Caff%C3%A8_Espresso_Macchiato_Schiumato.jpg",
      "id": 11
    },
    {
      "title": "Mocha",
      "description": "For all you chocolate lovers out there, you’ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.",
      "ingredients": ["Espresso", "Steamed Milk", "Chocolate"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Mocaccino-Coffee.jpg",
      "id": 12
    },
    {
      "title": "Ristretto",
      "description": "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
      "ingredients": ["Short pulled espresso"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Doppio_ristretto_Chiang_Mai.jpg",
      "id": 13
    },
    {
      "title": "Flat White",
      "description": "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It’s an espresso drink with steamed milk.",
      "ingredients": ["Espresso", "Steamed Milk"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg",
      "id": 14
    },
    {
      "title": "Affogato",
      "description": "The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two.",
      "ingredients": ["Espresso", "Ice cream"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/17/Vinoteca%2C_Smithfield%2C_London_%284485849609%29.jpg",
      "id": 15
    },
    {
      "title": "Café au Lait",
      "description": "Café au lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and you’re all set!",
      "ingredients": ["Coffee", "Steamed Milk"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/06/Latte_art.jpg",
      "id": 16
    },
    {
      "title": "Irish",
      "description": "Irish coffee consists of black coffee, whiskey and sugar, topped with whipped cream.",
      "ingredients": ["Coffee", "Whiskey", "Sugar", "Cream"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Irish_coffee_glass.jpg",
      "id": 17
    },
    {
      "title": "Guayoyo",
      "description": "Traditional venezuelan coffee prepared by filtering the ground coffee in a cone of cloth and pouring hot water on top of it. It's prefferably drinked wihout milk nor cream.",
      "ingredients": ["Coffee", "Traditional", "Hot Water"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
      "id": 18
    },
    {
      "title": "Cortadito",
      "description": "Traditional cuban coffee method where a bit of freshly brewed coffee is mixed with sugar to create a highly sugared paste. Then add the rest of the coffee and stir adding milk until a 50/50 ratio is achieved.",
      "ingredients": ["Coffee", "Traditional", "Sugar", "Milk"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Cuban_coffee-_2013-04-05_14-30.jpg",
      "id": 19
    },
    {
      "title": "Aguapanela Coffee",
      "description": "Bring panela and coffee to a boil in a small pan for 30 minutes until panela is melted. Brew your coffee using your favorite brewing technique but add the hot aguapanela instead of hot water. Delicious sweetened coffee is ready.",
      "ingredients": ["Coffee", "Sweet", "Panela", "Traditional"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_%285617496209%29.jpg/640px-Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_%285617496209%29.jpg",
      "id": 20
    }
  ],
  "iced": [
    {
      "title": "Iced Coffee",
      "description": "A coffee with ice, typically served with a dash of milk, cream or sweetener—iced coffee is really as simple as that.",
      "ingredients": ["Coffee", "Ice", "Sugar*", "Cream*"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg",
      "id": 1
    },
    {
      "title": "Iced Espresso",
      "description": "Like an iced coffee, iced espresso can be served straight or with a dash of milk, cream or sweetener. You can also ice speciality espresso-based drinks like americanos, mochas, macchiatos, lattes and flat whites.",
      "ingredients": ["Espresso", "Ice", "Sugar*", "Cream*"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Home_Made_Ice_Coffee.jpg",
      "id": 2
    },
    {
      "title": "Cold Brew",
      "description": "The trendiest of the iced coffee bunch, cold brew coffees are made by steeping coffee beans from anywhere between 6-36 hours, depending on how strong you would like your cold brew. Once the beans are done steeping, add cold milk or cream.",
      "ingredients": ["Long steeped coffee", "Ice"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ColdBrewCoffeein_Cans.png/640px-ColdBrewCoffeein_Cans.png",
      "id": 3
    },
    {
      "title": "Frappuccino",
      "description": "Made famous by Starbucks, the Frappuccino is a blended iced coffee drink that’s topped with whipped cream and syrup. ",
      "ingredients": ["Espresso", "Blended ice", "Whip*"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Strawberry_Delight_Frappuccino.JPG",
      "id": 4
    },
    {
      "title": "Nitro",
      "description": "A cold brew + nitrogen bubbles = a cold brew coffee with a frothy, Guinness-like consistency. (It’s poured via a nitro tap, too.)",
      "ingredients": ["Coffee", "Nitrogen bubbles", "Sugar*", "Cream*"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/7/76/Nitro_Cold_Brew.jpg",
      "id": 5
    },
    {
      "title": "Mazagran",
      "description": "Mazagran coffee is a cross between iced coffee, tea and your favorite rum drink. It typically consists of espresso, lemon, sugar and (sometimes) rum.",
      "ingredients": ["Coffee", "Sugar", "Lemon", "Rum*"],
      "image": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Caf%C3%A9_mazagran.jpg",
      "id": 6
    }
  ]
}
```

</details>

## Data-modeling

<img src="https://github.com/Hoa0/real-time-web-2223/blob/main/public/img-docu/data-modeling.png" width="200">

## Data-lifecycle Model

<img src="https://github.com/Hoa0/real-time-web-2223/blob/main/public/img-docu/DataLifecycleDiagram.jpg" width="400">

[Bekijk in figma: Data-lifecycle Model](https://www.figma.com/file/yAf5s9MTu8d8vqXphM2vrf/RTW?type=design&node-id=0%3A1&t=0hGv0vOlIYrZswDr-1)

Dit 'Data-lifecycle Model' bestaat uit vier compontenten: De gebruiker, client, server en API. De gebruiker, verstuurt zijn gebruikersnaam, kan berichten versturen, antwoord opgeven wat voor soort koffie het is en de game restarten na vijf rondes. In de client worden de gebruikersnaam gecreeerd en in de server opgeslagen, via de server wordt het naar alle verbonden cleint gestuurd. Bij het raden van een koffie, wordt er gecheckt naar de button tekst ` const btnSelect = event.target.textContent;` in de client die vervolgens naar de server stuurd. In de server wordt er gekeken of het antwoord klopt en stuurd het via de client weer terug wat het antwoord moest zijn (feedback) en houdt ook de rondes en score bij.

## MoSCoW

### Must have

- Gebruikersnaam invullen + weergeven in de chat
- Zien wie er online zijn
- Berichten versturen en ontvangen naar andere gebruikers
- Zien wie er aan het typen is
- Koffie raden door middel van afbeelding + mogelijke antwoorden
- Feedback ontvangen over antwoorden
- Game kunnen restarten

### Should have

- Chat berichten onderscheiden met kleur en positie
- Feedback in de chat weergeven als een gebruiker de game verlaat
- Offline ondersteuning

### Could have

- Ranglijst weergeven
- Ranglijst opslaan en per dag/ datum kunnen bekijken
- Melding wanneer een gebruiker erbij komt

### Would have

- Verschillende chatrooms voor "hot" of "cold" koffie expert

## Real-Time Events

Communicatie tussen de server en de client:

- `connection` Event wordt uitgevoerd wanneer de gebruiker verbinding maakt met de server
- `history` oude chat berichten zien
- `getRandomCoffee` Event haalt gegevens op uit de Coffee API en laat een koffie afbeelding + vier random antwoord mogelijkheden zien.
- `guessCoffeeAnswer` Het afhandelen van geraden antwoorden en verstuur score en rondes naar de client. Het bijhouden van de score en rondes wordt in server gedaan.
- `newMessage` Event waar gebruikers met elkaar kunnen communiceren via de chat. Chat berichten en gebruikersnamen worden meegegeven.
- `newUser` Event wordt uigevoerd wanneer de gebruiker een nieuwe gebruiker aanmaakt en wordt toegevoegd aan 'active player' lijst.
- `typing` Event laat zien of een gebruiker aan het typen is
- `disconnect` Event geeft aan dat de client niet meer verbonden is met de server.

<details>
<summary> RTW - Minor </summary>
## RTW Description

During this course you will learn how to build a real-time application. You will learn techniques to setup an open connection between the client and the server. This will enable you to send data in real-time both ways, at the same time.

## Goals

After finishing this program you can:

- _deal with real-time complexity;_
- _handle real-time client-server interaction;_
- _handle real-time data management;_
- _handle multi-user support._
</details>
