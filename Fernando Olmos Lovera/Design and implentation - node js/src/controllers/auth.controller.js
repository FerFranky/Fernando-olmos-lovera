import User from "../models/User.js"
import jwt from "jsonwebtoken"
import config from '../config.js'
import Role from "../models/Role.js"

export const signUp = async ( req, res ) => {
    const { username, email, password, roles } = req?.body

    const user = new User({
        username, email, password: await User.encryptPassword(password)
    })

    if (roles) {
        const foundRoles = await Role.find( { name: {$in: roles } } )
        user.roles = foundRoles.map( role => role._id )
    } else {
        const role = await Role.findOne( { name: "user" } )
        user.roles = [ role._id ]
    }

    const newUser = await user.save()
    const token = jwt.sign({ id: newUser._id }, config.SECRET, {
        expiresIn: 86400, // 24 hours
      });
  
      return res.status(200).json({ token });
}

export const signIn = async ( req, res ) => {
    const user = await User.findOne( { email: req.body.email } ).populate("roles")
    if ( !user ) return res.status(400).json( {message: 'User not found'} )

    const matchPassword = await User.comparePassword( req.body.password, user.password )
    if (!matchPassword) return res.status(401).json( {message: 'Invalid password'} )
    
    const token = jwt.sign( { id:user._id }, config.SECRET, {
        expiresIn: 86400
    } )
    res.json({ token: token })
}