import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Curso, CursosService } from './shared/services/cursos.service';
import { CursoCardComponent } from './shared/components/curso-card/curso-card.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CursoCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Interativo';
  cursos$!: Observable<Curso[]>;
  readonly currentYear = new Date().getFullYear();

  constructor(private readonly cursosService: CursosService) {
    this.cursos$ = this.cursosService.listar();
  }
}
