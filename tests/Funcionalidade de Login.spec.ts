// @ts-check
const { test, expect } = require('@playwright/test');


test('Login no sistema com matricula/email e senha já com cadastros', async ({ page }) => {
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.getByText('☰').click();
await page.getByRole('link', { name: 'Login' }).click();
await page.getByPlaceholder('Usuário').click();
await page.getByPlaceholder('Usuário').fill('20191tads0326');
await page.getByPlaceholder('Senha').click();
await page.getByPlaceholder('Senha').fill('06111994');
await page.getByRole('button', { name: 'Login' }).click();
});

test(' Login no sistema com email/matrícula senha sem cadastro',async({page})=>{
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.getByText('☰').click();
await page.getByRole('link', { name: 'Login' }).click();
await page.getByPlaceholder('Usuário').click();
await page.getByPlaceholder('Usuário').fill('2018tads0987');
await page.getByPlaceholder('Senha').click();
await page.getByPlaceholder('Senha').fill('qualquersenha');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByText('× Por favor, entre com um Matricula e senha corretos. Note que ambos os campos d').click();
});

test('Login com matricula/e-mail inválidos',async({page})=>{
    await page.goto('https://refeitorio.picos.ifpi.edu.br/');
    await page.getByText('☰').click();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByPlaceholder('Usuário').click();
    await page.getByPlaceholder('Usuário').fill('2190260909909ds');
    await page.getByPlaceholder('Senha').click();
    await page.getByPlaceholder('Senha').fill('423424344');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('× Por favor, entre com um Matricula e senha corretos. Note que ambos os campos d').click();
});

test(' Login com senha inválida',async({page})=>{
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.getByText('☰').click();
await page.getByRole('link', { name: 'Login' }).click();
await page.getByPlaceholder('Usuário').click();
await page.getByPlaceholder('Usuário').fill('20191tads0326');
await page.getByPlaceholder('Senha').click();
await page.getByPlaceholder('Senha').fill('123456');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByText('× Por favor, entre com um Matricula e senha corretos. Note que ambos os campos d').click();
});

test('Login com  campo da senha vazios',async({page})=>{
await page.goto('https://refeitorio.picos.ifpi.edu.br/');
await page.getByText('☰').click();
await page.getByRole('link', { name: 'Login' }).click();
await page.getByPlaceholder('Usuário').click();
await page.getByPlaceholder('Usuário').fill('20191tads0326');
await page.getByPlaceholder('Senha').click();
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('button', { name: 'Login' }).click();
await page.locator('div').filter({ hasText: 'Login' }).nth(4).click();
})

test('Login com  campo da Matricula/email vazios',async({page})=>{
  await page.goto('https://refeitorio.picos.ifpi.edu.br/');
  await page.getByText('☰').click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Senha').click();
  await page.getByPlaceholder('Senha').fill('1284959');
  await page.getByRole('button', { name: 'Login' }).click();  
})