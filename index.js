const app = require('./src/app');
const mongoose = require('mongoose');
const { APP_NAME, APP_PORT, DB_URI } = require('./src/config');

mongoose.set('useCreateIndex', true);

mongoose
    .connect(DB_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(APP_PORT, () => {
            console.log(`${APP_NAME} running on ${APP_PORT}`);
        });
    })
    .catch(console.log);