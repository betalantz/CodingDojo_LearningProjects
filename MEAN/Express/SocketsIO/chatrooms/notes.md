Have the NodeJS server render views/index.ejs that has the html content for the client whenever the client requests "/"
In the client codes, have a javascript code that asks the user for their name. Store the user input in a variable called name
Have the client EMIT to the server an event called "got_a_new_user" and pass 'name' to the server.
Have the server LISTEN for an event called "got_a_new_user". When this event gets triggered, have the server BROADCAST an event called 'new_user' to the client with the name of the new user attached to the event. (b) we store the name/session_id of the new user in a variable/array/hash called users  (c) To the person who sent this request, we EMIT an event called 'exiting_user' with all the users data
Have the client LISTEN for an event called 'new_user' and when this event gets triggered, have jQuery render a new box with the new user's name.
Wait... But this does not detect when a user disconnects from the socketIO connection. To do this, we need to have the server LISTEN for an event called 'disconnect' and when this event gets triggered, broadcast an event called 'disconnect_user' to all clients.
We need to have the client LISTEN for an event called 'disconnect_user' and remove any html box associated with this user.

For step 4, when the server gets the event 'got_a_new_user', store a sessionID of the user and pass this sessionID with the event "new_user". Then have the client render this html box with the id of the sessionID of this user.
For step 6, when the server emits an event called 'disconnect_user', pass the sessionID of the disconnected user as well. In step 7, have the client remove the HTML box with the id of the sessionID of the disconnected user.