# 目前为记录开发过程，而不是使用说明

## Eslint

```shell
npm i eslint -D
npx eslint init
# windows版的vscode会提示是否使用node_modules中的eslint，是即可。
```

## Prettier

**.prettierrc**

```javascript
{
    // 就喜欢单引号
    "singleQuote": true,
    // 箭头函数，能不要括号就不要括号
    "arrowParens": "avoid",
    // 就不要逗号
    "trailingComma": "none"
}
```

## BABEL

```javascript
"modules": false // 不让babel转译es为commonjs，留给rollup做
```

## JEST

```shell
# @types/jest用于代码提示
npm i jest @types/jest -D
```

```shell
# 生成配置文件
npx jest --init
```

最终修改为

```javascript
module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', 'test'],
  testEnvironment: 'node',
  verbose: true
};
```

eslintrc.js 调整

```javascript
module.exports = {
  env: {
    jest: true // 避免测试文件报找不到it或expect。也可以过滤test目录，不做eslint检查
  }
};
```

添加执行脚本
package.json

```json
{
  "scripts": {
    "test": "jest test"
  }
}
```
