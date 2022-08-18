import express from "express";
import ReadDatesController from "../controllers/ReadDatesController";

const readDatesRouter = express.Router();

let readDatesController = new ReadDatesController();

readDatesRouter.post("/addReadDates", readDatesController.addReadDates);

readDatesRouter.get("/readDates/:userId", readDatesController.getAllReadDates);

readDatesRouter.put("/readDates", readDatesController.updateReadDates);

readDatesRouter.delete("/readDates/:id", readDatesController.deleteReadDates);

export default readDatesRouter;
