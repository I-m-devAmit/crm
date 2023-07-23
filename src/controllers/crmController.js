import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";
import Messages from "../util/Message";

const Contact = mongoose.model("Contact", ContactSchema);

const user = await Contact.findById(req.body);

export const addNewContact = async (req, res) => {
  try {
    // if (user) {
    //   return {
    //     status: process.env.BADREQUEST,
    //     message: Messages.USER_NOT_FOUND,
    //   };
    // }
    const newContact = await new Contact({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      company: req.body.company,
      phone: req.body.phone,
    });
    newContact.save();
    return {
      status: process.env.SUCCESS,
      message: Messages.USER_CREATED,
      data: newContact,
    };
  } catch (err) {
    return {
      status: process.env.INTERNALSERVERERROR,
      message: Messages.INTERNAL_SERVER_ERROR,
    };
  }
};
