import { test, expect } from '@playwright/test';
test('R00032', async ({ page }) => {
    await page.goto('https://payment.surin.rmuti.ac.th/');
    await page.locator('#login').click();
    await page.locator('#login').fill('1329901205');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00032/R00032-1.png'});
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page.getByText('ไม่พบรายชื่อ')).toBeVisible();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00032/R00032-2.png'});
    await page.locator('#login').click();
    await page.locator('#login').fill('13299012053077');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00032/R00032-3.png'});
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page.getByText('ไม่พบรายชื่อ')).toBeVisible();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00032/R00032-4.png'});
});