module.exports = {
  apps: [
    {
      name: "app",
      script: "npm",
      args: "start",
    },
  ],

  deploy: {
    production: {
      user: "ubuntu",
      host: "51.254.116.139",
      ref: "origin/main",
      repo: "https://github.com/pjsebastien/strapi-test.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
