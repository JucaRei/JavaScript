UPDATE estados
set nome = 'Maranhão'
where sigla = 'MA'

select nome from estados where sigla = "MA" 

update estados
set nome = 'Paraná', 
    populacao = 11.32
where sigla = 'PR'

select nome, sigla, populacao 
from estados where sigla = "PR" 

-- banco knowledge
update users
set admin = true
where name = 'juca';