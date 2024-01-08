import Subscriber from "../models/subscriber.js";
import errorFunc from "../utils/errors.js";

class subscriberController {
  static addSubscriber = async (req, res) => {
    const { email } = req.body;

    console.log(email);

    try {
      const subscriber = await Subscriber.create({ email });

      res.status(201).json({
        message: "Subscriber added successfully",
        data: subscriber,
      });
    } catch (error) {
      const message = error.message;
      const status = 500;
      errorFunc(res, message, status);
    }
  };

  static getSubscribers = async (req, res) => {
    try {
      const subscribers = await Subscriber.find();

      res.status(200).json({
        message: "Subscribers fetched successfully",
        data: subscribers,
      });
    } catch (error) {
      const message = error.message;
      const status = 500;
      errorFunc(res, message, status);
    }
  };
}

export default subscriberController;
