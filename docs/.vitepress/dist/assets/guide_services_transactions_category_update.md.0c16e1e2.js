import{o as e,c as s,a}from"./app.88357bea.js";const t='{"title":"Ressource : Mis à jour des catégories","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Description de la Resource","slug":"_1-description-de-la-resource"},{"level":2,"title":"2. URL et Méthode d\'accès","slug":"_2-url-et-methode-d-acces"},{"level":2,"title":"3. Paramètres","slug":"_3-parametres"},{"level":2,"title":"4. Requête réussie","slug":"_4-requete-reussie"},{"level":2,"title":"5. Cas d\'échec d\'une requête","slug":"_5-cas-d-echec-d-une-requete"}],"relativePath":"guide/services/transactions/category/update.md","lastUpdated":1626369421829}',n={},r=a('<h1 id="ressource-mis-a-jour-des-categories"><a class="header-anchor" href="#ressource-mis-a-jour-des-categories" aria-hidden="true">#</a> Ressource : Mis à jour des catégories</h1><hr><h2 id="_1-description-de-la-resource"><a class="header-anchor" href="#_1-description-de-la-resource" aria-hidden="true">#</a> 1. Description de la Resource</h2><p>Cette ressource permet d&#39;enregistrer une catégorie.</p><h2 id="_2-url-et-methode-d-acces"><a class="header-anchor" href="#_2-url-et-methode-d-acces" aria-hidden="true">#</a> 2. URL et Méthode d&#39;accès</h2><p>Pour acceder à cette ressource, vous faites appel à l&#39;url suivante:</p><div class="language-"><pre><code>url: /category/id\nid = l&#39;identifiant de la catégorie\n</code></pre></div><div class="warning custom-block"><p class="custom-block-title">Rappel</p><p>L&#39;accès aux données à cette ressource se fait via la méthode <strong><code>POST</code></strong></p></div><h2 id="_3-parametres"><a class="header-anchor" href="#_3-parametres" aria-hidden="true">#</a> 3. Paramètres</h2><p>Les paramètres de cette ressouce sont les mêmes que celle de l&#39;enregistrement d&#39;une catégorie qui sont définis dans la section suivante : <a href="/guide/services/transactions/category/store.html#_3-parametres">Paramètres</a></p><h2 id="_4-requete-reussie"><a class="header-anchor" href="#_4-requete-reussie" aria-hidden="true">#</a> 4. Requête réussie</h2><p>Lorsque la requête est validée avec succès, il s&#39;affichera un resultat de type suivant:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;display_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Achat de matiere premieress&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;disabled&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Achat-de-matiere-premieress&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-07-05 10:21:53&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="_5-cas-d-echec-d-une-requete"><a class="header-anchor" href="#_5-cas-d-echec-d-une-requete" aria-hidden="true">#</a> 5. Cas d&#39;échec d&#39;une requête</h2><p>En cas d&#39;échec, quand vous renseignez un <strong>slug</strong> dejà utilisé, vous aurez un message de type:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Cette valeur est déjà utilisée.&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Ou quand vous cherchez une catégorie qui n&#39;existe pas, vous un message ce genre:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ce(tte) categorie n&#39;exist(e) pas.&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',18);n.render=function(a,t,n,o,c,u){return e(),s("div",null,[r])};export default n;export{t as __pageData};