import { addItem, run } from './../03-utils';
import { first, last, elementAt, min, max, find, findIndex, single } from 'rxjs/operators';
import { from, fromEvent, of } from 'rxjs';

// Task 1. first()
// Создайте поток объектов с двумя свойствами: action и priority
// Получите первый объект из потока с высоким приоритетом
(function task1(): void {
    // const stream$ = 

    // run(stream$);
})();

// Task 2. last()
// Создайте поток слов из предложения 'Мягкое слово кости не ломит'. Получите последнюю слово, которое содержит 2 символа
(function task2(): void {
    // const stream$ = 
    
    // run(stream$);
})();


// Task 3. elementAt()
// Создайте поток событий клик по документу. Получите второй объект события клик.
(function task3(): void {
    // const stream$ = 
    
    // run(stream$, { outputMethod: "console"});
})();

// Task 4. min() // Vitalii Puzakov
// Создайте поток слов из предложения 'Мягкое слово кости не ломит'. Найдите минимальную длину слова в предложении.
(function task4() {
    const string = 'Мягкое слово кости не ломит';
    // const source$ = 

    // run(stream$);
})();


// Task 5. max()
// Создайте поток объектов с двумя свойствами: title, quantity.
// Получите объект с максимальным значением quantity 
(function task5() {
    // const stream$ = 

    // run(stream$);
})();

// Task 6. find()
// Создайте поток объектов с двумя свойствами: id, name.
// Получите объект с id = 3  
(function task6() {
    // const stream$ = 

    // run(stream$);
})();

// Task7. findIndex()
// Создайте поток объектов с двумя свойствами: id, name.
// Получите номер объекта в потоке, у которого длина name больше 10 символов  
(function task7() {
    // const stream$ = 

    // run(stream$);
})();

// Task 8. single()
// Создайте поток объектов с двумя свойствами: title, priority так, чтобы некоторые объекты
// имели одинаковые значения title
// Получите объект у которого title = 'Learn RxJS', если он единственный в потоке
(function task8() {
    // const stream$ = 
    
    // run(stream$);
})();


export function runner() {}