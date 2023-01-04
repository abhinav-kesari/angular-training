import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {

  @ContentChild('admin')
  adminTemp!: TemplateRef<any>;

  isUserSuperAdmin!: boolean;

  constructor() { }
  
  ngOnInit(): void {
  }
  


}
