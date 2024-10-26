const express = require('express');
const router = express.Router();
const postMethods = require('../controllers/postController');


/*
//middleware
const logger = (req,res,next) => {
    consoler.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next(); // can be run on route level or app level based on need
}*/

// get all posts
router.get('/',postMethods.getPosts);

// get single post dynamic id
router.get('/:id',postMethods.getPost);

// create new post
router.post('/', postMethods.createPost);

// update post
router.put('/:id', postMethods.updatePost);

// delete post
router.delete('/:id', postMethods.deletePost);

// move all logic from routes to have all routes in one files
// and controller logic in controller/*.js
module.exports = router;