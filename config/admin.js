module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4797d5d234c635bdd0b053929a639677'),
  },
});
