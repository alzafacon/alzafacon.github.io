"use strict";(self.webpackChunkfidelcoria=self.webpackChunkfidelcoria||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/11/01/Melting_Ice","metadata":{"permalink":"/blog/2022/11/01/Melting_Ice","editUrl":"https://github.com/alzafacon/alzafacon.github.io/edit/main/website/blog/blog/2022-11-01-Melting_Ice/index.md","source":"@site/blog/2022-11-01-Melting_Ice/index.md","title":"Does melting ice really cause sea levels to rise?","description":"I saw a documentary that claimed melting polar ice caps are causing sea levels","date":"2022-11-01T00:00:00.000Z","formattedDate":"November 1, 2022","tags":[],"readingTime":2.04,"hasTruncateMarker":true,"authors":[{"name":"Fidel Coria","title":"Software Engineer","url":"https://fidelcoria.com","imageURL":"https://github.com/alzafacon.png","key":"alzafacon"}],"frontMatter":{"authors":"alzafacon"},"nextItem":{"title":"Python Quine","permalink":"/blog/2022/01/05/Python_Quine"}},"content":"I saw a documentary that claimed melting polar ice caps are causing sea levels\\nto rise. Something was fishy about that claim so I made some simplifying\\nassumptions, drew a free body diagram and started doing algebra. I won\'t\\nreproduce the algebra here because it turns out there is a common sense way to\\nreach the same conclusion.\\n\\n\x3c!--truncate--\x3e\\n\\n## Simplifying assumptions\\n- No saltwater\\n- Ice is pure water\\n- Ice is free-floating\\n- No condensation\\n- No evaporation\\n\\n## Free body diagram\\n![free body diagram](./free_body_diagram_floating_ice.png)\\n> not drawn to scale\\n\\n## Common sense\\nSince the system is in equilibrium the buoyancy force (red) is equal in\\nmagnitude to the gravitational force (blue). \\n\\nUnder the force of gravity the ice will displace some volume of water. `The mass\\nof the displaced volume of water must be equal to the mass of the ice causing\\nthat water to be displaced.` Therefore, the water from the melted ice has the\\nsame volume as the water originally displaced! The water level will not change!\\n\\nWait a minute! How do we know that `The mass of the displaced volume of water\\nmust be equal to the mass of the ice causing that water to be displaced.`?\\nWell, picture this: gravity is applying to a body of water. Pushing against the\\nwater causes an equal-magnitude and opposite-direction reaction. The more water\\nis displaced the greater reaction force. You are pushing against gravity!\\n\\nThis is the buoyancy force!\\n\\nThe force an object can exert due to gravity on a body of water is determined by\\nits mass. That object will sink if the force exerted by the object is greater\\nthan the buoyant force. In other words: if the mass of the object is greater\\nthan the mass of the object\'s volume in water then the object sinks. \\n\\nIf the mass of an object is less than the mass of the object\'s volume in \\nwater... then the object floats.\\n\\nIn other words, objects denser than water sink, objects less dense than water\\nfloat.\\n\\n## Back to saltwater\\n\\nIn the previous discussion the medium of floatation was the same as the object\\nof displacement. In other words: ice (frozen H2O) is floating in water (liquid \\nH2O). Obviously, once the ice melts it\'s all water with the same properties, including density.\\n\\nSo what happens to the fluid level when ice (frozen H2O) floating in saltwater\\nmelts?\\n\\nI leave this as an exercise for the reader."},{"id":"/2022/01/05/Python_Quine","metadata":{"permalink":"/blog/2022/01/05/Python_Quine","editUrl":"https://github.com/alzafacon/alzafacon.github.io/edit/main/website/blog/blog/2022-01-05-Python_Quine.mdx","source":"@site/blog/2022-01-05-Python_Quine.mdx","title":"Python Quine","description":"A quine is a computer program which takes no input and produces a copy of its own source code as its only output.","date":"2022-01-05T00:00:00.000Z","formattedDate":"January 5, 2022","tags":[],"readingTime":0.275,"hasTruncateMarker":false,"authors":[{"name":"Fidel Coria","title":"Software Engineer","url":"https://fidelcoria.com","imageURL":"https://github.com/alzafacon.png","key":"alzafacon"}],"frontMatter":{"authors":"alzafacon"},"prevItem":{"title":"Does melting ice really cause sea levels to rise?","permalink":"/blog/2022/11/01/Melting_Ice"},"nextItem":{"title":"Useless Machine with LEGO Technic","permalink":"/blog/2021/12/16/Lego_Useless_Machine"}},"content":"A quine is a computer program which takes no input and produces a copy of its own source code as its only output.\\n\\nI first read about this kind of program in an ACM article but I can\'t remember which one.\\n\\nHere is my solution\\n\\nimport { ClickToReveal } from \'../src/components/ClickToReveal/ClickToReveal.js\';\\n\\n<ClickToReveal\\n    language=\\"python\\" \\n    text=\\"print(\'print({}.format({}))\'.format(\'print({}.format({}))\'))\\" />"},{"id":"/2021/12/16/Lego_Useless_Machine","metadata":{"permalink":"/blog/2021/12/16/Lego_Useless_Machine","editUrl":"https://github.com/alzafacon/alzafacon.github.io/edit/main/website/blog/blog/2021-12-16-Lego_Useless_Machine/index.md","source":"@site/blog/2021-12-16-Lego_Useless_Machine/index.md","title":"Useless Machine with LEGO Technic","description":"The purpose of a Useless Machine is to turn itself off when activated. Kits and built examples are available for purchase. While researching I found LEGO models but without kits or instructions.","date":"2021-12-16T00:00:00.000Z","formattedDate":"December 16, 2021","tags":[],"readingTime":0.715,"hasTruncateMarker":true,"authors":[{"name":"Fidel Coria","title":"Software Engineer","url":"https://fidelcoria.com","imageURL":"https://github.com/alzafacon.png","key":"alzafacon"}],"frontMatter":{"authors":"alzafacon"},"prevItem":{"title":"Python Quine","permalink":"/blog/2022/01/05/Python_Quine"},"nextItem":{"title":"Custom Apex Domain for GitHub Pages","permalink":"/blog/2021/12/06/GitHub_Pages"}},"content":"The purpose of a Useless Machine is to turn itself off when activated. Kits and built examples are available for purchase. While researching I found LEGO models but without kits or instructions.\\n\\nChallenge accepted!\\n\\n\x3c!--truncate--\x3e\\n\\nI completed the model in March of 2017 and revised it today.\\n\\nWithout a parts list or instructions I decided to reverse engineer the device from the following video:\\n[[011] Lego Technic - Useless Machine](https://www.youtube.com/watch?v=HAk-rhvZe2w)\\n\\nI created a model using LEGO Digital Designer (LDD) before buying the parts. [Download the LXF model](./UselessMachine.lxf)\\n\\nUsing LDD I generated a PDF with building instructions and a parts list at the end.\\n[Download the PDF instructions](./UselessMachineInstructions.pdf)\\n\\n> NOTE: The model and instructions do not include the LEGO Wind Up MOTOR 6x5x3! It was not available in the LDD.\\n\\nHere is the model at the final step of assembly\\n\\n![Final Step from instructions](./Step84.png)"},{"id":"/2021/12/06/GitHub_Pages","metadata":{"permalink":"/blog/2021/12/06/GitHub_Pages","editUrl":"https://github.com/alzafacon/alzafacon.github.io/edit/main/website/blog/blog/2021-12-06-GitHub_Pages.md","source":"@site/blog/2021-12-06-GitHub_Pages.md","title":"Custom Apex Domain for GitHub Pages","description":"I\'ll explain how I setup the DNS records for an apex domain (fidelcoria.com) with a redirect from www.fidelcoria.com to fidelcoria.com.","date":"2021-12-06T00:00:00.000Z","formattedDate":"December 6, 2021","tags":[],"readingTime":1.815,"hasTruncateMarker":true,"authors":[{"name":"Fidel Coria","title":"Software Engineer","url":"https://fidelcoria.com","imageURL":"https://github.com/alzafacon.png","key":"alzafacon"}],"frontMatter":{"authors":"alzafacon"},"prevItem":{"title":"Useless Machine with LEGO Technic","permalink":"/blog/2021/12/16/Lego_Useless_Machine"},"nextItem":{"title":"DigiLog: Digital Zoom for a Single Hand Analog Timepiece","permalink":"/blog/2021/12/05/DigiLog"}},"content":"I\'ll explain how I setup the DNS records for an apex domain (fidelcoria.com) with a redirect from www.fidelcoria.com to fidelcoria.com.\\n\\nIf you\'re new to GitHub Pages visit [pages.github.com](https://pages.github.com/) to learn the basics.\\n\\n\x3c!--truncate--\x3e\\n\\n## TL;DR\\n\\nHere are the DNS records. The host values for the DNS records were the tricky part to figure out. \\n\\n```\\nALIAS\\nHost: @\\nTarget: alzafacon.github.io.\\n```\\n```\\nCNAME\\nHost: www\\nTarget: alzafacon.github.io.\\n```\\n\\n## The devil is in the details\\n\\nI find the official documentation to be unclear or confusing in some parts, but I don\'t blame them. The internet is complicated and the GitHub writers are trying to make the docs helpful even for beginners.\\n\\nThe long and short of it is that the steps (for apex domain with https and www) are in the docs [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain). Unfortunately the DNS instructions are confusing.\\n\\nHere are the steps I had to follow:\\n\\n- Enter your desired custom domain in the repo settings page (**before** creating any DNS entries)\\n\\n   I used fidelcoria.com (without the leading `www.`)\\n\\n   Doing this will configure a CNAME file on your GitHub Pages branch\\n\\n- Create an ALIAS record via your DNS provider\\n\\n  The docs say \\"`To create an ALIAS or ANAME record, point your apex domain to the default domain for your site`\\".\\n\\n  The `apex domain` did not work. Instead I had to use `@`, which is used to represent the \\"bare domain\\" in DNS records.\\n  \\n  ```\\n  ALIAS\\n  Host: @\\n  Target: alzafacon.github.io.\\n  ``` \\n\\n- Create a CNAME record via your DNS provider\\n  \\n  The docs say \\"`Navigate to your DNS provider and create a CNAME record that points www.example.com to the default domain for your site`\\"\\n\\n  `www.fidelcoria.com` did not work. Instead I had to use `www`.\\n  ```\\n  CNAME\\n  Host: www\\n  Target: alzafacon.github.io.\\n  ```\\n\\nDNS changes can take up to 24 hours to propagate. This makes it hard to tell if something is wrong or just needs more time.\\n\\nI learned the best approach for me was to get informed, decide what I want, make a plan, try it out, observe patiently, then iterate.\\n\\n## Extra DNS setup\\n\\nI also setup alzafacon.com to redirect to fidelcoria.com\\n\\n```\\nURL Redirect\\nHost: @\\nDestination URL: https://fidelcoria.com\\nUnmasked\\n```"},{"id":"/2021/12/05/DigiLog","metadata":{"permalink":"/blog/2021/12/05/DigiLog","editUrl":"https://github.com/alzafacon/alzafacon.github.io/edit/main/website/blog/blog/2021-12-05-DigiLog/index.mdx","source":"@site/blog/2021-12-05-DigiLog/index.mdx","title":"DigiLog: Digital Zoom for a Single Hand Analog Timepiece","description":"Clocks and watches originally had a single hand. Obviously, this made it hard to tell time accurately. Until the minute hand was invented.","date":"2021-12-05T00:00:00.000Z","formattedDate":"December 5, 2021","tags":[],"readingTime":3.335,"hasTruncateMarker":true,"authors":[{"name":"Fidel Coria","title":"Software Engineer","url":"https://fidelcoria.com","imageURL":"https://github.com/alzafacon.png","key":"alzafacon"}],"frontMatter":{"authors":"alzafacon"},"prevItem":{"title":"Custom Apex Domain for GitHub Pages","permalink":"/blog/2021/12/06/GitHub_Pages"}},"content":"Clocks and watches originally had a single hand. Obviously, this made it hard to tell time accurately. Until the minute hand was invented.\\n\\nI came up with another way to read the minutes without a minute hand. Since the position of the hour hand past the hour marking implies the minutes... zooming into the hour hand shows minutes at a better resolution. For example, at 6:30 the tick marks will show the hour hand to be half way between 6 and 7. While at 7:05 you can zoom in to see the tick marks showing 5 minutes past 7.\\n\\nimport { FreestyleClock } from \'../../src/components/clock/FreestyleClock.js\';\\n\\n<div style={{margin: \'auto\', width: \'50%\'}}>\\n  <FreestyleClock />\\n</div>\\n\\n\x3c!--truncate--\x3e\\n\\n## The Math\\n\\n| | Definitions |\\n| - | - |\\n| Viewport   | circular window of fixed size |\\n| `D` | viewport diameter\\n| `R`        | viewport radius |\\n| Clock face | the numbers, tick markings, and the hour hand together |\\n| `r` | distance between viewport center and midpoint of chord to be zoomed (chord offset) |\\n| `tau` | time \\"angle\\" in radians of hour hand from polar axis (3 o\'clock) |\\n| `a` | length of the chord |\\n| `S` | scale factor |\\n\\n<img \\n  alt=\\"chord diagram\\"\\n  className=\\"fix-img-fuzziness\\"\\n  src={require(\\"./ChordDiagram_1000.gif\\").default}\\n  style={{display: \'block\', margin: \'auto\', padding: \'10px\'}}\\n  />\\n\\n> SOURCE: Weisstein, Eric W. \\"Chord.\\" From MathWorld--A Wolfram Web Resource. https://mathworld.wolfram.com/Chord.html\\n\\nZooming the clock face is simply done by enlarging a circular segment centered where the hour hand is pointing. In the image above the time would be 1:30.\\n\\nI take the chord and enlarge it to be congruent with the view port diameter. So to scale the chord from `a` to `D` the whole clock face must be scaled by `D/a` (i.e. `a(D/a) = D`). \\n\\nThe chord is determined when the user chooses `r`. We need an expression for the value of `a` given `r`.\\n\\nEasy! Pythagorean theorem: \\n\\n    R^2 = r^2 + (a/2)^2\\n    a/2 = sqrt(R^2 - r^2)\\n     a  = 2sqrt(R^2 - r^2)\\n\\nSo now we have the scale factor:\\n\\n    S = D/a \\n      = 2R / (2sqrt(R^2 - r^2))\\n      = R / sqrt(R^2 - r^2)\\n\\nNext we need to slide the midpoint of the chord onto the center of the viewport.\\n\\nIt might help to think of the midpoint in polar coordinates as (`Sr`, `tau`). Yes, I scaled by S. With a simple change of coordinates we have:\\n\\n    dx = Sr cos(tau)\\n    dy = Sr sin(tau)\\n\\n## Course and Fine adjustment of r\\n\\nUsing a slider to change `r` linearly is a bad user experience. At low zoom the clock face moves very little and at high zoom the clock face moves too much. If you graph the scale function It is easy to see why this happens. `S(r)` grows quickly and is also concave up.\\n\\nIt would be better for the value of r to change more quickly at low zoom (course adjustment) and more slowly at high zoom (fine adjustment).\\n\\nThis can be done by letting the user input a zoom value rather than let them input `r` directly. Now we can map the zoom value any way we want with a function `f(z) = r`.\\n\\nI would like to take `z` to be in `[0,1]` and `f(1) = p`, where `0 < p < 1` and `pR` is the max chord-offset allowed. `f` should be monotonically increasing, concave down, with an inflection point somewhere around 0.1, and preferably asymptotic to `1`. Notice `f` will be multiplied by `R` to give the final chord offset.\\n\\nA good candidate function is `1 - 1/(z + 1)`.\\n\\nSo I\'ll start applying transformations to get the desired properties.\\n\\n    f(1) = p = 1 - 1/(kz + 1)\\n    ... algebra ...\\n    k = p / (1-p)\\n    \\n    f(z) = 1 - 1/(pz/(1-p) + 1)\\n           ... algebra ...\\n         = 1 - (1-p)/(pz + 1 - p)\\n           ... algebra ...\\n         = pz / (pz + 1 - p)\\n\\nFinally to get the actual chord offset we take `Rf(z)`. \\n\\nThat\'s all folks!"}]}')}}]);