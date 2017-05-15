const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine','pug')
app.use(express.static('public'))

app.get('/', (req,res) => {
	res.render('index', { titlePage: 'My Super Cool Project'})
}) 

app.listen(3000, ()=> console.log(`listening on PORT ${PORT} `))