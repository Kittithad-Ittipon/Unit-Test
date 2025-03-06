// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

var user_id; 
// การทดสอบ api get
test('Get user', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    const body = await response.json();
    console.log(response);
    console.log(body);
    expect(response.status()).toBe(200);
});
// การทดสอบ api post
test('login', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/login' , {
        data :{ "email": "eve.holt@reqres.in" , "password": "cityslicka"},
        headers: {"Accept" : "application/json"}
    });
    // console.log(response1);
    expect(response.status()).toBe(200);
    var res = await response.json();
    var token = res.token
    // console.log(res);
    console.log('token is :'+token);

});
// การทดสอบ api post
test('show id', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users' , {
        data :{ "name": "morpheus", "job": "leader"},
        headers: {"Accept" : "application/json"}
    });
    expect(response.status()).toBe(201);
    var res = await response.json();
    user_id = res.id
    console.log('id is :'+user_id);
});
test('put', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2' , {
        data :{ "name": "Kit", "job": "people"},
        headers: {"Accept" : "application/json"}
    });
    var res = await response.json();
    console.log("res is : "+res.name +" "+ res.job);
    expect(response.status()).toBe(200);
});
test('del', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
});