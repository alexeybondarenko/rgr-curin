const config = {
  src_folders: [
    'index.js',
  ],
  custom_commands_path: '',
  custom_assertions_path: '',
  globals_path: './globals.js',
  disable_colors: false,
  selenium: {
    start_process: false,
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
    server_path: '',
    cli_args: {
      'webdriver.chrome.driver': '',
      'webdriver.ie.driver': '',
      'webdriver.firefox.profile': '',
    },
  },
  test_workers: {
    enabled: true,
    workers: 'auto',
  },
  test_settings: {
    default: {
      skip_testcases_on_fail: false,
      silent: true,
      selenium: {
        start_process: true,
        server_path: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.0.1.jar',
        cli_args: {
          'webdriver.chrome.driver': './node_modules/chromedriver/lib/chromedriver/chromedriver',
        },
      },
      screenshots: {
        enabled: false,
        path: '',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        "chromeOptions": {
          "args": ["window-size=1280,800", "disable-web-security", "test-type"]
        },
      },
    },
  },
};

let item;
Object.keys(config.test_settings).forEach((i) => {
  item = config.test_settings[i];
  item.selenium_host = config.selenium.host;
  item.selenium_port = config.selenium.port;
});

module.exports = config;
