// User name
// User password
// Email
// Telephone
// Adress
// Profession

// Sizdə iki DİV olacaq. Bir div sehifə açılanda görsənir. Bu divdə bir form olacaq hansındaki yuxarıda olan inputları yaradacaqsınız. Bu inputların hamısını formun düyməsini tıklayanda daxil olunmuş dəyərə görə yoxlamaq lazım olacaq(yoxlanış növü istədiyiniz kimi ola bilər). Formun düyməsini tıklayabda inputa daxil olunmuş deyərlər bir əmələ gələn divdə gorsənsin. Divdə bir CLOSE düyməsini yaradın. CLOSE düyməsini tıklayanda açılan pəncərə bağlanmalıdır


let form = document.querySelector('form')
let inputs = document.querySelectorAll('.userName')
let buttonX = document.querySelector('#close')
let resultDiv = document.querySelector('#result-div')
let formShown = false;

document.querySelector('.showPassword').addEventListener('click', function (ev) {
    let pas = document.querySelector('input[name="user-password"]')
    pas.type = ev.target.checked ? 'text' : 'password'

})

document.querySelector('input[name="telephone"]').addEventListener('input', function (ev) {
    let span = document.querySelector('input[name="telephone"]').nextElementSibling
    let tel = ev.target.value[0]
    tel !== '+' ? span.innerText = 'Wrong telephone format' : span.innerText = ''
})

form.addEventListener('submit', function (ev) {
    ev.preventDefault()
    if (document.querySelector('input[name="telephone"]').value[0] !== '+') {
        let span = document.createElement('span')
        span.className = 'wrong'
        span.innerText = 'Wrong telephone format'
        document.querySelector('input[name="telephone"]').parentElement.appendChild(span)

        return
    }

    document.querySelector('input[name="user-password"]').addEventListener('submit', function (ev) {
        let span = document.createElement('span')
        let password = ev.target.value;

        if (password.length < 10) {
            span.className = 'wrong'
            span.innerText = 'Password must be at least 10 characters long'
            span.style.backgroundColor = 'red';
            document.querySelector('input[name="user-password"]').parentElement.appendChild(span)
            return
        }
    })

    if (formShown) {
        return;
    }

    formShown = true;

    let formDataDiv = document.createElement('div');
    formDataDiv.id = 'formDataDiv';



    let formData = new FormData(this)
    let formInfo = [...formData]
    console.log(formInfo)

    formInfo = formInfo.map((item) => {
        if (item[0].includes('-')) {
            let arr = [item[0].split('-').join(' '), item[1]]
            let el = [arr[0][0].toUpperCase() + arr[0].slice(1), arr[1]]
            console.log(el)
            return el
        } else {
            let el = [item[0][0].toUpperCase() + item[0].slice(1), item[1]]
            console.log(el)
            return el
        }
    })

    console.log(formInfo)
    let obj = {}

    formInfo.forEach((item) => {
        obj[item[0]] = item[1]
    })
    console.log(obj)

    
    resultDiv.style.display = 'block';

    for (const key in obj) {
        const element = obj[key];
        let p = document.createElement('p');
        p.id = 'information';
        p.innerHTML = `<span>${key}</span><span>${element}</span>`;
        resultDiv.appendChild(p);
    }
    
    buttonX.addEventListener('click', function (ev) {
        resultDiv.style.display = 'none';
    });
    
    document.body.appendChild(resultDiv);
    
})



