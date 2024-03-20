const app = require('./app.js');
require('dotenv').config();

// eslint-disable-next-line no-undef
const PORT =  process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`);
 });