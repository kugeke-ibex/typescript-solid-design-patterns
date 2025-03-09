# Abstract Factory
- 関連したオブジェクト(部品)のセットを、具体的なクラスを指定することなく生成するためのインターフェース(API)を提供するパターン
  - 部品の具体的な実装には注目せず、中小のAPIに着目し、そのAPIだけを使って、部品のセットを組み立てていく

# Abstract Factoryの構成要素
- AbstractFactory
  - インターフェースもしくは抽象クラス
  - 抽象的な部品であるAbstractProductを生成するためのAPIを定義する

- AbstractProduct
  - インターフェースもしくは抽象クラス
  - 部品ごとのAPIを定義する

- ConcreteFactory
  - AbstractFactoryを継承(実装)する子クラス
  - 具体的な部品であるConcreteProductを返すように実装を行う

- ConcreteProduct
  - AbstractProductを継承(実装)する子クラス
  - ConcreteFactoryから返される具体的な部品

# Abstract Factoryのオブジェクト指向的要素
- 「ポリモーフィズム」を利用したパターン
  - 「工場」「部品」ともに抽象と具体のセットになっていて、利用者は抽象のAPIのみを使用する
  - どのConcreteFactoryを使うかを切り替えるだけで、生成される部品群を切り替えることができる

## Abstract Factoryのメリット
- 具体的なクラスをクライアントから隠蔽する
- 利用する部品群の生合成を保つことができる

## Abstract Factoryのデメリット
- 必要なクラス数が多く、コードが必要以上に複雑になる可能性がある

## Abstract Factoryの使い所
- 関連する部品群を決められた種別ごとに生合成をたまって切り替えたい場合
  - 例) OSのGUI

## Abstract FactoryとFactory Methodの違い
- 生成するインスタンスの数
  - Factory Method: １つのインスタンスを生成
  - Abstract Factory: 複数の部品のセットを生成
- 抽象化の対象
  - Factory Method: メソッド
  - Abstract Factory: クラス(インターフェース)
