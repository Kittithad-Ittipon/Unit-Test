import { test, expect } from '@playwright/test';
test('R00002', async ({ page }) => {
    await page.goto('https://wsr.surin.rmuti.ac.th/html/QuotaWSR/index.php');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00002/R00002-1.png'});
    await page.getByRole('button', { name: 'สมัครเรียน' }).click();
    await expect(page.getByRole('link', { name: '    สมัครเรียน ปีการศึกษา' })).toBeVisible();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00002/R00002-2.png'});
});