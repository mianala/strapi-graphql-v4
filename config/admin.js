module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '91c00deb5da1c6145d2b5b1484a5aa81'),
  },
});
