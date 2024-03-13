/* Объявления глобальных переменных */
const door_models = {
    "Модель №1": { "по ширине": 0, "по высоте": 0 }, "Модель №2": { "по ширине": 1, "по высоте": 0 }, "Модель №3": { "по ширине": 2, "по высоте": 0 },
    "Модель №4": { "по ширине": 3, "по высоте": 0 }, "Модель №5": { "по ширине": 4, "по высоте": 0 }, "Модель №6 (Prav)": { "по ширине": 0, "по высоте": 1 },
    "Модель №6 (Lev)": { "по ширине": 0, "по высоте": 1 }, "Модель №7": { "по ширине": 2, "по высоте": 0 }, "Модель №8": { "по ширине": 4, "по высоте": 0 },
    "Модель №9": { "по ширине": 3, "по высоте": 0 }, "Модель №10 (Prav)": { "по ширине": 2, "по высоте": 1 }, "Модель №10 (Lev)": { "по ширине": 2, "по высоте": 1 },
    "Модель №11": { "по ширине": 2, "по высоте": 0 }, "Модель №12": { "по ширине": 2, "по высоте": 0 }, "Модель №13": { "по ширине": 4, "по высоте": 0 },
    "Модель №14": { "по ширине": 4, "по высоте": 1 }, "Модель №15 (Prav)": { "по ширине": 0, "по высоте": 2 }, "Модель №15 (Lev)": { "по ширине": 0, "по высоте": 2 }
};
const door_model_tariff = 1100;
const door_filling = {
    "0-450": { "ЛДСП 10мм": 9100, "Стекло прозрачное": 9100, "Стекло  тонированое прозрачное": 10850, "Зеркало Серебро": 9100, "Зеркало (Графит, Бронза)": 10850, "Сатин (Стекло, матовое)": 10500, "Сатин (Матовое, Графит, Бронза)": 12450 },
    "451-500": { "ЛДСП 10мм": 9380, "Стекло прозрачное": 9380, "Стекло  тонированое прозрачное": 11130, "Зеркало Серебро": 9380, "Зеркало (Графит, Бронза)": 11130, "Сатин (Стекло, матовое)": 10920, "Сатин (Матовое, Графит, Бронза)": 12870 },
    "501-550": { "ЛДСП 10мм": 9660, "Стекло прозрачное": 9660, "Стекло  тонированое прозрачное": 11410, "Зеркало Серебро": 9660, "Зеркало (Графит, Бронза)": 11410, "Сатин (Стекло, матовое)": 11340, "Сатин (Матовое, Графит, Бронза)": 13290 },
    "551-600": { "ЛДСП 10мм": 9940, "Стекло прозрачное": 9940, "Стекло  тонированое прозрачное": 11690, "Зеркало Серебро": 9940, "Зеркало (Графит, Бронза)": 11690, "Сатин (Стекло, матовое)": 11760, "Сатин (Матовое, Графит, Бронза)": 13710 },
    "601-650": { "ЛДСП 10мм": 10220, "Стекло прозрачное": 10220, "Стекло  тонированое прозрачное": 11970, "Зеркало Серебро": 10220, "Зеркало (Графит, Бронза)": 11970, "Сатин (Стекло, матовое)": 12180, "Сатин (Матовое, Графит, Бронза)": 14130 },
    "651-700": { "ЛДСП 10мм": 10500, "Стекло прозрачное": 10500, "Стекло  тонированое прозрачное": 12250, "Зеркало Серебро": 10500, "Зеркало (Графит, Бронза)": 12250, "Сатин (Стекло, матовое)": 12600, "Сатин (Матовое, Графит, Бронза)": 14550 },
    "701-750": { "ЛДСП 10мм": 10780, "Стекло прозрачное": 10780, "Стекло  тонированое прозрачное": 12530, "Зеркало Серебро": 10780, "Зеркало (Графит, Бронза)": 12530, "Сатин (Стекло, матовое)": 13020, "Сатин (Матовое, Графит, Бронза)": 14970 },
    "751-800": { "ЛДСП 10мм": 11060, "Стекло прозрачное": 11060, "Стекло  тонированое прозрачное": 12810, "Зеркало Серебро": 11060, "Зеркало (Графит, Бронза)": 12810, "Сатин (Стекло, матовое)": 13440, "Сатин (Матовое, Графит, Бронза)": 15390 },
    "801-850": { "ЛДСП 10мм": 11340, "Стекло прозрачное": 11340, "Стекло  тонированое прозрачное": 13090, "Зеркало Серебро": 11340, "Зеркало (Графит, Бронза)": 13090, "Сатин (Стекло, матовое)": 13860, "Сатин (Матовое, Графит, Бронза)": 15810 },
    "851-900": { "ЛДСП 10мм": 11620, "Стекло прозрачное": 11620, "Стекло  тонированое прозрачное": 13370, "Зеркало Серебро": 11620, "Зеркало (Графит, Бронза)": 13370, "Сатин (Стекло, матовое)": 14280, "Сатин (Матовое, Графит, Бронза)": 16230 },
    "901-950": { "ЛДСП 10мм": 11900, "Стекло прозрачное": 11900, "Стекло  тонированое прозрачное": 13650, "Зеркало Серебро": 11900, "Зеркало (Графит, Бронза)": 13650, "Сатин (Стекло, матовое)": 14700, "Сатин (Матовое, Графит, Бронза)": 16650 },
    "951-1000": { "ЛДСП 10мм": 12810, "Стекло прозрачное": 12810, "Стекло  тонированое прозрачное": 13930, "Зеркало Серебро": 12180, "Зеркало (Графит, Бронза)": 13930, "Сатин (Стекло, матовое)": 15120, "Сатин (Матовое, Графит, Бронза)": 17070 },
    "1001-1050": { "ЛДСП 10мм": 12460, "Стекло прозрачное": 12460, "Стекло  тонированое прозрачное": 14210, "Зеркало Серебро": 12460, "Зеркало (Графит, Бронза)": 14210, "Сатин (Стекло, матовое)": 15540, "Сатин (Матовое, Графит, Бронза)": 17490 },
    "1051-1100": { "ЛДСП 10мм": 12740, "Стекло прозрачное": 12740, "Стекло  тонированое прозрачное": 14490, "Зеркало Серебро": 12740, "Зеркало (Графит, Бронза)": 14490, "Сатин (Стекло, матовое)": 15960, "Сатин (Матовое, Графит, Бронза)": 17910 }
}

