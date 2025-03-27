import  { test, expect } from './axeHelper.ts';

test('example using custom fixture', async ({ page, makeAxeBuilder }) => {
  await page.goto('https://youtube.com');

  const accessibilityScanResults = await makeAxeBuilder()
      .include('#masthead')
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});