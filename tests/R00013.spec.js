import { test, expect } from '@playwright/test';
test('R00013', async ({ page }) => {
    await page.goto('https://wsr.surin.rmuti.ac.th/html/QuotaWSR/index.php');
    await page.getByRole('button', { name: 'สมัครเรียน' }).click();
    await page.getByRole('link', { name: '    สมัครเรียน ปีการศึกษา' }).click();
    await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').click();
    await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').fill('1101801346531');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.locator('input[name="edu"]').first().check();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00013/R00013-1.png'});
    await page.locator('input[name="edu"]').nth(1).check();
    await page.locator('input[name="edu"]').nth(2).check();
    await page.locator('input[name="edu"]').nth(3).check();
    await page.locator('input[name="edu"]').nth(4).check();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00013/R00013-2.png'});
    await expect(page.locator('input[name="edu"]').nth(2)).toBeVisible();
    await expect(page.locator('input[name="edu"]').nth(1)).toBeVisible();
    await expect(page.locator('mat-form-field').filter({ hasText: 'ม.6' }).locator('div').nth(2)).toBeVisible();
});