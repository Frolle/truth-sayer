import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truth-randomizer',
  templateUrl: './truth-randomizer.component.html',
  styleUrls: ['./truth-randomizer.component.scss']
})
export class TruthRandomizerComponent implements OnInit {

  private truths: string[] = ['Ojoj, nu står det visst att både Razzan och Frolle är dåliga på videospel. Tåkigt... :[',
    'jak er bök <img src="assets/mr-boek.png" height="40," width="40">',
    'Oj då, det står visst på internet att Razzan inte är något vidare på videospel.. Fan :/',
    'DET ÄR FREDAG! DÅ LYSTNA MAN PÅ DANSBAND OAVSETT OM MAN VILL ELLER EJ!',
    'Pilsner hjälper mot hosta, det är sen gammalt.',
    '9/10 ggr man ska boka Rz på något åker han vasaloppet!',
    'Oj, nu står det visst att razz är full på internet',
    'Oj, det står visst att Max ska klicka igenom alla scapist zeros för utbildningen i Umeå.',
    'Anton är dålig på videospel'];

  private randomNumber = Math.floor(Math.random() * this.truths.length);
  private previousNumber = this.randomNumber;

  constructor() {
  }

  ngOnInit() {
  }

  displayTruth(): string {
    return this.truths[this.randomNumber];
  }

  newRandomNumber(): void {
    while (this.randomNumber == this.previousNumber) {
      this.randomNumber = Math.floor(Math.random() * this.truths.length);
    }
    this.previousNumber = this.randomNumber;
  }
}
