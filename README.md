This is a seed project for getting up and running with babel + browserify + gulp.

    -This project uses babel for transpiling ES2015 javascript code to es5.
    -browserify is used for module bundling.
    -gulp is used for automating build process for dev and prod. 
    -SASS for css.

To setup this project<br>
    1. run `npm install` after cloning this repo.<br>
    2. run `npm run dev` for compiling code with sourcemaps generation. or run `npm start` for prod.

If you want to open the application to browser run `npm run serve`.This will start a http-server on localhost:8080.
NOTE:`npm run serve` task utilizes `http-server`module.Hence it needs to installed globally on your m/c already.
To install http-server run `npm install http-server -g`.