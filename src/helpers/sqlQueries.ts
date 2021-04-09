export const createTableCashiers =
  'CREATE TABLE IF NOT EXISTS cashiers( \
            cashier_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            last_name NVARCHAR(20)  NOT NULL ,\
            first_name NVARCHAR(20)  NOT NULL UNIQUE,\
            descr NVARCHAR(100),\
            city NVARCHAR(16),\
            sex  CHAR(1),\
            expirience_years INTEGER\
        )';

export const getAllCashiers = 'SELECT * FROM cashiers';
export const getCashierbyId = 'SELECT * FROM cashiers WHERE cashier_id = ?';

export const addCashier =
  'INSERT INTO cashiers (last_name, first_name, city, expirience_years, descr, sex) VALUES (?,?,?,?,?,?)';

export const changeCashier = `UPDATE cashiers SET \
  last_name = ?, \
  first_name = ?,\
  descr = ?,\
  city = ?, \
  sex = ?,\
  expirience_years = ? \

  WHERE cashier_id = ?`;

export const deleteCashier = '';

('');
