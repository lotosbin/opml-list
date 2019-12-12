# opml-list
收集 整理 opml 列表


## 因
在做一个基于人工智能学习内容推荐的RSS阅读器，需要收集RSS源作为订阅源。

## 果
- 在一个每日更新所有的订阅源
- 生一个完整的opml作为阅读器的订阅源

## 体
- [x] github actions 每日执行 index.js,
- [x] index.js 中会下载 收录的 opml 文件，
- [x] 合并所有opml文件为一个 opml文件
- [ ] 重新分类所有feed，生成分类/主题的 opml文件
- [ ] 扩展opml协议支持rsshub使用的模板路径的订阅源，可以动态展开成固定的订阅源

## 用
- [x] data 目录下是每日采集的opml文件
- [ ] generate/all.opml 存放合并后的opml文件
- [ ] generate/{category|tag}.opml 为重新整理后的 opml 文件 
- [ ] 可以直接订阅rsshub的有模板订阅源

## 变(参与)
- 提交issue，添加 简单描述和opml文件的url
