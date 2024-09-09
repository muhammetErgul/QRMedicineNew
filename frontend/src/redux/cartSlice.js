import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: 'https://medicineqrbackend.onrender.com', // Vercel backend URL
});

const initialState = {
  items: [],
  totalAmount: 0,
  orders: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = parseFloat((existingItem.totalPrice + newItem.price).toFixed(2));
      } else {
        state.items.push({ 
          ...newItem, 
          quantity: 1, 
          totalPrice: parseFloat(newItem.price.toFixed(2)) 
        });
      }
      
      state.totalAmount = parseFloat((state.totalAmount + newItem.price).toFixed(2));
    },
    
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice = parseFloat((existingItem.totalPrice - existingItem.price).toFixed(2));
        } else {
          state.items = state.items.filter(item => item.id !== id);
        }
        
        state.totalAmount = parseFloat((state.totalAmount - existingItem.price).toFixed(2));
      }
    },
    
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
    
    addOrder(state, action) {
      state.orders.push(action.payload);
    },
    
    setOrders(state, action) {
      state.orders = action.payload;
    },
    
    updateOrderStatus(state, action) {
      const { id, status } = action.payload;
      const existingOrder = state.orders.find(order => order._id === id);
      if (existingOrder) {
        existingOrder.status = status;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, addOrder, setOrders, updateOrderStatus } = cartSlice.actions;

export const sendOrder = (order) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/api/orders', order);
    dispatch(addOrder(response.data));
    dispatch(clearCart());
  } catch (error) {
    console.error("Failed to send order: ", error);
  }
};

export const fetchOrders = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/api/orders');
    dispatch(setOrders(response.data));
  } catch (error) {
    console.error("Failed to fetch orders: ", error);
  }
};

export const updateOrderStatusAsync = (id, status) => async (dispatch) => {
  try {
    const response = await axiosInstance.put(`/api/orders/${id}/status`, { status });
    dispatch(updateOrderStatus({ id, status: response.data.status }));
  } catch (error) {
    console.error("Failed to update order status: ", error);
  }
};

export default cartSlice.reducer;
