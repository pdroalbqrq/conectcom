import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-miniatura',
  templateUrl: './miniatura.component.html',
  styleUrls: ['./miniatura.component.css']
})
export class MiniaturaComponent implements OnInit {

  @Input() titulo;
  @Input() descricao;
  @Input() icone;

  constructor() { }

  ngOnInit() {
  }

}
