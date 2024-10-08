import { Component } from '@angular/core';
import { trendingBooksList } from '../../models/trending-books.model';
import * as TrendingBooks from '../../mock-responses/trending-books.json';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { QuickReferenceComponent } from '../quick-reference/quick-reference.component';
import { WeatherService } from '../../services/weather.service';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, QuickReferenceComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  trendingBooks: trendingBooksList[] = TrendingBooks.trendingbooks;
  searchQuery: FormControl = new FormControl();
  weather_search: FormControl = new FormControl();

  filteredBooks : trendingBooksList[] = [];

  constructor(private weatherService:  WeatherService){}
  ngOnInit(){
    console.log(this.trendingBooks);

    this.searchQuery.valueChanges.pipe(debounceTime(300)).subscribe(query => {
      this.filterBooks(query);
    })
  }

  onSearch(){

  }
  filterBooks(title: string){
    this.filteredBooks = this.trendingBooks.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    console.log(this.filteredBooks)
  }

  searchWeather(search_query: string){

    this.weatherService.getWeather(search_query).subscribe((weather: any) => {
      console.log(weather);
    })

  }
}
