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

CREATE TABLE `reports` (
  `tab_switches` int(11) NOT NULL,
  `face_suspicion` int(11) NOT NULL,
  `eye_suspicion` int(11) NOT NULL,
  `student_email` varchar(255) NOT NULL,
  `test_id` int(11) NOT NULL
) 
<br>

CREATE TABLE `students` (
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `imgpath` int(11) NOT NULL
)

<br>
CREATE TABLE `student_test` (
  `email` varchar(255) NOT NULL,
  `test_id` varchar(255) NOT NULL
) 
<br>

goto http://localhost:3000/<br>
