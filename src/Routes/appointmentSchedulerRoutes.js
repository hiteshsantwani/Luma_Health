const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) =>{
        //Midleware
        console.log(`Request From: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next(); 
    }, (req, res, next) => {
        res.send('Get Request Successfull!!!');
    })

    .post((req, res) =>
    res.send('Post Request Successfull!!!'));

    app.route('/contact/:contactId')
    .put((req, res) =>
    res.send('Put Request Successfull!!!'))

    .delete((req, res) =>
    res.send('Delete Request Successfull!!!'));

}

export default routes;