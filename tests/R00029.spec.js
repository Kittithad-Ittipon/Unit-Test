import { test, expect } from '@playwright/test';
test('R00029', async ({ page }) => {
    await page.goto('https://payment.surin.rmuti.ac.th/');
    await page.getByRole('link', { name: 'สมัครสมาชิกใหม่ คลิก' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00029/R00029-1.png'});
    await page.locator('#member_citizen_id').click();
    await page.locator('#member_citizen_id').fill('1329901205307');
    await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    await expect(page.getByText('บัญชีนี้ถูกใช้งานแล้ว')).toBeVisible();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00029/R00029-2.png'});
});