'use strict';
const api = function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/snschroeder';

  function getItems() {
    return fetch(`${BASE_URL}/items`);
    // return Promise.resolve('A successful response!')
  }

  function createItem(name) {
    let newItem = {
      name,
    };
    return fetch(`${BASE_URL}/items`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newItem)});
  }

  function updateItem(id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`, {method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(updateData)});
  }

//   function findAndUpdate(id, newData) {
//       fetch(`${BASE_URL}/items/${id}`)
//         .then(res => res.json())
//         .then(resJson => Object.assign(resJson, newData))
//   }

  return {
    BASE_URL,
    getItems,
    createItem,
    updateItem,
    // findAndUpdate,
  };
}();