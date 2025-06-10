import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'db.json');

app.use(express.json());
app.use(express.static('public'));

function readDB() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ itens: [] }, null, 2));
  }
  return JSON.parse(fs.readFileSync(DB_FILE));
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

app.get('/itens', (req, res) => {
  const db = readDB();
  res.json(db.itens);
});

app.post('/itens', (req, res) => {
  const db = readDB();
  const novoItem = {
    id: Date.now(),
    nome: req.body.nome,
    descricao: req.body.descricao,
    data: req.body.data,
    local: req.body.local
  };
  db.itens.push(novoItem);
  writeDB(db);
  res.status(201).json(novoItem);
});

app.put('/itens/:id', (req, res) => {
  const db = readDB();
  const id = parseInt(req.params.id);
  const item = db.itens.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item não encontrado' });

  Object.assign(item, req.body);
  writeDB(db);
  res.json(item);
});

app.delete('/itens/:id', (req, res) => {
  const db = readDB();
  const id = parseInt(req.params.id);
  db.itens = db.itens.filter(i => i.id !== id);
  writeDB(db);
  res.status(204).end();
});

export default app;
