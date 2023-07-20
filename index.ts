import express from "express";
import cors from "cors";
import Middleware from "./middleware";

const app = express();
app.use(cors());

app.get("/api/v2.2/consents/consent", (req, res) => {
  const isMiddleware = Middleware("");
  if (isMiddleware) res.status(200).sendFile(process.cwd() + "/data/user.json");
  else
    res.status(401).json({
      status: 401,
      message:
        "Conecta comigo no linkedin Parçaaa, pra eu mandar o toke pra você!",
    });
});

app.listen(8081, () => {
  console.log("Running server the api in port ", 8081);
});