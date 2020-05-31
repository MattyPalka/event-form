const express = require('express')
const helmet = require('helmet')

require('dotenv').config()

const apiRouter = require('./routes/api')

const app = express()


app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))



app.use('/api', apiRouter)

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(4000)