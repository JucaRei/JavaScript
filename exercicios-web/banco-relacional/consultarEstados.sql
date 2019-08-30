select * from estados 

select nome, sigla from estados

select Sigla, 
    Nome as 'Nome do Estado'
from estados
WHERE regiao = 'Sul'

select Sigla, nome as 'Nome do Estado' from estados
WHERE populacao >= 10
ORDER BY populacao

SELECT Sigla, nome AS 'Nome do Estado' FROM estados
WHERE populacao >= 10
ORDER BY populacao DESC

SELECT 
    nome,
    sigla,
    populacao
from estados
where populacao >= 10
order by populacao desc