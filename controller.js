window.Controller = function (options) {
  var init = options.init
  this.bindEvents = options.bindEvents

  return {
    view: null,
    model: null,
    init: function (view, model) {
      this.view = view
      this.model = model
      this.model.initAV()
      this.bindEvents()
      init.call(this,view,model)
    },
  }


}
