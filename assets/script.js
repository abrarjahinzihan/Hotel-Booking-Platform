/**
 * AuraStay Luxury Hotel Booking Platform
 * Complete Frontend Application Logic
 * Requirements: Room Cards, Interactive Filters, Forms, Dynamic Price Calculation,
 * Availability Confirmation Modals, Responsive UI/UX.
 */

// ================= 1. Rich Hotel & Room Dataset =================
const HOTELS_DATA = [
    {
        id: 1,
        name: "Villa Ocean Whisper",
        category: "beach",
        location: "Uluwatu, Bali, Indonesia",
        rating: 4.96,
        reviewsCount: 184,
        price: 360,
        originalPrice: 450,
        badge: "Bestseller",
        badgeType: "highlight",
        roomType: "Cliffside Ocean Pool Villa",
        bedInfo: "1 King Bed",
        maxGuests: 3,
        sqft: "1,250 sq ft",
        freeCancel: true,
        images: [
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Perched gracefully on the dramatic cliffs of Uluwatu, Villa Ocean Whisper offers uninterrupted views of the Indian Ocean, a private infinity plunge pool, and signature open-concept Balinese luxury architecture.",
        amenities: [
            "Infinity Pool",
            "Ocean View",
            "Free High-Speed Wi-Fi",
            "Luxury Spa",
            "Gourmet Breakfast Included",
            "24/7 Butler Service"
        ]
    },
    {
        id: 2,
        name: "Château de Haute-Savoie",
        category: "mountain",
        location: "Chamonix, French Alps, France",
        rating: 4.92,
        reviewsCount: 142,
        price: 490,
        originalPrice: 580,
        badge: "Top Rated",
        badgeType: "default",
        roomType: "Alpine Glacier Chalet",
        bedInfo: "2 Queen Beds",
        maxGuests: 4,
        sqft: "1,400 sq ft",
        freeCancel: true,
        images: [
            "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Surrounded by snow-capped peaks beneath Mont Blanc, this authentic luxury alpine sanctuary features a cedarwood fireplace, heated ski locker, and private geothermal jacuzzi.",
        amenities: [
            "Ski-in / Ski-out",
            "Private Jacuzzi",
            "Free High-Speed Wi-Fi",
            "Luxury Spa",
            "Gourmet Breakfast Included"
        ]
    },
    {
        id: 3,
        name: "Santorini Horizon Suites",
        category: "beach",
        location: "Oia, Santorini, Greece",
        rating: 4.98,
        reviewsCount: 220,
        price: 520,
        originalPrice: 650,
        badge: "Iconic Caldera",
        badgeType: "highlight",
        roomType: "Cave Suite with Sunset Jacuzzi",
        bedInfo: "1 King Bed",
        maxGuests: 2,
        sqft: "850 sq ft",
        freeCancel: true,
        images: [
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Carved into the volcanic cliffs of Oia, Horizon Suites features minimalist whitewashed Cycladic curves, an infinity jacuzzi cantilevered over the Aegean Sea, and front-row seats to world-famous sunsets.",
        amenities: [
            "Ocean View",
            "Private Jacuzzi",
            "Infinity Pool",
            "Free High-Speed Wi-Fi",
            "Gourmet Breakfast Included"
        ]
    },
    {
        id: 4,
        name: "The Tokyo Sky Sanctuary",
        category: "city",
        location: "Shinjuku, Tokyo, Japan",
        rating: 4.89,
        reviewsCount: 167,
        price: 410,
        originalPrice: 470,
        badge: "Metropolitan",
        badgeType: "default",
        roomType: "Executive Skyline Penthouse",
        bedInfo: "1 King Bed",
        maxGuests: 2,
        sqft: "920 sq ft",
        freeCancel: false,
        images: [
            "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Rising 45 floors above Tokyo, enjoy floor-to-ceiling panoramic views of Mount Fuji and the city lights, traditional Hinoki cypress soaking tubs, and Michelin-starred in-suite dining.",
        amenities: [
            "Free High-Speed Wi-Fi",
            "Luxury Spa",
            "24/7 Butler Service",
            "Gourmet Breakfast Included"
        ]
    },
    {
        id: 5,
        name: "Velassaru Coral Atoll",
        category: "villas",
        location: "South Malé Atoll, Maldives",
        rating: 4.97,
        reviewsCount: 310,
        price: 780,
        originalPrice: 920,
        badge: "Ultra Luxury",
        badgeType: "highlight",
        roomType: "Overwater Bungalow with Net Hammock",
        bedInfo: "1 Emperor King",
        maxGuests: 3,
        sqft: "1,600 sq ft",
        freeCancel: true,
        images: [
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Suspended over a crystalline turquoise lagoon, this overwater villa features glass floor viewing panels, direct reef ocean access ladders, and a private catamaran at your disposal.",
        amenities: [
            "Ocean View",
            "Infinity Pool",
            "Private Jacuzzi",
            "24/7 Butler Service",
            "Luxury Spa",
            "Free High-Speed Wi-Fi"
        ]
    },
    {
        id: 6,
        name: "Amanjena Palm Oasis",
        category: "spa",
        location: "Marrakech, Morocco",
        rating: 4.88,
        reviewsCount: 119,
        price: 340,
        originalPrice: 420,
        badge: "Wellness Retreat",
        badgeType: "default",
        roomType: "Traditional Moorish Pavilion",
        bedInfo: "1 King or 2 Twins",
        maxGuests: 3,
        sqft: "1,100 sq ft",
        freeCancel: true,
        images: [
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Set amidst ancient olive groves and reflecting pools, featuring clay-fired courtyards, authentic private Moroccan hammams, and tranquil holistic aromatherapy gardens.",
        amenities: [
            "Luxury Spa",
            "Infinity Pool",
            "Free High-Speed Wi-Fi",
            "Gourmet Breakfast Included"
        ]
    },
    {
        id: 7,
        name: "The Glass Igloo Lodge",
        category: "mountain",
        location: "Rovaniemi, Lapland, Finland",
        rating: 4.94,
        reviewsCount: 205,
        price: 460,
        originalPrice: 530,
        badge: "Aurora Viewing",
        badgeType: "highlight",
        roomType: "Thermal Glass Geodesic Dome",
        bedInfo: "1 Motorized Sky Bed",
        maxGuests: 2,
        sqft: "650 sq ft",
        freeCancel: true,
        images: [
            "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Sleep beneath the dancing Northern Lights inside a heated glass igloo fitted with electrochromic privacy glass, reindeer pelt furnishings, and traditional Finnish smoke sauna access.",
        amenities: [
            "Ski-in / Ski-out",
            "Private Jacuzzi",
            "Free High-Speed Wi-Fi",
            "Gourmet Breakfast Included"
        ]
    },
    {
        id: 8,
        name: "Azure Marina Yacht Suites",
        category: "city",
        location: "Dubai Marina, United Arab Emirates",
        rating: 4.87,
        reviewsCount: 153,
        price: 430,
        originalPrice: 510,
        badge: "Marina Front",
        badgeType: "default",
        roomType: "Duplex Royal Marina Suite",
        bedInfo: "1 Super King Bed",
        maxGuests: 4,
        sqft: "1,550 sq ft",
        freeCancel: false,
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Commanding views of superyachts along the Dubai Marina Promenade, with a private plunge pool on the terrace, marble rainfall bathrooms, and complimentary luxury chauffeur transfers.",
        amenities: [
            "Ocean View",
            "Infinity Pool",
            "24/7 Butler Service",
            "Free High-Speed Wi-Fi",
            "Luxury Spa"
        ]
    }
];

// ================= 2. State Management =================
let state = {
    selectedCategory: "all",
    searchDestination: "",
    checkInDate: "",
    checkOutDate: "",
    guests: {
        adults: 2,
        children: 0,
        rooms: 1
    },
    maxPrice: 800,
    minRating: 0,
    selectedAmenities: [],
    freeCancelOnly: false,
    sortBy: "recommended",
    wishlist: JSON.parse(localStorage.getItem("aura_wishlist")) || [],
    bookings: JSON.parse(localStorage.getItem("aura_bookings")) || [],
    currentHotelForBooking: null,
    appliedCoupon: null
};

// ================= 3. Initialization =================
document.addEventListener("DOMContentLoaded", () => {
    initDates();
    initTheme();
    setupEventListeners();
    updateBadgeCounters();
    renderHotels();
});

// Setup default check-in (tomorrow) and check-out (4 days after)
function initDates() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const defaultCheckout = new Date(tomorrow);
    defaultCheckout.setDate(tomorrow.getDate() + 3);

    const formatDate = (d) => d.toISOString().split("T")[0];

    const checkInInput = document.getElementById("search-checkin");
    const checkOutInput = document.getElementById("search-checkout");

    const tomorrowStr = formatDate(tomorrow);
    const checkoutStr = formatDate(defaultCheckout);

    checkInInput.min = formatDate(today);
    checkInInput.value = tomorrowStr;
    checkOutInput.min = tomorrowStr;
    checkOutInput.value = checkoutStr;

    state.checkInDate = tomorrowStr;
    state.checkOutDate = checkoutStr;

    // Date change listeners for search widget
    checkInInput.addEventListener("change", (e) => {
        state.checkInDate = e.target.value;
        checkOutInput.min = e.target.value;
        if (new Date(checkOutInput.value) <= new Date(e.target.value)) {
            const nextDay = new Date(e.target.value);
            nextDay.setDate(nextDay.getDate() + 2);
            checkOutInput.value = formatDate(nextDay);
            state.checkOutDate = checkOutInput.value;
        }
    });

    checkOutInput.addEventListener("change", (e) => {
        state.checkOutDate = e.target.value;
    });
}

// Setup Theme (Dark / Light)
function initTheme() {
    const savedTheme = localStorage.getItem("aura_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    document.getElementById("theme-toggle-btn").addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("aura_theme", newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const btn = document.getElementById("theme-toggle-btn");
    btn.innerHTML = theme === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

// ================= 4. UI Listeners & Interactions =================
function setupEventListeners() {
    // Guest Popover Trigger
    const guestTrigger = document.getElementById("guest-selector-btn");
    guestTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleGuestPopover();
    });

    document.addEventListener("click", (e) => {
        const popover = document.getElementById("guest-popover");
        if (popover && !popover.contains(e.target) && e.target !== guestTrigger && !guestTrigger.contains(e.target)) {
            toggleGuestPopover(false);
        }
    });

    // Destination Input Clear
    const destInput = document.getElementById("search-destination");
    const clearDestBtn = document.getElementById("clear-dest");
    destInput.addEventListener("input", () => {
        clearDestBtn.style.display = destInput.value.trim() ? "block" : "none";
    });
    clearDestBtn.addEventListener("click", () => {
        destInput.value = "";
        clearDestBtn.style.display = "none";
        state.searchDestination = "";
        renderHotels();
    });

    // Category Tabs
    document.querySelectorAll(".category-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            state.selectedCategory = tab.dataset.category;
            renderHotels();
        });
    });

    // Price Range Slider
    const priceSlider = document.getElementById("price-range");
    const priceDisplay = document.getElementById("price-val-display");
    priceSlider.addEventListener("input", (e) => {
        state.maxPrice = parseInt(e.target.value);
        priceDisplay.textContent = `$${state.maxPrice}`;
        renderHotels();
    });

    // Rating Filter Pills
    document.querySelectorAll(".rating-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            document.querySelectorAll(".rating-pill").forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            state.minRating = parseFloat(pill.dataset.rating);
            renderHotels();
        });
    });

    // Amenities Checkboxes
    document.querySelectorAll("#amenity-filters input").forEach(chk => {
        chk.addEventListener("change", () => {
            const checkedValues = Array.from(document.querySelectorAll("#amenity-filters input:checked")).map(c => c.value);
            state.selectedAmenities = checkedValues;
            renderHotels();
        });
    });

    // Free Cancellation Toggle
    const freeCancelToggle = document.getElementById("free-cancel-filter");
    freeCancelToggle.addEventListener("change", (e) => {
        state.freeCancelOnly = e.target.checked;
        renderHotels();
    });

    // My Bookings Drawer
    document.getElementById("my-bookings-btn").addEventListener("click", () => {
        openBookingsDrawer();
    });

    // Wishlist Button in Nav
    document.getElementById("wishlist-btn").addEventListener("click", (e) => {
        e.preventDefault();
        toggleWishlistFilter();
    });
}

