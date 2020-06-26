import express from 'express';
import db from './db';

const app = express();

app.get('/notes', async (req, res) => {
  try {
    const notes = await db.getNotes();
    if (notes) {
      res.json(notes);
    } else {
      res.status(404).send();
    }

  } catch (e) {
    res.status(500).json(e);
  }
});

export { app };