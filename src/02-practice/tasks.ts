import { addItem, run } from './../03-utils';
import { from, fromEvent, of, first, last, elementAt, min, max, find, findIndex, single, catchError, map, ignoreElements, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// Task 1. first()
// RU: Создайте поток объектов с двумя свойствами: action и priority
// Получите первый объект из потока с высоким приоритетом
// EN: Create an observable of objects with two properties: action and priority
// Get the first object from the observable with the high priority
(function task1(): void {
    // const stream$ = 

    // run(stream$);
})();

// Task 2. last()
// RU: Создайте поток слов из предложения 'Мягкое слово кости не ломит'. 
// Получите последнюю слово, которое содержит 2 символа
// EN: Create an observable of words from the sentence 'A soft word does not break bones'. 
// Get the last word that contains 2 characters
(function task2(): void {
    // const stream$ = 

    // run(stream$);
})();


// Task 3. elementAt()
// RU: Создайте поток событий клик по документу. Получите второй объект события клик.
// EN: Create an observable of document click event. Get the second click event object.
(function task3(): void {
    // const stream$ = 

    // run(stream$, { outputMethod: "console"});
})();

// Task 4. min() (Vitalii Puzakov)
// RU: Создайте поток слов из предложения 'Мягкое слово кости не ломит'. 
// Найдите минимальную длину слова в предложении.
// EN: Create an observable of words from the sentence 'A soft word does not break bones'. 
// Find the minimum length of a word in a sentence.
(function task4() {
    // const source$ = 

    // run(stream$);
})();


// Task 5. max()
// RU: Создайте поток объектов с двумя свойствами: title, quantity.
// Получите объект с максимальным значением quantity 
// EN: Create an observable of objects with two properties: title, quantity.
// Get the object with the maximum quantity value
(function task5() {
    // const stream$ = 

    // run(stream$);
})();

// Task 6. find() (Andrii Olepir)
// RU: Создайте поток, используя ajax(`https://jsonplaceholder.typicode.com/users`)
// Получите первого пользователя, email которого, заканчивается на 'biz'  
// EN: Create an observable using ajax(`https://jsonplaceholder.typicode.com/users`)
// Get the first user whose email ends with 'biz'
(function task6() {
    // const stream$ = 

    // run(stream$);
})();

// Task7. findIndex()
// RU: Создайте поток объектов с двумя свойствами: id, name.
// Получите номер объекта в потоке, у которого длина name больше 10 символов  
// EN: Create an observable of object with two properties: id, name.
// Get the number of the object in the stream whose name is longer than 10 characters
(function task7() {
    // const stream$ = 

    // run(stream$);
})();

// Task 8. single()
// Приложение может создавать в какой-то момент очередь из ошибок, 
// и в этом случае мы должны понять что у нас много таких ошибок и навигировать пользователя на страницу, 
// на которой написано что слишком много ошибок такого-то типа.
// В случае если была выдана одна ошибка приложением, 
// то отобразить страницу отображающую полную информацию по конкретной ошибке
// подобный подход используется в эффектах ngrx и используется специальный сервис для перенаправления пользователя куда-либо
(function task8() {
    const navigateToMultipleErrorsFoundPageAction = (msg) => {
        return of(`Navigate to error page with message "Multiple errors of type ${msg.split(':')[0]} were triggered"`);
    }
    const navigateToSingleErrorFoundPageAction = (err) => {
        return of(`Navigate to error page with message "${err}"`);
    }

    const applicationErrorsStream$ = of(
        new Error('Refer1enceError: dog is not defined'),
        new Error('ReferenceError: cat is not defined'),
        new Error('Unhandled user action')
    ).pipe(
        single((err) => err.message.startsWith('ReferenceError')),
        map((err) => err.message),
        tap(navigateToSingleErrorFoundPageAction),
        catchError(navigateToMultipleErrorsFoundPageAction)
    );

    // run(applicationErrorsStream$);
})();

// Task 9. ignoreElements()
// была такая задача на практика разлогинить пользователя на всех поддоменах 
// в случае если пользователь сделает логаут на каком-то из них
// и по сути нам важно будет ли это сделано успешно или не успешно
(function task9() {
    const logoutFromApp = ajax('https://app.com/logout');
    const logoutFromMailApp = ajax('https://mail.app.com/logout');
    const logoutFromResearchApp = ajax('https://research.app.com/logout');

    const applicationErrorsStream$ = of(logoutFromApp, logoutFromMailApp, logoutFromResearchApp).pipe(
        ignoreElements()
    );

    // run(applicationErrorsStream$);
})();

export function runner() { }