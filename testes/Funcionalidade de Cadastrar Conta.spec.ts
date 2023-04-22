import { test, expect } from '@playwright/test';

test('teste de Campos Obrigatórios', async ({ page }) => {
  // Recording...
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.waitForTimeout(1500)
await page.getByText('☰').click();
await page.waitForTimeout(1500)
await page.getByRole('link', { name: 'Cadastre-se' }).click();
await page.waitForTimeout(1500)
await page.locator('#id_username').click();
await page.waitForTimeout(1500)
await page.locator('#id_username').fill('matricula do aluno');
await page.waitForTimeout(1500)
await page.getByRole('button', { name: ' Salvar' }).click();
await page.waitForTimeout(1500)
await page.locator('#id_name').click();
await page.waitForTimeout(1500)
await page.locator('#id_name').fill('nome do aluno');
await page.waitForTimeout(1500)
await page.getByRole('button', { name: ' Salvar' }).click();
await page.waitForTimeout(1500)
await page.locator('#id_email').click();
await page.waitForTimeout(1500)
await page.locator('#id_email').fill('aluno@gmail.com');
await page.waitForTimeout(1500)
await page.getByRole('button', { name: ' Salvar' }).click();
});


test(' Matrícula já existe', async ({ page }) => {
  // Recording...
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.waitForTimeout(1500)
await page.getByText('☰').click();
await page.waitForTimeout(1500)
await page.getByRole('link', { name: 'Cadastre-se' }).click();
await page.waitForTimeout(1500)
await page.locator('#id_username').click();
await page.waitForTimeout(1500)
await page.locator('#id_username').fill('20191tads0326');
await page.waitForTimeout(1500)
await page.locator('#id_name').click();
await page.waitForTimeout(1500)
await page.locator('#id_name').fill('aluno');
await page.waitForTimeout(1500)
await page.locator('#id_email').click();
await page.waitForTimeout(1500)
await page.locator('#id_email').fill('maisumaluno@gmail.com');
await page.waitForTimeout(1500)
await page.locator('#id_photo').click();
await page.waitForTimeout(1500)
//await page.getByLabel('Upload file').setInputFiles('download.jpeg');
await page.locator('#id_photo').setInputFiles('tests/download.jpeg');
await page.waitForTimeout(1500)
await page.locator('#id_curso').selectOption('9');
await page.waitForTimeout(1500)
await page.locator('#id_password').click();
await page.waitForTimeout(1500)
await page.locator('#id_password').fill('senha1234');
await page.waitForTimeout(1500)
await page.getByRole('button', { name: ' Salvar' }).click();
await page.waitForTimeout(1500)
await page.getByText('Usuário com este Matricula já existe.').click();
});


test(' E-mail já existe',async({page})=>{
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.waitForTimeout(1500)
await page.getByText('☰').click();
await page.waitForTimeout(1500)
await page.getByRole('link', { name: 'Cadastre-se' }).click();
await page.waitForTimeout(1500)
await page.locator('#id_username').click();
await page.waitForTimeout(1500)
await page.locator('#id_username').fill('matriculanova');
await page.waitForTimeout(1500)
await page.locator('#id_name').click();
await page.waitForTimeout(1500)
await page.locator('#id_name').fill('teste novo');
await page.waitForTimeout(1500)
await page.locator('#id_email').click();
await page.waitForTimeout(1500)
await page.locator('#id_email').fill('edivansantos1478@gmail.com');
await page.waitForTimeout(1500)
await page.locator('#id_photo').click();
await page.waitForTimeout(1500)
await page.locator('#id_photo').setInputFiles('tests/download.jpeg');
await page.waitForTimeout(1500)
await page.locator('#id_curso').selectOption('9');
await page.waitForTimeout(1500)
await page.locator('#id_password').click();
await page.waitForTimeout(1500)
await page.locator('#id_password').fill('222222222');
await page.waitForTimeout(1500)
await page.getByRole('button', { name: ' Salvar' }).click();
await page.waitForTimeout(1500)
await page.getByText('Usuário com este E-mail já existe.').click();
});

// Ao chegar na linha 73 vai apresentar erro pq ele nao acha o arquivo que esta somente em meu pc
test(' E-mail invalido',async({page})=>{
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.getByText('☰').click();
await page.waitForTimeout(1500)
await page.getByRole('link', { name: 'Cadastre-se' }).click();
await page.waitForTimeout(1500)
await page.locator('#id_username').click();
await page.waitForTimeout(1500)
await page.locator('#id_username').fill('normal');
await page.waitForTimeout(1500)
await page.locator('#id_name').click();
await page.waitForTimeout(1500)
await page.locator('#id_name').fill('certo');
await page.waitForTimeout(1500)
await page.locator('#id_email').click();
await page.waitForTimeout(1500)
await page.locator('#id_email').fill('@gmail.com');
await page.waitForTimeout(1500)
await page.locator('#id_photo').click();
await page.waitForTimeout(1500)
await page.locator('#id_photo').setInputFiles('tests/download.jpeg');
await page.waitForTimeout(1500)
await page.locator('#id_curso').selectOption('9');
await page.waitForTimeout(1500)
await page.locator('#id_password').click();
await page.waitForTimeout(1500)
await page.locator('#id_password').click();
await page.waitForTimeout(1500)
await page.locator('#id_password').fill('234455533');
await page.waitForTimeout(1500)
await page.getByRole('button', { name: ' Salvar' }).click();

});

