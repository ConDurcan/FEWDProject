"# FEWDProject" 
G00435598 - Conor Durcan
https://github.com/ConDurcan/FEWDProject

## How to Run the Project

To get a local copy of the project up and running, follow these steps.

### Prerequisites

Make sure you have the following installed:

* **Node.js and npm:** Download from [https://nodejs.org/](https://nodejs.org/)
* **Ionic CLI:** Install globally using npm:
    ```bash
    npm install -g @ionic/cli
    ```
* **Capacitor CLI:** Install globally using npm:
    ```bash
    npm install -g @capacitor/cli
    ```
* **(For running on Android) Android Studio:** Download from [https://developer.android.com/studio](https://developer.android.com/studio)
* **(For running on iOS) Xcode:** Download from the Mac App Store (requires macOS)

### Installation

1.  Clone the repository:
    ```bash
    git clone `https://github.com/ConDurcan/FEWDProject.git`
    ```

2.  Navigate into the project directory:
    ```bash
    cd FEWDProject
    ```
    (Or the name of your project folder if different)
3.  Install the project dependencies:
    ```bash
    npm install
    ```

### Running the App

* **In the Browser:**
    To run the app in your web browser for quick development and testing:
    ```bash
    ionic serve
    ```
    The app will open in your default browser, typically at `http://localhost:8100`.

* **On a Mobile Device or Emulator (Recommended for native features):**
    To test features like Text-to-Speech on a real device or emulator, you need to build the native project.

    1.  Build the web assets:
        ```bash
        ionic build
        ```
    2.  Copy web assets and sync Capacitor plugins to the native platform (replace `<platform>` with `android` or `ios`):
        ```bash
        npx cap copy <platform>
        ```
    3.  Open the native project in the respective IDE:
        ```bash
        npx cap open <platform>
        ```
        (This will open Android Studio or Xcode)
    4.  From within Android Studio or Xcode, connect your device or start an emulator, select it as the target, and click the Run button in the IDE's toolbar.

## Features

This is a fairly simple website it uses the cocktaildb api, You "pick your poison" and select whatever spirit you wish to make a cocktail with.

You're then taken to one of the spirit pages where 5 different cocktails along with their picture are. Click on the name of the cocktail you want to make and youre taken to the drink-details page.

The drink details page has the ingredients and measures for the drink along with the type of glass and instructions on how to make it. I use an activated router to pass through the drinkId for whichever drink's name you click to the new page.

Drink-details also has a read ingredients button which uses a community-capacitor for text-to-speech.

If you particularly like a cocktail, there's a favorite button you can toggle. You can view your favorites by using the bottom option of the home screen.

In the favorites page you can see any drink you've favorited and much like in the spirit pages click the name and it will take you directly to drink-details.
