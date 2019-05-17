
const DEFAULT_ANDROID_DEVICE_NAME = 'My Android Device';
const DEFAULT_ANDROID_PLATFORM_VERSION = null;

const androidCaps = {
  platformName: 'Android',
  automationName: 'UiAutomator2',
  deviceName: DEFAULT_ANDROID_DEVICE_NAME,
  platformVersion: DEFAULT_ANDROID_PLATFORM_VERSION,
  app: undefined, // Will be added in tests
};

const serverConfig = {
  host: 'localhost',
  port: 4723,
  logLevel: 'info',
};

const androidOptions = Object.assign(
    {
      capabilities: androidCaps,
    },
    serverConfig
);

module.exports = {
  androidOptions,
};
