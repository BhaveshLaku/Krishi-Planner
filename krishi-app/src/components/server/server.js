const express = require("express");
const app = express();
const cors = require("cors");
const { exec } = require("child_process");

app.use(cors());

// Route to trigger execution of the Flask Python file
app.get("/run-flask", (req, res) => {
  // Execute the Flask Python file
  exec("python3 /path/to/crop_app.py", (error, stdout, stderr) => {
    if (error) {
      console.error("Error executing Flask Python file:", error);
      res.status(500).send("Error executing Flask Python file");
      return;
    }
    console.log("Flask Python file executed successfully:", stdout);
    res.status(200).send("Flask Python file executed successfully");
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
