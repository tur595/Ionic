import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  InfiniteScrollCustomEvent,
  IonicModule,
  LoadingController,
} from '@ionic/angular';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RestaurantsPage implements OnInit {
  restaurants: any = [];

  constructor(
    public restaurantsService: RestaurantsService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadRestaurants();
  }

  async loadRestaurants(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.restaurantsService.getCloseRestaurants().subscribe((res) => {
      loading.dismiss();
      this.restaurants.push(
        ...res.response.map(
          (item: { title: any; images: any[]; storeInfo: any }) => {
            return {
              title: item.title,
              images: item.images,
              storeInfo: item.storeInfo,
            };
          }
        )
      );
      event?.target.complete();
    });
  }
  loadMore(event: InfiniteScrollCustomEvent) {
    this.restaurantsService.input.skip =
      this.restaurantsService.input.skip + 15;
    this.loadRestaurants(event);
  }
}