function toggleGuestPopover(forceState) {
    const popover = document.getElementById("guest-popover");
    if (forceState !== undefined) {
        popover.classList.toggle("show", forceState);
    } else {
        popover.classList.toggle("show");
    }
}

function updateGuests(type, change) {
    if (type === "adults") {
        state.guests.adults = Math.max(1, Math.min(8, state.guests.adults + change));
        document.getElementById("val-adults").textContent = state.guests.adults;
    } else if (type === "children") {
        state.guests.children = Math.max(0, Math.min(6, state.guests.children + change));
        document.getElementById("val-children").textContent = state.guests.children;
    } else if (type === "rooms") {
        state.guests.rooms = Math.max(1, Math.min(4, state.guests.rooms + change));
        document.getElementById("val-rooms").textContent = state.guests.rooms;
    }

    const totalGuests = state.guests.adults + state.guests.children;
    const text = `${totalGuests} Guest${totalGuests > 1 ? 's' : ''} · ${state.guests.rooms} Room${state.guests.rooms > 1 ? 's' : ''}`;
    document.getElementById("guest-summary-text").textContent = text;
}

function applySearch() {
    state.searchDestination = document.getElementById("search-destination").value.trim().toLowerCase();
    renderHotels();
    document.getElementById("hotels-section").scrollIntoView({ behavior: "smooth" });
}

