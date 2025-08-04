# 📦 Projeto Achados e Perdidos

Este é um sistema simples de **Achados e Perdidos** desenvolvido em **Node.js** com **Express**. Ele permite cadastrar, listar, editar e remover itens perdidos ou encontrados, com persistência local em arquivo JSON. A aplicação possui uma interface web acessível via navegador, além de oferecer uma **API RESTful** para integração com outras aplicações.

---

## ⚙️ Funcionalidades

- ✅ Cadastro de itens encontrados/perdidos
- 📃 Listagem completa de itens
- ✏️ Edição de informações de itens existentes
- ❌ Remoção de itens
- 🌐 Interface web amigável
- 🔌 API RESTful

---

## 🚀 Instalação

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd APIAchadosEPerdidos
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

---

## ▶️ Uso

Inicie o servidor com:

```bash
npm start
```
ou:

```bash
node server.js
```

Acesse a interface web em:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🔌 Endpoints da API

- `GET /itens` — Lista todos os itens  
- `POST /itens` — Adiciona um novo item  
- `PUT /itens/:id` — Atualiza um item existente  
- `DELETE /itens/:id` — Remove um item  

---

## 🧪 Testes

Execute os testes automatizados com:

```bash
npm test
```

---

## 🗂️ Estrutura do Projeto

```
app.js              # Configuração do Express e rotas da API
server.js           # Inicialização do servidor
db.json             # Banco de dados local (JSON)
public/             # Arquivos estáticos (HTML, CSS, JS)
_tests_/            # Testes automatizados
package.json        # Dependências e scripts
jest.config.mjs     # Configuração do Jest
```

---

## 📄 Licença

Este projeto está licenciado sob a licença **ISC**.

---

## 👨‍💻 Desenvolvido por

Abel
