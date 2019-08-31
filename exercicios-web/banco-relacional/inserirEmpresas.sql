insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 21766543000194),
    ('Vale', 57355001000176),
    ('Cielo', 48214513000121);

ALTER TABLE wm.empresas MODIFY COLUMN cpnj VARCHAR(14);


desc empresas;
desc prefeitos;
SELECT * from empresas;
select * from `cidades`;
-- descrever a tabela

insert into empresas_unidades 
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);
