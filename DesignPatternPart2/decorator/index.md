# Decorator
-   基本となるオブジェクトに対して、柔軟に機能を追加するパターン
    -   継承よりも柔軟で、動的に機能追加が可能
    -   基本のオブジェクトを包むように見えるので、Wrapperパターンと呼ばれることもある

# Decorator の構成要素
- Component
  - 抽象クラスまたはインターフェース
  - 拡張される基本機能のAPIを定義

- ConcreteComponent
  - Componentを継承(実装)する子クラス
  - 基本機能の具体的な実装を行う

- Decorator
  - Componentを継承(実装)し、基本機能の拡張(装飾)を行う抽象クラス
  - 内部にComponentのオブジェクトを保持
  - ComponentのAPI定義の実装は子クラスに任せる

- ConcreteDecorator
  - Decoratorを継承する子クラス
  - Componentの基本機能に具体的な拡張(装飾)を行う

# Decorator のオブジェクト指向的要素
-   「継承」「ポリモーフィズム」を利用したパターン
    -   ComponentをConcreteComponent、ComponentとDecorator、DecoratorとConcreteDecoratorが継承(実装)関係
    - 機能を「追加される側」のComponentと、「追加する側」のDecoratorが同じAPIを持っており、利用者はどちらかを操作しているかを意識する必要がない

## Decorator のメリット
- 実行時の機能追加が容易にできる
- 複数の機能追加を組み合わせることが可能

## Decorator のデメリット
- 組み合わせた昨日から特定の機能の削除は困難
- 振る舞いがデコレーターの組み合わせの順序に依存する

## Decorator の使い所
- 追加したい機能のパターンが複数ある場合
- 追加したい機能のパターンに順序がある場合
- 継承を使ってオブジェクトの機能拡張が困難な場合
  - (TypeScriptには存在しないが)finalキーワードがついたクラスなど
