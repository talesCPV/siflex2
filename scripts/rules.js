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