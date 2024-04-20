<?php

    $query_db = array(
        /* LOGIN */
        "LOG-0"  => 'CALL sp_login("x00", "x01");', // USER, PASS

        /* USERS */
        "USR-0"  => 'CALL sp_viewUser(@access,@hash,"x00","x01","x02");', // FIELD,SIGNAL, VALUE
        "USR-1"  => 'CALL sp_setUser(@access,@hash,x00,"x01","x02","x03");', // ID, EMAIL, PASS, ACCESS
        "USR-2"  => 'CALL sp_updatePass(@hash,"x00");', // PASS
        "USR-3"  => 'CALL sp_check_usr_mail(@hash);', //

        /* CALENDAR */
        "CAL-0"  => 'CALL sp_view_calendar(@hash,"x00","x01");', // DT_INI, DT_FIN
        "CAL-1"  => 'CALL sp_set_calendar(@hash,"x00","x01");', // DT_AGD, OBS

        /* MAIL */
        "MAIL-0"  => 'CALL sp_set_mail(@hash,"x00","x01");', // ID_TO, MESSAGE
        "MAIL-1"  => 'CALL sp_view_mail(@hash,x00);', // I_SEND
        "MAIL-2"  => 'CALL sp_all_mail_adress(@hash);', //      
        "MAIL-3"  => 'CALL sp_del_mail(@hash,"x00",x01,x02);', // DATA, ID_FROM, ID_TO
        "MAIL-4"  => 'CALL sp_mark_mail(@hash,"x00",x01,x02);', // DATA, ID_FROM, ID_TO

        /* FUNCIONÁRIOS */
        "FUN-0"  => 'CALL sp_view_func(@access,@hash,"x00","x01","x02",x03);', // FIELD,SIGNAL, VALUE, ATIVO
        "FUN-1"  => 'CALL sp_set_func(@access,@hash,x00,"x01","x02","x03","x04","x05","x06","x07","x08","x09","x10","x11","x12","x13","x14","x15","x16","x17",x18,"x19");', // id,nome,nasc,rg,cpf,pis,end,num,cidade,bairro,uf,cep,data_adm,data_dem,id_cargo,id_setor,tel,cel,ativo,obs
        "FUN-2"  => 'CALL sp_del_func(@access,@hash,x00);', // ID

        /* EMPRESAS */
        "EMP-0"  => 'CALL sp_view_emp(@access,@hash,"x00","x01","x02");', // FIELD,SIGNAL, VALUE
        "EMP-1"  => 'CALL sp_set_emp(@access,@hash,x00,"x01","x02","x03","x04","x05","x06","x07","x08","x09","x10","x11","x12","x13","x14","x15","x16");', // id,razao_social,fant,cnpj,ie,im,end,num,comp,bairro,cidade,uf,cep,cliente,ramo,tel,email
        "EMP-2"  => 'CALL sp_del_emp(@access,@hash,x00);', // ID

        /* PRODUTOS */
        "PROD-0" => 'CALL sp_view_prod(@access,@hash,"x00","x01","x02");', // FIELD,SIGNAL, VALUE
        "PROD-1" => 'CALL sp_set_prod(@access,@hash,x00,x01,"x02","x03","x04","x05","x06","x07","x08","x09",x10,"x11","x12","x13");',
        "PROD-2" => 'CALL sp_del_prod(@access,@hash,x00);', // ID
        "PROD-3" => 'CALL sp_set_reserv_prod(@access,@hash,x00,x01,x02,"x03",x04);', // ID_PROD, ID_PROJ,ID_USER,QTD,PAGO      
        "PROD-4" => 'CALL sp_inventario(@access,@hash,x00,"x01","x02")', // ID_PROD, QTD, OPERAÇÃO

        /* ADMIN */
        "ADM-0"  => 'CALL sp_set_setor(@access,@hash,x00,"x01");', // ID_SETOR, NOME
        "ADM-1"  => 'CALL sp_view_setor(@access,@hash,"x00","x01","x02");', // FIELD,SIGNAL, VALUE
        "ADM-2"  => 'CALL sp_set_cargo(@access,@hash,x00,"x01",x02,x03,"x04");', // ID_CARGO, CARGO, SALARIO, MENSAL, CBO
        "ADM-3"  => 'CALL sp_view_cargo(@access,@hash,"x00","x01","x02");', // FIELD,SIGNAL, VALUE
        "ADM-4"  => 'CALL sp_set_und(@access,@hash,x00,"x01","x02");', // ID,NOME, SIGLA
        "ADM-5"  => 'CALL sp_view_und(@access,@hash,"x00","x01","x02");', // FIELD,SIGNAL, VALUE
        "ADM-6"  => 'SELECT * FROM vw_feriado;',
        "ADM-7"  => 'CALL sp_set_feriado(@access,@hash,x00,"x01",x02,x03,x04)', // ID,Nome,Dia,Mes,Ano

        /* SYSTEMA */
        "SYS-0"  => 'CALL sp_set_usr_perm_perf(@access,@hash,x00,"x01");', // ID, NOME
        "SYS-1"  => 'CALL sp_view_usr_perm_perf(@access,@hash,"x00","x01","x02");', // FIELD,SIGNAL, VALUE

        /* RELOGIO DE PONTO */
        "REL-0"  => 'CALL sp_view_relogio_ponto(@access,@hash,"x00","x01","x02");', // DATA INICIO, DATA FINAL,FUNC
        "REL-1"  => 'CALL sp_set_relogio_ponto(@access,@hash,"x00","x01",x02);', // Entrada, Saída, Id_func
        "REL-2"  => 'CALL sp_del_relogio_ponto(@access,@hash,"x00",x01);', // Entrada, Id_func

        /* ANÁLISE DE FROTA */
        "ANA-0" => 'CALL sp_view_analise_frota(@access,@hash,"x00","x01","x02","x03","x04","x05");', // FIELD,SIGNAL, VALUE, EXEC, DT_INI, DT_FIN
        "ANA-1" => 'CALL sp_set_analise_frota(@access, @hash, x00, x01,"x02","x03",x04,"x05","x06","x07","x08");', // ID,ID_EMP,DATA_ANALISE,NUM_CARRO,EXEC,FUNC,LOCAL,VALOR,OBS
        "ANA-2" => 'CALL sp_del_analise_frota(@access,@hash,x00);', // ID

        /* SERVIÇO EXECUTADO */
        "SERV-0" => 'CALL sp_view_serv_exec(@access,@hash,"x00","x01","x02","x03","x04");', // FIELD,SIGNAL, VALUE, DT_INI, DT_FIN
        "SERV-1" => 'CALL sp_set_serv_exec(@access, @hash, x00, x01,"x02","x03",x04,"x05","x06","x07","x08");', // ID,ID_EMP,DATA_ANALISE,NUM_CARRO,NF,FUNC,PEDIDO,VALOR,OBS
        "SERV-2" => 'CALL sp_del_serv_exec(@access,@hash,x00);', // ID

        /* TOOLS */
        "TOOL-0" => 'CALL sp_view_pcp(@access, @hash, "x00");', // data
        "TOOL-1" => 'CALL sp_set_pcp(@access, @hash, "x00",x01,"x02");', // data, id_setor, valor


    );

?>