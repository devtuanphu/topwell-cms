import type { Schema, Struct } from '@strapi/strapi';

export interface CopyAbout extends Struct.ComponentSchema {
  collectionName: 'components_copy_about';
  info: {
    displayName: 'Gi\u1EDBi thi\u1EC7u';
  };
  attributes: {
    close: Schema.Attribute.String & Schema.Attribute.Required;
    rating: Schema.Attribute.String & Schema.Attribute.Required;
    ratingCaption: Schema.Attribute.String & Schema.Attribute.Required;
    ratingStars: Schema.Attribute.String & Schema.Attribute.Required;
    readingTime: Schema.Attribute.String & Schema.Attribute.Required;
    readStory: Schema.Attribute.String & Schema.Attribute.Required;
    storyContact: Schema.Attribute.String & Schema.Attribute.Required;
    storyContactHref: Schema.Attribute.String & Schema.Attribute.Required;
    valueHref: Schema.Attribute.String & Schema.Attribute.Required;
    valueLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CopyAccessibility extends Struct.ComponentSchema {
  collectionName: 'components_copy_accessibility';
  info: {
    displayName: 'Nh\u00E3n h\u1ED7 tr\u1EE3 truy c\u1EADp';
  };
  attributes: {
    articleNavigation: Schema.Attribute.String & Schema.Attribute.Required;
    breadcrumb: Schema.Attribute.String & Schema.Attribute.Required;
    checklist: Schema.Attribute.String & Schema.Attribute.Required;
    closeStory: Schema.Attribute.String & Schema.Attribute.Required;
    comparison: Schema.Attribute.String & Schema.Attribute.Required;
    gallery: Schema.Attribute.String & Schema.Attribute.Required;
    hero: Schema.Attribute.String & Schema.Attribute.Required;
    homeLink: Schema.Attribute.String & Schema.Attribute.Required;
    language: Schema.Attribute.String;
    menuClose: Schema.Attribute.String & Schema.Attribute.Required;
    menuOpen: Schema.Attribute.String & Schema.Attribute.Required;
    navigation: Schema.Attribute.String & Schema.Attribute.Required;
    nextSlide: Schema.Attribute.String & Schema.Attribute.Required;
    pagination: Schema.Attribute.String & Schema.Attribute.Required;
    partners: Schema.Attribute.String & Schema.Attribute.Required;
    pause: Schema.Attribute.String & Schema.Attribute.Required;
    play: Schema.Attribute.String & Schema.Attribute.Required;
    previousSlide: Schema.Attribute.String & Schema.Attribute.Required;
    projectFilters: Schema.Attribute.String & Schema.Attribute.Required;
    skip: Schema.Attribute.String & Schema.Attribute.Required;
    slide: Schema.Attribute.String & Schema.Attribute.Required;
    zoomIn: Schema.Attribute.String & Schema.Attribute.Required;
    zoomOut: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CopyArticle extends Struct.ComponentSchema {
  collectionName: 'components_copy_article';
  info: {
    displayName: 'B\u00E0i vi\u1EBFt';
  };
  attributes: {
    comparisonItem: Schema.Attribute.String & Schema.Attribute.Required;
    comparisonReference: Schema.Attribute.String & Schema.Attribute.Required;
    comparisonTarget: Schema.Attribute.String & Schema.Attribute.Required;
    copied: Schema.Attribute.String;
    copyLink: Schema.Attribute.String;
    nextLabel: Schema.Attribute.String;
    previousLabel: Schema.Attribute.String;
    share: Schema.Attribute.String;
    tagsLabel: Schema.Attribute.String;
  };
}

export interface CopyAssets extends Struct.ComponentSchema {
  collectionName: 'components_copy_assets';
  info: {
    displayName: 'H\u00ECnh \u1EA3nh giao di\u1EC7n';
  };
  attributes: {
    phoneIcon: Schema.Attribute.Component<'shared.image', false>;
  };
}

export interface CopyCommon extends Struct.ComponentSchema {
  collectionName: 'components_copy_common';
  info: {
    displayName: 'Nh\u00E3n d\u00F9ng chung';
  };
  attributes: {
    all: Schema.Attribute.String & Schema.Attribute.Required;
    allArticles: Schema.Attribute.String & Schema.Attribute.Required;
    allNews: Schema.Attribute.String & Schema.Attribute.Required;
    allProjects: Schema.Attribute.String & Schema.Attribute.Required;
    category: Schema.Attribute.String & Schema.Attribute.Required;
    contact: Schema.Attribute.String & Schema.Attribute.Required;
    directions: Schema.Attribute.String;
    exploreDetail: Schema.Attribute.String;
    home: Schema.Attribute.String & Schema.Attribute.Required;
    learnMore: Schema.Attribute.String & Schema.Attribute.Required;
    loadMore: Schema.Attribute.String & Schema.Attribute.Required;
    news: Schema.Attribute.String & Schema.Attribute.Required;
    next: Schema.Attribute.String & Schema.Attribute.Required;
    nextArticle: Schema.Attribute.String & Schema.Attribute.Required;
    noResults: Schema.Attribute.String & Schema.Attribute.Required;
    onlineStatus: Schema.Attribute.String;
    previous: Schema.Attribute.String & Schema.Attribute.Required;
    previousArticle: Schema.Attribute.String & Schema.Attribute.Required;
    projectDetails: Schema.Attribute.String & Schema.Attribute.Required;
    projects: Schema.Attribute.String & Schema.Attribute.Required;
    readMore: Schema.Attribute.String & Schema.Attribute.Required;
    readNext: Schema.Attribute.String & Schema.Attribute.Required;
    search: Schema.Attribute.String & Schema.Attribute.Required;
    searchPlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    services: Schema.Attribute.String & Schema.Attribute.Required;
    tags: Schema.Attribute.String & Schema.Attribute.Required;
    view: Schema.Attribute.String;
    viewGoogleMaps: Schema.Attribute.String;
    viewProject: Schema.Attribute.String;
    viewService: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CopyCta extends Struct.ComponentSchema {
  collectionName: 'components_copy_cta';
  info: {
    displayName: 'K\u00EAu g\u1ECDi h\u00E0nh \u0111\u1ED9ng';
  };
  attributes: {
    articleEyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    consultationEyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    heroSecondaryHref: Schema.Attribute.String & Schema.Attribute.Required;
    heroSecondaryLabel: Schema.Attribute.String & Schema.Attribute.Required;
    questionDescription: Schema.Attribute.String & Schema.Attribute.Required;
    questionHref: Schema.Attribute.String & Schema.Attribute.Required;
    questionLabel: Schema.Attribute.String & Schema.Attribute.Required;
    questionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    supportDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    supportHref: Schema.Attribute.String & Schema.Attribute.Required;
    supportLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CopyForms extends Struct.ComponentSchema {
  collectionName: 'components_copy_forms';
  info: {
    displayName: 'Nh\u00E3n bi\u1EC3u m\u1EABu';
  };
  attributes: {
    consent: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.String & Schema.Attribute.Required;
    emailPlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    emailShort: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    failure: Schema.Attribute.String & Schema.Attribute.Required;
    helpDescription: Schema.Attribute.String & Schema.Attribute.Required;
    helpTitle: Schema.Attribute.String & Schema.Attribute.Required;
    invalid: Schema.Attribute.String & Schema.Attribute.Required;
    invalidField: Schema.Attribute.String & Schema.Attribute.Required;
    invalidOrigin: Schema.Attribute.String & Schema.Attribute.Required;
    message: Schema.Attribute.String & Schema.Attribute.Required;
    messagePlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    messageShort: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    namePlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    nameShort: Schema.Attribute.String;
    pending: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String;
    phonePlaceholder: Schema.Attribute.String;
    privacyLabel: Schema.Attribute.String & Schema.Attribute.Required;
    privacyNotice: Schema.Attribute.String;
    quoteCompany: Schema.Attribute.String;
    quoteDate: Schema.Attribute.String;
    quoteEmail: Schema.Attribute.String;
    quoteName: Schema.Attribute.String;
    quoteService: Schema.Attribute.String;
    quoteSuccess: Schema.Attribute.String;
    rateLimit: Schema.Attribute.String & Schema.Attribute.Required;
    siteSurvey: Schema.Attribute.String & Schema.Attribute.Required;
    subject: Schema.Attribute.String & Schema.Attribute.Required;
    subjectPlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    submit: Schema.Attribute.String & Schema.Attribute.Required;
    subtitleHighlight: Schema.Attribute.String & Schema.Attribute.Required;
    success: Schema.Attribute.String & Schema.Attribute.Required;
    tooLong: Schema.Attribute.String & Schema.Attribute.Required;
    topicsTitle: Schema.Attribute.String;
  };
}

export interface CopyMetadata extends Struct.ComponentSchema {
  collectionName: 'components_copy_metadata';
  info: {
    displayName: 'Th\u00F4ng tin t\u00ECm ki\u1EBFm v\u00E0 chia s\u1EBB';
  };
  attributes: {
    defaultTitle: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    language: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Required;
    ogLineOne: Schema.Attribute.String & Schema.Attribute.Required;
    ogLineTwo: Schema.Attribute.String & Schema.Attribute.Required;
    ogTagline: Schema.Attribute.String & Schema.Attribute.Required;
    openGraphLocale: Schema.Attribute.String & Schema.Attribute.Required;
    siteName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CopyNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_copy_newsletter';
  info: {
    displayName: '\u0110\u0103ng k\u00FD nh\u1EADn tin';
  };
  attributes: {
    consent: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    emailLabel: Schema.Attribute.String & Schema.Attribute.Required;
    failure: Schema.Attribute.String & Schema.Attribute.Required;
    pending: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
    privacyLabel: Schema.Attribute.String & Schema.Attribute.Required;
    requestMessage: Schema.Attribute.String & Schema.Attribute.Required;
    requestName: Schema.Attribute.String & Schema.Attribute.Required;
    requestSubject: Schema.Attribute.String & Schema.Attribute.Required;
    submit: Schema.Attribute.String & Schema.Attribute.Required;
    success: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CopyRoutes extends Struct.ComponentSchema {
  collectionName: 'components_copy_routes';
  info: {
    displayName: 'Nh\u00E3n \u0111i\u1EC1u h\u01B0\u1EDBng';
  };
  attributes: {
    articleBase: Schema.Attribute.String & Schema.Attribute.Required;
    contact: Schema.Attribute.String & Schema.Attribute.Required;
    home: Schema.Attribute.String & Schema.Attribute.Required;
    news: Schema.Attribute.String & Schema.Attribute.Required;
    privacy: Schema.Attribute.String & Schema.Attribute.Required;
    projectBase: Schema.Attribute.String & Schema.Attribute.Required;
    projects: Schema.Attribute.String & Schema.Attribute.Required;
    serviceBase: Schema.Attribute.String & Schema.Attribute.Required;
    serviceGroupBase: Schema.Attribute.String;
    services: Schema.Attribute.String & Schema.Attribute.Required;
    siteSurvey: Schema.Attribute.String & Schema.Attribute.Required;
    standards: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CopySidebar extends Struct.ComponentSchema {
  collectionName: 'components_copy_sidebar';
  info: {
    displayName: 'Thanh b\u00EAn';
  };
  attributes: {
    articleEyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    articleHref: Schema.Attribute.String & Schema.Attribute.Required;
    articleLabel: Schema.Attribute.String & Schema.Attribute.Required;
    articleTitle: Schema.Attribute.String & Schema.Attribute.Required;
    categoriesTitle: Schema.Attribute.String & Schema.Attribute.Required;
    consultText: Schema.Attribute.String;
    contactTitle: Schema.Attribute.String;
    hotlineLabel: Schema.Attribute.String;
    hoursTitle: Schema.Attribute.String;
    instagramTitle: Schema.Attribute.String;
    onlineLabel: Schema.Attribute.String;
    recentPostsTitle: Schema.Attribute.String;
    recentTitle: Schema.Attribute.String & Schema.Attribute.Required;
    servicesTitle: Schema.Attribute.String & Schema.Attribute.Required;
    supportHref: Schema.Attribute.String & Schema.Attribute.Required;
    supportLabel: Schema.Attribute.String & Schema.Attribute.Required;
    supportTitle: Schema.Attribute.String & Schema.Attribute.Required;
    tagsTitle: Schema.Attribute.String;
    viewAllArticles: Schema.Attribute.String;
  };
}

export interface CopySystem extends Struct.ComponentSchema {
  collectionName: 'components_copy_system';
  info: {
    displayName: 'Th\u00F4ng b\u00E1o h\u1EC7 th\u1ED1ng';
  };
  attributes: {
    errorDescription: Schema.Attribute.String & Schema.Attribute.Required;
    errorTitle: Schema.Attribute.String & Schema.Attribute.Required;
    homeLabel: Schema.Attribute.String & Schema.Attribute.Required;
    notFoundCode: Schema.Attribute.String & Schema.Attribute.Required;
    notFoundDescription: Schema.Attribute.String & Schema.Attribute.Required;
    notFoundTitle: Schema.Attribute.String & Schema.Attribute.Required;
    retry: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_about';
  info: {
    displayName: 'Gi\u1EDBi thi\u1EC7u';
  };
  attributes: {
    badges: Schema.Attribute.Component<'shared.card', true>;
    cards: Schema.Attribute.Component<'shared.card', true>;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    eyebrowIcon: Schema.Attribute.Component<'shared.image', false>;
    highlight: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    images: Schema.Attribute.Component<'shared.image', true>;
    logo: Schema.Attribute.Component<'shared.image', false>;
    rating: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface SectionsAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_hero';
  info: {
    displayName: 'Banner gi\u1EDBi thi\u1EC7u';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    eyebrowIcon: Schema.Attribute.Component<'shared.image', false>;
    highlight: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    images: Schema.Attribute.Component<'shared.image', true>;
    story: Schema.Attribute.Component<'sections.about-story', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutStory extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_stories';
  info: {
    displayName: 'H\u1ED9p tho\u1EA1i c\u00E2u chuy\u1EC7n';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsArticleAuthor extends Struct.ComponentSchema {
  collectionName: 'components_sections_article_author';
  info: {
    displayName: 'T\u00E1c gi\u1EA3 b\u00E0i vi\u1EBFt';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    role: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsArticleBody extends Struct.ComponentSchema {
  collectionName: 'components_sections_article_body';
  info: {
    displayName: 'N\u1ED9i dung b\u00E0i vi\u1EBFt';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.image', false>;
    imageCaption: Schema.Attribute.String;
    imageNote: Schema.Attribute.String;
    imageTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsArticleComparison extends Struct.ComponentSchema {
  collectionName: 'components_sections_article_comparison';
  info: {
    displayName: 'B\u1EA3ng so s\u00E1nh b\u00E0i vi\u1EBFt';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    checklist: Schema.Attribute.Text;
    checklistTitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsArticleSteps extends Struct.ComponentSchema {
  collectionName: 'components_sections_article_steps';
  info: {
    displayName: 'C\u00E1c b\u01B0\u1EDBc trong b\u00E0i vi\u1EBFt';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCapabilities extends Struct.ComponentSchema {
  collectionName: 'components_sections_capabilities';
  info: {
    displayName: 'N\u0103ng l\u1EF1c';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCommitments extends Struct.ComponentSchema {
  collectionName: 'components_sections_commitments';
  info: {
    displayName: 'Cam k\u1EBFt';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_form';
  info: {
    displayName: 'Bi\u1EC3u m\u1EABu li\u00EAn h\u1EC7';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    panelText: Schema.Attribute.Text;
    panelTitle: Schema.Attribute.String;
    requestText: Schema.Attribute.Text;
    requestTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta';
  info: {
    displayName: 'K\u00EAu g\u1ECDi h\u00E0nh \u0111\u1ED9ng';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    highlight: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    panelHref: Schema.Attribute.String;
    panelIcon: Schema.Attribute.Component<'shared.image', false>;
    panelLabel: Schema.Attribute.String;
    panelText: Schema.Attribute.Text;
    panelTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    supportIcon: Schema.Attribute.Component<'shared.image', false>;
    supportLabel: Schema.Attribute.String;
    supportValue: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq';
  info: {
    displayName: 'C\u00E2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_grid';
  info: {
    displayName: 'L\u01B0\u1EDBi t\u00EDnh n\u0103ng';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGallery extends Struct.ComponentSchema {
  collectionName: 'components_sections_gallery';
  info: {
    displayName: 'Th\u01B0 vi\u1EC7n \u1EA3nh';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface SectionsHeroSlider extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_slider';
  info: {
    displayName: 'Banner tr\u00ECnh chi\u1EBFu';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    reviewAvatars: Schema.Attribute.Component<'shared.image', true>;
    reviewLabel: Schema.Attribute.String;
    reviewRating: Schema.Attribute.String;
    slideSeconds: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 30;
          min: 2;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMetrics extends Struct.ComponentSchema {
  collectionName: 'components_sections_metrics';
  info: {
    displayName: 'S\u1ED1 li\u1EC7u n\u1ED5i b\u1EADt';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMetricsStrip extends Struct.ComponentSchema {
  collectionName: 'components_sections_metrics_strips';
  info: {
    description: 'D\u1EA3i n\u1EC1n t\u1ED1i v\u1EDBi c\u00E1c con s\u1ED1 n\u1ED5i b\u1EADt m\u00E0u v\u00E0ng';
    displayName: 'D\u1EA3i s\u1ED1 li\u1EC7u n\u1EC1n t\u1ED1i';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface SectionsNetwork extends Struct.ComponentSchema {
  collectionName: 'components_sections_network';
  info: {
    displayName: 'M\u1EA1ng l\u01B0\u1EDBi';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    highlight: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    mapUrl: Schema.Attribute.String;
    rating: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsNews extends Struct.ComponentSchema {
  collectionName: 'components_sections_news';
  info: {
    displayName: 'Tin t\u1EE9c';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<3>;
    promo: Schema.Attribute.Component<'shared.card', false>;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface SectionsPageHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_page_hero';
  info: {
    displayName: 'Banner \u0111\u1EA7u trang';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface SectionsPartners extends Struct.ComponentSchema {
  collectionName: 'components_sections_partners';
  info: {
    displayName: '\u0110\u1ED1i t\u00E1c';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    highlight: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProcessSteps extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_steps';
  info: {
    description: 'D\u1EA3i th\u1EBB \u0111\u00E1nh s\u1ED1 01\u201304 m\u00F4 t\u1EA3 quy tr\u00ECnh ti\u1EBFp nh\u1EADn v\u00E0 tri\u1EC3n khai';
    displayName: 'Quy tr\u00ECnh 4 b\u01B0\u1EDBc';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProjectChallenge extends Struct.ComponentSchema {
  collectionName: 'components_sections_project_challenge';
  info: {
    displayName: 'Th\u00E1ch th\u1EE9c d\u1EF1 \u00E1n';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProjectOverview extends Struct.ComponentSchema {
  collectionName: 'components_sections_project_overview';
  info: {
    displayName: 'T\u1ED5ng quan d\u1EF1 \u00E1n';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProjectProcess extends Struct.ComponentSchema {
  collectionName: 'components_sections_project_process';
  info: {
    displayName: 'Quy tr\u00ECnh d\u1EF1 \u00E1n';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProjectResults extends Struct.ComponentSchema {
  collectionName: 'components_sections_project_results';
  info: {
    displayName: 'K\u1EBFt qu\u1EA3 d\u1EF1 \u00E1n';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProjects extends Struct.ComponentSchema {
  collectionName: 'components_sections_projects';
  info: {
    displayName: 'D\u1EF1 \u00E1n';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface SectionsQuoteForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_quote_forms';
  info: {
    description: 'Form nh\u1EADn b\u00E1o gi\u00E1 mi\u1EC5n ph\u00ED k\u00E8m \u1EA3nh v\u00E0 kh\u1ED1i "V\u00EC sao ch\u1ECDn ch\u00FAng t\u00F4i"';
    displayName: 'Form b\u00E1o gi\u00E1';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    ctaLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    panelEyebrow: Schema.Attribute.String;
    panelText: Schema.Attribute.Text;
    panelTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsRelatedArticles extends Struct.ComponentSchema {
  collectionName: 'components_sections_related_articles';
  info: {
    displayName: 'B\u00E0i vi\u1EBFt li\u00EAn quan';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    description: 'So\u1EA1n th\u1EA3o t\u1EF1 do: ti\u00EAu \u0111\u1EC1, \u0111o\u1EA1n v\u0103n, in \u0111\u1EADm, danh s\u00E1ch, b\u1EA3ng, \u1EA3nh, tr\u00EDch d\u1EABn, video';
    displayName: 'N\u1ED9i dung t\u1EF1 do (CKEditor)';
    icon: 'pencil';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionsServiceIntro extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_intro';
  info: {
    displayName: 'Gi\u1EDBi thi\u1EC7u d\u1ECBch v\u1EE5';
  };
  attributes: {
    body: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.image', false>;
    images: Schema.Attribute.Component<'shared.image', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'D\u1ECBch v\u1EE5';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    group: Schema.Attribute.Enumeration<['industrial', 'logistics', 'all']> &
      Schema.Attribute.DefaultTo<'industrial'>;
    highlight: Schema.Attribute.String;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<3>;
    secondaryHref: Schema.Attribute.String;
    secondaryLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface SectionsTeam extends Struct.ComponentSchema {
  collectionName: 'components_sections_team';
  info: {
    displayName: '\u0110\u1ED9i ng\u0169';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTimeline extends Struct.ComponentSchema {
  collectionName: 'components_sections_timeline';
  info: {
    displayName: 'C\u00E1c m\u1ED1c ph\u00E1t tri\u1EC3n';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsValues extends Struct.ComponentSchema {
  collectionName: 'components_sections_values';
  info: {
    displayName: 'Gi\u00E1 tr\u1ECB c\u1ED1t l\u00F5i';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsVideoCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_video_ctas';
  info: {
    description: 'Kh\u1ED1i n\u1EC1n t\u1ED1i c\u00F3 n\u00FAt ph\u00E1t video, ti\u00EAu \u0111\u1EC1 v\u00E0 n\u00FAt k\u00EAu g\u1ECDi h\u00E0nh \u0111\u1ED9ng';
    displayName: 'Kh\u1ED1i video';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.String;
    videoLabel: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface SharedBullet extends Struct.ComponentSchema {
  collectionName: 'components_shared_bullets';
  info: {
    displayName: 'G\u1EA1ch \u0111\u1EA7u d\u00F2ng';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_card';
  info: {
    displayName: 'Th\u1EBB n\u1ED9i dung';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    highlight: Schema.Attribute.String;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Component<'shared.image', false>;
    image: Schema.Attribute.Component<'shared.image', false>;
    label: Schema.Attribute.String;
    secondaryHref: Schema.Attribute.String;
    secondaryLabel: Schema.Attribute.String;
    tags: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'C\u1ED9t ch\u00E2n trang';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_image';
  info: {
    displayName: 'H\u00ECnh \u1EA3nh';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo';
  info: {
    displayName: 'T\u1ED1i \u01B0u t\u00ECm ki\u1EBFm (SEO)';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 320;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    shareImage: Schema.Attribute.Component<'shared.image', false>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'copy.about': CopyAbout;
      'copy.accessibility': CopyAccessibility;
      'copy.article': CopyArticle;
      'copy.assets': CopyAssets;
      'copy.common': CopyCommon;
      'copy.cta': CopyCta;
      'copy.forms': CopyForms;
      'copy.metadata': CopyMetadata;
      'copy.newsletter': CopyNewsletter;
      'copy.routes': CopyRoutes;
      'copy.sidebar': CopySidebar;
      'copy.system': CopySystem;
      'sections.about': SectionsAbout;
      'sections.about-hero': SectionsAboutHero;
      'sections.about-story': SectionsAboutStory;
      'sections.article-author': SectionsArticleAuthor;
      'sections.article-body': SectionsArticleBody;
      'sections.article-comparison': SectionsArticleComparison;
      'sections.article-steps': SectionsArticleSteps;
      'sections.capabilities': SectionsCapabilities;
      'sections.commitments': SectionsCommitments;
      'sections.contact-form': SectionsContactForm;
      'sections.cta': SectionsCta;
      'sections.faq': SectionsFaq;
      'sections.feature-grid': SectionsFeatureGrid;
      'sections.gallery': SectionsGallery;
      'sections.hero-slider': SectionsHeroSlider;
      'sections.metrics': SectionsMetrics;
      'sections.metrics-strip': SectionsMetricsStrip;
      'sections.network': SectionsNetwork;
      'sections.news': SectionsNews;
      'sections.page-hero': SectionsPageHero;
      'sections.partners': SectionsPartners;
      'sections.process-steps': SectionsProcessSteps;
      'sections.project-challenge': SectionsProjectChallenge;
      'sections.project-overview': SectionsProjectOverview;
      'sections.project-process': SectionsProjectProcess;
      'sections.project-results': SectionsProjectResults;
      'sections.projects': SectionsProjects;
      'sections.quote-form': SectionsQuoteForm;
      'sections.related-articles': SectionsRelatedArticles;
      'sections.rich-text': SectionsRichText;
      'sections.service-intro': SectionsServiceIntro;
      'sections.services': SectionsServices;
      'sections.team': SectionsTeam;
      'sections.timeline': SectionsTimeline;
      'sections.values': SectionsValues;
      'sections.video-cta': SectionsVideoCta;
      'shared.bullet': SharedBullet;
      'shared.card': SharedCard;
      'shared.footer-column': SharedFooterColumn;
      'shared.image': SharedImage;
      'shared.seo': SharedSeo;
    }
  }
}
