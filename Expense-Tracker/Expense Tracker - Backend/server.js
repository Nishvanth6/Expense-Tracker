const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let expenses = []; // in-memory storage

// Add expense
app.post("/add-expense", (req, res) => {
    expenses.push(req.body);
    res.send({ message: "Expense added" });
});

// Get expenses
app.get("/expenses", (req, res) => {
    res.json(expenses);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
