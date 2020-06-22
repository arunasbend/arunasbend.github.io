import React from "react";
import "./Post.css";
import Inline_Image_5 from "./assets/Inline_Image_5.png";
import Screenshot_1 from "./assets/Screenshot_1.png";
import Screen_Shot_2019_06_05_at_11_36_10_AM from "./assets/Screen_Shot_2019-06-05_at_11.36.10_AM.png";
import Screen_Shot_2019_06_05_at_11_41_17_AM from "./assets/Screen_Shot_2019-06-05_at_11.41.17_AM.png";
import Screen_Shot_2019_06_07_at_10_46_36_AM from "./assets/Screen_Shot_2019-06-07_at_10.46.36_AM.png";
import Screen_Shot_2019_06_05_at_11_37_20_AM from "./assets/Screen_Shot_2019-06-05_at_11.37.20_AM.png";
import Screen_Shot_2019_06_07_at_10_41_29_AM from "./assets/Screen_Shot_2019-06-07_at_10.41.29_AM.png";
import Screen_Shot_2019_05_09_at_10_51_11_AM from "./assets/Screen_Shot_2019-05-09_at_10.51.11_AM.png";
import Screen_Shot_2019_06_13_at_9_23_56_AM from "./assets/Screen_Shot_2019-06-13_at_9.23.56_AM.png";
import Screen_Shot_2019_06_13_at_9_25_40_AM from "./assets/Screen_Shot_2019-06-13_at_9.25.40_AM.png";
import Screen_Shot_2019_05_09_at_11_50_30_AM from "./assets/Screen_Shot_2019-05-09_at_11.50.30_AM.png";
import Screen_Shot_2019_06_07_at_10_49_52_AM from "./assets/Screen_Shot_2019-06-07_at_10.49.52_AM.png";

