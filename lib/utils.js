const extractCommandName =
 (packageName)=> packageName.substr(packageName.indexof('/')+1);

module.exports = {extractCommandName};
