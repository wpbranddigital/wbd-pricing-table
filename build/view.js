/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
(function () {
  'use strict';

  // ── Billing toggle logic ──────────────────────────────────────────────────
  function initBillingToggle(wrapper) {
    var toggleButtons = wrapper.querySelectorAll('.telex-billing-option');
    var cards = wrapper.querySelectorAll('.telex-pricing-card');
    function switchBilling(billingKey) {
      toggleButtons.forEach(function (btn) {
        btn.classList.remove('telex-billing-option--active');
        if (btn.getAttribute('data-billing') === billingKey) {
          btn.classList.add('telex-billing-option--active');
        }
      });
      cards.forEach(function (card) {
        var pricingRaw = card.getAttribute('data-pricing');
        if (!pricingRaw) return;
        var pricing;
        try {
          pricing = JSON.parse(pricingRaw);
        } catch (e) {
          return;
        }
        var data = pricing[billingKey];
        if (!data) return;
        var amountEl = card.querySelector('.telex-pricing-amount');
        var periodEl = card.querySelector('.telex-pricing-period');
        var discountBadge = card.querySelector('.telex-pricing-discount-badge');
        if (amountEl) {
          amountEl.textContent = data.price || '0';
        }
        if (periodEl) {
          periodEl.textContent = data.period || '';
        }
        if (discountBadge) {
          if (data.discount && data.discount !== '') {
            discountBadge.textContent = data.discount + '% OFF';
            discountBadge.style.display = '';
          } else {
            discountBadge.style.display = 'none';
          }
        }
      });
    }
    toggleButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var billingKey = btn.getAttribute('data-billing');
        switchBilling(billingKey);
      });
    });
  }

  // ── Hover class helpers ───────────────────────────────────────────────────
  function initHoverEffects(wrapper) {
    var cards = wrapper.querySelectorAll('.telex-pricing-card');
    cards.forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        card.classList.add('telex-pricing-card--hover');
      });
      card.addEventListener('mouseleave', function () {
        card.classList.remove('telex-pricing-card--hover');
      });
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    var wrappers = document.querySelectorAll('.telex-pricing-table-wrapper');
    wrappers.forEach(function (wrapper) {
      initBillingToggle(wrapper);
      initHoverEffects(wrapper);
    });
  });
})();
/******/ })()
;
//# sourceMappingURL=view.js.map