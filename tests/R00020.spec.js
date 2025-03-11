import { test, expect } from '@playwright/test';
test('R00020', async ({ page }) => {
    await page.goto('https://wsr.surin.rmuti.ac.th/html/QuotaWSR/index.php');
    await page.getByRole('button', { name: 'สมัครเรียน' }).click();
    await page.getByRole('link', { name: '    สมัครเรียน ปีการศึกษา' }).click();
    await page.locator('.mat-form-field-infix').click();
    await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').fill('1329901173961');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByRole('button', { name: ' คุณณัฐวุฒิ' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00020/R00020-1.png'});
    await expect(page.getByRole('link', { name: '    ออกจากระบบ' })).toBeVisible();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00020/R00020-2.png'});
    });