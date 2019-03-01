const routes = (app) => {
    app.route('/contact')
    .get((req, res) =>
    res.send('Get Request Successfull!!!'))

    .post((req, res) =>
    res.send('Post Request Successfull!!!'));

    app.route('/contact/:contactId')
    .put((req, res) =>
    res.send('Put Request Successfull!!!'))

    .delete((req, res) =>
    res.send('Delete Request Successfull!!!'));

}

export default routes;