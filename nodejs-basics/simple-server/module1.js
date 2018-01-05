function mod1func() {
    console.log('print console');
}

var mod1string = 'string';

module.exports.mod1func = mod1func;
module.exports.mod1string = mod1string;
// export func, var 1 by 1 for other files to access
