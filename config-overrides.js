const {alias} = require("react-app-rewire-alias")

module.exports = function override(config){
    alias({
        "@Components":"./src/components",
    })(config)

    return config;
}