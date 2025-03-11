import { test, expect } from '@playwright/test';
test('R00007', async ({ page }) => {
  await page.goto('https://wsr.surin.rmuti.ac.th/html/QuotaWSR/index.php');
  await page.getByRole('button', { name: 'สมัครเรียน' }).click();
  await page.getByRole('link', { name: '    สมัครเรียน ปีการศึกษา' }).click();
  await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').click();
  await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').fill('1111111111111');
  await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00007/R00007-1.png'});
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00007/R00007-2.png',fullPage:true });
});