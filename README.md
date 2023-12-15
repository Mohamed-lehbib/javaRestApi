# RestApi
## Description 
I have created a java RestApi without using any framework.
And I have consumed it using an Angular App in the frontend
To use the data coming from the Api and my Api support th following methods:
- **POST - localhost:2222/person**
- **GET - localhost:2222/peron**
- **PUT - localhost:2222/person/{id}**
- **DELETE - localhost:2222/person/{id}**

## Setup
- To use this project u only need to install all the maven dependencies.
```
mvn install
```
- Install the node packages
```
cd angular-frontend
```
```
npm install
```
- Then run The java Rest Api
- Then run the Angular frontend
```
npm start
```