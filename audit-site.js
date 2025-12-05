const puppeteer = require('puppeteer');

async function auditSite() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const baseUrl = 'https://ross-sylvester.github.io/sam/';
  const pages = [
    { name: 'home', url: baseUrl },
    { name: 'apply', url: baseUrl + 'apply.html' },
    { name: 'login', url: baseUrl + 'login.html' }
  ];
  
  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 812 }
  ];
  
  console.log('Starting SAM website audit...\n');
  
  for (const p of pages) {
    for (const vp of viewports) {
      console.log(`Auditing ${p.name} on ${vp.name} (${vp.width}x${vp.height})...`);
      
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(p.url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait for fonts and animations
      await page.evaluate(() => document.fonts.ready);
      await new Promise(r => setTimeout(r, 500));
      
      // Take screenshot
      const filename = `audit-${p.name}-${vp.name}.png`;
      await page.screenshot({ path: filename, fullPage: true });
      console.log(`  Screenshot saved: ${filename}`);
    }
  }
  
  console.log('\nAudit complete! Screenshots saved.');
  await browser.close();
}

auditSite().catch(console.error);

