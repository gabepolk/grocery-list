var item1 = new Item({
  itemName: "Milk",
  description: "This is a placeholder"
})

var item2 = new Item({
  itemName: "Eggs",
  description: "This is a placeholder"
})

var itemsView = new ItemView({
  items: [item1, item2],
  el: $('.items'),
  newItemForm: $('#templates .new-item').html()
})

itemsView.render();
