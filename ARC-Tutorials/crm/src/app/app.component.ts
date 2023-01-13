import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

 /*  @ViewChild(ContentProjectionComponent)
  content! : ContentProjectionComponent; */

 /*  @ViewChildren(ContentProjectionComponent)
  contentList! : QueryList<ContentProjectionComponent>; */
  
  
  ngAfterViewInit(): void {
  //this.content.isUserSuperAdmin =true;
/* 
  console.log(this.contentList.length);
  console.log(this.contentList); */
  
  // console.log(this.views.nativeElement.innerHTML);
  }
}
