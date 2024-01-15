// Üç input yaradın. İnputun biri login üçün olacaq, biri password üçün, digəri isə mobil nömrə üçün.
// Bütün üç input üçün altında span yaradın. İnputları yazılmış dəyərə görə yoxlamaq lazım olacaq. Əgər səhv dəyərlər daxil olunarsa o halda həmin inputun spanında yazılacaq ki, məlumat düzgün daxil olunmayıb. Misal üçün logində ancaq rəqəm və ya ancaq hərf daxil olunarsa o halda səhvi göstərin(logində həm hərf həm də rəqəm olmalıdır). Parolda ise 8 simvoldan artıq və həm hərf həm də rəqəm olmalıdır. Mobil nömrə + başlamalıdır. Səhv siz dəyər daxil edən zaman görsənməlidir


let loginn = document.querySelector('#login')
let password = document.querySelector('#password')
let number = document.querySelector('#number')
let loginSpan = document.querySelector('.loginSpan')
let passwordSpan = document.querySelector('.passwordSpan')
let numberSpan = document.querySelector('.numberSpan')

loginn.addEventListener('input', function () {
    let pattern = /(?=.*[a-z])(?=.*[0-9])/gi;
    let isValid = pattern.test(loginn.value);

    if (!isValid) {
        loginSpan.innerText = 'Reqemlerden ve herflerden istifade edin'
    } else {
        loginSpan.innerText = '';
    }
})

password.addEventListener('input', function () {
    let pas1 = /[a-z]{6}/gi
    let pas2 = /[0-9]{2}/gi
    let isPass1 = pas1.test(password.value);
    let isPass2 = pas2.test(password.value);
    console.log(isPass1, isPass2)

    if (isPass1 === false || isPass2 === false) {
        passwordSpan.innerText = 'Minimum 6 herfen ve 2 reqemden istifade etmelisiniz'
    } else {
        passwordSpan.innerText = '';
    }
})

number.addEventListener('input', function () {
    let num1 = /[0-9]{12}/gi
    let isNum1 = num1.test(number.value);


    if (isNum1 === false) {
        numberSpan.innerText = 'Nomre 12 reqemden ibaret olmalidir'
    } else {
        numberSpan.innerText = '';
    }
})


