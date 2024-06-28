    const fields = new Object
        fields.A = 'A|versao|id|indSinc'
        fields.B = 'B|cUF|cNF|natOp|mod|serie|nNF|dhEmi|dhSaiEnt|tpNF|idDest|cMunFG|tpImp|tpEmis|cDV|tpAmb|finNFe|indFinal|indPres|procEmi|verProc|dhCont|xJust|indIntermed|'
        fields.C = 'C|xNome|xFant|IE|IEST|IM|CNAE|CRT|'
        fields.C02 = 'C02|CNPJ|'
        fields.C05 = 'C05|xLgr|nro|cpl|bairro|cMun|xMun|UF|CEP|cPais|xPais|fone|'
        fields.E = 'E|xNome|indIEDest|IE|ISUF|IM|email|'
        fields.E02 = 'E02|CNPJ|'
        fields.E05 = 'E05|xLgr|nro|xCpl|xBairro|cMun|xMun|UF|CEP|cPais|xPais|fone|'
/* Início Ítem */        
        fields.H = 'H|nItem|infAdProd|'
        fields.I = 'I|cProd|cEAN|xProd|NCM|cBenef|EXTIPI|CFOP|uCom|qCom|vUnCom|vProd|cEANTrib|uTrib|qTrib|vUnTrib|vFrete|vSeg|vDesc|vOutro|indTot|xPed|nItemPed|nFCI|cBarra|cBarraTrib|'
        fields.M = 'M|'
        fields.N = 'N|'
        fields.N02 = 'N02|orig|CST|modBC|vBC|pICMS|vICMS|pFCP|vFCP|'
        fields.O = 'O|CNPJProd|cSelo|qSelo|cEnq|'
        fields.O07 = 'O07|CST|vIPI|'
        fields.O10 = 'O10|vBC|pIPI|'
        fields.Q = 'Q|'
        fields.Q05 = 'Q05|CST|vPIS|'
        fields.Q07 = 'Q07|vBC|pPIS|'
        fields.S = 'S|'
        fields.S05 = 'S05|CST|vCOFINS|'
        fields.S07 = 'S07|vBC|pCOFINS|'
/* Fim Ítem */        
        fields.W = 'W|'
        fields.W02 = 'W02|vBC|vICMS|vICMSDeson|vFCPUFDest|vICMSUFDest|vICMSUFRemet|vFCP|vBCST|vST|vFCPST|vFCPSTRet|vProd|vFrete|vSeg|vDesc|vII|vIPI|vIPIDevol|vPIS|vCOFINS|vOutro|vNF|vTotTrib|qBCMono|vICMSMono|qBCMonoReten|vICMSMonoReten|qBCMonoRet|vICMSMonoRet|'
        fields.X = 'X|modFrete|'
        fields.X03 = 'X03|xNome|IE|xEnder|UF|xMun|'
        fields.X04 = 'X04|CNPJ|'
        fields.X05 = 'X05|CPF|'
        fields.X11 = 'X11|vServ|vBCRet|pICMSRet|vICMSRet|CFOP|cMunFG|'
        fields.X18 = 'X18|placa|UF|RNTC|'
        fields.X26 = 'X26|qVol|esp|marca|nVol|pesoL|pesoB|'
        fields.Y = 'Y|'
        fields.Y02 = 'Y02|nFat|vOrig|vDesc|vLiq|'
        fields.Y07 = 'Y07|nDup|dVenc|vDup|'
        fields.YA = 'YA|vTroco|'
        fields.YB = 'YB|tPag|xPag|vPag|indPag|tpIntegra|CNPJ|tBand|cAut|'
        fields.Z = 'Z|infAdFisco|infCpl|'

class NFe{
    constructor(fds){
        fds = fds.split(',')
        this.itens = new Array
        for(let i=0; i<fds.length; i++){
            this[fds[i]] = this.make(fds[i])
        }
    }
}

NFe.prototype.make = function(f_index){
    const out = new Object
    const fds = fields[f_index].split('|')
//    out[fields[0]] = new Object

    for(let i=1; i<fds.length; i++){
        out[fds[i]] = ''
    }

    return out

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


