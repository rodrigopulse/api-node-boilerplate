# Api Node Boilerplate

Com esse boilerplate, você poderá dar o pontapé inicial em seus projetos com facilidade e rapidez. Toda a infraestrutura necessária será configurada em sua máquina, permitindo que você se concentre nas características únicas da sua aplicação, em vez de se preocupar com configurações iniciais.

O objetivo principal é proporcionar uma base sólida e bem organizada para o desenvolvimento de APIs RESTful, com recursos integrados que tornam sua vida como desenvolvedor(a) muito mais simples. A inclusão de autenticação usando JWT, validação de solicitações, testes unitários e de integração, integração contínua e suporte ao Docker são apenas algumas das facilidades que este projeto oferece.

Além disso, a disponibilidade do código-fonte é uma oportunidade para que outros desenvolvedores também se beneficiem deste boilerplate e, assim, possam acelerar suas próprias jornadas de desenvolvimento.

Este é um projeto em constante evolução, onde novos recursos e melhorias serão incorporados regularmente. Sinta-se à vontade para contribuir, deixar sugestões ou reportar problemas.

# Começando

Um passo importante é renomear o termo 'boilerplate' nos containers, configurações do Docker, package.json e outros locais pertinentes. Para fazer isso, procure em seu editor de códigos todas as instâncias onde o termo 'boilerplate' é utilizado e substitua pelo nome específico do seu projeto.

## Comandos

Para iniciar o projeto, comece rodando:

```bash
yarn
```

Depois é só usar o docker compose

```bash
docker compose up
```

## Criando o database

Entre no mongo express com a url localhost:8081 e crie o seu database com o nome que inseriu no .env.local e também em docker-compose.yml em MONGO_INITDB_DATABASE
