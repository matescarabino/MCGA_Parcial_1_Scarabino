// const express = require('express');
// const app = express();
// const dotenv = require("dotenv");
// const mongoose = require('mongoose');
// const routes = require('./routes/Products');
// const cors = require('cors');

// dotenv.config();
// // Middleware Json
// app.use(express.json());
// app.use(cors());

// mongoose.connect(process.env.DATABASE_URL)
//   .then(() => {
//     console.log("🟢 DB Connected");
//     app.listen({ port: process.env.PORT || 3000 }, () => {
//       console.log(`🚗 Server running on port ${process.env.PORT || 3000}`);
//     });
//   })
//   .catch((err) => {
//     console.log("🔴 There was an error on the DB connection method.");
//     console.log(err);
//   });

// app.use('/',routes);


const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const routes = require('./routes/Products');
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use('/api',routes);

app.get('/', async (req, res) => {
  res.send('OK. BE working!');
});
const port = process.env.PORT || 4000;

mongoose.connect(
  process.env.DATABASE_URL,
  (error) => {
    if (error) {
      console.log('Fails connection to database', error);
    } else {
      console.log('Connected to database');
      app.listen(port, () => {
        console.log(`Server ready on port ${port}`);
      });
    }
  },
);
