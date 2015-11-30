/**
 * @fileoverview no fetch
 * @author Kyle He (admin@hk1229.cn)
 * @copyright 2015 Kyle He. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {
        "CallExpression": function(node) {
            if ((node.callee.type === "Identifier"
                    && node.callee.name === "fetch")
                || (node.callee.type === "MemberExpression"
                    && node.callee.object.type === "Identifier"
                    && node.callee.object.name === "window" && (
                        (node.callee.property.type === "Identifier"
                            && node.callee.property.name === 'fetch')
                        || (node.callee.property.type === 'Literal'
                            && node.callee.property.value === 'fetch')
                    )
                )
            ) {
                context.report(node, "fetch is not allowed.");
            }
        }
    };

};

module.exports.schema = [];
