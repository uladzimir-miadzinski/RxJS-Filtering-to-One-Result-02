// find<T>(
//     predicate: (value: T, index: number, source: Observable<T>) => boolean, 
//     thisArg?: any
// ): OperatorFunction<T, T | undefined>

import { of } from 'rxjs';
import { find } from 'rxjs/operators';
import { run } from '../03-utils';

// find searches for the first item in the source Observable
// that matches the specified condition
export function findDemo1() {
  const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  const stream$ = source$.pipe(find(x => x > 4 && x % 2 === 0));

  // run(stream$); // 6
}

// emit undefined if nothing matches the condition
export function findDemo2() {
  const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  const stream$ = source$.pipe(find(x => x > 40));

  // run(stream$); // undefined
}
