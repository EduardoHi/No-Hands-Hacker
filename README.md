# No Hands Hacker

This application is a solution for people who have a certain physical limitation in their hands or fingers, but would like to program just like any other hacker. You might think that there are more than enough programming tools for everyone, but think about how you would make your current project or homework, if you could not type whatsoever.


## Instructions
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Deploy to github pages
Before, if `ngh` is not installed, run `npm install -g angular-cli-ghpages` to instal ngh globally.
Run `ng build --aot=false --prod --base-href "https://EduardoHi.github.io/No-Hands-Hacker/"` to build the angular app and then run `ngh --message="<Your Message>"` the message is optional.
after that, the page https://EduardoHi.github.io/No-Hands-Hacker/ should be serving the updated app.
