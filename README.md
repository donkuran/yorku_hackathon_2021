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
CREATE DATABASE IF NOT EXISTS yoh_hiring_place;

USE yoh_hiring_place;

CREATE TABLE IF NOT EXISTS homepage_contact ( inquiries_id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100), email VARCHAR(100), message VARCHAR(255), PRIMARY KEY (inquiries_id) );

CREATE TABLE IF NOT EXISTS title ( title_id INT NOT NULL AUTO_INCREMENT, recruiter TINYINT, grad TINYINT, PRIMARY KEY (title_id) );

CREATE TABLE IF NOT EXISTS grad_signup ( grad_id INT NOT NULL AUTO_INCREMENT, title_id INT NOT NULL, password VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL, PRIMARY KEY (grad_id), FOREIGN KEY (title_id) REFERENCES title (title_id) );

CREATE TABLE IF NOT EXISTS recruiter_signup ( recruiter_id INT NOT NULL AUTO_INCREMENT, title_id INT NOT NULL, password VARCHAR(100) NOT NULL, email VARCHAR(100) NOT NULL, PRIMARY KEY (recruiter_id), FOREIGN KEY (title_id) REFERENCES title (title_id) );

CREATE TABLE IF NOT EXISTS recruiter_login ( recruiter_login_id INT NOT NULL AUTO_INCREMENT, recruiter_id INT NOT NULL, password VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL, PRIMARY KEY (recruiter_login_id), FOREIGN KEY (recruiter_id) REFERENCES recruiter_signup (recruiter_id) );

CREATE TABLE IF NOT EXISTS grad_login ( grad_login_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, password VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL, PRIMARY KEY (grad_login_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS recruiter_settings ( recruiter_settings_id INT NOT NULL AUTO_INCREMENT, recruiter_id INT NOT NULL, email VARCHAR(100) NOT NULL, password VARCHAR(50) NOT NULL, PRIMARY KEY (recruiter_settings_id), FOREIGN KEY (recruiter_id) REFERENCES recruiter_signup (recruiter_id) );

CREATE TABLE IF NOT EXISTS grad_settings ( gradsettings_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, email VARCHAR(100) NOT NULL, password VARCHAR(50) NOT NULL, PRIMARY KEY (gradsettings_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS company ( company_id INT NOT NULL AUTO_INCREMENT, company VARCHAR(255) NOT NULL, PRIMARY KEY (company_id) );

CREATE TABLE IF NOT EXISTS recruiter_profile ( recruiter_profile_id INT NOT NULL AUTO_INCREMENT, recruiter_id INT NOT NULL, name VARCHAR(100) NOT NULL, image VARCHAR(255) NOT NULL, pronouns VARCHAR(100) NOT NULL, company_id INT NOT NULL, PRIMARY KEY (recruiter_profile_id), FOREIGN KEY (recruiter_id) REFERENCES recruiter_signup (recruiter_id) );

CREATE TABLE IF NOT EXISTS education ( education_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL, PRIMARY KEY (education_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS notification ( notification_id INT NOT NULL AUTO_INCREMENT, recruiter_id INT, grad_id INT, created_at TIMESTAMP DEFAULT NOW(), PRIMARY KEY (notification_id), FOREIGN KEY (recruiter_id) REFERENCES recruiter_signup (recruiter_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS program ( program_id INT NOT NULL AUTO_INCREMENT, program VARCHAR(100) NOT NULL, PRIMARY KEY (program_id) );

CREATE TABLE IF NOT EXISTS grad_profile ( grad_profile_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, name VARCHAR(100) NOT NULL, image VARCHAR(255) NOT NULL, pronouns VARCHAR(100), program_id INT NOT NULL, graduating_year INT NOT NULL, created_at TIMESTAMP DEFAULT NOW(), PRIMARY KEY (grad_profile_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS links ( links_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, linkedIn VARCHAR(100), website_or_portfolio VARCHAR(100), twitter VARCHAR(100), instagram VARCHAR(100), PRIMARY KEY (links_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS about ( about_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, description VARCHAR(255) NOT NULL, PRIMARY KEY (about_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS tech_skills ( tech_skills_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, html TINYINT, react TINYINT, programming TINYINT, skillsD TINYINT, skillsE TINYINT, skillsF TINYINT, skillsG TINYINT, skillsH TINYINT, add_skill VARCHAR(100), PRIMARY KEY (tech_skills_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS next_role ( next_role_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, description VARCHAR(255) NOT NULL, PRIMARY KEY (next_role_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS interests ( interests_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, accomplishment VARCHAR(255), superpower VARCHAR(255), hobbies VARCHAR(255), PRIMARY KEY (interests_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS remote_work ( remote_work_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, not_important TINYINT, very_important TINYINT, PRIMARY KEY (remote_work_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS markets ( markets_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, tech TINYINT, medicine TINYINT, medicine_b TINYINT, market_c TINYINT, market_d TINYINT, market_e TINYINT, market_f TINYINT, market_g TINYINT, add_market VARCHAR(255), PRIMARY KEY (markets_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS personal_skills ( personal_skills_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, name VARCHAR(100) NOT NULL, communication TINYINT, collaboration TINYINT, problem_solving TINYINT, teamwork TINYINT, PRIMARY KEY (personal_skills_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS positions ( positions_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, internship TINYINT, contract TINYINT, full_time TINYINT, part_time TINYINT, PRIMARY KEY (positions_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS size ( size_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, small TINYINT, medium TINYINT, large TINYINT, very_large TINYINT, PRIMARY KEY (size_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS desired_location ( desired_location_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, toronto TINYINT, mississauga TINYINT, calgary TINYINT, add_city VARCHAR(100), open_to_remote TINYINT, PRIMARY KEY (desired_location_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS salary ( salary_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, salary VARCHAR(100), PRIMARY KEY (salary_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS important_for_role ( Important_for_role_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, mentorship TINYINT, growth TINYINT, challenges TINYINT, voice TINYINT, ongoing_learning TINYINT, growth_company TINYINT, PRIMARY KEY (important_for_role_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS languages ( language_id INT NOT NULL AUTO_INCREMENT, grad_id INT NOT NULL, english TINYINT, french TINYINT, PRIMARY KEY (language_id), FOREIGN KEY (grad_id) REFERENCES grad_signup (grad_id) );

CREATE TABLE IF NOT EXISTS search ( search_id INT NOT NULL AUTO_INCREMENT, recruiter_id INT NOT NULL, PRIMARY KEY (search_id), FOREIGN KEY (recruiter_id) REFERENCES recruiter_signup (recruiter_id) );

CREATE TABLE IF NOT EXISTS favorites ( favorites_id INT NOT NULL AUTO_INCREMENT, recruiter_id INT NOT NULL, PRIMARY KEY (favorites_id), FOREIGN KEY (recruiter_id) REFERENCES recruiter_signup (recruiter_id) );

CREATE TABLE IF NOT EXISTS comments ( comments_id INT NOT NULL AUTO_INCREMENT, favorites_id INT NOT NULL, recruiter_id INT NOT NULL, PRIMARY KEY (comments_id), FOREIGN KEY (favorites_id) REFERENCES favorites (favorites_id) );



