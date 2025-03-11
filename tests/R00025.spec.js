import { test, expect } from '@playwright/test';
test('R00025', async ({ page }) => {
    await page.goto('https://www.surin.rmuti.ac.th/staff/index.php');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00025/R00025-1.png'});
    await page.locator('iframe[name="headline"]').first().contentFrame().locator('.link_icon_5 > div > center').first().click();
    await expect(page.getByRole('heading', { name: 'Sign In Payment Rmuti Surin' })).toBeVisible();
    await expect(page.getByText('ระบบรับแจ้งการโอนเงิน มทร.อีสาน วข.สุรินทร์')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'บัญชีแจ้งชำระ' })).toBeVisible();
    await page.waitForTimeout(4000);
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00025/R00025-2.png'});
});