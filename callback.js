"use strict";
function mainfun(fn) {
    setTimeout(fn, 1000);
}
function run() {
    console.log("HI Typescript");
}
mainfun(run);
