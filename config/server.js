module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'http://ec2-54-197-206-4.compute-1.amazonaws.com',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5cf56d83ce23884f3cf70bb6b98f82ea'),
    },
  },
});
