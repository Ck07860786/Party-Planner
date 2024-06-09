import express from "express";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";
import {

  categoryServiceController,
  createServiceController,
  deleteServiceController,
  filterServicesController,
  getServiceController,
  getSingleServiceController,
  updateServiceController,
} from "../Controllers/serviceController.js";
import ExpressFormidable from "express-formidable";

const router = express.Router();
router.post(
  "/create-service",
  requireSignIn,
  isAdmin,
  ExpressFormidable(),
  createServiceController
);

// get services
router.get("/get-service", getServiceController);
//get single service
router.get("/get-service/:slug", getSingleServiceController);

//delete-service

router.delete('/delete-service/:pid', deleteServiceController)

//update service

router.put('/update-service/:pid',
requireSignIn,
ExpressFormidable({}),
isAdmin,
updateServiceController
)

//filter services

router.post('/filter-services', filterServicesController)



//product- Category 

router.get('/category-service/:slug',categoryServiceController)

export default router;
