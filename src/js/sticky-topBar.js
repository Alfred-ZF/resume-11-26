!function () {
  
  var view = View('#topNavBar')

  var controller = {
    view:null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      // var view = this.view
      window.addEventListener('scroll', (x)=>{  //箭头函数里面没有this的相关指定，里面的this 不变
        if (window.scrollY > 5) {
          this.active()
        } else {
          this.deactive()
        }
      })
    },
    active:function () {
      this.view.classList.add('sticky')
    },
    deactive:function () {
      this.view.classList.remove('sticky')
    }
  }
  controller.init(view)
}.call()