# HEXAM-BACKEND

instruction
install node
npm install -y
run a mysql server 

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hexamdb'
    
    
CREATE TABLE `teachers` (
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL
)

CREATE TABLE `tests` (
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `duration` int(11) NOT NULL,
  `start` varchar(255) NOT NULL,
  `end` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) 

goto http://localhost:3000/
