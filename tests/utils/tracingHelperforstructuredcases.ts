//@ts-nocheck
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { BrowserContext } from '@playwright/test';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function startTracing(context: BrowserContext, name: string): Promise<() => Promise<void>> {
  const traceDir = path.join(__dirname, '../trace/Restructured_cases');
  if (!fs.existsSync(traceDir)) fs.mkdirSync(traceDir, { recursive: true });

  // ✅ Only start tracing if it's not already started
  try {
    await context.tracing.start({ screenshots: true, snapshots: true });
  } catch (error) {
    if (String(error).includes('already started')) {
      console.warn(`⚠️ Tracing already started for context: ${name}`);
    } else {
      throw error; // rethrow if it's another issue
    }
  }

  // Return a stop function
  return async () => {
    try {
      await context.tracing.stop({ path: path.join(traceDir, `${name}.zip`) });
    } catch (error) {
      console.warn(`⚠️ Could not stop tracing for ${name}: ${error}`);
    }
  };
}

