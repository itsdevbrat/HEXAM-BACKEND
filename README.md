# HEXAM-BACKEND

instruction<br>
install node<br>
npm install -y<br>
run a mysql server <br>

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hexamdb'
    
    
CREATE TABLE `teachers` (
  `email` varchar(255) NOT NULL,<br>
  `pass` varchar(255) NOT NULL<br>
)

CREATE TABLE `tests` (
  `title` varchar(255) NOT NULL,<br>
  `description` text NOT NULL,<br>
  `duration` int(11) NOT NULL,<br>
  `start` varchar(255) NOT NULL,<br>
  `end` varchar(255) NOT NULL,<br>
  `date` varchar(255) NOT NULL,<br>
  `id` int(11) NOT NULL<br>
) 
<br>
goto http://localhost:3000/<br>
