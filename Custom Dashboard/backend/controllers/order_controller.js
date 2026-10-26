import order from '../models/order.js';

// 1. Create a new order
export const create_order = async (req, res) => {
  try {
    const newOrder = new order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

// 2. Get all orders
export const get_order = async (req, res) => {
  try {
    const orders = await order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

// 3. Update an order by ID
export const update_order = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await order.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ error: 'Failed to update order' });
  }
};

// 4. Delete an order by ID
export const delete_order = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ error: 'Failed to delete order' });
  }
};