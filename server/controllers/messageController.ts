import Message from "../model/messageModel";

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json({ message: messages });
  } catch (err) {
    res.json({ message: "Bad request. No messages found" });
  }
};

export const postMessage = async (req, res) => {
  if (!req.body.message) {
    res.status(400);
    throw new Error("Please add a message");
  }

  const message = await Message.create({
    message: req.body.message,
  });
  res.status(200).json(message);
};

export const putMessage = async (req, res) => {
  const messageid = await Message.findById(req.params.id);

  if (!messageid) {
    res.status(400);
    throw new Error("Id not found");
  }

  const updatedMessage = await Message.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedMessage);
};

export const deleteMessage = async (req, res) => {
  const messageid = await Message.findByIdAndDelete(req.params.id);

  if (!messageid) {
    res.status(400);
    throw new Error("Id not found");
  }

  res.json(messageid);
};
