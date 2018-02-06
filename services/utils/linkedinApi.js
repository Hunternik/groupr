module.exports.linkedInUser = profile => {
  const linkedInUser = {
    identifier: "linkedInId",
    profileUrlId: "linkedInProfileURL",
    userModel: {
      linkedInId: profile.id,
      displayName: profile.displayName,
      lastName: profile.name.familyName,
      firstName: profile.name.givenName,
      email: profile.emails[0].value,
      iconPhotoURL: profile.photos[0].value,
      bigPhotoURL: profile._json.pictureUrls.values[0],
      linkedInProfileURL: profile._json.publicProfileUrl
    }
  };

  return linkedInUser;
};
