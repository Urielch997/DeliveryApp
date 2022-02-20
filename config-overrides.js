const {alias} = require("react-app-rewire-alias")
const path = require("path");

module.exports = function override(config){
    alias({
        "@Components":"./src/components",
        "@Styles":"./src/styles",
        "@Utils":"./src/utils",
        "@Interface":"./src/interface"
    })(config)

    return config;
}