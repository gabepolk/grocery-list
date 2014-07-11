var ItemView = Backbone.View.extend({
  initialize: function(options) {
    this.items = options.items;
    this.el = options.el;
    this.newItemForm = options.newItemForm;
    var itemTemplateHtml = $('#templates .item').html();
    this.template = _.template(itemTemplateHtml);
    for (var i = 0; i < this.items.length; i++){
      this.listenTo(this.items[i], 'change:complete', this.cleanPurchasedItems)
    }
  },
  render: function(){
    $(this.el).empty();
    $(this.el).append(this.newItemForm);
    for (var i = 0; i < this.items.length; i++){
      var newHtml = this.template(this.items[i].toJSON());
      $(this.el).append(newHtml);
    }
  },
  markAsPurchased: function(e){
    var listParent = $(e.currentTarget).parents('li');
    var index = $('.items').children().index(listParent);
    this.items[index - 2].set("complete", true);
  },
  cleanPurchasedItems: function(){
    var newItems = [];
    for (var i = 0; i < this.items.length; i++){
      if (!this.items[i].get("complete")){
        newItems.push(this.items[i]);
      }
    }
    this.items = newItems;
    this.render();
  },
  events: {
    'change .complete': 'markAsPurchased',
    'submit .new-item-form': 'addItem'
  }
});
