import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
  selector: 'ng-cli-gh-pages-sample-app',
  providers: [],
  templateUrl: 'app/ng-cli-gh-pages-sample.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([

])
export class NgCliGhPagesSampleApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
