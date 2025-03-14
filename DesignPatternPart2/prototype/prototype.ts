export {}

import _ from "lodash";

abstract class ItemPrototype {
    constructor(
        public name: string,
        public detail: Detail = {"comment": []}
    ) {}

    addComment(comment: string) {
        this.detail.comment.push(comment);
    }

    abstract createCopy(): ItemPrototype;
}

type Detail = {"comment": string[]};

class DeepCopyItem extends ItemPrototype {
    createCopy(): ItemPrototype {
        return _.cloneDeep(this);
    }
}

class ShallowCopyItem extends ItemPrototype {
    createCopy(): ItemPrototype {
        return _.clone(this);
    }
}

class ItemManager {
    items: Items = {};

    registerItem(key: string, item: ItemPrototype) {
        this.items[key] = item;
    }

    create(key: string) {
        if (key in this.items) {
            const item = this.items[key];
            return item.createCopy();
        }
        throw new Error("指定されたキーは存在しません");
    }
}
type Items = {[key: string]: ItemPrototype};

function run() {
    const mouse = new DeepCopyItem("マウス");
    mouse.addComment("original");

    const keyboard = new ShallowCopyItem("キーボード");
    keyboard.addComment("original");

    const manager = new ItemManager();
    manager.registerItem("mouse", mouse);
    manager.registerItem("keyboard", keyboard);

    const clonedMouse = manager.create("mouse");
    const clonedKeyboard = manager.create("keyboard");

    console.log("マウス（オリジナル）: ", mouse);
    console.log("マウス（コピー）: ", clonedMouse);
    console.log("キーボード（オリジナル）: ", keyboard);
    console.log("キーボード（コピー）: ", clonedKeyboard);

    clonedMouse.addComment("Good");
    clonedKeyboard.addComment("SoSo");
    console.log("");
    console.log("マウス（オリジナル）: ", mouse);
    console.log("マウス（コピー）: ", clonedMouse);
    console.log("キーボード（オリジナル）: ", keyboard);
    console.log("キーボード（コピー）: ", clonedKeyboard);
}

run();
