>**Note**: This is the react native application to display list of movies in multiple languages i.e. English and Arabic

Once you download the code, please follow below steps to run it on your system:

1. Download the code, run npm i, this will download all the node packages and create a node-modules folder
2. To run ios application - run react-native run-ios
3. To run Android application - run react-native run-android

The libraries and plugins used in the application are as below :

1. For forms : react-hook-form
2. Data encoding : react-native-base64
3. Bi-lingual language : i18next, react-i18next
4. API call : axios
5. Redux : reduxjs/toolkit, react-redux
6. UI Components : styled-component

Once you get the application running, below are the steps to be followed

# Login Screen :

 1. Enter the valid credentials i.e. email address and password to get the login button enabled
 2. User can switch to other language from top right corner language icon. ( Default language is English)
 3. For security purpose, once user gets successfully login, password is encoded to base64

 # Dashboard Screen :

 1. Once user is logged in, will navigate to the dashboard screen to display the list of movies
 2. The API url and the AUTH token is maintained inside the config file under utils folder
 3. User can logout from the application by clicking on logout icon from the top of this screen.

 

![Login_en](https://github.com/user-attachments/assets/3f18fecf-5a2d-4a1b-973b-d9e6a33abbc0)

      

     




   




