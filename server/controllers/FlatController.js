const FlatModel = require("../models/FlatModel");
const natural = require("natural");
const City = require("../models/CityModel");

exports.createad = async (req, res) => {
  const {
    name,
    address,
    city,
    state,
    pincode,
    buildArea,
    price,
    nearbyHospital,
    nearbySchool,
    isParking,
  } = req.body;
  console.log(
    name,
    address,
    city,
    state,
    pincode,
    buildArea,
    price,
    nearbyHospital,
    nearbySchool,
    isParking
  );
  if (
    !name ||
    !address ||
    !city ||
    !state ||
    !pincode ||
    !buildArea ||
    !price
  ) {
    return res.status(400).json({ msg: "all fields are mandatory" });
  }

  try {
    const flat = await FlatModel.create({
      name,
      address,
      city,
      state,
      pincode,
      buildArea,
      price,
      nearbyHospital,
      nearbySchool,
      isParking,
    });
    res.status(200).json(flat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

exports.flatlist = async (req, res) => {
  const flats = await FlatModel.find({});
  res.status(200).json(flats);
};

exports.oneflat = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ msg: "id is not there" });
  }

  try {
    const flat = await FlatModel.findById(id);
    if (!flat) {
      return res.status(400).json({ msg: "no flat is available for this ad" });
    }
    res.status(200).json(flat);
  } catch (error) {
    console.log(error);
  }
};

exports.getflatbykeyword = async (req, res) => {
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
        const flats = await FlatModel.find({ city: newcity });
        if (!flats || flats.length === 0) {
          return res.status(400).json({ msg: "no flat available" });
        }
        return res.status(200).json(flats);
      } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Error finding flats" });
      }
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .send({ error: "Error connecting to the database" });
    }
  };
  
