<template>
  <main class="main container my-0">
    <h1 class="text-gold mb-4 text-center">{{$t('ContactUs')}}</h1>
    <div class="main__cards cards">
      <div class="cards__inner">
        <div class="cards__card card" v-for="(card, index) in cards" :key="index">
          <h2 class="card__heading">{{ card.title }}</h2>
          <p class="card__price">{{ card.price }}</p>
          <ul role="list" class="card__bullets flow">
            <li v-for="(bullet, bulletIndex) in card.bullets" :key="bulletIndex">{{ bullet }}</li>
          </ul>
          <a :href="card.ctaLink" class="card__cta cta">{{ card.ctaText }}</a>
        </div>
      </div>
      <div class="overlay cards__inner"></div>
    </div>
  </main>
</template>

<script setup>

const cards = [
  {
    title: 'Basic',
    price: '$9.99',
    bullets: [
      'Access to standard workouts and nutrition plans',
      'Email support'
    ],
    ctaText: 'Get Started',
    ctaLink: '#basic'
  },
  {
    title: 'Pro',
    price: '$19.99',
    bullets: [
      'Access to advanced workouts and nutrition plans',
      'Priority Email support',
      'Exclusive access to live Q&A sessions'
    ],
    ctaText: 'Upgrade to Pro',
    ctaLink: '#pro'
  },
  {
    title: 'Ultimate',
    price: '$29.99',
    bullets: [
      'Access to all premium workouts and nutrition plans',
      '24/7 Priority support',
      '1-on-1 virtual coaching session every month',
      'Exclusive content and early access to new features'
    ],
    ctaText: 'Go Ultimate',
    ctaLink: '#ultimate'
  }
]

onMounted(() => {
  const cardsContainer = document.querySelector(".cards");
  const overlay = document.querySelector(".overlay");
  const cards = Array.from(document.querySelectorAll(".card"));

  const applyOverlayMask = (e) => {
    const overlayEl = e.currentTarget;
    const x = e.pageX - cardsContainer.offsetLeft;
    const y = e.pageY - cardsContainer.offsetTop;
    overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
  };

  const createOverlayCta = (overlayCard, ctaEl) => {
    const overlayCta = document.createElement("div");
    overlayCta.classList.add("cta");
    overlayCta.textContent = ctaEl.textContent;
    overlayCta.setAttribute("aria-hidden", true);
    overlayCard.append(overlayCta);
  };

  const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const cardIndex = cards.indexOf(entry.target);
      let width = entry.borderBoxSize[0].inlineSize;
      let height = entry.borderBoxSize[0].blockSize;
      if (cardIndex >= 0) {
        overlay.children[cardIndex].style.width = `${width}px`;
        overlay.children[cardIndex].style.height = `${height}px`;
      }
    });
  });

  const initOverlayCard = (cardEl) => {
    const overlayCard = document.createElement("div");
    overlayCard.classList.add("card");
    createOverlayCta(overlayCard, cardEl.lastElementChild);
    overlay.append(overlayCard);
    observer.observe(cardEl);
  };

  cards.forEach(initOverlayCard);
  document.body.addEventListener("pointermove", applyOverlayMask);
});
</script>

<style scoped>


.cards {
  position: relative;
}

.cards__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5em;
}

.card {
  --flow-space: 0.5em;
  --hsl: var(--hue), var(--saturation), var(--lightness);
  flex: 1 1 14rem;
  padding: 1.5em 2em;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  align-items: start;
  gap: 1.25em;
  color: #eceff1;
  background-color: #2b2b2b;
  border: 1px solid #eceff133;
  border-radius: 15px;
}

.card:nth-child(1) {
  --hue: 165;
  --saturation: 82.26%;
  --lightness: 51.37%;
}

.card:nth-child(2) {
  --hue: 291.34;
  --saturation: 95.9%;
  --lightness: 61.76%;
}

.card:nth-child(3) {
  --hue: 338.69;
  --saturation: 100%;
  --lightness: 48.04%;
}

.card__bullets {
  line-height: 1.4;
}

.card__bullets li::before {
  display: inline-block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='16' title='check' fill='%23dddddd'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' /%3E%3C/svg%3E");
  transform: translatey(0.25ch);
  margin-right: 1ch;
}

.card__heading {
  font-size: 1.05em;
  font-weight: 600;
}

.card__price {
  font-size: 1.75em;
  font-weight: 700;
}

.flow>*+* {
  margin-top: var(--flow-space, 1.25em);
}

.cta {
  display: block;
  align-self: end;
  margin: 1em 0 0.5em 0;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #0d0d0d;
  padding: 0.7em;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
}

.overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  user-select: none;
  opacity: var(--opacity, 0);
  -webkit-mask: radial-gradient(25rem 25rem at var(--x) var(--y),
    #000 1%,
    transparent 50%);
  mask: radial-gradient(25rem 25rem at var(--x) var(--y),
    #000 1%,
    transparent 50%);
  transition: 400ms mask ease;
  will-change: mask;
}

.overlay .card {
  background-color: hsla(var(--hsl), 0.15);
  border-color: hsla(var(--hsl), 1);
  box-shadow: 0 0 0 1px inset hsl(var(--hsl));
}

.overlay .cta {
  display: block;
  grid-row: -1;
  width: 100%;
  background-color: hsl(var(--hsl));
  box-shadow: 0 0 0 1px hsl(var(--hsl));
}

:not(.overlay)>.card {
  transition: 400ms background ease;
  will-change: background;
}

:not(.overlay)>.card:hover {
  --lightness: 95%;
  background: hsla(var(--hsl), 0.1);
}
</style>
