module.exports = {
    root: true,
    env: {
        "browser": true,
        "commonjs": true,
        "es6": true,
    },
    parser: "@babel/eslint-parser",
    extends: [
        // "standard"
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    globals: {
        "__ENV__": true,
        "React": true,
        "process": true,
        "globalThis": true,
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 2018,
        "sourceType": 'module',
    },
    plugins: ['react','react-hooks'],
    /**
     * "off" 或 0 - 关闭规则
     * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
    rules: {
        //4个空格缩进
        "indent": [2, 4],
        //禁止使用Tab
        "no-tabs": 0,
        "no-cond-assign": 2,
        "no-undef": 2,
        "no-unused-vars": 2,
        // "no-console": [
        //     "error", {
        //         "allow": ["error"]
        //     }
        // ],
        // 要求使用 === 和 !==
        "eqeqeq": 2,
        // 要求 switch 语句中有 default 分支
        "default-case": 2,
        // 禁止 function 定义中出现重名参数
        "no-dupe-args": 2,
        // 不允许在变量定义之前使用它们
        "no-use-before-define": 0,
        // 要求调用无参构造函数时有圆括号
        "new-parens": 2,
        // ES6.相关 //
        "arrow-spacing": [2, {
            "before": true,
            "after": true,
        }],
        "react/prop-types": 0,
        "react/jsx-uses-react": 2,
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则   useeffect依赖项为[]时会触发eslint error 目前先注掉
        // "react-hooks/exhaustive-deps": ["warn", {// 检查 effect 的依赖
        //     "additionalHooks": "(useMyCustomHook|useMyOtherCustomHook)"
        // }]
    },
}