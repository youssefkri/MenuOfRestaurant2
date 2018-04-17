import { Component, OnInit } from '@angular/core';
import { Panier } from '../panier';
import { Element } from '../element';
import { PanierService } from '../panier.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier: Panier=new Panier;
  total: number=0;

  constructor(private panierService: PanierService,private menuService: MenuService) {
  
    panierService.produitAjoute$.subscribe(
      id => {
        this.ajouterElement(id);
      
    });

    panierService.produitRetire$.subscribe(
      id => {
        this.retirerElement(id);
    });
   }

  ngOnInit() {
  }

  ajouterElement(id: number){
    let n: number=0;
        if(this.panier.elements.has(id))
          n=this.panier.elements.get(id).quantite;
        else{
          let e: Element=new Element;
          e.id=id;
          e.name=this.menuService.getNom(id);
          e.quantite=0;
          this.panier.elements.set(id,e);
          }
        this.panier.elements.get(id).quantite=++n;
        this.total+=this.menuService.getPrix(id);
        this.panierService.modifierQuantite(id,n);
  }

  retirerElement(id: number){
    let n: number=0;
        if(this.panier.elements.has(id)){
          n=this.panier.elements.get(id).quantite;
          n--;
          if(n==0)
            this.panier.elements.delete(id);
          else
            this.panier.elements.get(id).quantite=n;
            this.total-=this.menuService.getPrix(id);
            this.panierService.modifierQuantite(id,n);
        }
  }

  ajouterClic(id: number){
    this.ajouterElement(id);
  }

  retirerClic(id: number){
    this.retirerElement(id);
  }

}