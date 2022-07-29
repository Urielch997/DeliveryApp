const {alias} = require("react-app-rewire-alias")
const path = require("path");

module.exports = function override(config){
    alias({
        "@":path.resolve(__dirname, 'src'),
        "@Components":"./src/components",
        "@Styles":"./src/styles",
        "@Store":"./src/store",
        "@Utils":"./src/utils",
        "@Interface":"./src/interface",
        "@Service":"./src/Services",
        "@Hooks":"./src/hooks",
        "@Img":"./src/img"
    })(config)

    return config;
}