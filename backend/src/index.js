// import all the app
import app from "./app";

// port where the app will work
const port = process.env.PORT || 3000;
app.listen(port, _ => console.log(`Escuchando peticiones en el puerto ${port}`));