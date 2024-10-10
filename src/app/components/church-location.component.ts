import {Component, ElementRef, ViewChild} from "@angular/core";

@Component({
  selector: 'church-location',
  templateUrl: 'church-location.component.html',
})
export class ChurchLocation {
  @ViewChild('map', { static: false }) map: ElementRef | undefined;
  width = "1000px";
  height = "400px";

  ngAfterViewInit() {
    const observer = new ResizeObserver(entries => {
      const width = entries[0].contentRect.width;
      const height = entries[0].contentRect.height;
      console.log(entries[0].contentRect);

      this.width = `${width}px`;
      this.height = `${height}px`;
    });

    observer.observe(this.map?.nativeElement);
  }
}