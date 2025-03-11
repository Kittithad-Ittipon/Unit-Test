import { test, expect } from '@playwright/test';
test('R00009', async ({ page }) => {
  await page.goto('https://wsr.surin.rmuti.ac.th/html/QuotaWSR/index.php');
  await page.getByRole('button', { name: 'สมัครเรียน' }).click();
  await page.getByRole('link', { name: '    สมัครเรียน ปีการศึกษา' }).click();
  await page.locator('.mat-form-field-infix').click();
  await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').fill('1101801346531');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('input[name="sex"]').first().check();
  await page.locator('input[name="sex"]').nth(1).check();
  await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00009/R00009-1.png'});
  await page.locator('input[name="sex"]').nth(2).check();
  await page.locator('input[name="sex"]').first().check();
  await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00009/R00009-2.png'});
  await expect(page.getByText('คำนำหน้า * : นาย นาง นางสาว')).toBeVisible();
});