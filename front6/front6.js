let content = document.querySelector('.content')
let element = document.querySelector('.element')
let num = document.querySelector('#num')

let flag = false

element.addEventListener('mousedown', function () {
    flag = true
    console.log(flag)

    content.addEventListener('mousemove', function (ev) {
        let x = ev.offsetX
        if (x >= 1000) {
            x = 1000
        } else if (x <= 0) {
            x = 0
        }

        if (flag) {
            element.style = `width:${x}px;`
            num.innerText = x / 10 + '%'
        }
    })
})

element.addEventListener('mouseup', function() {
    flag = false
    console.log(flag)
})
