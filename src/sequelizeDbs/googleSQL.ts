import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('sinuous-crow-309508:europe-central2:selfstudysql', 'root', 'Respubli4ka', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

const sequelize = new Sequelize({
    database: process.env.GOOGLE_DB ,
    username: process.env.GOOGLE_USER_NAME,
    password: process.env.GOOGLE_PASSWORD,
    dialect: 'mysql',
    host: process.env.GOOGLE_PUBLIC_IP
});

async function isOk() {
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

isOk()


    // body
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

