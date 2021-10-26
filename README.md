# Introduce_html

사용기술
  * html
  * CSS
  * Bootstrap
  * Vanilla JavaScript

---

구현 사항
  * CSS
    > Media Query
    > Support max-width:1500px & min-width:1501px.
    > Suitable for 14 inch laptop, 24 inch moniter.
  * Bootstrap Navbar
    > Fixed, flexed row navigation bar
    > can scroll to specific div by click nav menus
  * Vanilla JavaScript
    > async, await grammer used
    > GSAP Animate used
    > MutationObserver
     * Used in loading circle progress bar
    > TopBtn
     * addEventListener('scroll') with gsap function.
  * GSAP
    > Fade In, Out
     * Loading View Trick (gsap.to with display : none to block).
    > ScrollMagic
     * Each div is rendered by client's scroll offset.
    > Scroll Bar
     * With css progress attributes and some tricks.
---

지원사항
 * This page is suitable for Chrome browser.
 * Suitable for 14 inch laptop, 24 inch moniter.

---

개선점
  * background image
    > not essential.
  * JS modulization
    > seperate JS functions. (Global vs Local)

---

유저 시나리오

1. Wait loading (3s)
 * Circle progress bar is rendered. ( SVG, MutationObserver )
2. Navbar rendering ( fixed top row bar )
 * User can move to each areas by click nav menus.
 * PROFILE, SKILLS, RECORDS, REFRESH
 * User can reload his page by click REFRESH menu.
3. Profile rendering
 * Image -> Info -> SNS order ( div position trick )
4. Scroll down or click nav menus
 * TechStackArea is rendering with scroll down event. ( gsap )
 * RecordArea is rendering as it rises with scroll down event. ( control style.top trick )
5. Footer ( GSAP with vanilla JS )
 * Footer text is rendering when user bring his cursor on the upper arrow.
 * Footer is rendering when user clicks the upper arrow.
 * The upper arrow is hided and Footer Content is rendering.
 * Footer Content is hiding when user clicks the lower arrow.
6. TopBtn
 * TopBtn appears on the TechStackArea.
