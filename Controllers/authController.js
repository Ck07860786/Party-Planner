import JWT from 'jsonwebtoken'
import { comparePassword, hashedPassword } from "../Helper/authHelper.js";
import userModel from '../Models/userModel.js'




export const registerController = async(req,res)=>{
    try {
        const {name,email,phone,password,answer} = req.body;
        if(!name){
            return res.send({message:'Name is required'})
        }
        if(!email){
            return res.send({message:'Email is required'})
        }
        if(!phone){
            return res.send({message:'Phone Number is required'})
        }
        if(!password){
            return res.send({message:'Password is required'})
        }
        if(!answer){
            return res.send({message:'Answer is required'})
        }

        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'User already register with this email'

            })
        }

        const hashPassword = await hashedPassword(password)

        const user = await new userModel({name,email,phone,answer,password:hashPassword}).save();

        res.status(200).send({
            success:true,
            message:'Registration Successfull',
            user
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in registration',
            error
        })
    }

}

export const loginController = async(req,res)=>{
    try {
        const {email,password}= req.body;

        if(!email || !password){
            return res.send({
                success:false,
                message:'Wrong email or password'
            })
        }

        const user = await userModel.findOne({email})
        if(!user){
           return res.status(404).send({
                success:false,
                message:'Email not register'
            })
        }

        const match = await comparePassword(password,user.password)
        if(!match){
           return res.status(404).send({
                success:false,
                message:"invalid password"
           })
        }
        
        const token = await JWT.sign({_id:user._id},process.env.JWT_KEY,{expiresIn:'2d'})
        
        res.status(200).send({
            success:true,
            message:'Login Successfully',
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                role:user.role,
                
            },
            token
        })


        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in login',
            error
        })
        
    }
}

export const forgotPasswordController = async(req,res)=>{
          try {
            const {email,answer,newPassword} = req.body;

            if(!email){
                return res.send({message:'Email is required'})
            }
            if(!newPassword){
                return res.send({message:'Email is required'})
            }
            if(!answer){
                return res.send({message:'Answer is required'})
            }
            
            const user = await userModel.findOne({email})
            if(!user){
                return res.status(404).send({
                    success:false,
                    message:'Wrong email or password'
                })
            }

            const hash = await hashedPassword(newPassword)
            await userModel.findByIdAndUpdate(user._id,{password:hash})

            res.status(200).send({
                success:true,
                message:'Password Reset Successfully'
            })
          } catch (error) {
            console.log(error)
            res.status(500).send({
                success:false,
                message:'error in changing the password',
                error
            })
          }
}