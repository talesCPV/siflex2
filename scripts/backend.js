
function backFunc(params,cod){
    const data = new URLSearchParams();        
        data.append("cod", cod);
        data.append("params", JSON.stringify(params));        

    const myRequest = new Request("backend/functions.php",{
        method : "POST",
        body : data
    });

    return new Promise((resolve,reject) =>{
        fetch(myRequest)
        .then(function (response){
            if (response.status === 200) { 
                resolve(response.text());                    
            } else { 
                reject(new Error("Houve algum erro na comunicação com o servidor"));                    
            } 
        });
    });      
}

function uploadImage(fileID,path,filename){

    const up_data = new FormData();        
        up_data.append("up_file",  document.getElementById(fileID).files[0]);
        up_data.append("path", path);
        up_data.append("filename", filename);

    const myRequest = new Request("backend/upload.php",{
        method : "POST",
        body : up_data
    });

    const myPromisse = new Promise((resolve,reject) =>{
        fetch(myRequest)
        .then(function (response){
            if (response.status === 200) { 
                resolve(response.text());             
            } else { 
                reject(new Error("Houve algum erro na comunicação com o servidor"));                    
            } 
        });
    }); 

    return myPromisse
}

function listNF(path,ext='txt'){

    const data = new URLSearchParams();        
        data.append("dir",path);
    const myRequest = new Request("backend/show_dir.php",{
        method : "POST",
        body : data
    });
    const myPromisse = new Promise((resolve,reject) =>{
        fetch(myRequest)
        .then(function (response){
            if (response.status === 200) { 
                resolve(response.text());             
            } else { 
                reject(new Error("Houve algum erro na comunicação com o servidor"));                    
            } 
        });
    });        
    myPromisse.then((txt)=>{
        const list = JSON.parse(txt)
        const sel = document.querySelector(`#${ext}Files`)
        sel.innerHTML=''
        for(let i=list.length-1; i>1;  i--){
            sel.innerHTML += `<option value="${list[i]}">${list[i]}</option>`
        }
    })
}

function getFile(path){
    const data = new URLSearchParams();        
        data.append("path", path);
    const myRequest = new Request("backend/loadFile.php",{
        method : "POST",
        body : data
    });

    return new Promise((resolve,reject) =>{
        fetch(myRequest)
        .then(function (response){
            if (response.status === 200) {                 
                resolve(response.text());                    
            } else { 
                reject(new Error("Houve algum erro na comunicação com o servidor"));                    
            } 
        });
    }); 
}

function NFeConf(file){
    saveFile(file,path='/../config/NFe.json')
}

function saveFile(file,path){
    const data = new URLSearchParams();
        data.append("file", JSON.stringify(file));
        data.append("path", path);

    const myRequest = new Request("backend/saveFile.php",{
        method : "POST",
        body : data
    });

    return new Promise((resolve,reject) =>{
        fetch(myRequest)
        .then(function (response){
            if (response.status === 200) {                 
                resolve(response.text());                    
            } else { 
                reject(new Error("Houve algum erro na comunicação com o servidor"));                    
            } 
        });
    }); 

}

function uploadNFe(txt, filename){

    console.log(txt)    
    console.log(filename)

    saveFile(txt,path=`/../../NFe/txt/${filename}.txt`).then(()=>{
        alert('NFe exportada com sucesso!!')
        listNF('../NFe/txt')
        if (confirm(`Deseja lançar od boletos?`)) {
            const data = main_data.fisc_nfe.data.config
            for(let i=0; i<data.Y07.length; i++){
                const pgto = new Object            
                pgto.sac = data.E.xNome.split(' ')[0]
                pgto.nf = data.B.nNF
                pgto.ref =  (i+1).toString().padStart(2,"0") +'/'+ (data.Y07.length).toString().padStart(2,"0")
                pgto.venc = data.Y07[i].Y07.date
                pgto.val = data.Y07[i].Y07.valor
                addBoleto(pgto)
            }
        }
        document.querySelector('#tab-export').click()
    })

/*
    const data = new URLSearchParams();        
        data.append("txt",txt);
        data.append("filename",filename);
        data.append("folder",'NFe/txt');

    const myRequest = new Request("backend/nfe_SAVE.php",{
        method : "POST",
        body : data
    });
    fetch(myRequest).then(()=>{
        const myRequest2 = new Request("backend/nfe_TXT2XML.php",{
            method : "POST",
            body : data
        })
        fetch(myRequest2).then(()=>{
            alert('NFe exportada com sucesso!!')
            listNF('NFe/txt')
            listNF('NFe/xml','xml')
            if (confirm(`Deseja lançar od boletos?`)) {
                for(let i=0; i<pageData.config.Y07.length; i++){
                    const pgto = new Object            
                    pgto.sac = pageData.config.E.xNome.split(' ')[0]
                    pgto.nf = pageData.config.B.nNF
                    pgto.ref =  (i+1).toString().padStart(2,"0") +'/'+ (pageData.config.Y07.length).toString().padStart(2,"0")
                    pgto.venc = pageData.config.Y07[i].Y07.date
                    pgto.val = pageData.config.Y07[i].Y07.valor
                    addBoleto(pgto)
                }
            }
            document.querySelector('#tab-export').click()
        })            
    })
*/        
}

function uploadFile(file,path,filename){

    const up_data = new FormData()
    up_data.append("up_file",  file);
    up_data.append("path", path);
    up_data.append("filename", filename);

    const myRequest = new Request("backend/upload.php",{
        method : "POST",
        body : up_data
    })

    const myPromisse = new Promise((resolve,reject) =>{
        fetch(myRequest)
        .then(function (response){
            if (response.status === 200) { 
                resolve(response.text());             
            } else { 
                reject(new Error("Houve algum erro na comunicação com o servidor"))
            } 
        });
    }); 

    return myPromisse
}