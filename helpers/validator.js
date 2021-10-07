const { body } = require("express-validator");

class Validator {
  validateLogin(request) {
    return [
      body("login")
        .isEmail()
        .normalizeEmail()
        .withMessage("Логин должен быть e-mail"),
      body("password")
        .isStrongPassword({
          minLength: 8,
          minLowercase: 1,
          minNumbers: 1,
          minUppercase: 1,
          minSymbols: 1,
        })
        .withMessage(
          "Пароль должен содержать минимум 8 символов, 1 заглавную букву, 1 цифру и специальный символ"
        ),
    ];
  }
  validateSN(requers) {
    return [
      body("instagram")
        .isLength({ min: 2, max: 16 })
        .matches(
          /@(?=.{5,64}(?:\s|$))(?![_])(?!.*[_]{2})[a-zA-Z0-9_]+(?<![_.])/gm
        )
        .withMessage("Введите корректный профиль Instagram, начинающийся с @"),
      body("telegram")
        .isLength({ min: 2, max: 16 })
        .matches(
          /@(?=.{5,64}(?:\s|$))(?![_])(?!.*[_]{2})[a-zA-Z0-9_]+(?<![_.])/gm
        )
        .withMessage("Введите корректный профиль Telegram, начинающийся с @"),
    ];
  }
}

module.exports = new Validator();
