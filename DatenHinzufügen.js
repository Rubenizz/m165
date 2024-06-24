use zsc_lions;

db.Team.insertOne({
    teamid: ObjectId(),
    teamname: "ZSC Lions",
    anzahlSpieler: 3,
    liga: "National League",
    spieler: [
        {
            spielerid: ObjectId(),
            vorname: "Denis",
            nachname: "Hollenstein",
            alter: 33,
            position: "Stürmer"
        },
        {
            spielerid: ObjectId(),
            vorname: "Garrett",
            nachname: "Roe",
            alter: 35,
            position: "Center"
        },
        {
            spielerid: ObjectId(),
            vorname: "Ludovic",
            nachname: "Waeber",
            alter: 27,
            position: "Goalie"
        }
    ]
});

db.Fan.insertMany([
    {
        fanid: ObjectId(),
        vorname: "Ruben",
        nachname: "Schneebeli",
        saisokartenNummer: 12234,
        id_team: db.Team.findOne({ teamname: "ZSC Lions" }).teamid,
        id_spieler: [
            db.Team.findOne({ "spieler.vorname": "Denis" }).spieler[0].spielerid,
            db.Team.findOne({ "spieler.vorname": "Garrett" }).spieler[1].spielerid
        ]
    },
    {
        fanid: ObjectId(),
        vorname: "Ilija",
        nachname: "Predolac",
        saisokartenNummer: 2344,
        id_team: db.Team.findOne({ teamname: "ZSC Lions" }).teamid,
        id_spieler: [
            db.Team.findOne({ "spieler.vorname": "Garrett" }).spieler[1].spielerid,
            db.Team.findOne({ "spieler.vorname": "Ludovic" }).spieler[2].spielerid
        ]
    },
    {
        fanid: ObjectId(),
        vorname: "Valentin",
        nachname: "Nussbaumer",
        saisokartenNummer: 1238234,
        id_team: db.Team.findOne({ teamname: "ZSC Lions" }).teamid,
        id_spieler: [
            db.Team.findOne({ "spieler.vorname": "Denis" }).spieler[0].spielerid,
            db.Team.findOne({ "spieler.vorname": "Ludovic" }).spieler[2].spielerid
        ]
    }
]);

db.trainer.insertOne({
    trainerid: ObjectId(),
    vorname: "Marc",
    nachname: "Crawford",
    email: "marc.crawford@zsc.com",
    id_team: db.Team.findOne({ teamname: "ZSC Lions" }).teamid
});
