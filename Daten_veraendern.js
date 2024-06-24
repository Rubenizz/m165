use zsc_lions;

db.Team.updateOne(
    { _id: ObjectId("6679701112435868bbbacf6e") }, 
    { $set: { liga: "Swiss League" } }
);

db.Fan.updateMany(
    { $or: [
        { vorname: "Ruben" },
        { vorname: "Valentin" }
    ] },
    { $set: { nachname: "Koch" } }  
);

db.trainer.replaceOne(
    { _id: ObjectId("6679706812435868bbbacf76") }, 
    {
        _id: ObjectId("6679706812435868bbbacf76"), 
        trainerid: ObjectId(), 
        vorname: "Peter", 
        nachname: "Fox", 
        email: "markus.crawford@zsc.com",
        id_team: ObjectId("600f5c27308b281c7b8605d6")
    }
);