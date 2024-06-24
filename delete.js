db.Fan.deleteOne({
    "fanid": ObjectId("6679702e12435868bbbacf73")
});
db.Fan.deleteMany({
    "nachname": "Nussbaumer"
});
db.trainer.deleteOne({
    "email": "marc.crawford@zsc.com"
});
