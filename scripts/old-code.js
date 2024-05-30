/* Объявления глобальных переменных */
const door_models = {
    "Модель №1": { "по ширине": 0, "по высоте": 0 }, "Модель №2": { "по ширине": 1, "по высоте": 0 }, "Модель №3": { "по ширине": 2, "по высоте": 0 },
    "Модель №4": { "по ширине": 3, "по высоте": 0 }, "Модель №5": { "по ширине": 4, "по высоте": 0 }, "Модель №6 (Prav)": { "по ширине": 0, "по высоте": 1 },
    "Модель №6 (Lev)": { "по ширине": 0, "по высоте": 1 }, "Модель №7": { "по ширине": 2, "по высоте": 0 }, "Модель №8": { "по ширине": 4, "по высоте": 0 },
    "Модель №9": { "по ширине": 3, "по высоте": 0 }, "Модель №10 (Prav)": { "по ширине": 2, "по высоте": 1 }, "Модель №10 (Lev)": { "по ширине": 2, "по высоте": 1 },
    "Модель №11": { "по ширине": 2, "по высоте": 0 }, "Модель №12": { "по ширине": 2, "по высоте": 0 }, "Модель №13": { "по ширине": 4, "по высоте": 0 },
    "Модель №14": { "по ширине": 4, "по высоте": 1 }, "Модель №15 (Prav)": { "по ширине": 0, "по высоте": 2 }, "Модель №15 (Lev)": { "по ширине": 0, "по высоте": 2 }
};
const door_model_tariff = 1200;
const door_filling = {
    "0-450": { "Стекло пескоструйное": 23556, "Феникс (стекло тонированное зеркальное)": 19620, "ЛДСП 10мм": 10920, "Стекло прозрачное": 10920, "Стекло  тонированное прозрачное": 13020, "Стекло лакобель": 16536, "Стекло рифлённое": 22994, "Зеркало Серебро": 10920, "Зеркало (Графит, Бронза)": 13020, "Сатин (Стекло, матовое)": 12600, "Сатин (Матовое, Графит, Бронза)": 14940 },
    "451-500": { "Стекло пескоструйное": 25296, "Феникс (стекло тонированное зеркальное)": 20928, "ЛДСП 10мм": 11592, "Стекло прозрачное": 11592, "Стекло  тонированное прозрачное": 13692, "Стекло лакобель": 17496, "Стекло рифлённое": 24672, "Зеркало Серебро": 11592, "Зеркало (Графит, Бронза)": 13692, "Сатин (Стекло, матовое)": 13608, "Сатин (Матовое, Графит, Бронза)": 15948 },
    "501-600": { "Стекло пескоструйное": 28776, "Феникс (стекло тонированное зеркальное)": 23534, "ЛДСП 10мм": 12264, "Стекло прозрачное": 12264, "Стекло  тонированное прозрачное": 14364, "Стекло лакобель": 19416, "Стекло рифлённое": 28027, "Зеркало Серебро": 12264, "Зеркало (Графит, Бронза)": 14364, "Сатин (Стекло, матовое)": 14616, "Сатин (Матовое, Графит, Бронза)": 16956 },
    "601-700": { "Стекло пескоструйное": 32256, "Феникс (стекло тонированное зеркальное)": 26141, "ЛДСП 10мм": 12936, "Стекло прозрачное": 12936, "Стекло  тонированное прозрачное": 15036, "Стекло лакобель": 21336, "Стекло рифлённое": 31382, "Зеркало Серебро": 12936, "Зеркало (Графит, Бронза)": 15036, "Сатин (Стекло, матовое)": 15624, "Сатин (Матовое, Графит, Бронза)": 17964 },
    "701-800": { "Стекло пескоструйное": 35736, "Феникс (стекло тонированное зеркальное)": 28747, "ЛДСП 10мм": 13608, "Стекло прозрачное": 13608, "Стекло  тонированное прозрачное": 15708, "Стекло лакобель": 23256, "Стекло рифлённое": 34738, "Зеркало Серебро": 13608, "Зеркало (Графит, Бронза)": 15708, "Сатин (Стекло, матовое)": 16632, "Сатин (Матовое, Графит, Бронза)": 18972 },
    "801-900": { "Стекло пескоструйное": 39216, "Феникс (стекло тонированное зеркальное)": 31354, "ЛДСП 10мм": 14280, "Стекло прозрачное": 14280, "Стекло  тонированное прозрачное": 16380, "Стекло лакобель": 25176, "Стекло рифлённое": 38093, "Зеркало Серебро": 14280, "Зеркало (Графит, Бронза)": 16380, "Сатин (Стекло, матовое)": 17640, "Сатин (Матовое, Графит, Бронза)": 19980 },
    "901-1000": { "Стекло пескоструйное": 42696, "Феникс (стекло тонированное зеркальное)": 33960, "ЛДСП 10мм": 14952, "Стекло прозрачное": 14952, "Стекло  тонированное прозрачное": 17052, "Стекло лакобель": 27096, "Стекло рифлённое": 41448, "Зеркало Серебро": 14952, "Зеркало (Графит, Бронза)": 17052, "Сатин (Стекло, матовое)": 18648, "Сатин (Матовое, Графит, Бронза)": 20988 },
    "1001-1100": { "Стекло пескоструйное": 46176, "Феникс (стекло тонированное зеркальное)": 36566, "ЛДСП 10мм": 15912, "Стекло прозрачное": 15912, "Стекло  тонированное прозрачное": 18012, "Стекло лакобель": 29016, "Стекло рифлённое": 44803, "Зеркало Серебро": 15912, "Зеркало (Графит, Бронза)": 18012, "Сатин (Стекло, матовое)": 19608, "Сатин (Матовое, Графит, Бронза)": 21948 },
    "1101-1200": { "Стекло пескоструйное": 49656, "Феникс (стекло тонированное зеркальное)": 39173, "ЛДСП 10мм": 17712, "Стекло прозрачное": 17712, "Стекло  тонированное прозрачное": 19812, "Стекло лакобель": 30936, "Стекло рифлённое": 48163, "Зеркало Серебро": 17712, "Зеркало (Графит, Бронза)": 19812, "Сатин (Стекло, матовое)": 21408, "Сатин (Матовое, Графит, Бронза)": 23748 },
    "1201-1300": { "Стекло пескоструйное": 53132, "Феникс (стекло тонированное зеркальное)": 42307, "ЛДСП 10мм": 19512, "Стекло прозрачное": 19512, "Стекло  тонированное прозрачное": 21612, "Стекло лакобель": 33102, "Стекло рифлённое": 52016, "Зеркало Серебро": 19512, "Зеркало (Графит, Бронза)": 21612, "Сатин (Стекло, матовое)": 23208, "Сатин (Матовое, Графит, Бронза)": 25548 },
    "1301-999999": { "Стекло пескоструйное": 53132, "Феникс (стекло тонированное зеркальное)": 42307, "ЛДСП 10мм": 19512, "Стекло прозрачное": 19512, "Стекло  тонированное прозрачное": 21612, "Стекло лакобель": 33102, "Стекло рифлённое": 52016, "Зеркало Серебро": 19512, "Зеркало (Графит, Бронза)": 21612, "Сатин (Стекло, матовое)": 23208, "Сатин (Матовое, Графит, Бронза)": 25548 },
};
// Текущие цены доставка
let current_dostavka_price = {}

