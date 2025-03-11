import { test, expect } from '@playwright/test';
test('R00018', async ({ page }) => {
    await page.goto('https://wsr.surin.rmuti.ac.th/html/QuotaWSR/index.php');
    await page.getByRole('button', { name: 'สมัครเรียน' }).click();
    await page.getByRole('link', { name: '    สมัครเรียน ปีการศึกษา' }).click();
    await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').click();
    await page.getByPlaceholder(' กรุณากรอกเลชบัตรบัตรประชาชน / ID Card ').fill('1329901173961');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByRole('button', { name: ' คุณณัฐวุฒิ' }).click();
    await page.getByRole('link', { name: '    ประวัติข้อมูลผู้สมัคร' }).click();
    await page.getByPlaceholder('  ขยัน  ').click();
    await page.getByPlaceholder('หมั่นเรียน').click();
    await page.getByPlaceholder('    เบอร์โทรศัพท์ที่สามารถติดต่อได้ 00-0000-0000  ').click();
    await page.getByPlaceholder('  สาขาที่สำเร็จการศึกษา  / กำลังศึกษา ').click();
    await page.getByPlaceholder(' สถาบันศึกษาที่จบ / กำลังศึกษา ').click();
    await page.locator('#ddlProvince').selectOption('บุรีรัมย์');
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    });
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00018/R00018-1.png'});
    await page.getByRole('button', { name: 'บันทึกแก้ไข' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00018/R00018-2.png',fullPage:true });
});