import mongoose from 'mongoose'

const mongoConnect = async(req,res)=>{
    const connect = await mongoose.connect(process.env.MONGO_URL)
    console.log(`database Connected successfully ${connect.connection.host}`)
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:true,
            message:'error in Database connectivity',
            error
        })
        
    }
}
export default mongoConnect;