// Текста текущих активных Услуг.
let current_services_text = []


/* Код */
$(document).ready(function () {
    let calcPrices = {
        napol: [

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
        let priceMPog = 1;

        let priceTableDoor = 0;
        // $.each(calcPrices.napol[calcUserSelect.doorFilling.value].prices, function (i, v) {
        //     if (v.min <= doorWidth && v.max >= doorWidth) {
        //         priceTableDoor = (v.price + ((v.price / 100) * calcAddPercPrice)) * calcUserSelect.doorParams.amount.value;
        //     }
        // })
        calcItog.doorPrice = priceMPog + priceTableDoor;
        calcItog.doorPrice += (calcUserSelect.doorParams.color.text == "Черный матовый" && 1364) * calcUserSelect.doorParams.amount.value;

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
        for (let width in door_filling) {
            const width_field = width.split("-").map((item) => Number(item));

            if (width_field[0] <= calcUserSelect.openingParams.width && calcUserSelect.openingParams.width <= width_field[1]) {

                for (let filling in door_filling[width]) {
                    if (calcUserSelect.doorFilling.text == filling) {
                        door_filling_price = door_filling[width][filling];
                    }
                }
            }
        }

        calcItog.totalPrice = (((calcItog.doorPrice + calcItog.montagePrice + calcItog.deliveryPrice + calcItog.razgruzPrice +
            (door_models[calcUserSelect.doorParams.model.text]["по ширине"] * door_model_tariff * (calcUserSelect.openingParams.width / calcUserSelect.doorParams.amount.value / 1000)) +
            (door_models[calcUserSelect.doorParams.model.text]["по высоте"] * door_model_tariff * (calcUserSelect.openingParams.height / 1000))) * 1.10)
            + (calcUserSelect.doorParams.system.text == "Опорная" ? 11000 * calcUserSelect.doorParams.amount.value : 0)) + door_filling_price;
        renderResult();
    }

    function renderResult() {
        $('#itog_results').html(`
        Услуги: <br/>
        ${current_services_text.join('<br/>')}
        `);

        $('#calc-otp-height').html(calcUserSelect.openingParams.height);
        $('#calc-otp-width').html(Math.ceil(calcUserSelect.openingParams.width / 5) * 5);

        $('#calc-otp-system').html(calcUserSelect.doorParams.system.text.toLowerCase());
        $('#calc-otp-door-model').html(calcUserSelect.doorParams.model.text.toLowerCase());
        $('#calc-otp-door-amount').html(calcUserSelect.doorParams.amount.value);

        $('#calc-otp-door-color').html(calcUserSelect.doorParams.color.text.toLowerCase());
        $('#calc-otp-door-napol').html(calcUserSelect.doorFilling.text.toLowerCase());
        $('#calc-otp-door-price').html(makeMoney(roundNumber(calcItog.doorPrice, 0)))

        $('#calc-otp-itog').html(makeMoney(calcItog.totalPrice));

        $('#calc-copy-textarea').val(`Стоимость перегородки по вашим параметрам (высота - ${calcUserSelect.openingParams.height} мм, ширина - ${calcUserSelect.openingParams.width} мм, ${calcUserSelect.doorParams.model.text.toLowerCase()}, количество дверей - ${calcUserSelect.doorParams.amount.value}):
📌 Раздвижная система Алютех ${calcUserSelect.doorParams.system.text}
цвет профиля ${calcUserSelect.doorParams.color.text.toLowerCase()}, ${calcUserSelect.doorFilling.text.toLowerCase()} - ${makeMoney(roundNumber(calcItog.doorPrice, 0))} ₽
🛠 Монтаж - ${makeMoney(calcItog.montagePrice)} ₽
🚛 Доставка - ${makeMoney(calcItog.deliveryPrice)} ₽
💪 Разгрузка - ${makeMoney(calcItog.razgruzPrice)} ₽
🔑 Итого под ключ - ${makeMoney(calcItog.totalPrice)} ₽
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
        calcItog.montagePrice = +$('[name="calc-montage"]').val();
        calcItog.deliveryPrice = +$('[name="calc-delivery"]').val();
        calcItog.razgruzPrice = +$('[name="calc-razgruz"]').val();
        calc()
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
        $.get('https://script.google.com/macros/s/AKfycbx5Ft00__qiMWWcmGw8vZZ0o7od-KpsWM59lrWwf1fC5VnyUL2KX2FtpkctMC-UfHfbcw/exec', function (data) {
            $.each(data.result, function (i, v) {
                if (i == 0) {
                    $.each(v, function (index, value) {
                        if (index > 0 && index < 8) {
                            calcPrices.napol.push({
                                name: value,
                                prices: [],
                            })
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
    });
    $('[name="calc-door-height"]').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
        checkAllFields();
    });
    $('.calc-select').on('input', function () {
        checkAllFields()
    });

    $('[name="calc-montage"]').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
        checkAllFields();
    })
    $('[name="calc-delivery"]').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
        checkAllFields();
    })
    $('[name="calc-razgruz"]').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
        checkAllFields();
    })
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
                if ($(this).prop('checked')) {
                    var label = $(this).next('label')
                    var text = label.find('.calc-radio-label-text').text();
                    current_services_text.push(text);
                    console.log(current_services_text);
                }
            });
        });
    }
    $('input.service').change(function () {
        service_input_check_text()
        renderResult();
        current_services_text = [];
    });
})