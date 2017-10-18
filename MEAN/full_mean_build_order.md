Terminal 
=> MKDIR ProjectFolder //this will be your full MEAN project 
=> CD into projectFolder
=> npm init -y 
=> npm install express body-parser mongoose express-session --save 
=> TOUCH server.js file 
=> MKDIR server Folder //could be name anything you want. server makes sense since its all backend work 
=> CD server Folder 
    => MKDIR config folder 
        => TOUCH mongoose.js file
        => TOUCH routes.js file 
    => MKDIR controllers folder 
        => products.js
    =>MKDIR models 
        =>product.js //model file are singular 
=> ng new client --routing  //which will create your angular folder. 
=> CD client/src/app - app.component 
    - app.modules.ts
    - app-routing.modules.ts  
- ng g c main names component ( plurals )
=> CD main name component  
- ng generate service mainComponent/name (singluar) -- name.service.ts
- ng generate clasS mainComponent/name ( singular ) -- name.ts 
- ng g c subComponent  mainComponent/subComponent
Connecting frontend to backend
=> open new terminal and run sudo mongod 
=> open new terminal and run mongo //optional
=> CD to Angular folder "client"
=> ng serve run on localhost:4200 //test to see all app pages are working
=> control c out of ng serve. 
=> run ng build -w  which will create dist folder. this will remain open while working on the app
=> open new terminal and run  nodemon server.js -Keep this terminal open all times while working on the project