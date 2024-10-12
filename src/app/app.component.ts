import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade'
      }
    });
  }
}