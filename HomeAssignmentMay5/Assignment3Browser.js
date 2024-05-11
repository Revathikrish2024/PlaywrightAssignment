//Ifelse check:
let browserName='chrome'
function launchBrowser(){
if (browserName==='chrome') {
    console.log("Browser " + browserName + " is valid browser ");
} else {
    console.log("Browser" +browserName +"is invalid browser");
}
}launchBrowser();
//**** */
/////
function runTests(){
switch (testType) {
    case "regression":
        console.log("regression");
        break;
        case "smoke":
            console.log("smoke");
            break;
            case "sanity":
                console.log("sanity");
                break;
    default:
  console.log("smoke"); 
 }
}
let testType="regression";
runTests();