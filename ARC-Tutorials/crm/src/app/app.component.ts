import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ContentProjectionComponent } from './content-projection/content-projection.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'crm';

  @ViewChild('lol')
  views!: ElementRef;

  @ViewChild(ContentProjectionComponent)
  content! : ContentProjectionComponent;
  
  ngAfterViewInit(): void {
  this.content.isUserSuperAdmin =true;
  console.log(this.views.nativeElement.innerHTML);
  }
}
