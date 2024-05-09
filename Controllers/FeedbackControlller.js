import FeedbackModel from '../Models/FeedbackModel.js'
export const addFeedbackController = async(req,res)=>{
    try {

        const { service, user, rating, comment } = req.body;
        const feedback = new FeedbackModel({
            service,
            user,
            rating,
            comment
        });
        await feedback.save();

        res.status(200).send({
            success:true,
            message:' Thanks for Feedback',
            feedback,
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'something went wrong',
            error
        })
    }
}