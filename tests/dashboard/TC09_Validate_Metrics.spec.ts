// @ts-nocheck
import { test, expect } from '@playwright/test';
import { GoQuantMain } from '../../pages/GoQuantMainTs';
//import { startTracing } from '../utils/tracingHelperforstructuredcases';

//-----------------------------TC09_validation_Metrics_[Passed]--------------------------------
test('Validate Metrics @dashboard',  async({browser})=>{
  const context = await browser.newContext();
  // const stopTrace = await startTracing(context, 'TC09_validate_metrics');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //validate metrics
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.validateMetrics();
  // await stopTrace();
})