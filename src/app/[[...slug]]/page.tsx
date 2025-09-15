import { headers } from "next/headers";
import Hero from "@/components/Hero/Hero";
import TextImage from "@/components/TextImage/TextImage";
import ButtonProps from '@/fragments/Button'
import Carousel from "@/components/Carousel/Carousel";

type Theme = "navy" | "light-grey" | "lime-green" | "yellow" | "white" | "paradise-pink";

interface ImageSources {[key: string]: string};

interface Image {
  sources: ImageSources;
  alt?: string;
  caption?: string;
}

interface Hero {
  title: string;
  subtitle: string;
}

interface TextImage {
  theme: Theme;
  content: string;
  image: Image;
}

type Item = {
	image: {
		sources: {[key: string]: string};
		alt?: string;
		caption?: string;
	},
	title: string;
	caption: string;
}

interface Carousel {
  theme: Theme;
  notch: boolean;
  maxPerView: 2 | 3 | 4;
	items: Item[];
	heading: string;
	cta: typeof ButtonProps | null;
}

interface PageContent {
  hero: Hero;
  textImage: TextImage;
  carousel1: Carousel;
  carousel2: Carousel;
}

const pageContent: PageContent = {
  hero: {
    title: "Physiocare Melton",
    subtitle: "Leaders in physiotherapy and sports medicine",
  },
  textImage: {
    theme: "yellow",
    content: "We lead the way when it comes to range, quality and expertise.",
    image: {
      sources: {
        1280: "/assets/Clientname-Fitness-consultation-in-gym-2x.webp",
        base: "/assets/Clientname-Fitness-consultation-in-gym.webp"
      },
      alt: "Fitness consultation in the gym."
    }
  },
  carousel1: {
    theme: "white",
    notch: false,
    maxPerView: 4,
    items: [
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 1",
        caption: "Lorem ipsum",
      },
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 2",
        caption: "Lorem ipsum",
      },
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 3",
        caption: "Lorem ipsum",
      },
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 4",
        caption: "Lorem ipsum",
      },
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 5",
        caption: "Lorem ipsum",
      },
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 6",
        caption: "Lorem ipsum",
      },
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 7",
        caption: "Lorem ipsum",
      },
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 8",
        caption: "Lorem ipsum",
      },
    ],
    heading: "Placeholder heading",
    cta: null
  },
  carousel2: {
    theme: "light-grey",
    notch: true,
    maxPerView: 3,
    items: [
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 1",
        caption: "Lorem ipsum",
      },
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 2",
        caption: "Lorem ipsum",
      },
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 3",
        caption: "Lorem ipsum",
      },
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 4",
        caption: "Lorem ipsum",
      },
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 5",
        caption: "Lorem ipsum",
      },
      {
        image: {
          sources: { base: "/assets/placeholder.webp" },
          alt: "Placeholder image.",
        },
        title: "Lorem 6",
        caption: "Lorem ipsum",
      },
    ],
    heading: "Placeholder heading",
    cta: null
  }
}

export default function Page() {
  return (
    <section>
      <div className="page">
        <Hero
          title={pageContent.hero.title}
          subtitle={pageContent.hero.subtitle}
        />
        <TextImage
          theme={pageContent.textImage.theme}
          content={pageContent.textImage.content}
          image={{...pageContent.textImage.image}}
        />
        <Carousel
          theme={pageContent.carousel1.theme}
          notch={pageContent.carousel1.notch}
          maxPerView={pageContent.carousel1.maxPerView}
          items={pageContent.carousel1.items}
          heading={pageContent.carousel1.heading}
          cta={pageContent.carousel1.cta}
        />
        <Carousel
          theme={pageContent.carousel2.theme}
          notch={pageContent.carousel2.notch}
          maxPerView={pageContent.carousel2.maxPerView}
          items={pageContent.carousel2.items}
          heading={pageContent.carousel2.heading}
          cta={pageContent.carousel2.cta}
        />
      </div>
    </section>
  )
}
