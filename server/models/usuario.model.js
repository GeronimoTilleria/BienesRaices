const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email es requerido"],
        unique: [true, "Email already taken"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Por favor ingrese un email valido"
        }
    },
    password: {
        type: String,
        required: [true, "Password requerido"],
        minlength: [8, "El password debe tener más de 8 caracteres"]
    }
}, { timestamps: true });

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports.Usuario = mongoose.model('Usuario', UserSchema);