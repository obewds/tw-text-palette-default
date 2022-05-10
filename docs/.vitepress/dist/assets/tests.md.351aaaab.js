import{_ as n,c as s,o as a,a as t}from"./app.0bc3d4cb.js";const f='{"title":"@obewds/tw-text-palette-default Tests","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"Testing Status","slug":"testing-status"},{"level":2,"title":"Vitest Tests","slug":"vitest-tests"}],"relativePath":"tests.md"}',p={},e=t(`<h1 id="obewds-tw-text-palette-default-tests" tabindex="-1">@obewds/tw-text-palette-default Tests <a class="header-anchor" href="#obewds-tw-text-palette-default-tests" aria-hidden="true">#</a></h1><h2 id="testing-status" tabindex="-1">Testing Status <a class="header-anchor" href="#testing-status" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">CURRENT STATUS</p><p><strong>100%</strong> Coverage<br><strong>100%</strong> Passing</p></div><h2 id="vitest-tests" tabindex="-1">Vitest Tests <a class="header-anchor" href="#vitest-tests" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// ./tests/TwTextPaletteDefault.test.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> twTextPaletteDefault <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;twTextPaletteDefault component returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>twTextPaletteDefault<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;twTextPaletteDefault.default component returns an object with a truthy default property&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>twTextPaletteDefault<span class="token punctuation">.</span>default<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;twTextPaletteDefault.default.colors component returns an object with a truthy colors property&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>twTextPaletteDefault<span class="token punctuation">.</span>default<span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;twTextPaletteDefault component returns an object with the standard five default color names&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>twTextPaletteDefault<span class="token punctuation">.</span>default<span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>twTextPaletteDefault<span class="token punctuation">.</span>default<span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>twTextPaletteDefault<span class="token punctuation">.</span>default<span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string">&#39;primary&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>twTextPaletteDefault<span class="token punctuation">.</span>default<span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string">&#39;secondary&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>twTextPaletteDefault<span class="token punctuation">.</span>default<span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div>`,5),c=[e];function o(u,l,i,r,k,b){return a(),s("div",null,c)}var m=n(p,[["render",o]]);export{f as __pageData,m as default};