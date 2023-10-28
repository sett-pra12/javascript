const accountId = 1444234
let accountEmail = "prs@gmail.com"
var accountPass = "3456"
accountCity = "Kol"


// accountId = 2 -- It is not allowed, since we have declare constant and we should not try to change it. 

// Prefer not to use var because of issue in block scope and functional scope

accountEmail = "ps@gmail.com"
accountPass = "09876"
accountCity = "LA"

console.table([accountEmail, accountPass, accountCity])