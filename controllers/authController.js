import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

//RegisterController

export const registerController = async (req,res) => {
    try {
        const {name,email,password,phone,address} = req.body;

        if(!name){
            return res.send({message:'Name is required'});
        }
         if(!email){
            return res.send({message:'Email is required'});
        }
         if(!password){
            return res.send({message:'password is required'});
        }
         if(!phone){
            return res.send({message:'Phone no. is required'});
        }
        if(!address){
            return res.send({message:'Address is required'});
        }

        const existinguser = await userModel.findOne({email});

        if (existinguser) {
            return res.status(200).send({
                success:false,
                message:'Already registered',
            });
        }

        const hashedPassword = await hashPassword(password);
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password:hashedPassword,
        }).save();

        res.status(201).send({
            success:true,
            message:'User registered successfully',
            user,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error,
        });
    }
};

//LoginController

export const loginContoller = async (req, res) => {
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password',
            });
        }

        const user = await userModel.findOne({email});

        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered',
            });
        }

        const match = await comparePassword(password,user.password);

        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid password',
            });
        }

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {expiresIn : "7d"});

        res.status(200).send({
            success:true,
            message:'Login Successfull',
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
            },
            token,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in login',
            error,
        });
    }
};

//TestController

export const testController  = (req, res) => {
    res.status(200).send({
        success:true,
        message:'Protected Route',
    });
};
