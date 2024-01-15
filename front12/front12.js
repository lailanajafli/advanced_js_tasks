// https://jsonplaceholder.typicode.com/posts?userId=1

// input sahəsi istifadeci id sin qebul etsin
// axtaris edende 
// istifadeciye aid postlari ekrana cixarsin




function fetchPosts() {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts?userId=1')

    xhr.setRequestHeader("Content-type", "applicaton/json")


    xhr.onerror = function (error) {
        console.log(error)
    }

    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log(JSON.parse(xhr.response));
        }
    }

}



let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let formdata = new FormData(event.target)
    let container = document.querySelector('.majorlist')
    container.innerHTML = ''
    let url = new URL(`https://jsonplaceholder.typicode.com/posts?userId=1`)

    for (const [key, value] of formdata.entries()) {
        console.log([key, value])
        if (value) {
            url.searchParams.set(key, value)
        }
    }
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)

    xhr.setRequestHeader("Content-type", "applicaton/json")


    xhr.onerror = function (error) {
        console.log(error)
    }

    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            let response = JSON.parse(xhr.response)
            for (const product of response) {
                html = `
                <div>
                <p class="label">Title:</p>
                <p class="p">${product.title}</p>
                <p class="label"">Body:</p>
                <p class="p">${product.body}</p>
                </div>
                `
                container.innerHTML += html

            }
        }
    }
})