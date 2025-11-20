import { Component } from '@angular/core';
import { CarroslistComponent } from "../carroslist/carroslist.component";

@Component({
  selector: 'app-dashboard',
  imports: [CarroslistComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
