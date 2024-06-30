    
let rules = 0
getFile('/../config/rules.json').then((json)=>{
    rules = JSON.parse(json)
})

class NFe{
    constructor(fds){
        fds = fds.split(',')
        this.itens = new Array
        for(let i=0; i<fds.length; i++){
            this[fds[i]] = this.make(fds[i])
        }
    }
}


NFe.prototype.make = function(key_name){

    if(!this.hasOwnProperty(key_name)){
        const out = new Object
        const rule = rules[key_name]
        
        for (const key in rule) {
            let value = rule[key].def.trim()
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

NFe.prototype.addItem = function(){
    const keys = ['H','I','M','N','N02','O','O07','O10','Q','Q05','Q07','S','S05','S07']
    const out = new Object
    for(let i=0; i<keys.length; i++){
        out[keys[i]] = this.make(keys[i])
    }

    this.itens.push(out)
    for(let i=0; i<this.itens.length;i++){
        this.itens[i].H.nItem = i+1
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
    let out = 'NOTAFISCAL|1|\n'
    for (const key in this) {
        if(typeof this[key] === 'object' && !Array.isArray(this[key])){
            let line = key+'|'
            for(const obj_key in this[key]){
                line += this[key][obj_key] +'|'
            }
            out += line + '\n'
        }
        
    }
    return out
}

function onlyNum(V){
    const ok_chr = ['1','2','3','4','5','6','7','8','9','0'];
    let out = ''
    for(let i=0; i< V.length; i++){
        if(ok_chr.includes(V[i])){
            out+=V[i]
        }
    }
    return out
}



function IBGE_cMun(C,E){
    C = C.trim().toLowerCase()
    E = E.trim().toUpperCase()
    const cod_UF = [{"id":11,"sigla":"RO"},{"id":12,"sigla":"AC"},{"id":13,"sigla":"AM"},
        {"id":14,"sigla":"RR"},{"id":15,"sigla":"PA"},{"id":16,"sigla":"AP"},{"id":17,"sigla":"TO"},
        {"id":21,"sigla":"MA"},{"id":22,"sigla":"PI"},{"id":23,"sigla":"CE"},{"id":24,"sigla":"RN"},
        {"id":25,"sigla":"PB"},{"id":26,"sigla":"PE"},{"id":27,"sigla":"AL"},{"id":28,"sigla":"SE"},
        {"id":29,"sigla":"BA"},{"id":31,"sigla":"MG"},{"id":32,"sigla":"ES"},{"id":33,"sigla":"RJ"},
        {"id":35,"sigla":"SP"},{"id":41,"sigla":"PR"},{"id":42,"sigla":"SC"},{"id":43,"sigla":"RS"},
        {"id":50,"sigla":"MS"},{"id":51,"sigla":"MT"},{"id":52,"sigla":"GO"},{"id":53,"sigla":"DF"}]

        if(C != '' && E != ''){
        for(let i=0; i<cod_UF.length; i++){
            if(cod_UF[i].sigla == E){
                const Mun_cod = new Promise((resolve,reject) =>{
                    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${cod_UF[i].id}/municipios`)
                    .then(function (response){                           
                        if (response.status === 200) { 
//                                console.log(response.text()) 
                            resolve(response.text());
                        } else { 
                            reject(new Error("Houve algum erro na comunicação com o servidor"));
                        } 
                    })                    
                }); 

                return Mun_cod

                Mun_cod.then((resolve)=>{
                    const json = JSON.parse(resolve);                   
                    for(let j=0; j<json.length; j++){
                        if(json[j].nome.trim().toLowerCase() == C){
                            console.log(json[j]) 
/*                                
                            pageScreen.querySelector('#E05').querySelector('#cMun').value =  json[j].id;
                            pageScreen.querySelector('#btnSaveCli').click()
                            break;
*/                                
                            
                        }
                    }
                })                
            }
        }
    }
}

IBGE_cMun('Caçapava','SP')
