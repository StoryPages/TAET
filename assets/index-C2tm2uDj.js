(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=document.querySelectorAll(".card__wrap-text"),d=document.querySelectorAll(".product__img"),i=["./images/product/product-1.JPG","./images/product/product-2.JPG","./images/product/product-3.JPG","./images/product/product-4.JPG","./images/product/product-5.JPG","./images/product/product-6.JPG","./images/product/product-7.JPG"];d.forEach((o,r)=>{i[r]&&(o.src=i[r],o.alt=`Image ${r+1}`),r%2===1&&o.classList.add("order")});function a(){u.forEach(o=>{const r=o.querySelector(".card__heading").dataset.title,s=o.querySelector(".product__btn"),c=`Здравствуйте!
Хочу заказать ${r}`,e=`https://wa.me/79139420946?text=${encodeURIComponent(c)}`;s.href=e})}a();
