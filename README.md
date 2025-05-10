# EstacioneAI
Repositório iniciado para entrega do MPV do software EstacioneAI, o mesmo desenvolvido por:</br>
[Giovanni Donati](https://github.com/GiovanniDonati),
[Heitor Baretta Fachin](https://github.com/HeitorFachin),
[Carlos Rech](https://github.com/carlosgbrs),
## 

## Stacks

Projeto inicialmente desenvolvido em:<br>
FrontEnd : React com Vite + Tailwind.<br>
BackEnd : Java com Spring

## Instalação

```bash
# Frontend
cd app
npm install
```

```bash
# Backend
cd server
```

- Importante salientar que é necessário a criação de um BD com o nome estacioneai, script para criação no caminho ```server/src/main/resources/BD.sql```

## Estrutura do Projeto

```
.
├── doc/           # Pasta com a documentação do projeto
|── app/           # Pasta com o frontend
   |── public/     # Pasta com os dados públicos
   └── src/        # Pasta com o código fonte
└── server/        # Pasta com a lógica backend
   |── src/        # Pasta com código fonte
   └── target/     # Pasta com o código compilado
```

## Desenvolvimento

- Subir a aplicação frontend, execute:
```bash
cd app
npm run dev
```
O servidor será iniciado na porta 3000 (ou na porta especificada pela variável de ambiente PORT). 

---

- Subir o servidor backend, execute:
```bash
cd app
```
O servidor será iniciado na porta 8080 (ou na porta especificada pela variável de ambiente). 
