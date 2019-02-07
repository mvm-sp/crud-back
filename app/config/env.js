const env = {
  database: 'todo',
  username: 'postgres',
  password: 'TjYz3m',
  host: '201.20.7.33',
  port: 5890, 
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;