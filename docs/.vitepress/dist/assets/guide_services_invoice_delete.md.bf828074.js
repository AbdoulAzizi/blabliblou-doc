import{o as s,c as e,a}from"./app.88357bea.js";const n='{"title":"Ressource : Suppression d\'une facture","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Description de la Resource","slug":"_1-description-de-la-resource"},{"level":2,"title":"2. URL et Méthode d\'accès","slug":"_2-url-et-methode-d-acces"},{"level":2,"title":"3. Paramètres","slug":"_3-parametres"},{"level":2,"title":"4. Requête réussie","slug":"_4-requete-reussie"},{"level":2,"title":"5. Cas d\'échec d\'une requête","slug":"_5-cas-d-echec-d-une-requete"}],"relativePath":"guide/services/invoice/delete.md","lastUpdated":1626369084147}',t={},o=a('<h1 id="ressource-suppression-d-une-facture"><a class="header-anchor" href="#ressource-suppression-d-une-facture" aria-hidden="true">#</a> Ressource : Suppression d&#39;une facture</h1><h2 id="_1-description-de-la-resource"><a class="header-anchor" href="#_1-description-de-la-resource" aria-hidden="true">#</a> 1. Description de la Resource</h2><p>Cette ressource permet de supprimer une facture existante pour un utilisateur quelconque .</p><h2 id="_2-url-et-methode-d-acces"><a class="header-anchor" href="#_2-url-et-methode-d-acces" aria-hidden="true">#</a> 2. URL et Méthode d&#39;accès</h2><p>Pour acceder à cette ressource, vous faites appel à l&#39;url suivante:</p><div class="language-"><pre><code>url: /invoice/id\nid = l&#39;identifiant de la facture.\n</code></pre></div><div class="warning custom-block"><p class="custom-block-title">Rappel</p><p>L&#39;accès aux données à cette ressource se fait via la méthode <strong><code>POST</code></strong></p></div><h2 id="_3-parametres"><a class="header-anchor" href="#_3-parametres" aria-hidden="true">#</a> 3. Paramètres</h2><p>Cette ressource ne possède pas de paramètres.</p><h2 id="_4-requete-reussie"><a class="header-anchor" href="#_4-requete-reussie" aria-hidden="true">#</a> 4. Requête réussie</h2><p>Lorsque la requête est validée avec succès, il s&#39;affichera un resultat de type suivant:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">74</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Achat de matiere premiere&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frais&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;amount_with_vat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1200.50&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;vat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;vat_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;reference&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5EFDRE63x&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ceci est un joli commentaire&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;operation_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-06-18 20:21:00&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-07-12 18:08:51&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;receipt_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/storage/invoices/&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;user_id&quot;</span><span class="token operator">:</span> <span class="token number">9</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="_5-cas-d-echec-d-une-requete"><a class="header-anchor" href="#_5-cas-d-echec-d-une-requete" aria-hidden="true">#</a> 5. Cas d&#39;échec d&#39;une requête</h2><p>En cas d&#39;échec, lorsque par exemple la facture que vous voulez supprimer n&#39;existe pas , vous aurez un message de type:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ce(tte) invoice n&#39;exist(e) pas.&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Ou lorsque vous n&#39;avez pas les droits nécessaires pour supprimer une facture, un message s&#39;affiche vous déclarant :</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vous n&#39;avez pas la permission de supprimer cette facture&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',17);t.render=function(a,n,t,p,r,u){return s(),e("div",null,[o])};export default t;export{n as __pageData};
