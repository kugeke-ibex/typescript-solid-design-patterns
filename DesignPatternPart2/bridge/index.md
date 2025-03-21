# Bridge
- 機能を提供するクラスと、実装を提供するクラスを独立させるためのパターン
  - 目的(何を行うのか)と手段(どうやって行うのか)を分離する
  - 委譲を使うことで、「機能」と「実装」の橋渡しをしているように見える

# Bridgeの構成要素
- Abstraction
  - 基本機能を提供するクラス
  - 内部に「実装」を行うオブジェクトを保持しており、具体的な処理はそのオブジェクトに委譲

- RefinedAbstraction
  - Abstractionを継承する子クラス
  - 基本機能の拡張や別の機能を追加

- Implementor
  - 「実装」を提供するインターフェースもしくは抽象クラス
  - 機能を実現するためのAPIを定義
  - AbstractionのAPIと一致している必要はない

- ConcreteImplementor
  - Implementorを実装(継承)する子クラス
  - 機能の具体的な「実装」を行う

# Bridgeのオブジェクト指向的要素
- 「継承」「ポリモーフィズム」「委譲」を利用したパターン
  - AbstractionとRefinedAbstraction、ImplementorとConcreteImplementorが継承(実装)関係
  - Abstractionのフィールドを抽象となるImplementorとすることで、具体的な実装を意識する必要がなくなる
  - 機能を提供するクラスの具体的な処理は、実装を提供するクラスに委譲される

## Bridgeのメリット
- 機能の拡張と実装の修正が容易になる
- プログラムの実行時に実装を切り替えられる
- 機能や実装のバリエーションが豊富な場合、最終的に作成すべきクラス数を抑える事ができる

## Bridgeのデメリット
- 機能や実装にバリエーションが少ない場合、余計にクラすうが増えコードが複雑になる可能性がある

## Bridgeの使い所
- 機能と実装の組み合わせが多い場合
  - 継承のみ実現する場合、組み合わせ数(掛け算)分のクラスを作成する必要がある
  - Bridgeパターンでは、親クラス(2) + 機能数 + 実装数のクラスを作成する
