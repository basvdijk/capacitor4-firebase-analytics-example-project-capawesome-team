This is an example project in order to test the [@capacitor-firebase/analytics](https://github.com/capawesome-team/capacitor-firebase/tree/main/packages/analytics) made by [capawesome-team](https://github.com/capawesome-team)

For me as a web developer it was quite some work to setup the native SDKs. Therefore I've made an Ionic VUE project to test the Capacitor Firebase Analytics plugin.

Below you'll find how to setup the SDK for Android and iOS after you've configured your project in Firebase.

# Setting up Firebase Analytics SDK for iOS - XCode Version 13.4.1 (13F100)

Open XCode `npx cap open ios`

## Add GoogleService-Info.plist

Right click on the `App` folder and choose `Add files to "App"`. I've read that dragging the file in could cause issues.

![image](https://user-images.githubusercontent.com/644550/191928818-c215cfe9-f854-4fa4-8c0b-2b01bee90bf1.png)

In the file picker navigate to your `GoogleService-Info.plist` and add it

It should now appear in the file tree

![image](https://user-images.githubusercontent.com/644550/191929040-928c19c0-ac5a-45fd-8d4e-68d82dec0068.png)

## Add Firebase SDK for iOS

Choose File -> Add packages

![image](https://user-images.githubusercontent.com/644550/191929306-560a4d9b-fd3f-4516-8d67-7924491e1828.png)

Search in the top right for `https://github.com/firebase/firebase-ios-sdk`

In the `Add to project` dropdown choose "App"

![image](https://user-images.githubusercontent.com/644550/191929496-5016265b-32c4-4cc7-ac16-54247150954f.png)

Click "Add package"

A popup appears

![image](https://user-images.githubusercontent.com/644550/191929673-b21a7514-c555-4fc3-ac02-404e58f9a6da.png)

Select the package product "FirebaseAnalytics" and click "Add Package"

![image](https://user-images.githubusercontent.com/644550/191930031-7f9f4e45-0ca1-4245-b955-3c99fa0a9d0e.png)

At the bottom of the tree you should see a "Package Dependencies" section

![image](https://user-images.githubusercontent.com/644550/191930133-52a16024-d771-4b15-91c9-70f4941d91c7.png)


## Add FirebaseAnalytics to podfile

Open the `Podfile`

![image](https://user-images.githubusercontent.com/644550/191928282-f95957b0-499a-4d7f-b60d-35112e7dd8ac.png)

Add the line 

`pod 'CapacitorFirebaseAnalytics/AnalyticsWithoutAdIdSupport', :path => '../../node_modules/@capacitor-firebase/analytics'`

or 

`pod 'CapacitorFirebaseAnalytics/Analytics', :path => '../../node_modules/@capacitor-firebase/analytics'`

If you want to have the IDFA collection capability enabled



# Setting up Firebase Analytics SDK for Android - Android Studio Dolphin | 2021.3.1

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

Then `make the project`

![image](https://user-images.githubusercontent.com/644550/191921653-0567df0b-78b4-4cf1-bed7-f2f99dd551cc.png)

## Setting the correct JDK

I got this error:

```
A problem occurred evaluating project ':app'.
> Failed to apply plugin 'com.android.internal.application'.
   > Android Gradle plugin requires Java 11 to run. You are currently using Java 1.8.
     Your current JDK is located in  /Library/Java/JavaVirtualMachines/jdk1.8.0_231.jdk/Contents/Home/jre
     You can try some of the following options:
       - changing the IDE settings.
       - changing the JAVA_HOME environment variable.
       - changing `org.gradle.java.home` in `gradle.properties`.
```

Goto file -> Project structure

![image](https://user-images.githubusercontent.com/644550/191921871-9c5fdfac-4465-4738-bc73-c65bed2f4f6b.png)

SDK location -> Gradle Settings

![image](https://user-images.githubusercontent.com/644550/191921942-1d54f24a-ae46-4682-99f3-21a95085909d.png)

I chose "embedded JDK"

![image](https://user-images.githubusercontent.com/644550/191922000-345938a9-e102-4a80-a198-d359ba06066b.png)

Click "OK" twice to close the Gradle Settings and Project Strucure dialogs

Then `make the project` again

![image](https://user-images.githubusercontent.com/644550/191921653-0567df0b-78b4-4cf1-bed7-f2f99dd551cc.png)

If everything ran fine you should see

![image](https://user-images.githubusercontent.com/644550/191923181-55117d1d-87db-4272-b20b-61ba5f33eb23.png)

## Run on Android device

Connect your Android device via USB if you don't have already

You should see your device in the dropdown:

![image](https://user-images.githubusercontent.com/644550/191923464-0b9dcc13-5e2a-4f9d-bec4-810d1b7c3119.png)

Now run the app via the green arrow icon or menu

![image](https://user-images.githubusercontent.com/644550/191923561-60103611-2483-4add-8bd6-a4dfcca83d96.png)

On your Android device, in the app navigate to screens via the hamburger menu.

You should now see the event showing up in Firebase Analytics

![image](https://user-images.githubusercontent.com/644550/191923801-e0c4ff9b-2251-4701-b391-eecce12d5b9f.png)



## Enable Firebase Analytics debugging

On the command line run (replace com.usto.cap4test) with your own:

```bash
adb shell setprop debug.firebase.analytics.app com.usto.cap4test
```

Open the "Logcat" tab at the bottom of your IDE and select in the dropdown on the top right "Firebase" to see the debug events:

![image](https://user-images.githubusercontent.com/644550/191925020-aa700433-86d7-44f3-9489-b3a920f7d5ee.png)



Of if you have the new Logcat view you can just open Logcat to see the debug events

![image](https://user-images.githubusercontent.com/644550/191925325-cfe47a77-7a48-4b2d-8f44-72cdfeae0a8f.png)








