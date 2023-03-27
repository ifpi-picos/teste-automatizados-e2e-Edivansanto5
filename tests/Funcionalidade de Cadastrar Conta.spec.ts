import { test, expect } from '@playwright/test';

test('teste de Campos Obrigatórios', async ({ page }) => {
  // Recording...
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.getByText('☰').click();
await page.getByRole('link', { name: 'Cadastre-se' }).click();
await page.locator('#id_username').click();
await page.locator('#id_username').fill('matricula do aluno');
await page.getByRole('button', { name: ' Salvar' }).click();
await page.locator('#id_name').click();
await page.locator('#id_name').fill('nome do aluno');
await page.getByRole('button', { name: ' Salvar' }).click();
await page.locator('#id_email').click();
await page.locator('#id_email').fill('aluno@gmail.com');
await page.getByRole('button', { name: ' Salvar' }).click();
});

// observacao aqui quando chega na parte de inserir a imagem no campo obrigatorio
// o programa nao consegue achar a imagem logo dara erro de execusao e nao termina o teste
test(' Matrícula já existe', async ({ page }) => {
  // Recording...
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.getByText('☰').click();
await page.getByRole('link', { name: 'Cadastre-se' }).click();
await page.locator('#id_username').click();
await page.locator('#id_username').fill('20191tads0326');
await page.locator('#id_name').click();
await page.locator('#id_name').fill('aluno');
await page.locator('#id_email').click();
await page.locator('#id_email').fill('maisumaluno@gmail.com');
await page.locator('#id_photo').click();
await page.locator('#id_photo').setInputFiles('download.jpeg');
await page.locator('#id_curso').selectOption('9');
await page.locator('#id_password').click();
await page.locator('#id_password').fill('senha1234');
await page.getByRole('button', { name: ' Salvar' }).click();
await page.getByText('Usuário com este Matricula já existe.').click();
});

// Ao chegar na linha 53 vai apresentar erro pq ele nao acha o arquivo que esta somente em meu pc
test(' E-mail já existe',async({page})=>{
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.getByText('☰').click();
await page.getByRole('link', { name: 'Cadastre-se' }).click();
await page.locator('#id_username').click();
await page.locator('#id_username').fill('matriculanova');
await page.locator('#id_name').click();
await page.locator('#id_name').fill('teste novo');
await page.locator('#id_email').click();
await page.locator('#id_email').fill('edivansantos1478@gmail.com');
await page.locator('#id_photo').click();
await page.locator('#id_photo').setInputFiles('download.jpeg');
await page.locator('#id_curso').selectOption('9');
await page.locator('#id_password').click();
await page.locator('#id_password').fill('222222222');
await page.getByRole('button', { name: ' Salvar' }).click();
await page.getByText('Usuário com este E-mail já existe.').click();
});

// Ao chegar na linha 73 vai apresentar erro pq ele nao acha o arquivo que esta somente em meu pc
test(' E-mail invalido',async({page})=>{
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.getByText('☰').click();
await page.getByRole('link', { name: 'Cadastre-se' }).click();
await page.locator('#id_username').click();
await page.locator('#id_username').fill('normal');
await page.locator('#id_name').click();
await page.locator('#id_name').fill('certo');
await page.locator('#id_email').click();
await page.locator('#id_email').fill('@gmail.com');
await page.locator('#id_photo').click();
await page.locator('#id_photo').setInputFiles('Captura de tela de 2023-03-24 08-49-08.png');
await page.locator('#id_curso').selectOption('9');
await page.locator('#id_password').click();
await page.locator('#id_password').click();
await page.locator('#id_password').fill('234455533');
await page.getByRole('button', { name: ' Salvar' }).click();

});

// Ao chegar na linha 94 vai apresentar erro pq ele nao acha o arquivo que esta somente em meu pc
test('Campos preenchidos corretamente',async({page})=>{
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.getByText('☰').click();
await page.getByRole('link', { name: 'Cadastre-se' }).click();
await page.locator('#id_username').click();
await page.locator('#id_username').fill('novamatricula2023');
await page.locator('#id_name').click();
await page.locator('#id_name').fill('sabrina');
await page.locator('#id_email').click();
await page.locator('#id_email').fill('sabrina@gmail.com');
await page.locator('#id_photo').click();
await page.locator('#id_photo').setInputFiles('download.jpeg');
await page.locator('#id_curso').selectOption('3');
await page.locator('#id_password').click();
await page.locator('#id_password').fill('12321456');
await page.getByRole('button', { name: ' Salvar' }).click();
await page.getByText('Aluno sabrina cadastrado com sucesso').click();
  
});

test('Foto Obrigatorio',async({page})=>{
   await page.goto('https://refeitorio.picos.ifpi.edu.br/');
   await page.getByText('☰').click();
   await page.getByRole('link', { name: 'Cadastre-se' }).click();
   await page.locator('#id_username').click();
   await page.locator('#id_username').fill('mariajubileu@gmail.com');
   await page.locator('#id_name').click();
   await page.locator('#id_name').fill('jubileu');
   await page.locator('#id_email').click();
   await page.locator('#id_username').click();
   await page.locator('#id_username').fill('mariajubileu');
   await page.locator('#id_email').click();
   await page.locator('#id_email').fill('Jubileu@gmail.com');
   await page.locator('#id_curso').selectOption('9');
   await page.locator('#id_password').click();
   await page.locator('#id_password').fill('jujuju');
   await page.getByRole('button', { name: ' Salvar' }).click(); 
});




