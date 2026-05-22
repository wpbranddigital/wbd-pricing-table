import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  PanelRow,
  TextControl,
  ToggleControl,
  RangeControl,
  Button,
  ColorPicker,
  ColorIndicator,
  SelectControl,
  __experimentalHStack as HStack,
  __experimentalVStack as VStack,
  TabPanel,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";




export default function Edit({ attributes, setAttributes }) {
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
    layoutStyle,
  } = attributes;


  const THEME_PRESETS = {
    default: {
      label: "Default",
      description: "Clean blue and white design",
      headerBgColor: "#4a90d9",
      headerTextColor: "#ffffff",
      buttonBgColor: "#4a90d9",
      buttonTextColor: "#ffffff",
      featuredAccentColor: "#e85e5e",
    },
    dark: {
      label: "Dark",
      description: "Dark cards with vibrant accents",
      headerBgColor: "#1a1a2e",
      headerTextColor: "#ffffff",
      buttonBgColor: "#6c63ff",
      buttonTextColor: "#ffffff",
      featuredAccentColor: "#6c63ff",
    },
    gradient: {
      label: "Gradient",
      description: "Vibrant gradient headers",
      headerBgColor: "#667eea",
      headerTextColor: "#ffffff",
      buttonBgColor: "#764ba2",
      buttonTextColor: "#ffffff",
      featuredAccentColor: "#f093fb",
    },
    minimal: {
      label: "Minimal",
      description: "Clean flat design with subtle tones",
      headerBgColor: "#f7f8fc",
      headerTextColor: "#2d3436",
      buttonBgColor: "#2d3436",
      buttonTextColor: "#ffffff",
      featuredAccentColor: "#00b894",
    },
  };

  const LAYOUT_OPTIONS = {
    centered: {
      label: "Centered",
      description: "Circular price badge, centered content",
      icon: "◉",
    },
    banner: {
      label: "Banner",
      description: "Pentagon header with bold price display",
      icon: "⬟",
    },
    "flat-border": {
      label: "Flat Border",
      description: "Clean flat cards with featured border highlight",
      icon: "▭",
    },
  };

  const applyThemePreset = (themeKey) => {
    const preset = THEME_PRESETS[themeKey];
    if (!preset) return;
    setAttributes({
      styleTheme: themeKey,
      headerBgColor: preset.headerBgColor,
      headerTextColor: preset.headerTextColor,
      buttonBgColor: preset.buttonBgColor,
      buttonTextColor: preset.buttonTextColor,
      featuredAccentColor: preset.featuredAccentColor,
    });
  };

  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [previewBilling, setPreviewBilling] = useState(
    defaultBillingOption ||
      (billingOptions[0] ? billingOptions[0].key : "monthly"),
  );

  const updatePlan = (index, key, value) => {
    const updated = plans.map((plan, i) =>
      i === index ? { ...plan, [key]: value } : plan,
    );
    setAttributes({ plans: updated });
  };

  const updatePlanPricing = (planIndex, billingKey, field, value) => {
    const updated = plans.map((plan, i) => {
      if (i !== planIndex) return plan;
      const pricing = { ...(plan.pricing || {}) };
      pricing[billingKey] = {
        ...(pricing[billingKey] || { price: "0", period: "", discount: "" }),
        [field]: value,
      };
      return { ...plan, pricing };
    });
    setAttributes({ plans: updated });
  };

  const updateFeature = (planIndex, featureIndex, key, value) => {
    const updated = plans.map((plan, pi) => {
      if (pi !== planIndex) return plan;
      const features = plan.features.map((feat, fi) =>
        fi === featureIndex ? { ...feat, [key]: value } : feat,
      );
      return { ...plan, features };
    });
    setAttributes({ plans: updated });
  };

  const addFeature = (planIndex) => {
    const updated = plans.map((plan, i) => {
      if (i !== planIndex) return plan;
      return {
        ...plan,
        features: [
          ...plan.features,
          { text: __("New Feature", "telex-pricing-table"), included: true },
        ],
      };
    });
    setAttributes({ plans: updated });
  };

  const removeFeature = (planIndex, featureIndex) => {
    const updated = plans.map((plan, i) => {
      if (i !== planIndex) return plan;
      return {
        ...plan,
        features: plan.features.filter((_, fi) => fi !== featureIndex),
      };
    });
    setAttributes({ plans: updated });
  };

  const addPlan = () => {
    if (plans.length >= 6) return;
    const defaultPricing = {};
    billingOptions.forEach((opt) => {
      defaultPricing[opt.key] = { price: "0", period: "", discount: "" };
    });
    const newPlan = {
      name: __("New Plan", "telex-pricing-table"),
      currency: "$",
      description: "",
      features: [
        { text: __("Feature 1", "telex-pricing-table"), included: true },
      ],
      buttonText: __("Get Started", "telex-pricing-table"),
      buttonUrl: "#",
      featured: false,
      openInNewTab: false,
      pricing: defaultPricing,
    };
    setAttributes({ plans: [...plans, newPlan] });
    setActivePlanIndex(plans.length);
  };

  const removePlan = (index) => {
    if (plans.length <= 1) return;
    const updated = plans.filter((_, i) => i !== index);
    setAttributes({ plans: updated });
    if (activePlanIndex >= updated.length) {
      setActivePlanIndex(Math.max(0, updated.length - 1));
    }
  };

  const generateKey = (label) => {
    return (
      label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || "option-" + Date.now()
    );
  };

  const addBillingOption = () => {
    const newLabel = __("New Option", "telex-pricing-table");
    const newKey = generateKey(newLabel) + "-" + billingOptions.length;
    const updatedOptions = [
      ...billingOptions,
      { key: newKey, label: newLabel },
    ];
    setAttributes({ billingOptions: updatedOptions });

    const updatedPlans = plans.map((plan) => {
      const pricing = { ...(plan.pricing || {}) };
      pricing[newKey] = { price: "0", period: "", discount: "" };
      return { ...plan, pricing };
    });
    setAttributes({ plans: updatedPlans });
  };

  const removeBillingOption = (index) => {
    if (billingOptions.length <= 1) return;
    const removedKey = billingOptions[index].key;
    const updatedOptions = billingOptions.filter((_, i) => i !== index);
    setAttributes({ billingOptions: updatedOptions });

    if (defaultBillingOption === removedKey) {
      setAttributes({ defaultBillingOption: updatedOptions[0].key });
    }
    if (previewBilling === removedKey) {
      setPreviewBilling(updatedOptions[0].key);
    }

    const updatedPlans = plans.map((plan) => {
      const pricing = { ...(plan.pricing || {}) };
      delete pricing[removedKey];
      return { ...plan, pricing };
    });
    setAttributes({ plans: updatedPlans });
  };

  const updateBillingOptionLabel = (index, newLabel) => {
    const updatedOptions = billingOptions.map((opt, i) =>
      i === index ? { ...opt, label: newLabel } : opt,
    );
    setAttributes({ billingOptions: updatedOptions });
  };

  const getActivePricing = (plan) => {
    if (!plan.pricing || !plan.pricing[previewBilling]) {
      return {
        price: plan.price || "0",
        period: plan.period || "",
        discount: "",
      };
    }
    return plan.pricing[previewBilling];
  };

  const blockProps = useBlockProps({
    className: `telex-pricing-table-wrapper telex-theme-${
      styleTheme || "default"
    } telex-layout-${layoutStyle || "classic"}`,
  });

  const planTabs = plans.map((plan, index) => ({
    name: `plan-${index}`,
    title: plan.name || `Plan ${index + 1}`,
  }));

  const getPlanBadgeText = (plan) => {
    return (
      plan.featuredBadgeText ||
      attributes.featuredBadgeText ||
      __("Recommended", "telex-pricing-table")
    );
  };



  // ── Layout: Centered ───────────────────────────────────────────────────────
  const renderCenteredCard = (plan, index) => {
    const activePricing = getActivePricing(plan);
    const displayPrice = activePricing.price || "0";
    const displayPeriod = activePricing.period || "";
    const showDiscount =
      activePricing.discount && activePricing.discount !== "";
    const accentColor = plan.featured ? featuredAccentColor : headerBgColor;
    return (
      <div
        key={index}
        className={`telex-pricing-card telex-pricing-card--centered${
          plan.featured ? " telex-pricing-card--featured" : ""
        }`}
        style={{ borderRadius: `${borderRadius}px` }}
      >
        {plan.featured && (
          <div
            className="telex-pricing-badge"
            style={{ backgroundColor: featuredAccentColor }}
          >
            {getPlanBadgeText(plan)}
          </div>
        )}
        <div className="telex-centered-top">
          <h3
            className="telex-pricing-plan-name"
            style={{ color: accentColor }}
          >
            {plan.name}
          </h3>
          {plan.description && (
            <p className="telex-pricing-description">{plan.description}</p>
          )}
        </div>
        <div
          className="telex-centered-price-circle"
          style={{ borderColor: accentColor }}
        >
          {showDiscount && (
            <span className="telex-pricing-discount-badge">
              {activePricing.discount}%
            </span>
          )}
          <span className="telex-pricing-currency">{plan.currency}</span>
          <span className="telex-pricing-amount">{displayPrice}</span>
          <span className="telex-pricing-period">{displayPeriod}</span>
        </div>
        <ul className="telex-pricing-features telex-pricing-features--centered">
          {plan.features.map((feature, fi) => (
            <li
              key={fi}
              className={`telex-pricing-feature${
                !feature.included ? " telex-pricing-feature--excluded" : ""
              }`}
            >
              <span
                className={
                  feature.included
                    ? "telex-feature-icon telex-feature-icon--check"
                    : "telex-feature-icon telex-feature-icon--cross"
                }
              >
                {feature.included ? "\u2713" : "\u2715"}
              </span>
              {feature.text}
            </li>
          ))}
        </ul>
        <div className="telex-pricing-button-area">
          <span
            className="telex-pricing-button telex-pricing-button--pill"
            style={{
              backgroundColor: accentColor,
              color: buttonTextColor,
            }}
          >
            {plan.buttonText}
          </span>
        </div>
      </div>
    );
  };



  // ── Layout: Banner ─────────────────────────────────────────────────────────
  const renderBannerCard = (plan, index) => {
    const activePricing = getActivePricing(plan);
    const displayPrice = activePricing.price || "0";
    const displayPeriod = activePricing.period || "";
    const showDiscount =
      activePricing.discount && activePricing.discount !== "";
    const accentColor = plan.featured ? featuredAccentColor : headerBgColor;
    return (
      <div
        key={index}
        className={`telex-pricing-card telex-pricing-card--banner${
          plan.featured ? " telex-pricing-card--featured" : ""
        }`}
        style={{ borderRadius: `${borderRadius}px` }}
      >
        {plan.featured && (
          <div
            className="telex-pricing-badge"
            style={{ backgroundColor: featuredAccentColor }}
          >
            {getPlanBadgeText(plan)}
          </div>
        )}
        <div
          className="telex-banner-header"
          style={{ backgroundColor: accentColor }}
        >
          <h3
            className="telex-pricing-plan-name"
            style={{ color: headerTextColor }}
          >
            {plan.name}
          </h3>
          {plan.description && (
            <p
              className="telex-pricing-description"
              style={{ color: headerTextColor }}
            >
              {plan.description}
            </p>
          )}
          <div className="telex-banner-price-row">
            {showDiscount && (
              <span className="telex-pricing-discount-badge telex-banner-discount">
                {activePricing.discount}% {__("OFF", "wbd-pricing-tables")}
              </span>
            )}
            <div className="telex-pricing-price-row">
              <span
                className="telex-pricing-currency"
                style={{ color: headerTextColor }}
              >
                {plan.currency}
              </span>
              <span
                className="telex-pricing-amount"
                style={{ color: headerTextColor }}
              >
                {displayPrice}
              </span>
            </div>
            {displayPeriod && (
              <span
                className="telex-banner-period"
                style={{ color: headerTextColor }}
              >
                {displayPeriod}
              </span>
            )}
          </div>
        </div>
        <ul className="telex-pricing-features telex-pricing-features--banner">
          {plan.features.map((feature, fi) => (
            <li
              key={fi}
              className={`telex-pricing-feature${
                !feature.included ? " telex-pricing-feature--excluded" : ""
              }`}
            >
              {feature.text}
            </li>
          ))}
        </ul>
        <div className="telex-pricing-button-area">
          <span
            className="telex-pricing-button telex-pricing-button--banner"
            style={{
              backgroundColor: buttonBgColor,
              color: buttonTextColor,
              borderRadius: `${Math.max(borderRadius - 4, 4)}px`,
            }}
          >
            {plan.buttonText}
          </span>
        </div>
      </div>
    );
  };

  // ── Layout: Flat Border ────────────────────────────────────────────────────
  const renderFlatBorderCard = (plan, index) => {
    const activePricing = getActivePricing(plan);
    const displayPrice = activePricing.price || "0";
    const displayPeriod = activePricing.period || "";
    const showDiscount =
      activePricing.discount && activePricing.discount !== "";
    const accentColor = plan.featured ? featuredAccentColor : "#e0e0e0";
    const textAccent = plan.featured ? featuredAccentColor : "#333333";
    return (
      <div
        key={index}
        className={`telex-pricing-card telex-pricing-card--flat-border${
          plan.featured ? " telex-pricing-card--featured" : ""
        }`}
        style={{ borderRadius: `${borderRadius}px`, borderColor: accentColor }}
      >
        <div className="telex-flat-header">
          <h3 className="telex-pricing-plan-name" style={{ color: textAccent }}>
            {plan.name}
          </h3>
        </div>
        <div className="telex-flat-price-area">
          {showDiscount && (
            <span className="telex-pricing-discount-badge">
              {activePricing.discount}% {__("OFF", "wbd-pricing-tables")}
            </span>
          )}
          <div className="telex-pricing-price-row">
            <span
              className="telex-pricing-currency"
              style={{ color: textAccent }}
            >
              {plan.currency}
            </span>
            <span
              className="telex-pricing-amount"
              style={{ color: textAccent }}
            >
              {displayPrice}
            </span>
          </div>
          {displayPeriod && (
            <span className="telex-pricing-period">{displayPeriod}</span>
          )}
        </div>
        <ul className="telex-pricing-features telex-pricing-features--flat">
          {plan.features.map((feature, fi) => (
            <li
              key={fi}
              className={`telex-pricing-feature telex-pricing-feature--flat${
                !feature.included ? " telex-pricing-feature--excluded" : ""
              }`}
            >
              {feature.text}
            </li>
          ))}
        </ul>
        <div className="telex-pricing-button-area">
          <span
            className="telex-pricing-button"
            style={{
              backgroundColor: plan.featured
                ? featuredAccentColor
                : buttonBgColor,
              color: buttonTextColor,
              borderRadius: `${Math.max(borderRadius - 4, 4)}px`,
            }}
          >
            {plan.buttonText}
          </span>
        </div>
      </div>
    );
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

  return (
    <>
      <InspectorControls>
		{/* HELP & SUPPORT */}
				<PanelBody title="Help & Support">
					<p style={{ marginBottom: '10px' }}>Thank you for using WBD Pricing Tables! If you enjoy this plugin, please consider rating it. Need help? Reach out to our support team.</p>
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
						<Button isPrimary onClick={() => window.open(rateLink, '_blank')}>Rate Plugin</Button>
						<Button isPrimary onClick={() => window.open(pageLink, '_blank')}>Contact Support</Button>
					</div>
				</PanelBody>
        <PanelBody
          title={__("Layout Style", "wbd-pricing-tables")}
          initialOpen={true}
        >
          <div className="telex-layout-selector">
            {Object.entries(LAYOUT_OPTIONS).map(([key, opt]) => (
              <button
                key={key}
                type="button"
                className={`telex-layout-option${
                  layoutStyle === key ? " telex-layout-option--active" : ""
                }`}
                onClick={() => setAttributes({ layoutStyle: key })}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  padding: "12px",
                  marginBottom: "8px",
                  border:
                    layoutStyle === key
                      ? "2px solid #007cba"
                      : "2px solid #ddd",
                  borderRadius: "8px",
                  background: layoutStyle === key ? "#f0f7ff" : "#fff",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: "24px", lineHeight: 1 }}>
                  {opt.icon}
                </span>
                <div>
                  <strong
                    style={{
                      fontSize: "13px",
                      color: "#1e1e1e",
                      display: "block",
                    }}
                  >
                    {opt.label}
                  </strong>
                  <span style={{ fontSize: "11px", color: "#757575" }}>
                    {opt.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </PanelBody>
        <PanelBody
          title={__("Style Theme", "wbd-pricing-tables")}
          initialOpen={false}
        >
          <div className="telex-theme-selector">
            {Object.entries(THEME_PRESETS).map(([key, preset]) => (
              <button
                key={key}
                type="button"
                className={`telex-theme-option${
                  styleTheme === key ? " telex-theme-option--active" : ""
                }`}
                onClick={() => applyThemePreset(key)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                  padding: "12px",
                  marginBottom: "8px",
                  border:
                    styleTheme === key ? "2px solid #007cba" : "2px solid #ddd",
                  borderRadius: "8px",
                  background: styleTheme === key ? "#f0f7ff" : "#fff",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div
                  style={{ display: "flex", gap: "6px", marginBottom: "6px" }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: preset.headerBgColor,
                      border: "1px solid #ccc",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: preset.buttonBgColor,
                      border: "1px solid #ccc",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: preset.featuredAccentColor,
                      border: "1px solid #ccc",
                      display: "inline-block",
                    }}
                  ></span>
                </div>
                <strong style={{ fontSize: "13px", color: "#1e1e1e" }}>
                  {preset.label}
                </strong>
                <span style={{ fontSize: "11px", color: "#757575" }}>
                  {preset.description}
                </span>
              </button>
            ))}
          </div>
        </PanelBody>
        {
		( layoutStyle === "centered" )  && ( (
            <PanelBody
              title={__("Billing Toggle", "wbd-pricing-tables")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Show Billing Toggle", "wbd-pricing-tables")}
                checked={showBillingToggle}
                onChange={(val) => setAttributes({ showBillingToggle: val })}
              />
              {showBillingToggle && (
                <VStack spacing={3} style={{ marginTop: "12px" }}>
                  <strong>{__("Toggle Options", "wbd-pricing-tables")}</strong>
                  {billingOptions.map((opt, i) => (
                    <HStack key={opt.key} alignment="center">
                      <TextControl
                        value={opt.label}
                        onChange={(val) => updateBillingOptionLabel(i, val)}
                        style={{ flex: 1 }}
                        __nextHasNoMarginBottom
                      />
                      {billingOptions.length > 1 && (
                        <Button
                          isDestructive
                          variant="tertiary"
                          onClick={() => removeBillingOption(i)}
                          size="small"
                        >
                          ✕
                        </Button>
                      )}
                    </HStack>
                  ))}
                  <Button
                    variant="secondary"
                    onClick={addBillingOption}
                    size="small"
                  >
                    {__("+ Add Toggle Option", "wbd-pricing-tables")}
                  </Button>
                  <SelectControl
                    label={__("Default Active Option", "wbd-pricing-tables")}
                    value={defaultBillingOption}
                    options={billingOptions.map((opt) => ({
                      label: opt.label,
                      value: opt.key,
                    }))}
                    onChange={(val) =>
                      setAttributes({ defaultBillingOption: val })
                    }
                    __nextHasNoMarginBottom
                  />
                </VStack>
              )}
            </PanelBody>
          ))
		}

        <PanelBody
          title={__("Layout Settings", "wbd-pricing-tables")}
          initialOpen={false}
        >
          <RangeControl
            label={__("Columns", "wbd-pricing-tables")}
            value={columns}
            onChange={(val) => setAttributes({ columns: val })}
            min={1}
            max={4}
          />
          <RangeControl
            label={__("Border Radius", "telex-pricing-table")}
            value={borderRadius}
            onChange={(val) => setAttributes({ borderRadius: val })}
            min={0}
            max={30}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "wbd-pricing-tables")}
          initialOpen={false}
        >
          <VStack spacing={4}>
            <div>
              <HStack>
                <span>{__("Header Background", "wbd-pricing-tables")}</span>
                <ColorIndicator colorValue={headerBgColor} />
              </HStack>
              <ColorPicker
                color={headerBgColor}
                onChange={(val) => setAttributes({ headerBgColor: val })}
                enableAlpha={false}
              />
            </div>
            <div>
              <HStack>
                <span>{__("Header Text", "wbd-pricing-tables")}</span>
                <ColorIndicator colorValue={headerTextColor} />
              </HStack>
              <ColorPicker
                color={headerTextColor}
                onChange={(val) => setAttributes({ headerTextColor: val })}
                enableAlpha={false}
              />
            </div>
            <div>
              <HStack>
                <span>{__("Button Background", "wbd-pricing-tables")}</span>
                <ColorIndicator colorValue={buttonBgColor} />
              </HStack>
              <ColorPicker
                color={buttonBgColor}
                onChange={(val) => setAttributes({ buttonBgColor: val })}
                enableAlpha={false}
              />
            </div>
            <div>
              <HStack>
                <span>{__("Button Text", "wbd-pricing-tables")}</span>
                <ColorIndicator colorValue={buttonTextColor} />
              </HStack>
              <ColorPicker
                color={buttonTextColor}
                onChange={(val) => setAttributes({ buttonTextColor: val })}
                enableAlpha={false}
              />
            </div>
            <div>
              <HStack>
                <span>{__("Featured Accent", "wbd-pricing-tables")}</span>
                <ColorIndicator colorValue={featuredAccentColor} />
              </HStack>
              <ColorPicker
                color={featuredAccentColor}
                onChange={(val) => setAttributes({ featuredAccentColor: val })}
                enableAlpha={false}
              />
            </div>
          </VStack>
        </PanelBody>
        <PanelBody title={__("Plans", "wbd-pricing-tables")} initialOpen={true}>
          {plans.length < 6 && (
            <PanelRow>
              <Button variant="secondary" onClick={addPlan}>
                {__("+ Add Plan", "wbd-pricing-tables")}
              </Button>
            </PanelRow>
          )}
          {planTabs.length > 0 && (
            <TabPanel
              tabs={planTabs}
              onSelect={(tabName) => {
                const idx = parseInt(tabName.replace("plan-", ""), 10);
                setActivePlanIndex(idx);
              }}
            >
              {() => {
                const idx = activePlanIndex;
                const plan = plans[idx];
                if (!plan) return null;
                return (
                  <VStack spacing={3} style={{ paddingTop: "12px" }}>
                    <TextControl
                      label={__("Plan Name", "wbd-pricing-tables")}
                      value={plan.name}
                      onChange={(val) => updatePlan(idx, "name", val)}
                    />
                    <TextControl
                      label={__("Currency Symbol", "wbd-pricing-tables")}
                      value={plan.currency}
                      onChange={(val) => updatePlan(idx, "currency", val)}
                      style={{ width: "80px" }}
                    />
                    <TextControl
                      label={__("Description", "wbd-pricing-tables")}
                      value={plan.description}
                      onChange={(val) => updatePlan(idx, "description", val)}
                    />
                    <div
                      style={{
                        borderTop: "1px solid #ddd",
                        paddingTop: "12px",
                      }}
                    >
                      <strong>
                        {__("Pricing per Toggle Option", "wbd-pricing-tables")}
                      </strong>
                      <VStack spacing={3} style={{ marginTop: "8px" }}>
                        {billingOptions.map((opt) => {
                          const bp = (plan.pricing &&
                            plan.pricing[opt.key]) || {
                            price: "0",
                            period: "",
                            discount: "",
                          };
                          return (
                            <div
                              key={opt.key}
                              style={{
                                padding: "10px",
                                background: "#f9f9f9",
                                borderRadius: "6px",
                                border: "1px solid #e0e0e0",
                              }}
                            >
                              <strong
                                style={{
                                  display: "block",
                                  marginBottom: "6px",
                                }}
                              >
                                {opt.label}
                              </strong>
                              <HStack>
                                <TextControl
                                  label={__("Price", "wbd-pricing-tables")}
                                  value={bp.price}
                                  onChange={(val) =>
                                    updatePlanPricing(
                                      idx,
                                      opt.key,
                                      "price",
                                      val,
                                    )
                                  }
                                  __nextHasNoMarginBottom
                                />
                                <TextControl
                                  label={__("Period", "wbd-pricing-tables")}
                                  value={bp.period}
                                  onChange={(val) =>
                                    updatePlanPricing(
                                      idx,
                                      opt.key,
                                      "period",
                                      val,
                                    )
                                  }
                                  style={{ width: "80px" }}
                                  __nextHasNoMarginBottom
                                />
                              </HStack>
                              <TextControl
                                label={__(
                                  "Discount % (e.g. 20)",
                                  "wbd-pricing-tables",
                                )}
                                value={bp.discount || ""}
                                onChange={(val) =>
                                  updatePlanPricing(
                                    idx,
                                    opt.key,
                                    "discount",
                                    val,
                                  )
                                }
                                help={__(
                                  "Shown as a badge when this billing option is active.",
                                  "telex-pricing-table",
                                )}
                              />
                            </div>
                          );
                        })}
                      </VStack>
                    </div>
                    <ToggleControl
                      label={__("Featured Plan", "wbd-pricing-tables")}
                      checked={plan.featured}
                      onChange={(val) => updatePlan(idx, "featured", val)}
                    />
                    {plan.featured && (
                      <TextControl
                        label={__("Featured Badge Text", "wbd-pricing-tables")}
                        value={
                          plan.featuredBadgeText ||
                          attributes.featuredBadgeText ||
                          __("Recommended", "wbd-pricing-tables")
                        }
                        onChange={(val) =>
                          updatePlan(idx, "featuredBadgeText", val)
                        }
                        help={__(
                          "Custom text for the featured badge on this plan.",
                          "wbd-pricing-tables",
                        )}
                      />
                    )}
                    <TextControl
                      label={__("Button Text", "wbd-pricing-tables")}
                      value={plan.buttonText}
                      onChange={(val) => updatePlan(idx, "buttonText", val)}
                    />
                    <TextControl
                      label={__("Button URL", "wbd-pricing-tables")}
                      value={plan.buttonUrl}
                      onChange={(val) => updatePlan(idx, "buttonUrl", val)}
                    />
                    <ToggleControl
                      label={__("Open in New Tab", "wbd-pricing-tables")}
                      checked={plan.openInNewTab}
                      onChange={(val) => updatePlan(idx, "openInNewTab", val)}
                    />
                    <div>
                      <strong>{__("Features", "wbd-pricing-tables")}</strong>
                      <VStack spacing={2} style={{ marginTop: "8px" }}>
                        {plan.features.map((feature, fi) => (
                          <HStack key={fi} alignment="center">
                            <TextControl
                              value={feature.text}
                              onChange={(val) =>
                                updateFeature(idx, fi, "text", val)
                              }
                              style={{ flex: 1 }}
                              __nextHasNoMarginBottom
                            />
                            <ToggleControl
                              label={__("Included", "wbd-pricing-tables")}
                              checked={feature.included}
                              onChange={(val) =>
                                updateFeature(idx, fi, "included", val)
                              }
                            />
                            <Button
                              isDestructive
                              variant="tertiary"
                              onClick={() => removeFeature(idx, fi)}
                              size="small"
                            >
                              ✕
                            </Button>
                          </HStack>
                        ))}
                      </VStack>
                      <Button
                        variant="tertiary"
                        onClick={() => addFeature(idx)}
                        style={{ marginTop: "8px" }}
                      >
                        {__("+ Add Feature", "wbd-pricing-tables")}
                      </Button>
                    </div>
                    {plans.length > 1 && (
                      <Button
                        isDestructive
                        variant="secondary"
                        onClick={() => removePlan(idx)}
                        style={{ marginTop: "12px" }}
                      >
                        {__("Remove This Plan", "wbd-pricing-tables")}
                      </Button>
                    )}
                  </VStack>
                );
              }}
            </TabPanel>
          )}
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        {showBillingToggle &&
          billingOptions.length > 1 &&
          layoutStyle !== "flat-border" &&
          layoutStyle !== "banner" && (
            <div className="telex-billing-toggle-wrapper">
              {billingOptions.map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  className={`telex-billing-option${
                    previewBilling === opt.key
                      ? " telex-billing-option--active"
                      : ""
                  }`}
                  onClick={() => setPreviewBilling(opt.key)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        <div
          className="telex-pricing-table-grid"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {plans.map((plan, index) => renderCard(plan, index))}
        </div>
      </div>
    </>
  );
}
