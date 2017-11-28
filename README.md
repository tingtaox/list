# list
list view

# How to integrate scss loader in webpack 3
Carefully read the documentation on sass-loader and extract-text-webpack-plugin
https://github.com/webpack-contrib/sass-loader
https://github.com/webpack-contrib/extract-text-webpack-plugin

A potential problem:
https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/503

Notes:
- Local development
  - Webpack-dev-server will serve the files in the current directory, unless you configure a specific content base. If you don't specify content base, the current directory would be the root directory. Webpack-dev-server will find index.html (entry point) for your webapp.
  webpack-dev-server --content-base build/
  Then webpack-dev-server will find index.html in build/

  - For React app, as you pack javascript and css into bundle, script and link tag for js and css bundle is essential. Also, the app entry point <div id="example"></div> for React to render the UI is essential.