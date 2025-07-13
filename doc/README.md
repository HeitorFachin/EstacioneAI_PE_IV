# EstacioneAI Práticas Extencionistas III

## Modelagem de Entidade e Relacionamento (Conceitual e Lógico)
A Modelagem de Entidade e Relacionamento (MER) é usada para representar a estrutura de dados de um sistema.
- Modelo Conceitual: Foca nos conceitos principais, como entidades (objetos) e relacionamentos, sem se preocupar com a implementação técnica.
  ## Entidades
  
    ### Cliente
  - Cadastra-se no sistema com nome, e-mail e senha.
  - Possui veículos (um usuário pode ter vários veículos).
  - Recebe notificações (sobre eventos como reservas ou pagamentos).
  
  ### Veículo
  - Cada veículo tem placa, modelo e cor.
  - Está associado a um usuário.
  
  ### Vaga
  - Representa uma vaga de estacionamento.
  - Identificada por localização, status e tempo ocupado.
  - Pertence a uma reserva.
  
  ## Relações Principais
  
  - Um usuário pode possuir vários veículos.
  - Cada vaga está associada a exatamente uma reserva no momento da ocupação (1:1).

- Modelo Lógico: Adiciona detalhes técnicos como tipos de dados e chaves primárias/estrangeiras, preparando o modelo para ser implementado em um banco de dados.

  ## Tabelas
  
  ### Cliente
  - `id_cliente` (INT, PK)
  - `nome` (VARCHAR(100))
  - `email` (VARCHAR(100))
  - `senha` (VARCHAR(255))
  
  ### Veiculo
  - `id_veiculo` (INT, PK)
  - `id_cliente` (INT, FK)
  - `placa` (VARCHAR(20))
  - `modelo` (VARCHAR(50))
  - `cor` (VARCHAR(30))
  
  ### Vaga
  - `id_vaga` (INT, PK)
  - `localizacao` (VARCHAR(100))
  - `status` (ENUM)no 
  - `tempo_ocupacao` (TIME)
  
  ## Relações
  
  - Um **cliente** pode ter vários **veículos** (1:N).
  - Um **cliente** pode fazer várias **reservas** (1:N).
  - Cada **vaga** pode ser associada a uma **veiculo** no momento da ocupação (1:1). 

## Diagrama de Classes
O Diagrama de Classes é usado na UML para representar a estrutura do sistema orientado a objetos.
Ele mostra as classes, seus atributos, métodos e os relacionamentos (associações, heranças, composições) entre elas.
É fundamental para o desenvolvimento de software, pois organiza e define o comportamento dos objetos no sistema.
No contexto do projeto EstacioneAI, o Diagrama de Classes foi construído para refletir a estrutura principal do aplicativo, incluindo:

- Cliente: responsável por gerenciar dados de autenticação e informações do veículo.
- Vaga: representa a vaga de estacionamento disponível ou ocupada, com atributos como localização, status e tempo de ocupação.

Esse diagrama foi essencial para definir as responsabilidades de cada entidade e garantir uma estrutura consistente para a implementação do sistema.

## Diagrama de Caso de Uso Geral
O Diagrama de Caso de Uso descreve as funcionalidades que o sistema deve oferecer, do ponto de vista do usuário (ator).
Ele ilustra as interações principais entre os atores (cliente ou sistemas externos) e os casos de uso (ações ou serviços oferecidos pelo sistema).
Para o projeto EstacioneAI, o Diagrama de Caso de Uso foi elaborado para representar as principais funcionalidades do aplicativo, como:

- Cadastro e Login de Cliente: permitindo que novos clientes se registrem e acessem o sistema de forma segura.
- Consulta de Vagas Disponíveis: oferecendo aos motoristas uma visualização em tempo real das vagas próximas.

O Diagrama de Caso de Uso permitiu a identificação clara dos requisitos funcionais e a definição dos fluxos principais de interação no sistema.

## Diagrama de Sequência
O Diagrama de Sequência modela como os objetos do sistema interagem em um fluxo de tempo.
Mostra a ordem das mensagens trocadas entre objetos para realizar uma funcionalidade específica, sendo útil para detalhar o comportamento dinâmico de um caso de uso.

1. Cliente abre o aplicativo
- App pede autenticação (Login)
- Cliente informa login e senha

2. App mostra mapa de vagas
- App consulta servidor de vagas em tempo real
- Exibe mapa atualizado para o usuário

2. Durante a utilização
- Sistema de Notificação envia alertas (ex.: "Sua reserva vai expirar em 5 minutos")

3. Cliente seleciona e reserva uma vaga
- App envia solicitação de reserva para o Banco de Dados
- Banco de Dados confirma a reserva
- Banco de Dados atualiza status da vaga

4. Durante a utilização
- Sistema de Notificação envia alertas (ex.: "Sua reserva vai expirar em 5 minutos")

5. Cliente realiza pagamento
- App envia pedido de pagamento ao Sistema de Pagamento
- Sistema de Pagamento confirma o pagamento
- App atualiza status da vaga (vaga ocupada)

6. Fim da reserva
- App encerra a reserva e registra no histórico do usuário
- App solicita avaliação de experiência

## Diagramas de Atividades
O Diagrama de Atividades descreve o fluxo de trabalho (workflow) ou os processos de um sistema.
Ele é usado para representar a lógica de negócios ou a sequência de atividades que ocorrem, destacando decisões, paralelismos e interações.

1.	Iniciar Aplicativo
   
2.	Tela de Login
   - [Decisão] Usuário já cadastrado?
       Sim: Inserir login e senha, Autenticar
       Não: Ir para Cadastro de Usuário
     
3.	Cadastro de Cliente
- Preencher informações (nome, senha, dados do veículo)
- Confirmar cadastro ➔ Voltar para Tela de Login

4.	[Decisão] Acessar mapa?
  Sim: Acessar mapa
 
6.	Tela Principal (Mapa de Vagas Disponíveis)
- Sistema atualiza mapa em tempo real
  Usuário pode:
  Visualizar vagas
  Aplicar filtros (proximidade, acessibilidade)
  
6.	Selecionar Vaga
- [Decisão] Deseja reservar vaga?
  Sim: Reservar vaga (tempo limitado)
	Não: Navegar livremente no mapa

7.	Receber Notificações
- Notificação de tempo de uso
- Notificação de término de reserva

8.	Realizar Pagamento
- Escolher método (cartão crédito, débito, carteira digital)
  Confirmar pagamento
  [Decisão] Pagamento aprovado?
  	Sim: Vaga ok
    Não: Exibir erro e tentar novamente

  
9.	Histórico de Utilização
- Visualizar histórico de vagas usadas e valores pago

10.	Avaliar App
-Enviar feedback sobre app utilizada

11.	Suporte
- Caso necessário, abrir chat de suporte

Fim



