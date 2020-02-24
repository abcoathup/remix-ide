const EventEmitter = require('events')

class ExecuteScript extends EventEmitter {
  command (script) {
    const runtimeBrowser = this.api.capabilities.browserName

    this.api
      .clearValue('*[data-id="terminalCliInput"]')
      .click('*[data-id="terminalCli"]')
    if (runtimeBrowser === 'firefox') {
      this.api.sendKeys('*[data-id="terminalCliInput"]', script)
      .sendKeys('*[data-id="terminalCliInput"]', this.api.Keys.ENTER)
      .sendKeys('*[data-id="terminalCliInput"]', this.api.Keys.ENTER)
    } else {
      this.api.keys(script)
      .keys(this.api.Keys.ENTER)
      .keys(this.api.Keys.ENTER) // that's a bug... sometimes we need to press 2 times to execute a command
    }
    this.api.perform(() => {
      this.emit('complete')
    })
    return this
  }
}

module.exports = ExecuteScript
