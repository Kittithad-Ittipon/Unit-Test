import { test, expect } from '@playwright/test';
test('R00026', async ({ page }) => {
    await page.goto('https://payment.surin.rmuti.ac.th/');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00026/R00026-1.png'});
    await page.getByRole('link', { name: 'สมัครสมาชิกใหม่ คลิก' }).click();
    await expect(page.getByRole('heading', { name: 'Register Payment Rmuti Surin' })).toBeVisible();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00026/R00026-2.png'});
});