module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '14384b8ad80e29d191e4bc4128f2d74a'),
  },
});
