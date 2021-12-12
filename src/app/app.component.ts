import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-refinitiv-s2-q2';

  categoryResult: string[] = [];
  qInput: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.http.get<string[]>("https://api.publicapis.org/categories").subscribe(result => {
      this.categoryResult = result.filter(item => (this.qInput && item. search(this.qInput) >= 0) || !this.qInput);
    })
  }

  handleKeySeachCategory() {
    this.getCategories();
  }
}
