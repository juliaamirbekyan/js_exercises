function checkSpam(str){
    let lowstr = str.toLowerCase()
    return lowstr.includes("viagra") || lowstr.includes("xxx")
}
console.log(checkSpam('buy VisgRA now') );
console.log(checkSpam('buy ViAgRA now') );