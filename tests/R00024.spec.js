import { test, expect } from '@playwright/test';
test('R00024', async ({ page }) => {
    await page.goto('https://www.surin.rmuti.ac.th/staff/index.php');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00024/R00024-1.png'});
    await page.locator('iframe[name="headline"]').first().contentFrame().locator('.link_icon_4 > div > center').first().click();
    await expect(page.getByText('อัตราค่าธรรมเนียมการศึกษา สำหรับนักศึกษาใหม่')).toBeVisible();
    await page.waitForTimeout(4000);
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00024/R00024-2.png'});
});