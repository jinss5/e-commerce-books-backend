--migrate:up
CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  order_number VARCHAR(100) NOT NULL,
  user_id INT NOT NULL,
  order_status_id INT NOT NULL,
  address TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (order_status_id) REFERENCES order_status (id),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
  )
-- migrate:down
DROP TABLE orders;