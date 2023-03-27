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
