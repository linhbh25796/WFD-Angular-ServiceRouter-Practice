import {Injectable} from '@angular/core';

export interface IWord {
  key: string;
  meaning: string;
}

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {key: 'service', meaning: 'dịch vụ'},
    {key: 'tri', meaning: 'con lợn đáng yêu'},
    {key: 'hau', meaning: 'hãm'},
    {key: 'linh', meaning: 'Đẹp trai'},
    {key: 'thanh', meaning: 'Khá Bảnh'}
  ];

  constructor() {
  }

  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }

  getAll(): IWord[] {
    return this.words;
  }
}
