import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss'
})
export class PasswordGeneratorComponent {

  password: string = '';
  letter: boolean = false;
  symbole: boolean = false;
  digits: boolean = false;
  length: number = 0
  

  onGeneratePassword() {
    const IncludeLetter= "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    const includeDigits= "0123456789";
    const includeSymbole= "~@#$%^&*";

    let validCharachter= "";
    if (this.letter) {
      validCharachter+=IncludeLetter;
    }
    if (this.digits) {
      validCharachter += includeDigits;
    }
    if (this.symbole) {
      validCharachter += includeSymbole;
    }
    let createdPassword ="";
for (let index = 0; index < this.length; index++) {
  let index = Math.floor(Math.random()* validCharachter.length)
  createdPassword += validCharachter[index];
  this.password = createdPassword;
}

  }
  onChangeLetter() {
    this.letter = !this.letter;
  }
  onChangeSymbole() {
    this.symbole = !this.symbole;
  }
  onChangeDigits() {
    this.digits = !this.digits;
  }
  displayLength(event: any) {
    const value = event.target.value;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    } else {
      alert("لطفا طول پسورد را به عدد وارد کنید!")
    }
  }
  getPass() {
    return this.password;
  }
}
