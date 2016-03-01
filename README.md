In Order to use you must first create the following table:

create table person (
	id int(6) unsigned auto_increment primary key,
    firstname varchar(30) not null,
    lastname varchar(30) not null,
    email varchar(50) not null
)

You also have to edit the database.js to your settings.

To run program open node command prompt and navigate to folder where you have the files saved and type npm start
