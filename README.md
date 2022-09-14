# nk-ui
基于vite搭建的vue组件库


# 思考和设计
一般的研发流程，会经历：准备阶段、开发阶段、测试阶段、构建阶段、部署阶段、监控阶段、分析复盘阶段。监控阶段会获取数据，分析数据和复盘，然后进行迭代优化，开始新一轮需求导入，形成闭环。
流程中，每个环节的阻塞点少，衔接得越畅顺，研发效率就高。
所以，我们要从研发流程入手，去思考和设计组件库如何研发。

## 准备阶段
通常是需求和UI评审,然后进行前端方案设计，然后再技术评审。该项目为个人项目仓库，所以主要考虑效果的设计方案。效果是面向用户的，主要是开发者，方案设计考虑到：
- 组件库的组件分类和实现
- 组件库主题换肤
- 组件库按需加载
- 组件库文档
- 组件库多类型模块构建

## 开发阶段
开发阶段的首要任务是创建工程化环境(该环境可以成为样板，开发成工具以供复用), 然后在工程化环境中进行开发、验证的循环。
本地工程化环境的搭建，不但要考虑开发阶段的使用，还要考虑和其他阶段的衔接：
- 衔接准备阶段：根据准备阶段的方案设计进行技术资源的集成。例如编写组件使用Vue，编写样式使用Scss，使用TypeScript进行类型检查。
- 衔接测试阶段：
  - 校验 
    - 语法规则检查：Eslint
    - 风格检查：Prettier
    - 提交信息检查：Husky和Git钩子
  - 测试
    - 单元测试：Vitest
    - E2E测试：Cypress
    - 覆盖率：codecov
- 构建阶段
    - 资源
      - 按需引入
      - 发布的包资源
        - 多类型模块
      - 文档
- 部署(发布)阶段
  - 语义化标签
  - 文档部署
  - 包发布：npm
  - 说明文档：README.md
  - 更新日志：CHANGELOG.md

综合上述的流程资源，从三个方面考虑搭建工程化环境：
  1. 前端工具链，有提供开箱即用的工具链最好，省下从零搭建环境的很多工作。例如Vite
  2. 衔接流程各个环节技术资，即上述的所有技术资源，Vue、Scss、Typescript等等
  3. 如何管理代码资源, 使用MonoRepo风格? 使用什么包管理器：Npm、Yarn or Pnpm?

开发阶段搭建好工程化环境后，可以使用工具链很好地承担其他流程的任务，提高研发效率和系统的稳定性。
然后开始进入代码编写。开发过程中要有规范严格约束，这样可以提前避免很多潜在性的问题。

# 规范
规范覆盖整个研发流程，每个环节的设计和进行都要被规范约束。并且规范要撰写成文档，随时查阅。
例如组件规范、性能规范。
> 完善中

## 工程化环境
综上所述，最后决定组件库的工程化环境需要的资源和搭建进度如下：
### 开发
#### 工具链
- [√] 构建工具Vite

#### 开发资源
- [ ] 类型检查TypeScript
- [ ] 预处理器scss
- [ ] vue，sfc支持

#### 管理代码
- [ ] 包管理器Pnpm
- [ ] 项目代码管理模式Monorepo

### 测试
- [ ] 单元测试 Vitest
- [ ] 覆盖率 coverage

#### 校验
- [ ] 语法检查 eslint
- [ ] 风格检查 prettier
- [ ] husky git钩子+提交检查

##### 构建
- [ ] 按需引入
- [ ] 文档 vitePress
- [ ] 模块兼容 umd、iife、esm、cjs