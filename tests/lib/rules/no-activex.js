/**
 * @fileoverview Tests for no-activex rule.
 * @author Kyle He
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-activex"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-activex", rule, {
    valid: [
        "new String(123)",
        "new Number(123)",
        "new window.Number(123)"
    ],

    invalid: [
        {
            code: "new ActiveXObject(\"Microsoft.XMLHTTP\")",
            errors: [{ message: "Unexpected ActiveXObject.", type: "Identifier"}]
        },
        {
            code: "new window.ActiveXObject(\"Microsoft.XMLHTTP\")",
            errors: [{ message: "Unexpected ActiveXObject.", type: "Identifier"}]
        },
        {
            code: "new window['ActiveXObject']('Microsoft.XMLHTTP')",
            errors: [{ message: "Unexpected ActiveXObject.", type: "MemberExpression"}]
        }
    ]
});
