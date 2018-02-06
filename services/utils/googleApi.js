module.exports.googleUser = profile => {
	const image = profile.photos[0].value.slice(0,profile.photos[0].value.indexOf('?sz=50'));
  const googleUser = {
    identifier: "googleId",
    profileUrlId: "googleProfileURL",
    userModel: {
      googleId: profile.id,
      displayName: profile.displayName,
      lastName: profile.name.familyName,
      firstName: profile.name.givenName,
      email: profile.emails[0].value,
      iconPhotoURL: profile.photos[0].value,
      // bigPhotoURL: profile._json.cover.coverPhoto.url,
      googleProfileURL: profile._json.url
    }
  };

  return googleUser;
};
