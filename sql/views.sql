DROP VIEW vw_analise_frota;
 CREATE VIEW vw_analise_frota AS
    SELECT 
        `ANA`.`id` AS `id`,
        `ANA`.`id_emp` AS `id_emp`,
        `ANA`.`data_analise` AS `data_analise`,
        `ANA`.`num_carro` AS `num_carro`,
        `ANA`.`exec` AS `exec`,
        `ANA`.`func` AS `func`,
        `ANA`.`local` AS `local`,
        `ANA`.`valor` AS `valor`,
        `ANA`.`obs` AS `obs`,
        `ANA`.`serv_exec` AS `serv_exec`,
        `EMP`.`fantasia` AS `empresa`,
        EMP.cnpj,
        EMP.endereco,
        EMP.num,
        EMP.cidade,
        EMP.estado
    FROM
        (`tb_analise_frota` `ANA`
        JOIN `tb_empresa` `EMP` ON ((`ANA`.`id_emp` = `EMP`.`id`)));
        
SELECT * FROM vw_analise_frota;

DROP VIEW vw_serv_exec;
 CREATE VIEW vw_serv_exec AS
    SELECT 
        `SERV`.`id` AS `id`,
        `SERV`.`id_emp` AS `id_emp`,
        `SERV`.`data_exec` AS `data_exec`,
        `SERV`.`num_carro` AS `num_carro`,
        `SERV`.`nf` AS `nf`,
        `SERV`.`pedido` AS `pedido`,
        `SERV`.`func` AS `func`,
        `SERV`.`obs` AS `obs`,
        `SERV`.`valor` AS `valor`,
        `EMP`.`fantasia` AS `empresa`,
        EMP.cnpj,
        EMP.endereco,
        EMP.num,
        EMP.cidade,
        EMP.estado
    FROM
        (`tb_serv_exec` `SERV`
        JOIN `tb_empresa` `EMP` ON ((`SERV`.`id_emp` = `EMP`.`id`)));
        
SELECT * FROM vw_serv_exec;

DROP VIEW vw_func;
 CREATE VIEW vw_func AS
	SELECT FUNC.*,  SETOR.setor, COALESCE(CAR.cargo,"") AS cargo, IF(CAR.tipo='HORA',1,0) AS horista, IF(FUNC.status="ATIVO",1,0) AS ativo
    FROM tb_funcionario AS FUNC    
	INNER JOIN tb_cargos AS CAR
	INNER JOIN vw_setor AS SETOR
	ON FUNC.id_cargo = CAR.id
	AND FUNC.id = SETOR.id_func
    ORDER BY FUNC.nome;
        
SELECT * FROM vw_func;

DROP VIEW vw_setor;
 CREATE VIEW vw_setor AS
	SELECT FUNC.id AS id_func, COALESCE(SETOR.nome,"") AS setor, COALESCE(SETOR.id,0) AS id_setor
	FROM tb_funcionario AS FUNC
	LEFT JOIN tb_setores AS SETOR
	ON FUNC.id_setor = SETOR.id;
    
SELECT * FROM vw_setor;    

DROP VIEW vw_feriado;
 CREATE VIEW vw_feriado AS
SELECT *, CONCAT(LPAD(dia,2,0),'/',LPAD(mes,2,0)) AS data
FROM tb_feriados 
ORDER BY mes,dia;

SELECT * FROM vw_feriado; 

-- 	DROP VIEW vw_date_range;
 	CREATE VIEW vw_date_range AS
SELECT date, WEEKOFYEAR(date) AS semana, DAYOFWEEK(date) AS dia_semana FROM 
(SELECT ADDDATE('2020-01-01',t4.i*10000 + t3.i*1000 + t2.i*100 + t1.i*10 + t0.i) date FROM
 (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t0,
 (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t1,
 (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t2,
 (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t3,
 (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t4) v;
 
 SELECT * FROM vw_date_range WHERE date BETWEEN '2024-02-01' AND '2024-02-29';
 