function setQuickSearch(dest) {
    document.getElementById("search-destination").value = dest;
    document.getElementById("clear-dest").style.display = "block";
    state.searchDestination = dest.toLowerCase();
    renderHotels();
    document.getElementById("hotels-section").scrollIntoView({ behavior: "smooth" });
}

function resetAllFilters() {
    state.selectedCategory = "all";
    state.searchDestination = "";
    state.maxPrice = 1000;
    state.minRating = 0;
    state.selectedAmenities = [];
    state.freeCancelOnly = false;
    state.sortBy = "recommended";

    document.getElementById("search-destination").value = "";
    document.getElementById("clear-dest").style.display = "none";
    document.getElementById("price-range").value = 1000;
    document.getElementById("price-val-display").textContent = "$1,000";
    document.querySelectorAll(".rating-pill").forEach((p, idx) => p.classList.toggle("active", idx === 0));
    document.querySelectorAll("#amenity-filters input").forEach(c => c.checked = false);
    document.getElementById("free-cancel-filter").checked = false;
    document.querySelectorAll(".category-tab").forEach((t, idx) => t.classList.toggle("active", idx === 0));
    document.getElementById("sort-by").value = "recommended";

    renderHotels();
    showToast("All filters have been reset", "info");
}

// ================= 5. Rendering Room & Hotel Cards =================
function renderHotels() {
    const grid = document.getElementById("hotel-grid");
    const countDisplay = document.getElementById("results-count-number");
    const noResults = document.getElementById("no-results-state");
    const sortVal = document.getElementById("sort-by").value;

    let filtered = HOTELS_DATA.filter(hotel => {
        // Category filter
        if (state.selectedCategory !== "all" && hotel.category !== state.selectedCategory) {
            return false;
        }

        // Search text
        if (state.searchDestination) {
            const target = `${hotel.name} ${hotel.location}`.toLowerCase();
            if (!target.includes(state.searchDestination)) return false;
        }

        // Price filter
        if (hotel.price > state.maxPrice) return false;

        // Rating filter
        if (hotel.rating < state.minRating) return false;

        // Free cancellation filter
        if (state.freeCancelOnly && !hotel.freeCancel) return false;

        // Amenities filter (must contain all selected amenities)
        if (state.selectedAmenities.length > 0) {
            const hasAll = state.selectedAmenities.every(a => hotel.amenities.includes(a));
            if (!hasAll) return false;
        }

        return true;
    });

    // Sorting logic
    if (sortVal === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === "rating-high") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    countDisplay.textContent = filtered.length;

    if (filtered.length === 0) {
        grid.innerHTML = "";
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";
    grid.innerHTML = filtered.map(hotel => createHotelCardHTML(hotel)).join("");
}

function createHotelCardHTML(hotel) {
    const isWishlisted = state.wishlist.includes(hotel.id);
    const badgeHTML = hotel.badge ? `
        <div class="card-badge-tag ${hotel.badgeType === 'highlight' ? 'highlight' : ''}">
            <i class="fa-solid fa-gem"></i> ${hotel.badge}
        </div>
    ` : "";

    // Amenities chips (display top 3)
    const amenityIcons = {
        "Infinity Pool": "fa-water-ladder",
        "Ocean View": "fa-water",
        "Free High-Speed Wi-Fi": "fa-wifi",
        "Luxury Spa": "fa-spa",
        "Gourmet Breakfast Included": "fa-utensils",
        "24/7 Butler Service": "fa-bell-concierge",
        "Private Jacuzzi": "fa-hot-tub-person",
        "Ski-in / Ski-out": "fa-person-skiing"
    };

    const topAmenities = hotel.amenities.slice(0, 3).map(a => `
        <span class="amenity-chip">
            <i class="fa-solid ${amenityIcons[a] || 'fa-check'}"></i> ${a}
        </span>
    `).join("");

    return `
        <article class="hotel-card" data-id="${hotel.id}">
            <div class="card-media-wrapper">
                <img src="${hotel.images[0]}" alt="${hotel.name}" loading="lazy">
                ${badgeHTML}
                <button class="wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" 
                        onclick="toggleWishlist(${hotel.id}, event)" 
                        title="Save to Wishlist">
                    <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
            </div>

            <div class="card-content">
                <div class="card-header-row">
                    <h3 class="card-title">${hotel.name}</h3>
                    <div class="rating-pill-display">
                        <i class="fa-solid fa-star"></i> ${hotel.rating.toFixed(2)}
                    </div>
                </div>

                <div class="card-location">
                    <i class="fa-solid fa-location-dot"></i> ${hotel.location}
                </div>

                <div class="card-specs-row">
                    <span class="spec-item"><i class="fa-solid fa-bed"></i> ${hotel.bedInfo}</span>
                    <span class="spec-item"><i class="fa-solid fa-user-group"></i> Up to ${hotel.maxGuests}</span>
                    <span class="spec-item"><i class="fa-solid fa-vector-square"></i> ${hotel.sqft}</span>
                </div>

                <div class="card-amenities-badges">
                    ${topAmenities}
                </div>

                <div class="card-pricing-footer">
                    <div class="price-details">
                        <span class="price-strike">$${hotel.originalPrice}</span>
                        <div>
                            <span class="price-main">$${hotel.price}</span>
                            <span class="price-unit">/ night</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-outline btn-sm" onclick="openDetailsModal(${hotel.id})">
                            <i class="fa-regular fa-eye"></i> View
                        </button>
                        <button class="btn btn-primary btn-sm" onclick="openBookingModal(${hotel.id})">
                            <i class="fa-solid fa-calendar-plus"></i> Book
                        </button>
                    </div>
                </div>
            </div>
        </article>
    `;
}

// ================= 6. Wishlist Management =================
function toggleWishlist(id, event) {
    if (event) event.stopPropagation();
    const index = state.wishlist.indexOf(id);
    if (index > -1) {
        state.wishlist.splice(index, 1);
        showToast("Removed stay from Saved list", "info");
    } else {
        state.wishlist.push(id);
        showToast("Stay added to your Saved list!", "success");
    }
    localStorage.setItem("aura_wishlist", JSON.stringify(state.wishlist));
    updateBadgeCounters();
    renderHotels();
}

function updateBadgeCounters() {
    document.getElementById("wishlist-count").textContent = state.wishlist.length;
    document.getElementById("bookings-count").textContent = state.bookings.length;
}

function toggleWishlistFilter() {
    if (state.wishlist.length === 0) {
        showToast("You haven't saved any stays yet. Click the heart icon on any card!", "info");
        return;
    }
    // Filter view only saved
    const grid = document.getElementById("hotel-grid");
    const countDisplay = document.getElementById("results-count-number");
    const savedHotels = HOTELS_DATA.filter(h => state.wishlist.includes(h.id));
    countDisplay.textContent = savedHotels.length;
    grid.innerHTML = savedHotels.map(h => createHotelCardHTML(h)).join("");
    showToast(`Showing ${savedHotels.length} saved stay${savedHotels.length > 1 ? 's' : ''}`, "success");
}

// ================= 7. Quick View / Details Modal =================
function openDetailsModal(id) {
    const hotel = HOTELS_DATA.find(h => h.id === id);
    if (!hotel) return;

    const modalBody = document.getElementById("details-modal-body");
    const amenityIcons = {
        "Infinity Pool": "fa-water-ladder",
        "Ocean View": "fa-water",
        "Free High-Speed Wi-Fi": "fa-wifi",
        "Luxury Spa": "fa-spa",
        "Gourmet Breakfast Included": "fa-utensils",
        "24/7 Butler Service": "fa-bell-concierge",
        "Private Jacuzzi": "fa-hot-tub-person",
        "Ski-in / Ski-out": "fa-person-skiing"
    };

    const amenitiesList = hotel.amenities.map(a => `
        <div class="quick-amenity-item">
            <i class="fa-solid ${amenityIcons[a] || 'fa-check'}"></i> ${a}
        </div>
    `).join("");

    modalBody.innerHTML = `
        <div class="quick-view-grid">
            <div class="quick-gallery">
                <img id="quick-main-photo" class="quick-main-img" src="${hotel.images[0]}" alt="${hotel.name}">
                <div class="quick-thumbnails">
                    ${hotel.images.map((img, i) => `
                        <img src="${img}" class="quick-thumbnail ${i === 0 ? 'active' : ''}" 
                             onclick="switchQuickPhoto('${img}', this)" alt="Thumbnail ${i+1}">
                    `).join("")}
                </div>
            </div>

            <div class="quick-details">
                <span class="sub-badge"><i class="fa-solid fa-crown"></i> ${hotel.badge || 'Verified Luxury'}</span>
                <h3>${hotel.name}</h3>
                <div class="card-location"><i class="fa-solid fa-location-dot"></i> ${hotel.location}</div>
                <div class="rating-pill-display" style="margin-bottom: 0.75rem;">
                    <i class="fa-solid fa-star"></i> ${hotel.rating.toFixed(2)} (${hotel.reviewsCount} verified reviews)
                </div>

                <p class="quick-desc">${hotel.description}</p>

                <div class="card-specs-row" style="margin: 1rem 0;">
                    <span class="spec-item"><i class="fa-solid fa-bed"></i> ${hotel.bedInfo}</span>
                    <span class="spec-item"><i class="fa-solid fa-user-group"></i> Up to ${hotel.maxGuests} Guests</span>
                    <span class="spec-item"><i class="fa-solid fa-vector-square"></i> ${hotel.sqft}</span>
                </div>

                <h4 style="font-size: 0.95rem; font-weight:700; margin-bottom: 0.75rem;">Signature Amenities Included</h4>
                <div class="quick-amenities-list">
                    ${amenitiesList}
                </div>

                <div class="card-pricing-footer" style="padding-top: 1rem;">
                    <div>
                        <span class="price-strike">$${hotel.originalPrice}</span>
                        <div>
                            <span class="price-main">$${hotel.price}</span>
                            <span class="price-unit">/ night (excluding taxes)</span>
                        </div>
                    </div>
                    <button class="btn btn-primary" onclick="closeModal('details-modal'); openBookingModal(${hotel.id});">
                        <i class="fa-solid fa-calendar-check"></i> Reserve This Stay
                    </button>
                </div>
            </div>
        </div>
    `;

    document.getElementById("details-modal").style.display = "flex";
}

function switchQuickPhoto(src, thumbElement) {
    document.getElementById("quick-main-photo").src = src;
    document.querySelectorAll(".quick-thumbnail").forEach(t => t.classList.remove("active"));
    thumbElement.classList.add("active");
}

// ================= 8. Interactive Booking & Dynamic Price Calculator =================
function openBookingModal(id) {
    const hotel = HOTELS_DATA.find(h => h.id === id);
    if (!hotel) return;

    state.currentHotelForBooking = hotel;
    state.appliedCoupon = null;

    // Reset coupon UI
    document.getElementById("coupon-code-input").value = "";
    document.getElementById("coupon-status-msg").textContent = "";

    // Set Hotel Meta in Modal
    document.getElementById("book-hotel-name").textContent = hotel.name;
    document.getElementById("book-hotel-loc").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${hotel.location}`;
    document.getElementById("summary-hotel-name").textContent = hotel.name;
    document.getElementById("summary-hotel-img").src = hotel.images[0];
    document.getElementById("summary-rating").textContent = `★ ${hotel.rating.toFixed(2)} (${hotel.reviewsCount} reviews)`;

    // Sync dates from search bar
    const checkinInput = document.getElementById("book-checkin");
    const checkoutInput = document.getElementById("book-checkout");
    checkinInput.min = new Date().toISOString().split("T")[0];
    checkinInput.value = state.checkInDate;
    checkoutInput.min = state.checkInDate;
    checkoutInput.value = state.checkOutDate;

    // Default guests
    document.getElementById("book-guests").value = Math.min(state.guests.adults, 4);
    document.getElementById("book-room-type").value = "standard";

    // Recalculate dynamic pricing breakdown
    calculateLivePrice();

    document.getElementById("booking-modal").style.display = "flex";
}

function onBookingInputsChange() {
    const checkin = document.getElementById("book-checkin").value;
    const checkoutInput = document.getElementById("book-checkout");

    if (new Date(checkoutInput.value) <= new Date(checkin)) {
        const nextDay = new Date(checkin);
        nextDay.setDate(nextDay.getDate() + 2);
        checkoutInput.value = nextDay.toISOString().split("T")[0];
    }
    checkoutInput.min = checkin;

    calculateLivePrice();
}

// Complex Real-Time Price Calculation
function calculateLivePrice() {
    const hotel = state.currentHotelForBooking;
    if (!hotel) return;

    const checkinVal = document.getElementById("book-checkin").value;
    const checkoutVal = document.getElementById("book-checkout").value;
    const guestsCount = parseInt(document.getElementById("book-guests").value);
    const roomTypeVal = document.getElementById("book-room-type").value;

    const date1 = new Date(checkinVal);
    const date2 = new Date(checkoutVal);
    let diffDays = Math.ceil((date2 - date1) / (1000 * 60 * 60 * 24));
    if (isNaN(diffDays) || diffDays <= 0) diffDays = 1;

    // Room multiplier
    let roomMultiplier = 1.0;
    let roomTypeTitle = "Standard King Suite";
    if (roomTypeVal === "deluxe") {
        roomMultiplier = 1.2;
        roomTypeTitle = "Deluxe Panoramic Suite";
    } else if (roomTypeVal === "presidential") {
        roomMultiplier = 1.5;
        roomTypeTitle = "Presidential Penthouse";
    }
    document.getElementById("summary-room-type-text").textContent = roomTypeTitle;

    // Calculations
    const baseDaily = hotel.price * roomMultiplier;
    const staySubtotal = baseDaily * diffDays;

    // Extra guest surcharge ($35/night if > 2 guests)
    const extraGuests = Math.max(0, guestsCount - 2);
    const extraGuestFee = extraGuests * 35 * diffDays;

    // Cleaning & Sanctuary Maintenance Fee
    const cleaningFee = 45.00;

    // Taxes & Resort Hospitality Fee (10% on stay + surcharge)
    const taxableAmount = staySubtotal + extraGuestFee;
    const taxFee = taxableAmount * 0.10;

    // Pre-discount total
    let preTotal = taxableAmount + cleaningFee + taxFee;

    // Promo Coupon Discount
    let discountAmount = 0;
    if (state.appliedCoupon) {
        if (state.appliedCoupon.type === "percent") {
            discountAmount = staySubtotal * (state.appliedCoupon.value / 100);
        } else if (state.appliedCoupon.type === "fixed") {
            discountAmount = state.appliedCoupon.value;
        }
    }

    const finalTotal = Math.max(0, preTotal - discountAmount);

    // Update Live Breakdown DOM
    document.getElementById("calc-nights-label").textContent = `$${Math.round(baseDaily)} × ${diffDays} night${diffDays > 1 ? 's' : ''}`;
    document.getElementById("calc-nights-val").textContent = `$${staySubtotal.toFixed(2)}`;

    // Extra guest row
    const extraGuestRow = document.getElementById("calc-extra-guest-row");
    if (extraGuestFee > 0) {
        extraGuestRow.style.display = "flex";
        document.getElementById("calc-extra-guest-val").textContent = `+$${extraGuestFee.toFixed(2)}`;
    } else {
        extraGuestRow.style.display = "none";
    }

    // Room upgrade row
    const upgradeRow = document.getElementById("calc-room-upgrade-row");
    if (roomMultiplier > 1.0) {
        const upgradeDifference = (staySubtotal - (hotel.price * diffDays));
        upgradeRow.style.display = "flex";
        document.getElementById("calc-room-upgrade-val").textContent = `+$${upgradeDifference.toFixed(2)}`;
    } else {
        upgradeRow.style.display = "none";
    }

    document.getElementById("calc-cleaning-val").textContent = `$${cleaningFee.toFixed(2)}`;
    document.getElementById("calc-tax-val").textContent = `$${taxFee.toFixed(2)}`;

    // Discount row
    const discountRow = document.getElementById("calc-discount-row");
    if (discountAmount > 0) {
        discountRow.style.display = "flex";
        document.getElementById("discount-pct-label").textContent = state.appliedCoupon.label;
        document.getElementById("calc-discount-val").textContent = `-$${discountAmount.toFixed(2)}`;
    } else {
        discountRow.style.display = "none";
    }

    // Total display
    document.getElementById("calc-total-val").textContent = `$${finalTotal.toFixed(2)}`;

    // Store computed values on state for booking creation
    state.lastCalculation = {
        diffDays,
        roomTypeTitle,
        guestsCount,
        staySubtotal,
        finalTotal,
        checkinVal,
        checkoutVal
    };
}

// Promo Coupon Logic
function applyCoupon() {
    const code = document.getElementById("coupon-code-input").value.trim().toUpperCase();
    const msg = document.getElementById("coupon-status-msg");

    if (code === "LUXURY20") {
        state.appliedCoupon = { code, type: "percent", value: 20, label: "20% OFF" };
        msg.textContent = "✓ Code LUXURY20 applied (20% off stay)!";
        msg.style.color = "var(--success)";
        showToast("Promotional voucher applied: 20% discount!", "success");
    } else if (code === "SUMMER10") {
        state.appliedCoupon = { code, type: "percent", value: 10, label: "10% OFF" };
        msg.textContent = "✓ Code SUMMER10 applied (10% off stay)!";
        msg.style.color = "var(--success)";
        showToast("Promotional voucher applied: 10% discount!", "success");
    } else if (code === "AURA50") {
        state.appliedCoupon = { code, type: "fixed", value: 50, label: "$50 OFF" };
        msg.textContent = "✓ Code AURA50 applied ($50 flat discount)!";
        msg.style.color = "var(--success)";
        showToast("Promotional voucher applied: $50 off!", "success");
    } else {
        state.appliedCoupon = null;
        msg.textContent = "✕ Invalid promo code. Try LUXURY20";
        msg.style.color = "var(--danger)";
    }

    calculateLivePrice();
}

// ================= 9. Booking Submission & Availability Confirmation =================
function processBooking() {
    const hotel = state.currentHotelForBooking;
    if (!hotel) return;

    const guestName = document.getElementById("guest-first-name").value.trim();
    const guestEmail = document.getElementById("guest-email-input").value.trim();
    const guestPhone = document.getElementById("guest-phone").value.trim();
    const specialRequests = document.getElementById("special-requests").value.trim();

    const calc = state.lastCalculation;
    const bookingRef = `#AS-${Math.floor(10000 + Math.random() * 90000)}`;

    const newBooking = {
        ref: bookingRef,
        hotelId: hotel.id,
        hotelName: hotel.name,
        hotelLocation: hotel.location,
        hotelImage: hotel.images[0],
        roomCategory: calc.roomTypeTitle,
        checkIn: calc.checkinVal,
        checkOut: calc.checkoutVal,
        nights: calc.diffDays,
        guests: calc.guestsCount,
        guestName,
        guestEmail,
        guestPhone,
        specialRequests,
        totalPrice: calc.finalTotal.toFixed(2),
        bookedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    };

    // Save to bookings list in localStorage
    state.bookings.unshift(newBooking);
    localStorage.setItem("aura_bookings", JSON.stringify(state.bookings));
    updateBadgeCounters();

    // Close booking modal
    closeModal("booking-modal");

    // Populate and open Confirmation Modal Dialog
    document.getElementById("conf-ref-id").textContent = newBooking.ref;
    document.getElementById("conf-hotel-name").textContent = newBooking.hotelName;
    document.getElementById("conf-hotel-loc").textContent = newBooking.hotelLocation;
    document.getElementById("conf-checkin").textContent = formatDatePretty(newBooking.checkIn);
    document.getElementById("conf-checkout").textContent = formatDatePretty(newBooking.checkOut);
    document.getElementById("conf-guest-name").textContent = newBooking.guestName;
    document.getElementById("conf-guest-email").textContent = newBooking.guestEmail;
    document.getElementById("conf-guests-count").textContent = `${newBooking.guests} Guest${newBooking.guests > 1 ? 's' : ''} (${newBooking.nights} Night${newBooking.nights > 1 ? 's' : ''})`;
    document.getElementById("conf-room-category").textContent = newBooking.roomCategory;
    document.getElementById("conf-total-price").textContent = `$${newBooking.totalPrice}`;

    document.getElementById("confirmation-modal").style.display = "flex";
    showToast("Reservation successfully confirmed & stored!", "success");
}

function formatDatePretty(dateStr) {
    if (!dateStr) return "";
    const [y, m, d] = dateStr.split("-");
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// ================= 10. My Bookings Drawer =================
function openBookingsDrawer() {
    const container = document.getElementById("bookings-list-container");
    const drawer = document.getElementById("bookings-drawer");

    if (state.bookings.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding: 3rem 1rem; color: var(--text-muted);">
                <i class="fa-solid fa-calendar-xmark" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">No Active Reservations</h4>
                <p style="font-size: 0.85rem;">When you book a luxury stay, your digital confirmation voucher will be displayed here.</p>
                <button class="btn btn-primary btn-sm" style="margin-top: 1rem;" onclick="closeBookingsDrawer()">Explore Stays</button>
            </div>
        `;
    } else {
        container.innerHTML = state.bookings.map(b => `
            <div class="booking-drawer-card">
                <div class="b-drawer-header">
                    <div>
                        <strong>${b.hotelName}</strong>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">${b.ref}</div>
                    </div>
                    <span class="b-drawer-status">CONFIRMED</span>
                </div>
                <div class="b-drawer-dates">
                    <i class="fa-regular fa-calendar-days"></i> ${formatDatePretty(b.checkIn)} → ${formatDatePretty(b.checkOut)} (${b.nights} nights)
                </div>
                <div style="font-size: 0.8rem; margin-bottom: 0.5rem;">
                    <span style="color: var(--text-muted);">${b.roomCategory} · ${b.guests} Guests</span>
                </div>
                <div class="b-drawer-footer">
                    <strong>Total: $${b.totalPrice}</strong>
                    <button class="btn-cancel-res" onclick="cancelBooking('${b.ref}')">Cancel Stay</button>
                </div>
            </div>
        `).join("");
    }

    drawer.style.display = "flex";
}

function closeBookingsDrawer() {
    document.getElementById("bookings-drawer").style.display = "none";
}

function cancelBooking(ref) {
    if (confirm(`Are you sure you want to cancel reservation ${ref}? Free cancellation policy applies.`)) {
        state.bookings = state.bookings.filter(b => b.ref !== ref);
        localStorage.setItem("aura_bookings", JSON.stringify(state.bookings));
        updateBadgeCounters();
        openBookingsDrawer();
        showToast(`Reservation ${ref} was cancelled without penalty.`, "info");
    }
}

// ================= 11. Modal Utilities & Toast Notifications =================
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of dialog
document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
            backdrop.style.display = "none";
        }
    });
});

// Toast system
function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let icon = "fa-circle-info";
    if (type === "success") icon = "fa-circle-check";
    if (type === "warning") icon = "fa-triangle-exclamation";

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 3800);
}
