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