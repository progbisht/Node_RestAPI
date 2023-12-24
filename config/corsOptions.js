// for limiting the ips that can access our backend server 
// Here we have to put our ip of our react server for connection with the backend server 
const whiteList = [
    'https://www.google.co.in/', 
    'http://localhost:3500'
];

// Cross Origin Resource Sharing requests
const corsOptions = {
    origin : (origin,callback) => {
        if( whiteList.indexOf(origin) !== -1 || !origin ){
            callback(null, true);
        }
        else {
            callback(new Error("Not Allowed by CORS"));
        }
    },
    optionsSuccessStatus : 200
}


// ------- Important ------

// we may have errors with cors due to 
// const origin = req.headers.origin; 
// this can be figured out by
// res.header('Access-Control-Allow-Credentials', true);