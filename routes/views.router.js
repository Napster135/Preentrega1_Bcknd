import express from "express";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Productos.find({});
    res.render("index", { products });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});

export default router;