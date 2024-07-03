    
var nfe_rules = 0
getFile('/../config/NFe_rules.json').then((json)=>{
    nfe_rules = JSON.parse(json)
})

class NFe{
    constructor(fds){
        fds = fds.split(',')
        this.itens = new Array
        this.duplicatas = new Array
        for(let i=0; i<fds.length; i++){
            this[fds[i]] = this.make(fds[i])
        }
    }
}

NFe.prototype.make = function(key_name){

    if(!this.hasOwnProperty(key_name)){
        const out = new Object
        const rule = nfe_rules[key_name]
        
        for (const key in rule) {         
            let value = rule[key].def.toString().trim()
            const tipo = rule[key].tipo
            const tam = rule[key].tam.split('-')
            const min = tam.length == 1 ? '0' : tam[0]
            const max = tam.length == 1 ? tam[0] : tam[1]
            const ocor = rule[key].ocor.split('-')
    
            if(tipo=='N'){
                const dec = rule[key].dec
                value = (ocor[0] == '1' && value == '') ? '0' : value
                value = (value != '' && dec > 0) ? Number(value).toFixed(dec) : value
                value = value.substr(0,max)
                value = value.padStart(min,0)
            }else if(['C','D','H','DH'].includes(tipo)){
                value = value.substr(0,max)
                if(ocor[0] == '1' && value == ''){
                    console.log(`Campo obrigatório vazio: ${key_name}->${key}`)
                }
            }else{
                null
            }
    
            out[key] = value
        }
        return out
    }
    return this[key_name]
}

NFe.prototype.addItem = function(data){  
    const keys = ['H','I','M','N','N02','O','O07','O10','Q','Q05','Q07','S','S05','S07']
    const out = new Object
    for(let i=0; i<keys.length; i++){
        out[keys[i]] = this.make(keys[i])
        for (const key in out[keys[i]]) {
            if(data.hasOwnProperty(key)){
                out[keys[i]][key] = data[key].split('\r')[0].trim()
            }
        }               
    }

    this.itens.push(out)
    for(let i=0; i<this.itens.length;i++){
        this.itens[i].H.nItem = i+1                 
    }
}

NFe.prototype.addDupl = function(data){
    this.duplicatas = new Array
    for(let i=0; i<data.length; i++){
        const out = new Object
        out.Y07 = data[i]
        this.duplicatas.push(out)
    }
}

NFe.prototype.addCliente = function(data){

    const keys = ['E','E02','E05']
    for(let i=0; i<keys.length; i++){
        this[keys[i]] = this.make(keys[i])
        for (const key in this[keys[i]]) {
            if(data.hasOwnProperty(key)){
                this[keys[i]][key] = data[key]
            }
        }
    }
    this.E.indIEDest = this.E.IE.trim() == '' ? 2 : 1
    this.E.IE = onlyNum(this.E.IE)
    this.E.IM = onlyNum(this.E.IM)
    this.E02.CNPJ = onlyNum(this.E02.CNPJ)    
    this.E05.fone = onlyNum(this.E05.fone)
    this.E05.CEP = onlyNum(this.E05.CEP)

    const out = IBGE_cMun(this.E05.xMun,this.E05.UF).then((response)=>{
        const json = JSON.parse(response)
        for(let i=0; i<json.length; i++){
            if(json[i].nome.trim().toLowerCase() == this.E05.xMun.trim().toLowerCase()){
                this.E05.xMun = json[i].nome
                this.E05.cMun = json[i].id
            }
        }
    })

    return out
}

NFe.prototype.import = function(obj){
    for (const grupo in obj) {
        if(this.hasOwnProperty(grupo)){
            for (const campo in obj[grupo]){
                if(this[grupo].hasOwnProperty(campo)){
                    //  exceções
                    if(['N','C'].includes(nfe_rules[grupo][campo].tipo)){
                        obj[grupo][campo] = onlyAlpha(obj[grupo][campo])
                    }else{ // D, H ou DH
                        obj[grupo][campo] += campo == 'dhEmi' ? 'T07:00:00-03:00' : ''
                        obj[grupo][campo] += campo == 'dhSaiEnt' ? 'T16:00:00-03:00' : ''
                    }
                    this[grupo][campo] =  obj[grupo][campo]
                }
            }
        }
    }
}

