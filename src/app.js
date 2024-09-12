const routes = require('./routes/index');
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); 
const productRoutes = require('./routes/productRoutes'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes); 
app.use('/api/products', productRoutes); 

const port = process.env.PORT || 3300;
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.error('Failed to connect to MongoDB', err.message);
});
app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
