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

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    const totalPrice = pricePerDroid + orderedQuantity;
    let message
    if (totalPrice >= customerCredits) {
        message = "Insufficient funds!";
    } else {
        message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
    }
    console.log(message)
   return message
}
makeTransaction(3000, 5, 23000);
makeTransaction(1000, 3, 15000);
makeTransaction(5000, 10, 8000);
makeTransaction(2000, 8, 10000);
makeTransaction(500, 10, 5000);

