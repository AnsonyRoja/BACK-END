const { Sequelize } = require('sequelize');

require('dotenv').config();

const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`,
    {
        native: false,
        logging: false

    }

);

const definerModels = [];

const basename = path.basename(__filename);

fs.readdirSync(path.join(__dirname, '/models'))
    .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach(file => {

        definerModels.push(require(path.join(__dirname, '/models', file)))
    }

    )

definerModels.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);

let capitalizeEntries = entries.map(entries => [entries[0][0].toUpperCase() + entries[0].slice(1), entries[1]]);

sequelize.models = Object.fromEntries(capitalizeEntries);

console.log(sequelize.models);



module.exports = {

    con: sequelize
}