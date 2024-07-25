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

 
     


![Logout_en](https://github.com/user-attachments/assets/114623f2-fe5a-48cb-9931-497998ce0fd9)
![Logout_ar](https://github.com/user-attachments/assets/d0c9242c-81c4-4fcb-95eb-923396066252)
![Login_en](https://github.com/user-attachments/assets/b7905d5e-4e06-4c49-a16a-012c1dcee4a4)
![Login_ar](https://github.com/user-attachments/assets/5dc7cae7-2ee6-4a19-ae4a-09858b2f122e)
![Dashboard](https://github.com/user-attachments/assets/884299b5-c9ad-421e-b57a-febe08e347f6)
![Dashboard_en](https://github.com/user-attachments/assets/f80dcb7d-d395-4882-92a1-bc346599fbf7)
![Dashboard_ar](https://github.com/user-attachments/assets/7aa5f598-a82c-45a4-a585-13348e1dfe8d)


   




