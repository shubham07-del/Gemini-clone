import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

async function run() {
  const ai = new GoogleGenAI({ apiKey: 'AIzaSyBdS_jdTRGO2K3EjfpZaQPdNZ9i6BWWjcU' });
  try {
    const list = await ai.models.list();
    for await (const model of list) {
        console.log(model.name);
    }
  } catch (e) {
    console.error(e);
  }
}
run();
