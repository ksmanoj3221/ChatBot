import express from "express";
const app = express();
const port = 5000;
app.use(express.json());
app.listen(port, () => {
    console.log(`App is listening at ${port}`);
});
//# sourceMappingURL=index.js.map