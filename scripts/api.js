'use strict';
const api = function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/snschroeder';

  function listApiFetch(... arg) {
      let error;
      return fetch(...arg)
        .then(res => {
            if (!res.ok) {
                error = {code : res.status};
            }
        return res.json();
        })
        .then(data => {
            if (error) {
                error.message = data.message;
                return Promise.reject(error);
            }
        return data;
        })
  }

  function getItems() {
    return listApiFetch(`${BASE_URL}/items`);
  }

  function createItem(name) {
    let newItem = {
      name,
    };
    return listApiFetch(`${BASE_URL}/items`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newItem)});
  }

  function updateItem(id, updateData) {
    return listApiFetch(`${BASE_URL}/items/${id}`, {method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(updateData)});
  }

  function deleteItem(id) {
    return listApiFetch(`${BASE_URL}/items/${id}`, {method: 'DELETE'});
  }

  return {
    listApiFetch,
    BASE_URL,
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}();