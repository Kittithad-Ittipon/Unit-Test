import { test, expect } from '@playwright/test';
test('R00028', async ({ page }) => {
    await page.goto('https://payment.surin.rmuti.ac.th/');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00028/R00028-1.png'});
    await page.getByRole('link', { name: 'สมัครสมาชิกใหม่ คลิก' }).click();
    await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    // await expect(page.getByText('กรุณาระบุเลขบัตรประชาชน')).toBeVisible();
    // await expect(page.locator('#member_name-error')).toBeVisible();
    // await expect(page.locator('#member_tell-error')).toBeVisible();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00028/R00028-2.png'});
});