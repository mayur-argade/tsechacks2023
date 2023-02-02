const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");
const userService = require("../services/user-service");
const tokenService = require("../services/token-service");
const UserDTO = require("../dto/userDTO");

exports.sendotp = async (req, res) => {
  // get phone number
  const { phone } = req.body;

  // validate phone number
  if (!phone) {
    return res.status(400).json({ message: "Phone field is mandatory" });
  }

  // generate random OTP
  const otp = otpService.generateOtp();

  // hash OTP and calculate expiry time
  const ttl = 1000 * 60 * 2;
  const expires = Date.now() + ttl;
  const data = `${phone}.${otp}.${expires}`;
  const hash = hashService.hashotp(data);

  // send OTP via sms
  try {
    await otpService.sendOtp(phone, otp);
    return res.json({
      hash: `${hash}.${expires}`,
      phone,
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Failed to send OTP" });
  }
};

exports.verifyotp = async (req, res) => {
  const { otp, hash, phone } = req.body;
  if (!otp || !hash || !phone) {
    return res.status(400).json("all fields are required");
  }

  const [hashedOtp, expires] = hash.split(".");
  if (Date.now() > +expires) {
    return res.status(400).json("otp expired");
  }

  const data = `${phone}.${otp}.${expires}`;

  const isValid = otpService.verifyOtp(hashedOtp, data);

  if (!isValid) {
    return res.status(400).json("invalid otp");
  }

  let user;

  try {
    user = await userService.findUser({ phone: phone });
    if (!user) {
      user = await userService.createUser({ phone: phone });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }

  const { accessToken } = tokenService.generateTokens({
    id: user._id,
    activated: false,
  });

  const userdto = new UserDTO(user);

  res
    .status(200)
    .cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    })
    .json({ userdto });
};

exports.activate = async (req, res) => {
  const { accessToken } = req.cookies;

  // if (!accessToken) {
  //   return res.status(400).json({ msg: "user if not authenticated" });
  // }
  const { name, age, targetLocation, lookingFor, userId } = req.body;

  if (!name || !age || !targetLocation || !lookingFor) {
    return res.status(400).json({ msg: "all fields are mandatory" });
  }

  try {
    const user = await userService.findUser({ _id: userId });
    if (!user) {
      res.status(404).json({ message: "User not found!" });
    }

    user.activated = true;
    user.name = name;
    user.targetLocation = targetLocation;
    user.lookingFor = lookingFor;

    user.save();
    res.json({ user: new UserDTO(user), auth: true });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!" });
  }
  
};


