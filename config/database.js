const path = require('node:path');
module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');
  return {
    connection: {
      client,
      connection:
        client === 'sqlite'
          ? { filename: path.resolve(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')) }
          : {
              connectionString: env('DATABASE_URL'),
              ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: true } : false,
            },
      useNullAsDefault: true,
    },
  };
};
