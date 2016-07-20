--  Anthony Maki
--  1.  Get all users from Chicago
SELECT * FROM syntax_practice WHERE city = 'chicago';

--  2.  Get all users with usernames that contain the letter a
SELECT * FROM syntax_practice WHERE username LIKE '%a%';

--  3.  Update all records which have account balances of 0.00 and
--      transactions attempted of 0, so that new account balance is 10.00.
UPDATE syntax_practice SET account_balance = 10.00
WHERE account_balance = 0.00 AND transactions_attempted = 0;

--  4.  Select all users that have attempted 9 or more transactions.
SELECT * FROM syntax_practice WHERE transactions_attempted >= 9;

--  5.  Get username and account balance of 3 users with highest balances,
--      sorting from highest to lowest.
SELECT username, account_balance FROM syntax_practice
ORDER BY account_balance DESC LIMIT 3;

--  6.  Get username and account balance of 3 users with lowest balances,
--      sorting from lowest to highest.
SELECT username, account_balance FROM syntax_practice
ORDER BY account_balance ASC LIMIT 3;

--  7.  Get all users with account balances that are more than $100.
SELECT * FROM syntax_practice WHERE account_balance > 100;

--  8.  Add a new record.
INSERT INTO syntax_practice
VALUES ('anthonymaki','minneapolis',27,42,137.00);

--  9.  Delete users that reside in Miami or Phoenix and have completed
--      fewer than 5 transactions.
DELETE FROM syntax_practice WHERE transactions_completed < 5
AND (city = 'phoenix' OR city = 'miami');
