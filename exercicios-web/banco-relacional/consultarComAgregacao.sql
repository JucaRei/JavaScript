select 
    regiao as 'Região',
    sum(populacao) as Total
FROM estados
GROUP BY regiao
ORDER BY Total DESC

select 
    sum(populacao) as Total
FROM estados

-- avg - média

select 
    avg(populacao) as Total
FROM estados