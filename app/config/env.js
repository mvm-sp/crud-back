const env = {
  database: 'todo',
  username: 'postgres',
  password: 'TjYz3m',
  host: '172.16.16.118',
  port: 5432, 
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;
