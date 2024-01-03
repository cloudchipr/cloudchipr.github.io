module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'How To Start',
      items: [
        'how-to-start/create_account',
        'how-to-start/connect_provider',
        'how-to-start/billing_data',
      ],
    },
    'Glossary',
    {
      type: 'category',
      label: 'AWS',
      items: [
        'AWS/setup',
        'AWS/enable_billing',
        'AWS/supported_services',
      ],
    },
    {
      type: 'category',
      label: 'GCP',
      items: [
        'GCP/create_account',
        'GCP/billing_data',
        'GCP/connect_provider',
      ],
    },
  ],
};