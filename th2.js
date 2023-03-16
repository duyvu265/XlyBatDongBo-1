function dowload(url,callback) {
    setTimeout(()=>{
        console.log(`Dowlaodling ${url}...`);
        callback(url);
        },1000);

}
function process(picture) {
    console.log(`processing ${picture}`)
}

let url=`https://www.javascripttutorial.net/pic.jpg`;
dowload(url,process);
// process(url);