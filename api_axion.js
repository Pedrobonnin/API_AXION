//Declaración de variables
(()=> {
    const $requestAxios = document.getElementById("requestAxios"),
      $fragmento = document.createDocumentFragment()

    

    //Implementación de FETCH connun a funcion asincrona
axios.get("https://jsonplaceholder.typicode.com/users")


    .then((res)=>{
    console.log(res);
        let data = res.data;

        data.forEach(element =>{
            const $lista=document.createElement("li");
            $lista.innerHTML= `${element.name} ${element.email} ${element.phone}  ${element.username}<br><br>`
            $fragmento.appendChild($lista);
            //console.log($fragmento)
        )};
        $requestAxios.appendChild($fragmento);
    )}
    
    .catch(err =>{
        let mensaje =err.statusText || "Ocurrio un error en la llamada de api";
        $requestAxios.innerHTML=`ERROR ${err.reponse.status}:${mensaje}`;
    )}
         
    .finally({
        console.log("Esta linea se iprime igual")
    )}

//Llamar la funcion asincrona para que se ejecute
getData();

})();

