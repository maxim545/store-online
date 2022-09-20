import App from './components/app/app';
import './global.css';

const app = new App();
app.start();
console.log(`Выполнены все пункты задания.
✔️ 1. Страница с товарами содержит карточки всех товаров а также фильтры, строку поиска, поле для сортировки. Выполняются требования к вёрстке +10

✔️ 2. Карточка товара содержит её изображение, название, текстом или условным значком обозначено количество экземпляров, год покупки, форма, цвет, размер, является ли товар популярным +10

✔️ 3. Добавление товара в избранное +20
+ кликая по карточке с товаром или по кнопке на ней товар можно добавлять в избранное или удалять из избранного. Карточки добавленных в избранное товаров внешне отличаются от остальных +10
+ на странице отображается количество добавленных в избранное итоваров. При попытке добавить в избранное больше 20 товаров, выводится всплывающее уведомление с текстом "Извините, все слоты заполнены" +10

✔️ 4. Сортировка +20
+ сортируются только те товары, которые в данный момент отображаются на странице
+ сортировка товаров по названию в возрастающем и спадающем порядке +10
+ сортировка товаров по году их приобретения в возрастающем и спадающем порядке +10

✔️ 5. Фильтры в указанном диапазоне от и до +30
+ фильтры по количеству экземпляров +10
+ фильтры по году покупки +10
+ для фильтрации в указанном диапазоне используется range slider с двумя ползунками. При перемещении ползунков отображается их текущее значение, разный цвет слайдера до и после ползунка +10

✔️ 6. Фильтры по значению +30
+ Выбранные фильтры выделяются стилем.
+ фильтры по форме +5
+ фильтры по цвету +5
+ фильтры по размеру +5
+ можно отобразить только популярные товары +5
+ можно отфильтровать товары по нескольким фильтрам одного типа +10
+ Для нескольких фильтров одного типа отображаются товары, которые соответствуют хоть одному выбранному фильтру. Например, можно отобразить снежинки и колокольчики; или белые, желтые и красные товары; или большие и средние.

✔️ 7. Можно отфильтровать товары по нескольким фильтрам разного типа +20
+ Для нескольких фильтров разного типа отображаются только те товары, которые соответствуют всем выбранным фильтрам.
+ Например, можно отобразить только товары синего цвета. Или популярные белые и красные товары выпущенные в 2000-2010 годах.
+ Если товаров, соответствующих всем выбранным фильтрам нет, на странице выводится уведомление в человекочитаемом формате, например, "Извините, совпадений не обнаружено"

✔️ 8. Сброс фильтров +20
+ есть кнопка reset для сброса фильтров +10
+ Кнопка reset сбрасывает только фильтры, не влияя на порядок сортировки или товары, добавленные в избранное.
+ После использования кнопки reset фильтры остаются работоспособными
+ при сбросе фильтров кнопкой reset, ползунки range slider сдвигаются к краям, значения ползунков возвращаются к первоначальным, range slider закрашивается одним цветом +10

✔️ 9. Сохранение настроек в local storage +10
выбранные пользователем фильтры, порядок сортировки, добавленные в избранное товара сохраняются при перезагрузке страницы. Есть кнопка сброса настроек, которая очищает local storage +10

✔️ 10. Поиск +30
+ при открытии приложения курсор находится в поле поиска +2
+ автозаполнение поля поиска отключено (нет выпадающего списка с предыдущими запросами) +2
+ есть placeholder +2
+ в поле поиска есть крестик, позволяющий очистить поле поиска +2
+ если нет совпадения последовательности букв в поисковом запросе с названием товара, выводится уведомление в человекочитаемом формате, например "Извините, совпадений не обнаружено" +2
+ при вводе поискового запроса на странице остаются только те товары, в которых есть указанные в поиске буквы в указанном порядке. При этом не обязательно, чтобы буквы были в начале слова. Регистр символов при поиске не учитывается +10
+ Поиск ведётся только среди товаров, которые в данный момент отображаются на странице.
+ если очистить поле поиска, на странице отображаются товары, соответствующие всем выбранным фильтрам и настройкам сортировки +10

✖️ Дополнительный функционал на выбор +20
- в процессе сортировки, фильтрации, поиска карточки с изображениями товаров плавно меняют своё положение +10
+ очень высокое качество оформления приложения + дополнительный, не указанный в задании, сложный в реализации функционал, улучшающий качество приложения, удобство пользования им () +10
Дополнительный функционал: (SPA - с тремя страницами: магазин товаров, трендовые товары, корзина товаров)`);

console.log(`Итого: 210/200 => 200`);

