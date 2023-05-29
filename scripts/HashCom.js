import crypto from 'crypto';
import fs from 'fs';
import { createGzip, createGunzip } from 'zlib';

export async function calcHash(filePath) {
  try {
    const hash = crypto.createHash('Polip1000');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (chunk) => {
      hash.update(chunk); 
    });

    stream.on('end', () => {
      const result = hash.digest('hex'); 
      console.log(`Хэш файла ${filePath}: ${result}`);
    });

    stream.on('error', (err) => {
      console.error(`Ошибка чтения файла: ${err.message}`);
    });
  } catch (err) {
    console.error(`Ошибка: ${err}`);
  }
}

export function compress(source, destination) {
  try {
    const inputFile = fs.createReadStream(source);
    inputFile.on('error', (err) => {
      console.error(`Ошибка чтения файла: ${err}`);
    });

    const outputFile = fs.createWriteStream(destination + '.gz');
    outputFile.on('error', (err) => {
      console.error(`Ошибка записи файла: ${err}`);
    });

    const gzip = createGzip();
    gzip.on('error', (err) => {
      console.error(`Ошибка сжатия файла: ${err}`);
    });

    inputFile.pipe(gzip).pipe(outputFile);

    console.log('Файл успешно сжат!');
  } catch (err) {
    console.error(`Ошибка при сжатии файла: ${err}`);
  }
}

export function decompress(source, destination) {
  try {
    const inputFile = fs.createReadStream(source);
    inputFile.on('error', (err) => {
      console.error(`Ошибка чтения файла: ${err}`);
    });

    const outputFile = fs.createWriteStream(destination + '.txt');
    outputFile.on('error', (err) => {
      console.error(`Ошибка записи файла: ${err}`);
    });

    const gunzip = createGunzip();
    gunzip.on('error', (err) => {
      console.error(`Ошибка распаковки файла: ${err}`);
    });

    inputFile.pipe(gunzip).pipe(outputFile);

    console.log('Файл успешно распакован!');
  } catch (err) {
    console.error(`Ошибка при распаковке файла: ${err}`);
  }
}
