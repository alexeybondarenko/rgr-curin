const Url = require('url');
const config = require('./config');

const makeScreenshot = (browser, url, path, element = 'body') => {
  browser.url(url)
    .refresh()
    .pause(1000)
    .waitForElementVisible(element)
    .saveScreenshot(path);
};

const test = url => (browser) => {
  const urlObject = Url.parse(url);
  const name = urlObject.host;
  const hostname = urlObject.host;
  // 1. get screenshot of website
  makeScreenshot(browser, url, `./screenshots/${name}/1.0.screenshot.png`);
  // 2. get screenshot of push2check.net
  makeScreenshot(browser, `http://push2check.net/${hostname}`, `./screenshots/${name}/1.1.push2check.png`, '#domain_ip');
  makeScreenshot(browser,
    `https://www.google.com.ua/search?q=site:+${url}`,
    `./screenshots/${name}/1.2.googleSite.png`,
    '#sfdiv'
  );
  makeScreenshot(browser,
    `https://ru.majestic.com/reports/site-explorer?q=${url}&oq=${url}&IndexDataSource=F`,
    `./screenshots/${name}/1.3.majestic.png`
  );
  // 2. scholar.google
  makeScreenshot(browser,
    `https://scholar.google.com.ua/scholar?q=site:+${url}`,
    `./screenshots/${name}/2.1.googleSite.png`,
    '#gs_hdr'
  );
  // 3. calculate rich files
  makeScreenshot(browser,
    `https://www.google.com.ua/search?q=site:+${url}+filetype:doc`,
    `./screenshots/${name}/3.1.google-doc.png`,
    '#sfdiv'
  );
  makeScreenshot(browser,
    `https://www.google.com.ua/search?q=site:+${url}+filetype:ppt`,
    `./screenshots/${name}/3.1.google-ppt.png`,
    '#sfdiv'
  );
  makeScreenshot(browser,
    `https://www.google.com.ua/search?q=site:+${url}+filetype:ps`,
    `./screenshots/${name}/3.1.google-ps.png`,
    '#sfdiv'
  );

  browser.end();
}

module.exports = config.sites.reduce((prev, i) => {
  prev[i] = test(i);
  return prev;
}, {});
console.log(module.exports);
