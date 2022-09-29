import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New App';
count = 0;
number1=0;
number2=0;
result=0;
listOfNumbers=[12,43,23,97,57];
listOfName=["abc","def","ghi","jkl","mno"];
increment= () => {
  this.count++;
}
decrement= () => {
  this.count--;
}

}
