import { test, expect } from '@playwright/test';

test('Editar Matrícula', async ({ page }) => {
  // Recording...
  await page.goto('https://refeitorio.picos.ifpi.edu.br/');
  await page.getByText('☰').click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Usuário').click();
  await page.getByPlaceholder('Usuário').click();
  await page.getByPlaceholder('Usuário').fill('20191tads0326');
  await page.getByPlaceholder('Senha').click();
  await page.getByPlaceholder('Senha').fill('06111994');
  await page.getByPlaceholder('Senha').press('Enter');
  await page.getByRole('link', { name: 'Open Profile Menu' }).click();
  await page.getByRole('link', { name: ' Perfil' }).click();
});

test('editar matricula',async({page})=>{


})