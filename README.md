## Тестовое задание #1

Проверяем начальные навыки: react, redux, react-router

Внимание, перезапуск первого ТЗ + усложненная версия состоится до конца марта 2019, следите за новостями в [telegram-канале](https://t.me/maxpfrontend)

#### Задача
Реализовать приложение, которое умеет показывать следующие страницы:

+ `/` - главная
+ `/login` - страница ввода логина и пароля
+ `/news` - страница с новостями (любая однотипная информация)
+ `/profile` - страница с произвольным текстом, недоступная без авторизации

На сайте, в шапке или подвале реализовать ссылки:

+ На главную (`/`)
+ Новости (`/news`)
+ Профиль (`/profile`)

Если пользователь кликает на страницу “профиля” и он не “авторизован” - перекидывать на страницу /login

Форма входа (/login) принимает “фейковые” данные:

```
username: Admin
password: 12345 
```

Если введены другие данные, то показывается сообщения:

Имя пользователя или пароль введены не верно 

Если введены корректные данные, то перебрасывать на страницу `/profile`

Информацию об авторизации пользователя можно хранить в localStorage, простым параметром true/false. Базу данных реализовать не нужно.

Все необходимое на ваш взгляд, прокинуть через Redux.

Оформление (дизайн) — не важно. Сделайте, чтобы можно было комфортно смотреть пример в браузере.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
