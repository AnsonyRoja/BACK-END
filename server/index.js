const server = require('./src/server');
const { con } = require('./src/db');
const PORT = 3001;

con.sync({ force: false }).then(() => {

    server.listen(PORT, () => {

        console.log('Server is listening on port 3001')

    })

})
