/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js"
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Edit({
  attributes,
  setAttributes
}) {
  const {
    plans,
    columns,
    showBillingToggle,
    billingOptions,
    defaultBillingOption,
    headerBgColor,
    headerTextColor,
    buttonBgColor,
    buttonTextColor,
    featuredAccentColor,
    borderRadius,
    styleTheme,
    layoutStyle
  } = attributes;
  const THEME_PRESETS = {
    default: {
      label: "Default",
      description: "Clean blue and white design",
      headerBgColor: "#4a90d9",
      headerTextColor: "#ffffff",
      buttonBgColor: "#4a90d9",
      buttonTextColor: "#ffffff",
      featuredAccentColor: "#e85e5e"
    },
    dark: {
      label: "Dark",
      description: "Dark cards with vibrant accents",
      headerBgColor: "#1a1a2e",
      headerTextColor: "#ffffff",
      buttonBgColor: "#6c63ff",
      buttonTextColor: "#ffffff",
      featuredAccentColor: "#6c63ff"
    },
    gradient: {
      label: "Gradient",
      description: "Vibrant gradient headers",
      headerBgColor: "#667eea",
      headerTextColor: "#ffffff",
      buttonBgColor: "#764ba2",
      buttonTextColor: "#ffffff",
      featuredAccentColor: "#f093fb"
    },
    minimal: {
      label: "Minimal",
      description: "Clean flat design with subtle tones",
      headerBgColor: "#f7f8fc",
      headerTextColor: "#2d3436",
      buttonBgColor: "#2d3436",
      buttonTextColor: "#ffffff",
      featuredAccentColor: "#00b894"
    }
  };
  const LAYOUT_OPTIONS = {
    centered: {
      label: "Centered",
      description: "Circular price badge, centered content",
      icon: "◉"
    },
    banner: {
      label: "Banner",
      description: "Pentagon header with bold price display",
      icon: "⬟"
    },
    "flat-border": {
      label: "Flat Border",
      description: "Clean flat cards with featured border highlight",
      icon: "▭"
    }
  };
  const applyThemePreset = themeKey => {
    const preset = THEME_PRESETS[themeKey];
    if (!preset) return;
    setAttributes({
      styleTheme: themeKey,
      headerBgColor: preset.headerBgColor,
      headerTextColor: preset.headerTextColor,
      buttonBgColor: preset.buttonBgColor,
      buttonTextColor: preset.buttonTextColor,
      featuredAccentColor: preset.featuredAccentColor
    });
  };
  const [activePlanIndex, setActivePlanIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const [previewBilling, setPreviewBilling] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultBillingOption || (billingOptions[0] ? billingOptions[0].key : "monthly"));
  const updatePlan = (index, key, value) => {
    const updated = plans.map((plan, i) => i === index ? {
      ...plan,
      [key]: value
    } : plan);
    setAttributes({
      plans: updated
    });
  };
  const updatePlanPricing = (planIndex, billingKey, field, value) => {
    const updated = plans.map((plan, i) => {
      if (i !== planIndex) return plan;
      const pricing = {
        ...(plan.pricing || {})
      };
      pricing[billingKey] = {
        ...(pricing[billingKey] || {
          price: "0",
          period: "",
          discount: ""
        }),
        [field]: value
      };
      return {
        ...plan,
        pricing
      };
    });
    setAttributes({
      plans: updated
    });
  };
  const updateFeature = (planIndex, featureIndex, key, value) => {
    const updated = plans.map((plan, pi) => {
      if (pi !== planIndex) return plan;
      const features = plan.features.map((feat, fi) => fi === featureIndex ? {
        ...feat,
        [key]: value
      } : feat);
      return {
        ...plan,
        features
      };
    });
    setAttributes({
      plans: updated
    });
  };
  const addFeature = planIndex => {
    const updated = plans.map((plan, i) => {
      if (i !== planIndex) return plan;
      return {
        ...plan,
        features: [...plan.features, {
          text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("New Feature", "telex-pricing-table"),
          included: true
        }]
      };
    });
    setAttributes({
      plans: updated
    });
  };
  const removeFeature = (planIndex, featureIndex) => {
    const updated = plans.map((plan, i) => {
      if (i !== planIndex) return plan;
      return {
        ...plan,
        features: plan.features.filter((_, fi) => fi !== featureIndex)
      };
    });
    setAttributes({
      plans: updated
    });
  };
  const addPlan = () => {
    if (plans.length >= 6) return;
    const defaultPricing = {};
    billingOptions.forEach(opt => {
      defaultPricing[opt.key] = {
        price: "0",
        period: "",
        discount: ""
      };
    });
    const newPlan = {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("New Plan", "telex-pricing-table"),
      currency: "$",
      description: "",
      features: [{
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature 1", "telex-pricing-table"),
        included: true
      }],
      buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Get Started", "telex-pricing-table"),
      buttonUrl: "#",
      featured: false,
      openInNewTab: false,
      pricing: defaultPricing
    };
    setAttributes({
      plans: [...plans, newPlan]
    });
    setActivePlanIndex(plans.length);
  };
  const removePlan = index => {
    if (plans.length <= 1) return;
    const updated = plans.filter((_, i) => i !== index);
    setAttributes({
      plans: updated
    });
    if (activePlanIndex >= updated.length) {
      setActivePlanIndex(Math.max(0, updated.length - 1));
    }
  };
  const generateKey = label => {
    return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "option-" + Date.now();
  };
  const addBillingOption = () => {
    const newLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("New Option", "telex-pricing-table");
    const newKey = generateKey(newLabel) + "-" + billingOptions.length;
    const updatedOptions = [...billingOptions, {
      key: newKey,
      label: newLabel
    }];
    setAttributes({
      billingOptions: updatedOptions
    });
    const updatedPlans = plans.map(plan => {
      const pricing = {
        ...(plan.pricing || {})
      };
      pricing[newKey] = {
        price: "0",
        period: "",
        discount: ""
      };
      return {
        ...plan,
        pricing
      };
    });
    setAttributes({
      plans: updatedPlans
    });
  };
  const removeBillingOption = index => {
    if (billingOptions.length <= 1) return;
    const removedKey = billingOptions[index].key;
    const updatedOptions = billingOptions.filter((_, i) => i !== index);
    setAttributes({
      billingOptions: updatedOptions
    });
    if (defaultBillingOption === removedKey) {
      setAttributes({
        defaultBillingOption: updatedOptions[0].key
      });
    }
    if (previewBilling === removedKey) {
      setPreviewBilling(updatedOptions[0].key);
    }
    const updatedPlans = plans.map(plan => {
      const pricing = {
        ...(plan.pricing || {})
      };
      delete pricing[removedKey];
      return {
        ...plan,
        pricing
      };
    });
    setAttributes({
      plans: updatedPlans
    });
  };
  const updateBillingOptionLabel = (index, newLabel) => {
    const updatedOptions = billingOptions.map((opt, i) => i === index ? {
      ...opt,
      label: newLabel
    } : opt);
    setAttributes({
      billingOptions: updatedOptions
    });
  };
  const getActivePricing = plan => {
    if (!plan.pricing || !plan.pricing[previewBilling]) {
      return {
        price: plan.price || "0",
        period: plan.period || "",
        discount: ""
      };
    }
    return plan.pricing[previewBilling];
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `telex-pricing-table-wrapper telex-theme-${styleTheme || "default"} telex-layout-${layoutStyle || "classic"}`
  });
  const planTabs = plans.map((plan, index) => ({
    name: `plan-${index}`,
    title: plan.name || `Plan ${index + 1}`
  }));
  const getPlanBadgeText = plan => {
    return plan.featuredBadgeText || attributes.featuredBadgeText || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Recommended", "telex-pricing-table");
  };

  // ── Layout: Centered ───────────────────────────────────────────────────────
  const renderCenteredCard = (plan, index) => {
    const activePricing = getActivePricing(plan);
    const displayPrice = activePricing.price || "0";
    const displayPeriod = activePricing.period || "";
    const showDiscount = activePricing.discount && activePricing.discount !== "";
    const accentColor = plan.featured ? featuredAccentColor : headerBgColor;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: `telex-pricing-card telex-pricing-card--centered${plan.featured ? " telex-pricing-card--featured" : ""}`,
      style: {
        borderRadius: `${borderRadius}px`
      },
      children: [plan.featured && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "telex-pricing-badge",
        style: {
          backgroundColor: featuredAccentColor
        },
        children: getPlanBadgeText(plan)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "telex-centered-top",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
          className: "telex-pricing-plan-name",
          style: {
            color: accentColor
          },
          children: plan.name
        }), plan.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "telex-pricing-description",
          children: plan.description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "telex-centered-price-circle",
        style: {
          borderColor: accentColor
        },
        children: [showDiscount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "telex-pricing-discount-badge",
          children: [activePricing.discount, "%"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "telex-pricing-currency",
          children: plan.currency
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "telex-pricing-amount",
          children: displayPrice
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "telex-pricing-period",
          children: displayPeriod
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
        className: "telex-pricing-features telex-pricing-features--centered",
        children: plan.features.map((feature, fi) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
          className: `telex-pricing-feature${!feature.included ? " telex-pricing-feature--excluded" : ""}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: feature.included ? "telex-feature-icon telex-feature-icon--check" : "telex-feature-icon telex-feature-icon--cross",
            children: feature.included ? "\u2713" : "\u2715"
          }), feature.text]
        }, fi))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "telex-pricing-button-area",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "telex-pricing-button telex-pricing-button--pill",
          style: {
            backgroundColor: accentColor,
            color: buttonTextColor
          },
          children: plan.buttonText
        })
      })]
    }, index);
  };

  // ── Layout: Banner ─────────────────────────────────────────────────────────
  const renderBannerCard = (plan, index) => {
    const activePricing = getActivePricing(plan);
    const displayPrice = activePricing.price || "0";
    const displayPeriod = activePricing.period || "";
    const showDiscount = activePricing.discount && activePricing.discount !== "";
    const accentColor = plan.featured ? featuredAccentColor : headerBgColor;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: `telex-pricing-card telex-pricing-card--banner${plan.featured ? " telex-pricing-card--featured" : ""}`,
      style: {
        borderRadius: `${borderRadius}px`
      },
      children: [plan.featured && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "telex-pricing-badge",
        style: {
          backgroundColor: featuredAccentColor
        },
        children: getPlanBadgeText(plan)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "telex-banner-header",
        style: {
          backgroundColor: accentColor
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
          className: "telex-pricing-plan-name",
          style: {
            color: headerTextColor
          },
          children: plan.name
        }), plan.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "telex-pricing-description",
          style: {
            color: headerTextColor
          },
          children: plan.description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "telex-banner-price-row",
          children: [showDiscount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            className: "telex-pricing-discount-badge telex-banner-discount",
            children: [activePricing.discount, "% ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("OFF", "wbd-pricing-tables")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "telex-pricing-price-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "telex-pricing-currency",
              style: {
                color: headerTextColor
              },
              children: plan.currency
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "telex-pricing-amount",
              style: {
                color: headerTextColor
              },
              children: displayPrice
            })]
          }), displayPeriod && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "telex-banner-period",
            style: {
              color: headerTextColor
            },
            children: displayPeriod
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
        className: "telex-pricing-features telex-pricing-features--banner",
        children: plan.features.map((feature, fi) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
          className: `telex-pricing-feature${!feature.included ? " telex-pricing-feature--excluded" : ""}`,
          children: feature.text
        }, fi))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "telex-pricing-button-area",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "telex-pricing-button telex-pricing-button--banner",
          style: {
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
            borderRadius: `${Math.max(borderRadius - 4, 4)}px`
          },
          children: plan.buttonText
        })
      })]
    }, index);
  };

  // ── Layout: Flat Border ────────────────────────────────────────────────────
  const renderFlatBorderCard = (plan, index) => {
    const activePricing = getActivePricing(plan);
    const displayPrice = activePricing.price || "0";
    const displayPeriod = activePricing.period || "";
    const showDiscount = activePricing.discount && activePricing.discount !== "";
    const accentColor = plan.featured ? featuredAccentColor : "#e0e0e0";
    const textAccent = plan.featured ? featuredAccentColor : "#333333";
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: `telex-pricing-card telex-pricing-card--flat-border${plan.featured ? " telex-pricing-card--featured" : ""}`,
      style: {
        borderRadius: `${borderRadius}px`,
        borderColor: accentColor
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "telex-flat-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
          className: "telex-pricing-plan-name",
          style: {
            color: textAccent
          },
          children: plan.name
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "telex-flat-price-area",
        children: [showDiscount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "telex-pricing-discount-badge",
          children: [activePricing.discount, "% ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("OFF", "wbd-pricing-tables")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "telex-pricing-price-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "telex-pricing-currency",
            style: {
              color: textAccent
            },
            children: plan.currency
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "telex-pricing-amount",
            style: {
              color: textAccent
            },
            children: displayPrice
          })]
        }), displayPeriod && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "telex-pricing-period",
          children: displayPeriod
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
        className: "telex-pricing-features telex-pricing-features--flat",
        children: plan.features.map((feature, fi) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
          className: `telex-pricing-feature telex-pricing-feature--flat${!feature.included ? " telex-pricing-feature--excluded" : ""}`,
          children: feature.text
        }, fi))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "telex-pricing-button-area",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "telex-pricing-button",
          style: {
            backgroundColor: plan.featured ? featuredAccentColor : buttonBgColor,
            color: buttonTextColor,
            borderRadius: `${Math.max(borderRadius - 4, 4)}px`
          },
          children: plan.buttonText
        })
      })]
    }, index);
  };

  // ── Render dispatcher ──────────────────────────────────────────────────────
  const renderCard = (plan, index) => {
    switch (layoutStyle) {
      case "centered":
        return renderCenteredCard(plan, index);
      case "side-accent":
        return renderSideAccentCard(plan, index);
      case "card-ribbon":
        return renderCardRibbonCard(plan, index);
      case "banner":
        return renderBannerCard(plan, index);
      case "flat-border":
        return renderFlatBorderCard(plan, index);
      case "classic":
        return renderClassicCard(plan, index);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Layout Style", "wbd-pricing-tables"),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "telex-layout-selector",
          children: Object.entries(LAYOUT_OPTIONS).map(([key, opt]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            type: "button",
            className: `telex-layout-option${layoutStyle === key ? " telex-layout-option--active" : ""}`,
            onClick: () => setAttributes({
              layoutStyle: key
            }),
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              padding: "12px",
              marginBottom: "8px",
              border: layoutStyle === key ? "2px solid #007cba" : "2px solid #ddd",
              borderRadius: "8px",
              background: layoutStyle === key ? "#f0f7ff" : "#fff",
              cursor: "pointer",
              textAlign: "left"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              style: {
                fontSize: "24px",
                lineHeight: 1
              },
              children: opt.icon
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                style: {
                  fontSize: "13px",
                  color: "#1e1e1e",
                  display: "block"
                },
                children: opt.label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                style: {
                  fontSize: "11px",
                  color: "#757575"
                },
                children: opt.description
              })]
            })]
          }, key))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style Theme", "wbd-pricing-tables"),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "telex-theme-selector",
          children: Object.entries(THEME_PRESETS).map(([key, preset]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            type: "button",
            className: `telex-theme-option${styleTheme === key ? " telex-theme-option--active" : ""}`,
            onClick: () => applyThemePreset(key),
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              padding: "12px",
              marginBottom: "8px",
              border: styleTheme === key ? "2px solid #007cba" : "2px solid #ddd",
              borderRadius: "8px",
              background: styleTheme === key ? "#f0f7ff" : "#fff",
              cursor: "pointer",
              textAlign: "left"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              style: {
                display: "flex",
                gap: "6px",
                marginBottom: "6px"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                style: {
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: preset.headerBgColor,
                  border: "1px solid #ccc",
                  display: "inline-block"
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                style: {
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: preset.buttonBgColor,
                  border: "1px solid #ccc",
                  display: "inline-block"
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                style: {
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: preset.featuredAccentColor,
                  border: "1px solid #ccc",
                  display: "inline-block"
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
              style: {
                fontSize: "13px",
                color: "#1e1e1e"
              },
              children: preset.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              style: {
                fontSize: "11px",
                color: "#757575"
              },
              children: preset.description
            })]
          }, key))
        })
      }), layoutStyle === "centered" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Billing Toggle", "wbd-pricing-tables"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Billing Toggle", "wbd-pricing-tables"),
          checked: showBillingToggle,
          onChange: val => setAttributes({
            showBillingToggle: val
          })
        }), showBillingToggle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
          spacing: 3,
          style: {
            marginTop: "12px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Options", "wbd-pricing-tables")
          }), billingOptions.map((opt, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
            alignment: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              value: opt.label,
              onChange: val => updateBillingOptionLabel(i, val),
              style: {
                flex: 1
              },
              __nextHasNoMarginBottom: true
            }), billingOptions.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isDestructive: true,
              variant: "tertiary",
              onClick: () => removeBillingOption(i),
              size: "small",
              children: "\u2715"
            })]
          }, opt.key)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "secondary",
            onClick: addBillingOption,
            size: "small",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("+ Add Toggle Option", "wbd-pricing-tables")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Active Option", "wbd-pricing-tables"),
            value: defaultBillingOption,
            options: billingOptions.map(opt => ({
              label: opt.label,
              value: opt.key
            })),
            onChange: val => setAttributes({
              defaultBillingOption: val
            }),
            __nextHasNoMarginBottom: true
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Layout Settings", "wbd-pricing-tables"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Columns", "wbd-pricing-tables"),
          value: columns,
          onChange: val => setAttributes({
            columns: val
          }),
          min: 1,
          max: 4
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "telex-pricing-table"),
          value: borderRadius,
          onChange: val => setAttributes({
            borderRadius: val
          }),
          min: 0,
          max: 30
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color Settings", "wbd-pricing-tables"),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
          spacing: 4,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Header Background", "wbd-pricing-tables")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
                colorValue: headerBgColor
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
              color: headerBgColor,
              onChange: val => setAttributes({
                headerBgColor: val
              }),
              enableAlpha: false
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Header Text", "wbd-pricing-tables")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
                colorValue: headerTextColor
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
              color: headerTextColor,
              onChange: val => setAttributes({
                headerTextColor: val
              }),
              enableAlpha: false
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Background", "wbd-pricing-tables")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
                colorValue: buttonBgColor
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
              color: buttonBgColor,
              onChange: val => setAttributes({
                buttonBgColor: val
              }),
              enableAlpha: false
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Text", "wbd-pricing-tables")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
                colorValue: buttonTextColor
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
              color: buttonTextColor,
              onChange: val => setAttributes({
                buttonTextColor: val
              }),
              enableAlpha: false
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Featured Accent", "wbd-pricing-tables")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
                colorValue: featuredAccentColor
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
              color: featuredAccentColor,
              onChange: val => setAttributes({
                featuredAccentColor: val
              }),
              enableAlpha: false
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Plans", "wbd-pricing-tables"),
        initialOpen: true,
        children: [plans.length < 6 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "secondary",
            onClick: addPlan,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("+ Add Plan", "wbd-pricing-tables")
          })
        }), planTabs.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
          tabs: planTabs,
          onSelect: tabName => {
            const idx = parseInt(tabName.replace("plan-", ""), 10);
            setActivePlanIndex(idx);
          },
          children: () => {
            const idx = activePlanIndex;
            const plan = plans[idx];
            if (!plan) return null;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
              spacing: 3,
              style: {
                paddingTop: "12px"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Plan Name", "wbd-pricing-tables"),
                value: plan.name,
                onChange: val => updatePlan(idx, "name", val)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Currency Symbol", "wbd-pricing-tables"),
                value: plan.currency,
                onChange: val => updatePlan(idx, "currency", val),
                style: {
                  width: "80px"
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description", "wbd-pricing-tables"),
                value: plan.description,
                onChange: val => updatePlan(idx, "description", val)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                style: {
                  borderTop: "1px solid #ddd",
                  paddingTop: "12px"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pricing per Toggle Option", "wbd-pricing-tables")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
                  spacing: 3,
                  style: {
                    marginTop: "8px"
                  },
                  children: billingOptions.map(opt => {
                    const bp = plan.pricing && plan.pricing[opt.key] || {
                      price: "0",
                      period: "",
                      discount: ""
                    };
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      style: {
                        padding: "10px",
                        background: "#f9f9f9",
                        borderRadius: "6px",
                        border: "1px solid #e0e0e0"
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                        style: {
                          display: "block",
                          marginBottom: "6px"
                        },
                        children: opt.label
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Price", "wbd-pricing-tables"),
                          value: bp.price,
                          onChange: val => updatePlanPricing(idx, opt.key, "price", val),
                          __nextHasNoMarginBottom: true
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Period", "wbd-pricing-tables"),
                          value: bp.period,
                          onChange: val => updatePlanPricing(idx, opt.key, "period", val),
                          style: {
                            width: "80px"
                          },
                          __nextHasNoMarginBottom: true
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Discount % (e.g. 20)", "wbd-pricing-tables"),
                        value: bp.discount || "",
                        onChange: val => updatePlanPricing(idx, opt.key, "discount", val),
                        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shown as a badge when this billing option is active.", "telex-pricing-table")
                      })]
                    }, opt.key);
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Featured Plan", "wbd-pricing-tables"),
                checked: plan.featured,
                onChange: val => updatePlan(idx, "featured", val)
              }), plan.featured && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Featured Badge Text", "wbd-pricing-tables"),
                value: plan.featuredBadgeText || attributes.featuredBadgeText || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Recommended", "wbd-pricing-tables"),
                onChange: val => updatePlan(idx, "featuredBadgeText", val),
                help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom text for the featured badge on this plan.", "wbd-pricing-tables")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Text", "wbd-pricing-tables"),
                value: plan.buttonText,
                onChange: val => updatePlan(idx, "buttonText", val)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button URL", "wbd-pricing-tables"),
                value: plan.buttonUrl,
                onChange: val => updatePlan(idx, "buttonUrl", val)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open in New Tab", "wbd-pricing-tables"),
                checked: plan.openInNewTab,
                onChange: val => updatePlan(idx, "openInNewTab", val)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Features", "wbd-pricing-tables")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
                  spacing: 2,
                  style: {
                    marginTop: "8px"
                  },
                  children: plan.features.map((feature, fi) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
                    alignment: "center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                      value: feature.text,
                      onChange: val => updateFeature(idx, fi, "text", val),
                      style: {
                        flex: 1
                      },
                      __nextHasNoMarginBottom: true
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Included", "wbd-pricing-tables"),
                      checked: feature.included,
                      onChange: val => updateFeature(idx, fi, "included", val)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                      isDestructive: true,
                      variant: "tertiary",
                      onClick: () => removeFeature(idx, fi),
                      size: "small",
                      children: "\u2715"
                    })]
                  }, fi))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  variant: "tertiary",
                  onClick: () => addFeature(idx),
                  style: {
                    marginTop: "8px"
                  },
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("+ Add Feature", "wbd-pricing-tables")
                })]
              }), plans.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                isDestructive: true,
                variant: "secondary",
                onClick: () => removePlan(idx),
                style: {
                  marginTop: "12px"
                },
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove This Plan", "wbd-pricing-tables")
              })]
            });
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [showBillingToggle && billingOptions.length > 1 && layoutStyle !== "flat-border" && layoutStyle !== "banner" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "telex-billing-toggle-wrapper",
        children: billingOptions.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          className: `telex-billing-option${previewBilling === opt.key ? " telex-billing-option--active" : ""}`,
          onClick: () => setPreviewBilling(opt.key),
          children: opt.label
        }, opt.key))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "telex-pricing-table-grid",
        style: {
          gridTemplateColumns: `repeat(${columns}, 1fr)`
        },
        children: plans.map((plan, index) => renderCard(plan, index))
      })]
    })]
  });
}

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/save.js"
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function save({
  attributes
}) {
  const {
    plans,
    columns,
    showBillingToggle,
    billingOptions,
    defaultBillingOption,
    headerBgColor,
    headerTextColor,
    buttonBgColor,
    buttonTextColor,
    featuredAccentColor,
    borderRadius,
    styleTheme,
    layoutStyle
  } = attributes;
  const defaultKey = defaultBillingOption || (billingOptions[0] ? billingOptions[0].key : 'monthly');
  const layout = layoutStyle || 'classic';
  const globalBadgeText = attributes.featuredBadgeText || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Recommended', 'telex-pricing-table');
  const getPlanBadgeText = plan => {
    return plan.featuredBadgeText || globalBadgeText;
  };

  // ── Layout: Centered ───────────────────────────────────────────────────────
  const renderCenteredCard = (plan, index) => {
    const defaultPricing = plan.pricing && plan.pricing[defaultKey] || {
      price: '0',
      period: '',
      discount: ''
    };
    const pricingDataAttr = plan.pricing ? JSON.stringify(plan.pricing) : '{}';
    const accentColor = plan.featured ? featuredAccentColor : headerBgColor;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `telex-pricing-card telex-pricing-card--centered${plan.featured ? ' telex-pricing-card--featured' : ''}`,
      style: {
        borderRadius: `${borderRadius}px`
      },
      "data-pricing": pricingDataAttr,
      children: [plan.featured && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "telex-pricing-badge",
        style: {
          backgroundColor: featuredAccentColor
        },
        children: getPlanBadgeText(plan)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "telex-centered-top",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "telex-pricing-plan-name",
          style: {
            color: accentColor
          },
          children: plan.name
        }), plan.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "telex-pricing-description",
          children: plan.description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "telex-centered-price-circle",
        style: {
          borderColor: accentColor
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "telex-pricing-discount-badge",
          style: {
            display: defaultPricing.discount ? '' : 'none'
          },
          children: defaultPricing.discount ? defaultPricing.discount + '%' : ''
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "telex-pricing-currency",
          children: plan.currency
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "telex-pricing-amount",
          children: defaultPricing.price
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "telex-pricing-period",
          children: defaultPricing.period
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        className: "telex-pricing-features telex-pricing-features--centered",
        children: plan.features.map((feature, fi) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
          className: `telex-pricing-feature${!feature.included ? ' telex-pricing-feature--excluded' : ''}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: feature.included ? 'telex-feature-icon telex-feature-icon--check' : 'telex-feature-icon telex-feature-icon--cross',
            children: feature.included ? '\u2713' : '\u2715'
          }), feature.text]
        }, fi))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "telex-pricing-button-area",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          className: "telex-pricing-button telex-pricing-button--pill",
          href: plan.buttonUrl || '#',
          style: {
            backgroundColor: accentColor,
            color: buttonTextColor
          },
          ...(plan.openInNewTab ? {
            target: '_blank',
            rel: 'noopener noreferrer'
          } : {}),
          children: plan.buttonText
        })
      })]
    }, index);
  };

  // ── Layout: Banner ─────────────────────────────────────────────────────────
  const renderBannerCard = (plan, index) => {
    const defaultPricing = plan.pricing && plan.pricing[defaultKey] || {
      price: '0',
      period: '',
      discount: ''
    };
    const pricingDataAttr = plan.pricing ? JSON.stringify(plan.pricing) : '{}';
    const accentColor = plan.featured ? featuredAccentColor : headerBgColor;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `telex-pricing-card telex-pricing-card--banner${plan.featured ? ' telex-pricing-card--featured' : ''}`,
      style: {
        borderRadius: `${borderRadius}px`
      },
      "data-pricing": pricingDataAttr,
      children: [plan.featured && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "telex-pricing-badge",
        style: {
          backgroundColor: featuredAccentColor
        },
        children: getPlanBadgeText(plan)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "telex-banner-header",
        style: {
          backgroundColor: accentColor
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "telex-pricing-plan-name",
          style: {
            color: headerTextColor
          },
          children: plan.name
        }), plan.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "telex-pricing-description",
          style: {
            color: headerTextColor
          },
          children: plan.description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "telex-banner-price-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
            className: "telex-pricing-discount-badge telex-banner-discount",
            style: {
              display: defaultPricing.discount ? '' : 'none'
            },
            children: [defaultPricing.discount ? defaultPricing.discount + '% ' : '', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('OFF', 'wbd-pricing-tables')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "telex-pricing-price-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "telex-pricing-currency",
              style: {
                color: headerTextColor
              },
              children: plan.currency
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "telex-pricing-amount",
              style: {
                color: headerTextColor
              },
              children: defaultPricing.price
            })]
          }), defaultPricing.period && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "telex-banner-period",
            style: {
              color: headerTextColor
            },
            children: defaultPricing.period
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        className: "telex-pricing-features telex-pricing-features--banner",
        children: plan.features.map((feature, fi) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          className: `telex-pricing-feature${!feature.included ? ' telex-pricing-feature--excluded' : ''}`,
          children: feature.text
        }, fi))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "telex-pricing-button-area",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          className: "telex-pricing-button telex-pricing-button--banner",
          href: plan.buttonUrl || '#',
          style: {
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
            borderRadius: `${Math.max(borderRadius - 4, 4)}px`
          },
          ...(plan.openInNewTab ? {
            target: '_blank',
            rel: 'noopener noreferrer'
          } : {}),
          children: plan.buttonText
        })
      })]
    }, index);
  };

  // ── Layout: Flat Border ────────────────────────────────────────────────────
  const renderFlatBorderCard = (plan, index) => {
    const defaultPricing = plan.pricing && plan.pricing[defaultKey] || {
      price: '0',
      period: '',
      discount: ''
    };
    const pricingDataAttr = plan.pricing ? JSON.stringify(plan.pricing) : '{}';
    const accentColor = plan.featured ? featuredAccentColor : '#e0e0e0';
    const textAccent = plan.featured ? featuredAccentColor : '#333333';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `telex-pricing-card telex-pricing-card--flat-border${plan.featured ? ' telex-pricing-card--featured' : ''}`,
      style: {
        borderRadius: `${borderRadius}px`,
        borderColor: accentColor
      },
      "data-pricing": pricingDataAttr,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "telex-flat-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "telex-pricing-plan-name",
          style: {
            color: textAccent
          },
          children: plan.name
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "telex-flat-price-area",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          className: "telex-pricing-discount-badge",
          style: {
            display: defaultPricing.discount ? '' : 'none'
          },
          children: [defaultPricing.discount ? defaultPricing.discount + '% ' : '', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('OFF', 'wbd-pricing-tables')]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "telex-pricing-price-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "telex-pricing-currency",
            style: {
              color: textAccent
            },
            children: plan.currency
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "telex-pricing-amount",
            style: {
              color: textAccent
            },
            children: defaultPricing.price
          })]
        }), defaultPricing.period && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "telex-pricing-period",
          children: defaultPricing.period
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        className: "telex-pricing-features telex-pricing-features--flat",
        children: plan.features.map((feature, fi) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          className: `telex-pricing-feature telex-pricing-feature--flat${!feature.included ? ' telex-pricing-feature--excluded' : ''}`,
          children: feature.text
        }, fi))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "telex-pricing-button-area",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          className: "telex-pricing-button",
          href: plan.buttonUrl || '#',
          style: {
            backgroundColor: plan.featured ? featuredAccentColor : buttonBgColor,
            color: buttonTextColor,
            borderRadius: `${Math.max(borderRadius - 4, 4)}px`
          },
          ...(plan.openInNewTab ? {
            target: '_blank',
            rel: 'noopener noreferrer'
          } : {}),
          children: plan.buttonText
        })
      })]
    }, index);
  };

  // ── Render dispatcher ──────────────────────────────────────────────────────
  const renderCard = (plan, index) => {
    switch (layout) {
      case 'centered':
        return renderCenteredCard(plan, index);
      case 'side-accent':
        return renderSideAccentCard(plan, index);
      case 'card-ribbon':
        return renderCardRibbonCard(plan, index);
      case 'banner':
        return renderBannerCard(plan, index);
      case 'flat-border':
        return renderFlatBorderCard(plan, index);
      default:
        return renderClassicCard(plan, index);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      className: `telex-pricing-table-wrapper telex-theme-${styleTheme || 'default'} telex-layout-${layout}`
    }),
    children: [showBillingToggle && billingOptions.length > 1 && layoutStyle !== 'flat-border' && layoutStyle !== 'banner' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "telex-billing-toggle-wrapper",
      children: billingOptions.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        className: `telex-billing-option${opt.key === defaultKey ? ' telex-billing-option--active' : ''}`,
        "data-billing": opt.key,
        children: opt.label
      }, opt.key))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "telex-pricing-table-grid",
      style: {
        gridTemplateColumns: `repeat(${columns}, 1fr)`
      },
      children: plans.map((plan, index) => renderCard(plan, index))
    })]
  });
}

