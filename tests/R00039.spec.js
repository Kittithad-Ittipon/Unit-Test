import { test, expect } from '@playwright/test';
test('R00039', async ({ page }) => {
    await page.goto('https://payment.surin.rmuti.ac.th/');
    await page.locator('#login').click();
    await page.locator('#login').fill('1329901205307');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00039/R00039-1.png'});
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00039/R00039-2.png'});
    await page.getByRole('link', { name: ' Logout' }).click();
    await expect(page.getByText('ออกจากระบบ')).toBeVisible();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00039/R00039-3.png'});
});