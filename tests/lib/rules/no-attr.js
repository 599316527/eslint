/**
 * @fileoverview Tests for no-attr rule.
 * @author Kyle He
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-attr"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-attr", rule, {
    valid: [
        {
            code: 'a.href="#new"',
            options: [['src', 'debug']]
        },
        {
            code: 'a["href"]="#new"',
            options: [['src', 'debug']]
        }
    ],

    invalid: [
        {
            code: 'a.src="#new"; a.debug=true',
            options: [['src', 'debug']],
            errors: [
                { message: "Unexpected src.", type: "Identifier" },
                { message: "Unexpected debug.", type: "Identifier" }
            ]
        },
        {
            code: 'a["src"]="#new"; a["debug"]=true;',
            options: [['src', 'debug']],
            errors: [
                { message: "Unexpected src.", type: "MemberExpression" },
                { message: "Unexpected debug.", type: "MemberExpression" }
            ]
        }
    ]
});
