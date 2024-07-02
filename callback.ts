function mainfun(fn: ()=> void){
    setTimeout(fn, 1000);
}

function run() {
    console.log("HI Typescript")
}
mainfun(run)