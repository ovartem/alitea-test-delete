import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('opens Client Work from the Services page', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    await page.getByRole('link', { name: 'Services', exact: true }).last().click();
    await expect(page).toHaveURL('https://www.epam.com/services');

    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    await expect(page).toHaveURL('https://www.epam.com/services/client-work');
    await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
  });
});
