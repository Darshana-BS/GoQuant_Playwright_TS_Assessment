// @ts-nocheck
import { test, expect } from '@playwright/test';
import { GoQuantMain } from '../../pages/GoQuantMainTs';
//import { startTracing } from '../utils/tracingHelperforstructuredcases';

//-----------------------------TC12_Kill-Edge[Passed]--------------------------------
test('Kill-Edge for orders @dashboard', async({browser})=>{
  const context = await browser.newContext();
  // const stopTrace = await startTracing(context, 'TC12_kill-edge');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Kill edge
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.killedge();
  // await stopTrace();
})