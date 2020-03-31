## VanillaTypeScript and Parcel

### in Package.json there is @babel/core, @babel/plugin-transform-runtime, @babel/runtime-corejs2, parcel-bundler, typescript as devDependencies

### and a .babelrc file I was just making a standard repository for typescript/parcel set up to keep around for future projects but ended up moving all the files

### from the choreList into it.

## SCRIPTS IN PACKAGE.JSON

#### "dev": "rm -rf ./development && rm -rf ./.cache && parcel public/index.html --out-dir development -p 3000",

#### "build": "parcel build public/index.html --out-dir production --public-url ./",

#### "watch": "tsc --watch --noEmit"
