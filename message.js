! function () {
  //view层
  var view = document.querySelector('section.message')

  //model层
  var model = {
    initAV: function () {
      var APP_ID = '6JMY0H3xzNgwX99Y6nbyQaN5-gzGzoHsz';
      var APP_KEY = 'gslb5yFEeLnbNlItH2UMPtWT';

      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    //获取数据
    fetch: function () {
      var query = new AV.Query('Message');
      return query.find() //Promise对象
    },
    //创建数据
    save: function (name, content) {
      var Message = AV.Object.extend('Message');
      var message = new Message();
      return message.save({ //Promise对象
        'name': name,
        'content': content
      })
    }
  }

  //controller 层
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
      model.fetch().then((messages) => {
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

      this.model.save().then((object) => {
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