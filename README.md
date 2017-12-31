Code lab with Play-scala react and redux
=


Build 
==
Frontends and dist play application=
- ./build.sh

dev
==
run dev mode with debug port
- ./sbt run -jvm-debug 9999

compile react frontend to the public folder of play server
- cd frontend/react-redux-todo-app
- npm install
- export NODE_ENV=production 
- /node_modules/webpack/bin/webpack.js -d --watch
