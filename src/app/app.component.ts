import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mobile: MediaQueryList;
  mobileListener: () => void;

  constructor(private media: MediaMatcher) {
      this.mobile = this.media.matchMedia('(max-width: 600px)');
  }
}
