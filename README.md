# EstacioneAI Práticas Extencionistas III

## Modelagem de Entidade e Relacionamento (Conceitual e Lógico)
A Modelagem de Entidade e Relacionamento (MER) é usada para representar a estrutura de dados de um sistema.
- Modelo Conceitual: Foca nos conceitos principais, como entidades (objetos) e relacionamentos, sem se preocupar com a implementação técnica.

- Modelo Lógico: Adiciona detalhes técnicos como tipos de dados e chaves primárias/estrangeiras, preparando o modelo para ser implementado em um banco de dados.

## Diagrama de Classes
O Diagrama de Classes é usado na UML para representar a estrutura do sistema orientado a objetos.
Ele mostra as classes, seus atributos, métodos e os relacionamentos (associações, heranças, composições) entre elas.
É fundamental para o desenvolvimento de software, pois organiza e define o comportamento dos objetos no sistema.
No contexto do projeto EstacioneAI, o Diagrama de Classes foi construído para refletir a estrutura principal do aplicativo, incluindo:

- Usuário: responsável por gerenciar dados de autenticação e informações do veículo.
- Vaga: representa a vaga de estacionamento disponível ou ocupada, com atributos como localização, status e tempo de ocupação.
- Reserva: controla as reservas feitas pelos usuários para utilização de vagas específicas.
- Pagamento: gerencia o registro de pagamentos referentes à utilização das vagas.
- Notificação: envia alertas e informações relevantes para os usuários sobre suas reservas e status das vagas.

Esse diagrama foi essencial para definir as responsabilidades de cada entidade e garantir uma estrutura consistente para a implementação do sistema.

## Diagrama de Caso de Uso Geral
O Diagrama de Caso de Uso descreve as funcionalidades que o sistema deve oferecer, do ponto de vista do usuário (ator).
Ele ilustra as interações principais entre os atores (usuários ou sistemas externos) e os casos de uso (ações ou serviços oferecidos pelo sistema).
Para o projeto EstacioneAI, o Diagrama de Caso de Uso foi elaborado para representar as principais funcionalidades do aplicativo, como:

- Cadastro e Login de Usuário: permitindo que novos usuários se registrem e acessem o sistema de forma segura.
- Consulta de Vagas Disponíveis: oferecendo aos motoristas uma visualização em tempo real das vagas próximas.
- Reserva de Vaga: possibilitando que o usuário reserve uma vaga antecipadamente.
- Pagamento pelo Uso da Vaga: integrando o sistema de pagamento para facilitar a cobrança do tempo utilizado.
- Recebimento de Notificações: informando sobre vencimento de reservas, disponibilidade de vagas e outras atualizações importantes.

O Diagrama de Caso de Uso permitiu a identificação clara dos requisitos funcionais e a definição dos fluxos principais de interação no sistema.

## Diagrama de Sequência
O Diagrama de Sequência modela como os objetos do sistema interagem em um fluxo de tempo.
Mostra a ordem das mensagens trocadas entre objetos para realizar uma funcionalidade específica, sendo útil para detalhar o comportamento dinâmico de um caso de uso.

1. Usuário abre o aplicativo
- App pede autenticação (Login)
- Usuário informa login e senha

2. App mostra mapa de vagas
- App consulta servidor de vagas em tempo real
- Exibe mapa atualizado para o usuário

2. Durante a utilização
- Sistema de Notificação envia alertas (ex.: "Sua reserva vai expirar em 5 minutos")

3. Usuário seleciona e reserva uma vaga
- App envia solicitação de reserva para o Banco de Dados
- Banco de Dados confirma a reserva
- Banco de Dados atualiza status da vaga

4. Durante a utilização
- Sistema de Notificação envia alertas (ex.: "Sua reserva vai expirar em 5 minutos")

5. Usuário realiza pagamento
- App envia pedido de pagamento ao Sistema de Pagamento
- Sistema de Pagamento confirma o pagamento
- App atualiza status da vaga (vaga ocupada)

6. Fim da reserva
- App encerra a reserva e registra no histórico do usuário
- App solicita avaliação de experiência

## Diagramas de Atividades
O Diagrama de Atividades descreve o fluxo de trabalho (workflow) ou os processos de um sistema.
Ele é usado para representar a lógica de negócios ou a sequência de atividades que ocorrem, destacando decisões, paralelismos e interações.
