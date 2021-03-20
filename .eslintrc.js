module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-newline": "error",
        "array-bracket-spacing": "error",
        "array-callback-return": "error",
        "array-element-newline": "error",
        "arrow-body-style": 0,
        "arrow-parens": [
            "error",
            "always"
        ],
        "arrow-spacing": [
            "error",
            {
                "after": true,
                "before": true
            }
        ],
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": 0,
        "callback-return": 0,
        "camelcase": 0,
        "capitalized-comments": 0,
        "class-methods-use-this": "error",
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "comma-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "complexity": "error",
        "computed-property-spacing": "error",
        "consistent-return": 0,
        "consistent-this": "error",
        "curly": 0,
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-location": "error",
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": 0,
        "func-style": [
            "error",
            "declaration"
        ],
        "function-call-argument-newline": [
            "error",
            "consistent"
        ],
        "function-paren-newline": "error",
        "generator-star-spacing": "error",
        "global-require": 0,
        "grouped-accessor-pairs": "error",
        "guard-for-in": "error",
        "handle-callback-err": "error",
        "id-blacklist": "error",
        "id-denylist": "error",
        "id-length": "off",
        "id-match": "error",
        "implicit-arrow-linebreak": [
            "error",
            "beside"
        ],
        "indent": [
            "error",
            "tab"
        ],
        "indent-legacy": "off",
        "init-declarations": "error",
        "jsx-quotes": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "line-comment-position": 0,
        "linebreak-style": "off",
        "lines-around-comment": "error",
        "lines-around-directive": "error",
        "lines-between-class-members": "error",
        "max-classes-per-file": "error",
        "max-depth": "error",
        "max-len": 0,
        "max-lines": 0,
        "max-lines-per-function": 0,
        "max-nested-callbacks": "error",
        "max-params": "error",
        "max-statements": 0,
        "max-statements-per-line": "error",
        "multiline-comment-style": 0,
        "multiline-ternary": 0,
        "new-cap": "error",
        "new-parens": "error",
        "newline-after-var": 0,
        "newline-before-return": "error",
        "newline-per-chained-call": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-await-in-loop": "error",
        "no-bitwise": "error",
        "no-buffer-constructor": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-confusing-arrow": "error",
        "no-console": "warn",
        "no-constructor-return": "error",
        "no-continue": "error",
        "no-div-regex": "error",
        "no-duplicate-imports": "error",
        "no-else-return": 0,
        "no-empty": 0,
        "no-empty-function": 0,
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-extra-parens": 0,
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": 0,
        "no-invalid-this": 0,
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-loss-of-precision": "error",
        "no-magic-numbers": 0,
        "no-mixed-operators": 0,
        "no-mixed-requires": "error",
        "no-multi-assign": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-native-reassign": "error",
        "no-negated-condition": "error",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "error",
        "no-new": 0,
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-path-concat": "error",
        "no-plusplus": 0,
        "no-process-env": "off",
        "no-process-exit": "error",
        "no-promise-executor-return": "error",
        "no-proto": "error",
        "no-restricted-exports": "error",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": 0,
        "no-spaced-func": "error",
        "no-sync": "error",
        "no-tabs": 0,
        "no-template-curly-in-string": "error",
        "no-ternary": 0,
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-undefined": 0,
        "no-underscore-dangle": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-expressions": 0,
        "no-unused-vars": "warn",
        "no-use-before-define": "error",
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": 0,
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": 0,
        "object-curly-newline": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-shorthand": "error",
        "one-var": "off",
        "one-var-declaration-per-line": "error",
        "operator-assignment": "error",
        "operator-linebreak": "error",
        "padded-blocks": 0,
        "padding-line-between-statements": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": [
            "error",
            {
                "object": true,
                "array": false
            }
        ],
        "prefer-exponentiation-operator": "error",
        "prefer-named-capture-group": 0,
        "prefer-numeric-literals": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-reflect": "error",
        "prefer-regex-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": "off",
        "quotes": [
            "error",
            "single"
        ],
        "radix": "error",
        "require-atomic-updates": 0,
        "require-await": "warn",
        "require-jsdoc": 0,
        "require-unicode-regexp": 0,
        "rest-spread-spacing": "error",
        "semi": "off",
        "semi-spacing": "error",
        "semi-style": [
            "error",
            "last"
        ],
        "sort-imports": "error",
        "sort-keys": "off",
        "sort-vars": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "strict": "error",
        "switch-colon-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": [
            "error",
            "never"
        ],
        "valid-jsdoc": "error",
        "vars-on-top": "error",
        "wrap-iife": "error",
        "wrap-regex": "error",
        "yield-star-spacing": "error",
        "yoda": "error",
        "vue/html-self-closing": [
            "error",
            {
                "html": {
                    "normal": "never",
                    "component": "never"
                }
            }
        ],
        "vue/attributes-order": [
            "warn",
            {
                "order": [
                    "DEFINITION",
                    "LIST_RENDERING",
                    "CONDITIONALS",
                    "RENDER_MODIFIERS",
                    "GLOBAL",
                    "UNIQUE",
                    "TWO_WAY_BINDING",
                    "OTHER_DIRECTIVES",
                    "OTHER_ATTR",
                    "EVENTS",
                    "CONTENT"
                ],
                "alphabetical": true
            }
        ],
        "vue/max-attributes-per-line": [
            "error",
            {
                "singleline": 1,
                "multiline": {
                    "max": 1,
                    "allowFirstLine": false
                }
            }
        ],
        "vue/html-indent": [
            "error",
            "tab",
            {
                "attribute": 1,
                "baseIndent": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true,
                "ignores": []
            }
        ],
        "vue/html-closing-bracket-newline": [
            "error",
            {
                "singleline": "never",
                "multiline": "always"
            }
        ],
        "vue/valid-v-slot": 0,
        "vue/order-in-components": [
            "error",
            {
                "order": [
                    "el",
                    "name",
                    "key",
                    "parent",
                    "functional",
                    [
                        "delimiters",
                        "comments"
                    ],
                    [
                        "components",
                        "directives",
                        "filters"
                    ],
                    "extends",
                    "mixins",
                    [
                        "provide",
                        "inject"
                    ],
                    "ROUTER_GUARDS",
                    "layout",
                    "middleware",
                    "validate",
                    "scrollToTop",
                    "transition",
                    "loading",
                    "inheritAttrs",
                    "model",
                    [
                        "props",
                        "propsData"
                    ],
                    "emits",
                    "setup",
                    "asyncData",
                    "data",
                    "fetch",
                    "head",
                    "computed",
                    "watch",
                    "watchQuery",
                    "LIFECYCLE_HOOKS",
                    "methods",
                    [
                        "template",
                        "render"
                    ],
                    "renderError"
                ]
            }
        ]
    }
}
