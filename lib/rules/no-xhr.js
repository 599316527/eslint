/**
 * @fileoverview no xhr
 * @author Kyle He (admin@hk1229.cn)
 * @copyright 2015 Kyle He. All rights reserved.
 */
"use strict";

function report(context, node, identifierName) {
    context.report(node, "Unexpected {{name}}.", { name: identifierName });
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {
        'Identifier': function (node) {
            if (node.name === 'XMLHttpRequest') {
                report(context, node, node.name);
            }
        },
        'MemberExpression': function (node) {
            if (node.computed
                && node.object.type === 'Identifier'
                && node.object.name === 'window'
                && node.property.type === 'Literal'
                && node.property.value === 'XMLHttpRequest') {
                report(context, node, node.property.value);
            }
        }
    };

};

module.exports.schema = [];
