const uzs = document.querySelector('#uzs'),
usd = document.querySelector('#usd')


 uzs.addEventListener('input', (e)=>{
   const request = new XMLHttpRequest()
   request.open('GET', 'json/current.json')
   request.setRequestHeader('COntent-Type' ,'aplication/jsonl; charset=utf-8')
   request.send()
   request.addEventListener('load', ()=>{
    if(request.readyState === 4 && request.status === 200){
        console.log(request.response);
        const data = JSON.parse(request.response)
        usd.value = (+uzs.value/ data.current.usd).toFixed(2)
    }else{
        usd.value = "Something went wrong"
    }
   })

   //status 200 nu ok 404 not found 400 client error 500 server error 
   //statusText 
   //response 
   //readyState 
   
 })