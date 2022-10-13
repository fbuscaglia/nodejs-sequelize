import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Cors
app.use(cors());

// Import routes
import userRoutes from "./routes/users.routes.js";
import clockifyClients from "./routes/clockifyClients.routes.js";
import clockifyProjects from "./routes/clockifyProjects.routes.js"
import clockifyDates from "./routes/clockifyDates.routes.js"


// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/clients", clockifyClients);
app.use("/api/projects", clockifyProjects);
app.use("/api/fechas", clockifyDates)

export default app;
