"use strict";(self.webpackChunkfidelcoria=self.webpackChunkfidelcoria||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"Useless Machine - LEGO Technic","metadata":{"permalink":"/blog/2021/12/16/Lego_Useless_Machine","editUrl":"https://github.com/alzafacon/alzafacon.github.io/edit/main/website/blog/blog/2021-12-16-Lego_Useless_Machine/index.md","source":"@site/blog/2021-12-16-Lego_Useless_Machine/index.md","title":"Useless Machine - LEGO Technic","description":"The purpose of a Useless Machine is to turn itself off when activated. Kits and built examples are available for purchase. While researching I found LEGO models but without kits or instructions.","date":"2021-12-16T00:00:00.000Z","formattedDate":"December 16, 2021","tags":[],"readingTime":0.715,"truncated":true,"authors":[],"nextItem":{"title":"Custom Apex Domain for GitHub Pages","permalink":"/blog/2021/12/06/GitHub_Pages"}},"content":"The purpose of a Useless Machine is to turn itself off when activated. Kits and built examples are available for purchase. While researching I found LEGO models but without kits or instructions.\\n\\nChallenge accepted!\\n\\n\x3c!--truncate--\x3e\\n\\nI completed the model in March of 2017 and revised it today.\\n\\nWithout a parts list or instructions I decided to reverse engineer the device from the following video:\\n[[011] Lego Technic - Useless Machine](https://www.youtube.com/watch?v=HAk-rhvZe2w)\\n\\nI created a model using LEGO Digital Designer (LDD) before buying the parts. [Download the LXF model](./UselessMachine.lxf)\\n\\nUsing LDD I generated a PDF with building instructions and a parts list at the end.\\n[Download the PDF instructions](./UselessMachineInstructions.pdf)\\n\\n> NOTE: The model and instructions do not include the LEGO Pull Back MOTOR 6x5x3! It was not available in the LDD.\\n\\nHere is the model at the final step of assembly\\n\\n![Final Step from instructions](./Step84.png)"},{"id":"Custom Apex Domain for GitHub Pages","metadata":{"permalink":"/blog/2021/12/06/GitHub_Pages","editUrl":"https://github.com/alzafacon/alzafacon.github.io/edit/main/website/blog/blog/2021-12-06-GitHub_Pages.md","source":"@site/blog/2021-12-06-GitHub_Pages.md","title":"Custom Apex Domain for GitHub Pages","description":"I\'ll explain how I made the DNS records for an apex domain (fidelcoria.com) with a redirect from www.fidelcoria.com to fidelcoria.com.","date":"2021-12-06T00:00:00.000Z","formattedDate":"December 6, 2021","tags":[],"readingTime":1.815,"truncated":true,"authors":[],"prevItem":{"title":"Useless Machine - LEGO Technic","permalink":"/blog/2021/12/16/Lego_Useless_Machine"},"nextItem":{"title":"DigiLog - Digital re-imagining of a Single Hand Analog Timepiece","permalink":"/blog/2021/12/05/DigiLog"}},"content":"I\'ll explain how I made the DNS records for an apex domain (fidelcoria.com) with a redirect from www.fidelcoria.com to fidelcoria.com.\\n\\nIf you\'re new to GitHub Pages visit [pages.github.com](https://pages.github.com/) to learn the basics.\\n\\n\x3c!--truncate--\x3e\\n\\n## TL;DR\\n\\nHere are the DNS records. The host values for the DNS records were the tricky part to figure out. \\n\\n```\\nALIAS\\nHost: @\\nTarget: alzafacon.github.io.\\n```\\n```\\nCNAME\\nHost: www\\nTarget: alzafacon.github.io.\\n```\\n\\n## The devil is in the details\\n\\nI find the official documentation to be unclear or confusing in some parts, but I don\'t blame them. The internet is complicated and the GitHub writers are trying to make the docs helpful even for beginners.\\n\\nThe long and short of it is that the steps (for apex domain with https and www) are in the docs [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain). Unfortunately the DNS instructions are confusing.\\n\\nHere are the steps I had to follow:\\n\\n- Enter your desired custom domain in the repo settings page (**before** creating any DNS entries)\\n\\n   I used fidelcoria.com (without the leading `www.`)\\n\\n   Doing this will configure a CNAME file on your GitHub Pages branch\\n\\n- Create an ALIAS record via your DNS provider\\n\\n  The docs say \\"`To create an ALIAS or ANAME record, point your apex domain to the default domain for your site`\\".\\n\\n  The `apex domain` did not work. Instead I had to use `@`, which is used to represent the \\"bare domain\\" in DNS records.\\n  \\n  ```\\n  ALIAS\\n  Host: @\\n  Target: alzafacon.github.io.\\n  ``` \\n\\n- Create a CNAME record via your DNS provider\\n  \\n  The docs say \\"`Navigate to your DNS provider and create a CNAME record that points www.example.com to the default domain for your site`\\"\\n\\n  `www.fidelcoria.com` did not work. Instead I had to use `www`.\\n  ```\\n  CNAME\\n  Host: www\\n  Target: alzafacon.github.io.\\n  ```\\n\\nDNS changes can take up to 24 hours to propagate. This makes it hard to tell if something is wrong or just needs more time.\\n\\nI learned the best approach for me was to get informed, decide what I want, make a plan, try it out, observe patiently, then iterate.\\n\\n## Extra DNS setup\\n\\nI also setup alzafacon.com to redirect to fidelcoria.com\\n\\n```\\nURL Redirect\\nHost: @\\nDestination URL: https://fidelcoria.com\\nUnmasked\\n```"},{"id":"DigiLog - Digital re-imagining of a Single Hand Analog Timepiece","metadata":{"permalink":"/blog/2021/12/05/DigiLog","editUrl":"https://github.com/alzafacon/alzafacon.github.io/edit/main/website/blog/blog/2021-12-05-DigiLog/index.md","source":"@site/blog/2021-12-05-DigiLog/index.md","title":"DigiLog - Digital re-imagining of a Single Hand Analog Timepiece","description":"Clocks and watches originally had a single hand, but the minutes were hard to read. Thus the minute hand was introduced.","date":"2021-12-05T00:00:00.000Z","formattedDate":"December 5, 2021","tags":[],"readingTime":2.385,"truncated":true,"authors":[],"prevItem":{"title":"Custom Apex Domain for GitHub Pages","permalink":"/blog/2021/12/06/GitHub_Pages"}},"content":"Clocks and watches originally had a single hand, but the minutes were hard to read. Thus the minute hand was introduced.\\n\\nAnother way to read the minutes with a single hand is by zooming into the section of the clock where the hour hand points to the time. For example, at 6:30 the tick marks will show the hour hand to be half way between 6 and 7. While at 7:05 you can zoom in to see the tick marks showing 5 minutes past 7.\\n\\n\x3c!--truncate--\x3e\\n\\n## The Math\\n\\n| | Definitions |\\n| - | - |\\n| Viewport   | window on circular clock |\\n| `R`        | viewport radius |\\n| Clock face | the numbers and tick markings as a group |\\n| `tau`      | angle of hour hand from pole (3 o\'clock) |\\n| `alpha`    | half the clock face segment angle to be enlarged |\\n\\nZooming the clock face means choosing a clock face segment to enlarge. The clock face segment has a chord.\\n\\nLet `alpha` be half the clock face segment angle.\\n\\nZooming is done by dilating and translating the chord to be the viewport diameter.\\n\\nLet `r` be half the chord length. Therefore `r` must be dilated by a factor of `R/r` to become `R` (i.e. `r` * `R/r` = `R`).\\n\\nSince `sin(alpha) = r/R`. The scaling factor is `R/r = 1/sin(alpha)`.\\n\\nLet `d` be the distance from viewport center to chord midpoint before scaling, `d = R * cos(alpha)`.\\n\\nThe translation offsets the in x- and y-direction before scaling are\\n  - `dx = cos(tau) * d = R * cos(tau) * cos(alpha)`\\n  - `dy = sin(tau) * d = R * sin(tau) * cos(alpha)`\\n\\nAfter scaling\\n  - `dx\' = R * cos(tau) * cos(alpha) / sin(alpha)`\\n  - `dy\' = R * sin(tau) * cos(alpha) / sin(alpha)`\\n\\n`alpha` has interval `(0, pi/2]`. The left bound is open because `alpha = 0` means infinite zoom which is not useful to display.\\n\\nTo avoid the infinite zoom problem we introduce a zoom variable `z` and a function `f(z) = alpha` where `f: [0, inf) -> [pi/2, 0)`. Notice `f(z)` approaches 0 asymptotically. \\n\\nThe most obvious such function is `f(z) = 1 / (z + 2/pi)`. An additional advantage of asymptotically approaching 0 is course adjustments at low zoom and fine adjustments at high zoom (i.e. the rate of change is greater near `z = 0` and less as `z` approaches `inf`).\\n\\n`[0, inf)` is not practical as an input range because of `inf`. So it is best to close the right bound at an arbitrary value. Naturally, the output interval right bound should also be closed at the desired maximum zoom. One such choice is `[0, 100] -> [pi/2, pi/6]`. The most obvious such function is `g(z) = 1 / (k*z + 2/pi)` where the reader can find `k` as an exercise."}]}')}}]);