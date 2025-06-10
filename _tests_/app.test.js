import request from 'supertest';
import app from '../app.js';
import fs from 'fs';

const DB_FILE = './db.json';

beforeEach(() => {
  fs.writeFileSync(DB_FILE, JSON.stringify({ itens: [] }, null, 2));
});

describe('API Achados e Perdidos', () => {
  it('deve retornar lista vazia inicialmente', async () => {
    const res = await request(app).get('/itens');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('deve adicionar um novo item', async () => {
    const item = {
      nome: 'Celular',
      descricao: 'Preto com capa vermelha',
      data: '2025-06-09',
      local: 'Biblioteca'
    };

    const res = await request(app).post('/itens').send(item);
    expect(res.statusCode).toBe(201);
    expect(res.body.nome).toBe(item.nome);
  });

  it('deve atualizar um item existente', async () => {
    const item = {
      nome: 'Chave',
      descricao: 'Chave pequena',
      data: '2025-06-09',
      local: 'Portaria'
    };

    const resPost = await request(app).post('/itens').send(item);
    const id = resPost.body.id;

    const atualizado = { ...item, local: 'Recepção' };
    const resPut = await request(app).put(`/itens/${id}`).send(atualizado);

    expect(resPut.statusCode).toBe(200);
    expect(resPut.body.local).toBe('Recepção');
  });

  it('deve deletar um item existente', async () => {
    const resPost = await request(app).post('/itens').send({
      nome: 'Óculos',
      descricao: 'Óculos de grau',
      data: '2025-06-09',
      local: 'Cantina'
    });

    const id = resPost.body.id;

    const resDelete = await request(app).delete(`/itens/${id}`);
    expect(resDelete.statusCode).toBe(204);

    const resGet = await request(app).get('/itens');
    expect(resGet.body.find(i => i.id === id)).toBeUndefined();
  });
});
