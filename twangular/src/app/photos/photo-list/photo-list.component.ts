import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators'
import { Photo } from '../photo/photo';

@Component({
  selector: 'tw-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    photos: Photo[] = [];
    filter: string = '';
    debounce: Subject<string> = new Subject<string>();

    constructor(private activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
      this.photos = this.activatedRoute.snapshot.data['photos'];      
      this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter)
    }
}
