import { google, youtube_v3 } from 'googleapis';
import { GaxiosResponse } from 'gaxios';

export class Youtube {
    constructor() {
        
    }

    static async test(): Promise<GaxiosResponse<youtube_v3.Schema$ChannelListResponse>> {
        const service = google.youtube('v3');

        return new Promise((resolve, reject) => {
            service.channels.list({
                auth: 'xxx',
                part: 'snippet,contentDetails,statistics',
                forUsername: 'GoogleDevelopers'
                }, function (err: Error, res: GaxiosResponse<youtube_v3.Schema$ChannelListResponse>) {
                    if(err) return reject(err);
                    resolve(res); 
                });
        });
    }
}