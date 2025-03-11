import { test, expect } from '@playwright/test';
test('R00033', async ({ page }) => {
    await page.goto('https://payment.surin.rmuti.ac.th/');
    await page.locator('#login').click();
    await page.locator('#login').fill('1329901205307');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00033/R00033-1.png'});
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00033/R00033-2.png'});
    await page.getByRole('link', { name: 'คลิก' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00033/R00033-3.png'});
    await expect(page.getByRole('heading', { name: 'แจ้งชำระเงิน' })).toBeVisible();
    await expect(page.getByRole('link', { name: ' แจ้งชำระเงิน' })).toBeVisible();
});