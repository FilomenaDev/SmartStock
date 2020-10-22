const express = require("express")
const bodyparser = require('body-parser')
const routa = require("./routas")
require("../Database")
const app = express()
const session = require('express-session')
const flash = require('connect-flash')
const passport = require("passport")
require("../config/auth")(passport)

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use(express.json())
app.use(routa)


app.listen(3333)
