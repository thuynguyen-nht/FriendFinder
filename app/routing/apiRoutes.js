// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================


//app here represent Express
module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {

        var matchingFriend = {
            name: "",
            photo: "",
            scoresDif: 1000
        }

        console.log(req.body);

        // req.body is available since we're using the body parsing middleware
        var newEntry = req.body;

        var userScores = newEntry.scores;

        for (let i = 0; i < friendData.length; i++) {

            // console.log(friendData[i]);
            var totalScoreDif = 0;

            for (let j = 0; j < friendData[i].scores.length; j++) {

                totalScoreDif += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]))

                if (totalScoreDif <= matchingFriend.scoresDif) {
                    matchingFriend.name = friendData[i].name;
                    matchingFriend.photo = friendData[i].photo;
                    matchingFriend.scoresDif = totalScoreDif;
                }
            }
        }

        // var entryScores = newEntry.scores;

        friendData.push(newEntry);

        res.json(matchingFriend);
        console.log(matchingFriend);

    });


};