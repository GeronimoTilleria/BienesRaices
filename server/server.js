require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const app = express();
const port = process.env.PUERTO;

// Configuraciones
require('./config/mongoose.config');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

// Rutas
require('./routes/propiedad.routes')(app);
require('./routes/vendedor.routes')(app);
require('./routes/usuario.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));