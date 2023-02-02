const crypto = require("crypto");
const hashService = require("./hash-service");
const smssid = "AC72a1bffe91111f737b3b24c0ffba4178";
const smsAuthToken = "48c4d9ef44377c0cae40bf8d46bf7e90";
const twilio = require("twilio")(smssid, smsAuthToken, {
  lazyLoading: true,
});

class Otpservice {
  generateOtp() {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }

  async sendOtp(phone, otp) {
    return await twilio.messages.create({
      to: phone,
      from: +18584121505,
      body: `Your roommate OTP is ${otp}`,
    });
  }

  verifyOtp(hashedOtp, data) {
    let computedHash = hashService.hashotp(data);

    if (computedHash === hashedOtp) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new Otpservice();
