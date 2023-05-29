import * as os from 'os';

export function EOL() {
  const EOL = os.EOL;
  console.log(`EOL для текущей ОС: ${JSON.stringify(EOL)}`);
}

export function cpus() {
  const cpus = os.cpus();

  console.log(`Всего процессоров: ${cpus.length}`);
  console.log('Информация о каждом процессоре:');

  cpus.forEach((cpu, index) => {
    console.log(`Процессор ${index + 1}:`);
    console.log(`  Модель: ${cpu.model}`);
    console.log(`  Тактовая частота: ${cpu.speed / 1000} ГГц`);
  });
}

export function homedir() {
  const homeDir = os.homedir();
  console.log(`Домашний каталог пользователя: ${homeDir}`);
}

export function username_pc() {
  const username_pc = os.userInfo().username;
  console.log(`Текущее системное имя пользователя: ${username_pc}`);
}

export function architecture() {
  const arch = process.arch;
  console.log(`Архитектура ЦП, для которой скомпилирован Node.js: ${arch}`);
}
