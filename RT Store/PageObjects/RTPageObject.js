module.exports = {
    url: 'https://store.roosterteeth.com/',
    elements: {
        Search: 'div[class="header-search"]',
        SearchBar: 'input[placeholder="Search"]',
        SearchValue: {
            selector: '//li[contains(.,"red vs blue")][1]',
            locateStrategy: 'xpath'
        },
        Header: '#searchspring-merch_header',
        HeaderLogo: 'div[class="header-logo"]',
        Item1: {
            selector: '//*[@id="red-vs-blue"]/div[2]/main/div[2]/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[1]/a',
            locateStrategy: 'xpath'
        },
        MSize: {
            selector: '//*[@id="product-variants"]/div[3]/div[3]',
            locateStrategy: 'xpath'
        },
        Quantity: '#quantity',
        AddToCart: '#product-add-to-cart',
        DirectCart: 'button[class="btn btn-go-to-cart"]',
        CartQuantity: '#updates_12507116077104',
        RemoveFromCart: 'a[class="remove cart-remove bold-ro-remove"]',
        ContinueShopping: 'button[class="btn-secondary continue-shopping"]',
        Cart: 'div[class="header-cart-toggle"]',
        ViewCart: 'a[class="cart-modal-view-cart"]',
        ActiveTab: 'a[class="secondary-nav-a active"]',
        Accessories: {
            selector: '//li[3]',
            locateStrategy: 'xpath',
        },
        Hats: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Hats + Beanies")])',
            locateStrategy: 'xpath'
        },
        Bags: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Bags + Backpacks")])',
            locateStrategy: 'xpath'
        },
        SmallAccessories: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Small Accessories")])',
            locateStrategy: 'xpath'
        },
        Books: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Books + Stationery")])',
            locateStrategy: 'xpath'
        },
        Socks: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Socks + Shoes")])',
            locateStrategy: 'xpath'
        },
        NewAccessories: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"New Accessories")])',
            locateStrategy: 'xpath'
        },
        Apparel: {
            selector: '//li[2]',
            locateStrategy: 'xpath'
        },
        Shirts: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Shirts")])',
            locateStrategy: 'xpath'
        },
        BaseballJerseys: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Baseball Jerseys")])',
            locateStrategy: 'xpath'
        },
        Outerwear: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Outerwear")])',
            locateStrategy: 'xpath'
        },
        Bottoms: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Bottoms")])',
            locateStrategy: 'xpath'
        },
        Pajamas: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Pajamas")])',
            locateStrategy: 'xpath'
        },
        WomenApparel: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Women\'s Apparel")])',
            locateStrategy: 'xpath'
        },
        BrandCollections: {
            selector: '//li[1]',
            locateStrategy: 'xpath'
        },
        GeoffRamsey: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Geoff Ramsey")])',
            locateStrategy: 'xpath'
        },
        AchievementHunter: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Achievement Hunter")])',
            locateStrategy: 'xpath'
        },
        Funhaus: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Funhaus")])',
            locateStrategy: 'xpath'
        },
        RWBY: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"RWBY")])',
            locateStrategy: 'xpath'
        },
        CowChop: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Cow Chop")])',
            locateStrategy: 'xpath'
        },
        Cosplay: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Cosplay")])',
            locateStrategy: 'xpath'
        },
        Animation: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Animation")])',
            locateStrategy: 'xpath'
        },
        RoosterTeeth: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Rooster Teeth")])',
            locateStrategy: 'xpath'
        },
        SugarPine: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Sugar Pine 7")])',
            locateStrategy: 'xpath'
        },
        LetsPlay: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Let\'s Play")])',
            locateStrategy: 'xpath'
        },
        Dorm: {
            selector: '(//li[4])',
            locateStrategy: 'xpath'
        },
        HomeDecor: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Home Decor")])',
            locateStrategy: 'xpath'
        },
        Drinkware: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Drinkware")])',
            locateStrategy: 'xpath'
        },
        Media: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Media")])',
            locateStrategy: 'xpath'
        },
        LetsPlay: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Let\'s Play")])',
            locateStrategy: 'xpath'
        },
        Toys: {
            selector: '//li[5]',
            locateStrategy: 'xpath'
        },
        NewTab: {
            selector: '//li[6]',
            locateStrategy: 'xpath'
        },
        Clearance: {
            selector: '//li[7]',
            locateStrategy: 'xpath'
        },
        BrandCollectionsActive: {
            selector: '//*[@id="brand-collections"]/div[2]/header/div[1]/div/div/div[3]/nav/ul/li[1]/a',
            locateStrategy: 'xpath'
        },
        ApparelActive: {
            selector: '//*[@id="apparel"]/div[2]/header/div[1]/div/div/div[3]/nav/ul/li[2]/a',
            locateStrategy: 'xpath'
        },
        AccessoriesActive: {
            selector: '//*[@id="accessories"]/div[2]/header/div[1]/div/div/div[3]/nav/ul/li[3]/a',
            locateStrategy: 'xpath'
        },
        DormActive: {
            selector: '//*[@id="home-dorm"]/div[2]/header/div[1]/div/div/div[3]/nav/ul/li[4]/a',
            locateStrategy: 'xpath'
        },
        ToysActive: {
            selector: '//*[@id="toys-collectibles"]/div[2]/header/div[1]/div/div/div[3]/nav/ul/li[5]/a',
            locateStrategy: 'xpath'
        },
        NewTabActive: {
            selector: '//*[@id="new-arrivals"]/div[2]/header/div[1]/div/div/div[3]/nav/ul/li[6]/a',
            locateStrategy: 'xpath'
        },
        ClearanceActive: {
            selector: '//*[@id="clearance"]/div[2]/header/div[1]/div/div/div[3]/nav/ul/li[7]/a',
            locateStrategy: 'xpath'
        },
        NewAchievementHunter: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"New Achievement Hunter")])',
            locateStrategy: 'xpath'
        },
        NewFunhaus: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"New Funhaus")])',
            locateStrategy: 'xpath'
        },
        NewRWBY: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"New RWBY")])',
            locateStrategy: 'xpath'
        },
        NewCowChop: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"New Cow Chop")])',
            locateStrategy: 'xpath'
        },
        NewRoosterTeeth: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"New RT")])',
            locateStrategy: 'xpath'
        },
        NewCampCamp: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"New Camp Camp")])',
            locateStrategy: 'xpath'
        },
        NewRvB: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"New RvB")])',
            locateStrategy: 'xpath'
        },
        SearchRvB: {
            selector: '(//li[contains(.,"red vs blue")])[1]',
            locateStrategy: 'xpath'
        },
        Password: '#password',
        Username: '#username',
        Login: 'div[class="header-account"]',
        Submit: 'button[type="submit"]',
        Head: 'header[class="header"]',
        Figures: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Figures")])',
            locateStrategy: 'xpath'
        },
        Plush: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Plush")])',
            locateStrategy: 'xpath'
        },
        TradingCards: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Trading Cards")])',
            locateStrategy: 'xpath'
        },
        Games: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"Games")])',
            locateStrategy: 'xpath'
        },
        NewToys: {
            selector: '((//ul[@class="secondary-nav-ul"])/li[contains(.,"New Toys + Collectibles")])',
            locateStrategy: 'xpath'
        },
    },
}
