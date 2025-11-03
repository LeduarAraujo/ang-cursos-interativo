import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Curso {
  titulo: string;
  descricao: string;
  valorAA: string;
  valorMes: string;
}

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly apiUrl = 'http://localhost:8080/api/cursos';

  constructor(private readonly http: HttpClient) {}

  listar(): Observable<Curso[]> {
    return this.http.get<Curso | Curso[]>(this.apiUrl).pipe(
      map((data) => Array.isArray(data) ? data : [data])
    );
  }
}