/***/ },

/***/ "./src/editor.scss"
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/style.scss"
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/block.json"
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wbdpt/wbd-pricing-table","version":"1.1.2","title":"Pricing Table","category":"widgets","icon":"editor-table","description":"A beautiful, fully customizable pricing table block with multiple plans, feature lists, CTA buttons, and featured plan highlighting.","example":{"attributes":{"plans":[{"name":"Basic","description":"For individuals","currency":"$","features":[{"text":"1 Website","included":true},{"text":"10 GB Storage","included":true},{"text":"Email Support","included":true},{"text":"Priority Support","included":false}],"buttonText":"Get Started","buttonUrl":"#","featured":false,"openInNewTab":false,"pricing":{"monthly":{"price":"9","period":"/mo","discount":""},"yearly":{"price":"86","period":"/yr","discount":"20"}}},{"name":"Pro","description":"For professionals","currency":"$","features":[{"text":"10 Websites","included":true},{"text":"50 GB Storage","included":true},{"text":"Email Support","included":true},{"text":"Priority Support","included":true}],"buttonText":"Get Started","buttonUrl":"#","featured":true,"openInNewTab":false,"pricing":{"monthly":{"price":"29","period":"/mo","discount":""},"yearly":{"price":"278","period":"/yr","discount":"20"}}},{"name":"Enterprise","description":"For large teams","currency":"$","features":[{"text":"Unlimited Websites","included":true},{"text":"500 GB Storage","included":true},{"text":"24/7 Support","included":true},{"text":"Priority Support","included":true}],"buttonText":"Contact Us","buttonUrl":"#","featured":false,"openInNewTab":false,"pricing":{"monthly":{"price":"99","period":"/mo","discount":""},"yearly":{"price":"950","period":"/yr","discount":"20"}}}],"columns":3,"showBillingToggle":true,"billingOptions":[{"key":"monthly","label":"Monthly"},{"key":"yearly","label":"Yearly"}],"defaultBillingOption":"monthly"}},"attributes":{"align":{"type":"string","default":"wide"},"plans":{"type":"array","default":[{"name":"Basic","description":"Perfect for getting started","currency":"$","features":[{"text":"1 Website","included":true},{"text":"10 GB Storage","included":true},{"text":"Email Support","included":true},{"text":"Priority Support","included":false}],"buttonText":"Get Started","buttonUrl":"#","featured":false,"openInNewTab":false,"pricing":{"monthly":{"price":"9","period":"/mo","discount":""},"yearly":{"price":"86","period":"/yr","discount":"20"}}},{"name":"Pro","description":"Best for professionals","currency":"$","features":[{"text":"10 Websites","included":true},{"text":"50 GB Storage","included":true},{"text":"Email Support","included":true},{"text":"Priority Support","included":true}],"buttonText":"Get Started","buttonUrl":"#","featured":true,"openInNewTab":false,"pricing":{"monthly":{"price":"29","period":"/mo","discount":""},"yearly":{"price":"278","period":"/yr","discount":"20"}}},{"name":"Enterprise","description":"For large teams and businesses","currency":"$","features":[{"text":"Unlimited Websites","included":true},{"text":"500 GB Storage","included":true},{"text":"24/7 Phone Support","included":true},{"text":"Dedicated Manager","included":true}],"buttonText":"Contact Us","buttonUrl":"#","featured":false,"openInNewTab":false,"pricing":{"monthly":{"price":"99","period":"/mo","discount":""},"yearly":{"price":"950","period":"/yr","discount":"20"}}}]},"columns":{"type":"number","default":3},"showBillingToggle":{"type":"boolean","default":true},"billingOptions":{"type":"array","default":[{"key":"monthly","label":"Monthly"},{"key":"yearly","label":"Yearly"}]},"defaultBillingOption":{"type":"string","default":"monthly"},"headerBgColor":{"type":"string","default":"#4a90d9"},"headerTextColor":{"type":"string","default":"#ffffff"},"buttonBgColor":{"type":"string","default":"#4a90d9"},"buttonTextColor":{"type":"string","default":"#ffffff"},"featuredAccentColor":{"type":"string","default":"#e85e5e"},"borderRadius":{"type":"number","default":12},"featuredBadgeText":{"type":"string","default":"Recommended"},"styleTheme":{"type":"string","default":"default"},"layoutStyle":{"type":"string","default":"flat-border"}},"supports":{"html":false,"align":["wide","full"]},"textdomain":"wbd-pricing-tables","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwbd_pricing_table"] = globalThis["webpackChunkwbd_pricing_table"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map