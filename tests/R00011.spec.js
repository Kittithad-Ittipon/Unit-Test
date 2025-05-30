import { test, expect } from '@playwright/test';
test('R00011', async ({ page }) => {
    await page.goto('https://wsr.surin.rmuti.ac.th/html/QuotaWSR/index.php');
    await page.getByRole('button', { name: 'สมัครเรียน' }).click();
    await page.getByRole('link', { name: '    สมัครเรียน ปีการศึกษา' }).click();
    await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').click();
    await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').fill('1101801346531');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByPlaceholder('  ขยัน  ').click();
    await page.getByPlaceholder('หมั่นเรียน').click();
    await page.locator('div:nth-child(7) > .col-12 > mat-form-field > div > div > div > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    await page.locator('div:nth-child(8) > div > mat-form-field > div > div > div > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').first().click();
    await page.locator('div:nth-child(9) > .col-12 > mat-form-field > div > div > div > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    await page.locator('input[name="edu"]').first().check();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00010/R00010-1.png'});
    await page.getByRole('button', { name: 'ลงทะเบียน' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00010/R00010-2.png'});
    await page.locator('#tt13').click();
    await page.locator('div:nth-child(7) > .col-12 > mat-form-field > div > div > div > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    await expect(page.locator('#tt13')).toBeVisible();
    await page.getByText('โปรดกรอกเบอร์โทรศัพท์ติดต่อให้ถูกต้อง').click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00010/R00010-3.png'});
    await expect(page.getByText('โปรดกรอกเบอร์โทรศัพท์ติดต่อให้ถูกต้อง')).toBeVisible();
});