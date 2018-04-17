import { Component, OnInit, Input } from '@angular/core';
import { Categorie } from '../categorie';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  @Input() categorie: Categorie;
  produitsSelectionnes: Map<number,number>=new Map;

  constructor(private panierService: PanierService) {
    panierService.produitModifie$.subscribe(
      tab => {
        this.produitsSelectionnes.set(tab[0],tab[1]);
      
    });
   }

  ngOnInit() {
    let that=this;
    this.categorie.products.forEach(function (produit) {
    that.produitsSelectionnes.set(produit.id,0);
});
  }

  ajouterElement(id: number){
    this.panierService.ajouterElement(id);
  }

  retirerElement(id: number){
    this.panierService.retirerElement(id);
  }

}