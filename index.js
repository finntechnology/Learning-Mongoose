import "dotenv/config";
import express from "express";
import { connectDB } from "./config/databaseConnect.js";
import { contact } from "./models/contactModel.js";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.get("/create-contact", async (req, res) => {
  try {
    const example = await contact.create({
      fullName: "finn",
      email: "finn@gmail.com",
      phoneNumber: +2348090043028,
      birthDate: new Date("1940-08-01"),
    });
    res.json({ message: "contact created successfully" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Sorry an error occured" });
  }
});

// route to find a user contact

app.get("/find-contact", async (req, res) => {
  try {
    const findContact = await contact.findOne({ fullName: "Donald Trump" });
    res.json(findContact);
  } catch (error) {
    console.log(error);
    res.json({ message: "Sorry an error occured" });
  }
});

// route to update a user contact

app.get("/update-contact", async (req, res) => {
  try {
    const updateContact = await contact.findOneAndUpdate(
      { fullName: "God Is Greatest" },
      { fullName: "God Is The Greatest" },
      { new: true }
    );
    res.json(updateContact);
  } catch (error) {
    console.log(error);
    res.json({ message: "Sorry an error occured" });
  }
});

// route to delete a user contact

app.get("/delete-contact", async (req, res) => {
  try {
    const deleteContact = await contact.findOneAndDelete({
      fullName: "God Is The Greatest",
    });
    res.json({ message: "File was deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Sorry an error occured" });
  }
});

app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`Server is connected on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
