const crypto = require("crypto");
const hashService = require("./hash-service");
const smssid = "AC72a1bffe91111f737b3b24c0ffba4178";
const smsAuthToken = "237471071c0e4a7c5863053bbad84d31";
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
