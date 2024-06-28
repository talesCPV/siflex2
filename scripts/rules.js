const rules = new Object
    rules.A = {
        'versao'  :{'tam' :'1-4','tipo': 'N','ocor' : '1-1','dec' : 2,'def' : '4.00'},
        'id'      :{'tam' :'47' ,'tipo': 'C','ocor' : '0-0','dec' : 0,'def' : ''},
        'indSinc' :{'tam' :'1'  ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''}
    },
    rules.B = {
        'cUF'       :{'tam' : '2'   ,'tipo': 'B','ocor' : '1-1','dec' : 0,'def' : ''},
        'cNF'       :{'tam' : '8'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'natOp'     :{'tam' : '1-60','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'mod'       :{'tam' : '2'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'serie'     :{'tam' : '1-3' ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'nNF'       :{'tam' : '1-9' ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'dhEmi'     :{'tam' : '22'  ,'tipo': 'DH','ocor': '0-1','dec' : 0,'def' : ''},
        'dhSaiEnt'  :{'tam' : '22'  ,'tipo': 'DH','ocor': '0-1','dec' : 0,'def' : ''},
        'tpNF'      :{'tam' : '1'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'idDest'    :{'tam' : '1'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'cMunFG'    :{'tam' : '7'   ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'tpImp'     :{'tam' : '1'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'tpEmis'    :{'tam' : '1'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'cDV'       :{'tam' : '1'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'tpAmb'     :{'tam' : '1'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'finNFe'    :{'tam' : '1'   ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'indFinal'  :{'tam' : '1'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'indPres'   :{'tam' : '1'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'procEmi'   :{'tam' : '1'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'verProc'   :{'tam' : '1-20','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'dhCont'    :{'tam' : '19'  ,'tipo': 'D','ocor' : '0-1','dec' : 0,'def' : ''},
        'xJust'     :{'tam' :'0-256','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'indIntermed':{'tam': '1'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''}
    },
    rules.C = {
        'xNome' :{'tam' : '2-60','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'xFant' :{'tam' : '1-60','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'IE'    :{'tam' : '0-14','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'IEST'  :{'tam' : '2-14','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'IM'    :{'tam' : '1-15','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'CNAE'  :{'tam' : '7'   ,'tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'CRT'   :{'tam' : '1'   ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''}
    },
    rules.C02 = {
        'CNPJ' :{'tam' : '14','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''}
    }, 
    rules.C05 = {
        'xLgr'  :{'tam' : '2-60','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'nro'   :{'tam' : '1-60','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'cpl'   :{'tam' : '0-60','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'bairro':{'tam' : '2-60','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'cMun'  :{'tam' : '7'   ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'xMun'  :{'tam' : '2-60','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'UF'    :{'tam' : '2'   ,'tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'CEP'   :{'tam' : '8'   ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'cPais' :{'tam' : '14'  ,'tipo': 'C','ocor' : '0-1','dec' : 0,'def' : '1058'},
        'xPais' :{'tam' : '1-60','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'fone'  :{'tam' : '6-14','tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''}
    },
    rules.E = {
        'xNome'     :{'tam' : '2-60','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'indIEDest' :{'tam' : '1'   ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'IE'        :{'tam' : '2-14','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'ISUF'      :{'tam' : '8-9' ,'tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'IM'        :{'tam' : '1-15','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'email'     :{'tam' : '1-60','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''}
    },
    rules.E02 = {
        'CNPJ' :{'tam' : '14','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''}
    }, 
    rules.E05 = {
        'xLgr'  :{'tam' : '2-60','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'nro'   :{'tam' : '1-60','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'xCpl'  :{'tam' : '1-60','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'xBairro':{'tam': '2-60','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'cMun'  :{'tam' : '7'   ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'xMun'  :{'tam' : '2-60','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'UF'    :{'tam' : '2'   ,'tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'CEP'   :{'tam' : '8'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'cPais' :{'tam' : '2-4' ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : '1058'},
        'xPais' :{'tam' : '2-60','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'fone'  :{'tam' : '6-14','tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''}
    }
    rules.H ={},
    rules.I = {
        'cProd' :{'tam' : '1-60','tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'cEAN'  :{'tam' : '0-14','tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'xProd' :{'tam' : '1-120','tipo':'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'NCM'   :{'tam' : '2-8' ,'tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'cBenef':{'tam' : '8-10','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'EXTIPI':{'tam' : '2-3' ,'tipo': 'C','ocor' : '01','dec' : 0,'def' : ''},
        'CFOP'  :{'tam' : '4'   ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'uCom'  :{'tam' : '1-6' ,'tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'qCom'  :{'tam' : '11'  ,'tipo': 'N','ocor' : '1-4','dec' : 4,'def' : ''},
        'vUnCom':{'tam' : '11'  ,'tipo': 'N','ocor' : '1-1','dec' : 10,'def' : ''},
        'vProd' :{'tam' : '15'  ,'tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''},
        'cEANTrib':{'tam':'0-14','tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'uTrib' :{'tam' : '1-6' ,'tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'qTrib' :{'tam' : '11'  ,'tipo': 'N','ocor' : '1-1','dec' : 4,'def' : ''},
        'vUnTrib':{'tam': '11'  ,'tipo': 'N','ocor' : '0-1','dec' : 10,'def' : ''},
        'vFrete':{'tam' : '15'  ,'tipo': 'N','ocor' : '0-1','dec' : 2,'def' : ''},
        'vSeg'  :{'tam' : '15'  ,'tipo': 'N','ocor' : '0-1','dec' : 2,'def' : ''},
        'vDesc' :{'tam' : '15'  ,'tipo': 'N','ocor' : '0-1','dec' : 2,'def' : ''},
        'vOutro':{'tam' : '15'  ,'tipo': 'N','ocor' : '0-1','dec' : 2,'def' : ''},
        'indTot':{'tam' : '1'   ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'xPed'  :{'tam' : '1-15','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'nItemPed':{'tam':'6'   ,'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'nFCI'  :{'tam' : '50'  ,'tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'cBarra':{'tam' : '3-30','tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'cBarraTrib':{'tam':'3-30','tipo':'C','ocor': '0-1','dec' : 0,'def' : ''}
    },
    rules.M = {},
    rules.N = {},
    rules.N02 = {
        'orig'  :{'tam' : '1' ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'CST'   :{'tam' : '2' ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'modBC' :{'tam' : '1' ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''},
        'vBC'   :{'tam' : '15','tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''},
        'pICMS' :{'tam' : '5' ,'tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''},
        'vICMS' :{'tam' : '15','tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''},
        'pFCP'  :{'tam' : '3' ,'tipo': 'N','ocor' : '0-1','dec' : 4,'def' : ''},
        'vFCP'  :{'tam' : '15','tipo': 'N','ocor' : '0-1','dec' : 2,'def' : ''}
    }, 
    rules.O = {
        'CNPJProd':{'tam' : '14',   'tipo': 'C','ocor' : '0-1','dec' : 0,'def' : ''},
        'qSelo'   :{'tam' : '1-12', 'tipo': 'N','ocor' : '0-1','dec' : 0,'def' : ''},
        'cEnq'    :{'tam' : '3',    'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : ''}
    },
    rules.O07 = {
        'CST'   :{'tam' : '2' ,'tipo': 'C','ocor' : '1-1','dec' : 0,'def' : ''},
        'vIPI'  :{'tam' : '15','tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''}
    },
    rules.O10 = {
        'vBC'   :{'tam' : '15','tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''},
        'pIPI'  :{'tam' : '5', 'tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''}
    },
    rules.Q = {},
    rules.Q05 = {
        'CST'   :{'tam' : '2' ,'tipo': 'N','ocor' : '1-1','dec' : 0,'def' : '', 'opt': '49 - Outras Operações de Saída|50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno|51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno|52 - Operação com Direito a Crédito – Vinculada Exclusivamente a Receita de Exportação|53 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno|54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação|55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação|56 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação|60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno|61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno|62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação|63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno|64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação|65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação|66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação|67 - Crédito Presumido - Outras Operações;70 - Operação de Aquisição sem Direito a Crédito;71 - Operação de Aquisição com Isenção;72 - Operação de Aquisição com Suspensão;73 - Operação de Aquisição a Alíquota Zero;74 - Operação de Aquisição; sem Incidência da Contribuição;75 - Operação de Aquisição por Substituição Tributária;98 - Outras Operações de Entrada;99 - Outras Operações'},
        'vPIS'  :{'tam' : '15','tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''}
    },
    rules.Q07 = {
        'vBC'   :{'tam' : '15','tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''},
        'pPIS'  :{'tam' : '5' ,'tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''}
    },
    rules.S = {},
    rules.S05 = {
        'CST'    :{'tam' : '2' ,'tipo': 'C','ocor' : '1-1','dec' : 0,'def' : '', 'opt' :'49 - Outras Operações de Saída| 50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno|51 - Operação com Direito a Crédito – Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno|52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação| 53 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não- Tributadas no Mercado Interno|54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação|55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação|56 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação|60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno|61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno|62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação|63 -Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno|64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação| 65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação|66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação|67 - Crédito Presumido - Outras Operações|70 - Operação de Aquisição sem Direito a Crédito|71 - Operação de Aquisição com Isenção|72 - Operação de Aquisição com Suspensão|73 - Operação de Aquisição a Alíquota Zero|74 - Operação de Aquisição sem Incidência da Contribuição|75 - Operação de Aquisição por Substituição Tributária|98 - Outras Operações de Entrada|99 - Outras Operações'},
        'vCOFINS':{'tam' : '15','tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''}
    },
    rules.S07 = {
        'vBC'    :{'tam' : '15','tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''},
        'pCOFINS':{'tam' : '5' ,'tipo': 'N','ocor' : '1-1','dec' : 2,'def' : ''}
    }
// 'W|'
    rules.W = {},
// 'W02||||||||||||||||||||||||||||||'    
    rules.W02 = {
        'vBC'           :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vICMS'         :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vICMSDeson'    :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vFCPUFDest'    :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vICMSUFDest'   :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vICMSUFRemet'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vFCP'          :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vBCST'         :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vST'           :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vFCPST'        :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vFCPSTRet'     :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vProd'         :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vFrete'        :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vSeg'          :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vDesc'         :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vII'           :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vIPI'          :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vIPIDevol'     :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vPIS'          :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vCOFINS'       :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vOutro'        :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vNF'           :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vTotTrib'      :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'qBCMono'       :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vICMSMono'     :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'qBCMonoReten'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vICMSMonoReten':{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'qBCMonoRet'    :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vICMSMonoRet'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}
    },
// 'X||'    
    rules.X = {
        'modFrete':{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}
    },
// 'X03||||||'    
    rules.X03 = {
        'xNome' :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'IE'    :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'xEnder':{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'UF'    :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'xMun'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}
    },
// 'X04||'    
    rules.X04 = {
        'CNPJ':{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}
    },
// 'X05||'    
    rules.X05 = {
        'CPF':{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}
    },
// 'X11|||||||'    
    rules.X11 = {
        'vServ'     :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vBCRet'    :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'pICMSRet'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vICMSRet'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'CFOP'      :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'cMunFG'    :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}
    },
// 'X18||||'    
    rules.X18 = {
        'placa' :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'UF'    :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'RNTC'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}
    },
// 'X26|||||||'    
    rules.X26 = {
        'qVol'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'esp'   :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'marca' :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'nVol'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'pesoL' :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'pesoB' :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}
    },
// 'Y|'    
    rules.Y = {},
// 'Y02|||||'    
    rules.Y02 = {
        'nFat'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vOrig' :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vDesc' :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vLiq'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}
    },
// 'Y07||||'    
    rules.Y07 = {
        'nDup'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'dVenc' :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vDup'  :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}
    },
// 'YA||'    
    rules.YA = {
        'vTroco':{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}        
    },
// 'YB|||||||||'    
    rules.YB = {
        'tPag'      :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'xPag'      :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'vPag'      :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'indPag'    :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'tpIntegra' :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'CNPJ'      :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'tBand'     :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'cAut'      :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}
    },
// 'Z|||'    
    rules.Z = {
        'infAdFisco':{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''},
        'infCpl'    :{'tam':'','tipo': 'N','ocor':'1-1','dec':2,'def':''}
    }