// @ts-nocheck
import { test, expect } from '@playwright/test';
import { GoQuantMain } from '../../pages/GoQuantMainTs';
//import { startTracing } from '../utils/tracingHelperforstructuredcases';

//-----------------------------TC16_Place_Short_Sell_order[Passed]--------------------------------
test('Place a short / sell order', async({browser})=>{
  const context = await browser.newContext();
  // const stopTrace = await startTracing(context, 'TC16_Place_Short_Sell_order');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //place short / sell order 
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.placeOKXSellOrder('2');
  // await stopTrace();
})
