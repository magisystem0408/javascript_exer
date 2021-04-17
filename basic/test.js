function hello(callback,lastname){
    console.log(callback(lastname))
}

hello(function(name){
    return 'Code'+name;
},'mamushi');