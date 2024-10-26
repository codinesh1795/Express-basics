const express = require('express'); // import express commonjs style
const path = require('path');
//  initialize express into a object
const app = express();

// add routes
// based on what method you want and path you want to direct that
/*
app.get('/', (req,res) => {
    res.send({message: 'hello world'});
});
app.get('/about', (req,res) => {
    res.send({message: 'About'});
});
*/

// setup static folder/server
app.use(express.static(path.join(__dirname,'public')));
// now i can comment below lines and still acess homepage and about page in url bar it would be /about.html
// we can keep on adding html files to static folder without adding any routes to server files and access directly by modifying url

/*
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
})
app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'public','about.html'));
}); // to load html files, if we have bunch of files, we need to have bunch of routes which becomes difficult to maange, therefore we can use express static middleware
*/

app.listen(8000, () => console.log('Server is running on port 8000'));
