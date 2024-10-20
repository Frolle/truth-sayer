import { Component } from '@angular/core';
import {TruthService} from '../api/truth.service';
import {Observable} from 'rxjs';
import {Truth} from '../models/truth.model';

@Component({
  selector: 'app-truth-randomizer',
  templateUrl: './truth-randomizer.component.html',
  styleUrls: ['./truth-randomizer.component.scss']
})
export class TruthRandomizerComponent {

  truth: Observable<Truth>

  constructor(public truthService: TruthService) {
    this.truth = truthService.getRandomTruth();
  }

  newTruth(): void {
    this.truth = this.truthService.getRandomTruth();
  }
}
