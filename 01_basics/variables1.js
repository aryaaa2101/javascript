const accountId = 13425
let accountEmail = "arya@gmail.com"
var accountPassword = "4567"
accountCity = "Lucknow"
let accountSate;

accountEmail = "as@gmail.com"
accountPassword = "12234"
accountCity = "Bengaluru"

/* prefer not use var because of issue in block and fuctional scope
*/
//   accountId = 2 // not allowed as it is constant
  console.log(accountId)
  console.table([accountId, accountEmail,accountPassword,accountCity, accountSate])