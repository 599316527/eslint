/**
 * @fileoverview Tests for no-xhr rule.
 * @author Kyle He
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-xhr"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-xhr", rule, {
    valid: [
        "new String(123)",
        "new Number(123)",
        "new window.Number(123)"
    ],

    invalid: [
        {
            code: "new XMLHttpRequest()",
            errors: [{ message: "Unexpected XMLHttpRequest.", type: "Identifier"}]
        },
        {
            code: "new XMLHttpRequest",
            errors: [{ message: "Unexpected XMLHttpRequest.", type: "Identifier"}]
        },
        {
            code: "new window.XMLHttpRequest",
            errors: [{ message: "Unexpected XMLHttpRequest.", type: "Identifier"}]
        },
        {
            code: "new window['XMLHttpRequest']",
            errors: [{ message: "Unexpected XMLHttpRequest.", type: "MemberExpression"}]
        }
    ]
});
