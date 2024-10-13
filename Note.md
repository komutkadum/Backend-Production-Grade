# Notes on database

- Wrap in try catch always - problem will arise
- Database is always in another continent - it takes time - use async await

# import errors

- Use full filename with extensions when importing if error arise

# Error language

- Name your error to locate where the error originates
 ```
    console.log("MongoDB connection error", error);
 ```

# Multer Cloudinary File Upload strategy

- User will upload file through multer on our local server temporarily
- Next, Take file from local storage temp and upload to cloudinary
- Why two steps because if any error happens, if it is in our local server, there could be a chance of re-upload of the file to cloundinary - Prouduction grade settings