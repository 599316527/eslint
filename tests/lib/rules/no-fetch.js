/**
 * @fileoverview Tests for no-fetch rule.
 * @author Kyle He
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-fetch"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-fetch", rule, {
    valid: [
        "var fakeAjax = {}; fakeAjax.fetch = function (url) {return {}}; fakeAjax.fetch('/login/verify');"
    ],

    invalid: [
        {
            code: "fetch('/login/verify').then(function () {});",
            errors: [{ message: "fetch is not allowed.", type: "CallExpression"}]
        },
        {
            code: "window.fetch('/login/verify')",
            errors: [{ message: "fetch is not allowed.", type: "CallExpression"}]
        },
        {
            code: "window['fetch']('/login/verify')",
            errors: [{ message: "fetch is not allowed.", type: "CallExpression"}]
        }
    ]
});
