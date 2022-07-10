const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID = "578669517357-54kl0gj9sida12me2qc6sc9ibh8s1gei.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const passport = require("passport");

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});