// const mongoose = require('mongoose');
// const cities = require('./cities');
// const { places, descriptors } = require('./seedHelpers');
// const Campground = require('../models/campground');

// mongoose.connect('mongodb://localhost:27017/yelp-camp', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });

// const sample = array => array[Math.floor(Math.random() * array.length)];

// const seedDB = async () => {
//     await Campground.deleteMany({});
//     for (let i = 0; i < 50; i++) {
//         const random1000 = Math.floor(Math.random() * 1000);
//         const price = Math.floor(Math.random() * 20) + 10;
//         const camp = new Campground({
//             location: `${cities[random1000].city}, ${cities[random1000].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`,
//             image: 'https://source.unsplash.com/collection/483251',
//             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
//             price
//         })
//         await camp.save();
//     }
// }

// seedDB().then(() => {
//     mongoose.connection.close();
// })

// const mongoose = require("mongoose");
// const cities = require("./cities");
// const { places, descriptors } = require("./seedHelpers");
// const Campground = require("../models/campground");

// mongoose.connect("mongodb://localhost:27017/yelp-camp", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Database connected");
// });

// const sample = (array) => array[Math.floor(Math.random() * array.length)];

// const seedDB = async () => {
//   await Campground.deleteMany({});
//   for (let i = 0; i < 50; i++) {
//     const random1000 = Math.floor(Math.random() * 1000);
//     const price = Math.floor(Math.random() * 20) + 10;
//     const camp = new Campground({
//       location: `${cities[random1000].city}, ${cities[random1000].state}`,
//       title: `${sample(descriptors)} ${sample(places)}`,
//       images: [
//         {
//           url: "https://res.cloudinary.com/dxvtvpuof/image/upload/v1665313226/YelpCamp/qbka9w4n4bgdpmm0951k.jpg",
//           filename: "YelpCamp/qbka9w4n4bgdpmm0951k",
//         },
//         {
//           url: "https://res.cloudinary.com/dxvtvpuof/image/upload/v1665313228/YelpCamp/uilqcfz6i9alyzil2flp.jpg",
//           filename: "YelpCamp/uilqcfz6i9alyzil2flp",
//         },
//       ],
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!",
//       price,
//       author: "6633fb0a64385364e38599c44",
//     });
//     await camp.save();
//   }
// };

// seedDB().then(() => {
//   mongoose.connection.close();
// });

const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "633fb0a64385364e38599c44",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: "https://res.cloudinary.com/dxvtvpuof/image/upload/v1665313226/YelpCamp/qbka9w4n4bgdpmm0951k.jpg",
          filename: "YelpCamp/qbka9w4n4bgdpmm0951k",
        },
        {
          url: "https://res.cloudinary.com/dxvtvpuof/image/upload/v1665313228/YelpCamp/uilqcfz6i9alyzil2flp.jpg",
          filename: "YelpCamp/uilqcfz6i9alyzil2flp",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
