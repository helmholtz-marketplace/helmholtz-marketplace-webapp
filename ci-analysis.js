const sonarqubeScanner = require('sonarqube-scanner'); // eslint-disable-line import/no-extraneous-dependencies

sonarqubeScanner(
  {
    serverUrl: 'https://sonar.desy.de',
    token: process.env.SONAR_AUTH_TOKEN,
    options: {
      'sonar.projectKey': 'de.helmholtz.marketplace.hifis-marketplace',
      'sonar.projectName': 'Helmholtz Marketplace Web App',
      'sonar.sources': 'src',
      'sonar.projectVersion': '0.0.1',
      'sonar.language': 'js',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.exclusions': 'src/**/*.spec.js',
      'sonar.test.inclusions': 'src/**/*.spec.js',
      'sonar.coverage.exclusions':
        'src/**/*.spec.js,src/**/*.mock.js,node_modules/*,coverage/lcov-report/*',
    },
  },
  () => process.exit(),
);
