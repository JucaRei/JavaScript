SELECT * FROM prefeitos;
SELECT * FROM cidades;

select * from cidades c inner join prefeitos p on c.id = p.cidade_id;
SELECT * from cidades c LEFT OUTER JOIN prefeitos p on c.id = p.cidade_id;
SELECT * from cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id;

-- SELECT * from cidades c FULL JOIN prefeitos p on c.id = p.cidade_id;
-- mysql (mariadb) , não tem full join

SELECT * from cidades c LEFT OUTER JOIN prefeitos p on c.id = p.cidade_id
UNION
SELECT * from cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id;
-- outra forma de fazer full join no mysql


SELECT * from cidades c LEFT OUTER JOIN prefeitos p on c.id = p.cidade_id
UNION ALL
SELECT * from cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id;
--UNION ALL traz tudo , inclusive as duplicações