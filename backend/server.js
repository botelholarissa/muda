const app = require('./src/app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT //|| 8080;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});