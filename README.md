# Activity two brief
Take the design in the link below and create a response landing page, all images
included in the Figma design to create the landing page and Lato Google Web Font
should be used.

It is up to you how far you go with the design but we’ll be looking at the following:
— How responsiveness has been handled
— User interaction states on elements
— Has the page been coded in a way that it can be extended upon down the
track
— Any extra effects or polish on the final page

To be clear, we do NOT require the end product to be pixel perfect to the design. We
also won’t be going crazy with browser testing at this point. As long as it looks fine
in Chrome and Edge, don’t spend much time going further than that.

https://coding-exercise-two.vercel.app/

# Activity Two Notes
*Time on task: 4 hours experimenting with the right build setup as a starting point reviewing and trying different boilerplates, 15 hours build*

### Opening thoughts

Thanks for reading my notes & rationale for Exercise Two. My approach to the task was shaped by one thought: “I should perform the task in a manner which is realistic for a real-world scenario”. With that thought in mind, I decided I would want to write SCSS and reuse parts of the design system, which led me to think it made sense to build my response as a Next app, broken down as reusable components with a proper build workflow.

To this end, I combined two boilerplate structures from both a basic `create-next-app` and another starter example from the Vercel repository to scaffold the Next project. From there, I have built out custom Components, Fragments, Hooks and as much of a design system approach as I could in a limited amount of time.

Hopefully I haven’t gone too overboard 😉

### Highlights:

- Scaffolded on a functional Next app to replicate a real-world build structure and approach
- Navigation Scroll state: created my own solution for this with a lozenge background that fades in on scroll
- Buttons: Created an extensible button with Icon and no-Icon variants and a custom hover animation
- Layout from scratch: No grid system or CSS framework. I typically work faster with my own system or none at all, as the constraints of a CSS framework or UI kit can sometimes become cumbersome unless the site is designed with the UI kit in mind. I always lay out columns with my own use of spacing tokens and CSS Grid or Flex.
- Scroll animations ***without*** GSAP
- Custom mobile menu: unique design chosen for the challenge. Further challenge was to make this work visually when the lozenge is not yet visible.
- CSS-only Carousel: this popped into my head during Exercise One thinking about developing the page with JS libraries… so I decided to build the skeleton of it as well!
- Beginnings of an extensible design system with:
    - Fluid TypeScale tokens
    - Fluid Spacing tokens
    - Extensible fragments
    - Colour Themes
    - Etc

### Key Notes:

