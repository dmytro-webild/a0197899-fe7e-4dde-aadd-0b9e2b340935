"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Facebook, Instagram, MessageSquare, CheckCircle, PenTool, Truck, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="medium"
        background="blurBottom"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Our Bowls",          id: "#products"},
        {
          name: "Menu & Prices",          id: "#pricing"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      button={{
        text: "Order Online",        href: "#products"}}
      brandName="Oké Poké Bowl"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Fresh & Flavorful Poké Bowls in Casablanca"
      description="Experience the taste of Hawaii with a Moroccan twist. Customizable, healthy, and incredibly delicious poké bowls delivered to your door."
      testimonials={[
        {
          name: "Amina B.",          handle: "@CasablancaEats",          testimonial: "Oké Poké Bowl is my go-to for a healthy and delicious lunch! The ingredients are always fresh, and I love creating my own unique combinations.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-wearing-eyeglasses-taking-selfie-from-mobile-phone-restaurant_23-2147871308.jpg",          imageAlt: "Customer Amina B."},
        {
          name: "Youssef M.",          handle: "@FoodieCasablanca",          testimonial: "The best poké bowls in Casablanca, hands down! The sauces are incredible, and the portions are generous. Highly recommend the spicy tuna!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-enjoying-food-restaurant_23-2149269179.jpg",          imageAlt: "Customer Youssef M."},
        {
          name: "Fatima Z.",          handle: "@HealthyHabits",          testimonial: "Finally, a place where healthy eating doesn't mean compromising on taste. Oké Poké Bowl helps me stick to my diet without getting bored.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-eating-salmon-bowl_23-2150533967.jpg",          imageAlt: "Customer Fatima Z."},
        {
          name: "Omar L.",          handle: "@CasablancaExplorer",          testimonial: "Quick, fresh, and consistently good. The staff is always friendly, and the ordering process is super easy. A must-try in Casablanca!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/person-happy-woman-clanging-glasses-wine-table-cafe_23-2148016787.jpg",          imageAlt: "Customer Omar L."},
        {
          name: "Sara H.",          handle: "@GourmetMorocco",          testimonial: "From the vibrant colors to the incredible flavors, every bowl is a work of art. Oké Poké Bowl offers a truly elevated fast-casual dining experience.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-cheering-with-wine-glasses-luxurious-restaurant_23-2150517422.jpg",          imageAlt: "Customer Sara H."},
      ]}
      buttons={[
        {
          text: "Order Now",          href: "#products"},
        {
          text: "View Menu",          href: "#pricing"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/pretty-woman-blue-clothes-smiling_23-2148055977.jpg",          alt: "Customer 1"},
        {
          src: "http://img.b2bpic.net/free-photo/young-blonde-woman-with-white-t-shirt_273609-7217.jpg",          alt: "Customer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/vertical-picture-business-woman-with-folder-hand_171337-16601.jpg",          alt: "Customer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/excited-joyful-beautiful-woman-gesturing-with-hand_74855-2753.jpg",          alt: "Customer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-young-brunette-caucasian-girl-stands-with-closed-eyes-isolated-green-background-with-copy-space_141793-66903.jpg",          alt: "Customer 5"},
      ]}
      avatarText="Loved by over 1000+ customers!"
      imageSrc="http://img.b2bpic.net/free-photo/assortment-healthy-sea-food_23-2148926809.jpg"
      imageAlt="Fresh and colorful Poké Bowl"
      textPosition="bottom"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Our Passion for Freshness"
      description="At Oké Poké Bowl, we believe in fresh, high-quality ingredients. We source local produce whenever possible and combine it with the vibrant flavors of Hawaiian poké, crafted with care for our Casablanca community. Every bowl is a celebration of taste and health."
      buttons={[
        {
          text: "Discover Our Story",          href: "#"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-taking-green-salad-with-herbs-vegetables_114579-2166.jpg"
      imageAlt="Chef preparing fresh ingredients for a poké bowl"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Fresh, Quality Ingredients",          description: "We hand-pick the freshest fish and vegetables daily to ensure every bite is bursting with flavor and nutrients.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-fruit-composition-with-french-macarons-light-pink-surface_140725-65947.jpg",          imageAlt: "Assortment of fresh vegetables",          buttonIcon: CheckCircle,
        },
        {
          title: "Endless Customization",          description: "With a variety of bases, proteins, and toppings, you're the chef! Design a bowl that perfectly matches your taste and dietary needs.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-female-hands-cutting-apricot-with-knife-cherries-cutting-board-with-pattern-pears-peach-apricots-coconut-wooden-background_141793-25322.jpg",          imageAlt: "Hands adding toppings to a poké bowl",          buttonIcon: PenTool,
        },
        {
          title: "Fast & Convenient Delivery",          description: "Enjoy your customized poké bowl delivered right to your doorstep, fresh and ready to eat, wherever you are in Casablanca.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-friends-with-pizza_23-2149872393.jpg",          imageAlt: "Food delivery scooter on a street",          buttonIcon: Truck,
        },
        {
          title: "Healthy & Delicious",          description: "Our bowls are packed with lean protein, healthy fats, and essential vitamins, making them the perfect guilt-free meal.",          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salads-wooden-surface-top-view_176474-219.jpg",          imageAlt: "Variety of healthy food bowls",          buttonIcon: Heart,
        },
      ]}
      title="Craft Your Perfect Bowl"
      description="Choose from a wide array of fresh fish, vibrant vegetables, delicious sauces, and crunchy toppings to create a poké bowl that's uniquely yours. Healthy, delicious, and made just the way you like it."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          brand: "Classic",          name: "Salmon Delight Bowl",          price: "95 MAD",          rating: 5,
          reviewCount: "250",          imageSrc: "http://img.b2bpic.net/free-photo/poke-bowl-with-rice-salmon-cucumber-mango-onion-wakame-salad-poppy-seeds-ands-sunflowers-seeds_123827-22756.jpg",          imageAlt: "Classic salmon poké bowl"},
        {
          id: "2",          brand: "Spicy",          name: "Volcano Tuna Bowl",          price: "105 MAD",          rating: 4,
          reviewCount: "180",          imageSrc: "http://img.b2bpic.net/free-photo/colorful-poke-bowl-with-tuna-rice-cucumbers-tomatoes-avocado_9975-124891.jpg",          imageAlt: "Spicy tuna poké bowl"},
        {
          id: "3",          brand: "Protein",          name: "Grilled Chicken Power",          price: "85 MAD",          rating: 4,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/rice-bowls-with-vegetables-seafood_23-2148259264.jpg",          imageAlt: "Grilled chicken poké bowl"},
        {
          id: "4",          brand: "Veggie",          name: "Garden Tofu Bowl",          price: "75 MAD",          rating: 5,
          reviewCount: "90",          imageSrc: "http://img.b2bpic.net/free-photo/vegan-salad-with-tofu-cucumber-sesame-served-plate-closeup_1220-7044.jpg",          imageAlt: "Vegetarian tofu poké bowl"},
        {
          id: "5",          brand: "Seafood",          name: "Shrimp Sensation",          price: "110 MAD",          rating: 5,
          reviewCount: "150",          imageSrc: "http://img.b2bpic.net/free-photo/hawaiian-poke-bowl-with-salmon-bowl-with-seaweed-sesame-seeds-cabbage-top-view-flat-lay-banner_127032-2490.jpg",          imageAlt: "Shrimp poké bowl"},
        {
          id: "6",          brand: "Fusion",          name: "Dynamite Eel Bowl",          price: "120 MAD",          rating: 4,
          reviewCount: "75",          imageSrc: "http://img.b2bpic.net/free-photo/man-eating-poke_1268-21960.jpg",          imageAlt: "Sushi burrito style poké bowl"},
      ]}
      title="Our Signature Bowls"
      description="Explore our most popular and deliciously curated poké bowl combinations, crafted by our chefs with the perfect balance of flavors and textures."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "small",          title: "Small Bowl",          price: "70 MAD",          period: "Perfect for a light meal",          features: [
            "1 Base, 1 Protein",            "2 Toppings, 1 Sauce",            "Fresh & Light"],
          button: {
            text: "Select Small",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/plastic-bowl-tasty-seafood-salad-with-rice-edamame-beans_181624-36328.jpg",          imageAlt: "Small poké bowl"},
        {
          id: "medium",          title: "Medium Bowl",          price: "90 MAD",          period: "Our most popular size",          features: [
            "1 Base, 2 Proteins",            "3 Toppings, 2 Sauces",            "Satisfying & Complete"],
          button: {
            text: "Select Medium",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/hawaiian-poke-bowl-with-salmon-bowl-with-seaweed-sesame-seeds-cabbage-top-view-flat-lay-banner_127032-2486.jpg",          imageAlt: "Medium poké bowl"},
        {
          id: "large",          price: "120 MAD",          period: "Generous for big appetites",          features: [
            "2 Bases, 2 Proteins",            "4 Toppings, 2 Sauces",            "Feast Size"],
          button: {
            text: "Select Large",            href: "#contact"},
          title: "Large Bowl",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-salmon-bowl-indoors_23-2150533977.jpg",          imageAlt: "Large poké bowl"},
      ]}
      title="Menu & Customization Options"
      description="Choose your perfect size and explore our add-ons. Every bowl is made to order with your preferences in mind, ensuring a fresh and satisfying experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          handle: "Health Enthusiast",          testimonial: "The best poké I've had outside of Hawaii! So fresh, so flavorful, and the portions are perfect. A true gem in Casablanca.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/good-humoured-caucasian-woman-enjoying-healthy-food-indoor-shot-smiling-girl-eating-salad_197531-17196.jpg",          imageAlt: "Sarah J."},
        {
          id: "2",          name: "Ahmed K.",          handle: "Local Foodie",          testimonial: "I'm obsessed with their build-your-own options. Every time I visit, I try something new and it's always fantastic.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-eating-restaurant_23-2148006700.jpg",          imageAlt: "Ahmed K."},
        {
          id: "3",          name: "Leila B.",          handle: "Working Professional",          testimonial: "Quick delivery and consistently high quality. Oké Poké Bowl makes my busy workdays so much easier with their delicious and healthy meals.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-eating-poke_1268-21964.jpg",          imageAlt: "Leila B."},
        {
          id: "4",          name: "Karim R.",          handle: "Fitness Coach",          testimonial: "As a fitness coach, I'm always looking for healthy protein-packed meals. Oké Poké Bowl delivers exactly that without sacrificing taste.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1676.jpg",          imageAlt: "Karim R."},
        {
          id: "5",          name: "Nadia S.",          handle: "Student",          testimonial: "Affordable, delicious, and fresh! It's my favorite spot for a quick and satisfying meal between classes. The staff is super friendly too.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-friends-night-having-dinner_23-2149190958.jpg",          imageAlt: "Nadia S."},
      ]}
      showRating={true}
      title="What Our Customers Say"
      description="Our community in Casablanca loves the fresh flavors and healthy options at Oké Poké Bowl. Read some of their amazing feedback!"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "What kind of fish do you use?",          content: "We use only the freshest, sushi-grade tuna and salmon, sourced from trusted suppliers daily to ensure the highest quality and safety."},
        {
          id: "2",          title: "Can I customize my bowl?",          content: "Absolutely! Our menu is designed for full customization. Choose your base, protein, toppings, and sauces to create your perfect poké bowl."},
        {
          id: "3",          title: "Do you offer vegetarian/vegan options?",          content: "Yes, we have a variety of plant-based options including tofu as a protein, and a wide selection of fresh vegetables and vegan-friendly sauces."},
        {
          id: "4",          title: "What are your delivery areas?",          content: "We offer delivery across most of Casablanca. You can check if we deliver to your specific location by entering your address on our ordering page."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/group-graphic-designers-interacting-with-each-other_1170-770.jpg"
      imageAlt="Person looking at a healthy food menu"
      mediaAnimation="opacity"
      title="Frequently Asked Questions"
      description="Have questions about our ingredients, ordering process, or delivery? Find quick answers here!"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Get in Touch"
      title="Visit Us or Get in Touch"
      description="Located in the heart of Casablanca, we're ready to serve you the freshest poké bowls. Contact us for catering, special requests, or just to say hello! Our team is happy to assist."
      imageSrc="http://img.b2bpic.net/free-photo/person-traveling-trought-city_23-2149297296.jpg"
      imageAlt="Map showing Oké Poké Bowl location in Casablanca"
      mediaAnimation="opacity"
      inputPlaceholder="Your email address"
      buttonText="Send Message"
      termsText="By clicking Send Message you agree to our Privacy Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Oké Poké Bowl"
      copyrightText="© 2024 Oké Poké Bowl. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",          ariaLabel: "Facebook"},
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
        {
          icon: MessageSquare,
          href: "#",          ariaLabel: "WhatsApp"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
