import { test, expect } from '@playwright/test';
test('R00038', async ({ page }) => {
    await page.goto('https://payment.surin.rmuti.ac.th/');
    await page.locator('#login').click();
    await page.locator('#login').fill('1329901205307');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00038/R00038-1.png'});
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00038/R00038-2.png'});
    await page.getByRole('link', { name: ' ประวัติส่วนตัว' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00038/R00038-3.png'});
    await page.locator('#member_name').click();
    await page.locator('#member_name').fill('');
    await page.locator('#member_tell').click();
    await page.locator('#member_tell').fill('');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00038/R00038-4.png'});
    await page.getByRole('button', { name: 'ปรับปรุงข้อมูล' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00038/R00038-5.png'});
});