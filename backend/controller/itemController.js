const Item = require('../model/item');

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createItem = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newItem = new Item({ name, description });
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateItem = async (req, res) => {
  const { name, description } = req.body;
  const itemId = req.params.id;

  try {
    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      { name, description },
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteItem = async (req, res) => {
  const itemId = req.params.id;

  try {
    await Item.findByIdAndDelete(itemId);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
