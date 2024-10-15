module.exports = {
  apps: [
    {
      name: "mockoon-server",
      script: "mockoon-cli",
      args: "start --data mockoon-environment.json --port 3001",
      watch: false
    }
  ]
};