module.exports.eventPath = [
  {
    path: "companies",
    select: "imgLogoURL"
  },
  {
    path: "attendees",
    select: "displayName bigPhotoURL position email"
  },
  {
    path: "recruiters",
    select: "displayName bigPhotoURL companyPhotoURL company email"
  },
  { path: "failedquiz", select: "_id" }
];

module.exports.userPath = {
	path: "events",
	select: "eventId"
};

