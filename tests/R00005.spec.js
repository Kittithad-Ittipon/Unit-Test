import { test, expect } from '@playwright/test';
test('R00005', async ({ page }) => {
await page.goto('https://wsr.surin.rmuti.ac.th/html/QuotaWSR/index.php');
await page.getByRole('button', { name: 'สมัครเรียน' }).click();
await page.getByRole('link', { name: '    สมัครเรียน ปีการศึกษา' }).click();
await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').click();
page.once('dialog', dialog => {
console.log(`Dialog message: ${dialog.message()}`);
dialog.dismiss().catch(() => {});
});
await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00005/R00005-1.png'});
await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00005/R00005-2.png'});
});