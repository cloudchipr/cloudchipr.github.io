import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
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
        'GCP/setup',
        'GCP/enable_billing',
        'GCP/supported_services',
      ],
    },
    {
      type: 'category',
      label: 'Azure',
      items: [
        'Azure/setup',
        'Azure/enable_billing',
        'Azure/supported_services',
      ],
    },
    {
      type: 'category',
      label: 'Live Usage and Mgmt',
      items: [
        'Live Usage and Mgmt/cards',
        {
          type: 'category',
          label: 'Resources',
          items: [
            'Live Usage and Mgmt/Resources/actions',
            'Live Usage and Mgmt/Resources/filters',
            'Live Usage and Mgmt/Resources/permissions',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resource Explorer',
      items: [
        'Resource Explorer/billing_drawer',
        'Resource Explorer/filters',
        'Resource Explorer/views',
      ],
    },
    {
      type: 'category',
      label: 'Dashboards',
      items: [
        'Dashboards/widgets',
      ],
    },
    {
      type: 'category',
      label: 'Automation',
      items: [
        'Automation/workflows',
        'Automation/off_hours',
      ],
    },
    {
      type: 'category',
      label: 'Recommendations',
      items: [
        'Recommendations/off_hours',
        'Recommendations/rightsizing',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'Integrations/slack',
        'Integrations/email',
        'Integrations/webhook',
        'Integrations/jira',
      ],
    },
    {
      type: 'category',
      label: 'Execution Logs',
      items: [
        'Execution Logs/filters',
        'Execution Logs/search',
        'Execution Logs/table_data_structure',
      ],
    },
    {
      type: 'category',
      label: 'Organization',
      items: [
        'Organization/users_permissions',
        'Organization/plans_billing',
        'Organization/api_keys',
      ],
    },
    {
      type: 'category',
      label: 'Profile',
      items: [
        'Profile/profile',
        'Profile/account_security',
        'Profile/sso_microsoft',
        'Profile/sso_okta',
      ],
    },
  ],
};

export default sidebars;
