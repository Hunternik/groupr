const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = require("./User");
const eventSchema = require("./Events");

const companySchema = new Schema({
  companyId: { type: String, default: "" },
  name: { type: String, default: "" },
  industry: { type: String, default: "" },
  website: { type: String, default: "" },
  jobsOpen: { type: Array, default: [] },
  primaryContact: { type: String, default: "" },
  imgLogoURL: { type: String, default: "" },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
      default: []
    }
  ],
  activeEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: "event",
      default: []
    }
  ],
  pastEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: "event",
      default: []
    }
  ]
});

const Company = mongoose.model("companies", companySchema);

module.exports = Company;
