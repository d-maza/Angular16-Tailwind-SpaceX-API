import { Component, ElementRef, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceService } from 'src/app/core/services/space.service';
import { Root, Root2 } from 'src/app/core/models/space';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  spaceService = inject(SpaceService)

  launches!: Root;
  launch: WritableSignal<Root2 | null> = signal<Root2 | null>( null);

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
   this.getLaunches();
  }

  getLaunches() {
    return this.spaceService.getLaunches().subscribe((res: Root) => {
      this.launches = res
      this.launch.set(res[0]);
   })
  }

  showDetails(item: Root2) {
    this.launch.set(item);
    const modal = this.elementRef.nativeElement.querySelector('dialog');
    if (modal) {
      modal.showModal();
    }
  }

  closed() {
    const modal = this.elementRef.nativeElement.querySelector('dialog');
    if (modal) {
      modal.close();
    }
  }
}
