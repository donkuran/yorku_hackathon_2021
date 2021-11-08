### From the UX Design Team

First prototype is for grad: https://www.figma.com/proto/FebJoSmvq6f2p9OJTgvHHz/Developer-Wireframes?page-id=273[…]in-zoom&starting-point-node-id=273%3A6888&show-proto-sidebar=1

Second prototype is for the recruiter: https://www.figma.com/proto/FebJoSmvq6f2p9OJTgvHHz/Developer-Wireframes?page-id=273[…]2C48%2C0.03&scaling=min-zoom&starting-point-node-id=273%3A4898

# Assets folder

Contains design documents including full site UX design images, draft IFD and draft ERD

# yorku_hackathon_2021

1.  Run the following command to install dependencies:<br/>

    > npm install

# the-hiring-place - react app

1.  Navigate to the _the-hiring-place_ directory.<br/>

2.  To start app run:<br/>

    > npm start.

### If App doesn't start

3.  Try <br />

    > Installing the dependencies highlighted in errors individually.

# the-hiring-place-backend - express app

1.  Navigate to the _the-hiring-place-backend_ directory.<br/>

2.  Create an _.env_ file in _the-hiring-place-backend_ root folder. Add the following variables:<br/>

    > ENV_PORT=4000<br/>
    > :hammer_and_wrench: ACCESS_JWT_SECRET=**your secret key**<br/>
    > :hammer_and_wrench: REFRESH_JWT_SECRET=**your secret key**<br/>
    > JWT_EXPIRES_IN=30m<br/>
    > JWT_COOKIE_EXPIRES=90<br/>
    > DB_HOST= "db"<br/>
    > :hammer_and_wrench: DATABASE_USER= **your MYSQL database user name**<br/>
    > :hammer_and_wrench: DATABASE_PASS= **your MySQL database user password**<br/>
    > DATABASE_NAME= "yoh_hiring_place"<br/>

    - :small_red_triangle_down: Note - make sure to setup all fields highlighted with :hammer_and_wrench: above, if you decide to change the port choose any port above 3000

3.  To start app run:<br/>

    > npm start.

### If App doesn't start

4.  Try <br />

    > Installing the dependencies highlighted in errors individually.

### DATABASE
DATABASE
CREATE DATABASE IF NOT EXISTS team1_yoh_hiring_place_nov;
USE team1_yoh_hiring_place_nov;
CREATE TABLE IF NOT EXISTS contact ( contact_id INT NOT NULL AUTO_INCREMENT, contact_name VARCHAR(100), contact_email VARCHAR(100), contact_message VARCHAR(255), PRIMARY KEY (contact_id) );
CREATE TABLE IF NOT EXISTS signup ( user_id INT NOT NULL AUTO_INCREMENT, username VARCHAR(100), user_email VARCHAR(100) NOT NULL, isStudent Boolean, isRecruiter Boolean, PRIMARY KEY (user_id) );
CREATE TABLE IF NOT EXISTS work_preferences ( work_preference_id INT NOT NULL AUTO_INCREMENT, internship TINYINT, contract TINYINT, fulltime Boolean, parttime Boolean, PRIMARY KEY (work_preference_id) );
CREATE TABLE IF NOT EXISTS company_size ( company_size_id INT NOT NULL AUTO_INCREMENT, company_small TINYINT, company_medium Boolean, company_large Boolean, company_very_large Boolean, PRIMARY KEY (company_size_id) );
CREATE TABLE IF NOT EXISTS location ( location_id INT NOT NULL AUTO_INCREMENT, city_province VARCHAR(100), country VARCHAR(100), PRIMARY KEY (location_id) );
CREATE TABLE IF NOT EXISTS country ( country_id INT NOT NULL AUTO_INCREMENT, country VARCHAR(100), PRIMARY KEY (country_id) );
CREATE TABLE IF NOT EXISTS user_role (user_role_id INT NOT NULL AUTO_INCREMENT, user_role VARCHAR(100), PRIMARY KEY (user_role_id) );
CREATE TABLE IF NOT EXISTS education ( education_id INT NOT NULL AUTO_INCREMENT, program VARCHAR(100), start_date DATE NOT NULL, end_date DATE NOT NULL, PRIMARY KEY (education_id) );
CREATE TABLE IF NOT EXISTS company ( company_id INT NOT NULL AUTO_INCREMENT, company_name VARCHAR(255) NOT NULL, PRIMARY KEY (company_id) );
CREATE TABLE IF NOT EXISTS grad_profile ( 
grad_id INT NOT NULL AUTO_INCREMENT, 
image BLOB, 
pronouns VARCHAR(100), 
linkedIn VARCHAR(100), 
website_or_portfolio VARCHAR(100), 
twitter VARCHAR(100), 
instagram VARCHAR(100), 
resume VARCHAR (255), 
next_role_description VARCHAR(255), 
interestQ1 VARCHAR(255), 
responseR1 VARCHAR(255),  
interestQ2 VARCHAR(255), 
responseR2 VARCHAR(255),  
interestQ3 VARCHAR(255), 
responseR3 VARCHAR(255),  
technical_skills VARCHAR (255), 
personal_skills VARCHAR (255), 
languages VARCHAR (255), 
preferred_location VARCHAR (255), 
open_to_remote Boolean, 
not_important Boolean, 
very_important Boolean, 
salary VARCHAR(255), 
next_role1 Boolean, 
next_role2 Boolean, 
next_role3 Boolean, 
next_role4 Boolean, 
next_role5 Boolean, 
next_role6 Boolean, 
user_id INT, 
work_preference_id INT, 
company_size_id INT, 
location_id INT,
country_id INT, 
user_role_id INT, 
education_id INT,
PRIMARY KEY (grad_id),
FOREIGN KEY (user_id) REFERENCES signup (user_id), 
FOREIGN KEY (work_preference_id) REFERENCES work_preferences (work_preference_id), 
FOREIGN KEY (company_size_id) REFERENCES company_size (company_size_id), 
FOREIGN KEY (location_id) REFERENCES location (location_id), 
FOREIGN KEY (country_id) REFERENCES country (country_id), 
FOREIGN KEY (user_role_id) REFERENCES user_role (user_role_id), 
FOREIGN KEY (education_id) REFERENCES education (education_id) ) ;

CREATE TABLE IF NOT EXISTS recruiter_profile ( 
recruiter_id INT NOT NULL AUTO_INCREMENT, 
pronouns VARCHAR(100), 
company_id INT, 
user_id INT, 
PRIMARY KEY (recruiter_id), 
FOREIGN KEY (company_id) REFERENCES company (company_id), 
FOREIGN KEY (user_id) REFERENCES signup (user_id) );

CREATE TABLE IF NOT EXISTS notifications ( 
notification_id INT NOT NULL AUTO_INCREMENT, 
notification VARCHAR(255) NOT NULL, 
recruiter_id INT, 
grad_id INT, 
PRIMARY KEY (notification_id), 
FOREIGN KEY (recruiter_id) REFERENCES recruiter_profile (recruiter_id), 
FOREIGN KEY (grad_id) REFERENCES grad_profile (grad_id) );





