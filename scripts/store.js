'use strict';
/* global Item */
// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const findAndUpdate = function(id, newData) {
    this.items.map(item => item.id === id ? Object.assign(item, newData): item)
  }

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  const addErrorToStoreAndRender = function(errorMessage) {
    $('.error-message').append(`<p>${errorMessage}</p>`)
  }

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    addErrorToStoreAndRender,
    addItem,
    findById,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
    findAndUpdate,
  };
  
}());
