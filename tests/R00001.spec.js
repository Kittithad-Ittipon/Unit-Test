import { test, expect } from '@playwright/test';
test('R00001', async ({ page }) => {
    await page.goto('https://wsr.surin.rmuti.ac.th/html/QuotaWSR/index.php');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00001/R00001-1.png'});
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'คู่มือการสมัครเรียน' }).click();
    await page.waitForTimeout(10000);
    const page1 = await page1Promise;
    await expect(page1.getByRole('heading', { name: 'สมัครเรียน RMUTI SURIN' }).locator('yt-formatted-string')).toBeVisible();
    await page1.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00001/R00001-2.png'});
});