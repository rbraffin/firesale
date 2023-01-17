module.exports = {
  packagerConfig: {
    "executableName": "firesale"
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'Test Dude',
          homepage: 'https://example.com'
        }
      }
    }
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Test Dude',
          name: 'firesale'
        },
        prerelease: true
      }
    }
  ]
};
