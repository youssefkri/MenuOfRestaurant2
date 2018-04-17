import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class PanierService {

  private produitAjoute = new Subject<number>();
  private produitRetire = new Subject<number>();
  private produitModifie = new Subject<number[]>();

  produitAjoute$ = this.produitAjoute.asObservable();
  produitRetire$ = this.produitRetire.asObservable();

  produitModifie$ = this.produitModifie.asObservable();

  constructor() { }

  ajouterElement(id: number) {
    this.produitAjoute.next(id);
  }

  retirerElement(id: number) {
    this.produitRetire.next(id);
  }

  modifierQuantite(id: number,quantite: number) {
    this.produitModifie.next([id,quantite]);
  }

}