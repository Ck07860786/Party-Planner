
import cloudinary from "../utils/cloudinary.js";
import serviceModel from "../Models/serviceModel.js";
import slugify from "slugify";
import categoryModel from "../Models/categoryModel.js";

export const createServiceController = async(req,res)=>{
    
  
   
    try {
        const {name, description, price, category,slug } = req.fields;
        const image = req.files.image.path;
        switch (true) {
            case !name:
              return res.status(500).send({ error: "Name is required" });
            case !price:
              return res.status(500).send({ error: "Price is required" });
            case !description:
              return res.status(500).send({ error: "Description is required" });
            case !category:
              return res.status(500).send({ error: "Category is required" });
            case !image:
              return res.status(500).send({ error: "Image is required" });
        }

        const result = await cloudinary.uploader.upload(image, {
            folder: 'party'
        });

        const service = new serviceModel({
           
            name,
            description,
            price,
            category,
            image:{
                public_id:result.public_id,
                url: result.secure_url
            },
            slug:slugify(name)
        });

        await service.save();

        res.status(200).send({
            success: true,
            message: 'Service created successfully',
            service,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error in creating the service",
            error: {
                message: error.message,
                name: error.name,
                http_code: 400
            }
        });
    }
};


export const getServiceController = async(req,res)=>{

    try {
        const service = await serviceModel.find({})
        res.status(200).send({
            success:true,
            message:'all services',
            service
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in getting the services',
            error
        })
    }

}

//get single service

export const getSingleServiceController = async(req,res)=>{
    try {
        const service = await serviceModel.findOne({ slug: req.params.slug }).populate('reviews');
        res.status(200).send({
            success: true,
            message: 'Service accessed successfully',
            service,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in getting the single service',
            error
        });
    }
}

//delete service 
export const deleteServiceController = async(req,res)=>{
    try {
        await serviceModel.findByIdAndDelete(req.params.pid)
        res.status(200).send({
            success:true,
            message:'service deleted successfully'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error while deleting the service',
            error
        })
    }
}



export const updateServiceController= async(req,res)=>{
    
  
   
    try {
        const {name, description, price, category,slug } = req.fields;
        const image = req.files.image.path;
        switch (true) {
            case !name:
              return res.status(500).send({ error: "Name is required" });
            case !price:
              return res.status(500).send({ error: "Price is required" });
            case !description:
              return res.status(500).send({ error: "Description is required" });
            
            case !category:
              return res.status(500).send({ error: "Category is required" });
            case !image:
              return res.status(500).send({ error: "Image is required" });
        }

        const result = await cloudinary.uploader.upload(image, {
            folder: 'party'
        });

        const service = await serviceModel.findByIdAndUpdate(req.params.pid,{
           
            name,
            description,
            price,
            category,
            image:{
                public_id:result.public_id,
                url: result.secure_url
            },
            slug:slugify(name)
        },{new:true});

        await service.save();

        res.status(200).send({
            success: true,
            message: 'Service updated successfully',
            service,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error in updating the service",
            error: {
                message: error.message,
                name: error.name,
                http_code: 400
            }
        });
    }
};

export const filterServicesController = async(req,res)=>{
    try {
        const {checked,radio} = req.body;
        let args = {}

        if(checked.length >0) args.category = checked;
        if(radio.length) args.price ={$gte:radio[0],$lte:radio[1]}
        const services = await serviceModel.find(args)
        res.status(200).send({
            success:true,
            services
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error while filtering the services',
            error
        })
    }
}

// get ctaegory-product

export const categoryServiceController = async(req,res)=>{
    try {
      const category = await categoryModel.findOne({slug:req.params.slug})
      const service = await serviceModel.find({category}).populate('category')
      res.status(200).send({
        success:true,
        category,
        service,
      })
      
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success:false,
        message:'error in getting service',
        error
      })
    }
  
  }
  







