// @ts-nocheck
import { test, expect } from '@playwright/test';
import { GoQuantMain } from '../../pages/GoQuantMainTs';
//import { startTracing } from '../utils/tracingHelperforstructuredcases';

//-----------------------------TC_20_Logout_User_[Passed]--------------------------------
test('Log out of account @auth @logout', async ({browser})=> {
  const context = await browser.newContext();
  // const stopTrace = await startTracing(context, 'TC20_Logout');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Log out from account
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi')
  await gqMain.logout();
  // await stopTrace();
})