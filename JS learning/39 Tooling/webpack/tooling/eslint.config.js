export default [
    {
        languageOptions: {
            globals: {
                console: "readonly",
                document: "readonly",
                window: "readonly"
            }
        },

        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
            "semi": ["error", "always"],
            "quotes": ["error", "double"]
        }
    }
];