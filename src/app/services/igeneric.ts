import { Observable } from "rxjs";

export interface IGeneric<T> {
    getAll(): Observable<T[]>;
    getById(id: string): Observable<T>;
    create(item: T): Observable<T>;
    update(item: T): Observable<T>;
    delete(id: string): Observable<void>;
}
