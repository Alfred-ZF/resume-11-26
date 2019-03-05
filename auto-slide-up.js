! function () {
  setTimeout(() => {
    findClosedAndRemoveOffset()
  }, 1000)
  let specialTags = document.querySelectorAll('[data-x]')
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
  }

  window.addEventListener('scroll', function (x) {
    findClosedAndRemoveOffset()
  })

  function findClosedAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
      if (
        Math.abs(specialTags[i].offsetTop - window.scrollY) <
        Math.abs(specialTags[minIndex].offsetTop - window.scrollY)
      ) {
        minIndex = i
      }
    }
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brotherAndMe = li.parentNode.children
    for (let i = 0; i < brotherAndMe.length; i++) {
      brotherAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
}.call()