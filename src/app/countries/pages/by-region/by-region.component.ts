import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent {
  public countries: Country[] = []

  constructor(private CountriesService: CountriesService) { }

  searchByRegion( region: string ): void {
    this.CountriesService.searchRegion( region )
      .subscribe(countries => {
        this.countries = countries
      })


  }

}
