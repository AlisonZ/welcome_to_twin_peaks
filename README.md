ABOUT
This application is for iPhone users to explore the filming locations of the television show Twin Peaks and movie Fire Walk With Me. While several sites were filmed in California, this app only includes the Washington sites. This app hopes to show people where the sites are and assist in them visiting the locations!

CLONE REPO
- Git clone this repo
- CD into the repo in command line

INSTALLING DEPENDENCIES
    - This app depends on a number of dependencies. To install these run $npm install

TO RUN APP IN SIMULATOR
    - From project folder in command line
    - $ react-native run-ios
    - This will open the app in a simulator on your laptop

USING THE APP
    - On starting up the app you will be brought to a main screen that directs the user to "Click to Enter". Clicking on this screen will bring you to a map of all locations.

    -Main Map:
        - Each location is marked with a green twin peak. These green icons are clustered in one area, as that is where most of filming took place. Zooming in on will help clarify these locations.
        - Touching on an image will cause a pop-up box to appear which shows the location name and an arrow.
            - Touching on the location name will bring the user to a details page with information specific to that site.
            - Clicking on the arrow will bring the user to the maps app on their iPhone and will provide directions from user location to that specific site
        - In the top right corner of the map there is a Locations option, clicking on this option will bring the user to a list of all Locations

    -Locations:
        - The list of locations is all of the sites featured in this app.
        - The location list is scrollable and each site is clickable.
        - Clicking on an individual location will bring the user to a details page with information about that site
        - The list of locations also contains an option to go Back to Map. Clicking on that will bring the user back to the map.


    -Details Page:
        - Each filming location has its own details page. This page is dedicated to that location and has information including a picture of the site, the Twin Peaks name of the site, the real name of the site (if applicable), the town that the site is located in and a short description about the site.
        - Each details page has an image. Some have hidden images that will be displayed when clicking on the main image.
        - Users are routed to the details page through either the map view or the locations list.
        - In addition to this information, the details page has three buttons of Get Directions, Home and Show on Map.
            -Clicking on  Get Directions will take the user to the maps app on their iPhone and will provide directions to the site based on user location.
            -The Home button will bring the user back to the main screen of the application, where the user is instructed to "Click to Enter"
            -Show on Map will take the user to a map view almost identical to the Main Map shown after entering the site. The difference is that in this map, the location that was featured in the details page is shown with a cherry pie icon instead of the green mountains that all of the other icons appear with. In this way, the user can see where that site they are interested in is located.

    - Location on Map
        - This map is reached through the user clicking 'Show on Map' from the locations details page
        - The map features all filming sites denoted with green twin peaks icons
        - The location that was featured on the previous details page appears with a unique icon, a slice of cherry pie, to distinguish it from the other filming locations

    - User location
        - The final feature of this app is user location.
        - User location is shown with an icon of Agent Dale Cooper
        - As this is the beta version using a simulator, geolocation is not currently available, and must be set manually :(
        - To set user location, go to Debug tab of the Simulator application bar
            - Scroll to Location >
            - Select Custom Location
            - Enter current latitude and longitude
            - Select OK
        - After manually setting the latitude and longitude, refresh the simulator and the Cooper icon should now appear at that location
