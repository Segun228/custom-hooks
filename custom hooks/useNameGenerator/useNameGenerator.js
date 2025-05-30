import { uniqueNamesGenerator } from 'unique-names-generator';
const adjectives = [
    'вкидной',
    'агрессивный',
    'странный',
    'кайфовый',
    'чилловый',
    'напряжной',
    'сентиментальный',
    'аморальный',
    'токсичный',
    'угарный',
    'дерзкий',
    'ленивый',
    'тревожный',
    'мрачный',
    'загадочный',
    'чистосердечный',
    'вялый',
    'меланхоличный',
    'психованный',
    'ироничный',
    'лукавый',
    'фанатичный',
    'теплый',
    'колкий',
    'ломаный',
    'кислый',
    'кривой',
    'потусторонний',
    'пыльный',
    'хитрый',
    'расплывчатый',
    'безбашенный',
    'непробиваемый',
    'душный',
    'залипший',
    'зачарованный',
    'поломанный',
    'просветлённый',
    'угрюмый',
    'расшатанный',
    'поехавший',
    'хрупкий',
    'надломленный',
    'изломанный',
    'блаженный',
    'одичавший',
    'сонный',
    'искривлённый',
    'воздушный',
    'разъярённый',
    'нестабильный',
    'бодрый',
];

const roles = [
    'питонист',
    'крестовик',
    'девопс',
    'дизайнер',
    'фронтендер',
    'бекендер',
    'фулстек',
    'тестировщик',
    'админ',
    'архитектор',
    'верстальщик',
    'продакт',
    'тимлид',
    'аналитик',
    'скрамастер',
    'джун',
    'сеньор',
    'мидл',
    'реактёр',
    'библиотекарь',
    'докерист',
    'консольщик',
    'хардкодер',
    'фреймворкер',
    'ботовод',
    'шаман',
    'гуру',
    'дебагер',
    'кодер',
    'синтаксист',
    'технарь',
    'ловкач',
    'олдфаг',
    'залипатор',
    'ментор',
    'баговод',
    'коммитер',
    'рефактор',
    'собеседователь',
    'переменнуюл',
    'клонист',
    'методист',
    'кодинг-мастер',
    'гик',
    'криптофанат',
    'циркач',
    'системщик',
    'шредер',
    'модернизатор',
    'юзер',
    'мокапщик',
    'починяльщик',
    'сабж',
    'псевдокодер',
    'зависимостник',
    'слэшер',
    'движокер',
    'перфомансист',
    'фича-эксперт',
    'гибрид',
    'блокчейнщик',
    'сёрч-консультант',
    'кешер',
    'квантор',
    'темщик',
    'предприниматель',
    'бизнесмен',
    'коллектор',
    'директор',
    'инвестор',
    'стартапер',
    'бухгалтер',
    'финансист',
    'менеджер',
    'консультант',
    'партнер',
    'капициалист',
    'партнёрошник',
    'меценат',
    'проектировщик',
    'операционный',
    'руководитель',
    'спонсор',
    'экономист',
    'бизнес-аналитик',
];

const useNameGenerator = () => {
    const username = uniqueNamesGenerator({
        dictionaries: [roles, adjectives],
        separator: ' ',
        length: 2,
        style: 'capital',

    });
    return String(username)
}
export default useNameGenerator

