# CCCart
contains rest api for reactjs demo
## set up
npm init -y
## install dependencies
npm install express  body-parser cors
## test get all users
Get All Users
Method: GET
URL: http://localhost:5000/users
Action: Retrieves all users from the server.
## verifing it with postman

Setting Up Postman
Download and Install Postman: If you haven't already, download Postman from https://www.postman.com/ and install it on your system.
Create a New Collection: Once Postman is open, create a new collection to organize your requests. Click on “New” > “Collection” and name it, for example, “User Management”.
Testing CRUD Operations
1. Get All Users
Method: GET
URL: http://localhost:5000/users
Action: Retrieves all users from the server.
Steps:

Open Postman.
Create a new request under the "User Management" collection.
Set the method to GET.
Enter the URL http://localhost:5000/users.
Hit "Send".
You should see a JSON response with all users.
2. Get a Single User
Method: GET
URL: http://localhost:5000/users/{id}
Action: Retrieves a single user by their ID.
Steps:

Duplicate the previous GET request or create a new one.
Modify the URL to include an ID, e.g., http://localhost:5000/users/1.
Hit "Send".
You should see a JSON response with the details of the user with ID 1.
3. Create a New User
Method: POST
URL: http://localhost:5000/users
Action: Adds a new user to the server.
Body: JSON
Body Content:

json
Copy code
{
    "name": "Alice Smith",
    "email": "alice@example.com",
    "phone": "1231231234"
}
Steps:

Create a new request.
Set the method to POST.
Set the URL to http://localhost:5000/users.
Under the "Body" tab, select "raw" and choose "JSON" from the dropdown.
Paste the JSON body content provided above.
Hit "Send".
You should receive a response with the details of the newly created user.
4. Update a User
Method: PUT
URL: http://localhost:5000/users/{id}
Action: Updates the details of an existing user.
Body: JSON
Body Content:

json
Copy code
{
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "phone": "3213214321"
}
Steps:

Create a new request.
Set the method to PUT.
Set the URL to http://localhost:5000/users/1 (assuming ID 1 exists).
Enter the updated JSON data in the body as shown.
Hit "Send".
The response should show the updated user data.
5. Delete a User
Method: DELETE
URL: http://localhost:5000/users/{id}
Action: Deletes a user from the server.
Steps:

Create a new request.
Set the method to DELETE.
Set the URL to http://localhost:5000/users/1 (assuming ID 1 exists).
Hit "Send".
The response should confirm the deletion (likely no content will be shown).



