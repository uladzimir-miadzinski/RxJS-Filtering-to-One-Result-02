import { addItem, run } from './../03-utils';
import { from, fromEvent, of, first, last, elementAt, min, max, find, findIndex, single } from 'rxjs';

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
// RU: Создайте поток объектов с двумя свойствами: title, priority так, чтобы некоторые объекты
// имели одинаковые значения title
// Получите объект у которого title = 'Learn RxJS', если он единственный в потоке
// EN: Create an observable of objects with two properties: title, priority so that some objects
// have the same title values
// Get the object with title = 'Learn RxJS' if it's the only one object in the stream
(function task8() {
    // const stream$ = 
    
    // run(stream$);
})();

// Task 9. ignoreElements()
// RU: Придумать задачу и реализовать
// EN: Come up with a task and implement it

export function runner() {}