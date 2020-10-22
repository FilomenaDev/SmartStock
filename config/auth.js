const localStrategy = require("passport-local")
const bcrypt = require('bcryptjs')

const User = require("../models/User")

module.exports = function(passport){

   passport.use(new localStrategy({usernameField:'email',passwordField:'password'}, (email, password, done) =>{

        User.findOne({where:{email: email}}).then((usuario)=>{
            if(!usuario){
                return done({message:'esta conta nao existe'},null)
             
            }else{
            bcrypt.compare(password, usuario.password, (err,batem)=>{
                if(batem){
                    return done(null,usuario)
                
                }else{
                    return done({message:'Senha incorreta'},null)
                 
                }
            })
        }
        }).catch(e => {
            return done(null,false,{message: "erro"})
        })
    }))

    passport.serializeUser((usuario, done)=>{
        return  done(null, usuario.id)
       
    })

    passport.deserializeUser((id, done) =>{
        User.findByPk(id, (err, usuario)=> {
            return done(err, usuario)
         
        })
    })

}