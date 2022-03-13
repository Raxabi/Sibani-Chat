// Importamos todo el codgio de la app para arrancarlo
import app from "./app.js";

// Listen requests on const port
const port = process.env.PORT || 4000;
app.listen(port, _ => console.log("Listening on port", port));