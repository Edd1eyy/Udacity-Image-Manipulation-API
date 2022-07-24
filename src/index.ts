import express from "express";
import routes from "./routes/routesIndex";

const app = express();
const PORT = 3000;

app.use("/api", routes);
app.listen(PORT, () => console.log(`live on http://localhost:${PORT}/api`));

export default app;
