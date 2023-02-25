fetch("file2.json").then((responce)=>{
    responce.json();
}).then((data)=>{
    console.log(data)
})