const User = require("../models/User")
const bcypt = require("bcryptjs")
const passport = require("passport")
const jw = require("jsonwebtoken")
const sendEmail = require("../config/SendEmail")
const { Op, DATE } = require("sequelize")

module.exports ={
    async store(req,res){
        const {username,password,email,token} = req.body
        const user = await User.findOne({where:{email:email}})
        if(user){
        return res.status(400).json({error:'o email ja existe'})  
        }else{
            bcypt.genSalt(10,(erro, salt) =>{
                bcypt.hash(password, salt, (erro, hash) =>{
                  if(erro){
                    res.status(400).send({ menssage: 'Erro ao Cadastra',erro})
                  }
                  const users = User.create({username:username,password:hash,email:email,token:token})
                   
        })
        return res.json('Criado com sucesso') 
    })
   
    }
},

async index(req,res){
  passport.authenticate('local',(err, user)=> {
    if (!user) { 
      return res.status(400).send(err);}
      res.status(200).send(user)
   
  })(req, res);
},

async SendResentLink(req,res){
  try{
    const {email} = req.body
    const use = await User.findOne({where:{email:email}})
    if(!use){
    return res.json({error:'esta conta nao existe'})
    }
    const token = jw.sign({email}, 'jwtsecret', {expiresIn: '24'}); 
    const updatToken =  User.update({token:token}, {where:{email:email}}) 
    const link = `${req.protocol}://localhost:3333/reset_password/${token}`
    sendEmail(
      email,
      'filomenadeveloper@gmail.com',
      'Recupera a sua senha',
      `<div>clik no link para restaura a senha</div><br/>
      <div>${link}</div>
      `
    )
    return res.status(200).send({menssage:'link de redefinição de senha foi enviado com sucesso para sua caixa de entrada'})
  }catch(e){
   return next({erro:''+e})
  }
},

async resentPassword(req,res){
  const {password,email} = req.body
  const {token} = req.params
 // const decode = jw.verify(token,'jwtsecret', {expiresIn: '24'})
  bcypt.genSalt(10,(erro, salt) =>{
    bcypt.hash(password, salt, (erro, hash) =>{
      if(erro){
        res.status(400).send({ menssage: 'Erro ao Cadastra',erro})
      }
      const updatUser = User.update({password:hash}, { where: {
        email: email
       // imagem: decode
      }})   
  })
  return res.json({menssage:'Atualizado com sucesso'}) 
  })
},

}