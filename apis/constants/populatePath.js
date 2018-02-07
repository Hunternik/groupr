module.exports.eventPath = [
  {
    path: "companies",
    select: "imgLogoURL"
  },
  {
    path: "attendees",
    select: "displayName bigPhotoURL email"
  },
  {
    path: "recruiters",
    select: "displayName bigPhotoURL email"
  },
  { path: "failedquiz", select: "_id" }
];

module.exports.userPath = {
	path: "events",
	select: "eventId"
};

