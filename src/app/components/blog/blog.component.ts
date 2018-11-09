import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data-service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() filterText: string;
  items: any = [];

  constructor(private dataService: DataService) {  }

  ngOnInit() {
    this.dataService.getAll().subscribe(result => {
      console.log(result);
      this.items = result;
    });
  }

}
