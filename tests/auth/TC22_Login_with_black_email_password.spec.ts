// @ts-nocheck
import { test, expect } from '@playwright/test';
import { GoQuantMain } from '../../pages/GoQuantMainTs';
//import { startTracing } from '../utils/tracingHelperforstructuredcases';

//----------------------TC22_Login_with_blank_email_password[WIP]-------------------------------------------
test('Sign in with blank email, password @auth', async ({ browser }) => {
  const context = await browser.newContext();
  // const stopTrace = await startTracing(context, 'TC22_Login_with_black_email_password');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  // Sign in / login with black email / password 
  await gqMain.loginwithblankEmailPassword('', '');
  // await stopTrace();
});