import { test, expect } from '@playwright/test';
test('R00023', async ({ page }) => {
    await page.goto('https://www.surin.rmuti.ac.th/staff/index.php');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00023/R00023-1.png'});
    await expect(page.locator('iframe[name="headline"]').first().contentFrame().getByRole('link', { name: 'ประกาศรับสมัครนักศึกษา' })).toBeVisible();
    const page1Promise = page.waitForEvent('popup');
    await page.locator('iframe[name="headline"]').first().contentFrame().getByRole('link', { name: 'ประกาศรับสมัครนักศึกษา' }).click();
    const page1 = await page1Promise;
    // await page1.screenshot({  path: 'C:/Automation-Test/automation_github/img/R00023/R00023-2.png', fullPage: true });
});
