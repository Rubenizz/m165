use zsc_lions;

db.Fan.find({
    $or: [
        { vorname: "Ruben" },
        { nachname: "Predolac" }
    ]
});

db.Team.find({}, { _id: 0, teamname: 1, liga: 1, anzahlSpieler: 1 });


db.trainer.find({
    $or: [
        { liga: "Super League" },
        { vorname: "Marc" }
    ]
});

db.Fan.find({
    nachname: "Schneebeli",
    vorname: { $regex: /^Ru/ } 

});
