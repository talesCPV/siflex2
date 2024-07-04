

NFs.prototype.import = function(obj){
    for (const grupo in obj) {
        if(this.hasOwnProperty(grupo)){
            for (const campo in obj[grupo]){
                if(this[grupo].hasOwnProperty(campo)){
                    //  exceções
                    if(['N','C'].includes(this.rules[grupo][campo].tipo)){
                        obj[grupo][campo] = onlyAlpha(obj[grupo][campo])
                    }else{ // D, H ou DH

                    }
                    this[grupo][campo] =  obj[grupo][campo]
                }
            }
        }
    }
}