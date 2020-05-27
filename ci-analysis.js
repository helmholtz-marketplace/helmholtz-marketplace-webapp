const sonarqubeScanner = require('sonarqube-scanner'); // eslint-disable-line import/no-extraneous-dependencies

sonarqubeScanner(
  {
    serverUrl: 'https://sonar.desy.de',
    token: process.env.SONAR_AUTH_TOKEN,
    options: {
      'sonar.projectKey': 'hifis-ui',
      'sonar.sources': 'src',
    },
  },
  () => process.exit(),
);
