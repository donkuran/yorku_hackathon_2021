# yorku_hackathon_2021

1. Create an _.env_ file in app-express-backend root folder. Add the following variables:<br/>

    > ENV_PORT=4000<br/>
    > :hammer_and_wrench: ACCESS_JWT_SECRET=**your secret key**<br/>
    > :hammer_and_wrench: REFRESH_JWT_SECRET=**your secret key**<br/>
    > JWT_EXPIRES_IN=30m<br/>
    > JWT_COOKIE_EXPIRES=90<br/>
    > DB_HOST= "db"<br/>
    > :hammer_and_wrench: DATABASE_USER= **your MYSQL database user name**<br/>
    > :hammer_and_wrench: DATABASE_PASS= **your MySQL database user password**<br/>
    > DATABASE_NAME= "my_profile_app"<br/>

    - :small_red_triangle_down: Note - make sure to setup all fields highlighted with :hammer_and_wrench: above, if you decide to change the port choose any port above 3000

2.  Navigate to the _the-hiring-place-backend_ directory.<br/>

4.  Run the following command to install dependencies:<br/>

    > npm install

5. To start app run:<br/>

    > npm start.
