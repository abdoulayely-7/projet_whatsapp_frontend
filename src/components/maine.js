export function renderMain() {
  const main = document.createElement('main')
  main.className = 'flex-1 bg-main p-4 border-2 border-color h-full border-l-0 relative'
  main.setAttribute('id', 'zone-principal')
  main.innerHTML = `
    <div id="svg-accueil" class="absolute inset-0 flex flex-col justify-between items-center p-8 h-full">
        <div></div>
        <div class="flex flex-col items-center">
          <svg class="animated" id="freepik_stories-sentiment-analysis" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 750 500" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs">
            <style>
              svg#freepik_stories-sentiment-analysis:not(.animated) .animable {
                opacity: 0;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--background-simple--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) lightSpeedRight;
                animation-delay: 0s;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--Floor--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) slideUp;
                animation-delay: 0s;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--Window--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) slideDown;
                animation-delay: 0s;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--Picture--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) lightSpeedLeft;
                animation-delay: 0s;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--Table--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) zoomOut;
                animation-delay: 0s;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--Icons--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) slideRight;
                animation-delay: 0s;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--device-3--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) lightSpeedRight;
                animation-delay: 0s;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--device-2--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) slideUp;
                animation-delay: 0s;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--device-1--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) zoomIn;
                animation-delay: 0s;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--charts-3--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) fadeIn;
                animation-delay: 0s;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--charts-2--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) lightSpeedRight;
                animation-delay: 0s;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--charts-1--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) lightSpeedLeft;
                animation-delay: 0s;
              }

              svg#freepik_stories-sentiment-analysis.animated #freepik--Character--inject-184 {
                animation: 1s 1 forwards cubic-bezier(.36, -0.01, .5, 1.38) zoomIn;
                animation-delay: 0s;
              }

              @keyframes lightSpeedRight {
                from {
                  transform: translate3d(50%, 0, 0) skewX(-20deg);
                  opacity: 0;
                }

                60% {
                  transform: skewX(10deg);
                  opacity: 1;
                }

                80% {
                  transform: skewX(-2deg);
                }

                to {
                  opacity: 1;
                  transform: translate3d(0, 0, 0);
                }
              }

              @keyframes slideUp {
                0% {
                  opacity: 0;
                  transform: translateY(30px);
                }

                100% {
                  opacity: 1;
                  transform: inherit;
                }
              }

              @keyframes slideDown {
                0% {
                  opacity: 0;
                  transform: translateY(-30px);
                }

                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes lightSpeedLeft {
                from {
                  transform: translate3d(-50%, 0, 0) skewX(20deg);
                  opacity: 0;
                }

                60% {
                  transform: skewX(-10deg);
                  opacity: 1;
                }

                80% {
                  transform: skewX(2deg);
                }

                to {
                  opacity: 1;
                  transform: translate3d(0, 0, 0);
                }
              }

              @keyframes zoomOut {
                0% {
                  opacity: 0;
                  transform: scale(1.5);
                }

                100% {
                  opacity: 1;
                  transform: scale(1);
                }
              }

              @keyframes slideRight {
                0% {
                  opacity: 0;
                  transform: translateX(30px);
                }

                100% {
                  opacity: 1;
                  transform: translateX(0);
                }
              }

              @keyframes zoomIn {
                0% {
                  opacity: 0;
                  transform: scale(0.5);
                }

                100% {
                  opacity: 1;
                  transform: scale(1);
                }
              }

              @keyframes fadeIn {
                0% {
                  opacity: 0;
                }

                100% {
                  opacity: 1;
                }
              }
            </style>
            <g id="freepik--background-simple--inject-184" class="animable"
              style="transform-origin: 373.223px 230.026px;">
              <path
                d="M690.15,189.66C652.46,130.47,583.53,89.66,518,62,364-3,309,23,253,76s-84,91-140,138S7,276,36,353s39,93,146,73,184-50,272-23,133,54,205,11C733.73,369.37,731.89,255.22,690.15,189.66Z"
                style="fill: rgb(146, 227, 169); transform-origin: 373.223px 230.026px;" id="elmanumgjl3co"
                class="animable"></path>
              <g id="elyq3x18u7wv">
                <path
                  d="M690.15,189.66C652.46,130.47,583.53,89.66,518,62,364-3,309,23,253,76s-84,91-140,138S7,276,36,353s39,93,146,73,184-50,272-23,133,54,205,11C733.73,369.37,731.89,255.22,690.15,189.66Z"
                  style="fill: rgb(255, 255, 255); opacity: 0.7; transform-origin: 373.223px 230.026px;"
                  class="animable"></path>
              </g>
            </g>
            <g id="freepik--Floor--inject-184" class="animable" style="transform-origin: 376.965px 323.61px;">
              <polygon points="473.61 337.57 280.32 337.57 292.79 307 461.14 307 473.61 337.57"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 376.965px 322.285px;"
                id="elf69twloa4h" class="animable"></polygon>
              <polygon points="302.96 313.79 295.62 313.79 297.12 309.86 304.32 309.86 302.96 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 299.97px 311.825px;"
                id="eliwgm2kc8rp" class="animable"></polygon>
              <polygon points="313.31 313.79 305.98 313.79 307.29 309.86 314.49 309.86 313.31 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 310.235px 311.825px;"
                id="elmxv1g49dl" class="animable"></polygon>
              <polygon points="323.67 313.79 316.33 313.79 317.45 309.86 324.65 309.86 323.67 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 320.49px 311.825px;"
                id="elxb82wbsq4r" class="animable"></polygon>
              <polygon points="334.02 313.79 326.69 313.79 327.62 309.86 334.82 309.86 334.02 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 330.755px 311.825px;"
                id="el9bzs54pen7h" class="animable"></polygon>
              <polygon points="344.38 313.79 337.05 313.79 337.78 309.86 344.98 309.86 344.38 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 341.015px 311.825px;"
                id="elj4ddn7f3g3k" class="animable"></polygon>
              <polygon points="354.74 313.79 347.4 313.79 347.95 309.86 355.15 309.86 354.74 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 351.275px 311.825px;"
                id="elxo1m43hi17m" class="animable"></polygon>
              <polygon points="365.09 313.79 357.76 313.79 358.11 309.86 365.31 309.86 365.09 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 361.535px 311.825px;"
                id="elr6ckevnd7ls" class="animable"></polygon>
              <polygon points="375.45 313.79 368.11 313.79 368.28 309.86 375.48 309.86 375.45 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 371.795px 311.825px;"
                id="elcxkr8l710e5" class="animable"></polygon>
              <polygon points="385.81 313.79 378.47 313.79 378.44 309.86 385.64 309.86 385.81 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 382.125px 311.825px;"
                id="el0a7v20cvmwet" class="animable"></polygon>
              <polygon points="396.16 313.79 388.82 313.79 388.61 309.86 395.81 309.86 396.16 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 392.385px 311.825px;"
                id="elo7z5duivya" class="animable"></polygon>
              <polygon points="406.52 313.79 399.18 313.79 398.77 309.86 405.97 309.86 406.52 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 402.645px 311.825px;"
                id="elfsx7zfqqbqv" class="animable"></polygon>
              <polygon points="416.87 313.79 409.54 313.79 408.94 309.86 416.14 309.86 416.87 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 412.905px 311.825px;"
                id="eljfs0r4ebttg" class="animable"></polygon>
              <polygon points="427.23 313.79 419.89 313.79 419.1 309.86 426.3 309.86 427.23 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 423.165px 311.825px;"
                id="elhgz63jkesl" class="animable"></polygon>
              <polygon points="437.58 313.79 430.25 313.79 429.26 309.86 436.46 309.86 437.58 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 433.42px 311.825px;"
                id="elc5gul1waob" class="animable"></polygon>
              <polygon points="447.94 313.79 440.61 313.79 439.43 309.86 446.63 309.86 447.94 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 443.685px 311.825px;"
                id="elv6ennbuy4j" class="animable"></polygon>
              <polygon points="458.3 313.79 450.96 313.79 449.6 309.86 456.8 309.86 458.3 313.79"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 453.95px 311.825px;"
                id="el2yvkjrnwf48" class="animable"></polygon>
              <polygon points="299.89 322.61 292.26 322.61 293.88 318.35 301.38 318.35 299.89 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 296.82px 320.48px;"
                id="el4zmiy4yek8m" class="animable"></polygon>
              <polygon points="310.68 322.61 303.04 322.61 304.46 318.35 311.95 318.35 310.68 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 307.495px 320.48px;"
                id="elt29ky8xn2wr" class="animable"></polygon>
              <polygon points="321.46 322.61 313.82 322.61 315.04 318.35 322.53 318.35 321.46 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 318.175px 320.48px;"
                id="el4lzil5eubc8" class="animable"></polygon>
              <polygon points="332.25 322.61 324.61 322.61 325.62 318.35 333.11 318.35 332.25 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 328.86px 320.48px;"
                id="els26du5l9hao" class="animable"></polygon>
              <polygon points="343.03 322.61 335.39 322.61 336.19 318.35 343.69 318.35 343.03 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 339.54px 320.48px;"
                id="el1l2iszpi5z0j" class="animable"></polygon>
              <polygon points="353.82 322.61 346.18 322.61 346.77 318.35 354.26 318.35 353.82 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 350.22px 320.48px;"
                id="el7uxrkor4ui" class="animable"></polygon>
              <polygon points="364.6 322.61 356.96 322.61 357.35 318.35 364.84 318.35 364.6 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 360.9px 320.48px;"
                id="elw6s3shxj7v" class="animable"></polygon>
              <polygon points="375.39 322.61 367.75 322.61 367.92 318.35 375.42 318.35 375.39 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 371.585px 320.48px;"
                id="elld561yde6ms" class="animable"></polygon>
              <polygon points="386.17 322.61 378.53 322.61 378.5 318.35 385.99 318.35 386.17 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 382.335px 320.48px;"
                id="elqc17268v0s" class="animable"></polygon>
              <polygon points="396.95 322.61 389.32 322.61 389.08 318.35 396.57 318.35 396.95 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 393.015px 320.48px;"
                id="elr0jwe5852jh" class="animable"></polygon>
              <polygon points="407.74 322.61 400.1 322.61 399.66 318.35 407.15 318.35 407.74 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 403.7px 320.48px;"
                id="elnl9h5x9mvm" class="animable"></polygon>
              <polygon points="418.52 322.61 410.88 322.61 410.23 318.35 417.73 318.35 418.52 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 414.375px 320.48px;"
                id="elqri45ebimw" class="animable"></polygon>
              <polygon points="429.31 322.61 421.67 322.61 420.81 318.35 428.3 318.35 429.31 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 425.06px 320.48px;"
                id="el72b2d1pbbut" class="animable"></polygon>
              <polygon points="440.09 322.61 432.45 322.61 431.39 318.35 438.88 318.35 440.09 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 435.74px 320.48px;"
                id="el2yc0cmi82ha" class="animable"></polygon>
              <polygon points="450.88 322.61 443.24 322.61 441.96 318.35 449.46 318.35 450.88 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 446.42px 320.48px;"
                id="eltw2yxi9e258" class="animable"></polygon>
              <polygon points="461.66 322.61 454.02 322.61 452.54 318.35 460.03 318.35 461.66 322.61"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 457.1px 320.48px;"
                id="eldqi15ftn18" class="animable"></polygon>
              <polygon points="296.57 332.19 288.6 332.19 290.37 327.55 298.18 327.55 296.57 332.19"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 293.39px 329.87px;"
                id="elo4ybsq41djf" class="animable"></polygon>
              <polygon points="307.82 332.19 299.85 332.19 301.39 327.55 309.2 327.55 307.82 332.19"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 304.525px 329.87px;"
                id="elnj5llheyu9" class="animable"></polygon>
              <polygon points="319.07 332.19 311.1 332.19 312.42 327.55 320.23 327.55 319.07 332.19"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 315.665px 329.87px;"
                id="elwkj2axkgn5b" class="animable"></polygon>
              <polygon points="397.82 332.19 322.35 332.19 323.44 327.55 397.4 327.55 397.82 332.19"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 360.085px 329.87px;"
                id="elq03mbgxbsn" class="animable"></polygon>
              <polygon points="409.07 332.19 401.1 332.19 400.62 327.55 408.43 327.55 409.07 332.19"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 404.845px 329.87px;"
                id="el03cbk689m3lq" class="animable"></polygon>
              <polygon points="420.32 332.19 412.35 332.19 411.64 327.55 419.45 327.55 420.32 332.19"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 415.98px 329.87px;"
                id="el3c06yapzg93" class="animable"></polygon>
              <polygon points="431.57 332.19 423.6 332.19 422.67 327.55 430.47 327.55 431.57 332.19"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 427.12px 329.87px;"
                id="elenamntquy9e" class="animable"></polygon>
              <polygon points="442.82 332.19 434.85 332.19 433.69 327.55 441.5 327.55 442.82 332.19"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 438.255px 329.87px;"
                id="elt4mnjrv5imj" class="animable"></polygon>
              <polygon points="454.07 332.19 446.1 332.19 444.71 327.55 452.52 327.55 454.07 332.19"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 449.39px 329.87px;"
                id="elyqi9d4bo8e" class="animable"></polygon>
              <polygon points="465.32 332.19 457.35 332.19 455.74 327.55 463.55 327.55 465.32 332.19"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 460.53px 329.87px;"
                id="elwtrqzoz7y8g" class="animable"></polygon>
              <rect x="280.32" y="337.57" width="193.16" height="2.65"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 376.9px 338.895px;"
                id="el3drzertn88m" class="animable"></rect>
            </g>
            <g id="freepik--Window--inject-184" class="animable" style="transform-origin: 136.8px 170.525px;">
              <polygon points="134.22 65.28 42.59 65.28 41.38 80.07 134.22 80.07 134.22 65.28"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 72.675px;"
                id="el6f9alxha3le" class="animable"></polygon>
              <polygon points="134.22 80.07 42.59 80.07 41.38 94.87 134.22 94.87 134.22 80.07"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 87.47px;"
                id="elss4iq8f3mz" class="animable"></polygon>
              <polygon points="134.22 94.87 42.59 94.87 41.38 109.67 134.22 109.67 134.22 94.87"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 102.27px;"
                id="elrugajkvsrgs" class="animable"></polygon>
              <polygon points="134.22 109.67 42.59 109.67 41.38 124.47 134.22 124.47 134.22 109.67"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 117.07px;"
                id="elkamlwff4268" class="animable"></polygon>
              <polygon points="134.22 124.47 42.59 124.47 41.38 139.26 134.22 139.26 134.22 124.47"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 131.865px;"
                id="el34rkvt0q3s8" class="animable"></polygon>
              <polygon points="134.22 139.26 42.59 139.26 41.38 154.06 134.22 154.06 134.22 139.26"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 146.66px;"
                id="elkpp5fbhwi" class="animable"></polygon>
              <polygon points="134.22 154.06 42.59 154.06 41.38 168.86 134.22 168.86 134.22 154.06"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 161.46px;"
                id="elhx131ylti3g" class="animable"></polygon>
              <polygon points="134.22 168.86 42.59 168.86 41.38 183.65 134.22 183.65 134.22 168.86"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 176.255px;"
                id="elrkf8a8ir7hn" class="animable"></polygon>
              <polygon points="134.22 183.65 42.59 183.65 41.38 198.45 134.22 198.45 134.22 183.65"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 191.05px;"
                id="el7iys6v1wvxx" class="animable"></polygon>
              <polygon points="134.22 198.45 42.59 198.45 41.38 213.25 134.22 213.25 134.22 198.45"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 205.85px;"
                id="elj60dawbt6xq" class="animable"></polygon>
              <polygon points="134.22 213.25 42.59 213.25 41.38 228.04 134.22 228.04 134.22 213.25"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 220.645px;"
                id="els5b9hago3m" class="animable"></polygon>
              <polygon points="134.22 228.04 42.59 228.04 41.38 242.84 134.22 242.84 134.22 228.04"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 235.44px;"
                id="elnf55trui5z" class="animable"></polygon>
              <polygon points="134.22 242.84 42.59 242.84 41.38 257.64 134.22 257.64 134.22 242.84"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 250.24px;"
                id="elatis0233z3m" class="animable"></polygon>
              <polygon points="134.22 257.64 42.59 257.64 41.38 272.44 134.22 272.44 134.22 257.64"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 265.04px;"
                id="el4cjc7evy7yx" class="animable"></polygon>
              <polygon points="134.22 272.44 42.59 272.44 41.38 287.23 134.22 287.23 134.22 272.44"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 87.8px 279.835px;"
                id="elchp1jhjtbnt" class="animable"></polygon>
              <polygon points="228.4 65.28 136.78 65.28 135.57 80.07 228.4 80.07 228.4 65.28"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 72.675px;"
                id="elt0wmvjeiysl" class="animable"></polygon>
              <polygon points="228.4 80.07 136.78 80.07 135.57 94.87 228.4 94.87 228.4 80.07"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 87.47px;"
                id="el93g002qxp6q" class="animable"></polygon>
              <polygon points="228.4 94.87 136.78 94.87 135.57 109.67 228.4 109.67 228.4 94.87"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 102.27px;"
                id="elq8388s2wkvi" class="animable"></polygon>
              <polygon points="228.4 109.67 136.78 109.67 135.57 124.47 228.4 124.47 228.4 109.67"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 117.07px;"
                id="elz9sjhpwy8a" class="animable"></polygon>
              <polygon points="228.4 124.47 136.78 124.47 135.57 139.26 228.4 139.26 228.4 124.47"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 131.865px;"
                id="elxl934ut953" class="animable"></polygon>
              <polygon points="228.4 139.26 136.78 139.26 135.57 154.06 228.4 154.06 228.4 139.26"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 146.66px;"
                id="elxfv84efyuvf" class="animable"></polygon>
              <polygon points="228.4 154.06 136.78 154.06 135.57 168.86 228.4 168.86 228.4 154.06"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 161.46px;"
                id="elbml1x5uahli" class="animable"></polygon>
              <polygon points="228.4 168.86 136.78 168.86 135.57 183.65 228.4 183.65 228.4 168.86"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 176.255px;"
                id="elnvn2s24von" class="animable"></polygon>
              <polygon points="228.4 183.65 136.78 183.65 135.57 198.45 228.4 198.45 228.4 183.65"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 191.05px;"
                id="elmqljn0xjq0h" class="animable"></polygon>
              <polygon points="228.4 198.45 136.78 198.45 135.57 213.25 228.4 213.25 228.4 198.45"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 205.85px;"
                id="elrtcrvav5gc" class="animable"></polygon>
              <polygon points="228.4 213.25 136.78 213.25 135.57 228.04 228.4 228.04 228.4 213.25"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 220.645px;"
                id="el5nfymzmwucp" class="animable"></polygon>
              <polygon points="228.4 228.04 136.78 228.04 135.57 242.84 228.4 242.84 228.4 228.04"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 235.44px;"
                id="el1ugtxla2g56" class="animable"></polygon>
              <polygon points="228.4 242.84 136.78 242.84 135.57 257.64 228.4 257.64 228.4 242.84"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 250.24px;"
                id="elbemipoyts7k" class="animable"></polygon>
              <polygon points="228.4 257.64 136.78 257.64 135.57 272.44 228.4 272.44 228.4 257.64"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 265.04px;"
                id="elocv5brx6d18" class="animable"></polygon>
              <polygon points="228.4 272.44 136.78 272.44 135.57 287.23 228.4 287.23 228.4 272.44"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 181.985px 279.835px;"
                id="elm86tc3ld29c" class="animable"></polygon>
              <rect x="39.24" y="53.82" width="193.75" height="11.16"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 136.115px 59.4px;"
                id="el8ubh3tvj0d2" class="animable"></rect>
              <line x1="232.99" y1="64.98" x2="232.99" y2="261.57"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 232.99px 163.275px;"
                id="eltiib6qtt4il" class="animable"></line>
              <line x1="230.88" y1="65.3" x2="230.88" y2="200.18"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 230.88px 132.74px;"
                id="elv5xjecxrh6r" class="animable"></line>
              <rect x="231.76" y="261.14" width="2.6" height="5.01"
                style="fill: rgb(38, 50, 56); stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 233.06px 263.645px;"
                id="eliq9yx0girk" class="animable"></rect>
              <rect x="229.41" y="199.1" width="2.6" height="5.01"
                style="fill: rgb(38, 50, 56); stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 230.71px 201.605px;"
                id="eluuf2flpx3c" class="animable"></rect>
            </g>
            <g id="freepik--Picture--inject-184" class="animable" style="transform-origin: 636px 135px;">
              <rect x="577" y="65" width="118" height="140"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 636px 135px;"
                id="eljhuzp29ttvr" class="animable"></rect>
              <rect x="582.9" y="72" width="106.2" height="126"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 636px 135px;"
                id="elyiwnbjpymi" class="animable"></rect>
              <rect x="611.56" y="106" width="48.89" height="58"
                style="fill: none; stroke: gray; stroke-linecap: round; stroke-linejoin: round; transform-origin: 636.005px 135px;"
                id="elilqory5okf" class="animable"></rect>
            </g>
            <g id="freepik--Table--inject-184" class="animable" style="transform-origin: 382.14px 371.685px;">
              <polygon
                points="118.93 446.49 118.93 359.35 655.47 359.35 656.18 451.47 640.85 448.41 641 383 135 383 135.03 445.73 118.93 446.49"
                style="fill: rgb(227, 227, 227); transform-origin: 387.555px 405.41px;" id="elg1l5h8ztv5n"
                class="animable"></polygon>
              <polyline points="119 452.31 119 351 656 351 656 454.79"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 387.5px 402.895px;"
                id="elt019c86ipp" class="animable"></polyline>
              <rect x="119.05" y="359.35" width="536.42" height="8.18"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 387.26px 363.44px;"
                id="el784pyb4mjsw" class="animable"></rect>
              <polyline points="135 451.31 135 383 641 383 641 455.79"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 388px 419.395px;"
                id="eloa0780rn9m" class="animable"></polyline>
              <rect x="100.35" y="346.33" width="563.58" height="13.1"
                style="fill: rgb(204, 204, 204); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 382.14px 352.88px;"
                id="el3xwjq7r16a5" class="animable"></rect>
              <polygon points="663.93 346.28 100.35 346.28 142.62 287.58 621.66 287.58 663.93 346.28"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 382.14px 316.93px;"
                id="elnxjpda6tyh" class="animable"></polygon>
            </g>
            <g id="freepik--Icons--inject-184" class="animable" style="transform-origin: 388.631px 64.62px;">
              <g id="eld5mxiu8dula">
                <circle cx="426.11" cy="64.62" r="26.66"
                  style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 426.11px 64.62px; transform: rotate(-45deg);"
                  class="animable"></circle>
              </g>
              <path
                d="M442.65,68.49l-2.12,2.14L426.38,84.76,410.1,68.49a10,10,0,1,1,14.15-14.13l2.15,2.14,2.12-2.14a10,10,0,0,1,14.13,14.13Z"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 426.172px 68.0309px;"
                id="elpsf18uks6mr" class="animable"></path>
              <g id="elfatl98y3l7i">
                <circle cx="281.63" cy="64.62" r="26.66"
                  style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 281.63px 64.62px; transform: rotate(-67.11deg);"
                  class="animable"></circle>
              </g>
              <g id="eludcisc7acy">
                <circle cx="281.63" cy="64.62" r="17.43"
                  style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 281.63px 64.62px; transform: rotate(-67.25deg);"
                  class="animable"></circle>
              </g>
              <path d="M271.57,70a11.41,11.41,0,0,0,19.91.37"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 281.525px 73.0118px;"
                id="elrlyal6ey86" class="animable"></path>
              <path
                d="M277.49,61.4c0,2-.59,3.61-1.31,3.61s-1.31-1.62-1.31-3.61.58-3.6,1.31-3.6S277.49,59.41,277.49,61.4Z"
                style="fill: rgb(38, 50, 56); transform-origin: 276.18px 61.405px;" id="ellktaed1y08h" class="animable">
              </path>
              <path
                d="M287.31,61.4c0,2-.58,3.61-1.31,3.61s-1.31-1.62-1.31-3.61.59-3.6,1.31-3.6S287.31,59.41,287.31,61.4Z"
                style="fill: rgb(38, 50, 56); transform-origin: 286px 61.405px;" id="elbi8xbt7ktie" class="animable">
              </path>
              <g id="eli9fkuftgip">
                <circle cx="498.34" cy="64.62" r="26.66"
                  style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 498.34px 64.62px; transform: rotate(-13.72deg);"
                  class="animable"></circle>
              </g>
              <g id="elqs2zpp7ebr">
                <circle cx="498.34" cy="64.62" r="17.43"
                  style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 498.34px 64.62px; transform: rotate(-13.76deg);"
                  class="animable"></circle>
              </g>
              <path d="M488.15,67.82c1.18,4.39,4.2,8.21,10.19,8.21,6.17,0,9.1-3.45,10.2-8.21Z"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 498.345px 71.925px;"
                id="elqfhubxma67m" class="animable"></path>
              <path d="M494.2,61.4c0,2-.59,3.61-1.31,3.61s-1.31-1.62-1.31-3.61.59-3.6,1.31-3.6S494.2,59.41,494.2,61.4Z"
                style="fill: rgb(38, 50, 56); transform-origin: 492.89px 61.405px;" id="elb91txvvjcqg" class="animable">
              </path>
              <path d="M504,61.4c0,2-.59,3.61-1.31,3.61s-1.31-1.62-1.31-3.61.58-3.6,1.31-3.6S504,59.41,504,61.4Z"
                style="fill: rgb(38, 50, 56); transform-origin: 502.69px 61.405px;" id="ellq7dgjp75j8" class="animable">
              </path>
              <g id="elfd77k5a1k1w">
                <circle cx="353.87" cy="64.62" r="26.66"
                  style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 353.87px 64.62px; transform: rotate(-67.11deg);"
                  class="animable"></circle>
              </g>
              <g id="elx1mqjh9tq8h">
                <circle cx="353.87" cy="64.62" r="17.43"
                  style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 353.87px 64.62px; transform: rotate(-67.25deg);"
                  class="animable"></circle>
              </g>
              <path d="M343.81,76a11.42,11.42,0,0,1,19.91-.38"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 353.765px 72.9908px;"
                id="elc4e31rpvwsb" class="animable"></path>
              <path
                d="M349.73,61.4c0,2-.59,3.61-1.31,3.61s-1.31-1.62-1.31-3.61.58-3.6,1.31-3.6S349.73,59.41,349.73,61.4Z"
                style="fill: rgb(38, 50, 56); transform-origin: 348.42px 61.405px;" id="elmig4odzzvx" class="animable">
              </path>
              <path
                d="M359.55,61.4c0,2-.59,3.61-1.31,3.61s-1.31-1.62-1.31-3.61.59-3.6,1.31-3.6S359.55,59.41,359.55,61.4Z"
                style="fill: rgb(38, 50, 56); transform-origin: 358.24px 61.405px;" id="elcwoyzpe1pok" class="animable">
              </path>
            </g>
            <g id="freepik--device-3--inject-184" class="animable" style="transform-origin: 593.83px 220.295px;">
              <path
                d="M600.33,283l8.82,10.93a5.78,5.78,0,0,1-.94,8.18L587.83,318l-45-16,19.74-12.24a5.77,5.77,0,0,0,1.65-8.28L558.83,274Z"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 576.63px 296px;"
                id="elmkivrf7nsd" class="animable"></path>
              <polygon
                points="504.33 122.59 688.83 152.5 688.83 305 683.33 306.5 498.83 264.09 498.83 124.09 504.33 122.59"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 593.83px 214.545px;"
                id="elb9zeyzq5ain" class="animable"></polygon>
              <polygon points="498.83 264.09 683.33 306.5 683.33 154 498.83 124.09 498.83 264.09"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 591.08px 215.295px;"
                id="el6sthepz63cy" class="animable"></polygon>
              <polygon points="503.83 261.03 678.33 301.56 678.33 157.06 503.83 129.03 503.83 261.03"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 591.08px 215.295px;"
                id="elw0a8mog8kq" class="animable"></polygon>
            </g>
            <g id="freepik--device-2--inject-184" class="animable" style="transform-origin: 379.25px 209.39px;">
              <polygon
                points="414.2 294.78 345.75 294.78 351.45 273.99 351.45 262.1 408.49 262.1 408.49 275.17 414.2 294.78"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 379.975px 278.44px;"
                id="elikrntqzndi" class="animable"></polygon>
              <rect x="275.5" y="124" width="207.5" height="140"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 379.25px 194px;"
                id="elegfoxqaoc2l" class="animable"></rect>
              <rect x="280.5" y="128" width="197.5" height="132"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 379.25px 194px;"
                id="elkmpcbhrahfl" class="animable"></rect>
            </g>
            <g id="freepik--device-1--inject-184" class="animable" style="transform-origin: 166.5px 220.295px;">
              <path
                d="M160,283l-8.82,10.93a5.78,5.78,0,0,0,.95,8.18L172.5,318l45-16-19.74-12.24a5.77,5.77,0,0,1-1.64-8.28L201.5,274Z"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 183.702px 296px;"
                id="elvc12i8ag4h" class="animable"></path>
              <polygon points="256 122.59 71.5 152.5 71.5 305 77 306.5 261.5 264.09 261.5 124.09 256 122.59"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 166.5px 214.545px;"
                id="elfw9l593ndls" class="animable"></polygon>
              <polygon points="261.5 264.09 77 306.5 77 154 261.5 124.09 261.5 264.09"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 169.25px 215.295px;"
                id="elf8p3lklaqbb" class="animable"></polygon>
              <polygon points="256.5 261.03 82 301.56 82 157.06 256.5 129.03 256.5 261.03"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 169.25px 215.295px;"
                id="elt91nfe1t28" class="animable"></polygon>
            </g>
            <g id="freepik--charts-3--inject-184" class="animable" style="transform-origin: 591.37px 214.821px;">
              <g id="eltnz76h1cjz">
                <ellipse cx="558.49" cy="187.42" rx="24.9" ry="30.28"
                  style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 558.49px 187.42px; transform: rotate(-42.2deg);"
                  class="animable"></ellipse>
              </g>
              <path
                d="M574,184.09,563.47,182a38.58,38.58,0,0,0,1.36-7.13c.39-4-1-4.86-4.08-5.48s0,2.73-1.56,5.73c-1.25,2.41-5,4.32-6.42,5v18.28l15.57,3.05c5.25.25,1.94-4.09,1.94-4.09,3.9,0,1.56-4.37,1.56-4.37,3.9.18,1.17-4,1.17-4C577.1,187.81,574,184.09,574,184.09Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 563.948px 185.388px;"
                id="elc3w3mdlbzb" class="animable"></path>
              <polygon points="541.87 195.7 550.63 197.42 550.63 179.7 541.87 177.99 541.87 195.7"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 546.25px 187.705px;"
                id="eletgzrys56qs" class="animable"></polygon>
              <g id="elnh6iqtsh2t">
                <ellipse cx="624.25" cy="200.31" rx="24.9" ry="30.28"
                  style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 624.25px 200.31px; transform: rotate(-42.2deg);"
                  class="animable"></ellipse>
              </g>
              <path
                d="M608.75,203.64l10.52,2.06a39,39,0,0,0-1.37,7.13c-.39,4,1,4.86,4.09,5.47s0-2.72,1.56-5.73c1.24-2.4,5-4.31,6.42-5V189.31l-15.57-3.06c-5.26-.25-1.95,4.1-1.95,4.1-3.89,0-1.55,4.37-1.55,4.37-3.9-.18-1.17,4.05-1.17,4.05C605.64,199.92,608.75,203.64,608.75,203.64Z"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 618.794px 202.306px;"
                id="elrpsnij9rzyp" class="animable"></path>
              <polygon points="640.87 192.03 632.11 190.31 632.11 208.02 640.87 209.74 640.87 192.03"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 636.49px 200.025px;"
                id="el2ntzyxuv47c" class="animable"></polygon>
              <polygon
                points="520.44 251.25 543.64 236.91 557.55 248.38 582.74 225.43 592.02 251.97 603.28 244.8 611.9 254.12 637.08 241.21 651 281.38 520.44 251.25"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 585.72px 253.405px;"
                id="elnjibpryc1w" class="animable"></polygon>
              <polygon
                points="520.44 251.25 539 244.08 558.22 254.84 580.09 241.21 592.68 258.43 603.28 252.69 611.9 258.43 633.77 250.53 651 281.38 520.44 251.25"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 585.72px 261.295px;"
                id="el21t7mzf7621" class="animable"></polygon>
              <line x1="544.11" y1="149.39" x2="575.68" y2="154.41"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 559.895px 151.9px;"
                id="elnvjvtyk93n" class="animable"></line>
              <line x1="610.83" y1="159.43" x2="642.39" y2="164.45"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 626.61px 161.94px;"
                id="elv78i5tyscim" class="animable"></line>
            </g>
            <g id="freepik--charts-2--inject-184" class="animable" style="transform-origin: 385.455px 182.943px;">
              <rect x="299.4" y="144.13" width="48.06" height="7.66"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 323.43px 147.96px;"
                id="elolck3zcrpib" class="animable"></rect>
              <rect x="299.4" y="158.07" width="24.38" height="4.18"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 311.59px 160.16px;"
                id="elqtmoula66pd" class="animable"></rect>
              <circle cx="389.15" cy="174.59" r="14.18"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 389.15px 174.59px;"
                id="eliagsm346zz" class="animable"></circle>
              <path
                d="M398,176.65l-1.13,1.14-7.53,7.52-8.66-8.66a5.32,5.32,0,0,1,7.53-7.52l1.14,1.14,1.13-1.14a5.32,5.32,0,1,1,7.52,7.52Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 389.4px 176.382px;"
                id="el2d3tfpu4q2l" class="animable"></path>
              <circle cx="314.36" cy="199.28" r="14.18"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 314.36px 199.28px;"
                id="ell80b6clgz3" class="animable"></circle>
              <g id="eljml81wbpyp">
                <circle cx="314.36" cy="199.28" r="9.27"
                  style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 314.36px 199.28px; transform: rotate(-45deg);"
                  class="animable"></circle>
              </g>
              <path d="M309,202.14a6.06,6.06,0,0,0,10.59.2"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 314.295px 203.747px;"
                id="eldaedxxr9ssp" class="animable"></path>
              <ellipse cx="311.46" cy="197.56" rx="0.7" ry="1.92"
                style="fill: rgb(38, 50, 56); transform-origin: 311.46px 197.56px;" id="elguqjm12sfj7" class="animable">
              </ellipse>
              <path
                d="M317.39,197.56c0,1.06-.32,1.92-.7,1.92s-.7-.86-.7-1.92.31-1.91.7-1.91S317.39,196.51,317.39,197.56Z"
                style="fill: rgb(38, 50, 56); transform-origin: 316.69px 197.565px;" id="eld4b3oely9c9"
                class="animable"></path>
              <g id="el0df2g1m5b7re">
                <circle cx="428.03" cy="150.88" r="14.18"
                  style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 428.03px 150.88px; transform: rotate(-70.48deg);"
                  class="animable"></circle>
              </g>
              <g id="elfdbg8ng1n69">
                <circle cx="428.03" cy="150.88" r="9.27"
                  style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 428.03px 150.88px; transform: rotate(-9.24deg);"
                  class="animable"></circle>
              </g>
              <path d="M422.61,152.58c.63,2.34,2.23,4.37,5.42,4.37s4.84-1.84,5.43-4.37Z"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 428.035px 154.765px;"
                id="el0uxc369piyn" class="animable"></path>
              <path
                d="M425.83,149.17c0,1.06-.31,1.92-.7,1.92s-.7-.86-.7-1.92.32-1.92.7-1.92S425.83,148.11,425.83,149.17Z"
                style="fill: rgb(38, 50, 56); transform-origin: 425.13px 149.17px;" id="elmpgzoh7tno" class="animable">
              </path>
              <path
                d="M431.06,149.17c0,1.06-.32,1.92-.7,1.92s-.7-.86-.7-1.92.31-1.92.7-1.92S431.06,148.11,431.06,149.17Z"
                style="fill: rgb(38, 50, 56); transform-origin: 430.36px 149.17px;" id="elnr9fdf1d7nq" class="animable">
              </path>
              <circle cx="352.11" cy="188.43" r="14.18"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 352.11px 188.43px;"
                id="elwjsj893yf0h" class="animable"></circle>
              <g id="el1wslt6lh00y">
                <circle cx="352.11" cy="188.43" r="9.27"
                  style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 352.11px 188.43px; transform: rotate(-68.2deg);"
                  class="animable"></circle>
              </g>
              <path d="M346.75,194.5a6.07,6.07,0,0,1,10.6-.2"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 352.05px 192.893px;"
                id="elgxvfzf333jb" class="animable"></path>
              <path
                d="M349.9,186.71c0,1.06-.31,1.92-.7,1.92s-.69-.86-.69-1.92.31-1.91.69-1.91S349.9,185.66,349.9,186.71Z"
                style="fill: rgb(38, 50, 56); transform-origin: 349.205px 186.715px;" id="elbw8u7df74z9"
                class="animable"></path>
              <ellipse cx="354.43" cy="186.71" rx="0.7" ry="1.92"
                style="fill: rgb(38, 50, 56); transform-origin: 354.43px 186.71px;" id="elmvfbc2ro3mk" class="animable">
              </ellipse>
              <rect x="300.8" y="216.58" width="25.58" height="13.93"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 313.59px 223.545px;"
                id="elv8y87c2rp3" class="animable"></rect>
              <rect x="339.17" y="205.99" width="25.58" height="24.52"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 351.96px 218.25px;"
                id="elz6k3o3ua0po" class="animable"></rect>
              <rect x="377.54" y="192.06" width="25.58" height="38.45"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 390.33px 211.285px;"
                id="ela6ne86iv2in" class="animable"></rect>
              <rect x="415.92" y="169.21" width="25.58" height="61.3"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 428.71px 199.86px;"
                id="eln2ewnntk2a" class="animable"></rect>
              <g id="el02oqb98srx4y">
                <circle cx="457.65" cy="176.31" r="9.8"
                  style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 457.65px 176.31px; transform: rotate(-45deg);"
                  class="animable"></circle>
              </g>
              <path
                d="M463.18,174h-3.75a16.23,16.23,0,0,0,.48-2.64c.14-1.46-.35-1.67-1.46-1.67s0,1-.55,2.16a7.17,7.17,0,0,1-2.3,2.23v6.52h5.56c1.88-.27.7-1.59.7-1.59,1.39-.28.55-1.67.55-1.67,1.39-.21.42-1.53.42-1.53A1,1,0,0,0,463.18,174Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 459.612px 175.145px;"
                id="el6883gnpwwfh" class="animable"></path>
              <rect x="451.71" y="174.1" width="3.13" height="6.32"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 453.275px 177.26px;"
                id="elcwhvv03ciej" class="animable"></rect>
              <g id="elt63j3z7tfe">
                <circle cx="457.65" cy="219.25" r="9.8"
                  style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 457.65px 219.25px; transform: rotate(-45deg);"
                  class="animable"></circle>
              </g>
              <path
                d="M452.12,221.53h3.75a15.59,15.59,0,0,0-.49,2.64c-.14,1.46.35,1.67,1.46,1.67s0-1,.56-2.16a7.15,7.15,0,0,1,2.29-2.23v-6.52h-5.56c-1.87.27-.69,1.59-.69,1.59-1.39.28-.56,1.67-.56,1.67-1.39.21-.42,1.53-.42,1.53A1,1,0,0,0,452.12,221.53Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 455.682px 220.385px;"
                id="elha0oo72adrc" class="animable"></path>
              <g id="elw6zyszqbzpg">
                <rect x="460.46" y="215.13" width="3.13" height="6.32"
                  style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 462.025px 218.29px; transform: rotate(180deg);"
                  class="animable"></rect>
              </g>
            </g>
            <g id="freepik--charts-1--inject-184" class="animable" style="transform-origin: 170.725px 219.097px;">
              <path
                d="M208.34,183.31,104.58,203.78c-2.75.54-5-.9-5-3.22V182c0-2.33,2.24-4.62,5-5.13l103.76-19c2.47-.45,4.46,1,4.46,3.15v17.54C212.8,180.65,210.81,182.82,208.34,183.31Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 156.19px 180.841px;"
                id="el82a01dfyzj" class="animable"></path>
              <path
                d="M125.2,186.14c0-4.65-4.44-7.6-9.94-6.57s-10.05,5.67-10.05,10.37,4.51,7.64,10.05,6.56S125.2,190.79,125.2,186.14Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 115.205px 188.044px;"
                id="el665nxc8d125" class="animable"></path>
              <line x1="135.04" y1="180.15" x2="178.11" y2="172.05"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 156.575px 176.1px;"
                id="elzucgx53c5tq" class="animable"></line>
              <line x1="135.04" y1="183.87" x2="178.11" y2="175.69"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 156.575px 179.78px;"
                id="el4u4mbksz5ck" class="animable"></line>
              <line x1="135.04" y1="188.53" x2="199.18" y2="176.18"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 167.11px 182.355px;"
                id="el7r22w2erl6g" class="animable"></line>
              <path
                d="M208.34,258.85,104.58,283.56c-2.75.66-5-.69-5-3V261.94c0-2.33,2.24-4.72,5-5.33l103.76-23.28c2.47-.55,4.46.78,4.46,3v17.53C212.8,256,210.81,258.27,208.34,258.85Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 156.19px 258.467px;"
                id="elsu14ae1dmcc" class="animable"></path>
              <path
                d="M125.2,265.08c0-4.65-4.44-7.41-9.94-6.16S105.21,265,105.21,269.7s4.51,7.45,10.05,6.15S125.2,269.74,125.2,265.08Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 115.205px 267.396px;"
                id="el39v4gyy8wnp" class="animable"></path>
              <line x1="135.04" y1="258.69" x2="178.11" y2="248.83"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 156.575px 253.76px;"
                id="elzdq29jd6o9m" class="animable"></line>
              <line x1="135.04" y1="262.41" x2="178.11" y2="252.47"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 156.575px 257.44px;"
                id="elx6lpe28c348" class="animable"></line>
              <line x1="135.04" y1="267.07" x2="199.18" y2="252.1"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 167.11px 259.585px;"
                id="elniv20y3mb0i" class="animable"></line>
              <path
                d="M218.14,161.6c0-4.83-4.38-7.94-9.82-6.95s-9.92,5.75-9.92,10.63,4.46,8,9.92,6.93S218.14,166.42,218.14,161.6Z"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 208.27px 163.443px;"
                id="ell8e9b5r0fgc" class="animable"></path>
              <path
                d="M214.43,163.56l-.78.85-5.23,5.64-6-4.23c-1.45-1-1.45-3.12,0-4.68a4.87,4.87,0,0,1,2.64-1.45,3.48,3.48,0,0,1,2.62.48l.79.56.79-.85a4.77,4.77,0,0,1,2.61-1.44,3.38,3.38,0,0,1,2.6.48C215.87,159.93,215.87,162,214.43,163.56Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 208.424px 164.205px;"
                id="el6iekv0dj5op" class="animable"></path>
              <path
                d="M233.51,214.59l-100.88,21.9c-2.67.58-4.85-.8-4.85-3.09V215.05c0-2.29,2.18-4.59,4.85-5.13l100.88-20.51c2.39-.49,4.33.87,4.33,3v17.29A5.45,5.45,0,0,1,233.51,214.59Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 182.81px 212.966px;"
                id="elz5ec4awqz7q" class="animable"></path>
              <path
                d="M152.66,218.76c0-4.58-4.31-7.41-9.66-6.31s-9.76,5.76-9.76,10.39,4.39,7.45,9.76,6.3S152.66,223.35,152.66,218.76Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 142.95px 220.805px;"
                id="elo1r671quat" class="animable"></path>
              <line x1="162.23" y1="212.69" x2="204.1" y2="203.98"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 183.165px 208.335px;"
                id="eljwx345p3q5" class="animable"></line>
              <line x1="162.23" y1="216.36" x2="204.1" y2="207.57"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 183.165px 211.965px;"
                id="elomb3nduitw9" class="animable"></line>
              <line x1="162.23" y1="220.95" x2="224.59" y2="207.71"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 193.41px 214.33px;"
                id="el7x2bi9ybi3y" class="animable"></line>
              <path
                d="M241.87,192.94c0-4.76-4.27-7.76-9.56-6.69s-9.67,5.85-9.67,10.66,4.34,7.8,9.67,6.68S241.87,197.71,241.87,192.94Z"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 232.255px 194.929px;"
                id="elq2nhagrm1sq" class="animable"></path>
              <path
                d="M238.57,193.62c0-3.12-2.8-5.08-6.26-4.37s-6.31,3.83-6.31,7,2.83,5.09,6.31,4.36S238.57,196.74,238.57,193.62Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 232.285px 194.935px;"
                id="el4md7b56b4kf" class="animable"></path>
              <path d="M228.62,196.72c.43,1.34,1.52,2.36,3.69,1.91A4.41,4.41,0,0,0,236,195.2Z"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 232.31px 196.969px;"
                id="elf67m02nyqee" class="animable"></path>
              <path
                d="M230.81,194.18c0,.64-.21,1.21-.47,1.27s-.47-.43-.47-1.08.21-1.22.47-1.27S230.81,193.53,230.81,194.18Z"
                style="fill: rgb(38, 50, 56); transform-origin: 230.34px 194.276px;" id="el1qn4tlnnajg"
                class="animable"></path>
              <path
                d="M234.36,193.45c0,.64-.22,1.21-.48,1.27s-.47-.43-.47-1.08.21-1.21.47-1.27S234.36,192.8,234.36,193.45Z"
                style="fill: rgb(38, 50, 56); transform-origin: 233.885px 193.545px;" id="el6dsxda0bnmm"
                class="animable"></path>
              <path
                d="M219,233.69c0-4.82-4.38-7.76-9.81-6.56s-9.91,6.14-9.91,11,4.45,7.8,9.91,6.54S219,238.52,219,233.69Z"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 209.14px 235.912px;"
                id="elzgoiqeyizff" class="animable"></path>
              <path
                d="M215.62,234.46c0-3.16-2.87-5.08-6.43-4.29s-6.47,4-6.47,7.2,2.91,5.1,6.47,4.28S215.62,237.62,215.62,234.46Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 209.17px 235.917px;"
                id="elgjef8qp29oa" class="animable"></path>
              <path d="M205.47,240.52a5.76,5.76,0,0,1,3.72-2.84,3.5,3.5,0,0,1,3.64,1"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 209.15px 239.021px;"
                id="el1820wd698hc" class="animable"></path>
              <path
                d="M207.66,235.19c0,.66-.22,1.24-.49,1.3s-.48-.42-.48-1.08.22-1.23.48-1.29S207.66,234.54,207.66,235.19Z"
                style="fill: rgb(38, 50, 56); transform-origin: 207.175px 235.305px;" id="elezowwgmnucv"
                class="animable"></path>
              <path
                d="M211.29,234.38c0,.65-.21,1.23-.48,1.29s-.48-.42-.48-1.08.21-1.23.48-1.29S211.29,233.72,211.29,234.38Z"
                style="fill: rgb(38, 50, 56); transform-origin: 210.81px 234.485px;" id="ele85ruewph3" class="animable">
              </path>
            </g>
            <g id="freepik--Character--inject-184" class="animable" style="transform-origin: 378.733px 329.43px;">
              <path
                d="M350.76,268.46s-2.54-2.82-5.65-2.54-3.39,0-1.69,7.9,4.8,15,6.49,15a4,4,0,0,0,2.82-1.41l2.54,5.36h61s9-15.8,7.9-23.42-7.34-2.54-7.34-2.54Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 383.324px 278.961px;"
                id="eljh1fmu5711" class="animable"></path>
              <path
                d="M361.48,284s-6.77-4-9.88-10.72a28.53,28.53,0,0,1-2.82-12.14s-7.06-9-1.41-23.14,9.31-17.5,11.57-16.94l2.26.57s7.34-16.09,18.63-16.09,26.53,8.18,34.15,16.65,11.57,22,9.88,24.84a8.7,8.7,0,0,1-4.23,3.67s-.57,15-5.37,21.45a126.44,126.44,0,0,1-10.72,12.42L362.89,286Z"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 384.713px 245.77px;"
                id="ely288u4gs1o" class="animable"></path>
              <path
                d="M267,317.32s2-7,1-12-5.5-13.5-2.5-20,6.33-5.64,4.5-1.5c-1.19,2.7-.5,7-.5,7s4.5-6,6.5-6.5a18.78,18.78,0,0,1,5.5,0s1.5-2.5,3-2.5h5s5.5-6.5,8.5-5,9,8,7.5,11-5.5-1.5-5.5-1.5l-2-2.5s-2.5,5.5-3,9.5a18.16,18.16,0,0,0,0,6l2,1.5,9-3c3-1,6.5,2.5,4,4s-8.5,5-9.5,6.5-6,3-6,3l-3.5,1-7,13S272,313.32,267,317.32Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 287.668px 300.958px;"
                id="elw6ehe3wf2qc" class="animable"></path>
              <path d="M289.5,281.82s-2.5,1.5-3.5,6"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 287.75px 284.82px;"
                id="els6m2gnf5q3s" class="animable"></path>
              <path d="M281.5,284.32a19.59,19.59,0,0,0-4,4.5"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 279.5px 286.57px;"
                id="el9tg54ls70zv" class="animable"></path>
              <path
                d="M284,318.82s-5-6.5-11-7-9,1-10,3-4,4-4,4-15.5,10.5-23,18-16,14-15.5,21,15.5,9,20.5,6.5,13.5-11.5,17-17.5S284,318.82,284,318.82Z"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 252.239px 338.537px;"
                id="elluyc4p5o7s" class="animable"></path>
              <path d="M429.5,298.32s-18-13.5-31.5-18.5-30.5-2-40,3.5-23,14-23,14Z"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 382.25px 287.797px;"
                id="elffnlcv5i85" class="animable"></path>
              <path
                d="M507.5,334.32s-2-7-1-12,5.5-13.5,2.5-20-6.6-5.51-4.5-1.5a9.32,9.32,0,0,1,.5,7s-4.5-6-6.5-6.5a18.78,18.78,0,0,0-5.5,0s-1.5-2.5-3-2.5h-5s-5.5-6.5-8.5-5-9,8-7.5,11,5.5-1.5,5.5-1.5l2-2.5s2.5,5.5,3,9.5a18.16,18.16,0,0,1,0,6l-2,1.5-9-3c-3-1-6.5,2.5-4,4s8.5,5,9.5,6.5,6,3,6,3l3.5,1,7,13S502.5,330.32,507.5,334.32Z"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 486.832px 317.958px;"
                id="elheznstcgdxt" class="animable"></path>
              <path d="M485,298.82s2.5,1.5,3.5,6"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 486.75px 301.82px;"
                id="el6ku8n1mqqmt" class="animable"></path>
              <path d="M493,301.32a19.59,19.59,0,0,1,4,4.5"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 495px 303.57px;"
                id="elo5ial0o27hc" class="animable"></path>
              <path
                d="M494,336.32s1-2.5,5.5-4.5,10,0,10,0l3,6.5s-3,2.5,8.5,9.5,16,20.5,16,26.5-16.5-8-26.5-16S494,336.32,494,336.32Z"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 515.5px 353.352px;"
                id="elxpf4rvkm0vj" class="animable"></path>
              <path
                d="M432.5,298.82s-29.5-8-48-9-44,5.5-47.5,6-33,4.5-36,6-55,41.5-55,41.5-8,1.5-18,4.5-12,11-12,11,3,23,10,26,13,0,19-2.5,51.5-18,51.5-18l6.5,37.5H450.5l9-39.5s52,40,59.5,40.5,17.5-4.5,21.5-12-5.5-24-9-29-13.5-10.5-21-15.5-37.5-38.5-41.5-41.5S432.5,298.82,432.5,298.82Z"
                style="fill: rgb(146, 227, 169); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 378.733px 346.285px;"
                id="elq95vdcilc0l" class="animable"></path>
              <g id="elhvufk5q0sr5">
                <path
                  d="M460.53,329.87s15.47-19.87-3.74-20a51.55,51.55,0,0,0-31.73,10.62s-46.62-10.62-69.91-10.62S360.9,320.48,367,331s-27.46-10.52-41.38-12.65c-10.12-1.55-14.2,4-15.37,16.17l-18-11.91S252,364,247,366s-16-6-16,3,10,15.65,14,13.32S294,361,294,361l16,32,4.76,1.7c.15.84.24,1.3.24,1.3l3.81.15L324,398l0-1.66L446,401l10-40s41,22,49,29,16,4,19-1S460.53,329.87,460.53,329.87Z"
                  style="opacity: 0.2; transform-origin: 377.549px 355.434px;" class="animable"></path>
              </g>
              <path d="M399.73,317.91c1.82,1,3.3,1.79,4.27,2.41"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 401.865px 319.115px;"
                id="elaiobfkrh96u" class="animable"></path>
              <path d="M364,300.82s20.56,9.35,32.67,15.5"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 380.335px 308.57px;"
                id="el2ebqm3xka4p" class="animable"></path>
              <path d="M389.5,310.32s14,6,20.5,11.5"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 399.75px 316.07px;"
                id="elyykgm24fr6" class="animable"></path>
              <polyline points="466.19 339.25 459.5 362.32 473.5 337.32"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 466.5px 349.82px;"
                id="elrfh698g9r0n" class="animable"></polyline>
              <line x1="469.5" y1="327.82" x2="467.84" y2="333.55"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 468.67px 330.685px;"
                id="el37t6x3sc8rw" class="animable"></line>
              <polyline points="290.64 339.42 296.5 364.32 282.5 342.82"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 289.5px 351.87px;"
                id="elirh811fka4" class="animable"></polyline>
              <line x1="288.5" y1="330.32" x2="289.62" y2="335.09"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 289.06px 332.705px;"
                id="elk4u3jaf6da" class="animable"></line>
              <path d="M229.75,351.68A42.6,42.6,0,0,1,246,343.32"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 237.875px 347.5px;"
                id="el0uj88pwptklc" class="animable"></path>
              <path d="M223.5,357.82a35.63,35.63,0,0,1,3.08-3.33"
                style="fill: none; stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 225.04px 356.155px;"
                id="el3tiuc3fga3d" class="animable"></path>
              <path
                d="M303.24,453.32l-11.93-59.91a5.51,5.51,0,0,1,5.41-6.59H459.78a5.51,5.51,0,0,1,5.41,6.59l-11.93,59.91"
                style="fill: rgb(255, 255, 255); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 378.25px 420.07px;"
                id="elzjlkswz6hsq" class="animable"></path>
              <polyline points="309.61 453.32 297.5 386.82 459 386.82 446.89 453.32"
                style="fill: rgb(38, 50, 56); stroke: rgb(38, 50, 56); stroke-linecap: round; stroke-linejoin: round; transform-origin: 378.25px 420.07px;"
                id="elee71rgnpsps" class="animable"></polyline>
            </g>
            <defs>
              <filter id="active" height="200%">
                <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2"></feMorphology>
                <feFlood flood-color="#32DFEC" flood-opacity="1" result="PINK"></feFlood>
                <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE"></feComposite>
                <feMerge>
                  <feMergeNode in="OUTLINE"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
              <filter id="hover" height="200%">
                <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2"></feMorphology>
                <feFlood flood-color="#ff0000" flood-opacity="0.5" result="PINK"></feFlood>
                <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE"></feComposite>
                <feMerge>
                  <feMergeNode in="OUTLINE"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
                <feColorMatrix type="matrix"
                  values="0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 ">
                </feColorMatrix>
              </filter>
            </defs>
          </svg>
          <p class="text-2xl mt-12 font-bold text-white">WhatsApp Web</p>
          <p class="mt-12 text-center text-gray-400">
            Envoyez et recevez des messages sans avoir à garder votre téléphone connecté. <br>
            Utilisez WhatsApp sur un maximum de 4 appareils et un téléphone simultanément.
          </p>
        </div>
        <div class="flex items-center gap-2 text-gray-500 text-sm">
          <i data-lucide="lock-keyhole" class="w-4 h-4"></i>
          <p>Vos messages personnels sont chiffrés de bout en bout</p>
        </div>
      </div>

      <div id="discussion" class="flex flex-col h-full w-full bg-whatsapp bg-contain bg-center object-cover hidden">
        <div class="flex justify-between bg-main">
          <div class="flex gap-3 ">
            <img src="https://i.pravatar.cc/" alt="avatar" class="w-14 h-14 rounded-full" />
            <div class="flex flex-col flex-1">
              <span class="font-bold">Bob</span>
              <span class="font-sm">en ligne</span>
            </div>
          </div>
          <div class="flex gap-5">
            <i data-lucide="search" class="text-2xl mt-1"></i>
            <i class="fas fa-ellipsis-v text-2xl hover:text-white cursor-pointer"></i>
          </div>
        </div>
        <div class="messages flex flex-col flex-1 overflow-y-auto px-4 py-2 space-y-4">
          <div
            class="bg-[#144D37] p-2  text-white max-w-xs self-end rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-2xl">
            <div class="flex justify-between items-end gap-3">
              <p>Salut fils</p>
              <span class="text-xs text-gray-300 whitespace-nowrap">22:00
              </span>
              <i data-lucide="check-check" class="w-3 h-3  -ml-2"></i>

            </div>
          </div>

          <div
            class="flex justify-between items-end gap-2 bg-[#242626] p-2 rounded-tl-none rounded-bl-2xl rounded-tr-2xl rounded-br-2xl text-white max-w-xs self-start">
            <p>Hey ! Ça va ?</p>
            <span class="text-xs">22:02</span>
          </div>
        </div>

        <div class="w-full relative">
          <i data-lucide="plus" class="absolute left-4 top-1/2 -translate-y-1/2 text-white cursor-pointer"></i>

          <i data-lucide="smile" class="absolute left-10 top-1/2 -translate-y-1/2 text-white cursor-pointer"></i>

          <input id="message-input" type="text" placeholder="Entrer un message"
            class="w-full pl-20 pr-12 py-3 rounded-full bg-[#242626] text-white placeholder:text-white focus:outline-none" />

          <i data-lucide="mic" class="absolute right-4 top-1/2 -translate-y-1/2 text-white cursor-pointer"></i>
        </div>
      </div>
    </main>
  `
  return main
}