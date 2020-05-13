const sonarqubeScanner = require('sonarqube-scanner'); // eslint-disable-line import/no-extraneous-dependencies

sonarqubeScanner(
  {
    serverUrl: 'https://sonar.desy.de',
    token: 'd15c08bfbf2c09f652bc4184a39138c9415374d4',
    options: {
      'sonar.projectKey': 'hifis-ui',
      'sonar.sources': 'src',
    },
  },
  () => process.exit(),
);
