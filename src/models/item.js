var Item = Backbone.Model.extend({
  uncheck: function(){
    this.set({complete: false})
  },
  defaults: {
    complete: false
  }
})
