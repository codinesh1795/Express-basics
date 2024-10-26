
let posts = [
    {id: 1, title: 'post 1'},
    {id: 2, title: 'post 2'},
    {id: 3, title: 'post 3'},
    {id: 4, title: 'post 4'}
]; // send these posts through specific endpoint

// @desc Get all posts
// @route GET /api/posts
// Add auth if existing
const getPosts = (req,res) => {
    //console.log(req.query) // sql injection prevention
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
        
        return res.status(200).json(posts.slice(0,limit));
    }
    res.status(200).json(posts);
}

// @desc Get single posts
// @route GET /api/posts/:id

const getPost = (req,res,next) => {
    // console.log(req.params);
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post){
        //return res.status(404).json({message: `Post with id ${id} does not exist`});
        
        const error = new Error(`Post with id ${id} does not exist`);
        error.status = 404;
        return next(error);
    }   
    res.status(200).json(post) 
    //res.status(200).json(posts.filter((posts)=> posts.id === id)); // no error handling need to add
}

// @desc create a post
// @route POST /api/posts
const createPost = (req,res, next) => {
    console.log(req.body);
    const newPost = {
        id: posts.length +1,
        title: req.body.title
    };
    if(!newPost.title){
        //return res.status(400).json({ message: 'Please include a title'});
        const error = new Error(`Please include a title`);
        error.status = 400;
        return next(error);
    }
    posts.push(newPost);
    res.status(201).json(posts);
}

// @desc update a post
// @route PUT /api/posts/:id
const updatePost = (req,res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        //return res.status(404).json({ message: `Post with id ${id} does not exist` })
        const error = new Error(`Post with id ${id} does not exist`);
        error.status = 404;
        return next(error);
    }
    post.title = req.body.title;
    res.status(200).json(posts);
}

// @desc delete a post
// @route DELETE /api/posts/:id
const deletePost = (req,res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        //return res.status(404).json({ message: `Post with id ${id} does not exist` })
        // now implement using middleware/error handling
        const error = new Error(`Post with id ${id} does not exist`);
        error.status = 404;
        return next(error);
    }
    posts  = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
}

module.exports = { deletePost,
    createPost,
    getPosts,
    updatePost,
    getPost
}
