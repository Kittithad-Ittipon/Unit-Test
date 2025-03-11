import { test, expect } from '@playwright/test';
test('R00027', async ({ page }) => {
    await page.goto('https://payment.surin.rmuti.ac.th/');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00027/R00027-1.png'});
    await page.getByRole('link', { name: 'สมัครสมาชิกใหม่ คลิก' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00027/R00027-2.png'});
    await page.locator('#member_citizen_id').click();
    await page.locator('#member_citizen_id').fill('3320100654462');
    await page.locator('#member_name').click();
    await page.locator('#member_name').fill('สุนทร สวนเพชร');
    await page.locator('#member_tell').click();
    await page.locator('#member_tell').fill('-');
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00027/R00027-3.png'});
    await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00027/R00027-4.png'});
    await expect(page.getByRole('link', { name: 'Payment Rmuti Surin' })).toBeVisible();
});