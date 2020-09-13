var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landingpage")
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        { name: "Salmon Creek", image:"https://www.photosforclass.com/download/px_1061640"},
        { name: "Mountain View", image:"https://www.photosforclass.com/download/px_2108709"},
        { name: "Lockheed Park", image:"https://www.photosforclass.com/download/pb_5441144"},
        { name: "Tesla Junction", image:"https://www.photosforclass.com/download/pb_4817872"}
    ]

    res.render("campgrounds", {campgrounds: campgrounds});

});

app.post("/campgrounds")

app.listen(3000, function () {
    console.log("YelpCamp Server is a GO");
});