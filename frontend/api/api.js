// const API_URL = 'http://localhost:4040/api/orders';

// export const getItems = async () => {
//     const response = await fetch(API_URL);
//     return response.json();
// };

// export const addItem = async (item) => {
//     const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(item),
//     });
//     return response.json();
// };

// export const updateItem = async (id, item) => {
//     const response = await fetch(`${API_URL}/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(item),
//     });
//     return response.json();
// };

// export const deleteItem = async (id) => {
//     const response = await fetch(`${API_URL}/${id}`, {
//         method: 'DELETE',
//     });
//     return response.json();
// };
