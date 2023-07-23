import { addNewContact } from "../controllers/crmController";
import express from "express";

export default class Routes {
  static init(app) {
    const router = express.Router();

    app.route("/contact").get(
      (req, res, next) => {
        //middleware
        console.log(`Request URL From: ${req.originalUrl}`);
        console.log(`Request Type: ${req.method}`);
        next();
      },
      (req, res, next) => {
        res.send("GET request successful!");
      }
    );

    app.route("/contact").post(addNewContact);

    app.route("/contact/:contactId").put((req, res) => {
      res.send("PUT request successful!");
    });

    app.route("/contact").delete((req, res) => {
      res.send("DELETE request successful!");
    });
  }
}
