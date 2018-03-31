// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver_obj, key, value){
  return Object.assign({},driver_obj, {[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  
  return Object.assign(driver, {[key]:value})
}


function deleteFromDriverByKey(driver, key){
  obj = driver.slice(0) // CLONE THE OBJ
  delete obj.key
  return obj
}