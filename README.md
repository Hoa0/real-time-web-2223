# Coffee guessing game

> “Coffee Guessing Game” is een real-time web applicatie die gebouwd is met Node.js, Socket.io en Ejs. <br>In deze game kunnen gebruikers hun kennis van koffiesoorten testen door te raden welke koffie op de afbeelding wordt weergeven. Bij elk correct antwoord krijgt de gebruiker een punt. De game bestaat uit vijf rondes en na elke ronde wordt de score van elke gebruiker bijgehouden. Verder bevat de game ook een chatfunctie waarmee gebruikers met elkaar kunnen communiceren en discussiëren.

## Demo

Link demo: [Coffee guessing game](https://rtw-2023.adaptable.app/)

> Gehost via: [adaptable](https://adaptable.io)

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

- [X] Gebruikersnaam opgeven
- [X] Communiceren via chat
- [X] Zien wie er aan het typen is
- [X] Feedback ontvangen van je antwoorden
- [X] Score en aantal rondes worden bijgehouden
- [X] Koffie afbeeldingen en titel gegevens worden uit de API gehaald

## Gebruikte technologiën

- HTML, CSS & JavaScript
- EJS
- Node.js
- NPM
- Express
- Socket.io

## Data-lifecycle Model

(https://www.figma.com/file/yAf5s9MTu8d8vqXphM2vrf/Untitled?type=design&node-id=DrcEqRgDAp1XZ6-)

## API

Voor dit project heb ik gebruikt gemaakt van de [coffee-api](https://raw.githubusercontent.com/jermbo/SampleAPIs/main/server/api/coffee.json)

Via google heb ik gezocht naar een geschikte koffie api, die heb ik uiteindelijk gevonden op de website van [sampleapis](https://sampleapis.com/) en dit is de [originele api link](https://sampleapis.com/api-list/coffee). Na twee weken werden de data van deze api aangepast, waardoor ik alleen maar ‘test test test’ data kreeg te zien. Vervolgens heb ik op de github van [sampleapis - github](https://github.com/jermbo/SampleAPIs) gekeken en vond ik de juiste en volledige json data van de koffie API. Deze link heb ik gebruikt voor dit project, ook heb ik met Shyanta besproken of dit mogelijk was om deze linkt te gebruiken van github en dat was geen probleem.

## MoSCoW

## Real-Time Events

Week 1 bronnen

- https://github.com/cmda-minor-web/real-time-web-2223/blob/main/course/week-1.md#assignment-1-make-it-so
- https://socket.io/get-started/chat/

## Table of Contents

- [Synopsis](#synopsis)
- [Description](#description)
- [Communication](#communication)
- [Goals](#goals)
- [Grading](#grading)
- [Programme](#programme)

## Synopsis

- Course: Real-Time Web
- Course Coordinator: Justus Sturkenboom ([@ju5tu5](https://github.com/ju5tu5))
- Minor Coordinator(s): Robert Spier ([@roberrrt-s](https://github.com/roberrrt-s)) & Vasilis van Gemert ([@vasilisvg](https://github.com/vasilisvg))
- Lecturers: Shyanta Vleugel ([@shyanta](https://github.com/shyanta)) & Justus Sturkenboom ([@ju5tu5](https://github.com/ju5tu5))
- Student Assistants:
- Credit: 3 ECTS credits
- Academic year: 2022-2023
- Programme: Communication and Multimedia Design (full time bachelor)
- Language: Dutch instructions and English resources

## Description

During this course you will learn how to build a real-time application. You will learn techniques to setup an open connection between the client and the server. This will enable you to send data in real-time both ways, at the same time.

## Communication

- [Github](https://github.com/cmda-minor-web/real-time-web-2223)
- [Microsoft Teams](https://teams.microsoft.com/l/channel/19%3a61df853840064eae8ae6fc2dc9fc4566%40thread.tacv2/09%2520Real%2520Time%2520Web?groupId=c8b97eb6-ad53-4531-ad66-5c3c6297951c&tenantId=0907bb1e-21fc-476f-8843-02d09ceb59a7)
- [Brightspace](https://dlo.mijnhva.nl/d2l/home/456154)

If you have questions:

- [Look at the additional resources]()
- [Use a search engine like startpage](https://www.startpage.com/)
- [Ask questions on MS Teams](https://teams.microsoft.com/l/channel/19%3a61df853840064eae8ae6fc2dc9fc4566%40thread.tacv2/09%2520Real%2520Time%2520Web?groupId=c8b97eb6-ad53-4531-ad66-5c3c6297951c&tenantId=0907bb1e-21fc-476f-8843-02d09ceb59a7) (please help each other!)
- [Contact a student-assisstant](#synopsis)
- [Contact a lecturer](#synopsis)

## Goals

After finishing this program you can:

- _deal with real-time complexity;_
- _handle real-time client-server interaction;_
- _handle real-time data management;_
- _handle multi-user support._

## Grading

Your efforts will be graded using a single point rubric (see below). You will have to pass the criterion (centre column) to pass the course. During the test you will be consulted and will be given feedback on things we think deficient and things we think are an improvement on the criterion.

| Deficiency | Criterion                                                                                                                                                                                                                                                   | Improvement |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
|            | _Project_ Your app is working and published on Heroku. Your project is thoroughly documented in the `README.md` file in your repository. Included are a description of the data-lifecycle, real-time events and external data source used by your app.      |             |
|            | _Complexity_ You’ve implemented enough real-time functionality for us to test your comprehension of the subject. A lot of functionality is self-written. You are able to manipulate online examples live.                                                   |             |
|            | _Client-server interaction_ By interacting with the app, a user can influence the data model of the server in real time by directly modifying data OR by influencing API requests between server and source. The student has set up the data manipulations. |             |
|            | _Data management_ The server maintains a data model and each client is continuously updated with the correct data.                                                                                                                                          |             |
|            | _Multi-user support_ Multiple clients can connect to the server. Interaction works as expected and is not dependent on the number of clients. You can explain how your app approaches this.                                                                 |             |

## Programme

### Daily Schedule

To keep things simple we use a daily schedule that will be used during normal course days (monday/tuesday). We make exceptions for fridays, on these days a different schedule will be given.

| Time     | Who                                | Activity                                              |
| :------- | :--------------------------------- | :---------------------------------------------------- |
| _~09:00_ | _(Shyanta \|\| Justus)_            | _Standup_                                             |
| 09:30    | Tribe _+(Shyanta \|\| Justus)_     | Talk with crucial information (make sure you attend!) |
| 11:00    | Tribe                              | Work on the (day)assignment                           |
|          | Per table _+(Shyanta \|\| Justus)_ | Standup                                               |
| 13:00    | Tribe _+(Student assistants)_      | Continue work on the (day)assignment                  |
| 16:00ish | Tribe                              | Wrapup                                                |

### Week 1 - Getting a grip

Goal: Build and deploy a simple but unique real-time app

#### Monday 17 April

**Talk subjects:** Hit the ground running... [(slides)](https://docs.google.com/presentation/d/1MLSch_uKNEDyfz7fo71jbJrprunxQwd9GtgTse8wWpo/edit?usp=sharing) Course objective and explanation of the assignment, examples from last year, explanation of real-time, (live coded) bare bone chat app and deployment on Heroku.\
**Day assignment:** [(assignment)](./course/week-1.md#assignment-1-make-it-so) Make it so _(as a team)_: Implement (code/style/discuss/deploy) basic chat (or other realtime) functionality on your teampage!

#### Tuesday 18 April

**Talk subjects:** My first realtime web app! [(slides)]() Short recap, (local) data management, using (wire) flows for realtime web apps.\
**Day assignment:** [(assignment)](./course/week-1.md#assignment-2-make-it-so) Make it so _(individually)_. i) Create (code/style/discuss/deploy) a chat app (or other realtime functionality) based on the examples and ii) add your own unique feature!

#### Friday 21 april

Friday afternoon we will have a [peer review session](./course/peer-review.md). You will read, comment and fire issues on each others code. Doing this is really good for your programming insight and helps others refining/refactoring their code.

| Time  | Who                            | Activity    |
| :---- | :----------------------------- | :---------- |
| 14:00 | Tribe _+(Shyanta \|\| Justus)_ | Peer review |

### Week 2 - Sockets and data

Goal: Store, manipulate and share data between server-client

#### Monday 24 April

**Talk subjects:** Data driven development?! [(slides)]() Feedback about last week, final assignment and conditions (rubric), explanation of data management, Long polling vs Websockets. \
**Day assignment:** [(assignment)](./course/week-2.md#assignment-1-proof-of-concept) (Proof of) Concept _(individually)_. i) Create a (3 > 1) concept based on existing data from an API and ii) map this data using modelling techniques.

#### Tuesday 25 April

**Talk subjects:** Above all else, show the data. [(slides)]() Securing real-time web apps, offline support, the publication/subscription model and (case study) Quek!\
**Day assignment:** [(assignment)](./course/week-2.md#assignment-2-proof-of-concept) Proof of concept _(individually)_: i) Create (code/style/discuss/deploy) part of the core functionality for your concept and ii) show the corresponding data lifecycle diagram.

### Week 3 - Dealing with multiple users

Goal: Handle data sharing and multi-user support

#### Monday 8 May

**Talk subjects:** Roll your own... [(slides) ]() Data management, the functional programming trinity (map, filter and reduce). OAuth?!
**Day assignment:** [(assignment)](./course/week-3.md#assignment-1-data-management)

#### Tuesday 9 May

**Talk subjects:** Not ignoring the UI-Stack! [(slides)](). Usability, feedback, feedforward etc. in real-time web apps, (case study) postNL loader and FAQ.
**Day assignment:** [(assignment)](./course/week-3.md#assignment-2-user-testing)

#### Friday 12 May

We will have a final [peer review session](./course/peer-review.md). You will read, comment and fire issues on each others code. Doing this helps others dotting the i’s on their project.

| Time  | Who                            | Activity                 |
| :---- | :----------------------------- | :----------------------- |
| 14.00 | Tribe _+(Shyanta \|\| Justus)_ | Peer review              |
| 15.30 | Tribe _+(Shyanta \|\| Justus)_ | Finalize your assignment |
| 16.00 | Tribe _+(Shyanta \|\| Justus)_ | (drinks?!)               |

<!-- Here are some hints for your projects Readme.md! -->

<!-- Start out with a title and a description -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- ☝️ replace this description with a description of your own work -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- This would be a good place for your data life cycle ♻️-->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- We all stand on the shoulders of giants, please link all the sources you used in to create this project. -->

<!-- How about a license here? When in doubt use MIT. 📜  -->
