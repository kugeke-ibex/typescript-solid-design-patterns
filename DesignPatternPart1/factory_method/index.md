# FactoryMethod
- 親クラスでインスタンスの生成方法を定め、具体的に何をどうやって作るかは子クラスで定めるようなパターン
    - 生成したいオブジェクトのコンストラクタを呼び出してインスタンスを生成するのではなく、親クラスに定義された生成用のメソッドを呼び出してインスタンスの生成を行う

# FactoryMethodの構成要素
- Creator
  - Productを生成する抽象クラス
  - Productの生成を行うcreateメソッド
  - 具体的な生成方法を実装するためのAPIを提供

- ConcreteCreator
  - Creatorを継承したクラス
  - 製品生成のための具体的な方法を実装
  - ConcreteProductクラスのインスタンスを返却

- Product
  - Creatorのオブジェクト生成メソッドで生成される抽象クラス or インターフェース
  - 生成される製品が持つべきAPIを定義する

- ConcreteProduct
  - Productを継承(実装)したクラス
  - ProductのAPIに沿った具体的な製品の機能を実装

# FactoryMethodのオブジェクト指向的要素
- 「継承」を利用したパターン
  - ProductとConcreteProduct、CreatorとConcreteCreatorの間にそれぞれ継承関係がある
  - Template Methodと同様に、処理（生成）の枠組みを親クラスで決定し、子クラスごとに具体的にあ生成方法を実装

## FactoryMethodのメリット
- オープンクローズドの原則に違反することなく新しいProductを追加できる
- オブジェクトの利用側とオブジェクトの紐付きを弱くすることができる

## FactoryMethodのデメリット
- 簡単な生成処理の場合はFactory Methodを利用しない方がコードがシンプルになる

## FactoryMethodの使い所
- 類似した複数種類のオブジェクトを生成する必要がある場合
  - オープンクローズドの原則に違反することなく別のオブジェクトの追加が可能
- オブジェクトの生成ロジックが複雑な場合
  - createメソッドを呼び出すだけで複雑な生成ロジックを記述せず生成可能
- Productの種類や生成手順が頻繁に変更される可能性がある場合
  - 利用側とProductの結びつきが弱いので、変更に強い設計となる