NFe.prototype.geraChave = function(){

    this.B.cNF = Math.floor(Math.random() * 89999999 + 10000000)

    const today = new Date()
    const aamm = today.getFullYear().toString().substring(2)+today.getMonth().toString().padStart(2, '0')
    const chave = this.B.cUF + aamm + this.C02.CNPJ + this.B.mod + this.B.serie.padStart(3,0) +  this.B.nNF.padStart(9, '0') + this.B.tpEmis + this.B.cNF

    let dv = 0
    let mult = 2
    for(let i = 1; i < chave.length+1; i++){
        dv += (chave[chave.length - i] * mult)
        mult++

        if (mult > 9){
        mult = 2
        }
    }
    const resto = dv % 11
    dv = 11 - resto

    if(dv > 9){
        dv = 0
    }
    this.A.id = 'NFe'+chave+dv
}

NFe.prototype.geraTXT = function(){

    const NFe = Object.keys(this).sort().reduce(
        (obj, key) => { 
          obj[key] = this[key]; 
          return obj;
        }, 
        {}
      ); 

    let out = 'NOTAFISCAL|1|\n'

    function makeLine(obj,key){
        let line = key+'|'
        for(const obj_key in obj[key]){
            line += obj[key][obj_key] +'|'
        }
        return line + '\n'
    }

    function addItens(itens){
        let lines = ''
        for(let i=0; i<itens.length; i++){
            for (const item_key in itens[i]) {
                lines += makeLine(itens[i],item_key)
            }
        }
        return lines
    }

    for (const key in NFe) {
        if(typeof NFe[key] === 'object' && !Array.isArray(NFe[key])){                 
           
            if(key == 'W'){
                out += addItens(NFe.itens)
            }
            if(key == 'YA'){
                out += addItens(NFe.duplicatas)
            }    

            out += makeLine(NFe,key)
        }
    }
    return out
}

NFe.prototype.saveRules = function(){
    const grupos = ['B','C','C02','C07']

    for(let i=0; i<grupos.length; i++){
        for (const key in nfe_rules[grupos[i]]) {
            if(this[grupos[i]].hasOwnProperty(key)){
                nfe_rules[grupos[i]][key].def = this[grupos[i]][key]
            }
        }
    }

    const file_rules = JSON.stringify(nfe_rules)
    saveFile(file_rules,'/../config/NFe_rules.json')
//    .then((resolve)=>{})
}

function onlyNum(V){
    let out = ''
    for(let i=0; i< V.length; i++){
        const ascii = V[i].charCodeAt()
        if(ascii>=48 && ascii<=57){
            out+=V[i]
        }
    }
    return out
}

function onlyAlpha(V){    
    let out = ''
    for(let i=0; i< V.length; i++){
        const ascii = V[i].charCodeAt()
        if((ascii>=48 && ascii<=57)||(ascii>=65 && ascii<=90)||(ascii>=97 && ascii<=122)|| [32,199,231].includes(ascii)){
            out+=V[i]
        }
    }
    return out.trim()
}

function IBGE_cMun(C,E){
    C = C.trim().toLowerCase()
    E = E.trim().toUpperCase()
    const cod_UF = {"RO":11,"AC":12,"AM":13,"RR":14,"PA":15,"AP":16,"TO":17,"MA":21,"PI":22,"CE":23,
    "RN":24,"PB":25,"PE":26,"AL":27,"SE":28,"BA":29,"MG":31,"ES":32,"RJ":33,"SP":35,"PR":41,"SC":42,
    "RS":43,"MS":50,"MT":51,"GO":52,"DF":53} 

        if(C != '' && E != ''){

            const Mun_cod = new Promise((resolve,reject) =>{
                fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${cod_UF[E]}/municipios`)
                .then(function (response){                           
                    if (response.status === 200) { 
                        resolve(response.text());
                    } else { 
                        reject(new Error("Houve algum erro na comunicação com o servidor"));
                    } 
                })                    
            })
            return Mun_cod
    }
}
