import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save( { attributes } ) {
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

	const defaultKey = defaultBillingOption || ( billingOptions[ 0 ] ? billingOptions[ 0 ].key : 'monthly' );
	const layout = layoutStyle || 'classic';
	const globalBadgeText = attributes.featuredBadgeText || __( 'Recommended', 'telex-pricing-table' );

	const getPlanBadgeText = ( plan ) => {
		return plan.featuredBadgeText || globalBadgeText;
	};

	// ── Layout: Classic ────────────────────────────────────────────────────────
	const renderClassicCard = ( plan, index ) => {
		const cardBorderColor = plan.featured ? featuredAccentColor : 'transparent';
		const defaultPricing = ( plan.pricing && plan.pricing[ defaultKey ] ) || { price: '0', period: '', discount: '' };
		const pricingDataAttr = plan.pricing ? JSON.stringify( plan.pricing ) : '{}';

		return (
			<div
				key={ index }
				className={ `telex-pricing-card${ plan.featured ? ' telex-pricing-card--featured' : '' }` }
				style={ { borderRadius: `${ borderRadius }px`, borderColor: cardBorderColor } }
				data-pricing={ pricingDataAttr }
			>
				{ plan.featured && (
					<div className="telex-pricing-badge" style={ { backgroundColor: featuredAccentColor } }>
						{ getPlanBadgeText( plan ) }
					</div>
				) }
				<div
					className="telex-pricing-header"
					style={ {
						backgroundColor: plan.featured ? featuredAccentColor : headerBgColor,
						color: headerTextColor,
						borderRadius: `${ borderRadius }px ${ borderRadius }px 0 0`,
					} }
				>
					<h3 className="telex-pricing-plan-name">{ plan.name }</h3>
					{ plan.description && <p className="telex-pricing-description">{ plan.description }</p> }
				</div>
				<div className="telex-pricing-price-area">
					<span className="telex-pricing-discount-badge" style={ { display: defaultPricing.discount ? '' : 'none' } }>
						{ defaultPricing.discount ? defaultPricing.discount + '% ' : '' }
						{ __( 'OFF', 'telex-pricing-table' ) }
					</span>
					<div className="telex-pricing-price-row">
						<span className="telex-pricing-currency">{ plan.currency }</span>
						<span className="telex-pricing-amount">{ defaultPricing.price }</span>
						<span className="telex-pricing-period">{ defaultPricing.period }</span>
					</div>
				</div>
				<ul className="telex-pricing-features">
					{ plan.features.map( ( feature, fi ) => (
						<li key={ fi } className={ `telex-pricing-feature${ ! feature.included ? ' telex-pricing-feature--excluded' : '' }` }>
							<span className={ feature.included ? 'telex-feature-icon telex-feature-icon--check' : 'telex-feature-icon telex-feature-icon--cross' }>
								{ feature.included ? '\u2713' : '\u2715' }
							</span>
							{ feature.text }
						</li>
					) ) }
				</ul>
				<div className="telex-pricing-button-area">
					<a
						className="telex-pricing-button"
						href={ plan.buttonUrl || '#' }
						style={ {
							backgroundColor: plan.featured ? featuredAccentColor : buttonBgColor,
							color: buttonTextColor,
							borderRadius: `${ Math.max( borderRadius - 4, 4 ) }px`,
						} }
						{ ...( plan.openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {} ) }
					>
						{ plan.buttonText }
					</a>
				</div>
			</div>
		);
	};

	// ── Layout: Centered ───────────────────────────────────────────────────────
	const renderCenteredCard = ( plan, index ) => {
		const defaultPricing = ( plan.pricing && plan.pricing[ defaultKey ] ) || { price: '0', period: '', discount: '' };
		const pricingDataAttr = plan.pricing ? JSON.stringify( plan.pricing ) : '{}';
		const accentColor = plan.featured ? featuredAccentColor : headerBgColor;

		return (
			<div
				key={ index }
				className={ `telex-pricing-card telex-pricing-card--centered${ plan.featured ? ' telex-pricing-card--featured' : '' }` }
				style={ { borderRadius: `${ borderRadius }px` } }
				data-pricing={ pricingDataAttr }
			>
				{ plan.featured && (
					<div className="telex-pricing-badge" style={ { backgroundColor: featuredAccentColor } }>
						{ getPlanBadgeText( plan ) }
					</div>
				) }
				<div className="telex-centered-top">
					<h3 className="telex-pricing-plan-name" style={ { color: accentColor } }>{ plan.name }</h3>
					{ plan.description && <p className="telex-pricing-description">{ plan.description }</p> }
				</div>
				<div className="telex-centered-price-circle" style={ { borderColor: accentColor } }>
					<span className="telex-pricing-discount-badge" style={ { display: defaultPricing.discount ? '' : 'none' } }>
						{ defaultPricing.discount ? defaultPricing.discount + '%' : '' }
					</span>
					<span className="telex-pricing-currency">{ plan.currency }</span>
					<span className="telex-pricing-amount">{ defaultPricing.price }</span>
					<span className="telex-pricing-period">{ defaultPricing.period }</span>
				</div>
				<ul className="telex-pricing-features telex-pricing-features--centered">
					{ plan.features.map( ( feature, fi ) => (
						<li key={ fi } className={ `telex-pricing-feature${ ! feature.included ? ' telex-pricing-feature--excluded' : '' }` }>
							<span className={ feature.included ? 'telex-feature-icon telex-feature-icon--check' : 'telex-feature-icon telex-feature-icon--cross' }>
								{ feature.included ? '\u2713' : '\u2715' }
							</span>
							{ feature.text }
						</li>
					) ) }
				</ul>
				<div className="telex-pricing-button-area">
					<a
						className="telex-pricing-button telex-pricing-button--pill"
						href={ plan.buttonUrl || '#' }
						style={ { backgroundColor: accentColor, color: buttonTextColor } }
						{ ...( plan.openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {} ) }
					>
						{ plan.buttonText }
					</a>
				</div>
			</div>
		);
	};

	// ── Layout: Side Accent ────────────────────────────────────────────────────
	const renderSideAccentCard = ( plan, index ) => {
		const defaultPricing = ( plan.pricing && plan.pricing[ defaultKey ] ) || { price: '0', period: '', discount: '' };
		const pricingDataAttr = plan.pricing ? JSON.stringify( plan.pricing ) : '{}';
		const accentColor = plan.featured ? featuredAccentColor : headerBgColor;

		return (
			<div
				key={ index }
				className={ `telex-pricing-card telex-pricing-card--side-accent${ plan.featured ? ' telex-pricing-card--featured' : '' }` }
				style={ { borderRadius: `${ borderRadius }px`, borderLeftColor: accentColor } }
				data-pricing={ pricingDataAttr }
			>
				{ plan.featured && (
					<div className="telex-pricing-badge" style={ { backgroundColor: featuredAccentColor } }>
						{ getPlanBadgeText( plan ) }
					</div>
				) }
				<div className="telex-side-accent-header">
					<div className="telex-side-accent-title-area">
						<h3 className="telex-pricing-plan-name">{ plan.name }</h3>
						{ plan.description && <p className="telex-pricing-description">{ plan.description }</p> }
					</div>
					<div className="telex-side-accent-price-area">
						<span className="telex-pricing-discount-badge" style={ { display: defaultPricing.discount ? '' : 'none' } }>
							{ defaultPricing.discount ? defaultPricing.discount + '% ' : '' }
							{ __( 'OFF', 'telex-pricing-table' ) }
						</span>
						<div className="telex-pricing-price-row">
							<span className="telex-pricing-currency">{ plan.currency }</span>
							<span className="telex-pricing-amount">{ defaultPricing.price }</span>
							<span className="telex-pricing-period">{ defaultPricing.period }</span>
						</div>
					</div>
				</div>
				<div className="telex-side-accent-divider" style={ { backgroundColor: accentColor } }></div>
				<ul className="telex-pricing-features">
					{ plan.features.map( ( feature, fi ) => (
						<li key={ fi } className={ `telex-pricing-feature${ ! feature.included ? ' telex-pricing-feature--excluded' : '' }` }>
							<span className={ feature.included ? 'telex-feature-icon telex-feature-icon--check' : 'telex-feature-icon telex-feature-icon--cross' } style={ feature.included ? { color: accentColor, backgroundColor: accentColor + '18' } : {} }>
								{ feature.included ? '\u2713' : '\u2715' }
							</span>
							{ feature.text }
						</li>
					) ) }
				</ul>
				<div className="telex-pricing-button-area">
					<a
						className="telex-pricing-button telex-pricing-button--outline"
						href={ plan.buttonUrl || '#' }
						style={ { borderColor: accentColor, color: accentColor, borderRadius: `${ Math.max( borderRadius - 4, 4 ) }px` } }
						{ ...( plan.openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {} ) }
					>
						{ plan.buttonText }
					</a>
				</div>
			</div>
		);
	};

	// ── Layout: Card Ribbon ────────────────────────────────────────────────────
	const renderCardRibbonCard = ( plan, index ) => {
		const defaultPricing = ( plan.pricing && plan.pricing[ defaultKey ] ) || { price: '0', period: '', discount: '' };
		const pricingDataAttr = plan.pricing ? JSON.stringify( plan.pricing ) : '{}';
		const accentColor = plan.featured ? featuredAccentColor : headerBgColor;

		return (
			<div
				key={ index }
				className={ `telex-pricing-card telex-pricing-card--ribbon${ plan.featured ? ' telex-pricing-card--featured' : '' }` }
				style={ { borderRadius: `${ borderRadius }px` } }
				data-pricing={ pricingDataAttr }
			>
				{ plan.featured && (
					<div className="telex-ribbon-tag" style={ { backgroundColor: featuredAccentColor } }>
						{ getPlanBadgeText( plan ) }
					</div>
				) }
				<div className="telex-ribbon-top-bar" style={ { backgroundColor: accentColor } }></div>
				<div className="telex-ribbon-content">
					<div className="telex-ribbon-plan-info">
						<h3 className="telex-pricing-plan-name">{ plan.name }</h3>
						{ plan.description && <p className="telex-pricing-description">{ plan.description }</p> }
						<div className="telex-ribbon-price">
							<span className="telex-pricing-discount-badge telex-pricing-discount-badge--small" style={ { display: defaultPricing.discount ? '' : 'none' } }>
								{ defaultPricing.discount ? '-' + defaultPricing.discount + '%' : '' }
							</span>
							<span className="telex-pricing-currency">{ plan.currency }</span>
							<span className="telex-pricing-amount">{ defaultPricing.price }</span>
							<span className="telex-pricing-period">{ defaultPricing.period }</span>
						</div>
					</div>
					<div className="telex-ribbon-features-tags">
						{ plan.features.map( ( feature, fi ) => (
							<span
								key={ fi }
								className={ `telex-ribbon-tag-item${ ! feature.included ? ' telex-ribbon-tag-item--excluded' : '' }` }
								style={ feature.included ? { borderColor: accentColor, color: accentColor } : {} }
							>
								{ feature.included ? '\u2713' : '\u2715' } { feature.text }
							</span>
						) ) }
					</div>
					<div className="telex-pricing-button-area telex-pricing-button-area--ribbon">
						<a
							className="telex-pricing-button telex-pricing-button--wide"
							href={ plan.buttonUrl || '#' }
							style={ {
								backgroundColor: accentColor,
								color: buttonTextColor,
								borderRadius: `${ Math.max( borderRadius - 4, 4 ) }px`,
							} }
							{ ...( plan.openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {} ) }
						>
							{ plan.buttonText } →
						</a>
					</div>
				</div>
			</div>
		);
	};

	// ── Layout: Banner ─────────────────────────────────────────────────────────
	const renderBannerCard = ( plan, index ) => {
		const defaultPricing = ( plan.pricing && plan.pricing[ defaultKey ] ) || { price: '0', period: '', discount: '' };
		const pricingDataAttr = plan.pricing ? JSON.stringify( plan.pricing ) : '{}';
		const accentColor = plan.featured ? featuredAccentColor : headerBgColor;

		return (
			<div
				key={ index }
				className={ `telex-pricing-card telex-pricing-card--banner${ plan.featured ? ' telex-pricing-card--featured' : '' }` }
				style={ { borderRadius: `${ borderRadius }px` } }
				data-pricing={ pricingDataAttr }
			>
				{ plan.featured && (
					<div className="telex-pricing-badge" style={ { backgroundColor: featuredAccentColor } }>
						{ getPlanBadgeText( plan ) }
					</div>
				) }
				<div className="telex-banner-header" style={ { backgroundColor: accentColor } }>
					<h3 className="telex-pricing-plan-name" style={ { color: headerTextColor } }>{ plan.name }</h3>
					{ plan.description && (
						<p className="telex-pricing-description" style={ { color: headerTextColor } }>{ plan.description }</p>
					) }
					<div className="telex-banner-price-row">
						<span
							className="telex-pricing-discount-badge telex-banner-discount"
							style={ { display: defaultPricing.discount ? '' : 'none' } }
						>
							{ defaultPricing.discount ? defaultPricing.discount + '% ' : '' }
							{ __( 'OFF', 'wbd-pricing-tables' ) }
						</span>
						<div className="telex-pricing-price-row">
							<span className="telex-pricing-currency" style={ { color: headerTextColor } }>{ plan.currency }</span>
							<span className="telex-pricing-amount" style={ { color: headerTextColor } }>{ defaultPricing.price }</span>
						</div>
						{ defaultPricing.period && (
							<span className="telex-banner-period" style={ { color: headerTextColor } }>{ defaultPricing.period }</span>
						) }
					</div>
				</div>
				<ul className="telex-pricing-features telex-pricing-features--banner">
					{ plan.features.map( ( feature, fi ) => (
						<li
							key={ fi }
							className={ `telex-pricing-feature${ ! feature.included ? ' telex-pricing-feature--excluded' : '' }` }
						>
							{ feature.text }
						</li>
					) ) }
				</ul>
				<div className="telex-pricing-button-area">
					<a
						className="telex-pricing-button telex-pricing-button--banner"
						href={ plan.buttonUrl || '#' }
						style={ {
							backgroundColor: buttonBgColor,
							color: buttonTextColor,
							borderRadius: `${ Math.max( borderRadius - 4, 4 ) }px`,
						} }
						{ ...( plan.openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {} ) }
					>
						{ plan.buttonText }
					</a>
				</div>
			</div>
		);
	};

	// ── Layout: Flat Border ────────────────────────────────────────────────────
	const renderFlatBorderCard = ( plan, index ) => {
		const defaultPricing = ( plan.pricing && plan.pricing[ defaultKey ] ) || { price: '0', period: '', discount: '' };
		const pricingDataAttr = plan.pricing ? JSON.stringify( plan.pricing ) : '{}';
		const accentColor = plan.featured ? featuredAccentColor : '#e0e0e0';
		const textAccent = plan.featured ? featuredAccentColor : '#333333';

		return (
			<div
				key={ index }
				className={ `telex-pricing-card telex-pricing-card--flat-border${ plan.featured ? ' telex-pricing-card--featured' : '' }` }
				style={ { borderRadius: `${ borderRadius }px`, borderColor: accentColor } }
				data-pricing={ pricingDataAttr }
			>
				<div className="telex-flat-header">
					<h3 className="telex-pricing-plan-name" style={ { color: textAccent } }>{ plan.name }</h3>
				</div>
				<div className="telex-flat-price-area">
					<span
						className="telex-pricing-discount-badge"
						style={ { display: defaultPricing.discount ? '' : 'none' } }
					>
						{ defaultPricing.discount ? defaultPricing.discount + '% ' : '' }
						{ __( 'OFF', 'wbd-pricing-tables' ) }
					</span>
					<div className="telex-pricing-price-row">
						<span className="telex-pricing-currency" style={ { color: textAccent } }>{ plan.currency }</span>
						<span className="telex-pricing-amount" style={ { color: textAccent } }>{ defaultPricing.price }</span>
					</div>
					{ defaultPricing.period && (
						<span className="telex-pricing-period">{ defaultPricing.period }</span>
					) }
				</div>
				<ul className="telex-pricing-features telex-pricing-features--flat">
					{ plan.features.map( ( feature, fi ) => (
						<li
							key={ fi }
							className={ `telex-pricing-feature telex-pricing-feature--flat${ ! feature.included ? ' telex-pricing-feature--excluded' : '' }` }
						>
							{ feature.text }
						</li>
					) ) }
				</ul>
				<div className="telex-pricing-button-area">
					<a
						className="telex-pricing-button"
						href={ plan.buttonUrl || '#' }
						style={ {
							backgroundColor: plan.featured ? featuredAccentColor : buttonBgColor,
							color: buttonTextColor,
							borderRadius: `${ Math.max( borderRadius - 4, 4 ) }px`,
						} }
						{ ...( plan.openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {} ) }
					>
						{ plan.buttonText }
					</a>
				</div>
			</div>
		);
	};

	// ── Render dispatcher ──────────────────────────────────────────────────────
	const renderCard = ( plan, index ) => {
		switch ( layout ) {
			case 'centered':
				return renderCenteredCard( plan, index );
			case 'side-accent':
				return renderSideAccentCard( plan, index );
			case 'card-ribbon':
				return renderCardRibbonCard( plan, index );
			case 'banner':
				return renderBannerCard( plan, index );
			case 'flat-border':
				return renderFlatBorderCard( plan, index );
			default:
				return renderClassicCard( plan, index );
		}
	};

	return (
		<div { ...useBlockProps.save( { className: `telex-pricing-table-wrapper telex-theme-${ styleTheme || 'default' } telex-layout-${ layout }` } ) }>
			{ showBillingToggle && billingOptions.length > 1 && layoutStyle !== 'flat-border' && layoutStyle !== 'banner' && (
				<div className="telex-billing-toggle-wrapper">
					{ billingOptions.map( ( opt ) => (
						<button
							key={ opt.key }
							type="button"
							className={ `telex-billing-option${ opt.key === defaultKey ? ' telex-billing-option--active' : '' }` }
							data-billing={ opt.key }
						>
							{ opt.label }
						</button>
					) ) }
				</div>
			) }
			<div
				className="telex-pricing-table-grid"
				style={ { gridTemplateColumns: `repeat(${ columns }, 1fr)` } }
			>
				{ plans.map( ( plan, index ) => renderCard( plan, index ) ) }
			</div>
		</div>
	);
}