import Message from "../model/messageModel";

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    console.log(messages);
    res.json({ message: messages });
  } catch (err) {
    res.json({ message: "Bad request. No messages found" });
  }
};
