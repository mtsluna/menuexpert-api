db = db.getSiblingDB('menuexpert-dev');
db.createUser(
  {
    user: 'admin',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'menuexpert-dev' }],
  },
);
