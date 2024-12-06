import { Component } from '@angular/core';


@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.scss'
})
export class TypingComponent {
  randomString: string = '';
  inputText: string = '';
  constructor() {
    this.randomString = this.generateRandomString(8);
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex); if ((i + 1) % 4 === 0 && i !== length - 1) {
        result += ' ';
      }
    }
    return result;
  }

  onChangeInput(text: string) {
    this.inputText = text;
  }

  compare(randomt: string, input: string) {
    if (!input) {
      return "pending";
    }
    return input === randomt ? "correct" : "incorrect"
  }

}
