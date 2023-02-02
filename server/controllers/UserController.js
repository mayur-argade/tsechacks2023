const User = require("../models/UserModel");

exports.getallroommates = async (req, res) => {
  const users = await User.find({});
  res.status(200).json(flats);
};

exports.getoneroommate = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ msg: "id is not there" });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(400)
        .json({ msg: "no roommate is available for this ad" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

exports.getroommatebylocation = async (req, res) => {
  const { city } = req.body;

  try {
    const cities = await City.find({});
    let maxDistance = Number.MAX_VALUE;
    let closestMatch;

    cities.forEach((result) => {
      const distance = natural.LevenshteinDistance(
        result.name.toLowerCase(),
        city.toLowerCase()
      );
      if (distance < maxDistance) {
        closestMatch = result;
        maxDistance = distance;
      }
    });

    if (!closestMatch || maxDistance > 2) {
      return res.status(404).send({ error: "City not found" });
    }

    let newcity = closestMatch.name;
    //   console.log(newcity);
    try {
      const users = await User.find({ city: newcity });
      if (!users || flats.length === 0) {
        return res.status(400).json({ msg: "no flat available" });
      }
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Error finding flats" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: "Error connecting to the database" });
  }
};

// exports.getroommatesbyfilter = async(req, res) => {
// };

// exports.interestMachingforSorting = async(req, res) => {
// };
