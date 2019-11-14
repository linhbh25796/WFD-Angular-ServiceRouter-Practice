import {Component, OnInit} from '@angular/core';
import {DictionaryService, IWord} from '../services/dictionary.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;
  sub: Subscription;

  constructor(private activedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
    this.sub = this.activedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const getKey = paramMap.get('key');
      const getMeaning = this.dictionaryService.search(getKey);
      this.word = {
        key: getKey,
        meaning: getMeaning
      };
    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
