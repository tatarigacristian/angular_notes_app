import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, from, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
      private httpClient: HttpClient
  ) { }

  log() {
    console.log('log');
  }

  getPokemon(name: string): Observable<any>
  {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  createOperatorExample() {
    // const source = of(1, 2, 3, 4, 5)
    const source = from([1, 2, 3, 4, 5])

    const result = source.pipe(
        filter((value: any) => value % 2 === 0),
        map((value: any) => value * 2)
    );

    const sub = result.subscribe((value: any) => console.log(value));

    setTimeout(() => {
        sub.unsubscribe();
        console.log('unsubscribe');
    }, 2000);
  }

  customExample() {
    const source = of('a', 'b', 'c', 'd', 'e');

    const result = source.pipe(
        map((value: string) => value.toUpperCase())
    );

    const sub = result.subscribe((value: any) => console.log(value));

    setTimeout(() => {
      sub.unsubscribe();
      console.log('unsubscribe');
    }, 2000);
  }
}
