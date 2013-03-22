// Wire spec that injects a greeter
module.exports = {
    greeter: {
        module: Math.random() > 0.5
            ? 'scripts/components/greeter_robot'
            : 'scripts/components/greeter_other'
    },
    welcome: {
        create: {
            module: 'scripts/components/greeter',
            args: { $ref: 'greeter' } 
        }
    }
};
