(function ($) {
  "use strict";

  var ICONS = {
    juice:
      '<svg viewBox="0 0 64 64" fill="none"><rect x="18" y="14" width="28" height="40" rx="8" fill="#6D3041"/><rect x="22" y="18" width="20" height="28" rx="6" fill="#F7E0C2"/><path d="M30 8h4v10h-4z" fill="#6D3041"/><circle cx="32" cy="12" r="5" fill="#6D3041"/></svg>',
    cocktail:
      '<svg viewBox="0 0 64 64" fill="none"><path d="M12 12h40L36 32v18h10v6H18v-6h10V32L12 12z" fill="#6D3041"/><path d="M20 16h24l-12 14L20 16z" fill="#F7E0C2"/><circle cx="44" cy="14" r="4" fill="#F7E0C2"/></svg>',
    soda:
      '<svg viewBox="0 0 64 64" fill="none"><rect x="20" y="10" width="24" height="44" rx="8" fill="#6D3041"/><rect x="24" y="16" width="16" height="10" rx="4" fill="#F7E0C2"/><circle cx="32" cy="38" r="7" fill="#F7E0C2"/></svg>',
    water:
      '<svg viewBox="0 0 64 64" fill="none"><path d="M24 8h16l6 12v32a8 8 0 0 1-8 8H26a8 8 0 0 1-8-8V20l6-12z" fill="#6D3041"/><path d="M26 22h12v26H26z" fill="#F7E0C2"/></svg>',
    box:
      '<svg viewBox="0 0 64 64" fill="none"><path d="M8 22l24-12 24 12-24 12L8 22z" fill="#6D3041"/><path d="M12 24v22l20 10V34L12 24z" fill="#6D3041"/><path d="M52 24v22L32 56V34l20-10z" fill="#F7E0C2"/></svg>',
    party:
      '<svg viewBox="0 0 64 64" fill="none"><rect x="10" y="22" width="44" height="30" rx="8" fill="#6D3041"/><path d="M16 22c0-10 32-10 32 0H16z" fill="#F7E0C2"/><circle cx="24" cy="38" r="4" fill="#F7E0C2"/><circle cx="40" cy="38" r="4" fill="#F7E0C2"/></svg>',
    burger:
      '<svg viewBox="0 0 64 64" fill="none"><path d="M12 28c0-12 40-12 40 0H12z" fill="#6D3041"/><rect x="12" y="30" width="40" height="8" rx="3" fill="#F7E0C2"/><path d="M12 42h40c0 10-40 10-40 0z" fill="#6D3041"/></svg>',
    wrap:
      '<svg viewBox="0 0 64 64" fill="none"><path d="M16 12l32 8v32L16 44V12z" fill="#6D3041"/><path d="M20 16l24 6v24L20 40V16z" fill="#F7E0C2"/><path d="M20 28h24" stroke="#6D3041" stroke-width="3"/></svg>',
    strips:
      '<svg viewBox="0 0 64 64" fill="none"><rect x="14" y="14" width="10" height="36" rx="5" fill="#6D3041"/><rect x="27" y="18" width="10" height="32" rx="5" fill="#F7E0C2" stroke="#6D3041" stroke-width="2"/><rect x="40" y="12" width="10" height="38" rx="5" fill="#6D3041"/></svg>',
    egg:
      '<svg viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="34" rx="22" ry="18" fill="#6D3041"/><ellipse cx="32" cy="34" rx="14" ry="11" fill="#F7E0C2"/><circle cx="32" cy="34" r="6" fill="#6D3041"/></svg>',
    sauce:
      '<svg viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="18" rx="18" ry="8" fill="#6D3041"/><path d="M14 18h36v24a14 14 0 0 1-36 0V18z" fill="#6D3041"/><ellipse cx="32" cy="24" rx="12" ry="6" fill="#F7E0C2"/></svg>',
    fries:
      '<svg viewBox="0 0 64 64" fill="none"><path d="M12 28h40l-6 28H18L12 28z" fill="#6D3041"/><rect x="18" y="10" width="6" height="22" rx="3" fill="#F7E0C2"/><rect x="29" y="8" width="6" height="24" rx="3" fill="#F7E0C2"/><rect x="40" y="12" width="6" height="20" rx="3" fill="#F7E0C2"/></svg>',
    wedges:
      '<svg viewBox="0 0 64 64" fill="none"><path d="M12 48L32 12l20 36H12z" fill="#6D3041"/><path d="M22 44L32 24l10 20H22z" fill="#F7E0C2"/></svg>',
    curly:
      '<svg viewBox="0 0 64 64" fill="none"><path d="M14 40c8-18 28-18 36 0" stroke="#6D3041" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M18 28c6-12 22-12 28 0" stroke="#F7E0C2" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="16" y="42" width="32" height="10" rx="5" fill="#6D3041"/></svg>',
    oven:
      '<svg viewBox="0 0 64 64" fill="none"><rect x="8" y="14" width="48" height="38" rx="8" fill="#6D3041"/><rect x="14" y="22" width="36" height="22" rx="6" fill="#F7E0C2"/><circle cx="24" cy="33" r="4" fill="#6D3041"/><circle cx="40" cy="33" r="4" fill="#6D3041"/></svg>',
    combo:
      '<svg viewBox="0 0 64 64" fill="none"><rect x="8" y="16" width="22" height="36" rx="7" fill="#6D3041"/><path d="M36 22h20l-4 28H40L36 22z" fill="#6D3041"/><rect x="12" y="20" width="14" height="8" rx="3" fill="#F7E0C2"/><rect x="42" y="10" width="5" height="16" rx="2" fill="#F7E0C2"/></svg>',
    pie:
      '<svg viewBox="0 0 64 64" fill="none"><path d="M8 28h48l-6 24H14L8 28z" fill="#6D3041"/><ellipse cx="32" cy="28" rx="24" ry="10" fill="#F7E0C2" stroke="#6D3041" stroke-width="3"/><path d="M32 18v34" stroke="#6D3041" stroke-width="3"/></svg>',
    pizza:
      '<svg viewBox="0 0 64 64" fill="none"><path d="M32 8L56 52H8L32 8z" fill="#6D3041"/><path d="M32 18L48 48H16L32 18z" fill="#F7E0C2"/><circle cx="32" cy="34" r="4" fill="#6D3041"/><circle cx="26" cy="42" r="3" fill="#6D3041"/></svg>',
    calzone:
      '<svg viewBox="0 0 64 64" fill="none"><path d="M10 44c0-18 44-30 44-8 0 14-18 22-44 8z" fill="#6D3041"/><path d="M16 42c4-12 32-20 34-6-8 8-22 10-34 6z" fill="#F7E0C2"/></svg>',
    skewer:
      '<svg viewBox="0 0 64 64" fill="none"><rect x="30" y="4" width="4" height="56" rx="2" fill="#6D3041"/><ellipse cx="32" cy="18" rx="16" ry="8" fill="#6D3041"/><ellipse cx="32" cy="30" rx="18" ry="8" fill="#F7E0C2" stroke="#6D3041" stroke-width="2"/><ellipse cx="32" cy="42" rx="14" ry="7" fill="#6D3041"/></svg>',
    saj:
      '<svg viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="32" rx="24" ry="20" fill="#6D3041"/><ellipse cx="32" cy="32" rx="16" ry="12" fill="#F7E0C2"/><path d="M18 32h28" stroke="#6D3041" stroke-width="3"/></svg>',
    rocket:
      '<svg viewBox="0 0 64 64" fill="none"><path d="M18 50L46 10l6 8-16 36-18-4z" fill="#6D3041"/><path d="M24 44L46 14l2 4-16 32-8-6z" fill="#F7E0C2"/><path d="M18 50l-8 4 8-12" fill="#6D3041"/></svg>'
  };

  var $homeView = $("#home-view");
  var $sectionView = $("#section-view");
  var $categories = $("#categories");
  var $items = $("#items");
  var $search = $("#menu-search");
  var $searchWrap = $search.closest(".search-wrap");
  var $sectionBanner = $("#section-banner");
  var $itemModalEl = $("#itemModal");
  var itemModal;
  var currentCategoryId = null;
  var activeContext = null;
  var currentRoute = { view: "home" };
  var applyingRoute = false;
  var skipNextModalHideHistory = false;

  function iconSvg(name) {
    return ICONS[name] || ICONS.skewer;
  }

  function foodPhoto(src, alt, extraClass) {
    if (!src) {
      return (
        '<div class="no-image ' + (extraClass || "") + '">' +
        '<svg viewBox="0 0 64 64" fill="none"><rect x="8" y="14" width="48" height="36" rx="8" stroke="#6D3041" stroke-width="3"/><circle cx="24" cy="28" r="5" fill="#6D3041"/><path d="M12 44l14-12 10 8 8-6 8 10H12z" fill="#F7E0C2" stroke="#6D3041" stroke-width="2"/></svg>' +
        "<span>لا تتوفر صورة</span></div>"
      );
    }
    return '<img class="' + (extraClass || "") + '" src="' + src + '" alt="' + (alt || "") + '" loading="lazy">';
  }

  function formatPrice(price) {
    if (price == null || price === "") return "";
    return price + " ريال";
  }

  function formatCalories(cal, noteAr) {
    if (cal == null || cal === "") return "—";
    var text = cal + " سعرة";
    if (noteAr) text += " " + noteAr;
    return text;
  }

  function basePrice(item) {
    if (item.sizes && item.sizes.length) {
      var prices = item.sizes.map(function (s) { return s.price; });
      var min = Math.min.apply(null, prices);
      var max = Math.max.apply(null, prices);
      return min === max ? formatPrice(min) : min + " – " + max + " ريال";
    }
    return formatPrice(item.price);
  }

  function findCategory(id) {
    return MENU.categories.find(function (cat) {
      return cat.id === id;
    });
  }

  function findItem(itemId) {
    var found = null;
    var idNum = Number(itemId);
    MENU.categories.forEach(function (cat) {
      cat.items.forEach(function (item) {
        if (item.id === idNum || String(item.id) === String(itemId)) {
          found = { item: item, category: cat };
        }
      });
    });
    return found;
  }

  function isTypingTarget(el) {
    if (!el) return false;
    var tag = (el.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return true;
    if (el.isContentEditable) return true;
    return false;
  }

  function routesEqual(a, b) {
    return (
      a.view === b.view &&
      String(a.categoryId || "") === String(b.categoryId || "") &&
      String(a.itemId || "") === String(b.itemId || "") &&
      String(a.choiceId || "") === String(b.choiceId || "")
    );
  }

  function parseHash() {
    var raw = (location.hash || "").replace(/^#\/?/, "").trim();
    if (!raw || raw === "home") return { view: "home" };

    var parts = raw.split("/").filter(Boolean);
    var categoryId = parts[0];
    if (!findCategory(categoryId)) return { view: "home" };

    var route = { view: "section", categoryId: categoryId };
    if (parts[1]) {
      route.view = "item";
      route.itemId = parts[1];
      if (parts[2]) route.choiceId = decodeURIComponent(parts[2]);
    }
    return route;
  }

  function buildHash(route) {
    if (!route || route.view === "home") return "#/";
    var hash = "#/" + route.categoryId;
    if (route.itemId != null && route.itemId !== "") {
      hash += "/" + route.itemId;
      if (route.choiceId) hash += "/" + encodeURIComponent(route.choiceId);
    }
    return hash;
  }

  function setHistory(route, replace) {
    var hash = buildHash(route);
    var state = {
      view: route.view,
      categoryId: route.categoryId || null,
      itemId: route.itemId != null ? route.itemId : null,
      choiceId: route.choiceId || null
    };
    if (replace) {
      history.replaceState(state, "", hash);
    } else {
      history.pushState(state, "", hash);
    }
  }

  function navigate(route, options) {
    options = options || {};
    var next = {
      view: route.view || "home",
      categoryId: route.categoryId || null,
      itemId: route.itemId != null ? route.itemId : null,
      choiceId: route.choiceId || null
    };

    if (!options.replace && routesEqual(currentRoute, next)) {
      applyRoute(next);
      return;
    }

    if (!options.silent) {
      setHistory(next, !!options.replace);
    }
    applyRoute(next);
  }

  function goBack() {
    if (currentRoute.view === "home") return;
    history.back();
  }

  function renderTypePreview(item) {
    if (!item.choices || !item.choices.length) return "";

    if (item.logoGrid) {
      return (
        '<div class="logo-strip">' +
        item.choices
          .map(function (c) {
            return '<img src="' + c.image + '" alt="' + c.nameAr + '" title="' + c.nameAr + '">';
          })
          .join("") +
        "</div>"
      );
    }

    if (item.choiceMode) {
      return (
        '<div class="choice-thumbs">' +
        item.choices
          .map(function (c) {
            return (
              '<div class="choice-thumb">' +
              foodPhoto(c.image, c.nameAr) +
              "<span>" + c.nameAr + "</span></div>"
            );
          })
          .join("") +
        "</div>"
      );
    }

    return (
      '<div class="type-chips">' +
      item.choices
        .map(function (c) {
          return '<span class="type-chip">' + c.nameAr + "</span>";
        })
        .join("") +
      "</div>"
    );
  }

  function renderSizePreview(item) {
    if (!item.sizes || !item.sizes.length) return "";
    return (
      '<div class="size-chips">' +
      item.sizes
        .map(function (s) {
          return (
            '<span class="size-chip"><strong>' +
            s.nameAr +
            "</strong><small>" +
            formatPrice(s.price) +
            "</small></span>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderCategories(filter) {
    var query = (filter || "").trim().toLowerCase();
    $categories.empty();

    var matches = MENU.categories.filter(function (cat) {
      if (!query) return true;
      var inName =
        cat.nameAr.toLowerCase().indexOf(query) !== -1 ||
        cat.nameEn.toLowerCase().indexOf(query) !== -1;
      var inItems = cat.items.some(function (item) {
        return (
          item.nameAr.toLowerCase().indexOf(query) !== -1 ||
          item.nameEn.toLowerCase().indexOf(query) !== -1 ||
          (item.choices &&
            item.choices.some(function (c) {
              return (
                c.nameAr.toLowerCase().indexOf(query) !== -1 ||
                c.nameEn.toLowerCase().indexOf(query) !== -1
              );
            }))
        );
      });
      return inName || inItems;
    });

    if (!matches.length) {
      $categories.append(
        '<div class="col-12"><div class="empty-state">لا توجد نتائج / No results</div></div>'
      );
      return;
    }

    matches.forEach(function (cat) {
      var html =
        '<div class="col-12 col-sm-6 col-xl-3">' +
        '<article class="category-card" data-id="' + cat.id + '">' +
        '<div class="category-cover">' + foodPhoto(cat.image, cat.nameAr) + "</div>" +
        '<div class="category-head">' +
        "<div><strong>" + cat.nameEn + "</strong><span>" + cat.nameAr + "</span></div>" +
        "</div>" +
        '<div class="category-body">' +
        '<div class="d-flex align-items-center gap-3">' +
        '<div class="category-icon">' + iconSvg(cat.icon) + "</div>" +
        '<div class="category-meta">' + cat.items.length + " صنف" +
        "<small>" + cat.items.length + " items</small></div>" +
        "</div>" +
        '<div class="chevron"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
        "</div></article></div>";
      $categories.append(html);
    });
  }

  function renderItems(category, filter) {
    var query = (filter || "").trim().toLowerCase();
    var list = category.items.filter(function (item) {
      if (!query) return true;
      return (
        item.nameAr.toLowerCase().indexOf(query) !== -1 ||
        item.nameEn.toLowerCase().indexOf(query) !== -1 ||
        (item.choices &&
          item.choices.some(function (c) {
            return (
              c.nameAr.toLowerCase().indexOf(query) !== -1 ||
              c.nameEn.toLowerCase().indexOf(query) !== -1
            );
          }))
      );
    });

    $items.empty();
    $sectionBanner.html(
      "<div><h2>" + category.nameAr + "</h2><p>" + category.nameEn + "</p></div>" +
      '<div class="banner-photo">' + foodPhoto(category.image, category.nameAr) + "</div>"
    );

    if (!list.length) {
      $items.append(
        '<div class="col-12"><div class="empty-state">لا توجد أصناف / No items</div></div>'
      );
      return;
    }

    list.forEach(function (item) {
      var artHtml;
      if (item.logoGrid && item.choices) {
        artHtml = '<div class="item-art logo-art">' + renderTypePreview(item) + "</div>";
      } else if (item.choiceMode && item.choices) {
        artHtml = '<div class="item-art split-art">' + renderTypePreview(item) + "</div>";
      } else {
        artHtml =
          '<div class="item-art' + (!item.image ? " is-empty" : "") + '">' +
          foodPhoto(item.image, item.nameAr) +
          "</div>";
      }

      var calText = "";
      if (item.sizes && item.sizes[0] && item.sizes[0].calories != null) {
        calText = formatCalories(item.sizes[0].calories, item.caloriesNoteAr);
      } else if (item.calories != null) {
        calText = formatCalories(item.calories, item.caloriesNoteAr);
      }

      var html =
        '<div class="col-12 col-sm-6 col-lg-4 col-xl-3">' +
        '<article class="item-card" data-id="' + item.id + '">' +
        artHtml +
        '<div class="item-body">' +
        "<h3>" + item.nameAr + "</h3>" +
        '<div class="en">' + item.nameEn + "</div>" +
        (item.choices && !item.choiceMode && !item.logoGrid ? renderTypePreview(item) : "") +
        (item.sizes ? renderSizePreview(item) : "") +
        '<div class="item-foot">' +
        (calText ? '<span class="cal-badge">' + calText + "</span>" : "<span></span>") +
        '<span class="price-badge">' + basePrice(item) + "</span>" +
        "</div></div></article></div>";
      $items.append(html);
    });
  }

  function showHomeView() {
    currentCategoryId = null;
    $sectionView.addClass("hidden");
    $homeView.removeClass("hidden");
    $searchWrap.insertAfter($homeView.find(".hero"));
    renderCategories($search.val());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showSectionView(id) {
    var category = findCategory(id);
    if (!category) {
      showHomeView();
      return false;
    }
    currentCategoryId = id;
    $homeView.addClass("hidden");
    $sectionView.removeClass("hidden");
    $searchWrap.insertAfter($sectionView.find(".back-row"));
    renderItems(category, $search.val());
    window.scrollTo({ top: 0, behavior: "smooth" });
    return true;
  }

  function showChoicesStep(item, category) {
    $("#item-modal-detail").addClass("hidden");
    $("#item-modal-choices").removeClass("hidden");
    $("#item-modal-back").addClass("hidden");
    $("#item-modal-title").text(item.nameAr);
    $("#item-modal-en").text(item.nameEn);
    $("#item-modal-cat").text(category.nameAr + " / " + category.nameEn);

    var gridClass = item.logoGrid ? "choice-grid logos" : "choice-grid";
    var html = item.choices
      .map(function (choice) {
        return (
          '<button type="button" class="choice-card" data-choice="' + choice.id + '">' +
          '<div class="choice-card-art">' + foodPhoto(choice.image, choice.nameAr) + "</div>" +
          "<strong>" + choice.nameAr + "</strong>" +
          "<span>" + choice.nameEn + "</span>" +
          (choice.price != null ? '<em>' + formatPrice(choice.price) + "</em>" : "") +
          "</button>"
        );
      })
      .join("");

    $("#item-modal-choices").attr("class", gridClass).html(html);
  }

  function fillDetail(item, category, choice) {
    var view = {
      nameAr: choice ? choice.nameAr : item.nameAr,
      nameEn: choice ? choice.nameEn : item.nameEn,
      image: choice && choice.image ? choice.image : item.image,
      price: choice && choice.price != null ? choice.price : item.price,
      calories: choice && choice.calories != null ? choice.calories : item.calories,
      caloriesNoteAr: item.caloriesNoteAr,
      sizes: item.sizes,
      choices: !item.choiceMode ? item.choices : null
    };

    if (choice && item.choiceMode) {
      $("#item-modal-title").text(item.nameAr + " — " + choice.nameAr);
    } else {
      $("#item-modal-title").text(view.nameAr);
    }

    $("#item-modal-art").html(foodPhoto(view.image, view.nameAr));
    $("#item-modal-en").text(view.nameEn);
    $("#item-modal-cat").text(category.nameAr + " / " + category.nameEn);

    var $sizes = $("#item-modal-sizes").empty();
    var $types = $("#item-modal-types").empty();

    if (view.sizes && view.sizes.length) {
      $sizes.removeClass("hidden");
      view.sizes.forEach(function (size, idx) {
        $sizes.append(
          '<button type="button" class="size-btn' + (idx === 0 ? " active" : "") + '" data-size="' + size.id + '">' +
          "<strong>" + size.nameAr + "</strong>" +
          "<span>" + size.nameEn + "</span>" +
          "<em>" + formatPrice(size.price) + "</em></button>"
        );
      });
      applySize(view.sizes[0], view);
    } else {
      $sizes.addClass("hidden");
      $("#item-modal-cal").text(
        view.calories != null ? formatCalories(view.calories, view.caloriesNoteAr) : "—"
      );
      $("#item-modal-price").text(formatPrice(view.price) || "—");
    }

    if (view.choices && view.choices.length) {
      $types.removeClass("hidden");
      view.choices.forEach(function (c, idx) {
        $types.append(
          '<button type="button" class="type-btn' + (idx === 0 ? " active" : "") + '" data-type="' + c.id + '">' +
          c.nameAr +
          "</button>"
        );
      });
      activeContext.selectedType = view.choices[0].id;
      if (!view.sizes) {
        $("#item-modal-cal").text(formatCalories(view.choices[0].calories, view.caloriesNoteAr));
        $("#item-modal-price").text(formatPrice(view.choices[0].price));
      }
    } else {
      $types.addClass("hidden");
    }
  }

  function applySize(size, view) {
    $("#item-modal-price").text(formatPrice(size.price));
    if (size.calories != null) {
      $("#item-modal-cal").text(formatCalories(size.calories, view.caloriesNoteAr));
    } else if (view.calories != null) {
      $("#item-modal-cal").text(formatCalories(view.calories, view.caloriesNoteAr));
    } else {
      $("#item-modal-cal").text("—");
    }
  }

  function closeModalQuietly() {
    if ($itemModalEl.hasClass("show")) {
      skipNextModalHideHistory = true;
      itemModal.hide();
    }
    activeContext = null;
  }

  function openItemModal(itemId, choiceId) {
    var found = findItem(itemId);
    if (!found) return false;
    var item = found.item;
    var cat = found.category;

    activeContext = { item: item, category: cat, choice: null };

    if (item.choiceMode && item.choices && item.choices.length) {
      if (choiceId) {
        var choice = item.choices.find(function (c) {
          return c.id === choiceId;
        });
        if (choice) {
          activeContext.choice = choice;
          $("#item-modal-choices").addClass("hidden");
          $("#item-modal-detail").removeClass("hidden");
          $("#item-modal-back").removeClass("hidden");
          fillDetail(item, cat, choice);
        } else {
          showChoicesStep(item, cat);
        }
      } else {
        showChoicesStep(item, cat);
      }
    } else {
      $("#item-modal-choices").addClass("hidden").empty();
      $("#item-modal-detail").removeClass("hidden");
      $("#item-modal-back").addClass("hidden");
      fillDetail(item, cat, null);
    }

    itemModal.show();
    return true;
  }

  function applyRoute(route) {
    applyingRoute = true;
    currentRoute = {
      view: route.view || "home",
      categoryId: route.categoryId || null,
      itemId: route.itemId != null ? route.itemId : null,
      choiceId: route.choiceId || null
    };

    if (currentRoute.view === "home") {
      closeModalQuietly();
      showHomeView();
    } else if (currentRoute.view === "section") {
      closeModalQuietly();
      if (!showSectionView(currentRoute.categoryId)) {
        currentRoute = { view: "home" };
        setHistory(currentRoute, true);
        showHomeView();
      }
    } else if (currentRoute.view === "item") {
      if (!showSectionView(currentRoute.categoryId)) {
        closeModalQuietly();
        currentRoute = { view: "home" };
        setHistory(currentRoute, true);
        showHomeView();
      } else if (!openItemModal(currentRoute.itemId, currentRoute.choiceId)) {
        closeModalQuietly();
        currentRoute = { view: "section", categoryId: currentRoute.categoryId };
        setHistory(currentRoute, true);
      }
    }

    applyingRoute = false;
  }

  $(function () {
    itemModal = new bootstrap.Modal(document.getElementById("itemModal"), {
      backdrop: true,
      keyboard: true
    });

    var initial = parseHash();
    setHistory(initial, true);
    applyRoute(initial);

    $categories.on("click", ".category-card", function () {
      navigate({ view: "section", categoryId: $(this).data("id") });
    });

    $items.on("click", ".item-card", function () {
      navigate({
        view: "item",
        categoryId: currentCategoryId,
        itemId: $(this).data("id")
      });
    });

    $(document).on("click", ".js-home, .brand", function (e) {
      e.preventDefault();
      navigate({ view: "home" });
    });

    $("#btn-back").on("click", function () {
      goBack();
    });

    $("#item-modal-back").on("click", function () {
      goBack();
    });

    $("#item-modal-choices").on("click", ".choice-card", function () {
      if (!activeContext) return;
      navigate({
        view: "item",
        categoryId: activeContext.category.id,
        itemId: activeContext.item.id,
        choiceId: $(this).data("choice")
      });
    });

    $itemModalEl.on("hide.bs.modal", function () {
      if (skipNextModalHideHistory) {
        skipNextModalHideHistory = false;
        return;
      }
      if (applyingRoute) return;
      if (currentRoute.view === "item") {
        // X / backdrop / Esc: leave the modal fully and return to the section
        var steps = currentRoute.choiceId ? 2 : 1;
        history.go(-steps);
      }
    });

    $itemModalEl.on("hidden.bs.modal", function () {
      if (applyingRoute) return;
      if (currentRoute.view !== "item") {
        activeContext = null;
      }
    });

    $("#item-modal-sizes").on("click", ".size-btn", function () {
      if (!activeContext) return;
      var sizeId = $(this).data("size");
      var size = activeContext.item.sizes.find(function (s) {
        return s.id === sizeId;
      });
      if (!size) return;
      $("#item-modal-sizes .size-btn").removeClass("active");
      $(this).addClass("active");
      applySize(size, activeContext.item);
    });

    $("#item-modal-types").on("click", ".type-btn", function () {
      if (!activeContext || !activeContext.item.choices) return;
      var typeId = $(this).data("type");
      var choice = activeContext.item.choices.find(function (c) {
        return c.id === typeId;
      });
      if (!choice) return;
      $("#item-modal-types .type-btn").removeClass("active");
      $(this).addClass("active");
      if (choice.image) {
        $("#item-modal-art").html(foodPhoto(choice.image, choice.nameAr));
      }
      if (!activeContext.item.sizes) {
        $("#item-modal-cal").text(
          formatCalories(choice.calories, activeContext.item.caloriesNoteAr)
        );
        $("#item-modal-price").text(formatPrice(choice.price));
      }
    });

    $search.on("input", function () {
      var value = $(this).val();
      if (currentCategoryId) {
        renderItems(findCategory(currentCategoryId), value);
      } else {
        renderCategories(value);
      }
    });

    $(window).on("popstate", function (e) {
      var state = e.originalEvent && e.originalEvent.state;
      var route = state && state.view ? state : parseHash();
      applyRoute(route);
    });

    $(document).on("keydown", function (e) {
      if (e.key !== "Backspace") return;
      if (isTypingTarget(e.target)) return;
      if (currentRoute.view === "home") return;
      e.preventDefault();
      goBack();
    });
  });
})(jQuery);
