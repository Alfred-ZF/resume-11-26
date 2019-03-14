window.Model = function (options) {
  let resourceName = options.resourceName;
  return {
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
      var query = new AV.Query(resourceName);
      return query.find(); //Promise对象
    },
    //创建数据
    save: function (object) {
      var Message = AV.Object.extend(resourceName);
      var message = new Message();
      return message.save(object);
    }
  };
};