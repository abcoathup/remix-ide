module.exports = {
  version: '3.8.1',
  baseURL: 'https://selenium-release.storage.googleapis.com',
  drivers: {
    chrome: {
      version: '2.39',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    },
    firefox: {
      version: '0.23.0',
      arch: process.arch,
      baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
    }
  }
}
