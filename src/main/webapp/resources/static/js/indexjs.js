/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

var name = "steve"
var typed = "steeeve"

var isLongPressedName = function(name, typed) {
    nameobj = {}
    typeobj = {}
    for(let i=0;i<name.length;i++){
        if(!nameobj[name[i]]){
            nameobj[name[i][1]]
        }else{
            nameobj[name[i]]++
        }
    }
    console.log(nameobj)
};

