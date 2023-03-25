/////////// MODUL-1 //////////////

// 1. Оголоси дві змінні, productName для назви товару, 
// і pricePerItem для зберігання ціни за штуку. 
// При оголошенні надай змінним наступні значення:

// назва - рядок "Droid";
// ціна за штуку - число 2000.

// 2. Ім'я товару змінили на "Repair droid" 
// і збільшили його ціну на 1500 кредитів. 
// Перевизнач значення змінних pricePerItem 
// і productName після їх оголошення.

// let productName = "Droid";
// productName = "Repair droid";

// let pricePerItem = 2000;
// pricePerItem += 1500;

// console.log(productName, pricePerItem)

///////////////////////////////////////////////////

// Оголоси змінну message і запиши в неї повідомлення про покупку, 
// рядок у форматі: "You picked <назва товару>, price per item is 
// <ціна товару> credits". Де <назва товару> і <ціна товару> — 
// це значення змінних productName і pricePerItem. Використовуй 
// синтаксис шаблонних рядків.

// let productName = "Droid"
// let pricePerItem = 2000
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message)

////////////////////////////////////////////////////

// Магазин з продажу ремонтних дроїдів готовий до відкриття, 
// залишилося написати скрипт для їх замовлення. 
// Оголоси змінні та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, 
// не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі 
// "You ordered droids worth <total price> credits. Delivery 
// (<delivery fee> credits) is included in total price."

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery ${deliveryFee} is included in total price.`
// console.log(message)

/////////////////////////////////////////////////////////

// Функція add повинна вміти додавати три числа і виводити результат у консоль. 
// Додай функції add три параметри: a, b і c, які будуть отримувати значення 
// аргументів під час її виклику.

// Доповни console.log() таким чином, щоб він логував рядок 
// "Addition result equals <result>", де <result> - це сума переданих чисел.

// function add(a, b, c) {
//     const result = a + b + c;
//     console.log(`Addition result equals ${result}`);
// }
// add(7, 3, 16)

//////////////////////////////////////////////////////////

// Доповни код функції add таким чином, щоб вона повертала результат 
// додавання значень трьох параметрів: a, b і c.

// function add(a, b, c) {
   
//     return  a + b + c;
// }
// console.log(add(15, 25, 64))

/////////////////////////////////////////////////////////

// Функція isAdult оголошує один параметр age (вік), 
// значення якого буде задаватися під час її виклику. 
// Присвой змінній passed вираз перевірки віку користувача на повноліття. 
// Людина вважається повнолітньою у віці 18 років і старше
//  function isAdult(age) {
//     const passed = age >= 18;
//     console.log(passed)
//     return passed
//  }
//  isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

/////////////////////////////////////////////////////////

// Функція isValidPassword (password) перевіряє рівність збереженого і 
// введеного паролів і повертає результат перевірки - буль true або false. 
// Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. 
// Введений пароль передається у параметр password.

// Присвой змінній isMatch вираз перевірки рівності введених і попередньо 
// збережених паролів. Результатом виразу перевірки повинно бути true, 
// якщо значення збігаються, і false - якщо ні.

// function isValidPassword (password) {
//     const SAVED_PASSWORD = "jqueryismyjam";
//     const isMatch = (password === SAVED_PASSWORD);
//     console.log(isMatch)
//     return isMatch;
// }

// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

/////////////////////////////////////////////////////////

// Додай вираз перевірки повноліття користувача, значення параметра age, 
// в умову для інструкції if.

// Якщо користувач повнолітній, повинен виконуватися блок if 
// і у змінну message записується рядок "You are an adult".
// В іншому випадку повинен виконуватися блок else
//  і записується рядок "You are a minor".

// function checkAge(age) {
//     let message;
   
//     if(age >= 18) {
//         message = "You are an adult";
//     } else {
//     message = "You are a minor";
//     }
//     console.log(message)
//     return message
    
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

////////////////////////////////////////////////////////

// Станція з продажу ремонтних дроїдів готова до запуску, з
// алишилося написати програмне забезпечення для відділу продажів.

// Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) 
// виконує транзакцію з продажу дроїдів і повертає повідомлення про результат
//  операції. Вона оголошує три параметри, значення яких будуть задаватися під
//   час її виклику:

// pricePerDroid - ціна одного дроїда
// orderedQuantity - кіл-сть замовлених дроїдів
// customerCredits - сума коштів на рахунку клієнта
// Доповни її наступним функціоналом:

// Оголоси змінну totalPrice для зберігання загальної суми замовлення 
// і присвой їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, 
// запиши у змінну message рядок "Insufficient funds!";
// в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну
//  message повідомлення: "You ordered <число> droids, you have <число> credits left".

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     const totalPrice = pricePerDroid + orderedQuantity;
//     let message
//     if (totalPrice >= customerCredits) {
//         message = "Insufficient funds!";
//     } else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
//     }
//     console.log(message)
//    return message
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

//////////////////////////////////////////////////////////


// Функція checkPassword(password) отримує пароль користувача в 
// параметр password, перевіряє його на збіг з паролем 
// адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення 
// про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password дорівнює null, 
// значить користувач скасував операцію і в message записується
//  рядок "Canceled by user!".
// Якщо значення параметра password збігається зі значенням 
// ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// Якщо жодна з попередніх умов не виконалася, у змінну message 
// записується рядок "Access denied, wrong password!".

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message
//     if (password === null) {
//         message = "Canceled by user!";
//     } else if (password === ADMIN_PASSWORD) {
//         message = "Welcome!";
//     } else {
//         message = "Access denied, wrong password!"
//     }
//     console.log(message)
//     return message
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

/////////////////////////////////////////

// Функція isNumberInRange(start, end, number) перевіряє, 
// чи входить число у проміжок. Вона оголошує три параметри, 
// значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isInRange вираз перевірки входження number у 
// числовий проміжок від start до end. Тобто число повинно бути
//  більшим або дорівнювати start, і меншим або дорівнювати end. 
//  Результатом виразу перевірки буде буль true або false.

// function isNumberInRange(start, end, number) {
//     let isInRange = number >= start && number <= end;
//     console.log(isInRange)
//     return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

//////////////////////////////////////////////

// Функція checkIfCanAccessContent(subType) перевіряє, 
// чи може користувач отримати доступ до контенту. 
// Перевірка відбувається за типом передплати. 
// Отримати доступ можуть тільки користувачі з 
// передплатою pro або vip.

// Присвой змінній canAccessContent вираз перевірки передплати. 
// Якщо значення параметра subType дорівнює рядкам "pro" або "vip", 
// користувач отримає доступ. Результатом виразу перевірки 
// буде буль true або false.

// function checkIfCanAccessContent(subType) {
//     let canAccessContent = subType === "pro" || subType === "vip";
//     console.log(canAccessContent);
//     return canAccessContent;
// }
// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

//////////////////////////////////////////////

// Функція isNumberNotInRange(start, end, number) перевіряє, 
// чи не входить число у проміжок. Тобто число повинно бути меншим 
// або дорівнювати start і більшим або дорівнювати end. 
// Результатом виразу перевірки буде буль true або false.

// Вона оголошує три параметри, значення яких будуть задаватися 
// під час її виклику:

// number - число, невходження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isNotInRange вираз інверсії значення змінної 
// isInRange, використовуючи оператор !.

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange;
//     console.log(isNotInRange)
//     return isNotInRange;
// }
// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

/////////////////////////////////////////

// Функція getDiscount(totalSpent) визначає значення знижки, 
// залежно від загальної суми витрачених грошей (параметр totalSpent) 
// в магазині за весь час (партнерська програма). 
// Знижка записується у змінну discount і повертається з функції 
// як результат її роботи.

// Використовуючи розгалуження і логічні оператори, доповни код 
// функції.

// Якщо витрачено від 50000 (включно) або більше кредитів - 
// знижка 10% (золотий партнер)
// Якщо витрачено від 20000 (включно) до 50000 кредитів - 
// знижка 5% (срібний партнер)
// Якщо витрачено від 5000 (включно) до 20000 кредитів - 
// знижка 2% (бронзовий партнер)
// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
// Значення знижок кожного рівня зберігаються в 
// однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, 
// SILVER_DISCOUNT і GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;

//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else {
//         discount = BASE_DISCOUNT;
//     }
//        console.log(discount)
//     return discount
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

/////////////////////////////////

// Функція checkPassword(password) порівнює переданий їй 
// пароль (параметр password) зі збереженим паролем адміністратора 
// (константа ADMIN_PASSWORD) і повертає рядок з повідомленням про 
// результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, 
// що:
// Якщо значення password і ADMIN_PASSWORD збігаються, 
// присвой змінній message рядок "Access is allowed".
// В іншому випадку, присвой message рядок 
// "Access denied, wrong password!".

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;

//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//     console.log(message);
//     return message;
// }
// checkPassword("jqueryismyjam");
// checkPassword("angul4r1sl1f3");
// checkPassword("r3actsux")