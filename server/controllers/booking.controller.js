import prisma from '../db/prisma.js'





export const sendRequest = async (req,res) => {
    console.log(process.env.DIRECT_URL)
    const { fullname , email  } = req.body
        try {
            const request = prisma.request.create({
                fullname,
                email
            })
            res.status(201).json(request)
        } catch (error) {
            return res.status(500).json({message : 'Error when try to send a Request'})
        }
    
}