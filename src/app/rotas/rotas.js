module.exports = (app) => {

    app.get('/', function(req, resp){
        resp.send(`
            <html>
                <head>
                </heade>
                <body>
                    <h1> Casa do Código </h1>
                </body>
            </html> 
        `);
    });

    app.get('/livros', function(req, resp){
        resp.send(`
            <html>
                <head>
                </heade>
                <body>
                    <h1> Livros </h1>
                </body>
            </html> 
        `);
    });

}