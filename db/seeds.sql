USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES
	("Cheeseburger", false),
    ("Bacon burger", false),
    ("California burger", false);
    
USE burgers_db;   

UPDATE burgers 
SET devoured = false
WHERE id = 1;


USE burgers_db;  
SELECT * FROM burgers;
