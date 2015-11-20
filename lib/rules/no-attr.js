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

    var disallowedAttributes = context.options[0];

    return {
        'Identifier': function (node) {
            disallowedAttributes.forEach(function (disallowedAttribute) {
                if (node.name === disallowedAttribute) {
                    report(context, node, node.name);
                }
            });
        },
        'MemberExpression': function (node) {
            if (node.computed && node.property.type === 'Literal') {
                var value = node.property.value;
                disallowedAttributes.forEach(function (disallowedAttribute) {
                    if (value === disallowedAttribute) {
                        report(context, node, value);
                    }
                });
            }
        }
    };

};

module.exports.schema = [{
    type: 'array',
    minItems: 1,
    items: {
        type: 'string'
    },
    uniqueItems: true
}];
