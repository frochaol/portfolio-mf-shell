const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
	name: 'mf-shell',
	remotes: {},

	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
	}
});
