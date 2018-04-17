import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product'

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input() produit: Product;
  @Input() quantite: number;
  @Output()
  ajouterPanier: EventEmitter<Number> = new EventEmitter<Number>();
  @Output()
  retirerPanier: EventEmitter<Number> = new EventEmitter<Number>();


  constructor() { }

  ngOnInit() {
  }

  ajouterClic(event){
    this.ajouterPanier.emit(this.produit.id);
  }

  retirerClic(event){
    this.retirerPanier.emit(this.produit.id);
  }

}