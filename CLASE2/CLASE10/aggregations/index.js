import mongoose from "mongoose";
import orderModel from "./models/order.model.js";
//AGREGUEICIONN

const URL = "mongodb+srv://yerlinrojas808:9bnPPAq9xBLloP4U@yerlincluster.pxzyemm.mongodb.net/?retryWrites=true&w=majority";

const run = async () => {
  console.log('DB connected')

/*     const result = await orderModel.insertMany(
        [
            {name: 'Pepperoni', size: 'small', price: 19, quantity: 10, date: "2022-01-11T18:50:30Z"},
            {name: 'Pepperoni', size: 'medium', price: 20, quantity: 20, date: "2022-01-15T18:50:30Z"},
            {name: 'Pepperoni', size: 'medium', price: 20, quantity: 20, date: "2022-01-15T18:50:30Z"},
            {name: 'Pepperoni', size: 'large', price: 21, quantity: 30, date: "2022-01-17T18:50:30Z"},
        ]
    )  ESTO LUEGO DE CREADO EN LA DB SE TIENE QUE COMENTAR SINO SIGUE HACIENDOLO*/

  //const orders = await orderModel.find()
  const orders = await orderModel.aggregate([
    // Stage 1: Filtrar las orders por criterio
    { $match: { size: "medium" } },
    // Stage 2: Agrupa y acumula
    {
      $group: {
        _id: "$name",
        totalQuantity: { $sum: "$quantity" }
      }
    },
    // Stage 3: Ordenar por cantidad total en orden descendente
    { $sort: { totalQuantity: -1 } },
    // Stage 4: Guardar resultado en un nuevo documento
    // El doc nuevo va a tener un _id y orders
    // Hacer $push para guardar todo el resultado anterior en un nuevo campo
    // $$ROOT toma toda la estructura de cada elemento
    {
      $group: {
        _id: 1,
        orders: { $push: "$$ROOT" }
      }
    },
    // Stage 5: Generar un nuevo ObjectId
    {
      $project: {
        "_id": 0,
        orders: "$orders"
      }
    }
  ]);

  // Stage 6: Agregar los elementos a una nueva colección
  await mongoose.connection.db.collection("reports").insertMany(orders);
  console.log(JSON.stringify(orders, null, 2, '/t'));
};

mongoose.connect(URL, { dbName: 'clase09' }).then(run).catch(error => console.error(error));

//clave: 
//9bnPPAq9xBLloP4U