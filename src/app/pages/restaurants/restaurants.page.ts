import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController } from '@ionic/angular';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RestaurantsPage implements OnInit {
  restaurants = [];

  constructor(
    private restaurantsService: RestaurantsService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadRestaurants();
  }

  async loadRestaurants() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.restaurantsService.getCloseRestaurants().subscribe((res) => {
      loading.dismiss();
      this.restaurants = [...this.restaurants, ...res.response];
      console.log(this.restaurants);
    });
  }
}