- Only tested in Chrome/Edge on Mac with device preview on a range of tablet/mobile viewports
- I have built the design system on [Utopia.fyi](http://Utopia.fyi) fluid design tokens. The typical approach is to create the design tokens and import into Figma at the start of the design phase, so the design tokens from Utopia don’t always align well with the spacings in the design file. So expect some minor differences in the designs especially in terms of actual font sizes and spacings.
- I have interpreted the design file in light of these slight differences between my font/spacing tokens, with an overall ideal of preserving the design intent and ensuring graceful responsive behavior.
- In 2025 it’s necessary to talk about TailWind in this kind of scenario. While I know it, I don’t use TailWind usually. This is for a couple of reasons:
    - Maintainability: Without semantic classnames using TailWind **@apply**, the Dom can be harder to debug and target with tracking. Likewise scattered but consistent helper classes (such as paddings) can be troublesome to replace at scale if globally applied properties need to be revised across a number of components.
    - CSS Knowledge: I find TailWind leads to developers who don’t understand CSS fundamentals (such as even the most basic things like the Box Model!), leading to developers who struggle to debug their own code because they don’t fundamentally understand the language they’re manipulating via TailWind. I prefer to hone and improve my craft rather than rely on TailWind.
    - Modern CSS: I also find that too much is lacking from TailWind in terms of modern fluid CSS, which requires a lot of scaffolding to facilitate. For me it’s far quicker to just write pure CSS as SCSS and achieve full control over my Dom.
- I was inspired by the Umbraco website to try a solid lozenge style navigation on scroll. This dictated some changes to spacings around the navigation, notably I made the eventual decision *not* to align the header logo to the baseline as per the designs. This is not a liberty I would take without consultation usually.
- JS Library replacements:
    - Scroll Animations: In place of a traditional approach using something like GSAP, I created a basic intersection-observer scroll animation trigger, used via a custom Hook wrapper.
    - Text Fade by Word: Quite happy with this one built from scratch! Again in place of GSAP functions to achieve text transitions by word, I emulated this effect with another custom coded Hook to wrap words in spans with CSS transitions applied.
    - Carousel: When I started Exercise One, I assumed that the second exercise would be to build the entire page design from Exercise One, so as I was working through my thoughts for that exercise I was already imagining building a predominantly CSS-based carousel using CSS custom properties. So… I built the basics of this component too as a thought exercise, but obviously since this was beyond the scope of this task I have only done the bare minimum of this component.
- Other tweaks:
    - I didn’t get into inspecting color contrasts on elements in Exercise One, so I failed to recognise that the Green buttons did not have sufficient contrast ratio for AA or AAA. Therefore in build I’ve changed the text/icon colour accordingly.
    - Buttons with Icon: I got an idea for a unique hover animation for the buttons with icon, so I created the button with the Calendar icon similar to the Exercise One artwork. The spacing is different to accomodate the hover animation. This animation is completely my own inspiration, I can’t recall whether this might have been inspired by something I’ve seen before. It could well have been, but in this instance the animation and therefore CSS has come 100% from the top of my head.
    - I referred to a pulse text hover animation in Exercise One, so I have again made something completely off the top of my head here. I’m not convinced the result is objectively *good*, but I left it in because it’s something completely unique that I just came up with and created an interesting solution to achieve the effect.
    - Mobile Nav: I had a couple of concepts for the mobile menu, but I decided to go with the more unique and more complex, albeit less attractive, version for the build. This again is something completely unique I thought of after creating the lozenge design for the navigation. The result isn’t a great design, but it was something unique with some interesting challenges to achieve with mainly CSS, so it felt like something good to implement to demonstrate problem solving and CSS math capabilities.

### ‘Next’ steps

- Given the rapid work to build out the design system, I’ve certainly gotten to the point that a refactor would be justified to simplify some things, especially:
    - Header structure: this became over-complicated over time for a couple of reasons, it all works really well but I can certainly see a few things I would fix up to simplify the CSS structure and remove some of the complex selector combinations required to create all the scroll/mobile-menu transitions.
    - Dynamic header height: I typically try to make navs conform to the height of their inner elements rather than having a set height, which has added complexity to some of the aspects of the mobile menu animations. This would benefit greatly from a refactor with an explicit height, to greatly simplify some of the CSS math gymnastics that was necessary. I decided *not* to refactor this mid-development simply to challenge myself to achieve the desired result in spite of this.
- TypeScript: Opting for TypeScript on a quick build began to feel like a mistake part way through, but once most Types were established I did see many benefits in speed as I went further with the exercise. That said, my Type definitions have been hastily and rather messily put together without much consistency or global types. This is obviously not a good state for the build, but wasn’t the focus of this exercise so I just did the best I could in the time.
- React Consistency: There are several areas I would refactor and improve but again since this wasn’t the focus there is still a bit of alignment and tidying necessary.
- Images are not correctly setup as per Next.js for now
- Carousel incomplete and generates a few build warnings currently
- Few other misc build warnings I would need to eliminate including SCSS @import

### Use of AI

My main use of AI typically is in place of Google/StackOverflow, to speed up troubleshooting. For this exercise, I’ve mainly used Google in place of my usual use of AI which is of course slower, but ensures that the problem solving employed during this exercise was mostly done by reviewing documentation where necessary or consulting StackOverflow or similar where necessary.

That said, I have used AI in a few specific areas that were not central to the scope of the task just to speed up development and allow more time for scope-specific tasks:

- Scaffolding blank component structure: Since I’ve been a Tech Lead for the last 3 years it’s a couple of years since I’ve written a component from scratch in React/Next in a *fresh* build. With a blank canvas I thought it prudent to get a little help creating a blank component structure with Typed Props I could build from across the rest of the build, since those provided by the Boilerplate I employed were not sufficient for my needs.
- Type Definitions: I built out some of the Type Definitions with AI just to speed things up, but a lot of them were manually created as you can probably tell by the lack of consistency here at this stage of the build.
- Intersection Observer to Hook: I used AI to wrap my intersection observer in a React hook for speed.

# Boilerplate Readme
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
