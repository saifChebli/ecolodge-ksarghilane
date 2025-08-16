'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      about: "About",
      services: "Services",
      rooms: "Rooms",
      suits: "Suits",
      contact: "Contact",
      blog: "Blog",
      exploreOurBlog: "Explore our Blog",
      
      // Hero Section
      unwindInDreamy: "Unwind in a Dreamy",
      desertHaven: "Desert Haven",
      indulgeInEssence: "Indulge in the essence of desert elegance as you uncover the breathtaking beauty and serene stillness of our Saharan Ecolodge.",
      reservation: "Reservation",
      
      // About Us Section
      aboutUs: "About Us",
      discoverOurStory: "Discover Our Story",
      aboutSubtitle: "Experience the perfect blend of luxury and nature in our desert oasis",
      aboutDescription: "Nestled in the heart of the Sahara Desert, our ecolodge offers a unique blend of traditional Berber hospitality and modern luxury. Every detail has been carefully crafted to provide an authentic desert experience while ensuring your utmost comfort.",
      learnMore: "Learn More",
      
      // Hotel Banner
      welcomeToParadise: "Welcome to Paradise",
      hotelBannerSubtitle: "Where luxury meets the desert",
      
      // Services Section
      ourServices: "Our Services",
      servicesSubtitle: "Everything you need for a perfect stay",
      spaWellness: "Spa & Wellness",
      spaDescription: "Rejuvenate your body and mind with our traditional spa treatments",
      guidedTours: "Guided Tours",
      toursDescription: "Explore the desert with our experienced local guides",
      diningExperience: "Dining Experience",
      diningDescription: "Savor authentic local cuisine in our elegant restaurant",
      adventureActivities: "Adventure Activities",
      adventureDescription: "Experience thrilling desert adventures and activities",
      
      // Rooms Section
      ourRooms: "Our Rooms",
      roomsSubtitle: "Comfort and elegance in every detail",
      standardRoom: "Standard Room",
      deluxeRoom: "Deluxe Room",
      suite: "Suite",
      presidentialSuite: "Presidential Suite",
      roomDescription: "Experience comfort and luxury in our beautifully appointed rooms",
      bookNow: "Book Now",
      from: "from",
      perNight: "per night",
      
      // Suits Section
      ourSuits: "Our Suits",
      suitsSubtitle: "Ultimate luxury and comfort",
      royalSuite: "Royal Suite",
      desertSuite: "Desert Suite",
      luxurySuite: "Luxury Suite",
      suiteDescription: "Indulge in the ultimate luxury experience with our exclusive suites",
      
      // Eco Section
      ecoFriendly: "Eco-Friendly",
      ecoSubtitle: "Committed to sustainability",
      ecoDescription: "Our ecolodge is built with sustainable materials and practices, ensuring minimal impact on the environment while providing maximum comfort.",
      
      // Desert Banner
      desertExperience: "Desert Experience",
      desertSubtitle: "Immerse yourself in the magic of the Sahara",
      desertDescription: "Experience the breathtaking beauty of the desert with guided tours, camel rides, and stargazing under the clear desert sky.",
      
      // Footer
      contactUs: "Contact Us",
      address: "Address",
      phone: "Phone",
      email: "Email",
      followUs: "Follow Us",
      quickLinks: "Quick Links",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      allRightsReserved: "All Rights Reserved",
      
      // Reservation Form
      makeReservation: "Make a Reservation",
      checkIn: "Check In",
      checkOut: "Check Out",
      guests: "Guests",
      adults: "Adults",
      children: "Children",
      roomType: "Room Type",
      specialRequests: "Special Requests",
      confirmBooking: "Confirm Booking",
      bookingSuccess: "Booking Confirmed!",
      bookingMessage: "Thank you for choosing our ecolodge. We look forward to welcoming you!",
      exploreOurBlog: "Explore our Blog",
      
      // Hero Section
      unwindInDreamy: "Unwind in a Dreamy",
      desertHaven: "Desert Haven",
      indulgeInEssence: "Indulge in the essence of desert elegance as you uncover the breathtaking beauty and serene stillness of our Saharan Ecolodge.",
      reservation: "Reservation",
      
      // About Us Section
      aboutUs: "About Us",
      discoverOurStory: "Discover Our Story",
      aboutSubtitle: "Experience the perfect blend of luxury and nature in our desert oasis",
      aboutDescription: "Nestled in the heart of the Sahara Desert, our ecolodge offers a unique blend of traditional Berber hospitality and modern luxury. Every detail has been carefully crafted to provide an authentic desert experience while ensuring your utmost comfort.",
      learnMore: "Learn More",
      
      // Hotel Banner
      welcomeToParadise: "Welcome to Paradise",
      hotelBannerSubtitle: "Where luxury meets the desert",
      
      // Services Section
      ourServices: "Our Services",
      servicesSubtitle: "Everything you need for a perfect stay",
      spaWellness: "Spa & Wellness",
      spaDescription: "Rejuvenate your body and mind with our traditional spa treatments",
      guidedTours: "Guided Tours",
      toursDescription: "Explore the desert with our experienced local guides",
      diningExperience: "Dining Experience",
      diningDescription: "Savor authentic local cuisine in our elegant restaurant",
      adventureActivities: "Adventure Activities",
      adventureDescription: "Experience thrilling desert adventures and activities",
      
      // Rooms Section
      ourRooms: "Our Rooms",
      roomsSubtitle: "Comfort and elegance in every detail",
      standardRoom: "Standard Room",
      deluxeRoom: "Deluxe Room",
      suite: "Suite",
      presidentialSuite: "Presidential Suite",
      roomDescription: "Experience comfort and luxury in our beautifully appointed rooms",
      bookNow: "Book Now",
      from: "from",
      perNight: "per night",
      
      // Suits Section
      ourSuits: "Our Suits",
      suitsSubtitle: "Ultimate luxury and comfort",
      royalSuite: "Royal Suite",
      desertSuite: "Desert Suite",
      luxurySuite: "Luxury Suite",
      suiteDescription: "Indulge in the ultimate luxury experience with our exclusive suites",
      
      // Eco Section
      ecoFriendly: "Eco-Friendly",
      ecoSubtitle: "Committed to sustainability",
      ecoDescription: "Our ecolodge is built with sustainable materials and practices, ensuring minimal impact on the environment while providing maximum comfort.",
      
      // Desert Banner
      desertExperience: "Desert Experience",
      desertSubtitle: "Immerse yourself in the magic of the Sahara",
      desertDescription: "Experience the breathtaking beauty of the desert with guided tours, camel rides, and stargazing under the clear desert sky.",
      
      // Footer
      contactUs: "Contact Us",
      address: "Address",
      phone: "Phone",
      email: "Email",
      followUs: "Follow Us",
      quickLinks: "Quick Links",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      allRightsReserved: "All Rights Reserved",
      
      // Reservation Form
      makeReservation: "Make a Reservation",
      checkIn: "Check In",
      checkOut: "Check Out",
      guests: "Guests",
      adults: "Adults",
      children: "Children",
      roomType: "Room Type",
      specialRequests: "Special Requests",
      confirmBooking: "Confirm Booking",
      bookingSuccess: "Booking Confirmed!",
      bookingMessage: "Thank you for choosing our ecolodge. We look forward to welcoming you!",
      
      // Blog Page
      hotelBlog: "Hotel Blog",
      storiesOfLuxury: "Stories of Luxury",
      blogSubtitle: "Discover the world of exceptional hospitality through our curated collection of stories, insights, and experiences that define modern luxury travel.",
      searchArticles: "Search articles...",
      trendingNow: "Trending Now",
      filterAndSort: "Filter & Sort",
      category: "Category",
      sortBy: "Sort by",
      latest: "Latest",
      mostPopular: "Most Popular",
      highestRated: "Highest Rated",
      featuredArticle: "Featured Article",
      latestArticles: "Latest Articles",
      noArticlesFound: "No articles found",
      tryAdjustingSearch: "Try adjusting your search or filter criteria",
      clearFilters: "Clear Filters",
      
      // Blog Stats
      articles: "Articles",
      avgRating: "Avg Rating",
      totalViews: "Total Views",
      categories: "Categories",
      
      // Newsletter
      stayUpdated: "Stay Updated with Our Latest Stories",
      newsletterSubtitle: "Subscribe to our newsletter and be the first to discover exclusive insights, luxury travel tips, and behind-the-scenes stories from our world-class hotel.",
      enterEmail: "Enter your email address",
      subscribe: "Subscribe",
      privacyNotice: "We respect your privacy. Unsubscribe at any time.",
      successfullySubscribed: "Successfully Subscribed!",
      thankYouSubscribe: "Thank you for subscribing to our newsletter. You'll receive our latest articles and updates.",
      subscribeAnotherEmail: "Subscribe another email",
      
      // Newsletter Benefits
      weeklyUpdates: "Weekly Updates",
      weeklyUpdatesDesc: "Get our latest articles delivered to your inbox",
      exclusiveContent: "Exclusive Content",
      exclusiveContentDesc: "Access to premium articles and insider tips",
      privacyFirst: "Privacy First",
      privacyFirstDesc: "Your data is safe and secure with us",
      
      // Blog Categories
      all: "All",
      luxuryStays: "Luxury Stays",
      dining: "Dining",
      spaWellness: "Spa & Wellness",
      localAttractions: "Local Attractions",
      
      // Common
      readMore: "Read More",
      views: "views",
      minRead: "min read",
      featured: "Featured",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      close: "Close",
      open: "Open",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      view: "View",
      add: "Add",
      remove: "Remove",
      select: "Select",
      choose: "Choose",
      continue: "Continue",
      back: "Back",
      next: "Next",
      previous: "Previous",
      finish: "Finish",
      submit: "Submit",
      reset: "Reset",
      clear: "Clear",
      apply: "Apply",
      confirm: "Confirm",
      yes: "Yes",
      no: "No",
            ok: "OK",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      close: "Close",
      open: "Open",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      view: "View",
      add: "Add",
      remove: "Remove",
      select: "Select",
      choose: "Choose",
      continue: "Continue",
      back: "Back",
      next: "Next",
      previous: "Previous",
      finish: "Finish",
      submit: "Submit",
      reset: "Reset",
      clear: "Clear",
      apply: "Apply",
      confirm: "Confirm",
      yes: "Yes",
      no: "No",
      ok: "OK",
      eleganceInEveryDetail: "Elegance in Every Detail",
      simpleDoubleRooms: "Simple / Double Rooms",
      dunesOasisView: "View of dunes or oasis",
      surface20m2: "Surface 20m²",
      hotWater24h: "Hot water 24H/24",
      airConditioning24h: "Air conditioning hot/cold 24H/24",
      from200DTPerPerson: "From 200DT/person\nBreakfast included",
      simpleDoubleSuites: "Simple / Double Suites",
      ourRefinedSuites: "Our Refined Suites",
      fullName: "Full Name",
      enterFullName: "Enter your full name",
      emailAddress: "Email Address",
      enterEmailAddress: "Enter your email address",
      phoneNumber: "Phone Number",
      visitType: "Visit Type",
      restAndDiscovery: "Rest and Discovery",
      adventureExpedition: "Adventure Expedition",
      reserveNow: "Reserve Now",
      respectingAndProtecting: "Respecting,\nand Protecting",
      sustainabilityDescription: "Sustainability is not a feature — it's our foundation. From solar energy and zero plastic to food grown steps away from your table, every moment here protects the oasis around us.",
      desertsAreFragile: "Deserts Are Fragile",
      desertsAreFragileDescription: "Despite their vastness, deserts are ecosystems deeply affected by human disruption.",
      helpFightDesertification: "Help fight desertification.",
      preserveRareEcosystem: "Preserve a Rare Ecosystem",
      preserveRareEcosystemDescription: "Eco-tourism protects the desert through mindful actions by both hosts and guests.",
      makeStayPositiveImpact: "Make your stay a positive impact.",
      landFullOfSolutions: "A Land Full of Solutions",
      landFullOfSolutionsDescription: "Discover how desert cultures manage resources wisely in the harshest environments.",
      explorePlaceLikeNoOther: "Explore a place like no other."
    }
  },
  fr: {
    translation: {
      // Navigation
      home: "Accueil",
      about: "À propos",
      services: "Services",
      rooms: "Chambres",
      suits: "Suites",
      contact: "Contact",
      blog: "Blog",
      exploreOurBlog: "Découvrez notre Blog",
      
      // Hero Section
      unwindInDreamy: "Détendez-vous dans un",
      desertHaven: "Havre Désertique",
      indulgeInEssence: "Savourez l'essence de l'élégance désertique en découvrant la beauté époustouflante et la sérénité de notre Écolodge Saharien.",
      reservation: "Réservation",
      
      // About Us Section
      aboutUs: "À Propos de Nous",
      discoverOurStory: "Découvrez Notre Histoire",
      aboutSubtitle: "Vivez le mélange parfait de luxe et de nature dans notre oasis désertique",
      aboutDescription: "Nichée au cœur du désert du Sahara, notre écolodge offre un mélange unique d'hospitalité berbère traditionnelle et de luxe moderne. Chaque détail a été soigneusement conçu pour offrir une expérience désertique authentique tout en assurant votre confort absolu.",
      learnMore: "En Savoir Plus",
      
      // Hotel Banner
      welcomeToParadise: "Bienvenue au Paradis",
      hotelBannerSubtitle: "Où le luxe rencontre le désert",
      
      // Services Section
      ourServices: "Nos Services",
      servicesSubtitle: "Tout ce dont vous avez besoin pour un séjour parfait",
      spaWellness: "Spa & Bien-être",
      spaDescription: "Régénérez votre corps et votre esprit avec nos soins spa traditionnels",
      guidedTours: "Visites Guidées",
      toursDescription: "Explorez le désert avec nos guides locaux expérimentés",
      diningExperience: "Expérience Culinaire",
      diningDescription: "Savourez une cuisine locale authentique dans notre restaurant élégant",
      adventureActivities: "Activités d'Aventure",
      adventureDescription: "Vivez des aventures désertiques passionnantes",
      
      // Rooms Section
      ourRooms: "Nos Chambres",
      roomsSubtitle: "Confort et élégance dans chaque détail",
      standardRoom: "Chambre Standard",
      deluxeRoom: "Chambre Deluxe",
      suite: "Suite",
      presidentialSuite: "Suite Présidentielle",
      roomDescription: "Vivez le confort et le luxe dans nos chambres magnifiquement aménagées",
      bookNow: "Réserver Maintenant",
      from: "à partir de",
      perNight: "par nuit",
      
      // Suits Section
      ourSuits: "Nos Suites",
      suitsSubtitle: "Luxe et confort ultimes",
      royalSuite: "Suite Royale",
      desertSuite: "Suite Désert",
      luxurySuite: "Suite de Luxe",
      suiteDescription: "Savourez l'expérience de luxe ultime avec nos suites exclusives",
      
      // Eco Section
      ecoFriendly: "Écologique",
      ecoSubtitle: "Engagés pour la durabilité",
      ecoDescription: "Notre écolodge est construit avec des matériaux et des pratiques durables, garantissant un impact minimal sur l'environnement tout en offrant un confort maximal.",
      
      // Desert Banner
      desertExperience: "Expérience Désertique",
      desertSubtitle: "Immergez-vous dans la magie du Sahara",
      desertDescription: "Vivez la beauté époustouflante du désert avec des visites guidées, des balades à dos de chameau et l'observation des étoiles sous le ciel clair du désert.",
      
      // Footer
      contactUs: "Contactez-nous",
      address: "Adresse",
      phone: "Téléphone",
      email: "Email",
      followUs: "Suivez-nous",
      quickLinks: "Liens Rapides",
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions d'Utilisation",
      allRightsReserved: "Tous Droits Réservés",
      
      // Reservation Form
      makeReservation: "Faire une Réservation",
      checkIn: "Arrivée",
      checkOut: "Départ",
      guests: "Voyageurs",
      adults: "Adultes",
      children: "Enfants",
      roomType: "Type de Chambre",
      specialRequests: "Demandes Spéciales",
      confirmBooking: "Confirmer la Réservation",
      bookingSuccess: "Réservation Confirmée !",
      bookingMessage: "Merci d'avoir choisi notre écolodge. Nous avons hâte de vous accueillir !",
      exploreOurBlog: "Découvrez notre Blog",
      
      // Hero Section
      unwindInDreamy: "Détendez-vous dans un",
      desertHaven: "Havre Désertique",
      indulgeInEssence: "Savourez l'essence de l'élégance désertique en découvrant la beauté époustouflante et la sérénité de notre Écolodge Saharien.",
      reservation: "Réservation",
      
      // About Us Section
      aboutUs: "À Propos de Nous",
      discoverOurStory: "Découvrez Notre Histoire",
      aboutSubtitle: "Vivez le mélange parfait de luxe et de nature dans notre oasis désertique",
      aboutDescription: "Nichée au cœur du désert du Sahara, notre écolodge offre un mélange unique d'hospitalité berbère traditionnelle et de luxe moderne. Chaque détail a été soigneusement conçu pour offrir une expérience désertique authentique tout en assurant votre confort absolu.",
      learnMore: "En Savoir Plus",
      
      // Hotel Banner
      welcomeToParadise: "Bienvenue au Paradis",
      hotelBannerSubtitle: "Où le luxe rencontre le désert",
      
      // Services Section
      ourServices: "Nos Services",
      servicesSubtitle: "Tout ce dont vous avez besoin pour un séjour parfait",
      spaWellness: "Spa & Bien-être",
      spaDescription: "Régénérez votre corps et votre esprit avec nos soins spa traditionnels",
      guidedTours: "Visites Guidées",
      toursDescription: "Explorez le désert avec nos guides locaux expérimentés",
      diningExperience: "Expérience Culinaire",
      diningDescription: "Savourez une cuisine locale authentique dans notre restaurant élégant",
      adventureActivities: "Activités d'Aventure",
      adventureDescription: "Vivez des aventures désertiques passionnantes",
      
      // Rooms Section
      ourRooms: "Nos Chambres",
      roomsSubtitle: "Confort et élégance dans chaque détail",
      standardRoom: "Chambre Standard",
      deluxeRoom: "Chambre Deluxe",
      suite: "Suite",
      presidentialSuite: "Suite Présidentielle",
      roomDescription: "Vivez le confort et le luxe dans nos chambres magnifiquement aménagées",
      bookNow: "Réserver Maintenant",
      from: "à partir de",
      perNight: "par nuit",
      
      // Suits Section
      ourSuits: "Nos Suites",
      suitsSubtitle: "Luxe et confort ultimes",
      royalSuite: "Suite Royale",
      desertSuite: "Suite Désert",
      luxurySuite: "Suite de Luxe",
      suiteDescription: "Savourez l'expérience de luxe ultime avec nos suites exclusives",
      
      // Eco Section
      ecoFriendly: "Écologique",
      ecoSubtitle: "Engagés pour la durabilité",
      ecoDescription: "Notre écolodge est construit avec des matériaux et des pratiques durables, garantissant un impact minimal sur l'environnement tout en offrant un confort maximal.",
      
      // Desert Banner
      desertExperience: "Expérience Désertique",
      desertSubtitle: "Immergez-vous dans la magie du Sahara",
      desertDescription: "Vivez la beauté époustouflante du désert avec des visites guidées, des balades à dos de chameau et l'observation des étoiles sous le ciel clair du désert.",
      
      // Footer
      contactUs: "Contactez-nous",
      address: "Adresse",
      phone: "Téléphone",
      email: "Email",
      followUs: "Suivez-nous",
      quickLinks: "Liens Rapides",
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions d'Utilisation",
      allRightsReserved: "Tous Droits Réservés",
      
      // Reservation Form
      makeReservation: "Faire une Réservation",
      checkIn: "Arrivée",
      checkOut: "Départ",
      guests: "Voyageurs",
      adults: "Adultes",
      children: "Enfants",
      roomType: "Type de Chambre",
      specialRequests: "Demandes Spéciales",
      confirmBooking: "Confirmer la Réservation",
      bookingSuccess: "Réservation Confirmée !",
      bookingMessage: "Merci d'avoir choisi notre écolodge. Nous avons hâte de vous accueillir !",
      
      // Blog Page
      hotelBlog: "Blog de l'Hôtel",
      storiesOfLuxury: "Histoires de Luxe",
      blogSubtitle: "Découvrez le monde de l'hospitalité exceptionnelle à travers notre collection d'histoires, d'aperçus et d'expériences qui définissent le voyage de luxe moderne.",
      searchArticles: "Rechercher des articles...",
      trendingNow: "Tendances Actuelles",
      filterAndSort: "Filtrer & Trier",
      category: "Catégorie",
      sortBy: "Trier par",
      latest: "Plus récent",
      mostPopular: "Plus populaire",
      highestRated: "Mieux noté",
      featuredArticle: "Article en Vedette",
      latestArticles: "Derniers Articles",
      noArticlesFound: "Aucun article trouvé",
      tryAdjustingSearch: "Essayez d'ajuster votre recherche ou vos critères de filtre",
      clearFilters: "Effacer les filtres",
      
      // Blog Stats
      articles: "Articles",
      avgRating: "Note Moyenne",
      totalViews: "Vues Totales",
      categories: "Catégories",
      
      // Newsletter
      stayUpdated: "Restez Informé de Nos Dernières Histoires",
      newsletterSubtitle: "Abonnez-vous à notre newsletter et soyez le premier à découvrir des aperçus exclusifs, des conseils de voyage de luxe et des histoires en coulisses de notre hôtel de classe mondiale.",
      enterEmail: "Entrez votre adresse e-mail",
      subscribe: "S'abonner",
      privacyNotice: "Nous respectons votre vie privée. Désabonnez-vous à tout moment.",
      successfullySubscribed: "Inscription Réussie !",
      thankYouSubscribe: "Merci de vous être abonné à notre newsletter. Vous recevrez nos derniers articles et mises à jour.",
      subscribeAnotherEmail: "S'abonner avec un autre e-mail",
      
      // Newsletter Benefits
      weeklyUpdates: "Mises à jour hebdomadaires",
      weeklyUpdatesDesc: "Recevez nos derniers articles dans votre boîte de réception",
      exclusiveContent: "Contenu exclusif",
      exclusiveContentDesc: "Accès à des articles premium et des conseils d'initiés",
      privacyFirst: "Confidentialité d'abord",
      privacyFirstDesc: "Vos données sont sûres et sécurisées avec nous",
      
      // Blog Categories
      all: "Tout",
      luxuryStays: "Séjours de Luxe",
      dining: "Restaurant",
      spaWellness: "Spa & Bien-être",
      localAttractions: "Attractions Locales",
      
      // Common
      readMore: "Lire la suite",
      views: "vues",
      minRead: "min de lecture",
      featured: "En vedette",
      loading: "Chargement...",
      error: "Erreur",
      success: "Succès",
      cancel: "Annuler",
      save: "Enregistrer",
      edit: "Modifier",
      delete: "Supprimer",
      close: "Fermer",
      open: "Ouvrir",
      search: "Rechercher",
      filter: "Filtrer",
      sort: "Trier",
      view: "Voir",
      add: "Ajouter",
      remove: "Supprimer",
      select: "Sélectionner",
      choose: "Choisir",
      continue: "Continuer",
      back: "Retour",
      next: "Suivant",
      previous: "Précédent",
      finish: "Terminer",
      submit: "Soumettre",
      reset: "Réinitialiser",
      clear: "Effacer",
      apply: "Appliquer",
      confirm: "Confirmer",
      yes: "Oui",
      no: "Non",
            ok: "OK",
      success: "Succès",
      cancel: "Annuler",
      save: "Enregistrer",
      edit: "Modifier",
      delete: "Supprimer",
      close: "Fermer",
      open: "Ouvrir",
      search: "Rechercher",
      filter: "Filtrer",
      sort: "Trier",
      view: "Voir",
      add: "Ajouter",
      remove: "Supprimer",
      select: "Sélectionner",
      choose: "Choisir",
      continue: "Continuer",
      back: "Retour",
      next: "Suivant",
      previous: "Précédent",
      finish: "Terminer",
      submit: "Soumettre",
      reset: "Réinitialiser",
      clear: "Effacer",
      apply: "Appliquer",
      confirm: "Confirmer",
      yes: "Oui",
      no: "Non",
      ok: "OK",
      eleganceInEveryDetail: "Élégance dans Chaque Détail",
      simpleDoubleRooms: "Chambres Simple / Double",
      dunesOasisView: "Vue sur les dunes ou l'oasis",
      surface20m2: "Superficie 20m²",
      hotWater24h: "Eau chaude 24H/24",
      airConditioning24h: "Climatisation chaud/froid 24H/24",
      from200DTPerPerson: "À partir de 200DT/personne\nPetit déjeuner inclus",
      simpleDoubleSuites: "Suites Simple / Double",
      ourRefinedSuites: "Nos Suites Raffinées",
      fullName: "Nom Complet",
      enterFullName: "Entrez votre nom complet",
      emailAddress: "Adresse Email",
      enterEmailAddress: "Entrez votre adresse email",
      phoneNumber: "Numéro de Téléphone",
      visitType: "Type de Visite",
      restAndDiscovery: "Repos et Découverte",
      adventureExpedition: "Expédition d'Aventure",
      reserveNow: "Réserver Maintenant",
      respectingAndProtecting: "Respecter,\net Protéger",
      sustainabilityDescription: "La durabilité n'est pas une fonctionnalité — c'est notre fondation. De l'énergie solaire et zéro plastique à la nourriture cultivée à quelques pas de votre table, chaque moment ici protège l'oasis qui nous entoure.",
      desertsAreFragile: "Les Déserts Sont Fragiles",
      desertsAreFragileDescription: "Malgré leur immensité, les déserts sont des écosystèmes profondément affectés par les perturbations humaines.",
      helpFightDesertification: "Aidez à lutter contre la désertification.",
      preserveRareEcosystem: "Préserver un Écosystème Rare",
      preserveRareEcosystemDescription: "L'écotourisme protège le désert grâce à des actions conscientes des hôtes et des invités.",
      makeStayPositiveImpact: "Faites de votre séjour un impact positif.",
      landFullOfSolutions: "Une Terre Pleine de Solutions",
      landFullOfSolutionsDescription: "Découvrez comment les cultures désertiques gèrent sagement les ressources dans les environnements les plus hostiles.",
      explorePlaceLikeNoOther: "Explorez un endroit unique."
    }
  },
  it: {
    translation: {
      // Navigation
      home: "Home",
      about: "Chi Siamo",
      services: "Servizi",
      rooms: "Camere",
      suits: "Suite",
      contact: "Contatto",
      blog: "Blog",
      exploreOurBlog: "Esplora il Nostro Blog",
      
      // Hero Section
      unwindInDreamy: "Rilassati in un",
      desertHaven: "Rifugio Desertico",
      indulgeInEssence: "Goditi l'essenza dell'eleganza desertica mentre scopri la bellezza mozzafiato e la serenità del nostro Ecolodge Sahariano.",
      reservation: "Prenotazione",
      
      // About Us Section
      aboutUs: "Chi Siamo",
      discoverOurStory: "Scopri la Nostra Storia",
      aboutSubtitle: "Vivi il perfetto mix di lusso e natura nella nostra oasi desertica",
      aboutDescription: "Immerso nel cuore del deserto del Sahara, il nostro ecolodge offre un mix unico di ospitalità berbera tradizionale e lusso moderno. Ogni dettaglio è stato attentamente curato per offrire un'autentica esperienza desertica garantendo il massimo comfort.",
      learnMore: "Scopri di Più",
      
      // Hotel Banner
      welcomeToParadise: "Benvenuto in Paradiso",
      hotelBannerSubtitle: "Dove il lusso incontra il deserto",
      
      // Services Section
      ourServices: "I Nostri Servizi",
      servicesSubtitle: "Tutto quello che ti serve per un soggiorno perfetto",
      spaWellness: "Spa & Benessere",
      spaDescription: "Rigenera corpo e mente con i nostri trattamenti spa tradizionali",
      guidedTours: "Tour Guidati",
      toursDescription: "Esplora il deserto con le nostre guide locali esperte",
      diningExperience: "Esperienza Culinaria",
      diningDescription: "Assapora l'autentica cucina locale nel nostro elegante ristorante",
      adventureActivities: "Attività Avventura",
      adventureDescription: "Vivi emozionanti avventure nel deserto",
      
      // Rooms Section
      ourRooms: "Le Nostre Camere",
      roomsSubtitle: "Comfort ed eleganza in ogni dettaglio",
      standardRoom: "Camera Standard",
      deluxeRoom: "Camera Deluxe",
      suite: "Suite",
      presidentialSuite: "Suite Presidenziale",
      roomDescription: "Vivi comfort e lusso nelle nostre camere splendidamente arredate",
      bookNow: "Prenota Ora",
      from: "da",
      perNight: "per notte",
      
      // Suits Section
      ourSuits: "Le Nostre Suite",
      suitsSubtitle: "Lusso e comfort ultimi",
      royalSuite: "Suite Reale",
      desertSuite: "Suite del Deserto",
      luxurySuite: "Suite di Lusso",
      suiteDescription: "Goditi l'esperienza di lusso ultimo con le nostre suite esclusive",
      
      // Eco Section
      ecoFriendly: "Eco-Friendly",
      ecoSubtitle: "Impegnati per la sostenibilità",
      ecoDescription: "Il nostro ecolodge è costruito con materiali e pratiche sostenibili, garantendo un impatto minimo sull'ambiente offrendo il massimo comfort.",
      
      // Desert Banner
      desertExperience: "Esperienza Desertica",
      desertSubtitle: "Immergiti nella magia del Sahara",
      desertDescription: "Vivi la bellezza mozzafiato del deserto con tour guidati, passeggiate sui cammelli e osservazione delle stelle sotto il cielo limpido del deserto.",
      
      // Footer
      contactUs: "Contattaci",
      address: "Indirizzo",
      phone: "Telefono",
      email: "Email",
      followUs: "Seguici",
      quickLinks: "Link Rapidi",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Termini di Servizio",
      allRightsReserved: "Tutti i Diritti Riservati",
      
      // Reservation Form
      makeReservation: "Fare una Prenotazione",
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Ospiti",
      adults: "Adulti",
      children: "Bambini",
      roomType: "Tipo di Camera",
      specialRequests: "Richieste Speciali",
      confirmBooking: "Conferma Prenotazione",
      bookingSuccess: "Prenotazione Confermata!",
      bookingMessage: "Grazie per aver scelto il nostro ecolodge. Non vediamo l'ora di accoglierti!",
      exploreOurBlog: "Esplora il Nostro Blog",
      
      // Hero Section
      unwindInDreamy: "Rilassati in un",
      desertHaven: "Rifugio Desertico",
      indulgeInEssence: "Goditi l'essenza dell'eleganza desertica mentre scopri la bellezza mozzafiato e la serenità del nostro Ecolodge Sahariano.",
      reservation: "Prenotazione",
      
      // About Us Section
      aboutUs: "Chi Siamo",
      discoverOurStory: "Scopri la Nostra Storia",
      aboutSubtitle: "Vivi il perfetto mix di lusso e natura nella nostra oasi desertica",
      aboutDescription: "Immerso nel cuore del deserto del Sahara, il nostro ecolodge offre un mix unico di ospitalità berbera tradizionale e lusso moderno. Ogni dettaglio è stato attentamente curato per offrire un'autentica esperienza desertica garantendo il massimo comfort.",
      learnMore: "Scopri di Più",
      
      // Hotel Banner
      welcomeToParadise: "Benvenuto in Paradiso",
      hotelBannerSubtitle: "Dove il lusso incontra il deserto",
      
      // Services Section
      ourServices: "I Nostri Servizi",
      servicesSubtitle: "Tutto quello che ti serve per un soggiorno perfetto",
      spaWellness: "Spa & Benessere",
      spaDescription: "Rigenera corpo e mente con i nostri trattamenti spa tradizionali",
      guidedTours: "Tour Guidati",
      toursDescription: "Esplora il deserto con le nostre guide locali esperte",
      diningExperience: "Esperienza Culinaria",
      diningDescription: "Assapora l'autentica cucina locale nel nostro elegante ristorante",
      adventureActivities: "Attività Avventura",
      adventureDescription: "Vivi emozionanti avventure nel deserto",
      
      // Rooms Section
      ourRooms: "Le Nostre Camere",
      roomsSubtitle: "Comfort ed eleganza in ogni dettaglio",
      standardRoom: "Camera Standard",
      deluxeRoom: "Camera Deluxe",
      suite: "Suite",
      presidentialSuite: "Suite Presidenziale",
      roomDescription: "Vivi comfort e lusso nelle nostre camere splendidamente arredate",
      bookNow: "Prenota Ora",
      from: "da",
      perNight: "per notte",
      
      // Suits Section
      ourSuits: "Le Nostre Suite",
      suitsSubtitle: "Lusso e comfort ultimi",
      royalSuite: "Suite Reale",
      desertSuite: "Suite del Deserto",
      luxurySuite: "Suite di Lusso",
      suiteDescription: "Goditi l'esperienza di lusso ultimo con le nostre suite esclusive",
      
      // Eco Section
      ecoFriendly: "Eco-Friendly",
      ecoSubtitle: "Impegnati per la sostenibilità",
      ecoDescription: "Il nostro ecolodge è costruito con materiali e pratiche sostenibili, garantendo un impatto minimo sull'ambiente offrendo il massimo comfort.",
      
      // Desert Banner
      desertExperience: "Esperienza Desertica",
      desertSubtitle: "Immergiti nella magia del Sahara",
      desertDescription: "Vivi la bellezza mozzafiato del deserto con tour guidati, passeggiate sui cammelli e osservazione delle stelle sotto il cielo limpido del deserto.",
      
      // Footer
      contactUs: "Contattaci",
      address: "Indirizzo",
      phone: "Telefono",
      email: "Email",
      followUs: "Seguici",
      quickLinks: "Link Rapidi",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Termini di Servizio",
      allRightsReserved: "Tutti i Diritti Riservati",
      
      // Reservation Form
      makeReservation: "Fare una Prenotazione",
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Ospiti",
      adults: "Adulti",
      children: "Bambini",
      roomType: "Tipo di Camera",
      specialRequests: "Richieste Speciali",
      confirmBooking: "Conferma Prenotazione",
      bookingSuccess: "Prenotazione Confermata!",
      bookingMessage: "Grazie per aver scelto il nostro ecolodge. Non vediamo l'ora di accoglierti!",
      
      // Blog Page
      hotelBlog: "Blog dell'Hotel",
      storiesOfLuxury: "Storie di Lusso",
      blogSubtitle: "Scopri il mondo dell'ospitalità eccezionale attraverso la nostra collezione curata di storie, approfondimenti ed esperienze che definiscono il viaggio di lusso moderno.",
      searchArticles: "Cerca articoli...",
      trendingNow: "Tendenze Attuali",
      filterAndSort: "Filtra & Ordina",
      category: "Categoria",
      sortBy: "Ordina per",
      latest: "Più recenti",
      mostPopular: "Più popolari",
      highestRated: "Meglio valutati",
      featuredArticle: "Articolo in Evidenza",
      latestArticles: "Ultimi Articoli",
      noArticlesFound: "Nessun articolo trovato",
      tryAdjustingSearch: "Prova ad aggiustare la tua ricerca o i criteri di filtro",
      clearFilters: "Cancella filtri",
      
      // Blog Stats
      articles: "Articoli",
      avgRating: "Valutazione Media",
      totalViews: "Visualizzazioni Totali",
      categories: "Categorie",
      
      // Newsletter
      stayUpdated: "Rimani Aggiornato con le Nostre Ultime Storie",
      newsletterSubtitle: "Iscriviti alla nostra newsletter e sii il primo a scoprire approfondimenti esclusivi, consigli di viaggio di lusso e storie dietro le quinte del nostro hotel di classe mondiale.",
      enterEmail: "Inserisci il tuo indirizzo email",
      subscribe: "Iscriviti",
      privacyNotice: "Rispettiamo la tua privacy. Disiscriviti in qualsiasi momento.",
      successfullySubscribed: "Iscrizione Completata!",
      thankYouSubscribe: "Grazie per esserti iscritto alla nostra newsletter. Riceverai i nostri ultimi articoli e aggiornamenti.",
      subscribeAnotherEmail: "Iscriviti con un'altra email",
      
      // Newsletter Benefits
      weeklyUpdates: "Aggiornamenti settimanali",
      weeklyUpdatesDesc: "Ricevi i nostri ultimi articoli nella tua casella di posta",
      exclusiveContent: "Contenuto esclusivo",
      exclusiveContentDesc: "Accesso ad articoli premium e consigli esclusivi",
      privacyFirst: "Privacy prima di tutto",
      privacyFirstDesc: "I tuoi dati sono al sicuro e protetti con noi",
      
      // Blog Categories
      all: "Tutto",
      luxuryStays: "Soggiorni di Lusso",
      dining: "Ristorante",
      spaWellness: "Spa & Benessere",
      localAttractions: "Attrazioni Locali",
      
      // Common
      readMore: "Leggi di più",
      views: "visualizzazioni",
      minRead: "min di lettura",
      featured: "In evidenza",
      loading: "Caricamento...",
      error: "Errore",
      success: "Successo",
      cancel: "Annulla",
      save: "Salva",
      edit: "Modifica",
      delete: "Elimina",
      close: "Chiudi",
      open: "Apri",
      search: "Cerca",
      filter: "Filtra",
      sort: "Ordina",
      view: "Visualizza",
      add: "Aggiungi",
      remove: "Rimuovi",
      select: "Seleziona",
      choose: "Scegli",
      continue: "Continua",
      back: "Indietro",
      next: "Avanti",
      previous: "Precedente",
      finish: "Fine",
      submit: "Invia",
      reset: "Ripristina",
      clear: "Cancella",
      apply: "Applica",
      confirm: "Conferma",
      yes: "Sì",
      no: "No",
            ok: "OK",
      success: "Successo",
      cancel: "Annulla",
      save: "Salva",
      edit: "Modifica",
      delete: "Elimina",
      close: "Chiudi",
      open: "Apri",
      search: "Cerca",
      filter: "Filtra",
      sort: "Ordina",
      view: "Visualizza",
      add: "Aggiungi",
      remove: "Rimuovi",
      select: "Seleziona",
      choose: "Scegli",
      continue: "Continua",
      back: "Indietro",
      next: "Avanti",
      previous: "Precedente",
      finish: "Fine",
      submit: "Invia",
      reset: "Ripristina",
      clear: "Cancella",
      apply: "Applica",
      confirm: "Conferma",
      yes: "Sì",
      no: "No",
      ok: "OK",
      eleganceInEveryDetail: "Eleganza in Ogni Dettaglio",
      simpleDoubleRooms: "Camere Singole / Doppie",
      dunesOasisView: "Vista sulle dune o sull'oasi",
      surface20m2: "Superficie 20m²",
      hotWater24h: "Acqua calda 24H/24",
      airConditioning24h: "Aria condizionata caldo/freddo 24H/24",
      from200DTPerPerson: "A partire da 200DT/persona\nColazione inclusa",
      simpleDoubleSuites: "Suite Singole / Doppie",
      ourRefinedSuites: "Le Nostre Suite Raffinate",
      fullName: "Nome Completo",
      enterFullName: "Inserisci il tuo nome completo",
      emailAddress: "Indirizzo Email",
      enterEmailAddress: "Inserisci il tuo indirizzo email",
      phoneNumber: "Numero di Telefono",
      visitType: "Tipo di Visita",
      restAndDiscovery: "Riposo e Scoperta",
      adventureExpedition: "Spedizione d'Avventura",
      reserveNow: "Prenota Ora",
      respectingAndProtecting: "Rispettare,\ne Proteggere",
      sustainabilityDescription: "La sostenibilità non è una caratteristica — è la nostra fondazione. Dall'energia solare e zero plastica al cibo coltivato a pochi passi dalla tua tavola, ogni momento qui protegge l'oasi che ci circonda.",
      desertsAreFragile: "I Deserti Sono Fragili",
      desertsAreFragileDescription: "Nonostante la loro vastità, i deserti sono ecosistemi profondamente colpiti dal disturbo umano.",
      helpFightDesertification: "Aiuta a combattere la desertificazione.",
      preserveRareEcosystem: "Preservare un Ecosistema Raro",
      preserveRareEcosystemDescription: "L'ecoturismo protegge il deserto attraverso azioni consapevoli sia degli ospiti che degli ospitanti.",
      makeStayPositiveImpact: "Rendi il tuo soggiorno un impatto positivo.",
      landFullOfSolutions: "Una Terra Piena di Soluzioni",
      landFullOfSolutionsDescription: "Scopri come le culture desertiche gestiscono saggiamente le risorse negli ambienti più ostili.",
      explorePlaceLikeNoOther: "Esplora un posto come nessun altro."
    }
  },
  de: {
    translation: {
      // Navigation
      home: "Startseite",
      about: "Über uns",
      services: "Dienstleistungen",
      rooms: "Zimmer",
      suits: "Suiten",
      contact: "Kontakt",
      blog: "Blog",
      exploreOurBlog: "Entdecken Sie unseren Blog",
      
      // Hero Section
      unwindInDreamy: "Entspannen Sie in einer",
      desertHaven: "Wüstenoase",
      indulgeInEssence: "Genießen Sie die Essenz der Wüstenelegance, während Sie die atemberaubende Schönheit und die friedliche Stille unserer Sahara-Ecolodge entdecken.",
      reservation: "Reservierung",
      
      // About Us Section
      aboutUs: "Über uns",
      discoverOurStory: "Entdecken Sie unsere Geschichte",
      aboutSubtitle: "Erleben Sie die perfekte Mischung aus Luxus und Natur in unserer Wüstenoase",
      aboutDescription: "Mitten in der Sahara gelegen, bietet unsere Ecolodge eine einzigartige Mischung aus traditioneller Berber-Gastfreundschaft und modernem Luxus. Jedes Detail wurde sorgfältig gestaltet, um eine authentische Wüstenerfahrung zu bieten und gleichzeitig Ihren höchsten Komfort zu gewährleisten.",
      learnMore: "Mehr erfahren",
      
      // Hotel Banner
      welcomeToParadise: "Willkommen im Paradies",
      hotelBannerSubtitle: "Wo Luxus die Wüste trifft",
      
      // Services Section
      ourServices: "Unsere Dienstleistungen",
      servicesSubtitle: "Alles, was Sie für einen perfekten Aufenthalt brauchen",
      spaWellness: "Spa & Wellness",
      spaDescription: "Regenerieren Sie Körper und Geist mit unseren traditionellen Spa-Behandlungen",
      guidedTours: "Geführte Touren",
      toursDescription: "Entdecken Sie die Wüste mit unseren erfahrenen lokalen Führern",
      diningExperience: "Kulinarische Erfahrung",
      diningDescription: "Genießen Sie authentische lokale Küche in unserem eleganten Restaurant",
      adventureActivities: "Abenteueraktivitäten",
      adventureDescription: "Erleben Sie aufregende Wüstenabenteuer",
      
      // Rooms Section
      ourRooms: "Unsere Zimmer",
      roomsSubtitle: "Komfort und Eleganz in jedem Detail",
      standardRoom: "Standardzimmer",
      deluxeRoom: "Deluxe-Zimmer",
      suite: "Suite",
      presidentialSuite: "Präsidentensuite",
      roomDescription: "Erleben Sie Komfort und Luxus in unseren wunderschön eingerichteten Zimmern",
      bookNow: "Jetzt buchen",
      from: "ab",
      perNight: "pro Nacht",
      
      // Suits Section
      ourSuits: "Unsere Suiten",
      suitsSubtitle: "Ultimativer Luxus und Komfort",
      royalSuite: "Königssuite",
      desertSuite: "Wüstensuite",
      luxurySuite: "Luxussuite",
      suiteDescription: "Genießen Sie die ultimative Luxuserfahrung mit unseren exklusiven Suiten",
      
      // Eco Section
      ecoFriendly: "Umweltfreundlich",
      ecoSubtitle: "Verpflichtet zur Nachhaltigkeit",
      ecoDescription: "Unsere Ecolodge ist mit nachhaltigen Materialien und Praktiken gebaut und gewährleistet minimale Auswirkungen auf die Umwelt bei maximalem Komfort.",
      
      // Desert Banner
      desertExperience: "Wüstenerfahrung",
      desertSubtitle: "Tauchen Sie ein in die Magie der Sahara",
      desertDescription: "Erleben Sie die atemberaubende Schönheit der Wüste mit geführten Touren, Kamelritten und Sternenbeobachtung unter dem klaren Wüstenhimmel.",
      
      // Footer
      contactUs: "Kontaktieren Sie uns",
      address: "Adresse",
      phone: "Telefon",
      email: "E-Mail",
      followUs: "Folgen Sie uns",
      quickLinks: "Schnelllinks",
      privacyPolicy: "Datenschutzrichtlinie",
      termsOfService: "Nutzungsbedingungen",
      allRightsReserved: "Alle Rechte vorbehalten",
      
      // Reservation Form
      makeReservation: "Reservierung machen",
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Gäste",
      adults: "Erwachsene",
      children: "Kinder",
      roomType: "Zimmertyp",
      specialRequests: "Besondere Wünsche",
      confirmBooking: "Buchung bestätigen",
      bookingSuccess: "Buchung bestätigt!",
      bookingMessage: "Vielen Dank, dass Sie unsere Ecolodge gewählt haben. Wir freuen uns darauf, Sie zu begrüßen!",
      exploreOurBlog: "Entdecken Sie unseren Blog",
      
      // Hero Section
      unwindInDreamy: "Entspannen Sie in einer",
      desertHaven: "Wüstenoase",
      indulgeInEssence: "Genießen Sie die Essenz der Wüstenelegance, während Sie die atemberaubende Schönheit und die friedliche Stille unserer Sahara-Ecolodge entdecken.",
      reservation: "Reservierung",
      
      // About Us Section
      aboutUs: "Über uns",
      discoverOurStory: "Entdecken Sie unsere Geschichte",
      aboutSubtitle: "Erleben Sie die perfekte Mischung aus Luxus und Natur in unserer Wüstenoase",
      aboutDescription: "Mitten in der Sahara gelegen, bietet unsere Ecolodge eine einzigartige Mischung aus traditioneller Berber-Gastfreundschaft und modernem Luxus. Jedes Detail wurde sorgfältig gestaltet, um eine authentische Wüstenerfahrung zu bieten und gleichzeitig Ihren höchsten Komfort zu gewährleisten.",
      learnMore: "Mehr erfahren",
      
      // Hotel Banner
      welcomeToParadise: "Willkommen im Paradies",
      hotelBannerSubtitle: "Wo Luxus die Wüste trifft",
      
      // Services Section
      ourServices: "Unsere Dienstleistungen",
      servicesSubtitle: "Alles, was Sie für einen perfekten Aufenthalt brauchen",
      spaWellness: "Spa & Wellness",
      spaDescription: "Regenerieren Sie Körper und Geist mit unseren traditionellen Spa-Behandlungen",
      guidedTours: "Geführte Touren",
      toursDescription: "Entdecken Sie die Wüste mit unseren erfahrenen lokalen Führern",
      diningExperience: "Kulinarische Erfahrung",
      diningDescription: "Genießen Sie authentische lokale Küche in unserem eleganten Restaurant",
      adventureActivities: "Abenteueraktivitäten",
      adventureDescription: "Erleben Sie aufregende Wüstenabenteuer",
      
      // Rooms Section
      ourRooms: "Unsere Zimmer",
      roomsSubtitle: "Komfort und Eleganz in jedem Detail",
      standardRoom: "Standardzimmer",
      deluxeRoom: "Deluxe-Zimmer",
      suite: "Suite",
      presidentialSuite: "Präsidentensuite",
      roomDescription: "Erleben Sie Komfort und Luxus in unseren wunderschön eingerichteten Zimmern",
      bookNow: "Jetzt buchen",
      from: "ab",
      perNight: "pro Nacht",
      
      // Suits Section
      ourSuits: "Unsere Suiten",
      suitsSubtitle: "Ultimativer Luxus und Komfort",
      royalSuite: "Königssuite",
      desertSuite: "Wüstensuite",
      luxurySuite: "Luxussuite",
      suiteDescription: "Genießen Sie die ultimative Luxuserfahrung mit unseren exklusiven Suiten",
      
      // Eco Section
      ecoFriendly: "Umweltfreundlich",
      ecoSubtitle: "Verpflichtet zur Nachhaltigkeit",
      ecoDescription: "Unsere Ecolodge ist mit nachhaltigen Materialien und Praktiken gebaut und gewährleistet minimale Auswirkungen auf die Umwelt bei maximalem Komfort.",
      
      // Desert Banner
      desertExperience: "Wüstenerfahrung",
      desertSubtitle: "Tauchen Sie ein in die Magie der Sahara",
      desertDescription: "Erleben Sie die atemberaubende Schönheit der Wüste mit geführten Touren, Kamelritten und Sternenbeobachtung unter dem klaren Wüstenhimmel.",
      
      // Footer
      contactUs: "Kontaktieren Sie uns",
      address: "Adresse",
      phone: "Telefon",
      email: "E-Mail",
      followUs: "Folgen Sie uns",
      quickLinks: "Schnelllinks",
      privacyPolicy: "Datenschutzrichtlinie",
      termsOfService: "Nutzungsbedingungen",
      allRightsReserved: "Alle Rechte vorbehalten",
      
      // Reservation Form
      makeReservation: "Reservierung machen",
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Gäste",
      adults: "Erwachsene",
      children: "Kinder",
      roomType: "Zimmertyp",
      specialRequests: "Besondere Wünsche",
      confirmBooking: "Buchung bestätigen",
      bookingSuccess: "Buchung bestätigt!",
      bookingMessage: "Vielen Dank, dass Sie unsere Ecolodge gewählt haben. Wir freuen uns darauf, Sie zu begrüßen!",
      
      // Blog Page
      hotelBlog: "Hotel Blog",
      storiesOfLuxury: "Geschichten des Luxus",
      blogSubtitle: "Entdecken Sie die Welt der außergewöhnlichen Gastfreundschaft durch unsere kuratierte Sammlung von Geschichten, Einblicken und Erfahrungen, die modernes Luxusreisen definieren.",
      searchArticles: "Artikel suchen...",
      trendingNow: "Aktuelle Trends",
      filterAndSort: "Filtern & Sortieren",
      category: "Kategorie",
      sortBy: "Sortieren nach",
      latest: "Neueste",
      mostPopular: "Beliebteste",
      highestRated: "Bestbewertete",
      featuredArticle: "Empfohlener Artikel",
      latestArticles: "Neueste Artikel",
      noArticlesFound: "Keine Artikel gefunden",
      tryAdjustingSearch: "Versuchen Sie, Ihre Suche oder Filterkriterien anzupassen",
      clearFilters: "Filter löschen",
      
      // Blog Stats
      articles: "Artikel",
      avgRating: "Durchschnittsbewertung",
      totalViews: "Gesamtansichten",
      categories: "Kategorien",
      
      // Newsletter
      stayUpdated: "Bleiben Sie auf dem Laufenden mit unseren neuesten Geschichten",
      newsletterSubtitle: "Abonnieren Sie unseren Newsletter und seien Sie der Erste, der exklusive Einblicke, Luxus-Reisetipps und Geschichten hinter den Kulissen unseres erstklassigen Hotels entdeckt.",
      enterEmail: "Geben Sie Ihre E-Mail-Adresse ein",
      subscribe: "Abonnieren",
      privacyNotice: "Wir respektieren Ihre Privatsphäre. Abbestellen Sie jederzeit.",
      successfullySubscribed: "Erfolgreich abonniert!",
      thankYouSubscribe: "Vielen Dank für Ihr Abonnement unseres Newsletters. Sie erhalten unsere neuesten Artikel und Updates.",
      subscribeAnotherEmail: "Mit einer anderen E-Mail abonnieren",
      
      // Newsletter Benefits
      weeklyUpdates: "Wöchentliche Updates",
      weeklyUpdatesDesc: "Erhalten Sie unsere neuesten Artikel in Ihrem Posteingang",
      exclusiveContent: "Exklusiver Inhalt",
      exclusiveContentDesc: "Zugang zu Premium-Artikeln und Insider-Tipps",
      privacyFirst: "Datenschutz zuerst",
      privacyFirstDesc: "Ihre Daten sind bei uns sicher und geschützt",
      
      // Blog Categories
      all: "Alle",
      luxuryStays: "Luxus-Aufenthalte",
      dining: "Restaurant",
      spaWellness: "Spa & Wellness",
      localAttractions: "Lokale Sehenswürdigkeiten",
      
      // Common
      readMore: "Weiterlesen",
      views: "Ansichten",
      minRead: "Min. Lesezeit",
      featured: "Empfohlen",
      loading: "Laden...",
      error: "Fehler",
      success: "Erfolg",
      cancel: "Abbrechen",
      save: "Speichern",
      edit: "Bearbeiten",
      delete: "Löschen",
      close: "Schließen",
      open: "Öffnen",
      search: "Suchen",
      filter: "Filtern",
      sort: "Sortieren",
      view: "Anzeigen",
      add: "Hinzufügen",
      remove: "Entfernen",
      select: "Auswählen",
      choose: "Wählen",
      continue: "Weiter",
      back: "Zurück",
      next: "Weiter",
      previous: "Vorherige",
      finish: "Beenden",
      submit: "Absenden",
      reset: "Zurücksetzen",
      clear: "Löschen",
      apply: "Anwenden",
      confirm: "Bestätigen",
      yes: "Ja",
      no: "Nein",
            ok: "OK",
      success: "Erfolg",
      cancel: "Abbrechen",
      save: "Speichern",
      edit: "Bearbeiten",
      delete: "Löschen",
      close: "Schließen",
      open: "Öffnen",
      search: "Suchen",
      filter: "Filtern",
      sort: "Sortieren",
      view: "Anzeigen",
      add: "Hinzufügen",
      remove: "Entfernen",
      select: "Auswählen",
      choose: "Wählen",
      continue: "Weiter",
      back: "Zurück",
      next: "Weiter",
      previous: "Vorherige",
      finish: "Beenden",
      submit: "Absenden",
      reset: "Zurücksetzen",
      clear: "Löschen",
      apply: "Anwenden",
      confirm: "Bestätigen",
      yes: "Ja",
      no: "Nein",
      ok: "OK",
      eleganceInEveryDetail: "Eleganz in Jedes Detail",
      simpleDoubleRooms: "Einzel- / Doppelzimmer",
      dunesOasisView: "Blick auf Dünen oder Oase",
      surface20m2: "Fläche 20m²",
      hotWater24h: "Warmwasser 24H/24",
      airConditioning24h: "Klimaanlage warm/kalt 24H/24",
      from200DTPerPerson: "Ab 200DT/Person\nFrühstück inklusive",
      simpleDoubleSuites: "Einzel- / Doppelsuiten",
      ourRefinedSuites: "Unsere Verfeinerten Suiten",
      fullName: "Vollständiger Name",
      enterFullName: "Geben Sie Ihren vollständigen Namen ein",
      emailAddress: "E-Mail-Adresse",
      enterEmailAddress: "Geben Sie Ihre E-Mail-Adresse ein",
      phoneNumber: "Telefonnummer",
      visitType: "Besuchstyp",
      restAndDiscovery: "Ruhe und Entdeckung",
      adventureExpedition: "Abenteuer-Expedition",
      reserveNow: "Jetzt Reservieren",
      respectingAndProtecting: "Respektieren,\nund Schützen",
      sustainabilityDescription: "Nachhaltigkeit ist kein Feature — es ist unser Fundament. Von Solarenergie und null Plastik bis hin zu Lebensmitteln, die nur wenige Schritte von Ihrem Tisch entfernt angebaut werden, schützt jeder Moment hier die Oase um uns herum.",
      desertsAreFragile: "Wüsten Sind Zerbrechlich",
      desertsAreFragileDescription: "Trotz ihrer Weite sind Wüsten Ökosysteme, die tiefgreifend von menschlichen Störungen betroffen sind.",
      helpFightDesertification: "Helfen Sie bei der Bekämpfung der Wüstenbildung.",
      preserveRareEcosystem: "Ein Seltenes Ökosystem Erhalten",
      preserveRareEcosystemDescription: "Ökotourismus schützt die Wüste durch bewusste Handlungen sowohl von Gastgebern als auch von Gästen.",
      makeStayPositiveImpact: "Machen Sie Ihren Aufenthalt zu einem positiven Einfluss.",
      landFullOfSolutions: "Ein Land Voll von Lösungen",
      landFullOfSolutionsDescription: "Entdecken Sie, wie Wüstenkulturen Ressourcen weise in den härtesten Umgebungen verwalten.",
      explorePlaceLikeNoOther: "Erkunden Sie einen Ort wie keinen anderen."
    }
  }
};

// Language detection
const getLanguage = () => {
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('language');
    if (savedLang && resources[savedLang]) {
      return savedLang;
    }
    
    const browserLang = navigator.language.split('-')[0];
    if (resources[browserLang]) {
      return browserLang;
    }
  }
  return 'en';
};

// Create i18n context
const I18nContext = createContext();

// i18n provider component
export const I18nProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(getLanguage());

  const changeLanguage = (language) => {
    if (resources[language]) {
      setCurrentLanguage(language);
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', language);
      }
    }
  };

  const t = (key) => {
    return resources[currentLanguage]?.translation[key] || resources.en.translation[key] || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    resources
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

// Custom hook to use i18n
export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};

// Get available languages
export const getAvailableLanguages = () => {
  return [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    // { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];
};

// Export changeLanguage function for backward compatibility
export const changeLanguage = (language) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', language);
  }
};
