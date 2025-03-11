import { test, expect } from '@playwright/test';
test('R00030', async ({ page }) => {
    await page.goto('https://payment.surin.rmuti.ac.th/');
    await page.locator('#login').click();
    await page.locator('#login').fill('1329901205307');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00030/R00030-1.png'});
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page.getByRole('link', { name: 'Payment Rmuti Surin' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00030/R00030-2.png'});
});