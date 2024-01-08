import errorFunc from "../utils/errors.js";
import Message from "../models/message.js";

class messagesController {

    static createMessage = async (req, res) => {
        // LOG REQUEST TO CONSOLE
        console.log(req.body);
      
        // CATCH COMPONENTS OF THE MESSAGE OBJECT
        const { name, email, body } = req.body;
      
        // CREATE MESSAGE
      
        try {
          const message = await Message.create({
            name,
            email,
            body,
            createdAt: Date.now()
          });
      
          res.status(201).json({
              message: "Message sent successfully",
              data: message
          });
      
        } catch (error) {
          const message = error.message;
          const status = 500;
          console.log(error)
          errorFunc(res, message, status);
        }
      };

      static readMessages = async (req, res) => {

        try {
          const messages = await Message.find();
      
          res.status(200).json({
              message: "Messages retrieved successfully",
              data: messages
          });
      
        } catch (error) {
          const message = error.message;
          const status = 500;
          errorFunc(res, message, status);
        }

      };

}

export default messagesController;
