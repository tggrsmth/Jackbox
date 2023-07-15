Jackbox Rest API project

Project Description:
Using the language of your choice, create a backend service that allows for a user sign-up and a generic page to submit and return data.  The technology used for the front end is a simple HTML file that is served up to the user via a browser request to the host server root directory endpoint.  The host server is a node.js application that is configured in an index.js file to run on port 3000.


Project Requirements:
A user should be able to open a page with form inputs for:

- First Name

- Last Name

- email

- username

- password

These form inputs should be transmitted to a version-able REST API and written to some sort of datastore--filesystem is fine.

An admin should be able to go to the same website which makes a REST call to retrieve any data stored. The data should be formatted per user in a grid or table.

We ask that you spend 1- 2 hours on this project. Feel free to add comments or "TODOs" wherever appropriate.

The website and the backend service should be able to be run with minimal configuration (IE: docker-compose, npm/yarn run, etc). Assessments that cannot be run with minimal configuration or without startup documentation will not be assessed.


How to use the project:
1.  Using a browser, open the Node.js host server on port 3000 at the root directory(/).  This will bring up a form to enter user data.  
2.  Once you fill out the fields on the form appropriately then click the Submit button.
3.  Your user data will be appended to a user.csv file that is hosted in the root directory of the Node.js server.
4.  Administrators can go to the /allusers endpoint on the host Node.js server with a browser or an api testing tool.  This will drop a allusers.csv to their Downloads directory so it can be opened by the administrator.


How to Install and Run the Project:
1.  Install Node.js if you want to run the project locally.  Skip this step if you already have a Node installation.
2.  Go to https://github.com/tggrsmth/Jackbox and get the clone url.  Clone the repo locally onto a Node.js server, i.e., 
    git clone https://github.com/tggrsmth/Jackbox.git.
3.  Run npm install to install dependencies for the project from the Jackbox root directory for the project.
4.  The port configuration for the server is configured in index.js as port 3000.  Edit the file if you want to change that port.
5.  Start the project on its own Node server by running node index.js at the command line.

