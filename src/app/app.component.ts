import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Radha.Portfolio';

  certifications = [
    {
      title: 'Certification 1',
      description: 'Description for Certification 1',
      image: 'path/to/certification1.jpg'
    },
    {
      title: 'Certification 2',
      description: 'Description for Certification 2',
      image: 'path/to/certification2.jpg'
    },
    // Add more certifications as needed
  ];
}
