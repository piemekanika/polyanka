## component schema
```
pages/
    home.vue
    profile.vue
    shop.vue
    about.vue (probably iframe with static html)
components/
    home/
        index.vue           [бэк -> /get-products?filter=xxx]
        filters.vue
        shop-list.vue
    common/
        ui/
            button.vue
            badge.vue
            image.vue
            rating.vue
            link.vue
            loader.vue
            ...ui library
        layouts/
            basic/
                index.vue
        blocks/
            header/
                index.vue
                header-profile.vue      [бэк -> /auth -> /profile?id=xxx]
                header-menu.vue
                menu-item.vue           [isSelected?]
            footer/
                index.vue       [iframe with static html]
            mobile-header/
                index.vue
                header-profile.vue
                header-menu.vue
                menu-item.vue
            shop-block/
                index.vue
                header.vue
                photos.vue
                badges.vue
                go-to-shop.vue
            page-loader/
                index.vue
```
