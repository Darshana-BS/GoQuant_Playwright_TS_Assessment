// @ts-nocheck
import { test, expect } from '@playwright/test';
import { GoQuantMain } from '../../pages/GoQuantMainTs';
//import { startTracing } from '../utils/tracingHelperforstructuredcases';

//-----------------------------TC_06_Place_Binance_usdm_Order_[FAIL]--------------------------------
test('Place Binance USDM order @order', async ({browser})=> {
  const context = await browser.newContext();
  // const stopTrace = await startTracing(context, 'TC06_Place_Binance_USDM_Order');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Place OKX Market Order
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.placeBinace_USDM_DOTUSDTOrder_Spot('2','2');
  // await stopTrace();
})