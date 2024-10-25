import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Input() totalPaginas: number = 0;
  @Input() paginaActual: number = 1;

  constructor(private router: Router) {}

  goToPage(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.router.navigate(['/pokemon-list', pagina]);
    }
  }  
}
