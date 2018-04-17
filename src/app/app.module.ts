import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu.service';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';
import { PanierService } from './panier.service';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, MenuComponent, CategorieComponent, ProduitComponent, PanierComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MenuService, PanierService]
})
export class AppModule { }
