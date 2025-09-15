import { headers } from "next/headers";
import Hero from "@/components/Hero/Hero";
import TextImage from "@/components/TextImage/TextImage";

type Theme = "navy" | "light-grey" | "light-green" | "yellow" | "white" | "pink";

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

interface PageContent {
  hero: Hero;
  textImage: TextImage;
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
  }
}

export default function Page() {
  return (
    <section>
      <div className="page" style={{minHeight: "300vh"}}>
        <Hero
          title={pageContent.hero.title}
          subtitle={pageContent.hero.subtitle}
        />
        <TextImage
          theme={pageContent.textImage.theme}
          content={pageContent.textImage.content}
          image={{...pageContent.textImage.image}}
        />
      </div>
    </section>
  )
}
