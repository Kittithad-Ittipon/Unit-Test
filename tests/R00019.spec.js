import { test, expect } from '@playwright/test';
test('R00019', async ({ page }) => {
    await page.goto('https://wsr.surin.rmuti.ac.th/html/QuotaWSR/index.php');
    await page.getByRole('button', { name: 'สมัครเรียน' }).click();
    await page.getByRole('link', { name: '    สมัครเรียน ปีการศึกษา' }).click();
    await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').click();
    await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').fill('1329901173961');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByRole('button', { name: ' คุณณัฐวุฒิ' }).click();
    await page.getByRole('link', { name: '    ประวัติข้อมูลผู้สมัคร' }).click();
    await page.getByPlaceholder('  สาขาที่สำเร็จการศึกษา  / กำลังศึกษา ').click();
    await page.getByPlaceholder('  สาขาที่สำเร็จการศึกษา  / กำลังศึกษา ').fill('');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00019/R00019-1.png'});
    await expect(page.getByPlaceholder('  สาขาที่สำเร็จการศึกษา  / กำลังศึกษา ')).toBeVisible();
    await expect(page.getByRole('button', { name: 'บันทึกแก้ไข' })).toBeVisible();
    await page.getByRole('button', { name: 'บันทึกแก้ไข' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00019/R00019-2.png',fullPage:true });
});