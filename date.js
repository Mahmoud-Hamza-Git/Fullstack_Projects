

// exports.getItems = function(){ //the module.exports have to be global(I coudn't use it inside the previous function)
//     return list;
// }
exports.getDate = function(){
    const today = new Date();
    const option = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    return today.toLocaleDateString("en-us",option);
};

exports.getDay = function(){
    const today = new Date();
    const option = {
        weekday:"long",
    };

    return today.toLocaleDateString("en-us",option);
}

exports.day = "Hello New Day";

console.log(module.exports);