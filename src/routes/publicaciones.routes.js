import { Router } from "express";
import { getPublicaciones, getPublicacionById, createPublicacion, deletePublicacion, updatePublicacion } from "../controllers/controller.publicaciones.js";

const userRouter = Router();

//METODO HTTP GET
userRouter.get("/api/publicaciones/:page", getPublicaciones);

//METODO HTPP GET
userRouter.get("/api/publicacion/:id", getPublicacionById);

//METODO HTTP POST
userRouter.post("/api/publicacion", createPublicacion);

//METODO HTTP DELETE
userRouter.delete("/api/publicacion/:id", deletePublicacion);

//METODO HTTP PUT 
userRouter.put("/api/publicacion/:id", updatePublicacion);

export default userRouter;