export default function Post1() {
  return (
    <div class="page inverted-colors js-page">
      <main class="page__content js-page-content">
        <div class="promo-banner promo-banner--article have-promo--True js-promo-banner-wrapper">
          <div class="page__frame">
            <div class="promo-banner__wrapper">
              <h1 class="promo-banner__title--smaller">
                Building a faster rocket: Achieving quicker app load times
              </h1>
              <div class="promo-article-info">
                <time class="promo-article-info__date" datetime="2019-05-09">
                  05/09/2019
                </time>
              </div>
            </div>
          </div>
        </div>
        <div class="page__frame">
          <div class="article have-promo--True js-article-wrapper">
            <main class="article__content">
              <h2>Speed matters.</h2>

              <p>
                As large-scale software projects mature, scale, and grow
                complex, the effort required to ship new releases increases.
                With the introduction of new features and code becoming more
                complex, load times can slow down significantly. This in turn
                negatively impacts the user experience—leaving a bad impression
                on customers.
              </p>

              <p>
                For our project,
                <a href="https://www.servicebridge.com/?utm_source=google&amp;utm_medium=cpc&amp;utm_campaign=brand&amp;gclid=CjwKCAjwwtTmBRBqEiwA-b6c_3TL5sM72jxmw30JJsqREZbqJM-6BQTcmo7jcy_hWecGJcgchtWSKRoC5y8QAvD_BwE">
                  ServiceBridge
                </a>
                , we faced the challenge of having significant speed performance
                drop on the front-end (what you experience as a user). While the
                back end is faster than ever, rendering that information and
                displaying it to the client creates a slowdown, frustrating
                users. Over the years the codebase has grown, accumulating large
                amounts of script files. Our strategy has been to bundle it in
                order to minimize the file size and cache for every release.
              </p>

              <p>
                This strategy historically had a negative impact on users. With
                the bundle being loaded in one go (even with compression), it
                was a lot of data to process. While returning users no longer
                required networking time, every page was parsing JavaScript and
                executing it. All of this can be taxing on resources and
                time-consuming.
              </p>

              <p>
                In today’s market, speed matters more than ever. The
                ServiceBridge team knew this was a problem that had to be fixed.
                We developed a clear plan to reduce load times and provide our
                users with the fastest experience possible. In this article,
                we’ll share insights into what we did—and what you can do—to
                deliver the speed and the optimal UX for your customers.
              </p>

              <img alt="" src={Inline_Image_5} />

              <h2>Identify the problem(s).</h2>

              <p>
                Often, the biggest issue is deciding where to start. What do you
                fix first? How complex are the problems you’re facing? What
                issues are plaguing users? The list of questions can go on and
                on. Fortunately, there are a number of tools that help identify
                and baseline the problem.
              </p>

              <h3>Audits</h3>

              <p>
                A good starting point is the Audits tab in Chrome Devtools. Some
                of the audit data varies over different runs or on different
                pages. Overall, you can see what’s impacting load time. It will
                look something like this.
              </p>

              <img alt="" src={Screen_Shot_2019_06_05_at_11_36_10_AM} />

              <h3>Baseline data</h3>

              <p>
                To be able to compare if you are moving in the right direction,
                save this audit report for future reference.
              </p>

              <img alt="" src={Screen_Shot_2019_06_05_at_11_37_20_AM} />
              <p>
                Now, with the list of documented issues from Google, you can
                begin fixing your problems.
              </p>

              <h3>Deeper metrics</h3>

              <p>
                There are a number of additional metrics to help better
                understand how to improve load speeds efficiently such as First
                Contentful Paint, First Meaningful Paint, Time To Interactive,
                First Input Delay, DOMContentLoaded, and OnLoad. To track load
                speeds, browsers support APIs to measure metrics.
              </p>

              <p>Some options include:</p>

              <ul>
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver">
                    https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver
                  </a>
                </li>
                <li>
                  <a href="https://w3c.github.io/longtasks/">
                    https://w3c.github.io/longtasks/
                  </a>
                </li>
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry">
                    https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry
                  </a>
                </li>
              </ul>

              <p>
                All of these metrics can be considered when looking to improve
                the overall user experience. Rather than fixating on a single
                number, the loading of a page is an experience. However, take
                these metrics with a grain of salt.
              </p>

              <p>
                For example, imagine there is a fast time to interactive, but
                the paint is slow to load. The user is there for the text and
                filling in form data that is not a concern in that context. In
                this case, the TTI will give you a false reading. This may
                frustrate the user so much that they opt to leave the page. In
                order to remedy this, we need to know what use case we are
                optimizing for.
              </p>

              <p>
                *In the case of our work at ServiceBridge, our goal was to show
                content as soon as possible and respond without delays so the
                user can feel in control while using the product.
              </p>

              <h3>Network</h3>

              <p>
                The image above is a great example of an unoptimized networking
                tab. While every back end response is fast, the whole experience
                for a user is going to be bad if the content takes a long time
                to render. This probably looks very confusing. Focus on the
                network graph and main thread activity.
                <strong>
                  A good rule of thumb is to use a PRPL pattern—Push, Render,
                  Precache, Lazy-load.
                </strong>
                Even if you don’t utilize service workers, there’s a lot to be
                learned here.
              </p>

              <h3>Webpack bundle analyzer</h3>

              <img alt="" src={Screen_Shot_2019_06_07_at_10_41_29_AM} />

              <p>
                Another tool to identify issues when using webpack is bundle
                analyzer. This tool helps find ways to optimize code splitting
                in order to minimize network and parse time.
              </p>

              <h2>Monitor performance.</h2>

              <p>
                To get a sense of our real user performance, set up various
                metrics to track and decide what needs optimization.
                Optimization is not something that you do once and forget
                about—it needs attention repeatedly. To tackle optimization,
                automate tests. &nbsp;
              </p>

              <p>
                <strong>
                  Here’s a snapshot of what we did for our work at
                  ServiceBridge.
                </strong>
              </p>

              <p>
                We started by setting up tracking for First Paint metrics.&nbsp;
              </p>

              <pre class="language-js">
                <code class=" language-js">
                  <span class="token keyword">const</span> observer{" "}
                  <span class="token operator">=</span>{" "}
                  <span class="token keyword">new</span>{" "}
                  <span class="token class-name">PerformanceObserver</span>
                  <span class="token punctuation">(</span>
                  <span class="token punctuation">(</span>
                  <span class="token parameter">list</span>
                  <span class="token punctuation">)</span>{" "}
                  <span class="token operator">=&gt;</span>{" "}
                  <span class="token punctuation">&#123;</span>
                  <span class="token keyword">for</span>{" "}
                  <span class="token punctuation">(</span>
                  <span class="token keyword">const</span> entry{" "}
                  <span class="token keyword">of</span> list
                  <span class="token punctuation">.</span>
                  <span class="token function">getEntries</span>
                  <span class="token punctuation">(</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">)</span>{" "}
                  <span class="token punctuation">&#123;</span>
                  <span class="token keyword">const</span> metricName{" "}
                  <span class="token operator">=</span> entry
                  <span class="token punctuation">.</span>name
                  <span class="token punctuation">;</span>
                  <span class="token keyword">const</span> time{" "}
                  <span class="token operator">=</span> Math
                  <span class="token punctuation">.</span>
                  <span class="token function">round</span>
                  <span class="token punctuation">(</span>entry
                  <span class="token punctuation">.</span>startTime{" "}
                  <span class="token operator">+</span> entry
                  <span class="token punctuation">.</span>duration
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">;</span>
                  <span class="token comment">
                    // `name` will be either 'first-paint' or
                    'first-contentful-paint'.
                  </span>
                  <span class="token keyword">if</span>{" "}
                  <span class="token punctuation">(</span>metricName{" "}
                  <span class="token operator">==</span>{" "}
                  <span class="token string">'first-paint'</span>
                  <span class="token punctuation">)</span>{" "}
                  <span class="token punctuation">&#123;</span>
                  newrelic<span class="token punctuation">.</span>
                  <span class="token function">addPageAction</span>
                  <span class="token punctuation">(</span>
                  <span class="token string">'First Paint'</span>
                  <span class="token punctuation">,</span>{" "}
                  <span class="token punctuation">&#123;</span>time
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">;</span>
                  <span class="token punctuation">&#125;</span>
                  <span class="token keyword">if</span>{" "}
                  <span class="token punctuation">(</span>metricName{" "}
                  <span class="token operator">==</span>{" "}
                  <span class="token string">'first-contentful-paint'</span>
                  <span class="token punctuation">)</span>{" "}
                  <span class="token punctuation">&#123;</span>
                  newrelic<span class="token punctuation">.</span>
                  <span class="token function">addPageAction</span>
                  <span class="token punctuation">(</span>
                  <span class="token string">'First Contentful Paint'</span>
                  <span class="token punctuation">,</span>{" "}
                  <span class="token punctuation">&#123;</span>time
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">;</span>
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">;</span>
                  observer<span class="token punctuation">.</span>
                  <span class="token function">observe</span>
                  <span class="token punctuation">(</span>
                  <span class="token punctuation">&#123;</span> entryTypes
                  <span class="token punctuation">:</span>{" "}
                  <span class="token punctuation">[</span>
                  <span class="token string">'paint'</span>
                  <span class="token punctuation">]</span>{" "}
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">;</span>
                </code>
              </pre>

              <p>
                We used NewRelic as a browser client where we later aggregate
                the data and create charts and PerformanceObserver browser API
                for their good browser support.
              </p>

              <img alt="" src={Screen_Shot_2019_05_09_at_10_51_11_AM} />

              <p>
                Since this was (and still is) an industry standard, we no longer
                needed to write hacky code to implement timing logic of the
                metrics—everything could be handled in a way that we didn't
                notice any performance drop.&nbsp;
              </p>

              <p>
                The metrics in the chart above are important because if the load
                times are too high, users might get confused by whether or not
                the application is going to load.
              </p>

              <p>
                <strong>TTI</strong> requires a polyfill. Even then, it will
                only work in Chrome 58+.&nbsp;
              </p>

              <pre class="language-js">
                <code class=" language-js">
                  <span class="token comment">// Time to interactive</span>
                  <span class="token operator">!</span>
                  <span class="token keyword">function</span>
                  <span class="token punctuation">(</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">&#123;</span>
                  <span class="token keyword">if</span>
                  <span class="token punctuation">(</span>
                  <span class="token string">
                    'PerformanceLongTaskTiming'
                  </span>{" "}
                  <span class="token keyword">in</span> window
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">&#123;</span>
                  <span class="token keyword">var</span> g
                  <span class="token operator">=</span>window
                  <span class="token punctuation">.</span>__tti
                  <span class="token operator">=</span>
                  <span class="token punctuation">&#123;</span>e
                  <span class="token punctuation">:</span>
                  <span class="token punctuation">[</span>
                  <span class="token punctuation">]</span>
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">;</span>g
                  <span class="token punctuation">.</span>o
                  <span class="token operator">=</span>
                  <span class="token keyword">new</span>{" "}
                  <span class="token class-name">PerformanceObserver</span>
                  <span class="token punctuation">(</span>
                  <span class="token keyword">function</span>
                  <span class="token punctuation">(</span>
                  <span class="token parameter">l</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">&#123;</span>g
                  <span class="token punctuation">.</span>e
                  <span class="token operator">=</span>g
                  <span class="token punctuation">.</span>e
                  <span class="token punctuation">.</span>
                  <span class="token function">concat</span>
                  <span class="token punctuation">(</span>l
                  <span class="token punctuation">.</span>
                  <span class="token function">getEntries</span>
                  <span class="token punctuation">(</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">;</span>g
                  <span class="token punctuation">.</span>o
                  <span class="token punctuation">.</span>
                  <span class="token function">observe</span>
                  <span class="token punctuation">(</span>
                  <span class="token punctuation">&#123;</span>entryTypes
                  <span class="token punctuation">:</span>
                  <span class="token punctuation">[</span>
                  <span class="token string">'longtask'</span>
                  <span class="token punctuation">]</span>
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">(</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">;</span>
                  <span class="token comment">
                    // After observer initialized
                  </span>
                  ttiPolyfill<span class="token punctuation">.</span>
                  <span class="token function">
                    getFirstConsistentlyInteractive
                  </span>
                  <span class="token punctuation">(</span>
                  <span class="token punctuation">&#123;</span>
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">.</span>
                  <span class="token function">then</span>
                  <span class="token punctuation">(</span>
                  <span class="token punctuation">(</span>
                  <span class="token parameter">tti</span>
                  <span class="token punctuation">)</span>{" "}
                  <span class="token operator">=&gt;</span>{" "}
                  <span class="token punctuation">&#123;</span>
                  newrelic<span class="token punctuation">.</span>
                  <span class="token function">addPageAction</span>
                  <span class="token punctuation">(</span>
                  <span class="token string">"Time To Interactive"</span>
                  <span class="token punctuation">,</span>{" "}
                  <span class="token punctuation">&#123;</span> time
                  <span class="token punctuation">:</span> tti{" "}
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">;</span>
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">;</span>
                </code>
              </pre>

              <p>
                Alternately, instead of coding tracking for these metrics
                manually, there are libraries that measure performance metrics
                automatically—shown
                <a href="https://zizzamia.github.io/perfume/" target="_blank">
                  here
                </a>
                .&nbsp;
              </p>

              <p>
                <strong>At ServiceBridge, we measure FCP, TTI, FID.</strong>
                &nbsp;
              </p>

              <p>
                <strong>FCP</strong> (First Contentful Paint) &nbsp;
                <br />
                · Fast [0, 1000ms]&nbsp;
                <br />
                · Average (1000ms, 2500ms]&nbsp;
                <br />· Slow over 2500ms&nbsp;
              </p>

              <p>
                <strong>TTI </strong>(Time to Interaction)&nbsp;
                <br />
                · Fast under 5s&nbsp;
                <br />· Slow above 5s&nbsp;
              </p>

              <p>
                <strong>FID</strong> (First Input Delay)&nbsp;
                <br />
                · Fast [0, 50ms]&nbsp;
                <br />
                · Average (50ms, 250ms]&nbsp;
                <br />· Slow over 250ms&nbsp;
              </p>

              <p>
                We can't rely on the statistics provided by developer tools
                because there is so much variation in how our users interact
                with us. There are various devices, different browsers, network
                conditions, multiple pages, etc. In the histograms below, we can
                see a better picture of our metrics—dividing them into different
                speed categories and making them actionable.&nbsp;
              </p>

              <img alt="" src={Screenshot_1} />

              <h2>Apply optimization techniques.&nbsp;</h2>

              <p>
                After identifying baseline problems, it’s time to get to address
                the issues. Here are the methods we used to improve speed.&nbsp;
              </p>

              <h3>Preconnect, Preload&nbsp;</h3>

              <pre class="language-html">
                <code class=" language-html">
                  <span class="token tag">
                    <span class="token tag">
                      <span class="token punctuation">&lt;</span>link
                    </span>{" "}
                    <span class="token attr-name">rel</span>
                    <span class="token attr-value">
                      <span class="token punctuation">=</span>
                      <span class="token punctuation">"</span>preconnect
                      <span class="token punctuation">"</span>
                    </span>{" "}
                    <span class="token attr-name">href</span>
                    <span class="token attr-value">
                      <span class="token punctuation">=</span>
                      <span class="token punctuation">"</span>
                      [https://maps.google.com](https://maps.google.com/)
                      <span class="token punctuation">"</span>
                    </span>{" "}
                    <span class="token attr-name">crossorigin</span>{" "}
                    <span class="token punctuation">/&gt;</span>
                  </span>
                  <span class="token tag">
                    <span class="token tag">
                      <span class="token punctuation">&lt;</span>link
                    </span>{" "}
                    <span class="token attr-name">rel</span>
                    <span class="token attr-value">
                      <span class="token punctuation">=</span>
                      <span class="token punctuation">"</span>preload
                      <span class="token punctuation">"</span>
                    </span>{" "}
                    <span class="token attr-name">href</span>
                    <span class="token attr-value">
                      <span class="token punctuation">=</span>
                      <span class="token punctuation">"</span>
                      scripts/dist/application.js
                      <span class="token punctuation">"</span>
                    </span>{" "}
                    <span class="token attr-name">as</span>
                    <span class="token attr-value">
                      <span class="token punctuation">=</span>
                      <span class="token punctuation">"</span>script
                      <span class="token punctuation">"</span>
                    </span>{" "}
                    <span class="token attr-name">type</span>
                    <span class="token attr-value">
                      <span class="token punctuation">=</span>
                      <span class="token punctuation">"</span>text/javascript
                      <span class="token punctuation">"</span>
                    </span>{" "}
                    <span class="token punctuation">/&gt;</span>
                  </span>
                </code>
              </pre>

              <p>
                By preconnecting to certain domains, we got faster network calls
                because DNS lookup was already done and preload made our bundle
                priority higher.&nbsp;
              </p>

              <h3>Async/Defer&nbsp;</h3>

              <p>
                Third-party, non-critical scripts were deferred or made async by
                writing something shown below.&nbsp;
              </p>

              <pre class="language-html">
                <code class=" language-html">
                  <span class="token tag">
                    <span class="token tag">
                      <span class="token punctuation">&lt;</span>script
                    </span>{" "}
                    <span class="token attr-name">async</span>{" "}
                    <span class="token attr-name">type</span>
                    <span class="token attr-value">
                      <span class="token punctuation">=</span>
                      <span class="token punctuation">"</span>text/javascript
                      <span class="token punctuation">"</span>
                    </span>{" "}
                    <span class="token attr-name">src</span>
                    <span class="token attr-value">
                      <span class="token punctuation">=</span>
                      <span class="token punctuation">"</span>
                      SomePathToNonCritical
                      <span class="token punctuation">"</span>
                    </span>
                    <span class="token punctuation">&gt;</span>
                  </span>
                  <span class="token script"></span>
                  <span class="token tag">
                    <span class="token tag">
                      <span class="token punctuation">&lt;/</span>script
                    </span>
                    <span class="token punctuation">&gt;</span>
                  </span>
                  <span class="token tag">
                    <span class="token tag">
                      <span class="token punctuation">&lt;</span>script
                    </span>{" "}
                    <span class="token attr-name">defer</span>{" "}
                    <span class="token attr-name">type</span>
                    <span class="token attr-value">
                      <span class="token punctuation">=</span>
                      <span class="token punctuation">"</span>text/javascript
                      <span class="token punctuation">"</span>
                    </span>{" "}
                    <span class="token attr-name">src</span>
                    <span class="token attr-value">
                      <span class="token punctuation">=</span>
                      <span class="token punctuation">"</span>
                      SomePathToNonCritical
                      <span class="token punctuation">"</span>
                    </span>
                    <span class="token punctuation">&gt;</span>
                  </span>
                  <span class="token script"></span>
                  <span class="token tag">
                    <span class="token tag">
                      <span class="token punctuation">&lt;/</span>script
                    </span>
                    <span class="token punctuation">&gt;</span>
                  </span>
                </code>
              </pre>

              <p>
                *You can learn more about Async/Defer
                <a
                  href="https://medium.com/dev-channel/javascript-loading-priorities-in-chrome-57c54cfa6672"
                  target="_blank"
                >
                  here
                </a>
                .&nbsp;
              </p>

              <p>
                After these simple steps,
                <strong>we saw a big improvement</strong>. Before the first
                request to back end was fired at ~4s, now we are firing it at
                2.5s&nbsp;
              </p>

              <img src={Screen_Shot_2019_06_13_at_9_23_56_AM} alt="" />

              <h3>Long Running Scripts</h3>

              <img alt="" src={Screen_Shot_2019_06_13_at_9_25_40_AM} />
              <p>
                We investigated our main thread and found the culprit. There
                were some long-running scripts, but why did these exist? For
                every script, there were various steps that the browser
                performed: network, parse, compile, and execute.&nbsp;
              </p>

              <p>
                A rule of thumb:
                <strong>
                  Ship less code = faster parse/compile/transfer/decompressing
                </strong>
                . &nbsp;
              </p>

              <p>
                If you cache the files, you can skip networking. However, you’ll
                still need to parse and compile the code/files. Keep in mind
                that the bigger the files are, the slower things become. This is
                how we ended up with those long-running scripts.&nbsp;
              </p>

              <p>
                <strong>
                  To remedy this situation, we introduced a Performance Budget
                </strong>
                .&nbsp;
              </p>

              <p>
                <strong>Protip #1</strong>: Include a limit on assets that load
                at the start so that the site doesn’t feel sluggish. If you are
                using webpack, you already get a feature that throws a warning
                if you exceed the performance budget of 244KiB.&nbsp;
              </p>

              <p>
                <img alt="" src={Screen_Shot_2019_05_09_at_11_50_30_AM} />
              </p>

              <p>
                <strong>Protip #2</strong>: You can also turn the performance
                budget into an error so that you don't accidentally ruin the
                performance. Just add this piece of configuration in
                webpack.&nbsp;
              </p>

              <pre class="language-js">
                <code class=" language-js">
                  module<span class="token punctuation">.</span>exports{" "}
                  <span class="token operator">=</span>{" "}
                  <span class="token punctuation">&#123;</span>
                  performance<span class="token punctuation">:</span>{" "}
                  <span class="token punctuation">&#123;</span>
                  hints<span class="token punctuation">:</span>{" "}
                  <span class="token string">"error"</span>
                  <span class="token punctuation">,</span>
                  <span class="token punctuation">&#125;</span>
                  <span class="token punctuation">,</span>
                  <span class="token punctuation">&#125;</span>
                </code>
              </pre>

              <h3>Coverage&nbsp;</h3>

              <p>
                In the image below, you can see how much data the scripts and
                styles are using. When the recording mode is on, you can click
                around and see the numbers change. Here's where the code
                splitting comes into play. In this example, 78% of dead code is
                way too much. Don't forget that every single byte of this code
                must be sent, parsed, and executed—meaning everything can be
                super slow.&nbsp;
              </p>

              <img alt="" src={Screen_Shot_2019_06_05_at_11_41_17_AM} />
              <h3>Bundle splitting&nbsp;</h3>

              <p>
                To improve our coverage score and beat the long-running scripts
                (ultimately reducing the required assets for the existing page),
                use dynamic imports to split bundles by route.&nbsp;
              </p>

              <pre class="language-js">
                <code class=" language-js">
                  <span class="token keyword">import</span> urls{" "}
                  <span class="token keyword">from</span>{" "}
                  <span class="token string">'../utils/urls'</span>
                  <span class="token punctuation">;</span>
                  <span class="token keyword">if</span>{" "}
                  <span class="token punctuation">(</span>urls
                  <span class="token punctuation">.</span>
                  <span class="token function">is</span>
                  <span class="token punctuation">(</span>
                  <span class="token string">''</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">)</span>{" "}
                  <span class="token punctuation">&#123;</span>
                  <span class="token keyword">import</span>
                  <span class="token punctuation">(</span>
                  <span class="token comment">
                    /*webpackChunkName: "dashboard"*/
                  </span>
                  <span class="token string">'./dashboard'</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">;</span>
                  <span class="token punctuation">&#125;</span>
                </code>
              </pre>

              <img alt="" src={Screen_Shot_2019_06_07_at_10_46_36_AM} />

              <p>
                By doing so, we found that the monolith broke up into pieces and
                our metrics improved. Awesome! We did use dynamic imports to
                split bundles by route (not code splitting yet). But we're not
                done yet.&nbsp;
              </p>

              <p>
                Webpack provided vendor splitting and we had to split up some
                components by using the same dynamic import feature. Another fix
                we needed to address was that the picture looked more granular.
                Keep in mind, too much granularity can be a bad thing. If too
                many requests need to be made, these small components could
                result in the same sluggish performance.&nbsp;
              </p>

              <p>
                <strong>
                  To perform well, look for an optimal amount of bundles being
                  downloaded at the same time before the applications start
                  throttling the network.
                </strong>
                In our experience, 5 bundles at most are optimal.&nbsp;
              </p>

              <img alt="" src={Screen_Shot_2019_06_07_at_10_49_52_AM} />

              <p>
                The result after all this optimization? After a few rounds of
                improvements and releases, we established better monitoring
                capabilities and observed the following improvements:&nbsp;
              </p>

              <p>
                · FCP (First Contentful Paint) on average improved by 43%.&nbsp;
                <br />
                · Through code splitting, JS size decreased by 32%.&nbsp;
                <br />· Assets are now asynchronous and do not block the main
                thread to the same extent.&nbsp;
              </p>

              <h2>Lessons learned&nbsp;</h2>

              <p>
                Fast performance has a far reach for your product. It is an
                expectation of today’s users.
                <strong>
                  People want their integrations with technology to be fast and
                  easy
                </strong>
                . It impacts your bottom line. Your business needs to prioritize
                their customer’s needs to succeed. Having a strong, fast
                mobile-first experience even improves lead generation, since
                Google ranks mobile-first apps higher in their search results.
                &nbsp;
              </p>

              <p>
                While we're still a long way from being perfect, having fast
                load times is important. Keep user’s needs front and center. For
                ServiceBridge, the ultimate goal for our team is always to
                deliver a satisfying experience for the field technicians and
                office workers that use our product every day. In order to stay
                relevant, our team continually releases new features while
                balancing that expectation with keeping the UX with our product
                fast.&nbsp;
              </p>
            </main>
          </div>
        </div>
      </main>
    </div>
  );
}
