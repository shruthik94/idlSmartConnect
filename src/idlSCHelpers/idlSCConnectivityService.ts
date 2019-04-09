import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Injectable()
export class ConnectivityService {

    private internetStatus: boolean = true;

	constructor(
		private network: Network
	) {
		if (this.network.type === 'none') {
			this.internetStatus = false;
		}

		this.network.onDisconnect().subscribe(() => {
			this.internetStatus = false;
		});

		this.network.onConnect().subscribe(() => {
			this.internetStatus = true;
		});
	}

	isOnline(): boolean {
		return this.internetStatus;
	}
}