test('Campos preenchidos corretamente',async({page})=>{
  await page.goto('https://refeitorio.picos.ifpi.edu.br/');
  await page.getByText('☰').click();
  await page.waitForTimeout(1500)
  await page.getByRole('link', { name: 'Cadastre-se' }).click();
  await page.waitForTimeout(1500)
  await page.locator('#id_username').click();
  await page.waitForTimeout(1500)
  await page.locator('#id_username').fill('12345678');
  await page.waitForTimeout(1500)
  await page.locator('#id_name').click();
  await page.waitForTimeout(1500)
  await page.locator('#id_name').fill('maria silva');
  await page.waitForTimeout(1500)
  await page.locator('#id_email').click();
  await page.waitForTimeout(1500)
  await page.locator('#id_email').fill('silvamaria@gmail.com');
  await page.waitForTimeout(1500)
  await page.locator('#id_curso').selectOption('6');
  await page.waitForTimeout(1500)
  await page.locator('#id_password').click();
  await page.waitForTimeout(1500)
  await page.locator('#id_password').fill('123456');
  await page.waitForTimeout(1500)
  await page.locator('#id_photo').click();
  await page.waitForTimeout(1500)
  await page.locator('#id_photo').setInputFiles('tests/download.jpeg');
  await page.waitForTimeout(1500)
  await page.getByRole('button', { name: ' Salvar' }).click();
  await page.waitForTimeout(1500)
  await page.getByText('Aluno maria silva cadastrado com sucesso').click();
});

test('Foto Obrigatorio',async({page})=>{
   await page.goto('https://refeitorio.picos.ifpi.edu.br/');
   await page.getByText('☰').click();
   await page.waitForTimeout(1500)
   await page.getByRole('link', { name: 'Cadastre-se' }).click();
   await page.waitForTimeout(1500)
   await page.locator('#id_username').click();
   await page.waitForTimeout(1500)
   await page.locator('#id_username').fill('mariajubileu@gmail.com');
   await page.waitForTimeout(1500)
   await page.locator('#id_name').click();
   await page.waitForTimeout(1500)
   await page.locator('#id_name').fill('jubileu');
   await page.waitForTimeout(1500)
   await page.locator('#id_email').click();
   await page.waitForTimeout(1500)
   await page.locator('#id_username').click();
   await page.waitForTimeout(1500)
   await page.locator('#id_username').fill('mariajubileu');
   await page.waitForTimeout(1500)
   await page.locator('#id_email').click();
   await page.waitForTimeout(1500)
   await page.locator('#id_email').fill('Jubileu@gmail.com');
   await page.waitForTimeout(1500)
   await page.locator('#id_curso').selectOption('9');
   await page.waitForTimeout(1500)
   await page.locator('#id_password').click();
   await page.waitForTimeout(1500)
   await page.locator('#id_password').fill('jujuju');
   await page.waitForTimeout(1500)
   await page.getByRole('button', { name: ' Salvar' }).click(); 
});

test('teerrer',async({page})=>{
  await page.goto('https://refeitorio.picos.ifpi.edu.br/');
  await page.getByText('☰').click();
     await page.waitForTimeout(1500)
  await page.waitForTimeout(1500)
  await page.getByRole('link', { name: 'Cadastre-se' }).click();
  await page.waitForTimeout(1500)
  await page.locator('#id_username').click();
  await page.waitForTimeout(1500)
  await page.locator('#id_username').fill('12345678');
  await page.waitForTimeout(1500)
  await page.locator('#id_name').click();
  await page.waitForTimeout(1500)
  await page.locator('#id_name').fill('maria silva');
  await page.waitForTimeout(1500)
  await page.locator('#id_email').click();
  await page.waitForTimeout(1500)
  await page.locator('#id_email').fill('silvamaria@gmail.com');
  await page.waitForTimeout(1500)
  await page.locator('#id_curso').selectOption('6');
  await page.waitForTimeout(1500)
  await page.locator('#id_password').click();
  await page.waitForTimeout(1500)
  await page.locator('#id_password').fill('123456');
  await page.waitForTimeout(1500)
  await page.locator('#id_photo').click();
  await page.waitForTimeout(1500)
  await page.locator('#id_photo').setInputFiles('tests/download.jpeg');
  await page.waitForTimeout(1500)
  await page.getByRole('button', { name: ' Salvar' }).click();
  await page.waitForTimeout(1500)
  await page.getByText('Aluno maria silva cadastrado com sucesso');
})


