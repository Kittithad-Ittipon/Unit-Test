import { test, expect } from '@playwright/test';
test('R00003', async ({ page }) => {
    await page.goto('https://wsr.surin.rmuti.ac.th/html/QuotaWSR/index.php');
    await page.getByRole('button', { name: 'สมัครเรียน' }).click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00003/R00003-1.png'});
    await page.getByRole('link', { name: '    สมัครเรียน ปีการศึกษา' }).click();
    await expect(page.getByRole('button', { name: 'สมัครเรียน' })).toBeVisible();
    await page.getByRole('button', { name: 'สมัครเรียน' }).click();
    await page.getByText('ปีการศึกษา 2568 สมัครเรียน : กรอกเลขบัตรประชาชน / ID Card').click();
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00003/R00003-2.png'});
});