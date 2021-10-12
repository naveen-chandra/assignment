import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {

  public firstWord: string;
  public secondWord: string;
  public isAnagram = false;
  public submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  // Check if two words are anagrams
  checkAnagram(): void {
    this.submitted = true;
    const len1 = this.firstWord.length;
    const len2 = this.secondWord.length;
    if (len1 === len2) {
      const str1 = this.firstWord.split('').sort().join('');
      const str2 = this.secondWord.split('').sort().join('');
      if (str1 === str2) {
        this.isAnagram = true;
      } else {
        this.isAnagram = false;
      }
    }
  }

}
