import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListItem, MenuConfig } from '@peta-byte/ui-medley';

@Component({
  selector: 'peta-byte-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'UI Medley - Testing for Custom Components';
  data: ListItem[] = [];
  listHeader = 'Countries & Cities';
  display = false;

  menuConfig: MenuConfig = {
    toggleSidebarMenu: () => {
      this.display = !this.display;
    }
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.http.get<ListItem[]>('/api/geo/countries-cities').subscribe((data: ListItem[]) => {
        this.data = data ?? [];
      });
  }

  closeSidebarMenu(): void {
    this.display = false;
  }
}
