import prisma from "../db/prisma.js";
import loginSchema from "../validation/loginValidation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllAccounts = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Error when try to get all users" });
  }
};

export const getAccount = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Error when try to get user" });
  }
};

export const createAccount = async (req, res) => {
    const { error } = loginSchema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors });
    }
    const { email, password , role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role
      },
    });
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Error when try to create user" });
  }
};

export const login = async (req, res) => {
  const { error } = loginSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors });
  }

  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const tokenData = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

     res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    const response = res.status(200).json({
      message: "Login successful",
      role: user.role,
      success: true,
    });


    return response;

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error when try to login" });
  }
};


export const logout = async(req, res) => {
    try {

      res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
     });
        const response = res.status(200).json(
            {
                message: "Logout successful",
                success: true,
            }
        )

        return response;
        
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
    
}


export const updateAccount = async (req, res) => {
  const { id } = req.user
  const { email , password } = req.body
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        email,
        password,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Error when try to update user" });
  }
};