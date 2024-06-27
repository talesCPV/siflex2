class NFe{
    constructor(){
//  A|versao|id|indSinc
        this.A = new Object
            this.A.versao = '4.00'
            this.A.Id = ''
            this.A.indSinc = ''
//  B|cUF|cNF|natOp|mod|serie|nNF|dhEmi|dhSaiEnt|tpNF|idDest|cMunFG|tpImp|tpEmis|cDV|tpAmb|finNFe|indFinal|indPres|procEmi|verProc|dhCont|xJust|indIntermed|
        this.B = new Object
            this.B.cUF = ''
            this.B.cNF = ''
            this.B.natOp = ''
            this.B.mod = ''
            this.B.serie = ''
            this.B.nNF = ''
            this.B.dEmi = ''
            this.B.dSaiEnt = ''
            this.B.tpNF = ''
            this.B.idDest = ''
            this.B.cMunFG = ''
            this.B.tpImp = ''
            this.B.tpEmis = ''
            this.B.cDV = ''
            this.B.tpAmb = ''
            this.B.finNFe = ''
            this.B.indFinal = ''
            this.B.indPres = ''
            this.B.procEmi = ''
            this.B.verProc = ''
            this.B.dhCont = ''
            this.B.xJust = ''
            this.B.indIntermed = ''
//  C|xNome|xFant|IE|IEST|IM|CNAE|CRT|
        this.C = new Object
            this.C.xNome = ''
            this.C.xFant = ''
            this.C.IE = ''
            this.C.IEST = ''
            this.C.IM = ''
            this.C.CNAE = ''
            this.C.CRT = ''
//  C02|CNPJ|
        this.C02 = new Object
            this.C02.CNPJ = ''
//  C05|xLgr|nro|cpl|bairro|cMun|xMun|UF|CEP|cPais|xPais|fone|
        this.C05 = new Object
            this.C05.xLgr = ''
            this.C05.nro = ''
            this.C05.cpl = ''
            this.C05.bairro = ''
            this.C05.cMun = ''
            this.C05.xMun = ''
            this.C05.UF = ''
            this.C05.CEP = ''
            this.C05.cPais = ''
            this.C05.xPais = ''
            this.C05.fone = ''
//  E|xNome|indIEDest|IE|ISUF|IM|email|
        this.E = new Object
            this.E.CNPJ = ''
//  E02|CNPJ|
        this.E02 = new Object
            this.E02.CNPJ = ''
//  E05|xLgr|nro|xCpl|xBairro|cMun|xMun|UF|CEP|cPais|xPais|fone|
        this.E05 = new Object
            this.E05.xLgr = ''
            this.E05.nro = ''
            this.E05.xCpl = ''
            this.E05.xBairro = ''
            this.E05.cMun = ''
            this.E05.xMun = ''
            this.E05.UF = ''
            this.E05.CEP = ''
            this.E05.cPais = ''
            this.E05.xPais = ''
            this.E05.fone = ''
/* Início Ítem */
        this.itens = []
//  H|nItem|infAdProd|
        this.H = new Object
            this.H.nItem = ''
            this.H.infAdProd = ''
//  I|cProd|cEAN|xProd|NCM|cBenef|EXTIPI|CFOP|uCom|qCom|vUnCom|vProd|cEANTrib|uTrib|qTrib|vUnTrib|vFrete|vSeg|vDesc|vOutro|indTot|xPed|nItemPed|nFCI|cBarra|cBarraTrib|
        this.I = new Object
            this.I.cProd = ''
            this.I.cEAN = ''
            this.I.xProd = ''
            this.I.NCM = ''
            this.I.cBenef = ''
            this.I.EXTIPI = ''
            this.I.CFOP = ''
            this.I.uCom = ''
            this.I.qCom = ''
            this.I.vUnCom = ''
            this.I.vProd = ''
            this.I.cEANTrib = ''
            this.I.uTrib = ''
            this.I.qTrib = ''
            this.I.vUnTrib = ''
            this.I.vFrete = ''
            this.I.vSeg = ''
            this.I.vDesc = ''
            this.I.vOutro = ''
            this.I.indTot = ''
            this.I.xPed = ''
            this.I.nItemPed = ''
            this.I.nFCI = ''
            this.I.cBarra = ''
            this.I.cBarraTrib = ''
//  M|
//  N|
//  N02|orig|CST|modBC|vBC|pICMS|vICMS|pFCP|vFCP|
        this.N02 = new Object
            this.N02.orig = ''
            this.N02.CST = ''
            this.N02.modBC = ''
            this.N02.vBC = ''
            this.N02.pICMS = ''
            this.N02.vICMS = ''
            this.N02.pFCP = ''
            this.N02.vFCP = ''
//  O|CNPJProd|cSelo|qSelo|cEnq|
//  O07|CST|vIPI|
//  O10|vBC|pIPI|
//  Q|
//  Q05|CST|vPIS|
//  Q07|vBC|pPIS|
//  S|
//  S05|CST|vCOFINS|
//  S07|vBC|pCOFINS|
/* Fim Ítem */
//  W|
//  W02|vBC|vICMS|vICMSDeson|vFCPUFDest|vICMSUFDest|vICMSUFRemet|vFCP|vBCST|vST|vFCPST|vFCPSTRet|vProd|vFrete|vSeg|vDesc|vII|vIPI|vIPIDevol|vPIS|vCOFINS|vOutro|vNF|vTotTrib|qBCMono|vICMSMono|qBCMonoReten|vICMSMonoReten|qBCMonoRet|vICMSMonoRet|
//  W04c|0.00|
//  W04e|0.00|
//  W04g|0.00|
//  X|modFrete|
//  X03|xNome|IE|xEnder|UF|xMun|
//  X04|CNPJ|
//  X05|CPF|
//  X11|vServ|vBCRet|pICMSRet|vICMSRet|CFOP|cMunFG|
//  X18|placa|UF|RNTC|
//  X26|qVol|esp|marca|nVol|pesoL|pesoB|
//  Y|
//  Y02|nFat|vOrig|vDesc|vLiq|
//  Y07|nDup|dVenc|vDup|
//  YA|vTroco|
//  YB|tPag|xPag|vPag|indPag|tpIntegra|CNPJ|tBand|cAut|
//  Z|infAdFisco|infCpl|




    }
}