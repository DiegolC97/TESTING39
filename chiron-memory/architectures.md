# architecture

A structural/design choice: layers, module boundaries, where things live.

## The hero section is sized using dynamic viewport height (dvh) units rather than plain vh

What: The hero section is sized using dynamic viewport height (dvh) units rather than plain vh · Why: so the mobile on-screen keyboard opening doesn't push the email field or submit button off-screen, satisfying the 'usable with keyboard open' requirement · Where: hero section layout in src/app/page.tsx <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-12 -->

## The waitlist form's submit handling only does client-side validation and shows a success…

What: The waitlist form's submit handling only does client-side validation and shows a success UI state; the actual submission/capture logic is left as a single clearly-marked hook for the separate waitlist-capture work order to plug into · Why: this work order owns the hero's presentation of the CTA, not the capture mechanics, per the work order split · Where: waitlist form component in the hero section <!-- id: fa979afa-eb6c-46ed-9a02-0ad7f60f97b7-14 -->
