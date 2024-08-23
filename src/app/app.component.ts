import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  howMuchILoveYou(nbPetals: number): string {
    if (nbPetals > 6) {
      nbPetals = nbPetals % 6 !== 0 ? nbPetals % 6 : 6;
    }

    console.log(nbPetals);

    switch (nbPetals) {
      case 1:
        return 'I love you';
      case 2:
        return 'a little';
      case 3:
        return 'a lot';
      case 4:
        return 'passionately';
      case 5:
        return 'madly';
      case 6:
        return 'not at all';
    }
    return '';
  }
}
