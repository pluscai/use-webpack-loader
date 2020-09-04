const loaderUtils = require('loader-utils');

// module.exports = function(source) {
//     console.log(this.query);
//     return source.replace('csx',this.query.name);
// }

module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    const callback = this.async();

    setTimeout(() => {
        const result = source.replace('csx',options.name);
        callback(null, result);
    }, 1000)

}