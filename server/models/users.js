const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    match: [
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,32}$/,
      `password must be between 4 and 32 characters and include at least one uppercase letter and one numeric digit`,
    ],
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  savedRoutines: [
    {
      type: Schema.Types.ObjectId,
      ref: "routines",
    },
  ],
  // friends: [{
  //     type: Schema.Types.ObjectId,
  //     ref: 'users'
  // }]
});
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Users = model("users", userSchema);

module.exports = Users;
