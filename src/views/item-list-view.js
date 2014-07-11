var ItemView = Backbone.View.extend({
  initialize: function(options) {
    this.items = options.items;
    this.el = options.el;
    this.newItemForm = options.newItemForm;
    var itemTemplateHtml = $('#templates .item').html();
    this.template = _.template(itemTemplateHtml);
    // for (var i = 0; i < this.items.length; i++){
    //   this.listenTo(this.items[i], 'change:complete', this.cleanCompletedItems)
    // }
  },
  render: function(){
    $(this.el).empty();
    $(this.el).append(this.newItemForm);
    for (var i = 0; i < this.items.length; i++){
      var newHtml = this.template(this.items[i].toJSON());
      $(this.el).append(newHtml);
    }
  }
});
