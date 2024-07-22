const {ScriptBase} = require("../typings");


class TestScript extends ScriptBase{

    _name_ = "TestScript";
    _author_ = "AuraTeam";
    _version_ = "1.0.0";

    init() {
        super.init();
        console.log(111)
    }
}

module.exports = TestScript;