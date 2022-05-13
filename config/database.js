module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'heroku_strapi'),
      user: env('DATABASE_USERNAME', 'kotan'),
      password: env('DATABASE_PASSWORD', 'Shychap308128576!!!'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
