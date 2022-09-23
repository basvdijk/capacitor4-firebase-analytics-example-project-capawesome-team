# capacitor4-firebase-analyics-example-project-capawesome-team

# Android

## Add google-services.json

Open Android Studio with `npx cap open android`

![image](https://user-images.githubusercontent.com/644550/191918886-5e1b46b8-44d2-41e2-88e6-e2d006e85b38.png)

Android Studio probably opens in the "Android" view instead of the project view like the "Add Firebase to your Android app" instruction shows

![image](https://user-images.githubusercontent.com/644550/191919036-40b0b2f4-2140-4d04-94b0-0b974b25b45d.png)

Switch to the project view via the dropdown

![image](https://user-images.githubusercontent.com/644550/191919235-0c8a5781-3c43-4b5b-88fb-e8dfe5af394b.png)

The second android folder shows the structure as shown in the Firebase instructions

![image](https://user-images.githubusercontent.com/644550/191919451-38f35880-4871-48c2-901d-2b7c66c5b974.png)

Drag the `google-services.json` file into the app folder. You'll get a prompt

![image](https://user-images.githubusercontent.com/644550/191919991-1b2069de-29bd-43d7-988d-f191782c55b1.png)

Choose `refactor`

## Add Android Firebase SDK

Open the `build.gradle` at the root of the project

![image](https://user-images.githubusercontent.com/644550/191920216-ef538fb8-f4d1-4b14-88ea-f2a8b8667e99.png)

The Google instruction says:

> // Add the dependency for the Google services Gradle plugin
> `classpath 'com.google.gms:google-services:4.3.13'`

However in my `build.gradle` it was already added

Open the `build.gradle` in your project

![image](https://user-images.githubusercontent.com/644550/191920929-f4064e9a-7998-4e23-9f68-a7ba6cdeac6a.png)

Add this code to the `dependencies` section

```
  // Import the Firebase BoM
  implementation platform('com.google.firebase:firebase-bom:30.4.1')

  // TODO: Add the dependencies for Firebase products you want to use
  // When using the BoM, don't specify versions in Firebase dependencies
  implementation 'com.google.firebase:firebase-analytics'


  // Add the dependencies for any other desired Firebase products
  // https://firebase.google.com/docs/android/setup#available-libraries
```


![image](https://user-images.githubusercontent.com/644550/191921135-ee27948b-4ff8-4c2c-9f27-6b26284804b6.png)

Sync Gradle manually

![image](https://user-images.githubusercontent.com/644550/191921398-2a2dd65d-12f9-46b8-85f4-44f43e2d1499.png)

You should see:

![image](https://user-images.githubusercontent.com/644550/191921431-16a7d4a3-b714-4f6f-9822-ddc82e289074.png)



