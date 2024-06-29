    
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

NFe.prototype.make = function(key_name){
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
    let out = ''
    for (const key in this) {
        if(typeof this[key] === 'object' && !Array.isArray(this[key])){
            let line = key+'|'
            for(const obj_key in this[key]){
                line += this[key][obj_key] +'|'
            }
            out += line + '\n'
        }
        
    }
    console.log(out)
}