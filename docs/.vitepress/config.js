// ./docs/.vitepress/config.js

module.exports = {
    base: '/tw-text-palette-default/',
    title: '@obewds/tw-text-palette-default',
    description: 'A documentation site for the TwTextPaletteDefault component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/tw-text-palette-default" },
            { text: "GitHub", link: "https://github.com/obewds/tw-text-palette-default" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
