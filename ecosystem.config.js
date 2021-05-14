module.exports = {
  apps : [{
    name: 'mqtt-nodejs-database',
    script: 'index.js',
    watch: '.',
    ignore_watch : [
      "node_modules",
    ],
  }],
};
