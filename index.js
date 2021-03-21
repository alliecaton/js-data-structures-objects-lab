// Write your solution in this file!

let driver = {name: 'Sam'}

function updateDriverWithKeyAndValue(driver, key, value) {    
    let object = {...driver}
    object[key] = value
    return object
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    let newdriver = {...driver}
    delete newdriver[key]
    return newdriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}