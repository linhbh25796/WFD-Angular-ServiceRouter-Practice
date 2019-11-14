import { Component, OnInit } from '@angular/core';
import {DictionaryService, IWord} from '../services/dictionary.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  listWord: IWord[] = [];

  constructor(private dictionaryService: DictionaryService,
              public authService: AuthService) { }

  ngOnInit() {
    this.listWord = this.dictionaryService.getAll();
  }

}
