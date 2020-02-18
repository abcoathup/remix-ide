'use strict'
require('@babel/register')()

module.exports = {
  'src_folders': ['test-browser/tests'],
  'output_folder': 'reports',
  'custom_commands_path': ['test-browser/commands'],
  'custom_assertions_path': '',
  'page_objects_path': '',
  'globals_path': '',

  'selenium': {
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': './node_modules/selenium-standalone/.selenium/chromedriver/2.43-x64-chromedriver',
      'webdriver.gecko.driver': './geckodriver.exe',
      'webdriver.ie.driver': '',
      'webdriver.safari.driver': ''
    }
  },

  'test_settings': {
    'default': {
      'selenium_port': 4444,
      'selenium_host': 'localhost',
      'globals': {
        'waitForConditionTimeout': 10000,
        'asyncHookTimeout': 100000
      },
      'screenshots': {
        'enabled': false,
        'path': ''
      },
      'desiredCapabilities': {
        'browserName': 'firefox',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },

    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'chromeOptions': {
          'args': ['window-size=2560,1440', 'start-fullscreen']
        }
      }
    },

    'safari': {
      'desiredCapabilities': {
        'browserName': 'safari',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },

    'ie': {
      'desiredCapabilities': {
        'browserName': 'internet explorer',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },

    'firefox': {
      'desiredCapabilities': {
        'browserName': 'firefox',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'marionette': false
      }
    }
  }
}
