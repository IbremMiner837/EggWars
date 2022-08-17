IDRegistry.genBlockID("iron_spawner");

Block.createBlock("iron_spawner", [
    {
        name: "Iron Spawner",
        texture: [["iron_spawner", 0]],
        inCreative: true
    }
]);

TileEntity.registerPrototype(BlockID.iron_spawner, {
    defaultValues: {
        level: 1,
        item_drop_time_lvl_1: EggWarsConfig.iron_spawner_config.item_drop_time_lvl_1,
        item_drop_time_lvl_2: EggWarsConfig.iron_spawner_config.item_drop_time_lvl_2,
        item_drop_time_lvl_3: EggWarsConfig.iron_spawner_config.item_drop_time_lvl_3,
    }, tick: function() {
        if(this.data.level == 1) {
            this.data.item_drop_time_lvl_1--;

            if(this.data.item_drop_time_lvl_1 == 0) {
                this.data.item_drop_time_lvl_1 = EggWarsConfig.iron_spawner_config.item_drop_time_lvl_1;
                World.drop(this.x, this.y + 1.25, this.z, 280, 1, 0);
            }
        } if(this.data.level == 2) {
            this.data.item_drop_time_lvl_2--;

            if(this.data.item_drop_time_lvl_2 == 0) {
                this.data.item_drop_time_lvl_2 = EggWarsConfig.iron_spawner_config.item_drop_time_lvl_2;
                World.drop(this.x, this.y + 1.25, this.z, 280, 1, 0);
            }
        } if(this.data.level == 3) {
            this.data.item_drop_time_lvl_3--;

            if(this.data.item_drop_time_lvl_3 == 0) {
                this.data.item_drop_time_lvl_3 = EggWarsConfig.iron_spawner_config.item_drop_time_lvl_3;
                World.drop(this.x, this.y + 1.25, this.z, 280, 1, 0);
            }
        }
    }, click: function(id, count, data, coords) {
        if(id == 280 && count == 20) {
            this.data.level + 1;
            Player.decreaseCarriedItem(20);
        }
    }
});