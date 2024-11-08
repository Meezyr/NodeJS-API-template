module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        // All parameters
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    });

    return User;
}