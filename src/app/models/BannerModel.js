
export class BannerListModel {
    banners = [];
    constructor(data) {
        this.banners = data;
    }

    fromJson() {
        let bannerList = [];
        this.banners.map((value) => {
            bannerList.push(
                new BannerModel(value)
            );
        });

        this.banners = bannerList;
        return this;
    }

}

export class BannerModel {
    link;
    image;

    constructor(data)
    {
        this.link = data.link;
        this.image = data.image;
    }

    fromJson() {
       return this;
    }

}
