
DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
-- --
USE bamazonDB;
DROP TABLE IF EXISTS `products`;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) DEFAULT NULL,
  category VARCHAR(45) DEFAULT NULL,
  price DECIMAL(10,4) NOT NULL,
  stock_qty int NOT NULL,
  PRIMARY KEY (id)
)


INSERT INTO products VALUES (100,'caramel sauce','condiments',1.9900,150),
INSERT INTO products VALUES(101,'strawberry sauce','condiments',1.9900,150),
INSERT INTO products VALUES(102,'sugar cones','condiments',2.9900,150),
INSERT INTO products VALUES(103,'ice cream cones','condiments',1.9900,150),
INSERT INTO products VALUES(104,'waffle cones','condiments',2.9900,150),
INSERT INTO products VALUES(105,'sprite','soda',1.9900,150),
INSERT INTO products VALUES(106,'coke-a-cola','soda',1.9900,150),
INSERT INTO products VALUES(107,'dr pepper','soda',1.9900,150),
INSERT INTO products VALUES(108,'vanilla','ice cream',4.5000,150),
INSERT INTO products VALUES(109,'chocolate','ice cream',4.5000,150),
INSERT INTO products VALUES(110,'strawberry','ice cream',4.5000,150),
INSERT INTO products VALUES(111,'snickers','candy',1.0000,150),
INSERT INTO products VALUES(112,'hot tamales','candy',1.0000,150),
INSERT INTO products VALUES(113,'reeses peanut butter cups','candy',1.0000,150),
INSERT INTO products VALUES(114,'doritos','chips',2.5000,150),
INSERT INTO products VALUES(115,'cheetos','chips',2.5000,150),
INSERT INTO products VALUES(116,'bbq lays','chips',2.5000,150),
INSERT INTO products VALUES(117,'sour cream and chive lays','chips',2.5000,150),
INSERT INTO products VALUES(118,'chocolate chip','cookies',1.9900,150),
INSERT INTO products VALUES(119,'caramel sauce','condiments',1.9900,150),
INSERT INTO products VALUES(120,'peanut butter','cookies',1.9900,150);