// Текущие цены разгруз
let current_razgruz_price = {}

// Текущие цены (общие, которые идут к двери)
let current_general_price = {}

// Текущие цены для профилей
let current_profiles_price = {};

// Текста текущих активных Услуг.
let current_services_text = [""];

// Профиль
let profil = 0;

// Общая цена сервиса
let services_sum_cost = 0;

// Текущие цены для услуг (Монтаж)
let current_services_price = {};

/* Код */
jQuery(document).ready(function ($) {
    let calcPrices = {
        napol: [
            {name: 'Феникс (стекло тонированное зеркальное)', prices: []},
            {name: 'Стекло пескоструйное', prices: []}
        ],
        color: [

        ],
        mPog: 0,
        dopOpt: [

        ],
        model: [

        ]
    };
    let calcUserSelect = {
        openingParams: {
            width: 0,
            height: 0,
        },
        doorParams: {
            color: {
                price: 0,
                text: ''
            },
            amount: {
                value: 0,
            },
            model: {
                del: 0,
                text: '',
            },
            system: {
                text: '',
            }
        },
        doorFilling: {
            value: 0,
            text: '',
        },
        addOption: [

        ]
    };
    let calcItog = {
        doorPrice: 0,
        montagePrice: 0,
        deliveryPrice: 0,
        razgruzPrice: 0,
        totalPrice: 0
    };

    function calc() {
        // let doorWidth = (calcUserSelect.openingParams.width / calcUserSelect.doorParams.amount.value) + 15;
        // let calcAddPercPrice = 10 + (calcUserSelect.openingParams.height > 2600 ? 10 : 0);
        //let priceMPog = (((calcUserSelect.doorParams.model.del * doorWidth) * calcUserSelect.doorParams.amount.value) / 1000) * calcPrices.mPog;
        let priceMPog = 0;
        

        let priceTableDoor = 0;
        // $.each(calcPrices.napol[calcUserSelect.doorFilling.value].prices, function (i, v) {
        //     if (v.min <= doorWidth && v.max >= doorWidth) {
        //         priceTableDoor = (v.price + ((v.price / 100) * calcAddPercPrice)) * calcUserSelect.doorParams.amount.value;
        //     }
        // })
        calcItog.doorPrice = priceMPog + priceTableDoor;

        if (calcUserSelect.addOption.length) {
            $.each(calcUserSelect.addOption, function (i, v) {
                if (v.type == 'count') {
                    calcItog.doorPrice += v.price * v.counter;
                }
                if (v.type == 'fix') {
                    calcItog.doorPrice += v.price;
                }
                if (v.type == 'door') {
                    calcItog.doorPrice += v.price * calcUserSelect.doorParams.amount.value;
                }
            })
        }

        let door_filling_price = 0;
        let width_temp = 0
        for (let width in door_filling) {
            const width_field = width.split("-").map((item) => Number(item));
            width_temp = (calcUserSelect.openingParams.width / calcUserSelect.doorParams.amount.value) + 15
            if (width_field[0] <= width_temp && width_temp <= width_field[1]) {

                for (let filling in door_filling[width]) {
                    if (calcUserSelect.doorFilling.text == filling) {
                        door_filling_price = door_filling[width][filling] * calcUserSelect.doorParams.amount.value;
                    }
                }
            }
        }


        // Наполнение
        calcItog.totalPrice = Math.floor((calcItog.doorPrice) + door_filling_price);

        // Общие
        calcItog.totalPrice += Object.values(current_general_price).reduce((acc, curr) => acc + curr, 0)

        // Цвет
        calcItog.totalPrice += (calcUserSelect.doorParams.color.text == "Черный матовый" && 3300) * calcUserSelect.doorParams.amount.value;

        // Профиль
        calcItog.totalPrice += Object.values(current_profiles_price).reduce((acc, curr) => acc + curr, 0);

        // Модель 
        calcItog.totalPrice += door_models[calcUserSelect.doorParams.model.text]['по ширине'] * calcUserSelect.doorParams.amount.value * door_model_tariff * ((calcUserSelect.openingParams.width / calcUserSelect.doorParams.amount.value + 15)) / 1000;
        calcItog.totalPrice += door_models[calcUserSelect.doorParams.model.text]['по высоте'] * calcUserSelect.doorParams.amount.value * door_model_tariff * calcUserSelect.openingParams.height / 1000;
        
        // Высота > 2600
        if(calcUserSelect.openingParams.height > 2600){
            let desyat_cm = 0;
            let current_height = 0;
            current_height = (calcUserSelect.openingParams.height - 2600) / 10;
            desyat_cm = Math.ceil(current_height / 10)
            calcItog.totalPrice += calcItog.totalPrice * (0.0 + (0.05 * desyat_cm))
        }

        // Система
        if(calcUserSelect.doorParams.system.text == "Подвесная"){
            calcItog.totalPrice += 8250 * calcUserSelect.doorParams.amount.value;
        }
        
        renderResult();
    }

    function renderResult() {
        let services_copy_text = "";
        if (services_sum_cost != 0 || Object.values(current_dostavka_price).reduce((acc, curr) => acc + curr, 0) != 0 || Object.values(current_razgruz_price).reduce((acc, curr) => acc + curr, 0) != 0) {
            $('#itog_results').html(`
            Услуги: <br/>
            ${current_services_text.join('<br/>')}
            `);
            services_copy_text = "Услуги:\n";
            $.each(current_services_text, function(i, service){
                services_copy_text += service + "\n"
            })
        }
        else {
            $('#itog_results').html('');
            services_copy_text = "";
        }

        $('#calc-opt-services').html(services_sum_cost);
        $('#calc-opt-dostavka').html(Object.values(current_dostavka_price).reduce((acc, curr) => acc + curr, 0));
        $('#calc-opt-razgruz').html(Object.values(current_razgruz_price).reduce((acc, curr) => acc + curr, 0))

        $('#calc-otp-height').html(calcUserSelect.openingParams.height);
        $('#calc-otp-width').html(Math.ceil(calcUserSelect.openingParams.width / 5) * 5);

        $('#calc-otp-system').html(calcUserSelect.doorParams.system.text.toLowerCase());

        // Добавление профилей
        let current_profiles_copy_text = ". Профиль: " + Object.keys(current_profiles_price).join(', ');
        if(Object.keys(current_profiles_price).length != 0){       
            $('#calc-otp-system').html($('#calc-otp-system').html() + current_profiles_copy_text);
        }

        // Добавление общих параметров
        let current_general_copy_text = ", " + Object.keys(current_general_price).join(', ');
        if(Object.keys(current_general_price).length != 0){       
            $('#calc-otp-door-general').html(current_general_copy_text);
        }
        else{
            $('#calc-otp-door-general').html('')
        }

        $('#calc-otp-door-model').html(calcUserSelect.doorParams.model.text.toLowerCase());
        $('#calc-otp-door-amount').html(calcUserSelect.doorParams.amount.value);

        $('#calc-otp-door-color').html(calcUserSelect.doorParams.color.text.toLowerCase());
        $('#calc-otp-door-napol').html(calcUserSelect.doorFilling.text.toLowerCase());
        $('#calc-otp-door-price').html(makeMoney(roundNumber(calcItog.doorPrice, 0)))
        $('#calc-otp-preditog').html(makeMoney(calcItog.totalPrice));

        $('#calc-otp-itog').html(makeMoney(calcItog.totalPrice + services_sum_cost + Object.values(current_dostavka_price).reduce((acc, curr) => acc + curr, 0) +Object.values(current_razgruz_price).reduce((acc, curr) => acc + curr, 0)));

        $('#calc-copy-textarea').val(`
Стоимость перегородки по вашим параметрам (высота - ${calcUserSelect.openingParams.height} мм, ширина - ${calcUserSelect.openingParams.width} мм, ${calcUserSelect.doorParams.model.text.toLowerCase()}, количество дверей - ${calcUserSelect.doorParams.amount.value}): \n
Раздвижная система ALUTECH ${calcUserSelect.doorParams.system.text}${(Object.keys(current_profiles_price).length != 0) ? current_profiles_copy_text : ''}\n
цвет профиля ${calcUserSelect.doorParams.color.text.toLowerCase()}, ${calcUserSelect.doorFilling.text.toLowerCase()}${(Object.keys(current_general_price).length != 0) ? current_general_copy_text : ''} - ${calcItog.totalPrice} ₽\n
🛠 Монтаж изделия - ${makeMoney(services_sum_cost)} ₽\n
🚛 Доставка - ${Object.values(current_dostavka_price).reduce((acc, curr) => acc + curr, 0)} ₽ \n
💪 Разгрузка - ${Object.values(current_razgruz_price).reduce((acc, curr) => acc + curr, 0)} ₽ \n
🔑 Итого под ключ - ${makeMoney(calcItog.totalPrice + services_sum_cost + Object.values(current_dostavka_price).reduce((acc, curr) => acc + curr, 0) +Object.values(current_razgruz_price).reduce((acc, curr) => acc + curr, 0))} ₽\n
${services_copy_text}
`) 
    }

    function roundNumber(num, scale) {
        if (!("" + num).includes("e")) {
            return +(Math.round(num + "e+" + scale) + "e-" + scale);
        } else {
            let arr = ("" + num).split("e");
            let sig = ""
            if (+arr[1] + scale > 0) {
                sig = "+";
            }
            let i = +arr[0] + "e" + sig + (+arr[1] + scale);
            let j = Math.round(i);
            let k = +(j + "e-" + scale);
            return k;
        }
    }

    function makeMoney(n) {
        return new Intl.NumberFormat('ru-RU').format(n)
    }

    function checkAllFields() {
        calcUserSelect.openingParams.width = +$('[name="calc-door-width"]').val();
        calcUserSelect.openingParams.height = +$('[name="calc-door-height"]').val();

        calcUserSelect.doorParams.color.price = +$('[name="calc-door-color"]').val();
        calcUserSelect.doorParams.color.text = $('[name="calc-door-color"] option:selected').text();

        calcUserSelect.doorParams.amount.value = +$('[name="calc-door-amount"]').val();

        calcUserSelect.doorParams.model.del = +$('[name="calc-model-door"]').val();
        calcUserSelect.doorParams.model.text = $('[name="calc-model-door"] option:selected').text();

        calcUserSelect.doorParams.system.text = $('[name="calc-model-system"] option:selected').text();

        if ($('[name="calc-door-nap"]:checked').length) {
            calcUserSelect.doorFilling.value = +$('[name="calc-door-nap"]:checked').val();
            calcUserSelect.doorFilling.text = calcPrices.napol[calcUserSelect.doorFilling.value].name;
        } else {
            calcUserSelect.doorFilling.value = 0;
            calcUserSelect.doorFilling.text = '';
        }
        if ($('[name="calc-door-add-opt"]:checked').length) {
            calcUserSelect.addOption = [];
            $.each($('[name="calc-door-add-opt"]:checked'), function (i, v) {
                calcUserSelect.addOption.push({
                    type: $(v).attr('data-type'),
                    price: +$(v).val(),
                    counter: ($(v).attr('data-counter') ? +$(v).attr('data-counter') : false),
                })
            })
        } else {
            calcUserSelect.addOption = [];
        }
        calc()
        /*Для изменения цены от 10% розничной*/
        if (calcItog.totalPrice < 5000) {
            $('.montazh-garderob-error').html('Итоговая цена меньше 5,000 рублей');
            $('#montazh-garderob').prop('checked', false);
        }
        else {
            $('.montazh-garderob-error').html('');
            var isChecked = $('#montazh-garderob').is(':checked');
            var sum = calcItog.totalPrice * 0.1;
            if (isChecked) {
                current_services_price['Монтаж гардеробной'] = sum;
            }
            else {
                delete current_services_price['Монтаж гардеробной'];
            }
            services_end();
        }
    }

    function renderFields() {
        $('[name="calc-door-color"]').html(function () {
            let html = '';
            $.each(calcPrices.color, function (i, v) {
                html += `<option value="${v.price}">${v.name}</option>`
            })
            return html;
        })
        $('[name="calc-model-door"]').html(function () {
            let html = '';
            $.each(calcPrices.model, function (i, v) {
                html += `<option value="${v.amountDel}">${v.name}</option>`
            })
            return html;
        })
        $('.calc-door-nap-row').html(function () {
            let html = '';
            $.each(calcPrices.napol, function (i, v) {
                html += `
        <div class="calc-inner-row-item">
            <input type="radio" name="calc-door-nap" id="calc-door-nap-inp-${i}" class="calc-radio" value="${i}" ${i == 0 ? "checked" : ""}>
            <label for="calc-door-nap-inp-${i}" class="calc-radio-label">
                <div class="calc-radio-label-text">${v.name}</div>
            </label>
        </div>
        `
            })
            return html;
        })
        $('[name="calc-door-nap"]').on('input', function () {
            checkAllFields();
        })
        $('.calc-door-add-opt-row').html(function () {
            let html = '';
            $.each(calcPrices.dopOpt, function (i, v) {
                if (v.type == "count") {
                    html += `
            <div class="calc-inner-row-item  calc-door-add-opt-row-item calc-door-add-opt-row-item-count">
                <input type="checkbox" name="calc-door-add-opt" data-type="${v.type}" data-add-opt-count="${i}" data-counter="1" id="calc-door-add-opt-inp-${i}" class="calc-radio" value="${v.price}">
                <label for="calc-door-add-opt-inp-${i}" class="calc-radio-label">
                    <div class="calc-radio-label-text">${v.name}</div>
                    <div class="calc-radio-label-inner calc-flex calc-flex-row">
                        <div class="calc-radio-label-select">
                            <div class="calc-select-wrapper">
                                <select name="calc-opt-amount-${i}" data-for="calc-door-add-opt-inp-${i}" id="calc-opt-amount-${i}" class="calc-select">
            `;
                    for (let i = v.count.min; i <= v.count.max; i++) {
                        html += `
                                    <option value="${i}">${i}</option>
                `
                    }
                    html += `
                                </select>
                            </div>
                        </div>
                        <div class="calc-radio-label-price">${v.price} ₽</div>
                    </div>
                </label>
            </div>
            `
                }
                if (v.type == "fix") {
                    html += `
            <div class="calc-inner-row-item  calc-door-add-opt-row-item">
                <input type="checkbox" name="calc-door-add-opt" data-type="${v.type}" data-add-opt-count="${i}" id="calc-door-add-opt-inp-${i}" class="calc-radio" value="${v.price}">
                <label for="calc-door-add-opt-inp-${i}" class="calc-radio-label">
                    <div class="calc-radio-label-text">${v.name}</div>
                    <div class="calc-radio-label-price">${v.price} ₽</div>
                </label>
            </div>
            `;
                }
                if (v.type == "door") {
                    html += `
            <div class="calc-inner-row-item  calc-door-add-opt-row-item">
                <input type="checkbox" name="calc-door-add-opt" data-type="${v.type}" data-add-opt-count="${i}" id="calc-door-add-opt-inp-${i}" class="calc-radio" value="${v.price}">
                <label for="calc-door-add-opt-inp-${i}" class="calc-radio-label">
                    <div class="calc-radio-label-text">${v.name}</div>
                    <div class="calc-radio-label-price">${v.price} ₽</div>
                </label>
            </div>
            `
                }
            })
            return html;
        })
        $.each(calcPrices.dopOpt, function (i, v) {
            $(`select[name="calc-opt-amount-${i}"]`).on('input', function () {
                $(`#${$(this).attr('data-for')}`).attr("data-counter", $(this).val());
                checkAllFields();
            })
        })
        $('[name="calc-door-add-opt"]').on('input', function () {
            checkAllFields();
        })
    }

    function init() {
        $.get('https://kriswis.github.io/Web_Building-Calculator/data.json', function (data) {
            $.each(data.result, function (i, v) {
                if (i == 0) {
                    $.each(v, function (index, value) {
                        if (index > 0 && index < 10) {
                            calcPrices.napol.push({
                                name: value,
                                prices: [],
                            });
                        }
                    })
                }
                if (i > 0 && v[0] != '') {
                    $.each(v, function (index, value) {
                        if (index > 0 && index < 8) {
                            calcPrices.napol[index - 1].prices.push({
                                min: +v[0].split('-')[0],
                                max: +v[0].split('-')[1],
                                price: +value,
                            })
                        }

                    })
                }
                if (i > 0 && v[9] != '') {
                    calcPrices.color.push({
                        name: v[9],
                        price: +v[10]
                    })
                }
                if (i > 0 && v[15] != '') {
                    calcPrices.dopOpt.push({
                        name: v[15],
                        price: +v[18],
                        type: v[16],
                        count: (v[16] == 'count' ? { min: +v[17].split('-')[0], max: +v[17].split('-')[1] } : false),
                    })
                }
                if (i > 0 && v[20] != '') {
                    calcPrices.model.push({
                        name: v[20],
                        amountDel: +v[21],
                    })
                }
                calcPrices.mPog = data.result[1][13];
            })
            $('.calc-loader').hide();
            renderFields();
            checkAllFields();
            calc();
        })
        $('.calc-stick-item-otp').stick_in_parent({
            inner_scrolling: true,
            offset_top: 50
        });
    }

    init();
    $('[name="calc-door-width"]').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
        checkAllFields();
        $('#zakladnaya').trigger('change');
    });
    $('[name="calc-door-height"]').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
        checkAllFields();
    });
    $('.calc-select:not([id="track-type"])').on('input', function () {
        checkAllFields();
    });
    /*
    $('#calc-door-amount-inp').on('input', function () {
        $('#etagi-vruchnuyu-amount').trigger('input');
    });
    */
    $('#calc-door-amount-inp').on('input', function () {
        $('#etagi-lift-amount').trigger('input');
        $('#tonki-profil').trigger('change');
        $('#tonki-profil1').trigger('change');
        $('#razgruzka-checkbox').trigger('change');
        $('#etagi-lift').trigger('input')
    });
    $('#calc-door-amount-inp').on('input', function () {
        $('#podvesnaya-peregorodka').trigger('change');
    });
    $('#calc-door-amount-inp').on('input', function () {
        $('#dveri-kupe').trigger('change');
    });
    $('#calc-door-amount-inp').on('input', function () {
        $('#calc-door-service-inp-podyem_posle_10').trigger('change');
    });

    $('#multi-otkrytie-amount').on('input', function () {
        $('#multi-otkrytie-checkbox').trigger('input');
    });
    $('#dovodchiki-amount').on('input', function () {
        $('#dovodchiki-checkbox').trigger('input');
    });
    $('#sinchron-otkrytie-amount').on('input', function () {
        $('#sinchron-otkrytie-checkbox').trigger('input');
    });
    $('#prostavka-amount').on('input', function () {
        $('#prostavka-checkbox').trigger('input');
    });
    $('#additionaltrack-amount').on('input', function () {
        $('#additionaltrack-checkbox').trigger('input');
    });
    $('#plintus-amount').on('input', function () {
        $('#plintus-checkbox').trigger('input');
    });
    $('#track-type').on('change', function () {
        $('#dveri-kupe').trigger('change');
    });
    $('[name="calc-montage"]').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
        checkAllFields();
    });
    $('[name="calc-delivery"]').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
        checkAllFields();
    });
    $('[name="calc-razgruz"]').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
        checkAllFields();
    });
    $('#calc-model-door-system').on('input', function () {
        if($(this).val() == "Опорная"){
            $("#podvesnaya-peregorodka").prop('checked', false);
            $('#podvesnaya-peregorodka').trigger('change');
            delete current_services_price['Подвесная перегородка'];
            calc();
            services_end();
        }
        $('#zakladnaya').trigger('change');
    });

    
    let copyTextareaBtn = document.querySelector('.calc-copy-btn');

    copyTextareaBtn.addEventListener('click', function () {
        let copyTextarea = document.querySelector('#calc-copy-textarea');
        copyTextarea.focus();
        copyTextarea.select();

        try {
            let successful = document.execCommand('copy');
            let msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });

    // Проверка всех инпутов услуг, и добавления текста checked в массив. Нужно только для конечного текста
    function service_input_check_text() {
        $('.calc-door-services-row').each(function () {
            $(this).find('input').each(function () {
                if(!$(this).hasClass('not-service')){
                    if ($(this).prop('checked')) {
                        var label = $(this).next('label')
                        var text = label.find('.calc-radio-label-text').text();
                        current_services_text.push(text);
                    }
                }  
            });
        });
    }
    function services_end() {
        for (var key in current_services_price) {
            var value = current_services_price[key];
            services_sum_cost += value;
        }
        service_input_check_text();
        renderResult();
        current_services_text = [];
        services_sum_cost = 0;
    }

    // Обработка данных всех услуг

    $('#calc-door-service-inp-dostavka').change(function () {
        var isChecked = $(this).is(':checked');
        var sum = 3000;
        if (isChecked) {
            current_dostavka_price['Москва в пределах МКАД'] = sum;
        }
        else {
            delete current_dostavka_price['Москва в пределах МКАД'];
        }
        calc();
        services_end();
    });

    $('#calc-door-service-inp-dostavka1').change(function () {
        var isChecked = $('#calc-door-service-inp-dostavka1').is(':checked');
        var amount = $('#calc-door-service-inp-dostavka1-amount').val();
        var sum = 3000 + (parseInt(amount) * 30);
        if (!isNaN(sum)) {
            if (isChecked) {
                current_dostavka_price['МО до 200км от МКАД'] = sum;
            }
            else {
                delete  current_dostavka_price['МО до 200км от МКАД']
            }
        }
        calc();
        services_end();
    });
    $('#calc-door-service-inp-dostavka1-amount').on('input', function () {
        var isChecked = $('#calc-door-service-inp-dostavka1').is(':checked');
        var amount = $('#calc-door-service-inp-dostavka1-amount').val();
        var sum = 3000 + (parseInt(amount) * 30);
        if (!isNaN(sum)) {
            if (isChecked) {
                current_dostavka_price['МО до 200км от МКАД'] = sum;
            }
            else {
                delete  current_dostavka_price['МО до 200км от МКАД']
            }
        }
        calc();
        services_end();
    });

    $('#etagi-vruchnuyu').change(function () {
        var isChecked = $('#etagi-vruchnuyu').is(':checked');
        var amount = $('#etagi-vruchnuyu-amount').val();
        var amount1 = $('#etagi-vruchnuyu-amount1').val();
        var sum = 300 * amount1 * amount;
        if (!isNaN(amount) && !isNaN(amount1)) {
            if (isChecked) {
                current_razgruz_price['Подъём вручную'] = sum;
            }
            else {
                delete current_razgruz_price['Подъём вручную'];
            }
        }
        calc();
        services_end();
    });
    $('#etagi-vruchnuyu-amount').on('input', function () {
        var isChecked = $('#etagi-vruchnuyu').is(':checked');
        var amount = $('#etagi-vruchnuyu-amount').val();
        var amount1 = $('#etagi-vruchnuyu-amount1').val();
        var sum = 300 * amount1 * amount;
        if (!isNaN(amount) && !isNaN(amount1)) {
            if (isChecked) {
                current_razgruz_price['Подъём вручную'] = sum;
            }
            else {
                delete current_razgruz_price['Подъём вручную'];
            }
        }
        calc();
        services_end();
    });
    $('#etagi-vruchnuyu-amount1').on('input', function () {
        var isChecked = $('#etagi-vruchnuyu').is(':checked');
        var amount = $('#etagi-vruchnuyu-amount').val();
        var amount1 = $('#etagi-vruchnuyu-amount1').val();
        var sum = 300 * amount1 * amount;
        if (!isNaN(amount) && !isNaN(amount1)) {
            if (isChecked) {
                current_razgruz_price['Подъём вручную'] = sum;
            }
            else {
                delete current_razgruz_price['Подъём вручную'];
            }
        }
        calc();
        services_end();
    });

    $('#razgruzka-checkbox').change(function () {
        var isChecked = $('#razgruzka-checkbox').is(':checked');
        var amount = $('#razgruzka-amount').val();
        var sum = 300 * calcUserSelect.doorParams.amount.value * amount;
        if (!isNaN(amount)) {
            if (isChecked) {
                current_razgruz_price['Разгрузка'] = sum;
            }
            else {
                delete current_razgruz_price['Разгрузка'];
            }
        }
        calc();
        services_end();
    });
    $('#razgruzka-amount').on('input', function () {
        var isChecked = $('#razgruzka-checkbox').is(':checked');
        var amount = $('#razgruzka-amount').val();
        var sum = 300 * calcUserSelect.doorParams.amount.value * amount;
        if (!isNaN(amount) ) {
            if (isChecked) {
                current_razgruz_price['Разгрузка'] = sum;
            }
            else {
                delete current_razgruz_price['Разгрузка'];
            }
        }
        calc();
        services_end();
    });

    $('#calc-door-service-inp-podyem_posle_10').change(function () {
        var isChecked = $('#calc-door-service-inp-podyem_posle_10').is(':checked');
        var sum = 2000 * calcUserSelect.doorParams.amount.value;
        if (isChecked) {
            current_services_price['Всё что выше 10 этажа, сборка дверей на объекте без двойного материала'] = sum;
        }
        else {
            delete current_services_price['Всё что выше 10 этажа, сборка дверей на объекте без двойного материала'];
        }
        calc();
        services_end();
    });

    $('#podvesnaya-peregorodka').change(function () {
        var isChecked = $('#podvesnaya-peregorodka').is(':checked');
        var system = $('#calc-model-door-system').val();
        if (calcItog.totalPrice < 4000) {
            $('.podvesnaya-peregorodka-error').html('Итоговая цена меньше 4,000 рублей');
            $(this).prop('checked', false);
            return
        }
        $('.podvesnaya-peregorodka-error').html('');
        var sum = 3500 * calcUserSelect.doorParams.amount.value;
        if (system == "Подвесная") {
            $('.podvesnaya-peregorodka-error').html('');
            if (isChecked) {
                current_services_price['Подвесная перегородка'] = sum;
            }
            else {
                delete current_services_price['Подвесная перегородка'];
            }
        }
        else {
            $('.podvesnaya-peregorodka-error').html('Только для подвесной системы');
            $(this).prop('checked', false);
            return
        }
        calc();
        services_end();
    });

    $('#dveri-kupe').change(function () {
        if (calcItog.totalPrice < 4000) {
            $('.dveri-kupe-error').html('Итоговая цена меньше 4,000 рублей');
            $(this).prop('checked', false);
            return
        }
        $('.dveri-kupe-error').html('');
        var isChecked = $('#dveri-kupe').is(':checked');
        var sum = 0;
        var trek = $('#track-type').val();
        if (isChecked) {
            if (trek == "Открытый") {
                if (calcUserSelect.doorParams.amount.value == 1) {
                    current_services_price['Открытый трек'] = 3000;
                }
                else {
                    sum = 3000;
                    sum += (calcUserSelect.doorParams.amount.value - 1) * 1500;
                    current_services_price['Открытый трек'] = sum;
                }
                delete current_services_price['Скрытый трек'];
            }
            else if (trek == "Скрытый") {
                if (calcUserSelect.doorParams.amount.value == 1) {
                    current_services_price['Скрытый трек'] = 3500;
                }
                else {
                    sum = 3000;
                    sum += (calcUserSelect.doorParams.amount.value - 1) * 2000;
                    current_services_price['Скрытый трек'] = sum;
                }
                delete current_services_price['Открытый трек'];
            }
        }
        else {
            delete current_services_price['Открытый трек'];
            delete current_services_price['Скрытый трек'];
        }
        calc();
        services_end();
    });

    $('#multi-otkrytie-checkbox').on('input', function () {
        var isChecked = $('#multi-otkrytie-checkbox').is(':checked');
        var amount = $('#multi-otkrytie-amount').val();
        var sum = parseInt(amount) * 4000;
        if (!isNaN(amount)) {
            if (isChecked) {
                current_services_price['Мультипоследовательное открытие'] = sum;
            }
            else {
                delete current_services_price['Мультипоследовательное открытие'];
            }
        }
        calc();
        services_end();
    });

    $('#sinchron-otkrytie-checkbox').on('input', function () {
        var isChecked = $('#sinchron-otkrytie-checkbox').is(':checked');
        var amount = $('#sinchron-otkrytie-amount').val();
        var sum = parseInt(amount) * 2000;
        if (!isNaN(amount)) {
            if (isChecked) {
                current_services_price['Синхронное открытие'] = sum;
            }
            else {
                delete current_services_price['Синхронное открытие'];
            }
        }
        calc();
        services_end();
    });

    $('#dovodchiki-checkbox').on('input', function () {
        var isChecked = $('#dovodchiki-checkbox').is(':checked');
        var amount = $('#dovodchiki-amount').val();
        var sum = parseInt(amount) * 1000;
        if (!isNaN(amount)) {
            if (isChecked) {
                current_services_price['Доводчики'] = sum;
            }
            else {
                delete current_services_price['Доводчики'];
            }
        }
        calc();
        services_end();
    });

    $('#etagi-lift').on('input', function () {
        var isChecked = $('#etagi-lift').is(':checked');
        var sum = (calcUserSelect.doorParams.amount.value + 1) * 300;
        if (isChecked) {
            current_razgruz_price['Подъём на лифте'] = sum;
        }
        else {
            delete current_razgruz_price['Подъём на лифте'];
        }
        calc();
        services_end();
    });

    $('#montazh-potolok-bez').change(function () {
        var isChecked = $(this).is(':checked');
        var sum = 5000;
        if (isChecked) {
            current_services_price['Монтаж углубленние в потолке без тросиков'] = sum;
        }
        else {
            delete current_services_price['Монтаж углубленние в потолке без тросиков'];
        }
        calc();
        services_end();
    });

    $('#zakladnaya').change(function () {
        var isChecked = $(this).is(':checked');
        if(calcUserSelect.openingParams.width / 1000 < 2.5){
            sum = 8250
            console.log(calcUserSelect.openingParams.width / 1000)
        }
        else{
            sum = door_models[calcUserSelect.doorParams.model.text]['по высоте'] * calcUserSelect.doorParams.amount.value * 1950 * calcUserSelect.openingParams.height / 1000;
            sum += door_models[calcUserSelect.doorParams.model.text]['по ширине'] * calcUserSelect.doorParams.amount.value * 1950 * ((calcUserSelect.openingParams.width / calcUserSelect.doorParams.amount.value + 15)) / 1000;
        }
        if (isChecked) {
            current_services_price['Закладная'] = sum;
        }
        else {
            delete current_services_price['Закладная'];
        }
        calc();
        services_end();
    });

    $('#montazh-potolok-s').change(function () {
        var isChecked = $(this).is(':checked');
        var sum = 8000;
        if (isChecked) {
            current_services_price['Монтаж углубленние в потолке с тросиками'] = sum;
        }
        else {
            delete current_services_price['Монтаж углубленние в потолке с тросиками'];
        }
        calc();
        services_end();
    });

    $('#prostavka-checkbox').on('input', function () {
        var isChecked = $('#prostavka-checkbox').is(':checked');
        var amount = $('#prostavka-amount').val();
        var sum = parseInt(amount) * 200;
        if (!isNaN(amount)) {
            if (isChecked) {
                current_services_price['Установка проставок для настенных треков (Увеличивает отступ от стены крепления)'] = sum;
            }
            else {
                delete current_services_price['Установка проставок для настенных треков (Увеличивает отступ от стены крепления)'];
            }
        }
        calc();
        services_end();
    });

    $('#plintus-checkbox').on('input', function () {
        var isChecked = $('#plintus-checkbox').is(':checked');
        var amount = $('#plintus-amount').val();
        var sum = parseInt(amount) * 200;
        if (!isNaN(amount)) {
            if (isChecked) {
                current_services_price['Подрезка одного плинтуса'] = sum;
            }
            else {
                delete current_services_price['Подрезка одного плинтуса'];
            }
        }
        calc();
        services_end();
    });

    $('#additionaltrack-checkbox').on('input', function () {
        var isChecked = $('#additionaltrack-checkbox').is(':checked');
        var amount = $('#additionaltrack-amount').val();
        if (!isNaN(amount)) {
            var sum = parseInt(amount) * 3300;
            if (isChecked) {
                current_general_price['Дополнительный трек'] = sum;
            }
            else {
                delete current_general_price['Дополнительный трек'];
            }
        }
        calc();
        services_end();
    });

    $('#montazh-bez-zakladnoi-natyazhnoi').change(function () {
        var isChecked = $("#montazh-bez-zakladnoi-natyazhnoi").is(':checked');
        var sum = 5000;
        if (isChecked) {
            current_services_price['Монтаж без закладной в натяжном потолке для дверей купе'] = sum;
        }
        else {
            delete current_services_price['Монтаж без закладной в натяжном потолке для дверей купе'];
        }
        calc();
        services_end();

    });

    $('#montazh-garderob').change(function () {
        if (calcItog.totalPrice < 5000) {
            $('.montazh-garderob-error').html('Итоговая цена меньше 5,000 рублей');
            $('#montazh-garderob').prop('checked', false);
            return
        }
        $('.montazh-garderob-error').html('');
        var isChecked = $(this).is(':checked');
        var sum = calcItog.totalPrice * 0.1;
        if (isChecked) {
            current_services_price['Монтаж гардеробной'] = sum;
        }
        else {
            delete current_services_price['Монтаж гардеробной'];
        }
        calc();
        services_end();
    });

    $('#tonki-profil').on('change', function () {
        var isChecked = $('#tonki-profil').is(':checked');
        var sum = 3300 * calcUserSelect.doorParams.amount.value;
        if (true) {
            if (isChecked) {
                current_profiles_price["Узкий (161-162)"] = sum;
            }
            else {
                delete current_profiles_price["Узкий (161-162)"];
            }
        }
        calc();
        services_end();
    });
    
    $('#tonki-profil1').on('change', function () {
        var isChecked = $('#tonki-profil1').is(':checked');
        var sum = 3300 * calcUserSelect.doorParams.amount.value;
        if (true) {
            if (isChecked) {
                current_profiles_price["Профиль 170 (H)"] = sum;
            }
            else {
                delete current_profiles_price["Профиль 170 (H)"];
            }
        }
        calc();
        services_end();
    });

});
// Функция для открытия или закрытия блоков
function toggleClass(className) {
    var checkboxes = document.getElementsByClassName(className);
    var isChecked = document.getElementById(className).checked;

    for (var i = 0; i < checkboxes.length; i++) {
        if (!isChecked) {
            checkboxes[i].classList.add('active');
        } else {
            checkboxes[i].classList.remove('active');
        }
    }
}
