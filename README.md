# 🐾 MundoPet - Agendamento de PetShop

Aplicação web para gerenciamento de agendamentos de um petshop, desenvolvida como parte de um desafio da **Rocketseat**.  
Permite criar, listar e remover agendamentos, com interface intuitiva e separação por períodos do dia.

---

## ✨ Funcionalidades

- 📅 **Agendar serviços**: cadastro de tutor, pet, telefone, tipo de serviço, data e hora.
- ⏱ **Organização por período**: manhã, tarde e noite.
- 🕒 **Ordenação automática** por horário.
- ✅ **Validação de campos obrigatórios**.
- 🚫 **Bloqueio de datas passadas**.
- ❌ **Remoção de agendamentos** com confirmação.
- 🔄 **Atualização em tempo real** após ações.
- 📡 **Integração com API local** usando JSON-server.

---

## 🛠 Tecnologias utilizadas

- **JavaScript (ES6+)**
- **Day.js**
- **Fetch API**
- **HTML5**
- **CSS3**
- **Javascript**
- **JSON-server** (API Fake)

---

## 📂 Estrutura do projeto

```
scripts/
├── api/
│ ├── api-config.js # Configuração base da API
│ ├── fetch-schedules.js # Busca agendamentos
│ ├── new-schedule.js # Cria agendamento
│ ├── remove-schedule.js # Remove agendamento
│ └── show-schedules.js # Exibe agendamentos
├── form/
│ ├── load-schedules.js # Carrega agendamentos por data
│ ├── open-close-form.js # Controle do modal
│ ├── remove-click.js # Clique para remover
│ └── submit.js # Envio do formulário
```

---

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Leyvison-Menezes/Agendamento-PetShop.git

2. Instale o JSON-server (caso não tenha):
   npm install -g json-server

3. Inicie a API Fake:
   npm run server

4. Rode o Projeto:
   npm run dev

📄 Licença
Este projeto está sob a licença MIT.
