import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livraison } from 'app/entities/enumerations/livraison.model';
import { HomeService } from 'app/home/home.service';
import { PanierComponent } from 'app/panier/panier.component';

@Component({
  selector: 'jhi-bancaire',
  templateUrl: './bancaire.component.html',
  styleUrls: ['./bancaire.component.scss'],
})
export class BancaireComponent implements OnInit {
  resultat?: number;
  constructor(private router: Router, private homeservice: HomeService) {
    //
  }

  validerPaiement(): void {
    this.homeservice.payerPanier(PanierComponent.username, Livraison.LIVRER).subscribe((res: number) => {
      this.resultat = res;
      //eslint-disable-next-line no-console
      console.log(res);
      //eslint-disable-next-line no-console
      console.log(this.resultat);
    });
  }

  retour(): void {
    this.router.navigate(['panier/panierconfirm']);
  }

  ngOnInit(): void {
    //
  }
}
