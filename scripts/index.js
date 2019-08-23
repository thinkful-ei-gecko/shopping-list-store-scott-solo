'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
});





 /* api.getItems()
  .then(res => res.json())
  .then((items) => {
    const item = items[0];
    return api.findAndUpdate(item.id, {name: 'foobar'});
    console.log('');
  })
  .then(res => res.json())
  .then(() => console.log('udpated'));*/


/*api.createItem('pear')
  .then(res => res.json())
  .then((newItem) => {
    return api.getItems();
  })
  .then(res => res.json())
  .then((items) => {
    console.log(items);
  });*/
