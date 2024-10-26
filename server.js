const express = require('express'); // import express commonjs style
const path = require('path');
const PORT = process.env.PORT || 8080;
const posts = require('./routes/posts');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error');
const notFound = require('./middleware/notFound');

//  initialize express into a object
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger middleware
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname,'public')))
//console.log(path.join(__dirname,'public'))

// Routes
app.use('/api/posts', posts);

app.use(notFound);
// Error Handler
app.use(errorHandler);

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
