export interface Product {
    id: number;
    price: number;
    rating: number;
    name: string;
    description: string;
    image: string;
    link: string;
}

export const products = [
    {
        id: 11,
        price: 190,
        rating: 4.8,
        name: 'Ollin',
        description: `
    Тип спрей-кондиционер
    Действие увлажнение, питание
    Объем 250
    Для мужчин Нет
    Особенностине требует смывания`,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/hc0/49612518424606/ollin-perfect-hair-15-v-1-250-ml-100008645-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-sprei-konditsioner-250-ml-100008645/?c=750000000#!/item',
    },
    {
        id: 12,
        price: 229,
        rating: 4.8,
        name: 'Masil 8 second',
        description: `Тип маска
        Действие восстановление
        Вид волостонкие и поврежденные
        Объем 8 мл
        Для мужчин Да
        Органическая косметика Нет`,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/h90/48995356278814/masil-8-seconds-salon-hair-mask-8-ml-100727504-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/masil-8-seconds-salon-hair-mask-maska-8-ml-100727504/?c=750000000#!/item',
    },
    {
        id: 13,
        price: 290,
        rating: 4.8,
        name: 'Lador',
        description: `Восстанавливающая маска с коллагеном для сухих и поврежденных волос La'dor Hydro 
        LPP Treatment Low Mollecular PPT Treatment for dry and damaged hair имеет специальную формулу, 
        предназначенную для интенсивного ухода за окрашенными и осветленными волосами`,
        image: 'https://images-na.ssl-images-amazon.com/images/I/616i5Il16qL._AC_SL1000_.jpg',
        link: 'https://kaspi.kz/shop/p/lador-hydro-lpp-treatment-maska-150-ml-100366529/?c=750000000#!/item',
    },
    {
        id: 14,
        price: 310,
        rating: 4.8,
        name: 'Массажная расческа Chelay',
        description: `Профессиональная универсальная Расческа для женщин для укладки и расчесывания для всех типов волос (сухих, окрашенных, нарощенных, кудрявых, мокрых и др.).`,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h71/63604710899742/massazhnaya-rascheska-chelay-dlya-vlazhnykh-sukhikh-gustykh-kudryavykh-volos-s-antistaticheskim-effektom-oranzhevaya-106747457-1.jpg',
        link: 'https://kaspi.kz/shop/p/massazhnaja-rascheska-chelay-dlja-vlazhnyh-suhih-gustyh-kudrjavyh-volos-s-antistaticheskim-effektom-rozovaja-106747457/?c=750000000#!/item',
    },
    {
        id: 15,
        price: 400,
        rating: 4.8,
        name: 'Intel Core i9-10900',
        description: `10 Cores / 20 Threads
    Socket Type LGA 1200
    Up to 5.2 GHz
    Compatible with Intel 400 series chipset based motherboards
    Intel Turbo Boost Max Technology 3.0 Support`,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61HOG%2BsgdbL._AC_SL1000_.jpg',
        link: 'https://www.amazon.com/Intel-i9-10900-Desktop-Processor-Chipset/dp/B086ML4XSD/ref=sr_1_2_sspa?crid=134UYG6XPHUA5&dchild=1&keywords=processor&qid=1615811858&sprefix=processor%2Caps%2C411&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOE42OEZJOFpSTTlMJmVuY3J5cHRlZElkPUEwNTQxNzM5M1FOS1Y2VExNM0lOTSZlbmNyeXB0ZWRBZElkPUEwMDM3OTU1MUFHQVVHUUhKU0Q5QyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    },
    {
        id: 21,
        price: 410,
        rating: 4.6,
        name: 'Beauty tools бигуди керлик',
        description: `тип: керлик
        материал: полиэстер
        количество в упаковке, шт: 1
        цвет: розовый
        тип волос: для всех типов
        страна производства: Китай`,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h0b/52655802875934/beauty-tools-krab-rezinka-bigudi-76675-rozovyi-1-105922243-1.jpg',
        link: 'https://kaspi.kz/shop/p/beauty-tools-bigudi-kerlik-76675-rozovyi-1-sht-105922243/?c=750000000#!/item',
    },
    {
        id: 22,
        price: 2185,
        rating: 4.5,
        name: 'Janeke массажная расческа',
        description: `Массажная база щётки состоит из запатентованной формы, которая представляет собой основание с отверстиями в форме пчелиного улья.`,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/h72/51106344173598/janeke-superbrush-93sp226-rsa-original-rozovyj-101584393-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/janeke-massazhnaja-rascheska-superbrush-93sp226-rsa-rozovyi-101584393/?c=750000000#!/item',
    },
    {
        id: 23,
        price: 650,
        rating: 4.5,
        name: 'Nvidia GeForce GTX 1070',
        description: `
    Brand	NVIDIA
    Graphics Coprocessor	NVIDIA GeForce GTX 1070
    Graphics Processor Manufacturer	NVIDIA`,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61rKJovIyiL._AC_SL1010_.jpg',
        link: 'https://www.amazon.com/Nvidia-GeForce-1070-Founders-900-1G411-2520-000/dp/B07SSVWFML/ref=sr_1_9?crid=3SYXJZLN404NO&dchild=1&keywords=nvidia+graphics+card&qid=1615813513&sprefix=nvidia%2Caps%2C452&sr=8-9',
    },
    {
        id: 24,
        price: 1100,
        rating: 4.7,
        name: 'Likato Professional Крем-спрей для волос 17в1 250 мл',
        description: `тип: спрей
фиксация: средняя
тип волос: для всех типов
страна производства: Россия`,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/h90/34400966836254/likato-professional-krem-sprej-dla-volos-17v1-250-ml-101291213-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/likato-professional-krem-sprei-dlja-volos-17v1-250-ml-101291213/?c=750000000#!/item',
    },
    {
        id: 25,
        price: 470,
        rating: 4.8,
        name: 'Спрей TIGI Bed Head Superstar Queen',
        description: `тип: спрей
фиксация: слабая
тип волос: для всех типов
страна производства: США`,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/h1a/61825034518558/lak-dla-pridania-ob-ema-volosam-tigi-bed-head-superstar-queen-for-a-day-311-ml-106129329-1.jpg',
        link: 'https://kaspi.kz/shop/p/sprei-tigi-bed-head-superstar-queen-for-a-day-dlja-pridanija-ob-ema-311-ml-106129329/?c=750000000#!/item',
    },

];