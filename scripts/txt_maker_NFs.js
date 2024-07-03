let nfs_rules = {}
getFile('/../config/NFs_rules.json').then((json)=>{
    nfs_rules = JSON.parse(json)
})

class NFs{
    constructor(fds){
        fds = fds.split(',')
        for(let i=0; i<fds.length; i++){
            this[fds[i]] = this.make(fds[i])
        }
    }
}

NFs.prototype.make = function(key_name){

    if(!this.hasOwnProperty(key_name)){
        const out = new Object
        const rule = nfs_rules[key_name]
        
        for (const key in rule) {         
            let value = rule[key].def.toString().trim()
            const tipo = rule[key].tipo
            const tam = rule[key].tam.toString().split('-')
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