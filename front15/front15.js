// form file upload/ coxlu fayl
// yuklemye vuranda ekranada yuklenme progresin gostersin

const Axios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Content-Type": "application/json",
    }
})

Axios.interceptors.request.use(function (config) {
    config.headers['X-Sent-By'] = "StepIt"

    return config
})

async function getPosts() {
    const posts = await Axios.get('/posts', {
        timeout: 2000,
        transformResponse: [
            function (data) {
                const res = JSON.parse(data).map((el) => {
                    delete el.body
                    delete el.userId

                    return el
                })
                return res
            }
        ]
    })
    const response = posts.data
    console.log(posts)
}

async function addPosts() {
    const user = {
        "userId": 1,
        "title": "StepIt BlogPost",
        "body": "Promise haqqinda ders"
    }
    const { data } = await Axios.get('/comments', {
        timeout: 2000,
        params: {
            postId: 1
        }
    })
    console.log(data)
}

async function sendFile(e) {
    e.preventDefault()
    const user = {
        "userId": 1,
        "title": "StepIt BlogPost",
        "body": "Promise haqqinda ders"
    }
    const { data } = await axios.post('https://api.bytescale.com/v2/accounts/kW15bqF/uploads/form_data', new FormData(event.target), {
        headers: {
            "Authorization": "Bearer public_kW15bqFAjiW4oHh3LEMGtW3GKDJX"
        },
        onUploadProgress: function (progressEvent) {
            console.log(progressEvent)
            const progress = document.getElementById('file')
            progress.setAttribute('value', progressEvent.progress)
            document.getElementById("proglabel").innerText = `Upload Progress: ${parseInt(progressEvent.progress * 100)}%`
        },
    })

    console.log(data)
}

async function downloadFile(e) {
    e.preventDefault()
    const user = {
        "userId": 1,
        "title": "StepIt BlogPost",
        "body": "Promise haqqinda ders"
    }
    const { data } = await axios.get('https://upcdn.io/kW15bqF/raw/uploads/2023/12/22/4kwasuZJCj-pexels-navneet-shanu-672630.jpg', {
        headers: {
            "Authorization": "Bearer public_kW15bqFAjiW4oHh3LEMGtW3GKDJX"
        },
        onDownloadProgress: function (progressEvent) {
            console.log(progressEvent)
        },
    })
    console.log(data)
}

document.querySelector("#internet").addEventListener("click", downloadFile)
document.querySelector("#delete").addEventListener("click", addPosts)
document.querySelector("#form").addEventListener('submit', sendFile)
document.querySelector("#form > input").addEventListener('change', (e) => {
    console.log(e)
    const [file] = e.target.files
    if (file) {
        document.getElementById("profile").src = URL.createObjectURL(file)
    }
})

// https://upcdn.io/kW15bqF/raw/uploads/2023/12/22/4kwasuZJCj-pexels-navneet-shanu-672630.jpg