$(window).bind("pageshow", function(event) {
    event.originalEvent.persisted && window.location.reload()
}),
$.ajaxSetup({
    cache: !1
}),
console.log('roller.js 加载');
window.blockStickyHeader = !1,
function($2) {
console.log('function 进来');

    // $2("#site-filters select:not(.styled)").each(function() {
    //     $2(this).styledSelect({
    //         coverClass: "regular-select-cover",
    //         innerClass: "regular-select-inner"
    //     }).addClass("styled"),
    //     $2(this).parent().append($2.themeAssets.arrowDown),
    //     $2(this).data("label") != "" && ($2(this).find("option:selected").hasClass("default") && $2(this).parent().find(".regular-select-inner").html($2(this).data("label")),
    //     $2(this).on("change", function(e) {
    //         $2(this).find("option:selected").hasClass("default") && $2(this).parent().find(".regular-select-inner").html($2(this).data("label"))
    //     }))
    // }),
    // $2(".site-header").append('<span id="js-helpers"><span id="fix-me-header"></span><span id="fix-me-collection"></span></span>'),
    // $2("a:not(.ach), button, span, input").on("focus", function(e) {
    //     $2(this).addClass("hover")
    // }).on("blur", function(e) {
    //     $2(this).removeClass("hover")
    // }),
    // $2(document).keyup(function(e) {
    //     e.keyCode === 27 && $2(".site-close-handle").trigger("click")
    // }),
    window.CUBER = {
        Nav: {
            $siteHeader: null,
            $siteNav: null,
            $siteOverlay: null,
            mount: function() {
                this.$siteHeader = $2("#site-header"),
                this.$siteNav = $2("#site-nav--mobile"),
                this.$siteOverlay = $2("#site-overlay"),
                $2("#site-menu-handle").on("click focusin", function() {
                    this.$siteNav.hasClass("active") || (this.$siteNav.addClass("active"),
                    this.$siteNav.removeClass("show-filters").removeClass("show-cart").removeClass("show-search"),
                    this.$siteOverlay.addClass("active"),
                    $2(".fixing-scroll-now .site-box-background").addClass("sidebar-move"),
                    $2("body").addClass("sidebar-move"))
                }
                .bind(this)),
                $2("#site-filter-handle").length > 0 && $2("#site-filter-handle").on("click", function() {
                    this.$siteNav.hasClass("active") || (this.$siteNav.addClass("active"),
                    this.$siteNav.removeClass("show-cart").removeClass("show-search").addClass("show-filters"),
                    this.$siteOverlay.addClass("active"),
                    $2(".fixing-scroll-now .site-box-background").addClass("sidebar-move"),
                    $2("body").addClass("sidebar-move"))
                }
                .bind(this)),
                $2("#site-cart-handle").length > 0 && !$2("html").hasClass("ie9") && ($2.themeCartSettings == "overlay" && ($2("#site-cart-handle a").addClass("block-fade"),
                $2("#site-cart-handle a").on("click", function(e) {
                    e.preventDefault(),
                    this.$siteNav.hasClass("active") || (this.$siteNav.addClass("active"),
                    this.$siteNav.removeClass("show-filters").removeClass("show-search").addClass("show-cart"),
                    this.$siteOverlay.addClass("active"),
                    $2(".fixing-scroll-now .site-box-background").addClass("sidebar-move"),
                    $2("body").addClass("sidebar-move"))
                }
                .bind(this))),
                $2("#site-cart-handle").on("mouseenter focusis", function() {
                    $2(this).addClass("hover-in").removeClass("hover-out")
                }).on("mouseleave focusout", function() {
                    $2(this).addClass("hover-out").removeClass("hover-in")
                })),
                $2("#site-search-handle").length > 0 && ($2("#site-search-handle a").addClass("block-fade"),
                $2("#site-search-handle a").on("click", function(e) {
                    e.preventDefault(),
                    this.$siteNav.hasClass("active") || ($2("html").hasClass("ie9") ? document.location.href = "/search" : (this.$siteNav.addClass("active"),
                    this.$siteNav.removeClass("show-filters").removeClass("show-cart").addClass("show-search"),
                    this.$siteOverlay.addClass("active"),
                    $2(".fixing-scroll-now .site-box-background").addClass("sidebar-move"),
                    $2("body").addClass("sidebar-move"),
                    $2('form.search-bar input[type="search"]').focus()))
                }
                .bind(this)),
                $2("#site-search-handle").on("mouseenter", function() {
                    $2(this).addClass("hover-in").removeClass("hover-out")
                }).on("mouseleave focusout", function() {
                    $2(this).addClass("hover-out").removeClass("hover-in")
                }),
                $2('a[href="#search"]').on("click", function(e) {
                    e.preventDefault(),
                    $2("#site-search-handle a").trigger("click")
                })),
                $2(".site-close-handle, #site-overlay").on("click", function() {
                    this.$siteNav.hasClass("active") && (this.$siteNav.removeClass("active"),
                    this.$siteOverlay.removeClass("active"),
                    $2(".fixing-scroll-now .site-box-background").removeClass("sidebar-move"),
                    $2("body").removeClass("sidebar-move"))
                }
                .bind(this)),
                $2(".site-nav.style--classic .has-submenu").each(function() {
                    $2(this).on("mouseenter focusin", function() {
                        $2(this).find(".submenu").stop().slideDown(200),
                        $2("body").addClass("opened-submenu"),
                        $2("body").addClass("opened-submenu-flag"),
                        $2(".site-overlay").addClass("active"),
                        $2(this).find(".submenu").attr("aria-expanded", "true")
                    }).on("mouseleave focusout", function() {
                        $2(this).find(".submenu").attr("aria-expanded", "false"),
                        $2(this).find(".submenu").stop().slideUp(200, function() {
                            $2("body").hasClass("opened-submenu-flag") || $2("body").removeClass("opened-submenu")
                        }),
                        $2(".site-overlay").removeClass("active"),
                        $2("body").removeClass("opened-submenu-flag")
                    })
                }),
                $2(".site-nav.style--sidebar .has-submenu:not(.collections-menu)").each(function() {
                    $2(this).children("a").addClass("block-fade"),
                    $2(this).children("a").on("click touchstart", function(e) {
                        e.preventDefault()
                    }),
                    $2(this).children("a").on("click touchstart", function(e) {
                        e.preventDefault();
                        var $parent = $2(this).parent();
                        $parent.hasClass("active") ? ($parent.find(".submenu").stop().slideUp(200),
                        $parent.removeClass("active"),
                        $parent.find(".submenu").attr("aria-expanded", "false")) : ($parent.addClass("active"),
                        $parent.find(".submenu").stop().slideDown(200),
                        $parent.find(".submenu").attr("aria-expanded", "true")),
                        $2(this).removeClass("hover")
                    })
                }),
                $2(".site-nav.style--sidebar .has-babymenu:not(.collections-menu)").each(function() {
                    $2(this).children("a").addClass("block-fade"),
                    $2(this).children("a").on("click touchstart", function(e) {
                        e.preventDefault()
                    }),
                    $2(this).children("a").on("click touchstart", function(e) {
                        e.preventDefault();
                        var $parent = $2(this).parent();
                        if ($parent.hasClass("active")) {
                            var tempBoNo = !1
                              , tempBoHref = $2(this).attr("href");
                            tempBoHref != "" ? tempBoHref.indexOf("#") >= 0 ? (tempBoNo = !0,
                            tempBoHref.indexOf("#") == tempBoHref.length - 1 || ($2(".site-close-handle").trigger("click"),
                            document.location.href = tempBoHref)) : $2(this).attr("target") == "_blank" ? window.open(tempBoHref, "_blank") : ($2("body").fadeOut(200),
                            setTimeout(function() {
                                document.location.href = tempBoHref
                            }
                            .bind(this), 200),
                            e.preventDefault()) : TempBoNo = !0,
                            tempBoNo && ($parent.removeClass("active"),
                            $parent.find(".babymenu").stop().slideUp(200),
                            $parent.find(".babymenu").attr("aria-expanded", "false"))
                        } else
                            $parent.addClass("active"),
                            $parent.find(".babymenu").stop().slideDown(200),
                            $parent.find(".babymenu").attr("aria-expanded", "true")
                    })
                }),
                $2(".style--classic .babymenu").each(function() {
                    var bestWidth = 0;
                    $2(this).parent().parent().css("display", "block"),
                    $2(this).find("a").each(function() {
                        $2(this).css("position", "fixed"),
                        $2(this).attr("data-width", $2(this).outerWidth(!0)),
                        $2(this).outerWidth() > bestWidth && (bestWidth = $2(this).outerWidth(!0)),
                        $2(this).css({
                            position: "static",
                            width: "100%"
                        })
                    }),
                    bestWidth += 30,
                    $2(this).css("width", bestWidth),
                    $2(this).css("transform", "translateX(-45%)"),
                    $2(this).parent().parent().css("display", "none"),
                    $2(this).css("display", "none")
                }),
                $2(".style--classic .has-babymenu").each(function() {
                    $2(this).on("mouseenter focusin", function() {
                        $2(this).find(".babymenu").stop().slideDown(200),
                        $2(this).find(".babymenu ul").attr("aria-expanded", "true"),
                        $2(this).css("zIndex", 9)
                    }).on("mouseleave focusout", function() {
                        $2(this).find(".babymenu").stop().slideUp(200),
                        $2(this).find(".babymenu ul").attr("aria-expanded", "false"),
                        $2(this).css("zIndex", 1)
                    })
                }),
                $2("body").addClass("desktop--add-some-padding"),
                $2(".style--classic li.has-submenu[data-size]").each(function() {
                    var menuSize = parseInt($2(this).data("size"));
                    menuSize > 15 ? $2(this).addClass("text-smallest") : menuSize > 10 ? $2(this).addClass("text-smaller") : menuSize > 5 && $2(this).addClass("text-small")
                }),
                $2("#site-header").hasClass("header-scroll") && ($2("body").hasClass("template-index") && $2("body").addClass("index-margin-fix"),
                window.lst = $2(window).scrollTop(),
                $2(".site-nav.style--classic .submenu").css("top", $2(".site-header").outerHeight()),
                $2(window).on("scroll.sticky-header", function() {
                    if (!window.blockStickyHeader) {
                        var st = $2(window).scrollTop();
                        if (st < 0 || Math.abs(lst - st) <= 5)
                            return;
                        st == 0 ? (this.$siteHeader.removeClass("animate"),
                        this.$siteHeader.removeClass("fix"),
                        this.$siteHeader.removeClass("ready")) : st <= lst && !this.$siteHeader.hasClass("fix") ? (this.$siteHeader.addClass("fix"),
                        setTimeout(function() {
                            this.$siteHeader.addClass("ready")
                        }
                        .bind(this), 5),
                        setTimeout(function() {
                            this.$siteHeader.addClass("animate")
                        }
                        .bind(this), 25)) : st > lst && this.$siteHeader.hasClass("animate") && (this.$siteHeader.removeClass("animate"),
                        setTimeout(function() {
                            this.$siteHeader.removeClass("fix"),
                            this.$siteHeader.removeClass("ready")
                        }
                        .bind(this), 105)),
                        window.lst = st
                    }
                }
                .bind(this)))
            },
            unmount: function() {
                $2("#site-menu-handle").off("click"),
                $2("#site-cart-handle a").off("click"),
                $2("#site-filter-handle").off("click"),
                this.$siteNav.removeClass("active"),
                this.$siteOverlay.removeClass("active"),
                $2(".fixing-scroll-now .site-box-background").removeClass("sidebar-move"),
                $2("body").removeClass("sidebar-move"),
                $2(window).off("scroll.sticky-header")
            }
        },
        Collection: {
            $collectionGrid: null,
            $collectionNext: null,
            $collectionNextLink: null,
            mount: function() {
                $2(".box__paginate").length > 0 && (this.$collectionGrid = $2("#section-collection"),
                this.$collectionNext = $2(".box__paginate"),
                this.$collectionNextLink = $2(".box__paginate a"),
                this.$collectionNextLink.append('<div class="preloader"><span>.</span><span>.</span><span>.</span></div>'),
                this.$collectionNextLink.on("click", function(e) {
                    this.$collectionNextLink.addClass("loading");
                    var nextPageURL = this.$collectionNextLink.attr("href");
                    $2.ajax({
                        url: nextPageURL
                    }).done(function(data) {
                        this.$collectionNextLink.removeClass("loading"),
                        this.$collectionNext.before($2(data).find(".site-box.box__collection"));
                        var i2 = 0;
                        this.$collectionGrid.find(".box__collection:not(.active)").each(function() {
                            setTimeout(function() {
                                $2(this).addClass("active")
                            }
                            .bind(this), 100 * i2++)
                        }),
                        $2(data).find(".site-box.box__paginate").length > 0 ? this.$collectionNextLink.attr("href", $2(data).find(".site-box.box__paginate a").attr("href")) : this.$collectionNext.remove()
                    }
                    .bind(this)),
                    e.preventDefault()
                }
                .bind(this))),
                $2(window).on("resize.collection-grid", window.debounce(function() {
                    this._resizeCollection()
                }
                .bind(this), 300)).trigger("resize.collection-grid"),
                this._resizeCollection(),
                setTimeout(function() {
                    this._resizeCollection()
                }
                .bind(this), 1001);
                var collectionSize = parseInt($2(".box__heading").data("size"));
                if (collectionSize > 0 && collectionSize < 4)
                    for (var i = 0; i < 4 - collectionSize; i++)
                        $2("#section-collection").append('<div class="site-box box--small box--typo-small lap--hide box--no-padding box__collection active" />')
            },
            _resizeCollection: function() {
                if ($2("#fix-me-header").css("display") == "block" && $2("#fix-me-collection").css("display") == "block") {
                    var wh = $2(window).height()
                      , h = wh - $2(".site-header").outerHeight();
                    $2(".mount-products .site-box.box__collection, .mount-products .site-box.box__heading").attr("style", "")
                }
            },
            unmount: function() {
                $2(window).off("resize.collection-grid")
            }
        },
        Product: {
            $productGallery: null,
            $productGalleryItem: null,
            $productGalleryIndex: null,
            $productCarousel: null,
            $productCarouselImgs: null,
            productFlkty: null,
            $productStuff: null,
            productStuffMove: !1,
            mount: function($product) {
                var productIsDisabled = !1;
                $product.find(".product--section").data("hide-variants") && $product.find(".product--section").data("product-available") ? this._advancedOptionsSelector($product, JSON.parse($product.find(".product-json")[0].innerHTML)) : $product.find(".product--section").data("hide-variants") && !$product.find(".product--section").data("product-available") && (productIsDisabled = !0);
                var _this = {};
                if ($product.data("po", _this),
                _this.$productGallery = $product.find(".box__product-gallery"),
                _this.$productGalleryItem = $product.find(".box__product-gallery .gallery-item"),
                _this.$productGallery.append('<div class="gallery-index out-with-you"><span class="current">' + (window.CuberProductImageIndex != null ? window.CuberProductImageIndex + 1 : 1) + '</span> / <span class="total">' + _this.$productGalleryItem.length + "</span></div>"),
                _this.$productGalleryIndex = _this.$productGallery.find(".gallery-index .current"),
                _this.$productCarousel = _this.$productGallery.children(".site-box-content"),
                window.CUBER.Main._mountScrollMovers({
                    parent: _this.$productGallery,
                    items: $2(".gallery-index, .site-sharing, .product-zoom")
                }),
                window.CUBER.Main._mobileSharingInit(),
                _this.$productGallery.hasClass("scroll") && $2(window).on("scroll.product-gallery", function() {
                    _this.$productCarousel.hasClass("flickity-enabled") || _this.$productGalleryItem.each(function(key, elm) {
                        $2(window).scrollTop() + $2(window).height() > $2(elm).offset().top + $2(window).height() / 2 && !$2(elm).hasClass("current") ? ($2(elm).addClass("current"),
                        _this.$productGalleryIndex.html($2(elm).index() + 1)) : $2(window).scrollTop() + $2(window).height() < $2(elm).offset().top + $2(window).height() / 2 && $2(elm).hasClass("current") && ($2(elm).removeClass("current"),
                        _this.$productGalleryIndex.html($2(elm).index()))
                    }
                    .bind(_this))
                }
                .bind(_this)).trigger("scroll.product-gallery"),
                _this.$productCarousel.flickity({
                    cellSelector: ".gallery-item:not(.remove-from-flick)",
                    initialIndex: window.CuberProductImageIndex != null ? window.CuberProductImageIndex : 0,
                    wrapAround: !0,
                    prevNextButtons: !1,
                    pageDots: !0,
                    watchCSS: !!_this.$productGallery.hasClass("scroll"),
                    resize: !0
                }),
                window.CUBER.Scroll.mount(),
                _this.productFlkty = _this.$productCarousel.data("flickity"),
                _this.$productCarouselImgs = _this.$productCarousel.find(".gallery-item img"),
                _this.$productCarousel.on("select.flickity", function() {
                    _this.$productGalleryIndex.html(_this.productFlkty.selectedIndex + 1)
                }
                .bind(_this)),
                _this.$productGallery.hasClass("slider") && (_this.$productGallery.find(".gallery-index").append('<span class="icon-go go-prev">' + ($2.themeAssets && $2.themeAssets.arrowRight ? $2.themeAssets.arrowRight : '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="-0.00012207" y="5.32214" width="14" height="2" fill="#111111"/><path d="M10.3635 0.322144L15.6363 6.32214L14.2726 7.82214L8.99989 1.82214L10.3635 0.322144Z" fill="#111111"/><path d="M8.99984 10.8222L14.2726 4.82217L15.6362 6.32211L10.3635 12.3222L8.99984 10.8222Z" fill="#111111"/></svg>') + '</span><span class="icon-go go-next">' + ($2.themeAssets && $2.themeAssets.arrowRight ? $2.themeAssets.arrowRight : '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="-0.00012207" y="5.32214" width="14" height="2" fill="#111111"/><path d="M10.3635 0.322144L15.6363 6.32214L14.2726 7.82214L8.99989 1.82214L10.3635 0.322144Z" fill="#111111"/><path d="M8.99984 10.8222L14.2726 4.82217L15.6362 6.32211L10.3635 12.3222L8.99984 10.8222Z" fill="#111111"/></svg>') + "</span>"),
                _this.$productGallery.find(".go-prev").on("click", function() {
                    _this.productFlkty.previous()
                }
                .bind(_this)),
                _this.$productGallery.find(".go-next").on("click", function() {
                    _this.productFlkty.next()
                }
                .bind(_this))),
                $2("#product-zoom-in").length > 0 && ($2("body").append('<div id="product-zoomed-image"><img /><div id="product-zoom-out" class="product-zoom expand"><span class="zoom-out">' + $2.themeAssets.iconZoom + "</span></div></div>"),
                $2("#product-zoom-in").on("click", function(e) {
                    $2("#section-product").find(".site-box.box__product-content").addClass("animate"),
                    setTimeout(function() {
                        $2("#section-product").find(".site-box.box__product-content").addClass("expand"),
                        $2("body").addClass("kill-overflow")
                    }, 10),
                    $2("#section-product").find(".site-box.box__product-gallery").stop().animate({
                        opacity: 0
                    }, 200),
                    $2("#shopify-section-header, #shopify-section-footer, .site-sharing").stop().animate({
                        opacity: 0
                    }, 200);
                    var $image = $2("#product-zoomed-image img");
                    $image.attr("src", $2(".gallery-item").eq(parseInt(_this.$productGalleryIndex.html()) - 1).data("master")),
                    setTimeout(function() {
                        $image[0].naturalWidth > 0 ? this._productZoomMount($image) : $image.on("load", function() {
                            this._productZoomMount($image)
                        }
                        .bind(this))
                    }
                    .bind(this), 200)
                }
                .bind(this)),
                $2("#product-zoom-out").on("click", function(e) {
                    setTimeout(function() {
                        $2("#section-product").find(".site-box.box__product-content").removeClass("expand"),
                        $2("body").removeClass("kill-overflow"),
                        setTimeout(function() {
                            $2("#section-product").find(".site-box.box__product-content").removeClass("animate")
                        }, 400),
                        $2("#section-product").find(".site-box.box__product-gallery").stop().animate({
                            opacity: 1
                        }, 200),
                        $2("#shopify-section-header, #shopify-section-footer, .site-sharing").stop().animate({
                            opacity: 1
                        }, 200)
                    }, 150),
                    this._productZoomUnmount()
                }
                .bind(this))),
                $product.find(".product--section").hasClass("onboarding-true") || this.initProductForm($product, productIsDisabled),
                $product.find(".qty-button").length > 0) {
                    var $productQty = $product.find(".quantity-selector");
                    parseInt($productQty.val()) - 1 < parseInt($productQty.attr("min")) && $product.find(".qty-minus").addClass("disabled"),
                    parseInt($productQty.val()) + 1 > parseInt($productQty.attr("max")) && $product.find(".qty-plus").addClass("disabled"),
                    $product.find(".qty-minus").on("click", function($productQty2, $productQtyPlus, e) {
                        if (!$2(e.target).hasClass("disabled")) {
                            var currentQty = parseInt($productQty2.val());
                            currentQty - 1 >= parseInt($productQty2.attr("min")) && ($productQty2.val(currentQty - 1),
                            $productQtyPlus.removeClass("disabled")),
                            currentQty - 1 <= parseInt($productQty2.attr("min")) && $2(e.target).addClass("disabled")
                        }
                        e.preventDefault()
                    }
                    .bind(this, $productQty, $product.find(".qty-plus"))),
                    $product.find(".qty-plus").on("click", function($productQty2, $productQtyMinus, e) {
                        if (!$2(e.target).hasClass("disabled")) {
                            var currentQty = parseInt($productQty2.val());
                            currentQty + 1 <= parseInt($productQty2.attr("max")) && ($productQty2.val(currentQty + 1),
                            $productQtyMinus.removeClass("disabled")),
                            currentQty + 1 >= parseInt($productQty2.attr("max")) && $2(e.target).addClass("disabled")
                        }
                        e.preventDefault()
                    }
                    .bind(this, $productQty, $product.find(".qty-minus")))
                }
                if ($product.find(".product--add-to-cart-form").length > 0 && $product.find(".product--add-to-cart-form").data("type") == "overlay" && !$2("html").hasClass("ie9")) {
                    var $form = $product.find(".product--add-to-cart-form form")
                      , $submitText = $form.find(".add-to-cart-text")
                      , $submitButton = $form.find('button[type="submit"]')
                      , $cartCount = $2(".cart-menu .count")
                      , $cartQty = $product.find(".quantity-selector");
                    $form.attr("action").indexOf(".js") < 0 && $form.attr("action", $form.attr("action") + ".js"),
                    $form.submit(function(e) {
                        e.preventDefault();
                        var oldText = $submitText.html();
                        $submitText.html('<span class="preloader"><span>.</span><span>.</span><span>.</span></span>'),
                        $submitButton.css("pointer-events", "none");
                        var itemName = $product.find(".product-title").text()
                          , itemPrice = $product.find(".product-price").attr("data-price")
                          , itemCurrency = $2('meta[itemprop="priceCurrency"]').attr("content")
                          , itemId = $product.find(".product--section").data("id");
                        $2.ajax({
                            type: $form.prop("method"),
                            url: $form.prop("action"),
                            data: $form.serialize(),
                            dataType: "json",
                            success: function(data) {
                                setTimeout(function() {
                                    $submitText.html(oldText),
                                    $submitButton.css("pointer-events", "all")
                                }, 500),
                                $2.ajax({
                                    url: "/cart",
                                    success: function(data2) {
                                        if (typeof fbq != "undefined" && fbq("track", "AddToCart", {
                                            content_name: itemName,
                                            content_ids: [itemId],
                                            content_type: "product_group",
                                            value: itemPrice,
                                            currency: itemCurrency
                                        }),
                                        $2("#site-cart .cart-items").html($2(data2).find("#site-cart .cart-items .cart-item")),
                                        $2("#CartTotal").html($2(data2).find("#CartTotal").html()),
                                        setTimeout(function() {
                                            $submitText.html(oldText),
                                            $submitButton.css("pointer-events", "all")
                                        }, 500),
                                        $cartQty.length > 0) {
                                            var qty = parseInt($cartQty.val());
                                            qty == 1 ? $2("#site-cart .subtitle").html($2("#site-cart .subtitle").data("added-singular").replace(/{{ count }}|count|{{count}}/g, qty)) : $2("#site-cart .subtitle").html($2("#site-cart .subtitle").data("added-plural").replace(/{{ count }}|count|{{count}}/g, qty)),
                                            $cartCount.text(parseInt($cartCount.text()) + parseInt($cartQty.val()))
                                        } else
                                            $cartCount.text(parseInt($cartCount.text()) + 1),
                                            $2("#site-cart .subtitle").html($2("#site-cart .subtitle").data("added-singular").replace(/{{ count }}|count|{{count}}/, 1));
                                        $2(".site-cart-handle a").trigger("click")
                                    }
                                })
                            },
                            error: function(data) {
                                alert(data.responseJSON.description),
                                setTimeout(function() {
                                    $submitText.html(oldText),
                                    $submitButton.css("pointer-events", "all")
                                }, 100)
                            }
                        })
                    })
                }
            },
            _productZoomMount: function($image) {
                $2("#product-zoomed-image").css("display", "block"),
                $image.css({
                    left: 0,
                    top: 0
                }),
                $2(window).on("mousemove.product-zoom", function(e) {
                    e.preventDefault(),
                    window.clientX = e.clientX,
                    window.clientY = e.clientY;
                    var x = e.clientX * ($2(window).width() - $image.width()) / $2(window).width()
                      , y = e.clientY * ($2(window).height() - $image.height()) / $2(window).height();
                    $image.css({
                        left: x,
                        top: y
                    })
                }),
                $image[0].naturalWidth <= $image[0].naturalHeight ? $image.addClass("portrait") : $image.addClass("landscape"),
                $image.data("ratio", $image[0].naturalWidth / $image[0].naturalHeight),
                $2(window).on("resize.product-zoom", function() {
                    var rf = $2(window).width() > 768 ? 1 : 2;
                    $image.hasClass("portrait") ? ($image.css("width", $2(window).width() * rf),
                    $image.css("height", $2(window).width() * rf / $image.data("ratio"))) : ($image.css("height", $2(window).height() * rf),
                    $image.css("width", $2(window).height() * rf * $image.data("ratio")),
                    $image.width() < $2(window).width() && ($image.css("width", $2(window).width() * rf),
                    $image.css("height", $2(window).width() * rf / $image.data("ratio"))));
                    var x = window.clientX * ($2(window).width() - $image.width()) / $2(window).width()
                      , y = window.clientY * ($2(window).height() - $image.height()) / $2(window).height()
                }).trigger("resize"),
                $image.css("opacity", 1)
            },
            _productZoomUnmount: function() {
                $2("#product-zoomed-image img").css("opacity", "0"),
                setTimeout(function() {
                    $2(window).off("resize.product-zoom"),
                    $2(window).off("mousemove.product-zoom"),
                    $2("#product-zoomed-image img").attr("src", ""),
                    $2("#product-zoomed-image").css("display", "none")
                }, 300)
            },
            initProductForm: function($product, pdisabled) {
                var firstVariantEver = !0
                  , productSingleObject = JSON.parse($product.find(".product-json")[0].innerHTML)
                  , productVariants = productSingleObject.variants;
                if ($product.find("form select.product-variants").on("change", function(e) {
                    this._initProductVariantChange(!1, productSingleObject, $product)
                }
                .bind(this)),
                this._initProductVariantChange(!0, productSingleObject, $product),
                $product.find(".product--add-to-cart-form").hasClass("style--classic"))
                    $product.find("select.product-variants:not(.styled)").each(function() {
                        $2(this).styledSelect({
                            coverClass: "regular-select-cover",
                            innerClass: "regular-select-inner"
                        }).addClass("styled"),
                        $2(this).parent().append($2.themeAssets.arrowDown),
                        $2(this).on("focusin", function() {
                            $2(this).parent().addClass("focus")
                        }).on("focusout", function() {
                            $2(this).parent().removeClass("focus")
                        })
                    }),
                    $product.find(".product-variant").removeClass("hidden"),
                    pdisabled && $product.find(".product-variant").css("display", "none");
                else {
                    var i = 1;
                    $product.find(".product-variant").each(function(j) {
                        var color = !!window.returnColorVariant($2(this).find("label").text())
                          , varDOM = '<ul class="color-' + color + '" data-option="option' + (j + 1) + '">';
                        $2(this).find(".product-variants option").each(function() {
                            varDOM += "<li" + ($2(this).is(":selected") ? ' class="active"' : "") + ' tabindex="0" data-text="' + $2(this).val() + '"><span' + (color ? ' style="background-color: ' + $2(this).val().split(" ").pop() + '"' : "") + ">" + $2(this).val() + "</span></li>"
                        }),
                        varDOM += "</ul>",
                        $2(this).find("select").hide(),
                        $2(this).append(varDOM),
                        $2(this).removeClass("hidden"),
                        $2(this).find("ul li").on("click", function() {
                            $2(this).parent().parent().find("select").val($2(this).find("span").text()).change()
                        }),
                        $2(this).find("ul li").on("keyup", function(e) {
                            e.keyCode == 13 && $2(this).parent().parent().find("select").val($2(this).find("span").text()).change()
                        })
                    }),
                    pdisabled && $product.find(".product-variant").find("li").addClass("disabled")
                }
                productSingleObject.variants.length == 1 && productSingleObject.variants[0].title.indexOf("Default") >= 0 && $product.find(".product-variant").hide()
            },
            _getProductVariant: function($product) {
                var optionArray = [];
                return $product.find("form select.product-variants").each(function() {
                    optionArray.push($2(this).find(":selected").val())
                }),
                optionArray
            },
            _initProductVariantChange: function(firstTime, productSingleObject, $product) {
                var variant = null
                  , options = this._getProductVariant($product);
                productSingleObject.variants.forEach(function(el) {
                    $2(el)[0].options.equals(options) && (variant = $2(el)[0])
                }),
                this._productSelectCallback(variant, $product, productSingleObject),
                !firstTime && $product.find("#productSelect option").length > 1 && !$2("body").hasClass("template-index") && this._updateProductVariantState(variant)
            },
            _updateProductVariantState: function(variant) {
                if (!(!history.pushState || !variant)) {
                    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?variant=" + variant.id;
                    window.history.replaceState({
                        path: newurl
                    }, "", newurl)
                }
            },
            _productSelectCallback: function(variant, $product, productSingleObject) {
                var _po = $product.data("po")
                  , $addToCart = $product.find(".product--add-to-cart-form")
                  , $addToCartButton = $addToCart.find('button[type="submit"]')
                  , $productPrice = $product.find(".product-price")
                  , $comparePrice = $product.find(".compare-price")
                  , $quantityElements = $product.find(".quantity-selector, label + .js-qty")
                  , $quantityElementsHolder = $product.find(".quantity-selector-holder")
                  , $addToCartText = $product.find(".add-to-cart-text")
                  , $productGallery = $product.find(".box__product-gallery");
                if (variant) {
                    if ($product.find("#productSelect").find('option[value="' + variant.id + '"]').prop("selected", !0),
                    variant.featured_image != null) {
                        var variantImg = $productGallery.find('.gallery-item[data-variant-img="' + variant.featured_image.id + '"]');
                        typeof VIG != "undefined" ? (VIG.switchImages(productSingleObject.id, variant.id, ".box__product-gallery .site-box-content"),
                        $product.find(".box__product-gallery .site-box-content").hasClass("flickity-enabled") && setTimeout(function() {
                            $product.find(".box__product-gallery .gallery-item").each(function() {
                                $2(this).removeClass("remove-from-flick"),
                                $2(this).css("display") == "none" && $2(this).addClass("remove-from-flick")
                            }),
                            _po.productFlkty.reloadCells(),
                            _po.productFlkty.reposition()
                        }, 1e3)) : $productGallery.hasClass("scroll") && variantImg.length > 0 && $2(window).width() > 1024 ? ($2(window).scrollTop() > 0 && $2("html, body").stop().animate({
                            scrollTop: $productGallery.offset().top
                        }, 150, function() {
                            $2(window).off("scroll.to-junk")
                        }),
                        variantImg.prependTo($product.find(".box__product-gallery .site-box-content"))) : _po != null && variantImg.length > 0 && (_po.productFlkty != null && variantImg.data("index") != _po.productFlkty.selectedElement ? _po.productFlkty.select(variantImg.data("index")) : window.CuberProductImageIndex = variantImg.data("index"))
                    }
                    $addToCart.hasClass("style--minimal") && $product.find(".product-variant ul").each(function() {
                        var option = variant[$2(this).data("option")];
                        $2(this).find("li").each(function() {
                            $2(this).removeClass("active"),
                            option == $2(this).data("text") && $2(this).addClass("active")
                        })
                    });
                    var $variantQuantity = $product.find(".variant-quantity");
                    variant.available ? ($quantityElements.prop("max", 999),
                    $addToCartButton.removeClass("disabled").prop("disabled", !1),
                    $addToCartText.text($2("body").hasClass("template-product-pre-order") ? $addToCartText.data("text") : window.product_words_add_to_cart_button),
                    $variantQuantity.text($2("body").hasClass("template-product-pre-order") ? $variantQuantity.data("text") : ""),
                    $quantityElements.show(),
                    $quantityElementsHolder != null && $quantityElementsHolder.show()) : ($variantQuantity.text(window.product_words_no_products),
                    $addToCartButton.addClass("disabled").prop("disabled", !0),
                    $addToCartText.text(window.product_words_sold_out_variant),
                    $quantityElements.hide(),
                    $quantityElementsHolder != null && $quantityElementsHolder.hide()),
                    $productPrice.html(theme.Currency.formatMoney(variant.price, window.shop_money_format)),
                    $productPrice.attr("data-price", variant.price / 100),
                    variant.compare_at_price > variant.price ? $comparePrice.html(theme.Currency.formatMoney(variant.compare_at_price, window.shop_money_format)).show() : $comparePrice.hide(),
                    $product.find(".variant-sku").length > 0 && (variant ? $product.find(".variant-sku").text(variant.sku) : $product.find(".variant-sku").empty())
                } else
                    $addToCartButton.addClass("disabled").prop("disabled", !0),
                    $addToCartText.text(window.product_words_unavailable_variant),
                    $quantityElements.hide(),
                    $quantityElementsHolder != null && $quantityElementsHolder.hide();
                if ($product.find(".qty-button").length > 0) {
                    var $productQty = $product.find(".quantity-selector");
                    $product.find(".qty-minus").removeClass("disabled"),
                    $product.find(".qty-plus").removeClass("disabled"),
                    parseInt($productQty.val()) - 1 < parseInt($productQty.attr("min")) && $product.find(".qty-minus").addClass("disabled"),
                    parseInt($productQty.val()) + 1 > parseInt($productQty.attr("max")) && $product.find(".qty-plus").addClass("disabled")
                }
            },
            _advancedOptionsSelector: function($product, productJson) {
                var om = {};
                $product.data("om", om);
                var forceMutation = !1
                  , $addToCartForm = $product.find(".product--add-to-cart-form");
                if (window.MutationObserver && $addToCartForm.length) {
                    typeof observer == "object" && typeof observer.disconnect == "function" && observer.disconnect();
                    var config = {
                        childList: !0,
                        subtree: !0
                    }
                      , observer = new MutationObserver(function() {
                        Shopify.linkOptionSelectors(productJson, $product),
                        observer.disconnect()
                    }
                    );
                    forceMutation && Shopify.linkOptionSelectors(productJson, $product),
                    observer.observe($addToCartForm[0], config)
                }
            },
            unmount: function($product) {
                var po = $product.data("po");
                $2(window).off("scroll.product-gallery"),
                $2(window).off("resize.position-product-zoom"),
                po.$productCarousel.off("scroll.flickity"),
                po.$productCarousel.off("select.flickity"),
                po.productFlkty.destroy(),
                $2("#product-zoom").off("click")
            }
        },
        Main: {
            $searchForm: null,
            $searchResults: null,
            $searchPreloader: null,
            $searchPagination: null,
            $body: null,
            $siteHeader: null,
            $siteFooter: null,
            $siteBoxes: null,
            _mountScrollMovers: function(props) {
                var $parent = props.parent
                  , parentOutOfFocus = !1;
                setTimeout(function() {
                    props.items.removeClass("out-with-you")
                }, 1e3),
                props.items.addClass("animate-owy"),
                $2(window).on("scroll.scroll-movers", function() {
                    !parentOutOfFocus && $2(window).scrollTop() + $2(window).height() > $parent.offset().top + $parent.height() ? (props.items.addClass("out-with-you"),
                    parentOutOfFocus = !0) : parentOutOfFocus && $2(window).scrollTop() + $2(window).height() <= $parent.offset().top + $parent.height() && (parentOutOfFocus = !1,
                    props.items.removeClass("out-with-you"))
                }
                .bind(this))
            },
            _mobileSharingInit: function() {
                $2(".touchevents .site-sharing .icon").on("touchstart", function(e) {
                    e.preventDefault();
                    var $parent = $2(this).parent();
                    $parent.hasClass("hover") ? $parent.removeClass("hover") : $parent.addClass("hover")
                }),
                $2(".touchevents .site-sharing a").on("touchstart", function(e) {
                    $2(this).parent().removeClass("hover")
                })
            },
            _resizeEverything: function() {
                this.$body.css("paddingTop", this.$siteHeader.outerHeight()),
                this.$body.hasClass("template-index") ? $2("#fix-me-header").css("display") == "block" ? $2(".mount-slideshow").children("div").length > 0 ? ($2("#shopify-section-home_slideshow").css("marginTop", -this.$siteHeader.outerHeight()),
                $2(".fix-me-with-margin").css("marginTop", this.$siteHeader.outerHeight())) : ($2(".index-section:first-child .fix-me-with-margin").css("marginTop", -this.$siteHeader.outerHeight()),
                $2(".index-section:first-child .fix-me-with-height").css("height", $2(window).height() - this.$siteHeader.outerHeight())) : $2(".mount-slideshow").children("div").length > 0 && ($2("#shopify-section-home_slideshow").css("marginTop", "0"),
                $2(".slideshow-item:first-child .site-box-content").css("marginTop", "0")) : $2("#fix-me-header").css("display") == "block" ? ($2(".fix-me-with-margin").each(function(key, elm) {
                    $2(elm).outerHeight() < $2(window).height() ? $2(elm).css("marginTop", -this.$siteHeader.outerHeight()) : $2(elm).css("marginTop", "0")
                }
                .bind(this)),
                $2(".fix-me-with-height-hard").css({
                    height: $2(window).height() - this.$siteHeader.outerHeight(),
                    "min-height": $2(window).height() - this.$siteHeader.outerHeight()
                }),
                $2(".fix-me-with-height").css({
                    "min-height": $2(window).height() - this.$siteHeader.outerHeight()
                })) : ($2(".fix-me-with-margin").css("marginTop", "0"),
                $2(".fix-me-with-height, .fix-me-with-height-hard").attr("style", "")),
                $2(".mount-product").length > 0 && $2(".mount-product").each(function(key, elm) {
                    window.CuberFixGalleryItem && $2(elm).find(".gallery-item").css("height", ($2(window).height() - this.$siteHeader.outerHeight()) * .8),
                    $2(elm).find(".product--section").removeClass("sticky-because"),
                    $2(elm).find(".site-box.box__product-gallery").css("content") != '"fix-me-also"' && $2(elm).find(".site-box.box__product-gallery").height() < $2(elm).find(".site-box.box__product-content").height() && $2(elm).find(".product--section").addClass("sticky-because")
                }
                .bind(this)),
                $2(".site-header.desktop-view--classic .submenu").css("top", $2(".site-header").outerHeight()),
                $2("#site-menu-handle").css("opacity") == "1" ? $2(".site-nav.style--sidebar a, #site-menu-handle").attr("tabIndex", 0) : $2(".site-nav.style--sidebar a, #site-menu-handle").attr("tabIndex", -1)
            },
            _animateEverything: function(firstAnimation) {
                var i = 0;
                this.$siteBoxes.each(function() {
                    var vp = 0;
                    !$2(this).hasClass("active") && $2(window).scrollTop() + $2(window).height() > $2(this).offset().top + vp && (i++,
                    setTimeout(function() {
                        $2(this).addClass("active")
                    }
                    .bind(this), 100 * i))
                }),
                !this.$siteFooter.hasClass("active") && $2(window).scrollTop() + $2(window).height() > this.$siteFooter.offset().top + 150 && (this.$siteFooter.addClass("active"),
                this.$siteFooter.find(".site-box").addClass("active"))
            },
            mount: function() {
                $2(".rte").fitVids(),
                this.$siteBoxes = $2(".site-box:not(.footer-box)"),
                this.$siteFooter = $2(".site-footer"),
                $2("body").hasClass("ie9") || (this._animateEverything(!0),
                $2(window).on("scroll.fade-animation", function(e) {
                    this._animateEverything(!1)
                }
                .bind(this))),
                $2("html.no-touchevents a[href]").each(function() {
                    $2(this).on("click", function(e) {
                        e.ctrlKey || e.metaKey || $2(this).attr("target") == "_blank" || $2(this).hasClass("video-lightbox") || $2(this).hasClass("lightbox") || $2(this).hasClass("block-fade") || $2(this).attr("href") == "" || $2(this).attr("href").indexOf("#") >= 0 || ($2(this).off("click"),
                        $2("body").fadeOut(200),
                        setTimeout(function() {
                            document.location.href = $2(this).attr("href")
                        }
                        .bind(this), 200),
                        e.preventDefault())
                    })
                }),
                this.$body = $2("body"),
                this.$siteHeader = $2("#site-header"),
                $2(window).on("resize", window.debounce(function() {
                    this._resizeEverything()
                }
                .bind(this), 300)),
                this._resizeEverything(),
                setTimeout(function() {
                    this._resizeEverything()
                }
                .bind(this), 1e3),
                $2(".logo-img").length > 0 && !$2(".logo-img img")[0].naturalWidth > 0 && $2(".logo-img img").on("load", function() {
                    window.CUBER.Main._resizeEverything()
                }),
                this.$searchForm = $2(".search-bar:not(.no-ajax)"),
                this.$searchResults = $2("#search-results"),
                this.$searchPreloader = $2("#site-search .preloader"),
                this.$searchForm.find('input[type="search"]').on("keyup", window.debounce(function() {
                    this._ajaxSearchForm()
                }
                .bind(this), 300)),
                this.$searchForm.submit(function(e) {
                    e.preventDefault(),
                    this._ajaxSearchForm()
                }
                .bind(this)),
                $2(".krown-tabs").data("design") == "toggles" ? $2(".krown-tabs").each(function() {
                    var $titles = $2(this).children(".titles").children("h5")
                      , $contents = $2(this).find(".contents").children("div")
                      , i = 0;
                    $titles.each(function() {
                        $contents.eq(i++).insertAfter($2(this)),
                        $2(this).on("click", function() {
                            var $toggle = $2(this).next(".tab");
                            $2(this).hasClass("opened") ? ($2(this).removeClass("opened"),
                            $toggle.stop().slideUp(200)) : ($2(this).addClass("opened"),
                            $toggle.stop().slideDown(200))
                        })
                    }),
                    $2(this).find(".contents").remove()
                }) : $2(".krown-tabs").each(function() {
                    var $titles = $2(this).children(".titles").children("h5")
                      , $contents = $2(this).children(".contents").children("div")
                      , $openedT = $titles.eq(0)
                      , $openedC = $contents.eq(0);
                    $openedT.addClass("opened"),
                    $openedC.stop().slideDown(0),
                    $titles.find("a").prop("href", "#").off("click"),
                    $titles.click(function(e) {
                        $openedT.removeClass("opened"),
                        $openedT = $2(this),
                        $openedT.addClass("opened"),
                        $openedC.stop().slideUp(200),
                        $openedC = $contents.eq($2(this).index()),
                        $openedC.stop().delay(200).slideDown(200),
                        e.preventDefault()
                    })
                }),
                $2(".site-footer .info").length > 0 && $2(".site-footer .info").html().split("").length > 18 && $2(".site-footer .info").addClass("smaller")
            },
            _ajaxSearchForm: function() {
                this.$searchPreloader.css("opacity", 1),
                $2.ajax({
                    type: this.$searchForm.prop("method"),
                    url: this.$searchForm.prop("action"),
                    data: this.$searchForm.serialize(),
                    success: function(data) {
                        this.$searchResults.html($2(data).find(".search-results.with-results")),
                        this.$searchPreloader.css("opacity", 0),
                        $2("#site-search").off("scroll.search-pagination"),
                        $2(".search-results").find(".next-page").length > 0 && (this.$searchPagination = $2(".search-results").find(".next-page"),
                        $2("#site-search").on("scroll.search-pagination", this._ajaxSearchPagination.bind(this)))
                    }
                    .bind(this)
                })
            },
            _ajaxSearchPagination: function() {
                $2("#site-search").scrollTop() + $2(window).height() >= this.$searchPagination.offset().top - 250 && (this.$searchPreloader.css({
                    opacity: 1,
                    top: "auto",
                    bottom: "-60px"
                }),
                $2("#site-search").off("scroll.search-pagination"),
                $2.ajax({
                    url: this.$searchPagination.attr("href"),
                    success: function(data) {
                        this.$searchResults.find(".next-page").remove(),
                        this.$searchResults.append($2(data).find(".search-item")),
                        $2(data).find(".search-results .next-page").length > 0 && (this.$searchResults.append($2(data).find(".search-results .next-page")),
                        this.$searchPagination = $2(".search-results").find(".next-page"),
                        $2("#site-search").on("scroll.search-pagination", this._ajaxSearchPagination.bind(this))),
                        this.$searchPreloader.css({
                            opacity: 0,
                            top: "20px",
                            bottom: "auto"
                        })
                    }
                    .bind(this)
                }))
            },
            unmount: function() {
                $2(window).off("scroll.scroll-movers")
            }
        },
        Contact: {
            mount: function($elm) {
                $elm.find(".contact-map-holder").length > 0 && $elm.find(".contact-map-object").data("address") != "" && (typeof google != "undefined" ? this._createMap($elm.attr("id"), $elm.find(".contact-map-object"), $elm.find(".contact-map-address-holder")) : window.loadingGoogleMapsScript ? $elm.ti = setInterval(function($elm2) {
                    typeof google != "undefined" && (clearInterval($elm2.ti),
                    this._createMap($elm2.attr("id"), $elm2.find(".contact-map-object"), $elm2.find(".contact-map-address-holder")))
                }
                .bind(this, $elm), 100) : (window.loadingGoogleMapsScript = !0,
                $2.getScript("https://maps.googleapis.com/maps/api/js?v=3&key=" + $elm.find(".contact-map-holder").data("key")).done(function() {
                    this._createMap($elm.attr("id"), $elm.find(".contact-map-object"), $elm.find(".contact-map-address-holder"))
                }
                .bind(this))))
            },
            _createMap: function(id, $mapInsert, $mapAddress) {
                $mapInsert.attr("id", "contact-map-" + id);
                var coordsKey = "map-coords-" + $mapInsert.attr("id")
                  , coordsStorage = localStorage.getItem(coordsKey) != null ? JSON.parse(localStorage.getItem(coordsKey)) : null
                  , mapLat = 0
                  , mapLong = 0;
                coordsStorage != null && coordsStorage.address == $mapInsert.data("address") && (mapLat = coordsStorage.lat,
                mapLong = coordsStorage.long);
                var geocoder, map, address;
                geocoder = new google.maps.Geocoder,
                address = $mapInsert.data("address");
                var mapOptions = {
                    zoom: $mapInsert.data("zoom"),
                    center: new google.maps.LatLng(mapLat,mapLong),
                    streetViewControl: !1,
                    scrollwheel: !0,
                    panControl: !1,
                    mapTypeControl: !1,
                    overviewMapControl: !1,
                    zoomControl: !1,
                    draggable: !0,
                    styles: $mapInsert.data("style") == "light" ? window.lightMapStyle : window.darkMapStyle
                };
                if (map = new google.maps.Map(document.getElementById($mapInsert.attr("id")),mapOptions),
                mapLat != 0 || mapLong != 0) {
                    var markerOptions = {
                        position: new google.maps.LatLng(mapLat,mapLong),
                        map: map,
                        title: address
                    };
                    $mapInsert.data("marker") != "none" && (markerOptions.icon = {
                        url: $mapInsert.data("marker"),
                        scaledSize: new google.maps.Size(60,60)
                    }),
                    $mapAddress.find("a").attr("href", "http://www.google.com/maps/place/" + mapLat + "," + mapLong);
                    var contentString = $mapAddress.html()
                      , infowindow = new google.maps.InfoWindow({
                        content: contentString
                    })
                      , marker = new google.maps.Marker(markerOptions);
                    marker.addListener("click", function() {
                        infowindow.open(map, marker),
                        $2(window).width() < 480 ? $2(".template-page-contact .box__heading .title").css("marginTop", 50) : $2(window).width() < 768 && $2(".template-page-contact .box__heading .title").css("marginTop", 100)
                    }),
                    $2(window).width() > 768 ? map.panBy(-150, 150) : map.panBy(-75, 75)
                } else
                    geocoder && geocoder.geocode({
                        address: address
                    }, function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK)
                            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                                map.setCenter(results[0].geometry.location);
                                var markerOptions2 = {
                                    position: results[0].geometry.location,
                                    map: map,
                                    title: address
                                };
                                $mapInsert.data("marker") != "none" && (markerOptions2.icon = {
                                    url: $mapInsert.data("marker"),
                                    scaledSize: new google.maps.Size(60,60)
                                }),
                                $mapAddress.find("a").attr("href", "http://www.google.com/maps/place/" + results[0].geometry.location.lat() + "," + results[0].geometry.location.lng());
                                var contentString2 = $mapAddress.html()
                                  , infowindow2 = new google.maps.InfoWindow({
                                    content: contentString2
                                })
                                  , marker2 = new google.maps.Marker(markerOptions2);
                                marker2.addListener("click", function() {
                                    infowindow2.open(map, marker2)
                                }),
                                $2(window).width() > 768 ? map.panBy(-150, 150) : map.panBy(-75, 75),
                                localStorage.setItem(coordsKey, JSON.stringify({
                                    address: $mapInsert.data("address"),
                                    lat: results[0].geometry.location.lat(),
                                    long: results[0].geometry.location.lng()
                                }))
                            } else
                                alert("No results found for the given address");
                        else
                            console.log("Geocode was not successful for the following reason: " + status)
                    })
            },
            unmount: function() {}
        },
        Scroll: {
            $body: null,
            $footer: null,
            mount: function() {
                if (!$2("html").hasClass("csspositionsticky")) {
                    this.$body = $2("body"),
                    this.$footer = $2("#shopify-section-footer");
                    var scrollFixArray = [];
                    $2(window).width() > 768 && $2(".site-box-container.container--fullscreen.box--can-stick").each(function() {
                        console.log('11111');
                        
                        var $boxChildren = $2(this).children(".site-box");
                        if ($boxChildren.length == 2) {
                            if ($2(this).children('.site-box[data-order="0"]').outerHeight(!0) != $2(this).children('.site-box[data-order="1"]').outerHeight(!0)) {
                                var $bigChild = null
                                  , $smallChild = null;
                                $2(this).children('.site-box[data-order="0"]').outerHeight(!0) > $2(this).children('.site-box[data-order="1"]').outerHeight(!0) ? ($bigChild = $2(this).children('.site-box[data-order="0"]'),
                                $smallChild = $2(this).children('.site-box[data-order="1"]')) : $2(this).children('.site-box[data-order="1"]').outerHeight(!0) > $2(this).children('.site-box[data-order="0"]').outerHeight(!0) && ($bigChild = $2(this).children('.site-box[data-order="1"]'),
                                $smallChild = $2(this).children('.site-box[data-order="0"]')),
                                scrollFixArray.push({
                                    parent: $2(this),
                                    "big-child": $bigChild,
                                    "small-child": $smallChild
                                })
                            }
                        } else
                            $boxChildren.length == 1 && $2(this).children('.site-box[data-order="0"]').outerHeight(!0) > $2(window).height() && scrollFixArray.push({
                                parent: $2(this),
                                "big-child": $2(this).children('.site-box[data-order="0"]'),
                                "small-child": null
                            })
                    }),
                    scrollFixArray.forEach(function(obj) {
                        obj.parent.removeClass("fixing-scroll-now"),
                        obj["big-child"].css({
                            position: "relative",
                            top: "0",
                            bottom: "auto",
                            marginLeft: "0"
                        }),
                        obj["small-child"] != null && (obj["small-child"].css({
                            position: "relative",
                            top: "0",
                            bottom: "auto",
                            marginLeft: "0"
                        }),
                        obj["small-child"].removeClass("ok-scroll"))
                    }),
                    $2(window).off("scroll.scroll-fix"),
                    scrollFixArray.forEach(function(obj) {
                        $2(window).scrollTop() + $2(window).height() >= obj.parent.offset().top + obj.parent.outerHeight() && (obj["small-child"] != null && (obj["small-child"].css({
                            position: "absolute",
                            bottom: 0,
                            top: "auto"
                        }),
                        obj["small-child"].attr("data-order") == "1" && obj["small-child"].css("marginLeft", "50%")),
                        obj["big-child"].attr("data-order") == "1" && obj["big-child"].css("marginLeft", "50%"))
                    }),
                    $2(window).on("scroll.scroll-fix", function() {
                        $2(window).scrollTop() >= 0 && scrollFixArray.forEach(function(obj) {
                            if ($2(window).scrollTop() >= obj.parent.offset().top && $2(window).scrollTop() + $2(window).height() < obj.parent.offset().top + obj.parent.outerHeight() && !obj.parent.hasClass("fixing-scroll-now") && (obj.parent.addClass("fixing-scroll-now"),
                            obj["small-child"] != null && (obj["small-child"].css({
                                position: "fixed",
                                top: 0,
                                bottom: "auto"
                            }),
                            obj["small-child"].attr("data-order") == "1" && obj["small-child"].css("marginLeft", "50%"),
                            obj["small-child"].height() > $2(window).height() && obj["small-child"].addClass("ok-scroll")),
                            obj["big-child"].attr("data-order") == "1" && obj["big-child"].css("marginLeft", "50%")),
                            $2(window).scrollTop() + $2(window).height() >= obj.parent.offset().top + obj.parent.outerHeight() && obj.parent.hasClass("fixing-scroll-now") && (obj.parent.removeClass("fixing-scroll-now"),
                            obj["small-child"] != null && (obj["small-child"].removeClass("ok-scroll"),
                            obj["small-child"].css({
                                position: "absolute",
                                bottom: 0,
                                top: "auto"
                            }))),
                            $2(window).scrollTop() < obj.parent.offset().top && obj.parent.hasClass("fixing-scroll-now") && (obj.parent.removeClass("fixing-scroll-now"),
                            obj["big-child"].css("marginLeft", "0"),
                            obj["small-child"] != null && obj["small-child"].css({
                                position: "relative",
                                top: "0",
                                bottom: "auto",
                                marginLeft: "0"
                            })),
                            obj["small-child"] != null && obj["small-child"].height() > $2(window).height() && obj["small-child"].hasClass("ok-scroll"))
                                var x = obj["big-child"].height() - $2(window).height()
                                  , y = $2(window).height() - obj["small-child"].height()
                                  , z = $2(window).scrollTop()
                        })
                    }
                    .bind(this)).trigger("scroll.scroll-fix"),
                    $2(window).off("resize.scroll-fix"),
                    $2(window).on("resize.scroll-fix", window.debounce(function() {
                        window.CUBER.Scroll.mount()
                    }
                    .bind(this), 250))
                }
            },
            unmount: function() {
                $2(window).off("resize.scroll-fix"),
                $2(window).off("scroll.scroll-fix")
            }
        },
        Images: {
            boxImages: [],
            mount: function() {
                this.boxImages = [],
                $2(".box--product-image").length > 0 && $2(".box--product-image:not(.on)").each(function(key, elm) {
                    $2(elm).addClass("on"),
                    this.boxImages.push({
                        $elm: $2(elm),
                        img: $2(elm).children("img")[0],
                        srcset: $2(elm).children("img").data("srcset")
                    })
                }
                .bind(this)),
                $2(window).on("resize.box-images", function() {
                    this.boxImages.forEach(function(entry) {
                        var desiredDensity = window.devicePixelRatio <= 2 ? window.devicePixelRatio : 2
                          , desiredSize = entry.$elm.width() * desiredDensity;
                        if (entry.img.naturalWidth > 0 && entry.$elm.width() / entry.$elm.height() < entry.img.naturalWidth / entry.img.naturalHeight) {
                            var desiredHeight = Math.ceil(entry.$elm.height() * desiredDensity);
                            desiredSize = desiredHeight * entry.img.naturalWidth / entry.img.naturalHeight
                        }
                        desiredSize <= 480 ? entry.$elm.css("backgroundImage", "url(" + entry.srcset.small + ")") : desiredSize <= 960 ? entry.$elm.css("backgroundImage", "url(" + entry.srcset.medium + ")") : desiredSize <= 1440 ? entry.$elm.css("backgroundImage", "url(" + entry.srcset.large + ")") : desiredSize > 1440 && entry.$elm.css("backgroundImage", "url(" + entry.srcset.huge + ")")
                    })
                }
                .bind(this)).trigger("resize.box-images")
            },
            unmount: function() {
                $2(window).off("resize.box-images")
            }
        },
        Video: {
            mount: function() {
                $2(".video-lightbox").length > 0 && $2(".video-lightbox").magnificPopup({
                    type: "iframe",
                    iframe: {
                        patterns: {
                            youtube: {
                                index: "youtube.com",
                                id: "v=",
                                src: "//www.youtube.com/embed/%id%?rel=0&autoplay=1"
                            }
                        }
                    }
                })
            },
            unmount: function() {}
        },
        Popup: {
            $popup: null,
            mount: function() {
                this.$popup = $2("#shopify-section-popup");
                var show = this.$popup.find(".popup-content").data("show")
                  , freq = this.$popup.find(".popup-content").data("freq")
                  , enable = this.$popup.find(".popup-content").data("enable");
                show > 0 && enable && setTimeout(function() {
                    this._trigger(show, freq)
                }
                .bind(this), parseInt(show * 1e3)),
                this.$popup.find(".site-close-handle").on("click", function(e) {
                    this._hide()
                }
                .bind(this)),
                this.$popup.find(".popup-background").on("click", function(e) {
                    this._hide()
                }
                .bind(this))
            },
            _show: function() {
                this.$popup.addClass("active")
            },
            _hide: function() {
                this.$popup.removeClass("active")
            },
            _trigger: function(show, freq) {
                var popupKey = "popup-" + document.location.hostname
                  , popupStorage = localStorage.getItem(popupKey) != null ? JSON.parse(localStorage.getItem(popupKey)) : null;
                if (popupStorage != null)
                    if (popupStorage.show != show || popupStorage.freq != freq)
                        this._refreshStorage(popupKey, show, freq),
                        this._show();
                    else if (freq == "every")
                        (sessionStorage[popupKey] == null || sessionStorage[popupKey] != "shown") && (this._show(),
                        this._refreshStorage(popupKey, show, freq));
                    else {
                        var shownAt = popupStorage.shown
                          , nowAt = new Date().getTime()
                          , inBetween = Math.round((nowAt - shownAt) / 1e3);
                        freq == "day" && inBetween > 129600 ? (this._show(),
                        this._refreshStorage(popupKey, show, freq)) : freq == "week" && inBetween > 907200 && (this._show(),
                        this._refreshStorage(popupKey, show, freq))
                    }
                else
                    this._refreshStorage(popupKey, show, freq),
                    this._show()
            },
            _refreshStorage: function(popupKey, show, freq) {
                localStorage.setItem(popupKey, JSON.stringify({
                    show: show,
                    freq: freq,
                    shown: new Date().getTime()
                })),
                sessionStorage[popupKey] = "shown"
            },
            unmount: function() {}
        },
        Social: {
            $container: null,
            nameTwitter: "",
            nameInstagram: "",
            mount: function($elm) {
                this.$container = $elm.children(".site-box-container"),
                this.nameTwitter = this.$container.data("twitter"),
                this.nameInstagram = this.$container.data("instagram");
                var no = this.$container.data("posts")
                  , noT = 0
                  , noI = 0
                  , socialArr = [];
                if (this.nameTwitter != "" && this.nameInstagram != "" ? (noT = Math.ceil(no / 2),
                noI = Math.floor(no / 2)) : this.nameTwitter != "" ? noT = no : this.nameInstagram != "" && (noI = no),
                noI > 0) {
                    var feed = new Instafeed({
                        get: "user",
                        userId: this.nameInstagram.split(".")[0],
                        accessToken: this.nameInstagram,
                        limit: noI,
                        resolution: "standard_resolution",
                        mock: !0,
                        sortBy: "random",
                        success: function(obj) {
                            obj.data.forEach(function(entry) {
                                socialArr.push({
                                    type: "instagram",
                                    thumb: entry.images.standard_resolution.url,
                                    link: entry.link,
                                    caption: typeof entry.caption == "object" && entry.caption !== null ? entry.caption.text : "",
                                    likes: entry.likes.count,
                                    time: new Date(entry.created_time * 1e3).toLocaleDateString("en-US"),
                                    timestamp: parseInt(entry.created_time)
                                })
                            }),
                            this._pushFeed("instagram", socialArr)
                        }
                        .bind(this)
                    });
                    feed.run()
                } else
                    this._pushFeed("instagram", socialArr);
                noT > 0 ? twitterFetcher.fetch({
                    profile: {
                        screenName: this.nameTwitter
                    },
                    dataOnly: !0,
                    maxTweets: noT,
                    dateFunction: function(date) {
                        return parse(date)
                    },
                    customCallback: function(obj) {
                        obj.forEach(function(entry) {
                            socialArr.push({
                                type: "twitter",
                                text: entry.tweet,
                                timestamp: Date.parse(entry.timestamp) / 1e3
                            })
                        }),
                        this._pushFeed("twitter", socialArr)
                    }
                    .bind(this)
                }) : this._pushFeed("twitter", socialArr)
            },
            _pushFeed: function(type, feed) {
                type == "twitter" ? this.checkTwitter = !0 : type == "instagram" && (this.checkInstagram = !0),
                this.checkTwitter && this.checkInstagram && (feed.sort(function(a, b) {
                    return a.timestamp - b.timestamp
                }).reverse(),
                feed.forEach(function(entry, key) {
                    var feedContent = "";
                    entry.type == "twitter" ? (feedContent += '<div class="site-box-content">',
                    feedContent += '<span class="icon" aria-hidden="true">' + $2.themeAssets.iconTwitter + "</span>",
                    feedContent += "<p>" + entry.text + "</p>",
                    feedContent += '<a href="https://twitter.com/' + this.nameTwitter + '" target="_blank">@' + this.nameTwitter + "</a>",
                    feedContent += "</div>") : entry.type == "instagram" && (feedContent += '<div class="site-box-content" style="background-image:url(' + entry.thumb + ')">',
                    feedContent += '<a href="' + entry.link + '" target="_blank">',
                    feedContent += '<span class="icon child" aria-hidden="true">' + $2.themeAssets.iconInstagram + "</span>",
                    feedContent += '<p class="caption child">' + entry.caption + "</p>",
                    feedContent += '<div class="meta child">',
                    feedContent += '<span class="likes">' + $2.themeAssets.iconHeart + entry.likes + "</span>",
                    feedContent += '<span class="time">' + entry.time + "</span>",
                    feedContent += "</div>",
                    feedContent += "</a>",
                    feedContent += "</div>"),
                    this.$container.find('.site-box[data-order="' + (key + 1) + '"]').removeClass("box__twitter").removeClass("box__instagram").addClass("box__" + entry.type).html(feedContent)
                }
                .bind(this)))
            },
            unmount: function() {}
        },
        SplitSlider: {
            _mountFlickity: function() {
                $2(".responsive-flickity").flickity({
                    cellSelector: ".slideshow-item",
                    wrapAround: !0,
                    prevNextButtons: !1,
                    pageDots: !1,
                    watchCSS: !0,
                    resize: !0
                });
                var $slider = $2(".box__slideshow-split")
                  , flkty = $2(".responsive-flickity").data("flickity")
                  , currentI = 0
                  , totalI = 100 / ($slider.find(".slideshow-item").length - 1)
                  , $currentSlide = null
                  , $currentSlideBlack = null;
                $slider.find(".slider-meta").length <= 0 && ($slider.find(".slider-meta").remove(),
                $slider.append('<div class="slider-meta hide lap--show"><div class="slider-index"><span class="current">1</span> / <span class="total">' + sliderT + '</span></div><div class="slider-nav"><span class="go-prev">' + ($2.themeAssets && $2.themeAssets.arrowRight ? $2.themeAssets.arrowRight : '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="-0.00012207" y="5.32214" width="14" height="2" fill="#111111"/><path d="M10.3635 0.322144L15.6363 6.32214L14.2726 7.82214L8.99989 1.82214L10.3635 0.322144Z" fill="#111111"/><path d="M8.99984 10.8222L14.2726 4.82217L15.6362 6.32211L10.3635 12.3222L8.99984 10.8222Z" fill="#111111"/></svg>') + '</span><span class="go-next">' + ($2.themeAssets && $2.themeAssets.arrowRight ? $2.themeAssets.arrowRight : '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="-0.00012207" y="5.32214" width="14" height="2" fill="#111111"/><path d="M10.3635 0.322144L15.6363 6.32214L14.2726 7.82214L8.99989 1.82214L10.3635 0.322144Z" fill="#111111"/><path d="M8.99984 10.8222L14.2726 4.82217L15.6362 6.32211L10.3635 12.3222L8.99984 10.8222Z" fill="#111111"/></svg>') + "</span></div>"),
                $slider.find(".go-prev").on("click", function() {
                    flkty.previous()
                }
                .bind(this)),
                $slider.find(".go-next").on("click", function() {
                    flkty.next()
                }
                .bind(this)),
                $2(".responsive-flickity").on("select.flickity", function() {
                    $slider.find(".slider-index .current").html(flkty.selectedIndex + 1)
                }),
                setTimeout(function() {
                    $slider.find(".slider-meta").addClass("active")
                }, 1e3))
            },
            mount: function(flick) {
                console.log('mount 进来 这个方法');
                var $slider = $2(".box__slideshow-split")
                  , $slides = $slider.find(".slideshow-item")
                  , $slidesMedia = $slider.find(".site-box-background-container").children("div")
                  , slidesBlackArray = [];
                
                // 检查滑块是否存在
                if ($slider.length === 0) {
                    console.log('未找到 .box__slideshow-split 元素');
                    return;
                }
                
                // 获取模块的位置
                var $section = $2("#shopify-section-home_slideshow");
                var sectionTop = $section.length > 0 ? $section.offset().top : 0;
                
                
                // 计算相对于模块的滚动位置
                currentScroll = $2(window).scrollTop();
                var relativeScroll = Math.max(0, currentScroll - sectionTop);
                
                
                sliderI = Math.min(Math.ceil(relativeScroll / $2(window).height()), $slides.length - 1),
                sliderJ = sliderI - 1,
                sliderT = $slides.length,
                flick && this._mountFlickity(),
                $2(".responsive-flickity").hasClass("flickity-enabled") ? ($slider.height($2(window).height() - $2("#site-header").outerHeight()),
                $slider.addClass("remove-min-height")) : ($slider.css("height", "auto"),
                $slider.removeClass("remove-min-height")),
                $slidesMedia.each(function(key) {
                    key > 0 ? key < sliderI ? $2(this).css("clip", "rect(0 " + Math.ceil($2(window).width() / 2) + "px " + $2(window).height() + "px 0)") : key == sliderI ? $2(this).css("clip", "rect(0 " + Math.ceil($2(window).width() / 2) + "px " + Math.ceil($2(window).scrollTop() - $2(window).height() * sliderJ) + "px 0)") : $2(this).css("clip", "rect(0 " + Math.ceil($2(window).width() / 2) + "px 0 0)") : key == 0 & flick && ($2(this).css({
                        clip: "rect(0 " + Math.ceil($2(window).width() / 2) + "px 0 0)",
                        opacity: 0
                    }),
                    $2(this).addClass("clip-transition"),
                    setTimeout(function() {
                        $2(this).css({
                            clip: "rect(0 " + Math.ceil($2(window).width() / 2) + "px " + $2(window).height() + "px 0)",
                            opacity: 1
                        })
                    }
                    .bind(this), 10),
                    setTimeout(function() {
                        $2(this).removeClass("clip-transition")
                    }
                    .bind(this), 650)),
                    $2(this).addClass("active"),
                    $2(this).find(".site-box-black-overlay").length <= 0 && $2(this).append('<span class="site-box-black-overlay" />'),
                    slidesBlackArray.push($2(this).find(".site-box-black-overlay"))
                }),
                $2(window).on("scroll.split-slider", function(e) {
                    var currentWindowScroll = $2(window).scrollTop();
                    var relativeCurrentScroll = Math.max(0, currentScroll - sectionTop);
                    var relativeNewScroll = Math.max(0, currentWindowScroll - sectionTop);
                    
                    
                    // 只有当滚动到模块位置时才触发动画
                    if (currentWindowScroll < sectionTop) {
                        $slider.addClass("back-to-normal")
                        return;
                    }
                    
                    if (relativeCurrentScroll < relativeNewScroll) {
                        
                        if ($slides.eq(sliderI + 1).length > 0 && currentWindowScroll + $2(window).height() >= $slides.eq(sliderI + 1).offset().top) {
                            console.log('切换到下一个 slide:', sliderI + 1);
                            if (sliderI != 0) {
                                $slidesMedia.eq(sliderI).css("clip", "rect(0 " + Math.ceil($2(window).width() / 2) + "px " + $2(window).height() + "px 0)");
                                slidesBlackArray[sliderJ] && slidesBlackArray[sliderJ].css("opacity", .5);
                            }
                            sliderJ = sliderI;
                            sliderI++;
                            down = !0;
                        } 
                        else if (relativeNewScroll + $2(window).height() >= $slider.height() && !$slider.hasClass("back-to-normal")) {
                            $slider.addClass("back-to-normal");
                            $slidesMedia.eq(sliderI).css("clip", "rect(0 " + Math.ceil($2(window).width() / 2) + "px " + $2(window).height() + "px 0)");
                        }
                        else {
                        }
                    }
                    else if ($slides.eq(sliderI).length > 0 && $slides.eq(sliderI - 1).length > 0 && currentWindowScroll + $2(window).height() < $slides.eq(sliderI).offset().top) {
                        var stupid = $slidesMedia.eq(sliderI).hasClass("obs") ? 1 : 0;
                        $slidesMedia.eq(sliderI).css("clip", "rect(0 " + Math.ceil($2(window).width() / 2) + "px " + stupid + "px 0)"),
                        slidesBlackArray[sliderJ] && slidesBlackArray[sliderJ].css("opacity", 0),
                        sliderI--,
                        sliderJ = sliderI - 1,
                        down = !1;
                    } 
                    if (relativeNewScroll + $2(window).height() <= $slider.height() && $slider.hasClass("back-to-normal")) {
                        $slider.removeClass("back-to-normal");
                    }
                    if (!$slider.hasClass("back-to-normal")) {
                        var scrollValue = Math.ceil(relativeNewScroll - $2(window).height() * sliderJ)
                          , stupid = $slidesMedia.eq(sliderI).hasClass("obs") ? 1 : 0;
                        
                        $slidesMedia.eq(sliderI).css("clip", "rect(0 " + Math.ceil($2(window).width() / 2) + "px " + Math.max(stupid, scrollValue) + "px 0)"),
                        slidesBlackArray[sliderJ] && slidesBlackArray[sliderJ].css("opacity", Math.ceil(scrollValue * 50 / $2(window).height()) / 100);
                        var scrollFactor = Math.round($2(window).height() / 6);
                        $slides.eq(sliderJ).find(".caption").css("transform", "translateY(" + (0 - Math.ceil(scrollValue * (scrollFactor * 1) / $2(window).height())) + "px)"),
                        $slides.eq(sliderJ).find(".title").css("transform", "translateY(" + (0 - Math.ceil(scrollValue * (scrollFactor * .75) / $2(window).height())) + "px)"),
                        $slides.eq(sliderJ).find(".subtitle").css("transform", "translateY(" + (0 - Math.ceil(scrollValue * (scrollFactor * .5) / $2(window).height())) + "px)"),
                        $slides.eq(sliderJ).find(".button").css("transform", "translateY(" + (0 - Math.ceil(scrollValue * (scrollFactor * .25) / $2(window).height())) + "px)"),
                        $slides.eq(sliderI).find(".caption").css("transform", "translateY(" + (Math.ceil(scrollValue * (scrollFactor * 1) / $2(window).height()) - scrollFactor * 1) + "px)"),
                        $slides.eq(sliderI).find(".title").css("transform", "translateY(" + (Math.ceil(scrollValue * (scrollFactor * .75) / $2(window).height()) - scrollFactor * .75) + "px)"),
                        $slides.eq(sliderI).find(".subtitle").css("transform", "translateY(" + (Math.ceil(scrollValue * (scrollFactor * .5) / $2(window).height()) - scrollFactor * .5) + "px)"),
                        $slides.eq(sliderI).find(".button").css("transform", "translateY(" + (Math.ceil(scrollValue * (scrollFactor * .25) / $2(window).height()) - scrollFactor * .25) + "px)")
                    }
                    currentScroll = currentWindowScroll;
                }).trigger("scroll.split-slider"),
                $2(window).on("resize.split-slider", window.debounce(function() {
                    this.unmount(),
                    this.mount(!1)
                }
                .bind(this), 250))
            },
            unmount: function() {
                $2(window).off("scroll.split-slider")
            }
        }
    },
    $2(document).ready(function() {
        console.log('ready 进来');
        window.CUBER.Nav.mount(),
        window.CUBER.Main.mount(),
        window.CUBER.Scroll.mount(),
        $2(".mount-social").length > 0 && $2(".mount-social").each(function() {
            window.CUBER.Social.mount($2(this))
        }),
        $2(".box__slideshow-split").length > 0 && window.CUBER.SplitSlider.mount(!0),
        $2(".mount-product").length > 0 && $2(".mount-product").each(function() {
            window.CUBER.Product.mount($2(this))
        }),
        $2("body").hasClass("template-collection") && window.CUBER.Collection.mount(),
        ($2("body").hasClass("template-page-contact") || $2("body").hasClass("template-index") && $2(".mount-map").length > 0) && $2(".mount-map").each(function() {
            window.CUBER.Contact.mount($2(this))
        }),
        window.CUBER.Video.mount(),
        window.CUBER.Popup.mount(),
        $2(document).on("shopify:section:select", function(e) {
            var $section = $2(e.target);
            $section.hasClass("mount-header") && ($section.find("#site-header").hasClass("style--sidebar") || $section.find("#site-header").hasClass("style--fullscreen")) && ($section.find("#site-nav").hasClass("active") || $2("#site-menu-handle a").trigger("click")),
            $2("#site-header").hasClass("desktop-view--minimal") && $2("#fix-me-header").css("display") == "none" && setTimeout(function() {
                $2("html, body").stop().animate({
                    scrollTop: $section.offset().top
                }, 0)
            }, 400),
            $section.hasClass("mount-popup") && window.CUBER.Popup._show()
        }),
        $2(document).on("shopify:section:deselect", function(e) {
            var $section = $2(e.target);
            $section.hasClass("mount-header") && ($section.find("#site-header").hasClass("style--sidebar") || $section.find("#site-header").hasClass("style--fullscreen")) && $section.find("#site-nav").hasClass("active") && $2("#site-menu-handle a").trigger("click"),
            $section.hasClass("mount-popup") && window.CUBER.Popup._hide()
        }),
        $2(document).on("shopify:section:load", function(e) {
            var $section = $2(e.target);
            $section.hasClass("mount-header") && window.CUBER.Nav.mount(),
            $section.hasClass("mount-images"),
            $section.hasClass("mount-video") && window.CUBER.Video.mount(),
            $section.hasClass("mount-social") && window.CUBER.Social.mount($section),
            $section.hasClass("mount-slideshow") && $section.find(".box__slideshow-split").length > 0 && (window.CUBER.SplitSlider.mount(!0),
            $2(window).scrollTop(0)),
            $section.hasClass("mount-product") && window.CUBER.Product.mount($section),
            $section.hasClass("mount-map") && window.CUBER.Contact.mount($section),
            $section.hasClass("mount-popup") && window.CUBER.Popup.mount(),
            window.CUBER.Main.mount(),
            window.CUBER.Scroll.mount()
        }),
        $2(document).on("shopify:section:unload", function(e) {
            var $section = $2(e.target);
            $section.hasClass("mount-header") && window.CUBER.Nav.unmount(),
            $section.hasClass("mount-images") && window.CUBER.Images.unmount(),
            $section.hasClass("mount-video") && window.CUBER.Video.unmount(),
            $section.hasClass("mount-social") && window.CUBER.Social.unmount(),
            $section.hasClass("mount-slideshow") && $section.find(".box__slideshow-split").length > 0 && window.CUBER.SplitSlider.unmount(),
            $section.hasClass("mount-product") && window.CUBER.Product.unmount($section),
            $section.hasClass("mount-map") && window.CUBER.Contact.unmount(),
            window.CUBER.Main.unmount(),
            window.CUBER.Scroll.unmount()
        }),
        $2(document).on("shopify:block:select", function(e) {
            var $block = $2(e.target);
            $block.hasClass("slideshow-item") && ($2(".responsive-flickity").hasClass("flickity-enabled") ? $2(".responsive-flickity").data("flickity").select($block.index()) : $2(window).scrollTop($block.offset().top),
            $block.find(".caption, .title, .subtitle").css("transform", "translateY(0)"))
        }),
        $2(window).on("resize", function() {
            $2(window).width() < 1024
        }),
        $2(".simple-grid select:not(.styled)").each(function() {
            $2(this).styledSelect({
                coverClass: "regular-select-cover",
                innerClass: "regular-select-inner"
            }).addClass("styled"),
            $2(this).parent().append($2.themeAssets.arrowDown)
        }),
        $2("body").hasClass("template-customers-login") ? $2("#RecoverPassword").length > 0 && ($2("#RecoverPassword").on("click", function(e) {
            $2("#CustomerLoginForm").hide(),
            $2("#RecoverPasswordForm").show(),
            $2("#LoginRecoverTitle").html($2("#LoginRecoverTitle").data("password_recovery")),
            e.preventDefault()
        }),
        $2("#HideRecoverPasswordLink").on("click", function(e) {
            $2("#RecoverPasswordForm").hide(),
            $2("#CustomerLoginForm").show(),
            $2("#LoginRecoverTitle").html($2("#LoginRecoverTitle").data("login")),
            e.preventDefault()
        }),
        window.location.hash == "#recover" && $2("#RecoverPassword").trigger("click")) : $2("body").hasClass("template-customers-addresses") && $2("#section-addresses a").on("click", function() {
            window.CUBER.Scroll.mount()
        }),
        ($2("body").hasClass("template-blog") || $2("body").hasClass("template-article")) && (window.CUBER.Main._mountScrollMovers({
            parent: $2(".scroll-movers-parent"),
            items: $2(".site-sharing")
        }),
        window.CUBER.Main._mobileSharingInit())
    })
    // ,
    // $2('[name="checkout"], [name="goto_pp"], [name="goto_gc"]').on("click", function() {
    //     if ($2(".k65agree").is(":checked"))
    //         console.log("checked"),
    //         $2(this).submit();
    //     else
    //         return $2(".terms-error").show(),
    //         !1
    // })
}(jQuery);
function response(data) {
    console.log(data)
}
window._getLuminance = function(hexy) {
    var rgb = this._toRgb(hexy);
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3
}
,
window._toRgb = function(hexy) {
    var hex = hexy.replace("rgb(", "");
    return hex = hex.replace(")", ""),
    hex = hex.replace(" ", ""),
    hex = hex.replace(" ", ""),
    hex = hex.split(","),
    {
        r: hex[0],
        g: hex[1],
        b: hex[2]
    }
}
,
$(window).on("load", function() {
    setTimeout(function() {
        ($("body").attr("id") == "challenge" || location.pathname == "/challenge") && (document.location.hash = "challenge",
        $("html, body").scrollTop(0))
    }, 150)
});

// 如果 DOM 已经 ready，立即执行初始化（处理脚本延迟加载的情况）
(function() {
    // 检查 DOM 是否已经 ready
    window.CUBER.SplitSlider.mount(!0);

})();

//# sourceMappingURL=/cdn/shop/t/2/assets/js_main.js.map?v=165218612093267319811713389029
