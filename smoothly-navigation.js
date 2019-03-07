! function () {
  var view = View('nav.menu')
  var controller = function (view) {
    let liTags = view.querySelectorAll('ul > li')

    for (let i = 0; i < liTags.length; i++) {
      liTags[i].onmouseenter = function (x) {
        let li = x.currentTarget.classList.add('active')
      }
      liTags[i].onmouseleave = function (x) {
        let li = x.currentTarget.classList.remove('active')
      }
    }
    
    let aTags = document.querySelectorAll('nav.menu > ul > li > a')
    for (let i = 0; i < aTags.length; i++) {
      aTags[i].onclick = function (x) {
        x.preventDefault()
        let href = x.currentTarget.getAttribute('href')
        let element = document.querySelector(href)
        let dis = element.offsetTop
        let currentTop = window.scrollY
        let targetTop = dis - 80
        let s = targetTop - currentTop
  
        function animate(time) {
          requestAnimationFrame(animate)
          TWEEN.update(time)
        }
        requestAnimationFrame(animate)
  
        var coords = {
          y: currentTop
        } // Start at (0, 0)
        var t = Math.abs((s / 100) * 300)
        if (t > 500) {
          t = 500
        }
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({
              y: targetTop
            },
            t
          )
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate(function () {
            window.scrollTo(0, coords.y)
          })
          .start()
      }
    }
  }
  controller.call(null,view)
  
}.call()