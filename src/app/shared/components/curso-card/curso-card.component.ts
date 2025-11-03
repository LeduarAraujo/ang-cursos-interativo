import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Curso } from '../../services/cursos.service';

@Component({
  selector: 'app-curso-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './curso-card.component.html',
  styleUrl: './curso-card.component.scss'
})
export class CursoCardComponent {
  @Input() curso!: Curso;
}
