// Login Routes
const passport = require('passport');

module.exports = (app) => {
    app.get("/", function(req, res) {
        res.send({ hi: "there" });
    });

    // in the profile response we have access to: 
    //  id, name, displayName, birthday, relationship, isPerso, isPlusUser, placesLived, language, emails, gender, picture;
    app.get("/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"]   
    }));

    app.get('/auth/google/callback', passport.authenticate("google", (req, res) => {}))
}