// axios la instance yaratmaq https://fakestoreapi.com/products request üzərindən interceptor yaradıb . headersə Authenication Content-Type əlavə etmək responseTransformer yaradib gələn sorğunun içindəki arraydən yalnız ilk 10 nu saxlamaq


(async () => {
  try {
    const API = axios.create({
      baseURL: "https://fakestoreapi.com",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token XXXX`
      },
    });

    API.interceptors.response.use(function(response){
      return response;
    }, function (error) {
      return Promise.reject(error);
    });

    let container = document.querySelector('.container');
    let data = await API.get('/products');
    console.log(data);

    data.data.slice(0, 10).forEach((product) => {
      let div = document.createElement("div");
      let par = document.createElement("p");
      par.innerText = product.title;
      div.appendChild(par);
      container.appendChild(div);
    });
  } catch (error) {
    alert(`catched error ${error}`);
  }
})();

  











