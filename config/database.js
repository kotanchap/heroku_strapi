module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-52-200-215-149.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd4kr59r7tfdbo1'),
      user: env('DATABASE_USERNAME', 'qbbfywzthwtnaj'),
      password: env('DATABASE_PASSWORD', '76fb330c5636623ce2969cf19afbd32d9b376917630363e6eeca7576e78da47a'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
