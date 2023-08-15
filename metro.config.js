const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
};

module.exports = (async () => {
  // Get the default config from the getDefaultConfig function
  const defaultConfig = await getDefaultConfig(__dirname);

  // Use the sourceExts and assetExts from the default config
  const {
    resolver: {sourceExts, assetExts},
  } = defaultConfig;

  // Add svg to the sourceExts and remove it from the assetExts
  const resolver = {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  };

  // Merge the default config with the custom config and return it
  return mergeConfig(defaultConfig, {...config, resolver});
})();
