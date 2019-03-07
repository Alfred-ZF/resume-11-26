! function () {
  //view层
  var view = View('section.message')

  //model层
  var model = Model({resourceName:'Message'})

  //controller 层
  var controller = Controller({
    init:function (view,controller) {
      this.message = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.loadMessage()
    },
    loadMessage: function () {
      this.model.fetch().then((messages) => {
        let array = messages.map((item) => {
          return item.attributes
        })
        array.forEach((item) => {
          let li = document.createElement('li')
          li.innerText = `${item.name}: ${item.content}`
          this.message.appendChild(li)
        })
      }, function (error) {
        // 异常处理
      }).then(() => {}, (error) => {
        console.log(error);
      });
    },
    bindEvents: function () {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function () {
      let content = this.form.querySelector('input[name=content]').value
      let name = this.form.querySelector('input[name=name]').value

      this.model.save({'name':name, 'content':content}).then((object) => {
        console.log(object);
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        message = document.querySelector('#messageList')
        message.appendChild(li)
        this.form.querySelector('input[name=content]').value = ''
      })
    }
  })
  
  var controller = {
    view: null,
    model: null,
    init: function (view, model) {
      this.view = view
      this.model = model
      this.message = view.querySelector('#messageList')
      this.form = view.querySelector('form')

      this.model.initAV()
      this.loadMessage()
      this.bindEvents()
    },
    
    loadMessage: function () {
      this.model.fetch().then((messages) => {
        let array = messages.map((item) => {
          return item.attributes
        })
        array.forEach((item) => {
          let li = document.createElement('li')
          li.innerText = `${item.name}: ${item.content}`
          this.message.appendChild(li)
        })
      }, function (error) {
        // 异常处理
      }).then(() => {}, (error) => {
        console.log(error);
      });
    },
    bindEvents: function () {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function () {
      let content = this.form.querySelector('input[name=content]').value
      let name = this.form.querySelector('input[name=name]').value

      this.model.save({'name':name, 'content':content}).then((object) => {
        console.log(object);
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        message = document.querySelector('#messageList')
        message.appendChild(li)
        this.form.querySelector('input[name=content]').value = ''
      })
    }
  }

  controller.init.call(controller, view, model)

}.call()