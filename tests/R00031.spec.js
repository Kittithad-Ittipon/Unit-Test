import { test, expect } from '@playwright/test';
test('R00031', async ({ page }) => {
    await page.goto('https://payment.surin.rmuti.ac.th/');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00031/R00031-1.png'});
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00031/R00031-2.png'});
    await expect(page.locator('#login')).toBeVisible();
});