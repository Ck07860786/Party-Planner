// reviewController.js
import reviewModel from '../Models/reviewModel.js';
import serviceModel from '../Models/serviceModel.js';

export const createReviewController = async (req, res) => {
    try {
        const { serviceId, rating, comment } = req.body;
        const userId = req.user._id;

        const service = await serviceModel.findById(serviceId);
        if (!service) {
            return res.status(404).send({ success: false, message: 'Service not found' });
        }

        const review = new reviewModel({
            user: userId,
            service: serviceId,
            rating,
            comment
        });

        await review.save();

        res.status(201).send({
            success: true,
            message: 'Review added successfully',
            review
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error adding review',
            error
        });
    }
};

export const getServiceReviewsController = async (req, res) => {
    try {
        const { serviceId } = req.params;

        const reviews = await reviewModel.find({ service: serviceId }).populate('user', 'name email');

        res.status(200).send({
            success: true,
            message: 'Reviews fetched successfully',
            reviews
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error fetching reviews',
            error
        });
    }
};
