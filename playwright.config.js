module.exports = {
  testDir: 'e2e-tests',
  /* Shared settings for all the browsers */
  use: {
    baseURL: 'http://localhost:5000',
    // trace: 'on',
  },
  /* Reporters */
  reporter: [['list']],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:5000',
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe',
  },
}
