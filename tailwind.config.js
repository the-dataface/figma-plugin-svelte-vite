/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		screens: {
			sm: '500px',
			md: '768px',
			lg: '1024px',
		},
		colors: {
			transparent: 'rgba(255,255,255,0)',
			white: '#ffffff',
			black: '#000000',
			'figma-color-bg': 'var(--figma-color-bg)',
			'figma-color-bg-brand': 'var(--figma-color-bg-brand)',
			'figma-color-bg-brand-hover': 'var(--figma-color-bg-brand-hover)',
			'figma-color-bg-brand-pressed': 'var(--figma-color-bg-brand-pressed)',
			'figma-color-bg-brand-secondary': 'var(--figma-color-bg-brand-secondary)',
			'figma-color-bg-brand-tertiary': 'var(--figma-color-bg-brand-tertiary)',
			'figma-color-bg-component': 'var(--figma-color-bg-component)',
			'figma-color-bg-component-hover': 'var(--figma-color-bg-component-hover)',
			'figma-color-bg-component-pressed':
				'var(--figma-color-bg-component-pressed)',
			'figma-color-bg-component-secondary':
				'var(--figma-color-bg-component-secondary)',
			'figma-color-bg-component-tertiary':
				'var(--figma-color-bg-component-tertiary)',
			'figma-color-bg-danger': 'var(--figma-color-bg-danger)',
			'figma-color-bg-danger-hover': 'var(--figma-color-bg-danger-hover)',
			'figma-color-bg-danger-pressed': 'var(--figma-color-bg-danger-pressed)',
			'figma-color-bg-danger-secondary':
				'var(--figma-color-bg-danger-secondary)',
			'figma-color-bg-danger-tertiary': 'var(--figma-color-bg-danger-tertiary)',
			'figma-color-bg-disabled': 'var(--figma-color-bg-disabled)',
			'figma-color-bg-disabled-secondary':
				'var(--figma-color-bg-disabled-secondary)',
			'figma-color-bg-hover': 'var(--figma-color-bg-hover)',
			'figma-color-bg-inverse': 'var(--figma-color-bg-inverse)',
			'figma-color-bg-onselected': 'var(--figma-color-bg-onselected)',
			'figma-color-bg-onselected-hover':
				'var(--figma-color-bg-onselected-hover)',
			'figma-color-bg-onselected-pressed':
				'var(--figma-color-bg-onselected-pressed)',
			'figma-color-bg-pressed': 'var(--figma-color-bg-pressed)',
			'figma-color-bg-secondary': 'var(--figma-color-bg-secondary)',
			'figma-color-bg-selected': 'var(--figma-color-bg-selected)',
			'figma-color-bg-selected-hover': 'var(--figma-color-bg-selected-hover)',
			'figma-color-bg-selected-pressed':
				'var(--figma-color-bg-selected-pressed)',
			'figma-color-bg-selected-secondary':
				'var(--figma-color-bg-selected-secondary)',
			'figma-color-bg-selected-strong': 'var(--figma-color-bg-selected-strong)',
			'figma-color-bg-selected-tertiary':
				'var(--figma-color-bg-selected-tertiary)',
			'figma-color-bg-success': 'var(--figma-color-bg-success)',
			'figma-color-bg-success-hover': 'var(--figma-color-bg-success-hover)',
			'figma-color-bg-success-pressed': 'var(--figma-color-bg-success-pressed)',
			'figma-color-bg-success-secondary':
				'var(--figma-color-bg-success-secondary)',
			'figma-color-bg-success-tertiary':
				'var(--figma-color-bg-success-tertiary)',
			'figma-color-bg-tertiary': 'var(--figma-color-bg-tertiary)',
			'figma-color-bg-warning': 'var(--figma-color-bg-warning)',
			'figma-color-bg-warning-hover': 'var(--figma-color-bg-warning-hover)',
			'figma-color-bg-warning-pressed': 'var(--figma-color-bg-warning-pressed)',
			'figma-color-bg-warning-secondary':
				'var(--figma-color-bg-warning-secondary)',
			'figma-color-bg-warning-tertiary':
				'var(--figma-color-bg-warning-tertiary)',
			'figma-color-border': 'var(--figma-color-border)',
			'figma-color-border-brand': 'var(--figma-color-border-brand)',
			'figma-color-border-brand-strong':
				'var(--figma-color-border-brand-strong)',
			'figma-color-border-component': 'var(--figma-color-border-component)',
			'figma-color-border-component-hover':
				'var(--figma-color-border-component-hover)',
			'figma-color-border-component-strong':
				'var(--figma-color-border-component-strong)',
			'figma-color-border-danger': 'var(--figma-color-border-danger)',
			'figma-color-border-danger-strong':
				'var(--figma-color-border-danger-strong)',
			'figma-color-border-disabled': 'var(--figma-color-border-disabled)',
			'figma-color-border-disabled-strong':
				'var(--figma-color-border-disabled-strong)',
			'figma-color-border-onbrand': 'var(--figma-color-border-onbrand)',
			'figma-color-border-onbrand-strong':
				'var(--figma-color-border-onbrand-strong)',
			'figma-color-border-oncomponent': 'var(--figma-color-border-oncomponent)',
			'figma-color-border-oncomponent-strong':
				'var(--figma-color-border-oncomponent-strong)',
			'figma-color-border-ondanger': 'var(--figma-color-border-ondanger)',
			'figma-color-border-ondanger-strong':
				'var(--figma-color-border-ondanger-strong)',
			'figma-color-border-onselected': 'var(--figma-color-border-onselected)',
			'figma-color-border-onselected-strong':
				'var(--figma-color-border-onselected-strong)',
			'figma-color-border-onsuccess': 'var(--figma-color-border-onsuccess)',
			'figma-color-border-onsuccess-strong':
				'var(--figma-color-border-onsuccess-strong)',
			'figma-color-border-onwarning': 'var(--figma-color-border-onwarning)',
			'figma-color-border-onwarning-strong':
				'var(--figma-color-border-onwarning-strong)',
			'figma-color-border-selected': 'var(--figma-color-border-selected)',
			'figma-color-border-selected-strong':
				'var(--figma-color-border-selected-strong)',
			'figma-color-border-strong': 'var(--figma-color-border-strong)',
			'figma-color-border-success': 'var(--figma-color-border-success)',
			'figma-color-border-success-strong':
				'var(--figma-color-border-success-strong)',
			'figma-color-border-warning': 'var(--figma-color-border-warning)',
			'figma-color-border-warning-strong':
				'var(--figma-color-border-warning-strong)',
			'figma-color-icon': 'var(--figma-color-icon)',
			'figma-color-icon-brand': 'var(--figma-color-icon-brand)',
			'figma-color-icon-brand-pressed': 'var(--figma-color-icon-brand-pressed)',
			'figma-color-icon-brand-secondary':
				'var(--figma-color-icon-brand-secondary)',
			'figma-color-icon-brand-tertiary':
				'var(--figma-color-icon-brand-tertiary)',
			'figma-color-icon-component': 'var(--figma-color-icon-component)',
			'figma-color-icon-component-pressed':
				'var(--figma-color-icon-component-pressed)',
			'figma-color-icon-component-secondary':
				'var(--figma-color-icon-component-secondary)',
			'figma-color-icon-component-tertiary':
				'var(--figma-color-icon-component-tertiary)',
			'figma-color-icon-danger': 'var(--figma-color-icon-danger)',
			'figma-color-icon-danger-hover': 'var(--figma-color-icon-danger-hover)',
			'figma-color-icon-danger-pressed':
				'var(--figma-color-icon-danger-pressed)',
			'figma-color-icon-danger-secondary':
				'var(--figma-color-icon-danger-secondary)',
			'figma-color-icon-danger-secondary-hover':
				'var(--figma-color-icon-danger-secondary-hover)',
			'figma-color-icon-danger-tertiary':
				'var(--figma-color-icon-danger-tertiary)',
			'figma-color-icon-disabled': 'var(--figma-color-icon-disabled)',
			'figma-color-icon-hover': 'var(--figma-color-icon-hover)',
			'figma-color-icon-onbrand': 'var(--figma-color-icon-onbrand)',
			'figma-color-icon-onbrand-secondary':
				'var(--figma-color-icon-onbrand-secondary)',
			'figma-color-icon-onbrand-tertiary':
				'var(--figma-color-icon-onbrand-tertiary)',
			'figma-color-icon-oncomponent': 'var(--figma-color-icon-oncomponent)',
			'figma-color-icon-oncomponent-secondary':
				'var(--figma-color-icon-oncomponent-secondary)',
			'figma-color-icon-oncomponent-tertiary':
				'var(--figma-color-icon-oncomponent-tertiary)',
			'figma-color-icon-ondanger': 'var(--figma-color-icon-ondanger)',
			'figma-color-icon-ondanger-secondary':
				'var(--figma-color-icon-ondanger-secondary)',
			'figma-color-icon-ondanger-tertiary':
				'var(--figma-color-icon-ondanger-tertiary)',
			'figma-color-icon-ondisabled': 'var(--figma-color-icon-ondisabled)',
			'figma-color-icon-oninverse': 'var(--figma-color-icon-oninverse)',
			'figma-color-icon-onselected': 'var(--figma-color-icon-onselected)',
			'figma-color-icon-onselected-secondary':
				'var(--figma-color-icon-onselected-secondary)',
			'figma-color-icon-onselected-strong':
				'var(--figma-color-icon-onselected-strong)',
			'figma-color-icon-onselected-tertiary':
				'var(--figma-color-icon-onselected-tertiary)',
			'figma-color-icon-onsuccess': 'var(--figma-color-icon-onsuccess)',
			'figma-color-icon-onsuccess-secondary':
				'var(--figma-color-icon-onsuccess-secondary)',
			'figma-color-icon-onsuccess-tertiary':
				'var(--figma-color-icon-onsuccess-tertiary)',
			'figma-color-icon-onwarning': 'var(--figma-color-icon-onwarning)',
			'figma-color-icon-onwarning-secondary':
				'var(--figma-color-icon-onwarning-secondary)',
			'figma-color-icon-onwarning-tertiary':
				'var(--figma-color-icon-onwarning-tertiary)',
			'figma-color-icon-pressed': 'var(--figma-color-icon-pressed)',
			'figma-color-icon-secondary': 'var(--figma-color-icon-secondary)',
			'figma-color-icon-secondary-hover':
				'var(--figma-color-icon-secondary-hover)',
			'figma-color-icon-selected': 'var(--figma-color-icon-selected)',
			'figma-color-icon-selected-secondary':
				'var(--figma-color-icon-selected-secondary)',
			'figma-color-icon-selected-tertiary':
				'var(--figma-color-icon-selected-tertiary)',
			'figma-color-icon-success': 'var(--figma-color-icon-success)',
			'figma-color-icon-success-pressed':
				'var(--figma-color-icon-success-pressed)',
			'figma-color-icon-success-secondary':
				'var(--figma-color-icon-success-secondary)',
			'figma-color-icon-success-tertiary':
				'var(--figma-color-icon-success-tertiary)',
			'figma-color-icon-tertiary': 'var(--figma-color-icon-tertiary)',
			'figma-color-icon-tertiary-hover':
				'var(--figma-color-icon-tertiary-hover)',
			'figma-color-icon-warning': 'var(--figma-color-icon-warning)',
			'figma-color-icon-warning-pressed':
				'var(--figma-color-icon-warning-pressed)',
			'figma-color-icon-warning-secondary':
				'var(--figma-color-icon-warning-secondary)',
			'figma-color-icon-warning-tertiary':
				'var(--figma-color-icon-warning-tertiary)',
			'figma-color-text': 'var(--figma-color-text)',
			'figma-color-text-brand': 'var(--figma-color-text-brand)',
			'figma-color-text-brand-secondary':
				'var(--figma-color-text-brand-secondary)',
			'figma-color-text-brand-tertiary':
				'var(--figma-color-text-brand-tertiary)',
			'figma-color-text-component': 'var(--figma-color-text-component)',
			'figma-color-text-component-pressed':
				'var(--figma-color-text-component-pressed)',
			'figma-color-text-component-secondary':
				'var(--figma-color-text-component-secondary)',
			'figma-color-text-component-tertiary':
				'var(--figma-color-text-component-tertiary)',
			'figma-color-text-danger': 'var(--figma-color-text-danger)',
			'figma-color-text-danger-secondary':
				'var(--figma-color-text-danger-secondary)',
			'figma-color-text-danger-tertiary':
				'var(--figma-color-text-danger-tertiary)',
			'figma-color-text-disabled': 'var(--figma-color-text-disabled)',
			'figma-color-text-hover': 'var(--figma-color-text-hover)',
			'figma-color-text-onbrand': 'var(--figma-color-text-onbrand)',
			'figma-color-text-onbrand-secondary':
				'var(--figma-color-text-onbrand-secondary)',
			'figma-color-text-onbrand-tertiary':
				'var(--figma-color-text-onbrand-tertiary)',
			'figma-color-text-oncomponent': 'var(--figma-color-text-oncomponent)',
			'figma-color-text-oncomponent-secondary':
				'var(--figma-color-text-oncomponent-secondary)',
			'figma-color-text-oncomponent-tertiary':
				'var(--figma-color-text-oncomponent-tertiary)',
			'figma-color-text-ondanger': 'var(--figma-color-text-ondanger)',
			'figma-color-text-ondanger-secondary':
				'var(--figma-color-text-ondanger-secondary)',
			'figma-color-text-ondanger-tertiary':
				'var(--figma-color-text-ondanger-tertiary)',
			'figma-color-text-ondisabled': 'var(--figma-color-text-ondisabled)',
			'figma-color-text-oninverse': 'var(--figma-color-text-oninverse)',
			'figma-color-text-onselected': 'var(--figma-color-text-onselected)',
			'figma-color-text-onselected-secondary':
				'var(--figma-color-text-onselected-secondary)',
			'figma-color-text-onselected-strong':
				'var(--figma-color-text-onselected-strong)',
			'figma-color-text-onselected-tertiary':
				'var(--figma-color-text-onselected-tertiary)',
			'figma-color-text-onsuccess': 'var(--figma-color-text-onsuccess)',
			'figma-color-text-onsuccess-secondary':
				'var(--figma-color-text-onsuccess-secondary)',
			'figma-color-text-onsuccess-tertiary':
				'var(--figma-color-text-onsuccess-tertiary)',
			'figma-color-text-onwarning': 'var(--figma-color-text-onwarning)',
			'figma-color-text-onwarning-secondary':
				'var(--figma-color-text-onwarning-secondary)',
			'figma-color-text-onwarning-tertiary':
				'var(--figma-color-text-onwarning-tertiary)',
			'figma-color-text-secondary': 'var(--figma-color-text-secondary)',
			'figma-color-text-secondary-hover':
				'var(--figma-color-text-secondary-hover)',
			'figma-color-text-selected': 'var(--figma-color-text-selected)',
			'figma-color-text-selected-secondary':
				'var(--figma-color-text-selected-secondary)',
			'figma-color-text-selected-tertiary':
				'var(--figma-color-text-selected-tertiary)',
			'figma-color-text-success': 'var(--figma-color-text-success)',
			'figma-color-text-success-secondary':
				'var(--figma-color-text-success-secondary)',
			'figma-color-text-success-tertiary':
				'var(--figma-color-text-success-tertiary)',
			'figma-color-text-tertiary': 'var(--figma-color-text-tertiary)',
			'figma-color-text-tertiary-hover':
				'var(--figma-color-text-tertiary-hover)',
			'figma-color-text-warning': 'var(--figma-color-text-warning)',
			'figma-color-text-warning-secondary':
				'var(--figma-color-text-warning-secondary)',
			'figma-color-text-warning-tertiary':
				'var(--figma-color-text-warning-tertiary)',
		},
		extend: {
			spacing: {
				icon: '14px',
			},
		},
	},
	plugins: [],
};
