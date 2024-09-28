import { Component, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { CodingChallenge } from '../../models/coding-challenges.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-quick-reference',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quick-reference.component.html',
  styleUrl: './quick-reference.component.css'
})
export class QuickReferenceComponent {

  inputString: string = '';
  activeIndex: number | null = null;
  ispalindrome: boolean = false;
  fibonacci: number[]=[];

  codingChallenge : CodingChallenge[] = [
    { title: 'Palindrome', id:'palindrome', isOpen: false },
    { title: 'Two Sum Problem', id: 'two-sum', isOpen: false },
    { title: 'Fibonacci', id: 'fibonacci', isOpen: false },
    { title: 'Factorial', id: 'factorial', isOpen: false },
    { title: 'Find the missing number', id: 'missingnumber', isOpen: false },
    { title: 'Anagram', id: 'anagram', isOpen: false },
    { title: 'Remove duplicates from array', id: 'removeduplicate', isOpen: false },
    { title: 'Reverse words in a string', id: 'reverse', isOpen: false },
    { title: 'Array Chunking', id: 'array-chunking', isOpen: false }
  ];

  ngOnInit(){

  }
  toggleChallenge(index: number) : void {
    
    this.activeIndex = index;
    this.codingChallenge = this.codingChallenge.map((challenge, i) => ({
      ...challenge,
      isOpen : i == index ? !challenge.isOpen : false
    }));
    console.log(this.codingChallenge)
  }
  isPalindrome(){

    let lowercase = this.inputString.replace(/[^A-Za-z0-9]/g,'').toLowerCase();

    let reversedString = lowercase.split('').reverse().join('');
    if(lowercase == reversedString){
      console.log("____ isPalindrome___");

      this.ispalindrome = true;
    }
  }
  calcFibonacci(){

  }
}
