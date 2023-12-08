## Для работы используйте такие команды

- Для установки всех зависимостей: `$ npm install`;
- Для запуска сборщика Gulp нужно использовать: `$ npm run dev`;
- Для сборки проекта в режиме `"production"`: `$ npm run build` (проект собирается в папке dist);

## Что делает Gulp?

- сжимает HTML в режиме `production`;
- удаляет комментарии из HTML в режиме `production`;
- собирает SCSS файлы, добавляет вендорные префиксы;
- удаляет комментарии из SCSS файлов;
- в режиме `production` сжимает CSS и делает копию без сжатия;
- копирует папку `/static` с содержимым в финальную сборку. То есть любые файлы можно поместить в эту папку и она будет добавлена в финальную сборку без лишней обработки;
- перед каждым запуском сборщика чистит папку с финальным проектом, чтобы не собирать мусор;
- отдельной командой `$ npm run zip` можно заархивировать финальную папку для заказчика **с именем проекта**;
- так же для разработки `gulp` запускает сервер с автоматической перезагрузкой окна в браузере при изменении файлов в проекте;
- в режиме `"production"` при финальной сборке файлы JS сжимаются, а лишние комментарии удаляются.

> Если в папке `src/scss/config` - уже есть файл `fonts.scss` - тогда при добавлении новых шрифтов **НУЖНО УДАЛИТЬ** старый файл `fonts.scss`. Не переживай, при повторном запуске сборки - Gulp все новые шрифты сконвертирует и создаст новый файл `fonts.scss`.

