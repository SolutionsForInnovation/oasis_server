module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'hotel_user',
  password: 'password',
  database: 'oasis_hotel',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
