import { test, expect } from '@playwright/test';
test('R00022', async ({ page }) => {
    await page.goto('https://wsr.surin.rmuti.ac.th/html/QuotaWSR/index.php');
    const page1Promise = page.waitForEvent('popup');
    await page.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00022/R00022-1.png'});
    await page.getByRole('link', { name: 'ดูรายละเอียดสมัครเรียนออนไลน์' }).click();
    const page1 = await page1Promise;
    await expect(page1.getByText('รับสมัครนักศึกษา')).toBeVisible();
    await expect(page1.getByText('มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตสุรินทร์')).toBeVisible();
    await expect(page1.getByText('ติดต่อสอบถามรายละเอียดเพิ่มเติม +6685-6603080 www.surin.rmuti.ac.th')).toBeVisible();
    await page1.screenshot({ path: 'C:/Automation-Test/automation_github/img/R00022/R00022-2.png'});
});