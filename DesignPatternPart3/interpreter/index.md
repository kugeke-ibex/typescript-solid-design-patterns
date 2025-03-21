# Interpreter
- 構文の解析を行なって、その結果を利用して処理を行うパターン
  - 解析を行うための「規則」をクラスとして表現
  - 規則のツリー構造を扱うことができる
    - 例) 構文木

# Interpreter の構成要素
- Context
  -　解析を行いたい値や情報を提供するクラス

- AbstractExpression
  - 規則を表す抽象クラスもしくはインターフェース
  - 規則が解析を行うための共通なAPIを定義

- NonTerminalExpression
  - AbstractExpressionを継承(実装)する子クラス
  - 具体的な規則を実装
  - 内部にAbstractExpression型のオブジェクトを保持することで、規則の親子関係を表現

- TerminalExpression
  - AbstractExpressionを継承(実装)する子クラス
  - 具体的な規則を実装
  - 末端の規則を表す

# Interpreter のオブジェクト指向的要素
- 「ポリモーフィズム」を利用したパターン
  - AbstractExpressionでクライアントに対してアクセスさせるための共通なAPIを定義
  - NonTerminalExpressionは内部にAbstractExpression型のオブジェクトを保持
  - クライアントやNonTerminalExpressionは、共通APIを使用する事で具体的な実装を意識する必要がなくなる
  - TerminalExpressionやNonTerminalExpressionの追加・削除・切り替え等が可能

# Interpreter のメリット
- 既存のコードを修正する事なく、規則の追加・拡張が可能

# Interpreter のデメリット
- シンプルな規則を実現する場合、コードがより複雑になる可能性がある

# Interpreter の使い所
- 特定の文法で記述された内容を解析して処理したい場合
  - 正規表現
  - SQL解析
  - プログラミング言語開発
