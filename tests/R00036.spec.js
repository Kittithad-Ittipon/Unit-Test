import { test, expect } from '@playwright/test';
test('R00036', async ({ page }) => {
    await page.goto('https://payment.surin.rmuti.ac.th/');
    await page.locator('#login').click();
    await page.locator('#login').fill('1329901205307');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00036/R00036-1.png'});
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00036/R00036-2.png'});
    await page.getByRole('link', { name: ' ประวัติส่วนตัว' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00036/R00036-3.png'});
    await expect(page.getByRole('heading', { name: 'ประวัติส่วนตัว' })).toBeVisible();
});