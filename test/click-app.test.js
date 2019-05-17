
const webdriverio = require('webdriverio');
const androidOptions = require('../helpers/caps').androidOptions;
const app = require('../helpers/app').androidApiDemos;
const assert = require('chai').assert;

androidOptions.capabilities.app = app;

describe('Click text App test', () => {
  let client;
  before(async () => {
    client = await webdriverio.remote(androidOptions);
    console.log(client);
  });
  after(async () => {
    await client.deleteSession();
  });
  it('should see text activity', async () => {
    const res = await client.status();
    assert.isObject(res.build);

    const currentPackage = await client.getCurrentPackage();
    assert.equal(currentPackage, 'io.appium.android.apis');

    const element = await client.findElement('accessibility id', 'App');
    await client.elementClick(element.ELEMENT);

    const activityElement = await client.findElement(
        'accessibility id', 'Activity');
    assert.equal(true, await client.isElementDisplayed(activityElement.ELEMENT))
  });
});
