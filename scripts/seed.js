'use strict';
// One-file English seed. Image sources are uploaded and persisted as native media relations.
// Existing URL identifiers are retained for compatibility with the Next.js routes.
const CONTENT = {
  pages: {
    'home-page': {
      title: 'Smart industry & connected logistics',
      seo: {
        metaTitle: 'Smart industry & connected logistics | TOP WELL International',
        metaDescription:
          'Engineering, equipment and logistics solutions supporting industrial operations in Vietnam and international supply chains.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.hero-slider',
          title: 'Smart industry. Connected logistics.',
          slideSeconds: 4,
          cards: [
            {
              title: 'Take action for what matters.',
              description:
                'Partner with us for smarter logistics solutions that drive the growth of your business.',
              image: {
                $file: 'fv2-e5b8d05f.jpg',
                alt: 'Freight truck on a coastal highway at sunset',
              },
              href: '/lien-he',
              label: 'Get a quote',
              secondaryLabel: 'See more',
              secondaryHref: '/dich-vu',
            },
            {
              title: 'Advanced machinery. Better production.',
              description:
                'Coordinate automation, equipment and engineering expertise to support your next production milestone.',
              image: {
                $file: 'fv2-8c9dac4c.jpg',
                alt: 'Automated production line with industrial robots',
              },
              href: '/lien-he',
              label: 'Get a quote',
              secondaryLabel: 'See more',
              secondaryHref: '/dich-vu/thiet-bi-va-giai-phap/day-chuyen-san-xuat',
            },
            {
              title: 'Run global logistics seamlessly and safely.',
              description:
                'Smart warehousing and multimodal transport for industrial equipment, machinery and oversized cargo.',
              image: { $file: 'fv2-dc711df0.jpg', alt: 'Container ship sailing on the open ocean' },
              href: '/lien-he',
              label: 'Get a quote',
              secondaryLabel: 'See more',
              secondaryHref: '/dich-vu',
            },
            {
              title: 'Sustainable connections. Global partnerships.',
              description:
                'Connect with international equipment partners and experienced engineers throughout your project.',
              image: { $file: 'fv2-c006e544.jpg', alt: 'Container port at night' },
              href: '/lien-he',
              label: 'Get a quote',
              secondaryLabel: 'See more',
              secondaryHref: '/du-an',
            },
          ],
        },
        {
          __component: 'sections.about',
          eyebrow: 'INTERNATIONAL STANDARD • LOCAL SERVICE',
          title: 'Complete industrial solutions for your business',
          description:
            'TOP WELL connects businesses with an ecosystem of equipment, production lines, spare parts and technical solutions from international partners. We support you from consultation and implementation to after-sales service in Vietnam.',
          image: { $file: 'fv2-29c630fa.jpg', alt: 'Technician checking an electrical cabinet' },
          images: [
            { $file: 'fv2-4e01ed54.jpg', alt: 'Engineers reviewing a production line' },
            { $file: 'fv2-dd8c76c7.jpg', alt: 'Construction team working on a steel structure' },
          ],
          badges: [
            {
              title: 'Equipment\n& solutions',
              icon: { $file: 'fv2-835ed70e.svg', alt: 'Equipment icon' },
            },
            {
              title: 'Spare parts\n& components',
              icon: { $file: 'fv2-28f3a07f.svg', alt: 'Components icon' },
            },
          ],
          cards: [
            {
              title: 'Consulting from day one',
              description:
                'We analyse needs, operating conditions and investment goals to recommend the right approach for each project.',
              icon: { $file: 'fv2-7e675c37.svg', alt: 'Consulting icon' },
            },
            {
              title: 'Solutions built around your needs',
              description:
                'We work with technical partners and manufacturers to build solutions that meet real operating requirements.',
              icon: { $file: 'fv2-1c40063d.svg', alt: 'Solutions icon' },
            },
            {
              title: 'Spare parts & Components',
              description:
                'Spare parts, components and replacement solutions for maintenance, repair and stable operation.',
              icon: { $file: 'fv2-a32070f8.svg', alt: 'Spare parts icon' },
            },
            {
              title: 'End-to-end technical support',
              description:
                'Support for installation, operation, maintenance, upgrades and technical requests throughout the equipment life cycle.',
              icon: { $file: 'fv2-411fad80.svg', alt: 'Technical support icon' },
            },
          ],
          ctaLabel: 'Explore services',
          ctaHref: '/dich-vu',
        },
        {
          __component: 'sections.services',
          eyebrow: 'Services',
          title: 'A solid engineering foundation for every large-scale production line.',
          variant: 'compact',
          source: 'parent',
          parentSlug: 'thiet-bi-va-giai-phap',
          limit: 3,
          ctaLabel: 'View all services',
          ctaHref: '/dich-vu',
          secondaryLabel: 'Get a quote',
          secondaryHref: '#quote',
        },
        {
          __component: 'sections.capabilities',
          eyebrow: 'TECHNICAL CAPABILITIES',
          title: 'A solid engineering foundation for every large-scale production line.',
          cards: [
            {
              title: 'Equipment Supply',
              description:
                'Officially imported machinery from leading manufacturers in Japan, Taiwan and Europe, with certificates of origin and independent inspection.',
            },
            {
              title: 'Engineering & System Integration',
              description:
                'Factory layout design, collaborative robot (cobot) integration and synchronised programming of closed-loop automated line signals.',
            },
            {
              title: 'Preventive Maintenance',
              description:
                'Scheduled maintenance, laser shaft alignment, vibration diagnostics and thermal wear monitoring to prevent unplanned downtime.',
            },
            {
              title: 'Machine Retrofit & Modernization',
              description:
                'Upgrade existing machines with new-generation CNC/PLC controllers, lower energy consumption and industrial IoT connectivity.',
            },
          ],
        },
        {
          __component: 'sections.projects',
          eyebrow: 'PARTNER PROJECTS',
          title: 'Building lasting value',
          variant: 'featured',
        },
        {
          __component: 'sections.news',
          eyebrow: 'NEWS',
          title: 'Continuous industry updates',
          variant: 'rows',
          limit: 3,
          ctaLabel: 'View all news',
          ctaHref: '/tin-tuc',
        },
        {
          __component: 'sections.quote-form',
          eyebrow: 'Quote',
          title: 'Free quotation',
          image: {
            $file: 'e6a442d9-b41d-4e0b-989a-b170c442303f.png',
            alt: 'TOP WELL support engineer',
          },
          ctaLabel: 'Get a quote now',
          panelEyebrow: 'PEOPLE TRUST',
          panelTitle: 'Why we are the best',
          panelText:
            'Engineering expertise, international sourcing and local support combined in one accountable team.',
          cards: [
            {
              title: 'Timely services',
              description:
                'Fast responses, clear schedules and on-time delivery for every request.',
              icon: { $file: 'fv2-6e4fdc21.svg', alt: 'Timely services icon' },
            },
            {
              title: 'Top rated service',
              description:
                'Trusted by manufacturers for consistent quality and transparent communication.',
              icon: { $file: 'fv2-bd409995.svg', alt: 'Top rated service icon' },
            },
            {
              title: 'Licensed technicians',
              description:
                'Certified engineers for installation, calibration and maintenance work.',
              icon: { $file: 'fv2-2ea78564.svg', alt: 'Licensed technicians icon' },
            },
          ],
        },
        {
          __component: 'sections.partners',
          eyebrow: 'TRUSTED BY LEADING COMPANIES WORLDWIDE',
          title: 'Delivering value for global leaders',
          highlight: 'global leaders',
          description: 'Drag or hover to explore our international industrial partner network.',
          cards: [
            { title: 'Recode', icon: { $file: 'fv2-41481891.svg', alt: 'Recode logo mark' } },
            { title: 'Finorix', icon: { $file: 'fv2-a79f4fd3.svg', alt: 'Finorix logo mark' } },
            { title: 'Brivon', icon: { $file: 'fv2-eff91e6d.svg', alt: 'Brivon logo mark' } },
            { title: 'RiHome™' },
            { title: 'RENOV', icon: { $file: 'fv2-aa5b0763.svg', alt: 'RENOV logo mark' } },
          ],
        },
      ],
    },
    'about-page': {
      title: 'About us',
      seo: {
        metaTitle: 'About us | TOP WELL International',
        metaDescription:
          'Meet TOP WELL, an industrial solutions partner connecting engineering expertise, equipment and international supply chains.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.about-hero',
          eyebrow: 'ABOUT US',
          title: 'We move more than cargo. We create opportunities.',
          highlight: 'We create',
          description:
            'TOP WELL International was founded on a simple belief: mechanical manufacturing and supply-chain technology should be **smarter**, **faster** and **more human**. We combine precision engineering with advanced industrial solutions to help businesses grow without limits.',
          ctaLabel: 'See more',
          ctaHref: '/tin-tuc',
          image: { $file: 'fv2-e5b8d05f.jpg', alt: 'Freight truck on a coastal highway at sunset' },
          images: [
            { $file: 'fv2-df466fb6.jpg', alt: 'Automated forklift in a warehouse' },
            { $file: 'fv2-2f05c4d4.jpg', alt: 'Logistics support specialist with a headset' },
          ],
        },
        {
          __component: 'sections.about',
          variant: 'company',
          // Figma v3 ghi chú "chèn logo": ô trống phía trên tiêu đề dành cho logo đối tác.
          logo: { $file: 'fv2-79973b4b.png', alt: 'Partner logo' },
          title: 'VM International Trading Company',
          description: 'Responsible for international trade and representation in Vietnam.',
          image: { $file: 'fv2-dc711df0.jpg', alt: 'Container ship sailing on the open ocean' },
          rating: '4.9/5',
          cards: [
            {
              title: 'Address in Vietnam:',
              description:
                'Access to more than 150 countries and a network of trusted technology supply partners.',
              icon: { $file: 'fv2-f657572b.svg', alt: 'Location icon' },
            },
          ],
        },
        {
          __component: 'sections.values',
          eyebrow: 'SUSTAINABLE GROWTH PHILOSOPHY',
          title: 'Leading the way through precision & dedication',
          description:
            'Every step TOP WELL takes aims to maximise economic value for customers through the most modern mechanical engineering standards.',
          cards: [
            {
              eyebrow: 'LONG-TERM DIRECTION',
              title: 'Strategic vision',
              description:
                'To become the leading industrial engineering integration and precision tooling supply partner in Southeast Asia, connecting global smart manufacturing technologies.',
              label: 'Reaching further by 2030',
              icon: { $file: 'fv2-9b40b116.svg', alt: 'Vision icon' },
              image: { $file: 'fv2-61d100b4.svg', alt: 'Growth icon' },
            },
            {
              eyebrow: 'CORPORATE RESPONSIBILITY',
              title: 'Our mission',
              description:
                'Remove complex technical barriers and costly downtime, delivering better margins and outstanding mechanical performance for every partner workshop.',
              label: 'Optimising resources',
              icon: { $file: 'fv2-0e95bb38.svg', alt: 'Mission icon' },
              image: { $file: 'fv2-e7280958.svg', alt: 'Energy icon' },
            },
            {
              eyebrow: 'OPERATING PRINCIPLES',
              title: 'Core values',
              description:
                'Precision: Absolute accuracy in every mechanical dimension and inspection standard.\nAgility: Immediate response to every technical and urgent workshop request.\nCommitment: Maintenance and technology transfer across the full machine life cycle.',
              label: 'Japanese & European standards',
              icon: { $file: 'fv2-3e6f5b1b.svg', alt: 'Values icon' },
              image: { $file: 'fv2-631e8092.svg', alt: 'Certified icon' },
            },
          ],
        },
        {
          __component: 'sections.video-cta',
          variant: 'steps',
          eyebrow: 'OUR PROCESS',
          title: 'Civil and commercial services',
          description:
            'From survey to handover, one coordinated team delivers installation, maintenance and upgrades for offices, factories and commercial buildings.',
          image: {
            $file: 'fv2-ddf8012f.jpg',
            alt: 'Technicians installing a ceiling air conditioner',
          },
          videoUrl: '',
          videoLabel: 'Watch the process introduction',
          cards: [
            {
              title: 'Licensed technicians',
              description:
                'Certified engineers who follow documented safety and quality procedures.',
              icon: { $file: 'fv2-f5967815.svg', alt: 'Shield icon' },
            },
            {
              title: 'Top rated service',
              description: 'Consistently high customer ratings for workmanship and communication.',
              icon: { $file: 'fv2-00c9db1e.svg', alt: 'Thumbs up icon' },
            },
            {
              title: 'Timely service',
              description: 'Clear schedules, fast mobilisation and on-time completion.',
              icon: { $file: 'fv2-8e18c810.svg', alt: 'Puzzle icon' },
            },
            {
              title: 'Quality service',
              description: 'Inspection records and warranties for every completed job.',
              icon: { $file: 'fv2-90e71b3f.svg', alt: 'Gear icon' },
            },
          ],
        },
        {
          __component: 'sections.cta',
          eyebrow: 'TAKE ACTION FOR WHAT MATTERS',
          title: 'Partner with TOP WELL to break through your production capacity.',
          highlight: 'break through',
          description:
            'Work with us for smarter industrial technology, faster product launches and sustainable growth for your business.',
          image: { $file: 'fv2-c006e544.jpg', alt: 'Container port at night' },
          ctaLabel: 'Contact our team',
          ctaHref: '/lien-he',
          supportLabel: '24/7 technical support',
          supportValue: '(+84) 1900 xxxx',
        },
      ],
    },
    'services-page': {
      title: 'Our services',
      seo: {
        metaTitle: 'Our services | TOP WELL International',
        metaDescription:
          'Explore equipment sourcing, production systems, technical services and coordinated international logistics.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.page-hero',
          title: 'Our services',
          description:
            'Global logistics and precise industrial infrastructure integration: safe, reliable and time-optimised.',
          image: { $file: 'fv2-abbe3331.png', alt: 'TOP WELL technician at work' },
        },
        {
          __component: 'sections.services',
          title: 'Synchronised operations – international-standard processes',
          eyebrow: 'SERVICE ECOSYSTEM',
          description:
            'We work with global partners to optimise supply chains, smart warehousing infrastructure and sustainable operating performance.',
          variant: 'groups',
          source: 'roots',
        },
        {
          __component: 'sections.video-cta',
          eyebrow: 'DISCOVER OUR SERVICES',
          title: 'One click to get repair and maintenance services from A to Z.',
          description:
            'From inspection and spare parts to on-site repair and preventive maintenance, one TOP WELL team handles the full service cycle for your equipment and facilities.',
          image: { $file: 'fv2-411d0da9.png', alt: 'TOP WELL maintenance team on site' },
          videoUrl: '',
          videoLabel: 'Watch the maintenance service introduction',
          ctaLabel: 'Explore more',
          ctaHref: '/tin-tuc',
        },
        {
          __component: 'sections.testimonials',
          eyebrow: 'REAL REVIEWS & FEEDBACK',
          title: 'Trusted by FDI businesses and manufacturing groups',
          description:
            'Satisfaction and reliability proven through demanding technical service standards, on-site response times and the quality of our industrial spare-part supply.',
          score: '4.9',
          scoreLabel: 'Quality score',
          statusTitle: '99.4% satisfied customers',
          statusNote: 'More than 180 mechanical and automation projects delivered',
          cards: [
            {
              tags: 'CNC PRECISION',
              description:
                '"TOP WELL met a ±0.002mm tolerance on the high-speed press assembly. Transparent 3D CMM inspection with Zeiss-standard certificates made exporting to Japan straightforward."',
              title: 'Toru Shinohara',
              eyebrow: 'Technical Director, Mitsuba Vietnam',
            },
            {
              tags: 'AUTOMATION ROBOTICS',
              description:
                '"The automated pick-and-place packing line with KUKA robots and SCADA monitoring was commissioned on schedule. Cycle time fell 32% in the first month of trial operation."',
              title: 'Nguyen Van Tuan',
              eyebrow: 'Head of Operations & Automation, Hansol Electronics',
            },
            {
              tags: 'LASER METROLOGY & SLA',
              description:
                '"The two-hour emergency SLA team arrived and fixed a spindle misalignment within 90 minutes. Scheduled Renishaw laser interferometer alignment keeps unplanned downtime to a minimum."',
              title: 'Michael Krause',
              eyebrow: 'Plant Operations Lead, Bosch Rexroth Industrial Facility',
            },
          ],
        },
        {
          __component: 'sections.gallery',
          eyebrow: 'OPERATIONS & FIELD CAPABILITY',
          title: 'Our operations and specialist team in the field',
          description:
            'A real record of fabrication, installation, machinery maintenance, technical systems and standards inspection at our workshop and partner sites.',
          cards: [
            {
              title: 'Mechanical fabrication',
              image: { $file: 'fv2-21fe2075.jpg', alt: 'Mechanical fabrication' },
            },
            {
              title: 'CNC machining & calibration',
              image: { $file: 'fv2-81b58488.jpg', alt: 'CNC machining and calibration' },
            },
            {
              title: 'Laser CMM inspection',
              image: { $file: 'fv2-f1ac49ad.jpg', alt: 'Laser CMM inspection' },
            },
            {
              title: 'Equipment inspection & acceptance',
              image: {
                $file: '1e93f881-b66f-4bb3-a73e-f1076b8ca947.png',
                alt: 'Equipment inspection and acceptance',
              },
            },
            {
              title: 'Training & technology transfer',
              image: {
                $file: '494aa562-c7ff-4fa2-a662-b24d370eb84a.png',
                alt: 'Training and technology transfer',
              },
            },
            {
              title: 'Handover & operational support',
              image: {
                $file: 'cae00984-c1db-4beb-85f6-f017cca38d01.png',
                alt: 'Handover and operational support',
              },
            },
          ],
        },
      ],
    },
    'projects-page': {
      title: 'Selected projects',
      seo: {
        metaTitle: 'Selected projects | TOP WELL International',
        metaDescription:
          'Explore sample project profiles covering automation, precision machining, tooling and smart warehouse systems.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.page-hero',
          title: 'Selected projects',
          description:
            'Explore sample project profiles covering automation, precision machining, tooling and smart warehouse systems.',
        },
        {
          __component: 'sections.projects',
          eyebrow: 'PROJECT PORTFOLIO',
          title: 'Synchronised delivery – international-standard processes',
          description:
            'We work with global partners to optimise supply chains, smart warehousing infrastructure and sustainable operating performance.',
          variant: 'listing',
        },
      ],
    },
    'news-page': {
      title: 'News & industry insights',
      seo: {
        metaTitle: 'News & industry insights | TOP WELL International',
        metaDescription:
          'Read insights on engineering, automation, precision measurement and reliable industrial supply chains.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.page-hero',
          title: 'News',
          description:
            'Read insights on engineering, automation, precision measurement and reliable industrial supply chains.',
          image: { $file: 'fv2-abbe3331.png', alt: 'TOP WELL technician at work' },
        },
        {
          __component: 'sections.news',
          title: 'The latest developments in industry.',
          variant: 'listing',
          promo: {
            eyebrow: 'Online 24/7',
            title: 'Need advice on warehousing and mechanical solutions?',
            description:
              'The TOP WELL engineering team is ready to review your current setup and draft an optimised layout free of charge.',
            tags: 'Technical hotline',
            highlight: '(+84) 1900 8899',
            label: 'Talk to a consultant',
            href: '/lien-he',
            image: {
              $file: 'fv2-cd7bf797.jpg',
              alt: 'Operator using a touchscreen in a warehouse',
            },
          },
        },
      ],
    },
    'contact-page': {
      title: 'Contact us',
      seo: {
        metaTitle: 'Contact us | TOP WELL International',
        metaDescription:
          'Contact TOP WELL for equipment requirements, engineering support and logistics enquiries.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.page-hero',
          title: 'Contact',
          image: { $file: 'fv2-abbe3331.png', alt: 'TOP WELL technician at work' },
        },
        {
          __component: 'sections.contact-form',
          eyebrow: 'CONTACT OUR SPECIALISTS',
          title: 'Get in touch and connect!',
          description:
            'TOP WELL International connects businesses with an ecosystem of equipment, production lines, spare parts and technical solutions from international partners. We support you from consultation and implementation to 24/7 technical support.',
          panelTitle: 'Hello!',
          panelText:
            'TOP WELL International supports businesses with installation, operation, maintenance, upgrades and technical requests throughout the equipment life cycle.',
          image: { $file: 'fv2-7cf6d98c.jpg', alt: 'TOP WELL support agent with a headset' },
          requestTitle: 'Requests',
          requestText:
            'Spare parts, components and replacement solutions for maintenance, repair and stable operation.',
          cards: [
            { title: 'Commercial' },
            { title: 'Residential' },
            { title: 'Personal' },
            { title: 'Cleaning' },
            { title: 'Electrical' },
            { title: 'Meeting' },
          ],
        },
        {
          __component: 'sections.network',
          eyebrow: 'GLOBAL OPERATIONS',
          title: 'Our strategic engineering & logistics network',
          highlight: 'engineering & logistics',
          description:
            'Explore our operations centres and logistics facilities, built for fast distribution, efficient warehousing and seamless supply-chain operations across key regions.',
          image: { $file: 'fv2-833b041b.jpg', alt: 'World map of the TOP WELL logistics network' },
          rating: '4.9',
          ctaLabel: 'Book a site survey',
          ctaHref: '/lien-he#contact-form',
          supportLabel: 'TOP WELL network data © 2026',
          cards: [
            {
              title: 'Engineering Coordination Office',
              description:
                'Mezzanine, Block B2 Topaz City, 39 Cao Lo Street, Chanh Hung Ward, Ho Chi Minh City, Vietnam',
            },
          ],
        },
      ],
    },
    'privacy-page': {
      title: 'Privacy policy',
      seo: {
        metaTitle: 'Privacy policy | TOP WELL International',
        metaDescription:
          'Learn how information submitted through the TOP WELL website is used to respond to enquiries and protect your privacy.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.article-body',
          title: 'Industry insights',
          description:
            'This sample privacy notice describes how website enquiries are handled. Review and adapt it to the actual business process before publishing.',
          cards: [
            {
              title: 'Information you provide',
              description:
                'The contact form collects your name, email address, enquiry subject and message so our team can respond.',
            },
            {
              title: 'How information is used',
              description:
                'Enquiry information is used to review your request and contact you about relevant services. Newsletter requests are stored for follow-up; no automated marketing email is sent by this application.',
            },
            {
              title: 'Contact and access requests',
              description:
                'Contact our team if you need to update information you have submitted or ask about its handling.',
            },
          ],
        },
      ],
    },
    'standards-page': {
      title: 'Technical standards',
      seo: {
        metaTitle: 'Technical standards | TOP WELL International',
        metaDescription:
          'Discover how project requirements, inspections and acceptance records support consistent technical delivery.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.page-hero',
          title: 'Technical standards',
          description:
            'Discover how project requirements, inspections and acceptance records support consistent technical delivery.',
        },
        {
          __component: 'sections.commitments',
          title: 'Delivery commitments and acceptance standards',
          cards: [
            {
              title: 'Application assessment',
              description:
                'Define the production process, material requirements and operating conditions.',
            },
            {
              title: 'System integration',
              description:
                'Agree communication interfaces, safety requirements and control architecture.',
            },
            {
              title: 'Performance verification',
              description:
                'Measure the agreed cycle time, quality requirements and equipment availability.',
            },
            {
              title: 'Technical handover',
              description:
                'Complete factory and site acceptance checks with documented operating instructions.',
            },
          ],
        },
      ],
    },
  },
  services: [
    {
      title: 'Production Lines',
      slug: 'production-lines',
      category: 'Industrial',
      summary:
        'Integrated assembly, material handling and production monitoring for industrial manufacturing.',
      image: {
        $file: '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
        alt: 'Production Lines',
      },
      icon: {
        $file: '71f73042-a585-4b38-be5c-01de72adb10f.svg',
        alt: 'TOP WELL industrial solutions',
      },
      seo: {
        metaTitle: 'Production Lines | TOP WELL International',
        metaDescription:
          'Integrated assembly, material handling and production monitoring for industrial manufacturing.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.service-intro',
          title: 'Production Lines',
          description:
            'Integrated assembly, material handling and production monitoring for industrial manufacturing. Our team reviews the operational scope, agrees a delivery plan and coordinates technical handover.',
          image: {
            $file: '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
            alt: 'Production Lines',
          },
        },
        {
          __component: 'sections.feature-grid',
          title: 'Integrated capabilities',
          cards: [
            {
              title: 'Production Lines',
              description:
                'Integrate automated assembly, material handling and production monitoring.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
            {
              title: 'Machinery',
              description:
                'Select CNC machining, forming and measurement equipment for the required process.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
            {
              title: 'Spare Parts & Molds',
              description:
                'Develop precision tooling and source compatible components for production equipment.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
            {
              title: 'Technical Services',
              description:
                'Coordinate calibration, commissioning, maintenance and operator training.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
          ],
        },
        {
          __component: 'sections.commitments',
          title: 'Delivery commitments and acceptance standards',
          description:
            'Agree clear technical requirements, document inspections and validate performance before handover.',
          cards: [
            {
              title: 'Application assessment',
              description:
                'Define the production process, material requirements and operating conditions.',
            },
            {
              title: 'System integration',
              description:
                'Agree communication interfaces, safety requirements and control architecture.',
            },
            {
              title: 'Performance verification',
              description:
                'Measure the agreed cycle time, quality requirements and equipment availability.',
            },
            {
              title: 'Technical handover',
              description:
                'Complete factory and site acceptance checks with documented operating instructions.',
            },
          ],
        },
        {
          __component: 'sections.gallery',
          title: 'Project delivery in practice',
          cards: [
            {
              title: 'Equipment inspection & acceptance',
              description: '',
              image: {
                $file: '1e93f881-b66f-4bb3-a73e-f1076b8ca947.png',
                alt: 'Equipment inspection & acceptance',
              },
            },
            {
              title: 'Training & technology transfer',
              description: '',
              image: {
                $file: '494aa562-c7ff-4fa2-a662-b24d370eb84a.png',
                alt: 'Training & technology transfer',
              },
            },
            {
              title: 'Handover & operational support',
              description: '',
              image: {
                $file: 'cae00984-c1db-4beb-85f6-f017cca38d01.png',
                alt: 'Handover & operational support',
              },
            },
          ],
        },
        {
          __component: 'sections.faq',
          title: 'Frequently asked questions',
          cards: [
            {
              title: 'How do I request a quotation?',
              description:
                'Send your equipment or cargo requirements, location and preferred schedule through our contact form. Our team will review the scope and recommend the next steps.',
            },
            {
              title: 'Can the solution integrate with existing systems?',
              description:
                'We assess the available interfaces and technical requirements before agreeing an integration plan.',
            },
            {
              title: 'Do you provide training and after-sales support?',
              description:
                'Yes. Training, maintenance requirements and technical support arrangements are defined as part of the project scope.',
            },
          ],
        },
      ],
    },
    {
      title: 'Machinery',
      slug: 'machinery',
      category: 'Industrial',
      summary:
        'CNC machining, forming and measurement equipment selected for your production requirements.',
      image: {
        $file: '1042bb5f-727a-4e6a-8d93-f5a994f3f31e.png',
        alt: 'Machinery',
      },
      icon: {
        $file: 'cffb5cb1-3cf0-40e4-98c0-882ac5f71f23.svg',
        alt: 'TOP WELL industrial solutions',
      },
      seo: {
        metaTitle: 'Machinery | TOP WELL International',
        metaDescription:
          'CNC machining, forming and measurement equipment selected for your production requirements.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.service-intro',
          title: 'Machinery',
          description:
            'CNC machining, forming and measurement equipment selected for your production requirements. Our team reviews the operational scope, agrees a delivery plan and coordinates technical handover.',
          image: {
            $file: '1042bb5f-727a-4e6a-8d93-f5a994f3f31e.png',
            alt: 'Machinery',
          },
        },
        {
          __component: 'sections.feature-grid',
          title: 'Integrated capabilities',
          cards: [
            {
              title: 'Production Lines',
              description:
                'Integrate automated assembly, material handling and production monitoring.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
            {
              title: 'Machinery',
              description:
                'Select CNC machining, forming and measurement equipment for the required process.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
            {
              title: 'Spare Parts & Molds',
              description:
                'Develop precision tooling and source compatible components for production equipment.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
            {
              title: 'Technical Services',
              description:
                'Coordinate calibration, commissioning, maintenance and operator training.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
          ],
        },
        {
          __component: 'sections.commitments',
          title: 'Delivery commitments and acceptance standards',
          description:
            'Agree clear technical requirements, document inspections and validate performance before handover.',
          cards: [
            {
              title: 'Application assessment',
              description:
                'Define the production process, material requirements and operating conditions.',
            },
            {
              title: 'System integration',
              description:
                'Agree communication interfaces, safety requirements and control architecture.',
            },
            {
              title: 'Performance verification',
              description:
                'Measure the agreed cycle time, quality requirements and equipment availability.',
            },
            {
              title: 'Technical handover',
              description:
                'Complete factory and site acceptance checks with documented operating instructions.',
            },
          ],
        },
        {
          __component: 'sections.gallery',
          title: 'Project delivery in practice',
          cards: [
            {
              title: 'Equipment inspection & acceptance',
              description: '',
              image: {
                $file: '6c104a48-a993-49ee-ae4d-8aaa6f26e3f4.png',
                alt: 'Equipment inspection & acceptance',
              },
            },
            {
              title: 'Training & technology transfer',
              description: '',
              image: {
                $file: 'ecf56660-8254-442f-b13c-57531e64947a.png',
                alt: 'Training & technology transfer',
              },
            },
            {
              title: 'Handover & operational support',
              description: '',
              image: {
                $file: '6b15c678-f1a0-4d6e-9250-24d8672b8929.png',
                alt: 'Handover & operational support',
              },
            },
          ],
        },
        {
          __component: 'sections.faq',
          title: 'Frequently asked questions',
          cards: [
            {
              title: 'How do I request a quotation?',
              description:
                'Send your equipment or cargo requirements, location and preferred schedule through our contact form. Our team will review the scope and recommend the next steps.',
            },
            {
              title: 'Can the solution integrate with existing systems?',
              description:
                'We assess the available interfaces and technical requirements before agreeing an integration plan.',
            },
            {
              title: 'Do you provide training and after-sales support?',
              description:
                'Yes. Training, maintenance requirements and technical support arrangements are defined as part of the project scope.',
            },
          ],
        },
      ],
    },
    {
      title: 'Spare Parts & Molds',
      slug: 'spare-parts-molds',
      category: 'Industrial',
      summary: 'Precision tooling, molds and compatible spare parts for industrial equipment.',
      image: {
        $file: 'e4721e6c-9989-4abb-a974-7aeabad5daca.png',
        alt: 'Spare Parts & Molds',
      },
      icon: {
        $file: 'e0a2cd59-ddec-4c5f-adc3-735596bb6678.svg',
        alt: 'TOP WELL industrial solutions',
      },
      seo: {
        metaTitle: 'Spare Parts & Molds | TOP WELL International',
        metaDescription:
          'Precision tooling, molds and compatible spare parts for industrial equipment.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.service-intro',
          title: 'Spare Parts & Molds',
          description:
            'Precision tooling, molds and compatible spare parts for industrial equipment. Our team reviews the operational scope, agrees a delivery plan and coordinates technical handover.',
          image: {
            $file: 'e4721e6c-9989-4abb-a974-7aeabad5daca.png',
            alt: 'Spare Parts & Molds',
          },
        },
        {
          __component: 'sections.feature-grid',
          title: 'Integrated capabilities',
          cards: [
            {
              title: 'Production Lines',
              description:
                'Integrate automated assembly, material handling and production monitoring.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
            {
              title: 'Machinery',
              description:
                'Select CNC machining, forming and measurement equipment for the required process.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
            {
              title: 'Spare Parts & Molds',
              description:
                'Develop precision tooling and source compatible components for production equipment.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
            {
              title: 'Technical Services',
              description:
                'Coordinate calibration, commissioning, maintenance and operator training.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
          ],
        },
        {
          __component: 'sections.commitments',
          title: 'Delivery commitments and acceptance standards',
          description:
            'Agree clear technical requirements, document inspections and validate performance before handover.',
          cards: [
            {
              title: 'Application assessment',
              description:
                'Define the production process, material requirements and operating conditions.',
            },
            {
              title: 'System integration',
              description:
                'Agree communication interfaces, safety requirements and control architecture.',
            },
            {
              title: 'Performance verification',
              description:
                'Measure the agreed cycle time, quality requirements and equipment availability.',
            },
            {
              title: 'Technical handover',
              description:
                'Complete factory and site acceptance checks with documented operating instructions.',
            },
          ],
        },
        {
          __component: 'sections.gallery',
          title: 'Project delivery in practice',
          cards: [
            {
              title: 'Equipment inspection & acceptance',
              description: '',
              image: {
                $file: '18e432fd-9dac-422c-99f3-a2a27850b24c.png',
                alt: 'Equipment inspection & acceptance',
              },
            },
            {
              title: 'Training & technology transfer',
              description: '',
              image: {
                $file: 'f5175935-61f2-4e4c-8f09-c2277d2795d3.png',
                alt: 'Training & technology transfer',
              },
            },
            {
              title: 'Handover & operational support',
              description: '',
              image: {
                $file: 'd114c4c3-81fe-4ec6-b6e1-3cb90db0546a.png',
                alt: 'Handover & operational support',
              },
            },
          ],
        },
        {
          __component: 'sections.faq',
          title: 'Frequently asked questions',
          cards: [
            {
              title: 'How do I request a quotation?',
              description:
                'Send your equipment or cargo requirements, location and preferred schedule through our contact form. Our team will review the scope and recommend the next steps.',
            },
            {
              title: 'Can the solution integrate with existing systems?',
              description:
                'We assess the available interfaces and technical requirements before agreeing an integration plan.',
            },
            {
              title: 'Do you provide training and after-sales support?',
              description:
                'Yes. Training, maintenance requirements and technical support arrangements are defined as part of the project scope.',
            },
          ],
        },
      ],
    },
    {
      title: 'Technical Services',
      slug: 'technical-services',
      category: 'Industrial',
      summary:
        'Commissioning, calibration, maintenance and operator training for industrial systems.',
      image: {
        $file: 'eb41f649-f2f8-4cfc-b119-23089d6da91e.png',
        alt: 'Technical Services',
      },
      icon: {
        $file: 'f7eeab15-fe3a-4b8a-b9ba-982793ff1c67.svg',
        alt: 'TOP WELL industrial solutions',
      },
      seo: {
        metaTitle: 'Technical Services | TOP WELL International',
        metaDescription:
          'Commissioning, calibration, maintenance and operator training for industrial systems.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.service-intro',
          title: 'Technical Services',
          description:
            'Commissioning, calibration, maintenance and operator training for industrial systems. Our team reviews the operational scope, agrees a delivery plan and coordinates technical handover.',
          image: {
            $file: 'eb41f649-f2f8-4cfc-b119-23089d6da91e.png',
            alt: 'Technical Services',
          },
        },
        {
          __component: 'sections.feature-grid',
          title: 'Integrated capabilities',
          cards: [
            {
              title: 'Production Lines',
              description:
                'Integrate automated assembly, material handling and production monitoring.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
            {
              title: 'Machinery',
              description:
                'Select CNC machining, forming and measurement equipment for the required process.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
            {
              title: 'Spare Parts & Molds',
              description:
                'Develop precision tooling and source compatible components for production equipment.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
            {
              title: 'Technical Services',
              description:
                'Coordinate calibration, commissioning, maintenance and operator training.',
              eyebrow: 'TOP WELL INTERNATIONAL',
              tags: 'Engineering, Integration',
            },
          ],
        },
        {
          __component: 'sections.commitments',
          title: 'Delivery commitments and acceptance standards',
          description:
            'Agree clear technical requirements, document inspections and validate performance before handover.',
          cards: [
            {
              title: 'Application assessment',
              description:
                'Define the production process, material requirements and operating conditions.',
            },
            {
              title: 'System integration',
              description:
                'Agree communication interfaces, safety requirements and control architecture.',
            },
            {
              title: 'Performance verification',
              description:
                'Measure the agreed cycle time, quality requirements and equipment availability.',
            },
            {
              title: 'Technical handover',
              description:
                'Complete factory and site acceptance checks with documented operating instructions.',
            },
          ],
        },
        {
          __component: 'sections.gallery',
          title: 'Project delivery in practice',
          cards: [
            {
              title: 'Equipment inspection & acceptance',
              description: '',
              image: {
                $file: '97a1c51d-37ca-41ed-893e-60d3f2f8df65.png',
                alt: 'Equipment inspection & acceptance',
              },
            },
            {
              title: 'Training & technology transfer',
              description: '',
              image: {
                $file: '6e0a33e6-2a34-44a9-9217-07e9027251b2.png',
                alt: 'Training & technology transfer',
              },
            },
            {
              title: 'Handover & operational support',
              description: '',
              image: {
                $file: '4079d086-b666-4233-9d1e-29f90fb18d69.png',
                alt: 'Handover & operational support',
              },
            },
          ],
        },
        {
          __component: 'sections.faq',
          title: 'Frequently asked questions',
          cards: [
            {
              title: 'How do I request a quotation?',
              description:
                'Send your equipment or cargo requirements, location and preferred schedule through our contact form. Our team will review the scope and recommend the next steps.',
            },
            {
              title: 'Can the solution integrate with existing systems?',
              description:
                'We assess the available interfaces and technical requirements before agreeing an integration plan.',
            },
            {
              title: 'Do you provide training and after-sales support?',
              description:
                'Yes. Training, maintenance requirements and technical support arrangements are defined as part of the project scope.',
            },
          ],
        },
      ],
    },
    {
      title: 'Freight Transport',
      slug: 'van-chuyen-hang-hoa',
      category: 'Logistics',
      summary:
        'Coordinated road and multimodal freight planning for equipment and industrial cargo.',
      image: {
        $file: 'bde06153-3929-46ee-afd1-6595a0f4f255.png',
        alt: 'Freight Transport',
      },
      seo: {
        metaTitle: 'Freight Transport | TOP WELL International',
        metaDescription:
          'Coordinated road and multimodal freight planning for equipment and industrial cargo.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.service-intro',
          title: 'Freight Transport',
          description:
            'Coordinated road and multimodal freight planning for equipment and industrial cargo. Our team reviews the operational scope, agrees a delivery plan and coordinates technical handover.',
          image: {
            $file: 'bde06153-3929-46ee-afd1-6595a0f4f255.png',
            alt: 'Freight Transport',
          },
        },
        {
          __component: 'sections.feature-grid',
          title: 'Integrated capabilities',
          cards: [
            {
              title: 'Assessment & planning',
              description: 'Review cargo, route and delivery requirements.',
            },
            {
              title: 'Transport coordination',
              description: 'Coordinate partners and track delivery milestones.',
            },
            {
              title: 'Cargo protection',
              description: 'Plan packaging, handling and risk controls.',
            },
            {
              title: 'Handover & support',
              description: 'Check documentation and confirm delivery completion.',
            },
          ],
        },
        {
          __component: 'sections.faq',
          title: 'Frequently asked questions',
          cards: [
            {
              title: 'How do I request a quotation?',
              description:
                'Send your equipment or cargo requirements, location and preferred schedule through our contact form. Our team will review the scope and recommend the next steps.',
            },
          ],
        },
      ],
      icon: {
        $file: '1e4e7181-8bb9-4f62-8e36-6ca1fccd1167.svg',
        alt: 'TOP WELL industrial solutions',
      },
    },
    {
      title: 'Ocean Freight',
      slug: 'van-tai-duong-bien',
      category: 'Logistics',
      summary:
        'Ocean freight coordination, shipment documentation and delivery planning for international cargo.',
      image: {
        $file: '68a64cea-4e0a-41bc-9544-41bea5c1d19a.png',
        alt: 'Ocean Freight',
      },
      seo: {
        metaTitle: 'Ocean Freight | TOP WELL International',
        metaDescription:
          'Ocean freight coordination, shipment documentation and delivery planning for international cargo.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.service-intro',
          title: 'Ocean Freight',
          description:
            'Ocean freight coordination, shipment documentation and delivery planning for international cargo. Our team reviews the operational scope, agrees a delivery plan and coordinates technical handover.',
          image: {
            $file: '68a64cea-4e0a-41bc-9544-41bea5c1d19a.png',
            alt: 'Ocean Freight',
          },
        },
        {
          __component: 'sections.feature-grid',
          title: 'Integrated capabilities',
          cards: [
            {
              title: 'Assessment & planning',
              description: 'Review cargo, route and delivery requirements.',
            },
            {
              title: 'Transport coordination',
              description: 'Coordinate partners and track delivery milestones.',
            },
            {
              title: 'Cargo protection',
              description: 'Plan packaging, handling and risk controls.',
            },
            {
              title: 'Handover & support',
              description: 'Check documentation and confirm delivery completion.',
            },
          ],
        },
        {
          __component: 'sections.faq',
          title: 'Frequently asked questions',
          cards: [
            {
              title: 'How do I request a quotation?',
              description:
                'Send your equipment or cargo requirements, location and preferred schedule through our contact form. Our team will review the scope and recommend the next steps.',
            },
          ],
        },
      ],
      icon: {
        $file: '8d0496ea-569b-42fc-af8a-ac176245220b.svg',
        alt: 'TOP WELL industrial solutions',
      },
    },
    {
      title: 'Air Freight',
      slug: 'van-tai-hang-khong',
      category: 'Logistics',
      summary:
        'Air freight planning for time-sensitive industrial equipment and replacement components.',
      image: {
        $file: 'd801f9f3-eef2-42dc-827c-55851316c3cf.png',
        alt: 'Air Freight',
      },
      seo: {
        metaTitle: 'Air Freight | TOP WELL International',
        metaDescription:
          'Air freight planning for time-sensitive industrial equipment and replacement components.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.service-intro',
          title: 'Air Freight',
          description:
            'Air freight planning for time-sensitive industrial equipment and replacement components. Our team reviews the operational scope, agrees a delivery plan and coordinates technical handover.',
          image: {
            $file: 'd801f9f3-eef2-42dc-827c-55851316c3cf.png',
            alt: 'Air Freight',
          },
        },
        {
          __component: 'sections.feature-grid',
          title: 'Integrated capabilities',
          cards: [
            {
              title: 'Assessment & planning',
              description: 'Review cargo, route and delivery requirements.',
            },
            {
              title: 'Transport coordination',
              description: 'Coordinate partners and track delivery milestones.',
            },
            {
              title: 'Cargo protection',
              description: 'Plan packaging, handling and risk controls.',
            },
            {
              title: 'Handover & support',
              description: 'Check documentation and confirm delivery completion.',
            },
          ],
        },
        {
          __component: 'sections.faq',
          title: 'Frequently asked questions',
          cards: [
            {
              title: 'How do I request a quotation?',
              description:
                'Send your equipment or cargo requirements, location and preferred schedule through our contact form. Our team will review the scope and recommend the next steps.',
            },
          ],
        },
      ],
      icon: {
        $file: 'e5f788e4-e6a9-4d84-b841-02da8f603fae.svg',
        alt: 'TOP WELL industrial solutions',
      },
    },
    {
      title: 'Rail Freight',
      slug: 'van-tai-duong-sat',
      category: 'Logistics',
      summary:
        'Rail freight coordination for suitable domestic and international industrial routes.',
      image: {
        $file: '27eb31c4-c084-494b-9673-40c434292273.png',
        alt: 'Rail Freight',
      },
      seo: {
        metaTitle: 'Rail Freight | TOP WELL International',
        metaDescription:
          'Rail freight coordination for suitable domestic and international industrial routes.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.service-intro',
          title: 'Rail Freight',
          description:
            'Rail freight coordination for suitable domestic and international industrial routes. Our team reviews the operational scope, agrees a delivery plan and coordinates technical handover.',
          image: {
            $file: '27eb31c4-c084-494b-9673-40c434292273.png',
            alt: 'Rail Freight',
          },
        },
        {
          __component: 'sections.feature-grid',
          title: 'Integrated capabilities',
          cards: [
            {
              title: 'Assessment & planning',
              description: 'Review cargo, route and delivery requirements.',
            },
            {
              title: 'Transport coordination',
              description: 'Coordinate partners and track delivery milestones.',
            },
            {
              title: 'Cargo protection',
              description: 'Plan packaging, handling and risk controls.',
            },
            {
              title: 'Handover & support',
              description: 'Check documentation and confirm delivery completion.',
            },
          ],
        },
        {
          __component: 'sections.faq',
          title: 'Frequently asked questions',
          cards: [
            {
              title: 'How do I request a quotation?',
              description:
                'Send your equipment or cargo requirements, location and preferred schedule through our contact form. Our team will review the scope and recommend the next steps.',
            },
          ],
        },
      ],
      icon: {
        $file: '61e85d17-9653-4d1a-b802-3afaaab4e821.svg',
        alt: 'TOP WELL industrial solutions',
      },
    },
    {
      title: 'Warehousing & Distribution',
      slug: 'phan-phoi-kho-hang',
      category: 'Logistics',
      summary:
        'Warehouse planning, inventory handling and distribution support for equipment and components.',
      image: {
        $file: '7e03519e-a4d9-4435-831c-862142f6d89d.png',
        alt: 'Warehousing & Distribution',
      },
      seo: {
        metaTitle: 'Warehousing & Distribution | TOP WELL International',
        metaDescription:
          'Warehouse planning, inventory handling and distribution support for equipment and components.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.service-intro',
          title: 'Warehousing & Distribution',
          description:
            'Warehouse planning, inventory handling and distribution support for equipment and components. Our team reviews the operational scope, agrees a delivery plan and coordinates technical handover.',
          image: {
            $file: '7e03519e-a4d9-4435-831c-862142f6d89d.png',
            alt: 'Warehousing & Distribution',
          },
        },
        {
          __component: 'sections.feature-grid',
          title: 'Integrated capabilities',
          cards: [
            {
              title: 'Assessment & planning',
              description: 'Review cargo, route and delivery requirements.',
            },
            {
              title: 'Transport coordination',
              description: 'Coordinate partners and track delivery milestones.',
            },
            {
              title: 'Cargo protection',
              description: 'Plan packaging, handling and risk controls.',
            },
            {
              title: 'Handover & support',
              description: 'Check documentation and confirm delivery completion.',
            },
          ],
        },
        {
          __component: 'sections.faq',
          title: 'Frequently asked questions',
          cards: [
            {
              title: 'How do I request a quotation?',
              description:
                'Send your equipment or cargo requirements, location and preferred schedule through our contact form. Our team will review the scope and recommend the next steps.',
            },
          ],
        },
      ],
      icon: {
        $file: 'aab7f625-c098-45ca-8429-b25645be7d0c.svg',
        alt: 'TOP WELL industrial solutions',
      },
    },
    {
      title: 'Customs Clearance',
      slug: 'thu-tuc-hai-quan',
      category: 'Logistics',
      summary:
        'Documentation review and customs coordination for compliant equipment and cargo movements.',
      image: {
        $file: 'c2c51637-a2b1-42e2-a7fb-69d380214c38.png',
        alt: 'Customs Clearance',
      },
      seo: {
        metaTitle: 'Customs Clearance | TOP WELL International',
        metaDescription:
          'Documentation review and customs coordination for compliant equipment and cargo movements.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.service-intro',
          title: 'Customs Clearance',
          description:
            'Documentation review and customs coordination for compliant equipment and cargo movements. Our team reviews the operational scope, agrees a delivery plan and coordinates technical handover.',
          image: {
            $file: 'c2c51637-a2b1-42e2-a7fb-69d380214c38.png',
            alt: 'Customs Clearance',
          },
        },
        {
          __component: 'sections.feature-grid',
          title: 'Integrated capabilities',
          cards: [
            {
              title: 'Assessment & planning',
              description: 'Review cargo, route and delivery requirements.',
            },
            {
              title: 'Transport coordination',
              description: 'Coordinate partners and track delivery milestones.',
            },
            {
              title: 'Cargo protection',
              description: 'Plan packaging, handling and risk controls.',
            },
            {
              title: 'Handover & support',
              description: 'Check documentation and confirm delivery completion.',
            },
          ],
        },
        {
          __component: 'sections.faq',
          title: 'Frequently asked questions',
          cards: [
            {
              title: 'How do I request a quotation?',
              description:
                'Send your equipment or cargo requirements, location and preferred schedule through our contact form. Our team will review the scope and recommend the next steps.',
            },
          ],
        },
      ],
      icon: {
        $file: 'be6c169e-a1c9-4430-819b-d9ebc3ac5103.svg',
        alt: 'TOP WELL industrial solutions',
      },
    },
  ],
  projects: [
    {
      title: 'EV Assembly Line Automation',
      slug: 'tu-dong-hoa-day-chuyen-fdi',
      category: 'Robotics & MES',
      summary:
        'A sample project profile demonstrating coordinated ev assembly line automation with documented acceptance and operator handover.',
      location: 'Hai Phong',
      year: '2024',
      image: {
        $file: '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
        alt: 'EV Assembly Line Automation',
      },
      seo: {
        metaTitle: 'EV Assembly Line Automation | TOP WELL International',
        metaDescription:
          'A sample project profile demonstrating coordinated ev assembly line automation with documented acceptance and operator handover.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.project-overview',
          title: 'EV Assembly Line Automation',
          description:
            'A sample project profile demonstrating coordinated ev assembly line automation with documented acceptance and operator handover.',
          image: {
            $file: '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
            alt: 'EV Assembly Line Automation',
          },
        },
        {
          __component: 'sections.project-challenge',
          title: 'Challenges & solutions',
          eyebrow: 'THE CHALLENGE',
          description:
            'The project required a consistent production process and reliable communication between equipment. Our team combined site assessment, technical integration and operator training.',
          cards: [
            {
              title: 'Assess vibration, alignment and thermal stability.',
              description: '',
            },
            {
              title: 'Automate material handling and inspection where appropriate.',
              description: '',
            },
            {
              title: 'Connect equipment data to the production monitoring system.',
              description: '',
            },
            {
              title: 'Provide documented operating procedures and practical training.',
              description: '',
            },
          ],
        },
        {
          __component: 'sections.project-process',
          title: 'Implementation process',
          eyebrow: 'Our process',
          description:
            'Our engineers assessed the site, agreed an equipment layout and coordinated installation. Commissioning included functional checks, acceptance testing and a structured handover to the local team.',
          cards: [
            {
              title: 'Site survey & equipment installation',
              description: '',
              image: {
                $file: 'e4721e6c-9989-4abb-a974-7aeabad5daca.png',
                alt: 'Site survey & equipment installation',
              },
            },
            {
              title: 'CNC commissioning & calibration',
              description: '',
              image: {
                $file: '1042bb5f-727a-4e6a-8d93-f5a994f3f31e.png',
                alt: 'CNC commissioning & calibration',
              },
            },
            {
              title: 'Measurement checks & factory acceptance',
              description: '',
              image: {
                $file: 'eb41f649-f2f8-4cfc-b119-23089d6da91e.png',
                alt: 'Measurement checks & factory acceptance',
              },
            },
          ],
        },
        {
          __component: 'sections.project-results',
          title: 'Results & impact',
          eyebrow: 'PROJECT OUTCOMES',
          description:
            'The completed system gives the customer a more consistent process, clearer operational data and a documented maintenance plan.',
          cards: [
            {
              title: 'More consistent production and inspection processes.',
              description: '',
            },
            {
              title: 'Improved visibility of machine status and maintenance needs.',
              description: '',
            },
            {
              title: 'A clear handover package for the operations team.',
              description: '',
            },
            {
              title: 'Acceptance records linked to the agreed technical scope.',
              description: '',
            },
          ],
        },
      ],
      featured: true,
      homeOrder: 0,
      homeTitle: 'Topwell Alliance Consortium',
      homeSummary:
        'A sample project profile demonstrating coordinated ev assembly line automation with documented acceptance and operator handover.',
      homeImage: {
        $file: 'f7fd6c37-7a22-44a8-a656-8c3dcb83adf6.png',
        alt: 'TOP WELL industrial solutions',
      },
      homeCategory: 'Strategic Alliance',
    },
    {
      title: 'Five-Axis Aerospace Machining Centre',
      slug: 'trung-tam-gia-cong-5-truc',
      category: '5-Axis Aerospace',
      summary:
        'A sample project profile demonstrating coordinated five-axis aerospace machining centre with documented acceptance and operator handover.',
      location: 'Hoa Lac',
      year: '2024',
      image: {
        $file: '1042bb5f-727a-4e6a-8d93-f5a994f3f31e.png',
        alt: 'Five-Axis Aerospace Machining Centre',
      },
      seo: {
        metaTitle: 'Five-Axis Aerospace Machining Centre | TOP WELL International',
        metaDescription:
          'A sample project profile demonstrating coordinated five-axis aerospace machining centre with documented acceptance and operator handover.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.project-overview',
          title: 'Five-Axis Aerospace Machining Centre',
          description:
            'A sample project profile demonstrating coordinated five-axis aerospace machining centre with documented acceptance and operator handover.',
          image: {
            $file: '1042bb5f-727a-4e6a-8d93-f5a994f3f31e.png',
            alt: 'Five-Axis Aerospace Machining Centre',
          },
        },
        {
          __component: 'sections.project-challenge',
          title: 'Challenges & solutions',
          eyebrow: 'THE CHALLENGE',
          description:
            'The project required a consistent production process and reliable communication between equipment. Our team combined site assessment, technical integration and operator training.',
          cards: [
            {
              title: 'Assess vibration, alignment and thermal stability.',
              description: '',
            },
            {
              title: 'Automate material handling and inspection where appropriate.',
              description: '',
            },
            {
              title: 'Connect equipment data to the production monitoring system.',
              description: '',
            },
            {
              title: 'Provide documented operating procedures and practical training.',
              description: '',
            },
          ],
        },
        {
          __component: 'sections.project-process',
          title: 'Implementation process',
          eyebrow: 'Our process',
          description:
            'Our engineers assessed the site, agreed an equipment layout and coordinated installation. Commissioning included functional checks, acceptance testing and a structured handover to the local team.',
          cards: [
            {
              title: 'Site survey & equipment installation',
              description: '',
              image: {
                $file: 'e4721e6c-9989-4abb-a974-7aeabad5daca.png',
                alt: 'Site survey & equipment installation',
              },
            },
            {
              title: 'CNC commissioning & calibration',
              description: '',
              image: {
                $file: '1042bb5f-727a-4e6a-8d93-f5a994f3f31e.png',
                alt: 'CNC commissioning & calibration',
              },
            },
            {
              title: 'Measurement checks & factory acceptance',
              description: '',
              image: {
                $file: 'eb41f649-f2f8-4cfc-b119-23089d6da91e.png',
                alt: 'Measurement checks & factory acceptance',
              },
            },
          ],
        },
        {
          __component: 'sections.project-results',
          title: 'Results & impact',
          eyebrow: 'PROJECT OUTCOMES',
          description:
            'The completed system gives the customer a more consistent process, clearer operational data and a documented maintenance plan.',
          cards: [
            {
              title: 'More consistent production and inspection processes.',
              description: '',
            },
            {
              title: 'Improved visibility of machine status and maintenance needs.',
              description: '',
            },
            {
              title: 'A clear handover package for the operations team.',
              description: '',
            },
            {
              title: 'Acceptance records linked to the agreed technical scope.',
              description: '',
            },
          ],
        },
      ],
      featured: true,
      homeOrder: 2,
      homeTitle: 'Precision Technical Line',
      homeSummary:
        'A sample project profile demonstrating coordinated five-axis aerospace machining centre with documented acceptance and operator handover.',
      homeImage: {
        $file: 'ac52df55-2487-416c-9f35-f256a1caf622.png',
        alt: 'TOP WELL industrial solutions',
      },
      homeCategory: 'Engineering',
    },
    {
      title: 'Precision Molds for Medical Components',
      slug: 'khuon-ep-nhua-y-te',
      category: 'Tooling & Mold',
      summary:
        'A sample project profile demonstrating coordinated precision molds for medical components with documented acceptance and operator handover.',
      location: 'Bac Ninh',
      year: '2023',
      image: {
        $file: 'e4721e6c-9989-4abb-a974-7aeabad5daca.png',
        alt: 'Precision Molds for Medical Components',
      },
      seo: {
        metaTitle: 'Precision Molds for Medical Components | TOP WELL International',
        metaDescription:
          'A sample project profile demonstrating coordinated precision molds for medical components with documented acceptance and operator handover.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.project-overview',
          title: 'Precision Molds for Medical Components',
          description:
            'A sample project profile demonstrating coordinated precision molds for medical components with documented acceptance and operator handover.',
          image: {
            $file: 'e4721e6c-9989-4abb-a974-7aeabad5daca.png',
            alt: 'Precision Molds for Medical Components',
          },
        },
        {
          __component: 'sections.project-challenge',
          title: 'Challenges & solutions',
          eyebrow: 'THE CHALLENGE',
          description:
            'The project required a consistent production process and reliable communication between equipment. Our team combined site assessment, technical integration and operator training.',
          cards: [
            {
              title: 'Assess vibration, alignment and thermal stability.',
              description: '',
            },
            {
              title: 'Automate material handling and inspection where appropriate.',
              description: '',
            },
            {
              title: 'Connect equipment data to the production monitoring system.',
              description: '',
            },
            {
              title: 'Provide documented operating procedures and practical training.',
              description: '',
            },
          ],
        },
        {
          __component: 'sections.project-process',
          title: 'Implementation process',
          eyebrow: 'Our process',
          description:
            'Our engineers assessed the site, agreed an equipment layout and coordinated installation. Commissioning included functional checks, acceptance testing and a structured handover to the local team.',
          cards: [
            {
              title: 'Site survey & equipment installation',
              description: '',
              image: {
                $file: 'e4721e6c-9989-4abb-a974-7aeabad5daca.png',
                alt: 'Site survey & equipment installation',
              },
            },
            {
              title: 'CNC commissioning & calibration',
              description: '',
              image: {
                $file: '1042bb5f-727a-4e6a-8d93-f5a994f3f31e.png',
                alt: 'CNC commissioning & calibration',
              },
            },
            {
              title: 'Measurement checks & factory acceptance',
              description: '',
              image: {
                $file: 'eb41f649-f2f8-4cfc-b119-23089d6da91e.png',
                alt: 'Measurement checks & factory acceptance',
              },
            },
          ],
        },
        {
          __component: 'sections.project-results',
          title: 'Results & impact',
          eyebrow: 'PROJECT OUTCOMES',
          description:
            'The completed system gives the customer a more consistent process, clearer operational data and a documented maintenance plan.',
          cards: [
            {
              title: 'More consistent production and inspection processes.',
              description: '',
            },
            {
              title: 'Improved visibility of machine status and maintenance needs.',
              description: '',
            },
            {
              title: 'A clear handover package for the operations team.',
              description: '',
            },
            {
              title: 'Acceptance records linked to the agreed technical scope.',
              description: '',
            },
          ],
        },
      ],
    },
    {
      title: 'Laser Calibration & Dynamic Balancing',
      slug: 'hieu-chuan-laser',
      category: 'Laser Metrology',
      summary:
        'A sample project profile demonstrating coordinated laser calibration & dynamic balancing with documented acceptance and operator handover.',
      location: 'Vinh Phuc',
      year: '2023',
      image: {
        $file: 'eb41f649-f2f8-4cfc-b119-23089d6da91e.png',
        alt: 'Laser Calibration & Dynamic Balancing',
      },
      seo: {
        metaTitle: 'Laser Calibration & Dynamic Balancing | TOP WELL International',
        metaDescription:
          'A sample project profile demonstrating coordinated laser calibration & dynamic balancing with documented acceptance and operator handover.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.project-overview',
          title: 'Laser Calibration & Dynamic Balancing',
          description:
            'A sample project profile demonstrating coordinated laser calibration & dynamic balancing with documented acceptance and operator handover.',
          image: {
            $file: 'eb41f649-f2f8-4cfc-b119-23089d6da91e.png',
            alt: 'Laser Calibration & Dynamic Balancing',
          },
        },
        {
          __component: 'sections.project-challenge',
          title: 'Challenges & solutions',
          eyebrow: 'THE CHALLENGE',
          description:
            'The project required a consistent production process and reliable communication between equipment. Our team combined site assessment, technical integration and operator training.',
          cards: [
            {
              title: 'Assess vibration, alignment and thermal stability.',
              description: '',
            },
            {
              title: 'Automate material handling and inspection where appropriate.',
              description: '',
            },
            {
              title: 'Connect equipment data to the production monitoring system.',
              description: '',
            },
            {
              title: 'Provide documented operating procedures and practical training.',
              description: '',
            },
          ],
        },
        {
          __component: 'sections.project-process',
          title: 'Implementation process',
          eyebrow: 'Our process',
          description:
            'Our engineers assessed the site, agreed an equipment layout and coordinated installation. Commissioning included functional checks, acceptance testing and a structured handover to the local team.',
          cards: [
            {
              title: 'Site survey & equipment installation',
              description: '',
              image: {
                $file: 'e4721e6c-9989-4abb-a974-7aeabad5daca.png',
                alt: 'Site survey & equipment installation',
              },
            },
            {
              title: 'CNC commissioning & calibration',
              description: '',
              image: {
                $file: '1042bb5f-727a-4e6a-8d93-f5a994f3f31e.png',
                alt: 'CNC commissioning & calibration',
              },
            },
            {
              title: 'Measurement checks & factory acceptance',
              description: '',
              image: {
                $file: 'eb41f649-f2f8-4cfc-b119-23089d6da91e.png',
                alt: 'Measurement checks & factory acceptance',
              },
            },
          ],
        },
        {
          __component: 'sections.project-results',
          title: 'Results & impact',
          eyebrow: 'PROJECT OUTCOMES',
          description:
            'The completed system gives the customer a more consistent process, clearer operational data and a documented maintenance plan.',
          cards: [
            {
              title: 'More consistent production and inspection processes.',
              description: '',
            },
            {
              title: 'Improved visibility of machine status and maintenance needs.',
              description: '',
            },
            {
              title: 'A clear handover package for the operations team.',
              description: '',
            },
            {
              title: 'Acceptance records linked to the agreed technical scope.',
              description: '',
            },
          ],
        },
      ],
    },
    {
      title: 'Smart AS/RS Warehouse & AGV System',
      slug: 'kho-thong-minh-asrs',
      category: 'Intralogistics & AGV',
      summary:
        'A sample project profile demonstrating coordinated smart as/rs warehouse & agv system with documented acceptance and operator handover.',
      location: 'Binh Duong',
      year: '2022',
      image: {
        $file: '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
        alt: 'Smart AS/RS Warehouse & AGV System',
      },
      seo: {
        metaTitle: 'Smart AS/RS Warehouse & AGV System | TOP WELL International',
        metaDescription:
          'A sample project profile demonstrating coordinated smart as/rs warehouse & agv system with documented acceptance and operator handover.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.project-overview',
          title: 'Smart AS/RS Warehouse & AGV System',
          description:
            'A sample project profile demonstrating coordinated smart as/rs warehouse & agv system with documented acceptance and operator handover.',
          image: {
            $file: '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
            alt: 'Smart AS/RS Warehouse & AGV System',
          },
        },
        {
          __component: 'sections.project-challenge',
          title: 'Challenges & solutions',
          eyebrow: 'THE CHALLENGE',
          description:
            'The project required a consistent production process and reliable communication between equipment. Our team combined site assessment, technical integration and operator training.',
          cards: [
            {
              title: 'Assess vibration, alignment and thermal stability.',
              description: '',
            },
            {
              title: 'Automate material handling and inspection where appropriate.',
              description: '',
            },
            {
              title: 'Connect equipment data to the production monitoring system.',
              description: '',
            },
            {
              title: 'Provide documented operating procedures and practical training.',
              description: '',
            },
          ],
        },
        {
          __component: 'sections.project-process',
          title: 'Implementation process',
          eyebrow: 'Our process',
          description:
            'Our engineers assessed the site, agreed an equipment layout and coordinated installation. Commissioning included functional checks, acceptance testing and a structured handover to the local team.',
          cards: [
            {
              title: 'Site survey & equipment installation',
              description: '',
              image: {
                $file: 'e4721e6c-9989-4abb-a974-7aeabad5daca.png',
                alt: 'Site survey & equipment installation',
              },
            },
            {
              title: 'CNC commissioning & calibration',
              description: '',
              image: {
                $file: '1042bb5f-727a-4e6a-8d93-f5a994f3f31e.png',
                alt: 'CNC commissioning & calibration',
              },
            },
            {
              title: 'Measurement checks & factory acceptance',
              description: '',
              image: {
                $file: 'eb41f649-f2f8-4cfc-b119-23089d6da91e.png',
                alt: 'Measurement checks & factory acceptance',
              },
            },
          ],
        },
        {
          __component: 'sections.project-results',
          title: 'Results & impact',
          eyebrow: 'PROJECT OUTCOMES',
          description:
            'The completed system gives the customer a more consistent process, clearer operational data and a documented maintenance plan.',
          cards: [
            {
              title: 'More consistent production and inspection processes.',
              description: '',
            },
            {
              title: 'Improved visibility of machine status and maintenance needs.',
              description: '',
            },
            {
              title: 'A clear handover package for the operations team.',
              description: '',
            },
            {
              title: 'Acceptance records linked to the agreed technical scope.',
              description: '',
            },
          ],
        },
      ],
      featured: true,
      homeOrder: 1,
      homeTitle: 'Smart Logistics System',
      homeSummary:
        'A sample project profile demonstrating coordinated smart as/rs warehouse & agv system with documented acceptance and operator handover.',
      homeImage: {
        $file: 'feec2a1c-67ae-4e2d-9166-5fd588015ee0.png',
        alt: 'TOP WELL industrial solutions',
      },
      homeCategory: 'Smart Logistics',
    },
    {
      title: 'Wear-Resistant Machining & PVD Coating',
      slug: 'co-khi-phu-pvd',
      category: 'PVD Surface & Tool',
      summary:
        'A sample project profile demonstrating coordinated wear-resistant machining & pvd coating with documented acceptance and operator handover.',
      location: 'Dong Nai',
      year: '2022',
      image: {
        $file: 'e4721e6c-9989-4abb-a974-7aeabad5daca.png',
        alt: 'Wear-Resistant Machining & PVD Coating',
      },
      seo: {
        metaTitle: 'Wear-Resistant Machining & PVD Coating | TOP WELL International',
        metaDescription:
          'A sample project profile demonstrating coordinated wear-resistant machining & pvd coating with documented acceptance and operator handover.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.project-overview',
          title: 'Wear-Resistant Machining & PVD Coating',
          description:
            'A sample project profile demonstrating coordinated wear-resistant machining & pvd coating with documented acceptance and operator handover.',
          image: {
            $file: 'e4721e6c-9989-4abb-a974-7aeabad5daca.png',
            alt: 'Wear-Resistant Machining & PVD Coating',
          },
        },
        {
          __component: 'sections.project-challenge',
          title: 'Challenges & solutions',
          eyebrow: 'THE CHALLENGE',
          description:
            'The project required a consistent production process and reliable communication between equipment. Our team combined site assessment, technical integration and operator training.',
          cards: [
            {
              title: 'Assess vibration, alignment and thermal stability.',
              description: '',
            },
            {
              title: 'Automate material handling and inspection where appropriate.',
              description: '',
            },
            {
              title: 'Connect equipment data to the production monitoring system.',
              description: '',
            },
            {
              title: 'Provide documented operating procedures and practical training.',
              description: '',
            },
          ],
        },
        {
          __component: 'sections.project-process',
          title: 'Implementation process',
          eyebrow: 'Our process',
          description:
            'Our engineers assessed the site, agreed an equipment layout and coordinated installation. Commissioning included functional checks, acceptance testing and a structured handover to the local team.',
          cards: [
            {
              title: 'Site survey & equipment installation',
              description: '',
              image: {
                $file: 'e4721e6c-9989-4abb-a974-7aeabad5daca.png',
                alt: 'Site survey & equipment installation',
              },
            },
            {
              title: 'CNC commissioning & calibration',
              description: '',
              image: {
                $file: '1042bb5f-727a-4e6a-8d93-f5a994f3f31e.png',
                alt: 'CNC commissioning & calibration',
              },
            },
            {
              title: 'Measurement checks & factory acceptance',
              description: '',
              image: {
                $file: 'eb41f649-f2f8-4cfc-b119-23089d6da91e.png',
                alt: 'Measurement checks & factory acceptance',
              },
            },
          ],
        },
        {
          __component: 'sections.project-results',
          title: 'Results & impact',
          eyebrow: 'PROJECT OUTCOMES',
          description:
            'The completed system gives the customer a more consistent process, clearer operational data and a documented maintenance plan.',
          cards: [
            {
              title: 'More consistent production and inspection processes.',
              description: '',
            },
            {
              title: 'Improved visibility of machine status and maintenance needs.',
              description: '',
            },
            {
              title: 'A clear handover package for the operations team.',
              description: '',
            },
            {
              title: 'Acceptance records linked to the agreed technical scope.',
              description: '',
            },
          ],
        },
      ],
    },
  ],
  articles: [
    {
      title: 'Five-Axis CNC Commissioning and Acceptance Testing',
      slug: 'quy-trinh-gia-cong-cnc-5-truc',
      summary:
        'Practical insights into five-axis cnc commissioning and acceptance testing, from planning and implementation to measurable operational outcomes.',
      category: 'Engineering & Technology',
      author: 'Kenji Takahashi',
      publishedDate: '2026-03-18',
      image: {
        $file: 'feec2a1c-67ae-4e2d-9166-5fd588015ee0.png',
        alt: 'Five-Axis CNC Commissioning and Acceptance Testing',
      },
      seo: {
        metaTitle: 'Five-Axis CNC Commissioning and Acceptance Testing | TOP WELL International',
        metaDescription:
          'Practical insights into five-axis cnc commissioning and acceptance testing, from planning and implementation to measurable operational outcomes.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.article-body',
          title: 'Five-Axis CNC Commissioning and Acceptance Testing',
          description:
            'Practical insights into five-axis cnc commissioning and acceptance testing, from planning and implementation to measurable operational outcomes.',
          image: {
            $file: 'feec2a1c-67ae-4e2d-9166-5fd588015ee0.png',
            alt: 'Five-Axis CNC Commissioning and Acceptance Testing',
          },
          cards: [
            {
              title: '1. Industrial requirements and vibration control',
              description:
                'Five-axis machining requires a stable installation, controlled operating conditions and repeatable measurement. The commissioning plan should define the equipment requirements before installation begins.\n\nMeasurements must be recorded using calibrated instruments and compared with the agreed acceptance criteria. Any corrective work should be verified before production handover.\n\n“Reliable commissioning connects equipment capability with a repeatable operating process.” — Kenji Takahashi, Technical Advisor',
            },
          ],
        },
        {
          __component: 'sections.article-steps',
          title: '2. A five-stage technical handover process',
          description:
            'A structured sequence keeps installation, verification and operator training aligned.',
          cards: [
            {
              title: 'Foundation seating and levelling',
              description:
                'Check the foundation, lifting plan and machine levelling against the equipment installation requirements.',
            },
            {
              title: 'Laser alignment',
              description:
                'Measure axis alignment, straightness and squareness using calibrated instruments.',
            },
            {
              title: 'Kinematic compensation',
              description:
                'Review geometric measurements and apply approved compensation settings to the controller.',
            },
            {
              title: 'Endurance testing',
              description:
                'Run the agreed test programme while monitoring temperature, vibration and machining stability.',
            },
            {
              title: 'Operator training and handover',
              description:
                'Provide operating instructions, maintenance guidance and practical training for the site team.',
            },
          ],
        },
        {
          __component: 'sections.article-comparison',
          title: '3. Technical acceptance criteria',
          description:
            'Illustrative targets below show how an acceptance plan can document measurable requirements. Final values must be agreed for the selected equipment.',
          cards: [
            {
              title: 'Positioning repeatability',
              description: 'Typical reference: ±0.005 mm',
              eyebrow: 'Project target: ±0.0018 mm',
            },
            {
              title: 'Spindle runout',
              description: 'Typical reference: <0.003 mm',
              eyebrow: 'Project target: <0.0012 mm at 20,000 rpm',
            },
            {
              title: 'Continuous endurance test',
              description: 'Typical reference: 24 hours',
              eyebrow: 'Project target: 72 continuous hours',
            },
            {
              title: 'Technical response time',
              description: 'Typical reference: 24–48 working hours',
              eyebrow: 'Project target: under 2 hours in the agreed service area',
            },
          ],
        },
        {
          __component: 'sections.article-author',
          title: 'Kenji Takahashi',
          eyebrow: 'TECHNICAL EXPERT',
          description:
            'Senior technical advisor with experience in industrial commissioning, precision measurement and production improvement.',
          image: {
            $file: '1b5e0555-cea4-4e8c-be27-ac70fdbdb6c7.png',
            alt: 'Kenji Takahashi',
          },
        },
        {
          __component: 'sections.related-articles',
          title: 'Related articles & insights',
        },
        {
          __component: 'sections.cta',
          title: 'Take action for better production.',
          description:
            'Work with TOP WELL to develop practical equipment and technology solutions for the next stage of your business.',
          image: {
            $file: 'efa047d7-469f-4012-adb3-82370dab37ab.png',
            alt: 'Take action for better production.',
          },
          ctaLabel: 'Contact our team',
          ctaHref: '/lien-he',
          cards: [
            {
              title: '45+',
              description: 'Industrial partners',
            },
            {
              title: '150+',
              description: 'Equipment delivery projects',
            },
            {
              title: '99.2%',
              description: 'On-time delivery target',
            },
            {
              title: '24/7',
              description: 'Technical support',
            },
          ],
          highlight: 'better production.',
        },
      ],
    },
    {
      title: 'Building Resilient Supply Chains in Vietnam',
      slug: 'chuoi-cung-ung-ben-vung',
      summary:
        'Practical insights into building resilient supply chains in vietnam, from planning and implementation to measurable operational outcomes.',
      category: 'Logistics Innovation',
      author: 'Kenji Takahashi',
      publishedDate: '2026-04-17',
      image: {
        $file: '7cccf07a-1cfb-49d2-bda9-ede45929b388.png',
        alt: 'Building Resilient Supply Chains in Vietnam',
      },
      seo: {
        metaTitle: 'Building Resilient Supply Chains in Vietnam | TOP WELL International',
        metaDescription:
          'Practical insights into building resilient supply chains in vietnam, from planning and implementation to measurable operational outcomes.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.article-body',
          title: 'Building Resilient Supply Chains in Vietnam',
          description:
            'Practical insights into building resilient supply chains in vietnam, from planning and implementation to measurable operational outcomes.',
          image: {
            $file: '7cccf07a-1cfb-49d2-bda9-ede45929b388.png',
            alt: 'Building Resilient Supply Chains in Vietnam',
          },
          cards: [
            {
              title: '1. Operational context and production challenges',
              description:
                'Industrial supply chains demand reliable quality, shorter lead times and clear traceability. Coordinating machinery, warehouse operations and technical support helps manufacturers address these requirements.',
            },
            {
              title: '2. A coordinated implementation approach',
              description:
                'Start with a review of the existing process, identify bottlenecks and agree measurable objectives. Connect equipment data with warehouse and delivery planning to improve coordination.',
            },
            {
              title: '3. Measuring practical outcomes',
              description:
                'Track equipment availability, defect rates and order processing time. Use the results to prioritise maintenance, improve planning and refine operating procedures.',
            },
          ],
        },
        {
          __component: 'sections.related-articles',
          title: 'Related articles & insights',
        },
        {
          __component: 'sections.cta',
          title: 'Take action for better production.',
          description:
            'Work with TOP WELL to develop practical equipment and technology solutions for the next stage of your business.',
          image: {
            $file: 'efa047d7-469f-4012-adb3-82370dab37ab.png',
            alt: 'Take action for better production.',
          },
          ctaLabel: 'Contact our team',
          ctaHref: '/lien-he',
          cards: [
            {
              title: '45+',
              description: 'Industrial partners',
            },
            {
              title: '150+',
              description: 'Equipment delivery projects',
            },
            {
              title: '99.2%',
              description: 'On-time delivery target',
            },
            {
              title: '24/7',
              description: 'Technical support',
            },
          ],
          highlight: 'better production.',
        },
      ],
    },
    {
      title: 'Warehouse Automation Trends for Manufacturers',
      slug: 'xu-huong-tu-dong-hoa-kho-hang',
      summary:
        'Practical insights into warehouse automation trends for manufacturers, from planning and implementation to measurable operational outcomes.',
      category: 'Logistics Innovation',
      author: 'Kenji Takahashi',
      publishedDate: '2026-04-17',
      image: {
        $file: 'e35c9b18-cade-4a66-9cdb-616383c59dc5.png',
        alt: 'Warehouse Automation Trends for Manufacturers',
      },
      seo: {
        metaTitle: 'Warehouse Automation Trends for Manufacturers | TOP WELL International',
        metaDescription:
          'Practical insights into warehouse automation trends for manufacturers, from planning and implementation to measurable operational outcomes.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.article-body',
          title: 'Warehouse Automation Trends for Manufacturers',
          description:
            'Practical insights into warehouse automation trends for manufacturers, from planning and implementation to measurable operational outcomes.',
          image: {
            $file: 'e35c9b18-cade-4a66-9cdb-616383c59dc5.png',
            alt: 'Warehouse Automation Trends for Manufacturers',
          },
          cards: [
            {
              title: '1. Operational context and production challenges',
              description:
                'Industrial supply chains demand reliable quality, shorter lead times and clear traceability. Coordinating machinery, warehouse operations and technical support helps manufacturers address these requirements.',
            },
            {
              title: '2. A coordinated implementation approach',
              description:
                'Start with a review of the existing process, identify bottlenecks and agree measurable objectives. Connect equipment data with warehouse and delivery planning to improve coordination.',
            },
            {
              title: '3. Measuring practical outcomes',
              description:
                'Track equipment availability, defect rates and order processing time. Use the results to prioritise maintenance, improve planning and refine operating procedures.',
            },
          ],
        },
        {
          __component: 'sections.related-articles',
          title: 'Related articles & insights',
        },
        {
          __component: 'sections.cta',
          title: 'Take action for better production.',
          description:
            'Work with TOP WELL to develop practical equipment and technology solutions for the next stage of your business.',
          image: {
            $file: 'efa047d7-469f-4012-adb3-82370dab37ab.png',
            alt: 'Take action for better production.',
          },
          ctaLabel: 'Contact our team',
          ctaHref: '/lien-he',
          cards: [
            {
              title: '45+',
              description: 'Industrial partners',
            },
            {
              title: '150+',
              description: 'Equipment delivery projects',
            },
            {
              title: '99.2%',
              description: 'On-time delivery target',
            },
            {
              title: '24/7',
              description: 'Technical support',
            },
          ],
          highlight: 'better production.',
        },
      ],
    },
    {
      title: 'How Smart Warehousing Improves Supply Chains',
      slug: 'kho-bai-thong-minh',
      summary:
        'Practical insights into how smart warehousing improves supply chains, from planning and implementation to measurable operational outcomes.',
      category: 'Logistics Innovation',
      author: 'Kenji Takahashi',
      publishedDate: '2026-04-17',
      image: {
        $file: 'f7c3e3b0-04ff-4ed0-9097-51c338f95280.png',
        alt: 'How Smart Warehousing Improves Supply Chains',
      },
      seo: {
        metaTitle: 'How Smart Warehousing Improves Supply Chains | TOP WELL International',
        metaDescription:
          'Practical insights into how smart warehousing improves supply chains, from planning and implementation to measurable operational outcomes.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.article-body',
          title: 'How Smart Warehousing Improves Supply Chains',
          description:
            'Practical insights into how smart warehousing improves supply chains, from planning and implementation to measurable operational outcomes.',
          image: {
            $file: 'f7c3e3b0-04ff-4ed0-9097-51c338f95280.png',
            alt: 'How Smart Warehousing Improves Supply Chains',
          },
          cards: [
            {
              title: '1. Operational context and production challenges',
              description:
                'Industrial supply chains demand reliable quality, shorter lead times and clear traceability. Coordinating machinery, warehouse operations and technical support helps manufacturers address these requirements.',
            },
            {
              title: '2. A coordinated implementation approach',
              description:
                'Start with a review of the existing process, identify bottlenecks and agree measurable objectives. Connect equipment data with warehouse and delivery planning to improve coordination.',
            },
            {
              title: '3. Measuring practical outcomes',
              description:
                'Track equipment availability, defect rates and order processing time. Use the results to prioritise maintenance, improve planning and refine operating procedures.',
            },
          ],
        },
        {
          __component: 'sections.related-articles',
          title: 'Related articles & insights',
        },
        {
          __component: 'sections.cta',
          title: 'Take action for better production.',
          description:
            'Work with TOP WELL to develop practical equipment and technology solutions for the next stage of your business.',
          image: {
            $file: 'efa047d7-469f-4012-adb3-82370dab37ab.png',
            alt: 'Take action for better production.',
          },
          ctaLabel: 'Contact our team',
          ctaHref: '/lien-he',
          cards: [
            {
              title: '45+',
              description: 'Industrial partners',
            },
            {
              title: '150+',
              description: 'Equipment delivery projects',
            },
            {
              title: '99.2%',
              description: 'On-time delivery target',
            },
            {
              title: '24/7',
              description: 'Technical support',
            },
          ],
          highlight: 'better production.',
        },
      ],
    },
    {
      title: 'How Technology Is Changing Precision Measurement',
      slug: 'cong-nghe-do-luong',
      summary:
        'Practical insights into how technology is changing precision measurement, from planning and implementation to measurable operational outcomes.',
      category: 'Logistics Innovation',
      author: 'Kenji Takahashi',
      publishedDate: '2026-04-17',
      image: {
        $file: '3b0393f0-53b2-4416-bec1-a27471a8fe99.png',
        alt: 'How Technology Is Changing Precision Measurement',
      },
      seo: {
        metaTitle: 'How Technology Is Changing Precision Measurement | TOP WELL International',
        metaDescription:
          'Practical insights into how technology is changing precision measurement, from planning and implementation to measurable operational outcomes.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.article-body',
          title: 'How Technology Is Changing Precision Measurement',
          description:
            'Practical insights into how technology is changing precision measurement, from planning and implementation to measurable operational outcomes.',
          image: {
            $file: '3b0393f0-53b2-4416-bec1-a27471a8fe99.png',
            alt: 'How Technology Is Changing Precision Measurement',
          },
          cards: [
            {
              title: '1. Operational context and production challenges',
              description:
                'Industrial supply chains demand reliable quality, shorter lead times and clear traceability. Coordinating machinery, warehouse operations and technical support helps manufacturers address these requirements.',
            },
            {
              title: '2. A coordinated implementation approach',
              description:
                'Start with a review of the existing process, identify bottlenecks and agree measurable objectives. Connect equipment data with warehouse and delivery planning to improve coordination.',
            },
            {
              title: '3. Measuring practical outcomes',
              description:
                'Track equipment availability, defect rates and order processing time. Use the results to prioritise maintenance, improve planning and refine operating procedures.',
            },
          ],
        },
        {
          __component: 'sections.related-articles',
          title: 'Related articles & insights',
        },
        {
          __component: 'sections.cta',
          title: 'Take action for better production.',
          description:
            'Work with TOP WELL to develop practical equipment and technology solutions for the next stage of your business.',
          image: {
            $file: 'efa047d7-469f-4012-adb3-82370dab37ab.png',
            alt: 'Take action for better production.',
          },
          ctaLabel: 'Contact our team',
          ctaHref: '/lien-he',
          cards: [
            {
              title: '45+',
              description: 'Industrial partners',
            },
            {
              title: '150+',
              description: 'Equipment delivery projects',
            },
            {
              title: '99.2%',
              description: 'On-time delivery target',
            },
            {
              title: '24/7',
              description: 'Technical support',
            },
          ],
          highlight: 'better production.',
        },
      ],
    },
    {
      title: 'Addressing Global Supply Chain Challenges',
      slug: 'thach-thuc-chuoi-cung-ung',
      summary:
        'Practical insights into addressing global supply chain challenges, from planning and implementation to measurable operational outcomes.',
      category: 'Logistics Innovation',
      author: 'Kenji Takahashi',
      publishedDate: '2026-04-17',
      image: {
        $file: 'd38ecf56-3a56-401a-990b-b5eb35f34521.png',
        alt: 'Addressing Global Supply Chain Challenges',
      },
      seo: {
        metaTitle: 'Addressing Global Supply Chain Challenges | TOP WELL International',
        metaDescription:
          'Practical insights into addressing global supply chain challenges, from planning and implementation to measurable operational outcomes.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.article-body',
          title: 'Addressing Global Supply Chain Challenges',
          description:
            'Practical insights into addressing global supply chain challenges, from planning and implementation to measurable operational outcomes.',
          image: {
            $file: 'd38ecf56-3a56-401a-990b-b5eb35f34521.png',
            alt: 'Addressing Global Supply Chain Challenges',
          },
          cards: [
            {
              title: '1. Operational context and production challenges',
              description:
                'Industrial supply chains demand reliable quality, shorter lead times and clear traceability. Coordinating machinery, warehouse operations and technical support helps manufacturers address these requirements.',
            },
            {
              title: '2. A coordinated implementation approach',
              description:
                'Start with a review of the existing process, identify bottlenecks and agree measurable objectives. Connect equipment data with warehouse and delivery planning to improve coordination.',
            },
            {
              title: '3. Measuring practical outcomes',
              description:
                'Track equipment availability, defect rates and order processing time. Use the results to prioritise maintenance, improve planning and refine operating procedures.',
            },
          ],
        },
        {
          __component: 'sections.related-articles',
          title: 'Related articles & insights',
        },
        {
          __component: 'sections.cta',
          title: 'Take action for better production.',
          description:
            'Work with TOP WELL to develop practical equipment and technology solutions for the next stage of your business.',
          image: {
            $file: 'efa047d7-469f-4012-adb3-82370dab37ab.png',
            alt: 'Take action for better production.',
          },
          ctaLabel: 'Contact our team',
          ctaHref: '/lien-he',
          cards: [
            {
              title: '45+',
              description: 'Industrial partners',
            },
            {
              title: '150+',
              description: 'Equipment delivery projects',
            },
            {
              title: '99.2%',
              description: 'On-time delivery target',
            },
            {
              title: '24/7',
              description: 'Technical support',
            },
          ],
          highlight: 'better production.',
        },
      ],
    },
    {
      title: 'Why Last-Mile Delivery Matters',
      slug: 'giao-hang-chang-cuoi',
      summary:
        'Practical insights into why last-mile delivery matters, from planning and implementation to measurable operational outcomes.',
      category: 'Logistics Innovation',
      author: 'Kenji Takahashi',
      publishedDate: '2026-04-17',
      image: {
        $file: '193f0282-6ced-4c28-8b3a-ce9d109ddaf7.png',
        alt: 'Why Last-Mile Delivery Matters',
      },
      seo: {
        metaTitle: 'Why Last-Mile Delivery Matters | TOP WELL International',
        metaDescription:
          'Practical insights into why last-mile delivery matters, from planning and implementation to measurable operational outcomes.',
        noIndex: false,
        keywords: 'industrial solutions, engineering, automation, logistics, TOP WELL',
      },
      sections: [
        {
          __component: 'sections.article-body',
          title: 'Why Last-Mile Delivery Matters',
          description:
            'Practical insights into why last-mile delivery matters, from planning and implementation to measurable operational outcomes.',
          image: {
            $file: '193f0282-6ced-4c28-8b3a-ce9d109ddaf7.png',
            alt: 'Why Last-Mile Delivery Matters',
          },
          cards: [
            {
              title: '1. Operational context and production challenges',
              description:
                'Industrial supply chains demand reliable quality, shorter lead times and clear traceability. Coordinating machinery, warehouse operations and technical support helps manufacturers address these requirements.',
            },
            {
              title: '2. A coordinated implementation approach',
              description:
                'Start with a review of the existing process, identify bottlenecks and agree measurable objectives. Connect equipment data with warehouse and delivery planning to improve coordination.',
            },
            {
              title: '3. Measuring practical outcomes',
              description:
                'Track equipment availability, defect rates and order processing time. Use the results to prioritise maintenance, improve planning and refine operating procedures.',
            },
          ],
        },
        {
          __component: 'sections.related-articles',
          title: 'Related articles & insights',
        },
        {
          __component: 'sections.cta',
          title: 'Take action for better production.',
          description:
            'Work with TOP WELL to develop practical equipment and technology solutions for the next stage of your business.',
          image: {
            $file: 'efa047d7-469f-4012-adb3-82370dab37ab.png',
            alt: 'Take action for better production.',
          },
          ctaLabel: 'Contact our team',
          ctaHref: '/lien-he',
          cards: [
            {
              title: '45+',
              description: 'Industrial partners',
            },
            {
              title: '150+',
              description: 'Equipment delivery projects',
            },
            {
              title: '99.2%',
              description: 'On-time delivery target',
            },
            {
              title: '24/7',
              description: 'Technical support',
            },
          ],
          highlight: 'better production.',
        },
      ],
    },
  ],
  global: {
    title: 'TOP WELL International',
    logo: {
      $file: '2504768d-0eeb-4581-9bcb-a300e1d71b78.png',
      alt: 'TOP WELL International logo',
    },
    description:
      'TOP WELL International provides industrial equipment, production systems, precision tooling and coordinated engineering services.',
    email: 'contact@topwell-international.com',
    phone: '(+84) 1900 xxxx',
    address:
      'Mezzanine, Block B2 Topaz City, 39 Cao Lo Street, Chanh Hung Ward, Ho Chi Minh City, Vietnam',
    supportPhone: '+84 (1900) 8899',
    supportImage: {
      $file: 'e6a442d9-b41d-4e0b-989a-b170c442303f.png',
      alt: 'TOP WELL support team',
    },
    bannerImage: { $file: 'fv2-abbe3331.png', alt: 'TOP WELL technician at work' },
    promo: {
      eyebrow: 'TOP WELL INDUSTRIAL SERVICES',
      title: 'Get 10% off your first call-out',
      image: { $file: 'fv2-2dd2bdd3.jpg', alt: 'TOP WELL technical support specialists' },
      label: 'Book your free quote',
      href: '/lien-he',
    },
  },
};

// Thanh menu: mục Dịch vụ và Dự án mở menu con lấy từ bộ sưu tập tương ứng.
const NAVIGATION = [
  {
    title: 'Home',
    description: '',
    href: '/',
  },
  {
    title: 'About us',
    description: '',
    href: '/ve-chung-toi',
  },
  {
    title: 'Services',
    description: '',
    href: '/dich-vu',
  },
  {
    title: 'Projects',
    description: '',
    href: '/du-an',
  },
  {
    title: 'News',
    description: '',
    href: '/tin-tuc',
  },
  {
    title: 'Contact',
    description: '',
    href: '/lien-he',
  },
];
const MENU_SOURCE = {
  '/dich-vu': 'services',
  '/du-an': 'projects',
};
CONTENT.header = {
  logo: { $file: 'fv2-79973b4b.png', alt: 'TOP WELL International logo' },
  logoAlt: 'TOP WELL International logo',
  menu: NAVIGATION.map((item) => ({
    title: item.title,
    href: item.href,
    source: MENU_SOURCE[item.href] || 'none',
  })),
  buttonLabel: 'Request a quote',
  buttonHref: '/lien-he',
};

CONTENT['site-settings'] = {
  common: {
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    news: 'News',
    contact: 'Contact',
    readMore: 'Read more',
    learnMore: 'Learn more',
    viewService: 'View service',
    loadMore: 'Load more projects',
    all: 'All',
    category: 'Category',
    search: 'Search articles',
    searchPlaceholder: 'Enter a keyword\u2026',
    noResults: 'No matching articles found.',
    previous: 'Previous page',
    next: 'Next page',
    tags: 'Tags',
    viewProject: 'Project details',
    viewGoogleMaps: 'View on Google Maps',
    directions: 'Get directions',
    view: 'View',
  },
  routes: {
    home: '/',
    services: '/dich-vu',
    projects: '/du-an',
    news: '/tin-tuc',
    contact: '/lien-he',
    privacy: '/chinh-sach-bao-mat',
    standards: '/tieu-chuan-ky-thuat',
    siteSurvey: '/lien-he#contact-form',
    serviceBase: '/dich-vu/',
    projectBase: '/du-an/',
    articleBase: '/tin-tuc/',
  },
  accessibility: {
    skip: 'Skip to content',
    homeLink: 'TOP WELL \u2014 Home',
    menuOpen: 'Menu',
    menuClose: 'Close',
    navigation: 'Main navigation',
    breadcrumb: 'Breadcrumb',
    hero: 'Featured solutions',
    slide: 'Go to slide {number}',
    play: 'Play slideshow',
    partners: 'Partner network',
    pagination: 'Article pagination',
    comparison: 'Technical comparison table',
    checklist: 'Acceptance criteria',
    articleNavigation: 'Article navigation',
    gallery: 'Project gallery',
    zoomIn: 'Zoom in on map',
    zoomOut: 'Zoom out on map',
    closeStory: 'Close story',
    language: 'Language',
  },
  about: {
    rating: '4.9/5',
    readStory: 'Read our story',
    readingTime: '6 min read',
    close: 'Close',
    storyContact: 'Explore a partnership',
    storyContactHref: '/lien-he',
  },
  cta: {
    supportLabel: 'Request a CAD/STEP review',
    eyebrow: 'WORK WITH TOP WELL',
    articleEyebrow: 'STRATEGIC INDUSTRIAL PARTNERSHIPS',
  },
  sidebar: {
    servicesTitle: 'Our services',
    supportLabel: 'Request a consultation',
    categoriesTitle: 'Articles by category',
    recentTitle: 'Latest articles',
    articleEyebrow: 'TOP WELL INTERNATIONAL',
    articleTitle: 'Solutions for your business',
    articleLabel: 'Talk to our team',
    articleHref: '/lien-he',
    consultText:
      'Our technical specialists are ready to assess your site and prepare an optimised layout free of charge.',
    hotlineLabel: 'Technical hotline',
    onlineLabel: 'Online 24/7',
    viewAllArticles: 'View all articles in the news list',
  },
  forms: {
    name: 'Full name',
    email: 'Email',
    subject: 'Service requirements',
    message: 'Message',
    consent: 'I agree to be contacted about this enquiry in accordance with the',
    privacyLabel: 'privacy policy',
    submit: 'Send message',
    pending: 'Sending\u2026',
    success: 'Your enquiry has been received. Our team will contact you by email.',
    failure: 'We could not submit your enquiry. Please try again.',
    invalid: 'Please check your name, email, message and consent.',
    invalidField: 'Please enter a valid value for this field.',
    tooLong: 'The submitted content is too long.',
    rateLimit: 'Too many requests. Please try again in ten minutes.',
    invalidOrigin: 'The request could not be accepted from this source.',
    eyebrow: 'QUESTIONS & ANSWERS',
    siteSurvey: 'Arrange a site assessment',
    phone: 'Phone',
    phonePlaceholder: 'Your phone number*',
    nameShort: 'Your name*',
    emailShort: 'Your email*',
    messageShort: 'Write your message here',
    topicsTitle: 'How can we help you?',
    quoteName: 'Your full name*',
    quoteEmail: 'Email address*',
    quoteCompany: 'Company / office address',
    quoteService: 'Select a service type',
    quoteDate: 'Select a consultation date',
    privacyNotice: 'By submitting this form you agree to our',
    quoteSuccess: 'Thank you. Our team will contact you with a quotation shortly.',
  },
  newsletter: {
    title: 'Industry newsletter',
    description: 'Get updates on machinery, tooling technology and supply chain developments.',
    emailLabel: 'Newsletter email',
    placeholder: 'Your email address',
    submit: 'Subscribe',
    pending: 'Submitting\u2026',
    consent: 'By subscribing, you agree to receive updates by email.',
    privacyLabel: 'Privacy policy',
    success: 'Your newsletter request has been received.',
    failure: 'We could not receive your request. Please try again.',
    requestName: 'Newsletter subscription',
    requestSubject: 'Industry newsletter subscription',
    requestMessage: 'I agree to receive the industry newsletter at the email address provided.',
  },
  article: {
    comparisonItem: 'Acceptance criterion',
    comparisonReference: 'Industry reference',
    comparisonTarget: 'Project target',
    share: 'Share:',
    copyLink: 'Copy link',
    copied: 'Link copied',
    tagsLabel: 'Related keywords:',
    previousLabel: 'Previous article',
    nextLabel: 'Next article',
  },
  system: {
    notFoundCode: '404',
    notFoundTitle: 'Page not found',
    notFoundDescription: 'The page may have moved or is no longer available.',
    homeLabel: 'Back to home',
    errorTitle: 'Content is temporarily unavailable',
    errorDescription: 'Please try again in a moment.',
    retry: 'Try again',
  },
  metadata: {
    language: 'en',
    locale: 'en-US',
    openGraphLocale: 'en_US',
    siteName: 'TOP WELL International',
    defaultTitle: 'TOP WELL International',
    description: 'Industrial equipment, precision engineering and connected logistics solutions.',
    ogLineOne: 'Industrial solutions.',
    ogLineTwo: 'Connected globally.',
    ogTagline: 'Precision \u00b7 Technology \u00b7 Logistics',
  },
};
// Website Redesign V1 (3): the services page lists two service groups; each group has its own page
// with the service grid, the four-step process and the technical metrics strip.
CONTENT.serviceGroups = [
  {
    title: 'Equipment & solutions',
    slug: 'thiet-bi-va-giai-phap',
    key: 'industrial',
    eyebrow: 'COMPLETE & OPTIMISED',
    summary:
      'Production lines, machine tools, moulds and technical services from international manufacturers, with commissioning, training and after-sales support in Vietnam.',
    image: { $file: 'fv2-8c9dac4c.jpg', alt: 'Smart automated production line by TOP WELL' },
    icon: { $file: 'fv2-835ed70e.svg', alt: 'Equipment icon' },
    badge: '★ 4.9/5',
    badgeNote: 'Trusted rating',
    features: [
      { title: 'Japanese & European standards' },
      { title: 'On-site commissioning' },
      { title: 'Genuine spare parts' },
      { title: 'Response under 2 hours' },
    ],
    ctaLabel: 'Explore details',
    bannerImage: { $file: 'fv2-abbe3331.png', alt: 'TOP WELL technician at work' },
    seo: {
      metaTitle: 'Equipment & solutions | TOP WELL International',
      metaDescription:
        'Production lines, machine tools, moulds and technical services delivered and supported by TOP WELL in Vietnam.',
      noIndex: false,
      keywords: 'industrial equipment, production lines, moulds, technical services',
    },
    sections: [
      {
        __component: 'sections.services',
        eyebrow: 'SERVICE ECOSYSTEM',
        title: 'Equipment and technical solutions',
      },
      {
        __component: 'sections.process-steps',
        
        title: 'Technical intake and rollout process',
        description:
          'Every milestone is controlled, from feasibility review to stable handover under strict quality standards.',
        cards: [
          {
            eyebrow: 'INPUT ASSESSMENT STAGE',
            title: 'Survey & requirements',
            description:
              'We receive CAD/STEP drawings, survey the shop floor in person and measure load parameters within 24 hours.',
          },
          {
            eyebrow: 'DESIGN & ROI OPTIMISATION',
            title: 'DFM & solution simulation',
            description:
              'Design-for-manufacturing analysis, cycle-time calculation and a quotation for the feasible option.',
          },
          {
            eyebrow: 'MANUFACTURING & FACTORY TESTING',
            title: 'Production & FAT testing',
            description:
              'Manufacturing, assembly and factory acceptance testing before the equipment leaves our workshop.',
          },
          {
            eyebrow: 'HANDOVER & OPERATIONS SUPPORT',
            title: 'SAT handover & O&M SOP',
            description:
              'Installation at your plant (SAT), SOP training for your engineers and a scheduled maintenance commitment.',
          },
        ],
      },
      {
        __component: 'sections.cta-bar',
        eyebrow: 'TECHNICAL & PROJECT SUPPORT',
        title: 'Need technical advice or a quotation for your project?',
        description:
          'The TOP WELL team is ready to review your site and prepare a plan within 24 hours.',
        phoneLabel: 'Hotline:',
        ctaLabel: 'Talk to us',
        ctaHref: '/lien-he',
      },
    ],
  },
  {
    title: 'Logistics & supply chain',
    slug: 'logistics-va-chuoi-cung-ung',
    key: 'logistics',
    eyebrow: 'AUTOMATED & CONNECTED',
    summary:
      'Multimodal freight by sea, air, rail and road, combined with smart warehousing, distribution and customs clearance for industrial cargo.',
    image: { $file: 'fv2-dc711df0.jpg', alt: 'Container ship sailing on the open ocean' },
    icon: { $file: 'fv2-28f3a07f.svg', alt: 'Components icon' },
    badge: '★ 4.9/5',
    badgeNote: 'Trusted rating',
    features: [
      { title: 'Coverage in 150+ countries' },
      { title: 'GPS tracking 24/7' },
      { title: 'Fast customs clearance' },
      { title: 'On-time rate 98.7%' },
    ],
    ctaLabel: 'Explore details',
    bannerImage: { $file: 'fv2-abbe3331.png', alt: 'TOP WELL technician at work' },
    seo: {
      metaTitle: 'Logistics & supply chain | TOP WELL International',
      metaDescription:
        'Multimodal freight, smart warehousing, distribution and customs clearance for industrial equipment and machinery.',
      noIndex: false,
      keywords: 'logistics, freight, warehousing, customs clearance, supply chain',
    },
    sections: [
      {
        __component: 'sections.services',
        eyebrow: 'SERVICE ECOSYSTEM',
        title: 'Logistics and supply-chain services',
      },
      {
        __component: 'sections.process-steps',
        title: 'How a shipment is planned and delivered',
        description:
          'From cargo survey to final handover, every stage is tracked and reported transparently.',
        cards: [
          {
            eyebrow: 'CARGO ASSESSMENT',
            title: 'Survey & routing plan',
            description:
              'We review dimensions, weight and timing, then propose the transport mode and route.',
          },
          {
            eyebrow: 'DOCUMENTS & CUSTOMS',
            title: 'Paperwork & clearance',
            description:
              'Import and export documents, HS codes and clearance handled by our in-house team.',
          },
          {
            eyebrow: 'TRANSPORT & MONITORING',
            title: 'Shipping & tracking',
            description:
              'Multimodal transport with online tracking and proactive updates at every milestone.',
          },
          {
            eyebrow: 'WAREHOUSE & DISTRIBUTION',
            title: 'Storage & final delivery',
            description:
              'Smart warehousing, inventory control and delivery to the plant on the agreed date.',
          },
        ],
      },
      {
        __component: 'sections.cta-bar',
        eyebrow: 'TECHNICAL & PROJECT SUPPORT',
        title: 'Need technical advice or a quotation for your project?',
        description:
          'The TOP WELL team is ready to review your site and prepare a plan within 24 hours.',
        phoneLabel: 'Hotline:',
        ctaLabel: 'Talk to us',
        ctaHref: '/lien-he',
      },
    ],
  },
];

CONTENT.footer = {
  logo: CONTENT.global.logo,
  logoHref: '/',
  companyName: 'TOPWELL INTERNATIONAL CO., LTD',
  description: '"International standards – Local service."',
  phoneLabel: 'Hotline:',
  phoneSuffix: 'Engineering 24/7',
  emailLabel: 'Email:',
  addressLabel: 'Location:',
  copyright: '© {year} - TOP WELL International. All rights reserved.',
  followTitle: 'Follow us',
  columns: [
    {
      title: 'PROJECTS',
      links: CONTENT.projects
        .slice(0, 3)
        .map((p) => ({ title: p.title, href: '/du-an/' + p.slug })),
    },
    {
      title: 'SERVICES',
      links: CONTENT.services
        .filter((s) => s.category === 'Industrial')
        .map((s) => ({ title: s.title, href: '/dich-vu/' + s.slug })),
    },
    {
      title: 'INFORMATION',
      links: [
        { title: 'About us', href: '/ve-chung-toi' },
        { title: 'Privacy policy', href: '/chinh-sach-bao-mat' },
        { title: 'Technical standards', href: '/tieu-chuan-ky-thuat' },
        { title: 'Contact', href: '/lien-he' },
      ],
    },
  ],
  socialLinks: [],
};

const SECTION_ICONS = {
  'sections.values': [
    '219709a3-3f39-4d70-85b4-9e1a99869fbc.svg',
    '6b4120d7-4469-40dd-ac75-eb0078967f32.svg',
    'f46510c1-33a0-4d33-ac60-90446bfc5e80.svg',
  ],
  'sections.metrics': [
    '7af1b088-bd1c-4d58-9753-ba6c074a82fd.svg',
    '31883b8c-953c-43a7-9a3f-0189e9193e46.svg',
    'f39048cf-7e01-486d-a107-4b5cae83a175.svg',
    '5fd32e1c-46bd-408e-8e5e-46e983299768.svg',
  ],
};
const IMAGE_REPLACEMENTS = {
  'feec2a1c-67ae-4e2d-9166-5fd588015ee0.png': '0b024f69-b6f6-4f88-8829-5afbf0464e26.png',
  'f7fd6c37-7a22-44a8-a656-8c3dcb83adf6.png': '0b024f69-b6f6-4f88-8829-5afbf0464e26.png',
  'ac52df55-2487-416c-9f35-f256a1caf622.png': '1042bb5f-727a-4e6a-8d93-f5a994f3f31e.png',
  '518e135f-86aa-4596-9c6f-1ccd25352d33.png': '6b5c01ea-b0f3-40c5-a348-0258695743c6.png',
  'efa047d7-469f-4012-adb3-82370dab37ab.png': '0b024f69-b6f6-4f88-8829-5afbf0464e26.png',
};
Object.assign(IMAGE_REPLACEMENTS, {
  '1e93f881-b66f-4bb3-a73e-f1076b8ca947.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  '3b0393f0-53b2-4416-bec1-a27471a8fe99.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  '6b15c678-f1a0-4d6e-9250-24d8672b8929.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  '6c104a48-a993-49ee-ae4d-8aaa6f26e3f4.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  '6e0a33e6-2a34-44a9-9217-07e9027251b2.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  '18e432fd-9dac-422c-99f3-a2a27850b24c.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  '97a1c51d-37ca-41ed-893e-60d3f2f8df65.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  '193f0282-6ced-4c28-8b3a-ce9d109ddaf7.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  '494aa562-c7ff-4fa2-a662-b24d370eb84a.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  '4079d086-b666-4233-9d1e-29f90fb18d69.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  'cae00984-c1db-4beb-85f6-f017cca38d01.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  'd114c4c3-81fe-4ec6-b6e1-3cb90db0546a.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  'ecf56660-8254-442f-b13c-57531e64947a.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  'f7c3e3b0-04ff-4ed0-9097-51c338f95280.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  'f5175935-61f2-4e4c-8f09-c2277d2795d3.png': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  '6b5c01ea-b0f3-40c5-a348-0258695743c6.png': 'e6a442d9-b41d-4e0b-989a-b170c442303f.png',
  '518e135f-86aa-4596-9c6f-1ccd25352d33.png': 'e6a442d9-b41d-4e0b-989a-b170c442303f.png',
  '85ffb4d3-d43b-4339-ac06-c8063f2ae6b0.png': '1042bb5f-727a-4e6a-8d93-f5a994f3f31e.png',
  'bde06153-3929-46ee-afd1-6595a0f4f255.png': '0b024f69-b6f6-4f88-8829-5afbf0464e26.png',
  'c2c51637-a2b1-42e2-a7fb-69d380214c38.png': '90c82ec5-56b3-405d-9bf7-ace87d76ce7a.png',
});
IMAGE_REPLACEMENTS['447de50f-270e-4174-8e72-2fabb60a0e35.png'] = 'global-network-clean.png';
IMAGE_REPLACEMENTS['0c01612b-f758-481d-a868-a0e156afbbbc.png'] = 'team-laboratory-clean.png';
function prepareEnglishAssets(value) {
  if (Array.isArray(value)) return value.forEach(prepareEnglishAssets);
  if (!value || typeof value !== 'object') return;
  if (value.$file && IMAGE_REPLACEMENTS[value.$file]) value.$file = IMAGE_REPLACEMENTS[value.$file];
  if (SECTION_ICONS[value.__component])
    value.cards?.forEach((card, i) => {
      card.icon ||= {
        $file: SECTION_ICONS[value.__component][i % SECTION_ICONS[value.__component].length],
        alt: card.title,
      };
    });
  Object.values(value).forEach(prepareEnglishAssets);
}
prepareEnglishAssets(CONTENT);
CONTENT.services.forEach((service) => {
  service.group = service.category === 'Logistics' ? 'logistics' : 'industrial';
});

// Dịch vụ xếp theo cây: hai mục gốc (Thiết bị & giải pháp, Logistics) và các mục con bên dưới.
// Mục gốc dùng layout trang cha; mục con dùng layout trang chi tiết.
CONTENT.services = [
  ...CONTENT.serviceGroups.map(({ key, ...group }, index) => ({
    ...group,
    group: key,
    order: index,
    sections: group.sections.map((section) =>
      section.__component === 'sections.services' ? { ...section, source: 'children' } : section,
    ),
  })),
  ...CONTENT.services.map((service, index) => ({
    ...service,
    order: index,
    parent: CONTENT.serviceGroups.find((g) => g.key === service.group).slug,
  })),
];
delete CONTENT.serviceGroups;

// Redesign V1 project cards show an author and a date; the flagship case study follows Figma 143:3485.
const PROJECT_DATES = [
  '2026-05-17',
  '2026-04-22',
  '2026-03-12',
  '2026-02-06',
  '2025-12-18',
  '2025-11-04',
];
// Trang dự án kết bằng dải kêu gọi nền tối như thiết kế (Figma 208:2894).
const PROJECT_CTA = {
  __component: 'sections.cta-bar',
  eyebrow: 'TECHNICAL & PROJECT SUPPORT',
  title: 'Need technical advice or a quotation for your project?',
  description: 'The TOP WELL team is ready to review your site and prepare a plan within 24 hours.',
  phoneLabel: 'Hotline:',
  ctaLabel: 'Talk to us',
  ctaHref: '/lien-he',
};
CONTENT.projects.forEach((project, index) => {
  project.author ||= 'TOP WELL Engineering';
  project.publishedDate ||= PROJECT_DATES[index % PROJECT_DATES.length];
});
Object.assign(CONTENT.projects[0], {
  image: {
    $file: 'fv2-8c9dac4c.jpg',
    alt: 'EV assembly line automation and precision manufacturing',
  },
});
CONTENT.projects[0].sections = [
  {
    __component: 'sections.project-overview',
    title: 'EV Assembly Line Automation',
    description:
      'Optimise production cycle time and eliminate cumulative machining error across complex mechanical assemblies. The customer faced high scrap rates and unplanned maintenance costs, requiring a synchronised automation line with strict micro-tolerance inspection standards.',
    image: {
      $file: 'fv2-8c9dac4c.jpg',
      alt: 'EV assembly line automation and precision manufacturing',
    },
  },
  {
    __component: 'sections.project-challenge',
    title: 'Challenge & solution',
    eyebrow: 'CHALLENGE & SOLUTION',
    description:
      'The partner plant struggled to keep high-speed stamping and the CNC machining cell stable together. Manual steps interrupted material feeding, created serious bottlenecks and wasted special alloy material. TOP WELL built a complete solution:',
    cards: [
      { title: 'Eliminated dynamic vibration and thermal drift during 24/7 CNC operation.' },
      { title: 'Automated blank feeding and non-contact optical measurement to ±0.002 mm.' },
      {
        title: 'Integrated SCADA/MES industrial communication for real-time equipment monitoring.',
      },
      {
        title: 'Transferred standardised SOP operation procedures to the on-site engineering team.',
      },
    ],
  },
  {
    __component: 'sections.project-process',
    title: 'Implementation process',
    eyebrow: 'Our process',
    description:
      'Delivery followed German and Japanese industrial practice: site survey, 3D DFM/Moldflow simulation, finishing on 5-axis machining centres, Renishaw laser calibration and on-site FAT/SAT acceptance before connecting to live production.',
    cards: [
      {
        title: 'Survey & equipment planning',
        image: { $file: 'fv2-21fe2075.jpg', alt: 'Site survey and equipment planning' },
      },
      {
        title: '5-axis CNC machining & tuning',
        image: { $file: 'fv2-81b58488.jpg', alt: '5-axis CNC machining and tuning' },
      },
      {
        title: 'Laser CMM inspection & FAT',
        image: { $file: 'fv2-f1ac49ad.jpg', alt: 'Laser CMM inspection and factory acceptance' },
      },
    ],
  },
  {
    __component: 'sections.project-results',
    title: 'Results & impact',
    eyebrow: 'RESULTS & IMPACT',
    description:
      'After handover the project delivered a step change in real operating capability, set a new benchmark for mechanical reliability and helped the partner meet demanding global supply-chain standards:',
    cards: [
      { title: '35% lower operating cost', description: 'and 98% less unplanned downtime.' },
      { title: 'Overall equipment effectiveness (OEE)', description: 'raised from 76% to 94.2%.' },
      {
        title: 'Return on investment (ROI)',
        description: 'achieved after 14 months of operation.',
      },
      { title: 'International quality certification', description: 'to ISO 9001 and AS9100.' },
    ],
  },
];

// Redesign V1: home service cards, featured projects, article metadata and footer social icons.
const SERVICE_IMAGES = {
  'production-lines': '3d88dd2d-b196-4d51-a60d-9f2c6cfcf572.png',
  machinery: 'fv2-8c9dac4c.jpg',
  'spare-parts-molds': 'fv2-f1ac49ad.jpg',
  'technical-services': 'fv2-81b58488.jpg',
};
CONTENT.services.forEach((service) => {
  const image = SERVICE_IMAGES[service.slug];
  if (image) service.image = { $file: image, alt: service.title };
});
const FEATURED = {
  'kho-thong-minh-asrs': {
    homeOrder: 0,
    homeTitle: 'Oulide – ADA & Smart Warehouse',
    homeCategory: 'ADA & Logistics / Warehouse automation',
    homeSummary:
      'A smart storage solution integrating the Ada System Platform and AS/RS technology to optimise material flow and automate industrial logistics.',
    homeImage: {
      $file: 'fv2-b4d08d8a.jpg',
      alt: 'AGV robots carrying pallets in a smart warehouse',
    },
    tags: 'Ada System Platform, Smart AS/RS, AI Warehouse',
  },
  'khuon-ep-nhua-y-te': {
    homeOrder: 1,
    homeTitle: 'Tongjun – Environmental New Materials',
    homeCategory: 'New materials / Green technology',
    homeSummary:
      'High-tech processing and extrusion lines for new eco-friendly engineering polymers that meet demanding international export standards.',
    homeImage: { $file: 'fv2-19742fac.png', alt: 'Aerial view of a logistics port' },
    tags: 'Green Materials, Eco Polymer, ISO 14001',
  },
};
CONTENT.projects.forEach((project) => {
  Object.assign(
    project,
    { featured: Boolean(FEATURED[project.slug]) },
    FEATURED[project.slug] || {},
  );
});
CONTENT.projects.forEach((project) => {
  if (!project.sections.some((s) => s.__component === 'sections.cta-bar'))
    project.sections.push({ ...PROJECT_CTA });
});

const ARTICLE_V1 = {
  'quy-trinh-gia-cong-cnc-5-truc': [
    'fv2-c6d3b0a7.jpg',
    'CNC Machining, Five-Axis, TOP WELL Alliance, Hai Phong Automation',
  ],
  'chuoi-cung-ung-ben-vung': ['fv2-12b2d5eb.jpg', 'Supply Chain, Green Logistics, Sustainability'],
  'xu-huong-tu-dong-hoa-kho-hang': ['fv2-0e3b547a.jpg', 'Warehouse Automation, Conveyors, AS/RS'],
  'kho-bai-thong-minh': ['fv2-6fe4f3e8.jpg', 'Smart Warehouse, Inventory, WMS'],
  'cong-nghe-do-luong': ['fv2-f8e3fae0.jpg', 'Metrology, Laser Calibration, Quality'],
  'thach-thuc-chuoi-cung-ung': ['fv2-049c4fb7.jpg', 'Supply Chain, Risk Management, Automation'],
  'giao-hang-chang-cuoi': ['fv2-5bb25721.jpg', 'Last Mile, Delivery, Logistics'],
};
CONTENT.articles.forEach((article) => {
  const [image, tags] = ARTICLE_V1[article.slug] || [];
  if (image) article.image = { $file: image, alt: article.title };
  if (tags) article.tags = tags;
  article.readingTime ||= `${Math.max(3, Math.round(JSON.stringify(article.sections).split(' ').length / 200))} min read`;
  article.authorRole ||= 'Chief Technical Advisor • TOP WELL Industrial Alliance';
  article.authorImage ||= { $file: 'fv2-0cf1e2df.jpg', alt: article.author };
  // The article template ends with the author box and previous/next links (Figma 29:1706).
  article.sections = article.sections.filter(
    (s) => !['sections.related-articles', 'sections.cta'].includes(s.__component),
  );
  const body = article.sections.find((s) => s.__component === 'sections.article-body');
  if (body) body.image = { ...article.image };
});
Object.assign(
  CONTENT.articles.find((a) => a.slug === 'quy-trinh-gia-cong-cnc-5-truc'),
  { readingTime: '7 min read' },
);
(() => {
  const article = CONTENT.articles.find((a) => a.slug === 'quy-trinh-gia-cong-cnc-5-truc');
  const find = (name) => article.sections.find((s) => s.__component === `sections.${name}`);
  // Câu chữ theo bài viết mẫu của Figma (29:1706).
  article.title =
    'Heavy-duty 5-axis CNC milling machine handover and micro-tolerance testing in Hai Phong';
  Object.assign(find('article-body'), {
    title: article.title,
    description:
      'Bringing 5-axis precision machining cells into heavy industrial production lines demands strict standards for foundation vibration isolation, laser optical alignment and tolerance inspection at micro-inch level. Below is the actual technical handover record TOP WELL International has just completed at the Deep C Industrial Zone in Hai Phong.',
    cards: [
      {
        title: '1. Industrial context and the challenge of vibration control',
        description:
          'As high-tech supply chains shift to northern Vietnam, Tier-1 satellite plants producing semiconductor components, aerospace moulds and EV parts demand absolute kinematic stability. For large 5-axis CNC milling machines with table loads above 8 tonnes, thermal displacement and vibration transmitted from nearby overhead cranes can ruin an entire machining batch worth hundreds of thousands of US dollars.\n\nTOP WELL International takes responsibility from the machine foundation ground survey and construction of a vibration-isolated foundation pit with specialised elastic polyurethane damping, through to setting the machine down with electronic spirit-level accuracy of 0.001 mm/m.\n\n“However advanced a 5-axis CNC machine is, it only reaches full capacity when the handover masters three factors: machine foundation seismics, real-time optical laser measurement and kinematic error-compensation software calibration.” — Kenji Takahashi, Chief Technical Advisor, TOP WELL Alliance',
      },
    ],
    image: { $file: 'fv2-19742fac.png', alt: 'Container ship and port logistics in Hai Phong' },
    imageTag: 'HAI PHONG PORT INDUSTRIAL CORRIDOR',
    imageNote:
      'Oversized and heavy-lift transport and receipt of precision CNC machines at the Hai Phong deep-water port.',
    imageCaption:
      'Figure 1.1: The heavy industrial equipment transport corridor and precision mechanical handover by TOP WELL.',
  });
  Object.assign(find('article-steps'), {
    title: '2. A standard 5-step technical handover process',
    description:
      'To ensure full transparency and safety, the TOP WELL engineering team applies an internationally standardised 5-stage handover framework:',
    cards: [
      {
        title: 'Receipt & machine foundation levelling (Foundation Seating)',
        description:
          'Synchronised 100-tonne hydraulic jacks and industrial anti-vibration pads keep flatness error below 0.005 mm.',
      },
      {
        title: 'Optical laser interferometer alignment',
        description:
          'Straightness and squareness of the X-Y-Z axes and A-C rotary axes are measured with Renishaw laser interferometry.',
      },
      {
        title: 'Micro-error calibration (Kinematic Compensation < 0.002mm)',
        description:
          'Geometric error-compensation tables are loaded directly into the Heidenhain TNC7 / Fanuc 31i-B5 controller to eliminate backlash.',
      },
      {
        title: 'Continuous 72-hour load test (72-Hour Endurance Run)',
        description:
          'Simulated machining of Ti-6Al-4V titanium alloy blanks at a spindle speed of 24,000 rpm, with spindle temperature tracked by infrared camera.',
      },
      {
        title: 'Operator training & maintenance procedure handover',
        description:
          'Full bilingual O&M technical documentation is handed over, with safety certification training for 12 plant operating engineers.',
      },
    ],
  });
  Object.assign(find('article-comparison'), {
    title: '3. Comparison of technical acceptance standards',
    description:
      'The table below shows the gap between common market standards and the strict quality commitments of the TOP WELL Alliance engineering alliance:',
    cards: [
      {
        title: 'Positioning repeatability',
        description: '± 0.005 mm',
        eyebrow: '± 0.0018 mm (Laser Verified)',
      },
      { title: 'Spindle runout', description: '< 0.003 mm', eyebrow: '< 0.0012 mm at 20,000 rpm' },
      {
        title: 'Continuous load test duration',
        description: '24 hours with interruptions',
        eyebrow: '72 continuous hours at 100% capacity',
      },
      {
        title: 'Technical incident response time',
        description: '24 – 48 working hours',
        eyebrow: 'Under 2 hours on site in northern Vietnam',
      },
    ],
    checklistTitle: 'Completed handover inspection checklist',
    checklist:
      'Renishaw XL-80 laser interferometer report\nBallbar QC20-W kinematic test\nFFT accelerometer vibration spectrum analysis\nSample part machining certified at Cpk > 1.67',
  });
  Object.assign(find('article-author'), {
    eyebrow: 'TECHNICAL EXPERT',
    role: 'Chief Technical Advisor • Former Toyota Motor specialist, Lean Six Sigma Master Black Belt',
    description:
      'Over 22 years of experience in automated mechanical line handover, micro-error control and OEE optimisation for multinational industrial groups across Asia.',
    image: { $file: 'fv2-0cf1e2df.jpg', alt: 'Kenji Takahashi' },
  });
})();
// Every decorative-but-editable image lives in the CMS with the Figma asset as its default.
CONTENT.global.supportImage = { $file: 'fv2-d5b4afb2.jpg', alt: 'TOP WELL support team' };
(() => {
  const about = CONTENT.pages['about-page'].sections;
  const find = (name, variant) =>
    about.find((s) => s.__component === `sections.${name}` && (!variant || s.variant === variant));
  find('about-hero').eyebrowIcon = { $file: 'fv2-90318f6f.svg', alt: 'About icon' };
  find('about', 'company').eyebrowIcon = { $file: 'fv2-e7fb93a7.svg', alt: 'Company icon' };
  Object.assign(find('cta'), {
    supportIcon: { $file: 'fv2-963abffd.svg', alt: 'Support headset icon' },
  });
})();
CONTENT.footer.columns[0].links = CONTENT.projects
  .filter((p) => p.featured)
  .sort((a, b) => a.homeOrder - b.homeOrder)
  .map((p) => ({ title: p.homeTitle, href: '/du-an/' + p.slug }));
CONTENT.footer.socialLinks = [
  { title: 'Instagram', icon: { $file: 'fv2-5ef4f5dd.svg', alt: 'Instagram' } },
  { title: 'Facebook', icon: { $file: 'fv2-b6a57ff8.svg', alt: 'Facebook' } },
  { title: 'LinkedIn', icon: { $file: 'fv2-118786f5.svg', alt: 'LinkedIn' } },
];

// Website Redesign V1 (Figma "TOP WELL — Website Redesign V1"): service detail pages use one
// rich intro block (image, headline, two photos, body) followed by the FAQ accordion.
const SERVICE_V1 = {
  'production-lines': {
    headline: 'Optimising productivity with Industry 4.0 automation',
    lead: 'TOP WELL International designs, builds and integrates smart automated production lines. We work with FDI groups and leading manufacturers to optimise production through multi-axis industrial robots, AGV/AMR guided vehicles, heavy-duty pallet conveyors and automated assembly and test modules.',
    second:
      'Every automated line delivered by TOP WELL goes through rigorous load testing, with on-schedule handover and stable operating indicators before commercial production begins.',
    images: [
      { $file: 'fv2-f7edc0a8.jpg', alt: 'Project team receiving a completed-project certificate' },
      { $file: 'fv2-57b86b40.jpg', alt: 'Engineering team reviewing an automation proposal' },
    ],
    image: { $file: 'fv2-8c9dac4c.jpg', alt: 'Smart automated production line by TOP WELL' },
  },
  machinery: {
    headline: 'Selecting the right machinery for every process',
  },
  'spare-parts-molds': {
    headline: 'Precision tooling and compatible spare parts',
  },
  'technical-services': {
    headline: 'Commissioning, calibration and maintenance you can rely on',
  },
  'van-chuyen-hang-hoa': {
    headline: 'End-to-end freight coordination',
  },
  'van-tai-duong-bien': {
    headline: 'Reliable ocean freight for international cargo',
  },
  'van-tai-hang-khong': {
    headline: 'Air freight when time matters most',
  },
  'van-tai-duong-sat': {
    headline: 'Cost-effective rail freight across the region',
  },
  'phan-phoi-kho-hang': {
    headline: 'Smart warehousing and distribution',
  },
  'thu-tuc-hai-quan': {
    headline: 'Customs clearance without surprises',
  },
};
const LOGISTICS_V1 = {
  'van-chuyen-hang-hoa': ['fv2-a932dda0.jpg', 'fv2-1d15fefb.svg'],
  'van-tai-duong-bien': ['fv2-4217a8b9.jpg', 'fv2-60e4369f.svg'],
  'van-tai-hang-khong': ['fv2-6fb49d67.jpg', 'fv2-b4b85a24.svg'],
  'van-tai-duong-sat': ['fv2-84475348.jpg', 'fv2-e1fe4f40.svg'],
  'phan-phoi-kho-hang': ['fv2-801a5634.jpg', 'fv2-a81a6e04.svg'],
  'thu-tuc-hai-quan': ['fv2-e5f36b1e.jpg', 'fv2-2f4f375f.svg'],
};
const DETAIL_PHOTOS = [
  { $file: 'fv2-f7edc0a8.jpg', alt: 'Project team at a TOP WELL handover' },
  { $file: 'fv2-57b86b40.jpg', alt: 'TOP WELL engineers presenting a delivery plan' },
];
CONTENT.services.forEach((service) => {
  // Mục gốc dùng layout trang cha, không có khối giới thiệu chi tiết.
  if (!service.parent) return;
  const v1 = SERVICE_V1[service.slug] || {};
  const find = (name) => service.sections.find((s) => s.__component === `sections.${name}`);
  const intro = find('service-intro');
  const features = find('feature-grid');
  const commitments = find('commitments');
  const gallery = find('gallery');
  const faq = find('faq');
  if (LOGISTICS_V1[service.slug]) {
    const [image, icon] = LOGISTICS_V1[service.slug];
    service.image = { $file: image, alt: service.title };
    service.icon = { $file: icon, alt: `${service.title} icon` };
  }
  const describe = (cards = []) => cards.map((c) => `${c.title}: ${c.description}`).join(' ');
  service.sections = [
    {
      __component: 'sections.service-intro',
      title: v1.headline || service.title,
      description: [v1.lead || intro.description, v1.second || commitments?.description]
        .filter(Boolean)
        .join('\n\n'),
      image: v1.image || service.image || intro.image,
      // Hai ảnh dưới đoạn giới thiệu: cặp ảnh bàn giao và họp dự án như mọi trang con Figma.
      images: v1.images || DETAIL_PHOTOS,
      body: describe(commitments?.cards) || describe(features?.cards),
    },
    ...(faq ? [{ ...faq, title: 'Frequently asked questions' }] : []),
  ];
});

// Cây Dịch vụ và Dự án theo Figma "Website Redesign V1" (I7AI3bFueHVCpfJetnSWsZ), tối đa 3 cấp:
//   cấp 1  trang Dịch vụ / trang Dự án
//   cấp 2  mục gốc trong bộ sưu tập (PAREN PAGE 208:133, 171:2)
//   cấp 3  mục con của mục gốc (CHILD PAGE 208:4449, 208:5097, 208:5674, 208:5289, 208:5480)
// Mục có mục con dùng layout trang cha; mục không có mục con dùng layout trang chi tiết.
(() => {
  const clone = (value) => structuredClone(value);
  const bySlug = (list, slug) => clone(list.find((item) => item.slug === slug));
  const seo = (title, description, keywords) => ({
    metaTitle: `${title} | TOP WELL International`,
    metaDescription: description,
    noIndex: false,
    keywords,
  });
  const equipment = bySlug(CONTENT.services, 'thiet-bi-va-giai-phap');
  // Hai trang cấp 2 dùng chung quy trình 4 bước và dải kêu gọi như bản thiết kế.
  const shared = equipment.sections.filter((s) => s.__component !== 'sections.services');
  const parts = {
    ...clone(equipment),
    title: 'Spare parts & components',
    slug: 'phu-tung-va-linh-kien',
    eyebrow: 'GENUINE & COMPATIBLE',
    summary:
      'Replacement parts, moulds and components for production equipment, with technical support to identify, source and install the right part quickly.',
    image: { $file: 'fv2-f1ac49ad.jpg', alt: 'Precision spare parts and tooling' },
    icon: { $file: 'fv2-28f3a07f.svg', alt: 'Components icon' },
    features: [
      { title: 'Genuine spare parts' },
      { title: 'Compatible alternatives' },
      { title: 'Fast sourcing' },
      { title: 'Response under 2 hours' },
    ],
    seo: seo(
      'Spare parts & components',
      'Replacement parts, moulds and components for industrial equipment, sourced and supported by TOP WELL in Vietnam.',
      'spare parts, components, moulds, technical support',
    ),
    sections: [
      {
        __component: 'sections.services',
        eyebrow: 'SERVICE ECOSYSTEM',
        title: 'Spare parts and component solutions',
        source: 'children',
      },
      ...clone(shared),
    ],
  };
  const child = (from, parent, order, overrides) => {
    const base = bySlug(CONTENT.services, from);
    const entry = { ...base, ...overrides, parent, order };
    entry.seo = seo(entry.title, entry.summary, base.seo.keywords);
    return entry;
  };
  const turnkey = child('production-lines', 'thiet-bi-va-giai-phap', 2, {
    title: 'Turnkey projects',
    slug: 'du-an-chia-khoa-trao-tay',
    summary:
      'End-to-end delivery of complete production facilities, from process design and equipment supply to installation, commissioning and handover.',
    image: {
      $file: 'fv2-57b86b40.jpg',
      alt: 'TOP WELL engineers presenting a turnkey project plan',
    },
    icon: { $file: 'f7eeab15-fe3a-4b8a-b9ba-982793ff1c67.svg', alt: 'Turnkey projects icon' },
  });
  const intro = turnkey.sections.find((s) => s.__component === 'sections.service-intro');
  Object.assign(intro, {
    title: 'One partner from design to handover',
    description:
      'TOP WELL takes full responsibility for turnkey industrial projects: process design, equipment selection and procurement, installation, commissioning and operator training. A single project team coordinates every supplier and milestone, so your plant starts production on schedule.\n\nEach turnkey project is delivered against agreed performance indicators, with factory and site acceptance tests documented before handover.',
    image: {
      $file: 'fv2-57b86b40.jpg',
      alt: 'TOP WELL engineers presenting a turnkey project plan',
    },
    body: 'Process design: layout, capacity and utility requirements agreed with your team. Procurement: equipment sourced from qualified international manufacturers. Installation & commissioning: mechanical, electrical and control integration on site. Handover: acceptance tests, SOP training and after-sales support.',
  });
  const productionLines = child('production-lines', 'thiet-bi-va-giai-phap', 1, {
    title: 'Production Lines',
    slug: 'day-chuyen-san-xuat',
  });
  // Câu hỏi thường gặp riêng của trang Dây chuyền sản xuất (CHILD PAGE 208:4449).
  const lineFaq = productionLines.sections.find((s) => s.__component === 'sections.faq');
  lineFaq.cards = [
    {
      title: 'How long does it take to design, build and hand over an automated line?',
      description:
        'Delivery usually takes 6 to 12 weeks depending on the scale and complexity of the line. TOP WELL runs a full FAT at our workshop first, cutting installation and trial runs at your plant to just 7–14 working days.',
    },
    {
      ...lineFaq.cards[1],
      title: 'Can the automated line integrate with our existing ERP/MES software?',
    },
    {
      title: 'How does TOP WELL deliver operation and maintenance training?',
      description:
        'Training, maintenance requirements and technical support arrangements are defined as part of the project scope.',
    },
  ];
  CONTENT.services = [
    { ...equipment, order: 0 },
    { ...parts, order: 1 },
    child('machinery', 'thiet-bi-va-giai-phap', 0, { title: 'Equipment', slug: 'thiet-bi' }),
    productionLines,
    turnkey,
    child('spare-parts-molds', 'phu-tung-va-linh-kien', 0, {
      title: 'Replacement parts supply',
      slug: 'cung-cap-phu-tung-thay-the',
    }),
    child('technical-services', 'phu-tung-va-linh-kien', 1, {
      title: 'Technical support & component solutions',
      slug: 'ho-tro-ky-thuat-giai-phap-linh-kien',
    }),
  ];
  CONTENT.services.forEach((service) => delete service.group);

  // Hai dự án của bản thiết kế (CHILD PAGE – DỰ ÁN 208:2894, 208:3670) dùng chung bố cục
  // của hồ sơ dự án mẫu; thẻ trang chủ và chân trang lấy tên riêng của từng dự án.
  const template = clone(CONTENT.projects[0]);
  const project = (from, slug, extra) => {
    const home = bySlug(CONTENT.projects, from);
    const entry = {
      ...clone(template),
      title: home.homeTitle,
      slug,
      category: home.homeCategory,
      summary: home.homeSummary,
      tags: home.tags,
      featured: true,
      homeOrder: home.homeOrder,
      homeTitle: home.homeTitle,
      homeSummary: home.homeSummary,
      homeCategory: home.homeCategory,
      homeImage: home.homeImage,
      image: home.homeImage,
      order: home.homeOrder,
      ...extra,
    };
    entry.seo = seo(entry.title, entry.summary, template.seo.keywords);
    entry.sections.find((s) => s.__component === 'sections.project-overview').title = entry.title;
    return entry;
  };
  CONTENT.projects = [
    project('kho-thong-minh-asrs', 'oulide-ada-smart-warehouse', {
      location: 'Binh Duong',
      year: '2025',
      publishedDate: '2026-05-17',
    }),
    project('khuon-ep-nhua-y-te', 'tongjun-environmental-new-materials', {
      // Ảnh thẻ thứ hai ở trang Dự án Figma (116:210); thẻ trang chủ giữ ảnh như Figma 87:212.
      image: { $file: 'fv2-801a5634.jpg', alt: 'Modern automated warehouse' },
      location: 'Hai Phong',
      year: '2025',
      publishedDate: '2026-04-22',
    }),
  ];

  // Chân trang liệt kê đúng các trang đang có.
  const pathOf = (entry, list, base) => {
    const parts = [entry.slug];
    let parent = entry.parent && list.find((x) => x.slug === entry.parent);
    while (parent) {
      parts.unshift(parent.slug);
      parent = parent.parent && list.find((x) => x.slug === parent.parent);
    }
    return base + parts.join('/');
  };
  CONTENT.footer.columns[0].links = CONTENT.projects.map((p) => ({
    title: p.title,
    href: pathOf(p, CONTENT.projects, '/du-an/'),
  }));
  CONTENT.footer.columns[1].links = CONTENT.services
    .filter((s) => s.parent)
    .map((s) => ({ title: s.title, href: pathOf(s, CONTENT.services, '/dich-vu/') }));
})();

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const ROOT = path.resolve(__dirname, '..');
const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

function assetsDirectory() {
  return process.env.SEED_ASSETS_DIR
    ? path.resolve(process.env.SEED_ASSETS_DIR)
    : path.join(ROOT, 'seed-assets');
}
function validateContent() {
  const assets = new Set();
  function visit(value, key = '', trail = 'content') {
    if (typeof value === 'string') {
      if (/[À-ỹ]/u.test(value)) throw new Error(`Non-English seed text at ${trail}`);
      return;
    }
    if (Array.isArray(value))
      return value.forEach((item, index) => visit(item, key, `${trail}[${index}]`));
    if (!value || typeof value !== 'object') return;
    if (value.$file) {
      if (path.basename(value.$file) !== value.$file)
        throw new Error(`Invalid asset name at ${trail}`);
      const filename = path.join(assetsDirectory(), value.$file);
      if (!fs.existsSync(filename)) throw new Error(`Missing seed asset: ${filename}`);
      if (!MIME[path.extname(filename).toLowerCase()])
        throw new Error(`Unsupported media type: ${filename}`);
      if (!value.alt) throw new Error(`Missing media alternative text at ${trail}`);
      assets.add(value.$file);
    }
    for (const [name, item] of Object.entries(value)) visit(item, name, `${trail}.${name}`);
  }
  visit(CONTENT);
  for (const group of ['services', 'projects', 'articles']) {
    const slugs = CONTENT[group].map((item) => item.slug);
    if (new Set(slugs).size !== slugs.length) throw new Error(`Duplicate slug in ${group}`);
  }
  return {
    pages: Object.keys(CONTENT.pages).length,
    global: 1,
    header: 1,
    services: CONTENT.services.length,
    projects: CONTENT.projects.length,
    articles: CONTENT.articles.length,
    assets: assets.size,
  };
}

const { LOCALES, SOURCE_LOCALE, ensureLocales } = require('../src/locales');
// Values under these keys are identifiers, links or media references, never translated.
const UNTRANSLATED_KEYS = new Set([
  'slug',
  '$file',
  '__component',
  'variant',
  'group',
  'publishedDate',
  'keywords',
  'language',
  'locale',
  'openGraphLocale',
  'routes',
  'videoUrl',
  'mapUrl',
  'homeOrder',
  'featured',
  'parent',
  'parentSlug',
  'order',
  'source',
]);
const LOCALE_METADATA = {
  en: { language: 'en', locale: 'en-US', openGraphLocale: 'en_US' },
  vi: { language: 'vi', locale: 'vi-VN', openGraphLocale: 'vi_VN' },
  zh: { language: 'zh', locale: 'zh-CN', openGraphLocale: 'zh_CN' },
};
function loadTranslations(code) {
  const dir = path.join(__dirname, 'translations');
  const dictionary = {};
  if (!fs.existsSync(dir)) return dictionary;
  // `<code>.extra.json` nạp sau cùng để các bản dịch bổ sung ghi đè bản gốc.
  const order = (file) => (file.includes('.extra.') ? 1 : 0);
  for (const file of fs.readdirSync(dir).sort((a, b) => order(a) - order(b) || a.localeCompare(b)))
    if (file.startsWith(`${code}.`) && file.endsWith('.json'))
      Object.assign(dictionary, JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')));
  return dictionary;
}
function isLink(key, value) {
  return /href$/i.test(key) || /^(\/|#|https?:|mailto:|tel:)/.test(value);
}
// Deep-copies seed content, replacing every translatable string found in the dictionary.
function localizeContent(content, code) {
  if (code === SOURCE_LOCALE) return content;
  const dictionary = loadTranslations(code);
  const missing = new Set();
  const visit = (value, key) => {
    if (typeof value === 'string') {
      if (UNTRANSLATED_KEYS.has(key) || isLink(key, value) || !/[A-Za-z]/.test(value)) return value;
      if (dictionary[value] === undefined) missing.add(value);
      return dictionary[value] ?? value;
    }
    if (Array.isArray(value)) return value.map((item) => visit(item, key));
    if (!value || typeof value !== 'object') return value;
    if (key === 'routes') return value;
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, visit(v, k)]));
  };
  const localized = visit(content, '');
  localized['site-settings'].metadata = {
    ...localized['site-settings'].metadata,
    ...LOCALE_METADATA[code],
  };
  return { content: localized, missing: missing.size };
}

const escapeHtml = (text) =>
  String(text).replace(
    /[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c],
  );
// Article bodies are edited in CKEditor: turn the seed's heading/paragraph cards into one HTML block.
function articleRichText(content) {
  for (const article of content.articles) {
    const index = article.sections.findIndex((s) => s.__component === 'sections.article-body');
    const body = article.sections[index];
    if (!body?.cards?.length) continue;
    const html = body.cards
      .map((card) => {
        const paragraphs = String(card.description || '')
          .split(/\n\s*\n/)
          .filter(Boolean)
          .map((p) => {
            const text = p.trim();
            if (!/^[“"]/.test(text)) return `<p>${escapeHtml(text)}</p>`;
            const [quote, author] = text.split(/\s+[—–-]\s+(?=[^”"]*$)/);
            return `<blockquote><p>${escapeHtml(quote)}</p>${author ? `<p>— ${escapeHtml(author)}</p>` : ''}</blockquote>`;
          })
          .join('');
        return `<h2>${escapeHtml(card.title)}</h2>${paragraphs}`;
      })
      .join('');
    article.sections.splice(
      index,
      1,
      { ...body, cards: [] },
      { __component: 'sections.rich-text', content: html },
    );
  }
  return content;
}

async function seed(strapi, { replace = false, upgradeUi = false, only = null } = {}) {
  // `only` limits the run to some groups, e.g. new Set(['articles']), leaving other content untouched.
  const include = (group) => !only || only.has(group);
  const expected = validateContent(); // Check all files before changing any record.
  const uploads = new Map(); // Cache promises, so repeated concurrent references cannot double-upload.
  const stats = { created: 0, updated: 0, skipped: 0, uploaded: 0, reusedMedia: 0 };
  async function upload(source) {
    const filepath = path.join(assetsDirectory(), source.$file);
    const digest = crypto.createHash('sha256').update(fs.readFileSync(filepath)).digest('hex');
    if (!uploads.has(digest))
      uploads.set(
        digest,
        (async () => {
          const name = `topwell-seed-${digest}${path.extname(filepath).toLowerCase()}`;
          const files = strapi.db.query('plugin::upload.file');
          let existing = await files.findOne({ where: { name } });
          // Reuse an earlier import only when the original asset bytes match.
          if (!existing) {
            const legacy = await files.findOne({ where: { name: source.$file } });
            if (legacy?.url?.startsWith('/uploads/')) {
              const localFile = path.join(ROOT, 'public', legacy.url);
              if (
                fs.existsSync(localFile) &&
                crypto.createHash('sha256').update(fs.readFileSync(localFile)).digest('hex') ===
                  digest
              )
                existing = legacy;
            }
          }
          if (existing) {
            if (
              existing.url?.startsWith('/uploads/') &&
              !fs.existsSync(path.join(ROOT, 'public', existing.url))
            )
              throw new Error(
                `Media ${existing.id} references a missing upload. Restore the upload before seeding.`,
              );
            await files.update({
              where: { id: existing.id },
              data: { alternativeText: source.alt },
            });
            stats.reusedMedia++;
            return existing.id;
          }
          const [created] = await strapi
            .plugin('upload')
            .service('upload')
            .upload({
              data: {
                fileInfo: {
                  name,
                  alternativeText: source.alt,
                  caption: 'TOP WELL English sample content',
                },
              },
              files: {
                filepath,
                originalFilename: name,
                mimetype: MIME[path.extname(filepath).toLowerCase()],
                size: fs.statSync(filepath).size,
              },
            });
          if (!created?.id) throw new Error(`Upload failed: ${source.$file}`);
          stats.uploaded++;
          return created.id;
        })(),
      );
    return uploads.get(digest);
  }
  async function transform(value) {
    if (Array.isArray(value)) return Promise.all(value.map(transform));
    if (!value || typeof value !== 'object') return value;
    if (value.$file) return { alt: value.alt, media: await upload(value) };
    return Object.fromEntries(
      await Promise.all(
        Object.entries(value).map(async ([key, item]) => [key, await transform(item)]),
      ),
    );
  }
  async function upsert(uid, data, slug, locale = SOURCE_LOCALE) {
    const service = strapi.documents(uid);
    const filters = slug ? { filters: { slug } } : {};
    let found = await service.findFirst({ ...filters, locale });
    // A translation must be a localization of the source document, not a separate document.
    if (found && locale !== SOURCE_LOCALE) {
      const origin = await service.findFirst({ ...filters, locale: SOURCE_LOCALE });
      if (origin && origin.documentId !== found.documentId) {
        await service.delete({ documentId: found.documentId, locale });
        found = null;
      }
    }
    if (found && !replace) {
      stats.skipped++;
      return;
    }
    const transformed = await transform(data);
    if (uid === 'api::header.header') transformed.logo = transformed.logo.media;
    // Quan hệ cha – con của Dịch vụ / Dự án khai báo bằng slug; đổi sang documentId khi ghi.
    if (transformed.parent) {
      const parent = await service.findFirst({
        filters: { slug: transformed.parent },
        locale: SOURCE_LOCALE,
      });
      transformed.parent = parent ? parent.documentId : null;
    }
    // Other languages are stored as localizations of the source-language document.
    const source =
      found ||
      (locale !== SOURCE_LOCALE &&
        (await service.findFirst({ ...filters, locale: SOURCE_LOCALE })));
    if (source) {
      await service.update({
        documentId: source.documentId,
        locale,
        data: transformed,
        status: 'published',
      });
      found ? stats.updated++ : stats.created++;
    } else {
      await service.create({ data: transformed, locale, status: 'published' });
      stats.created++;
    }
  }
  if (upgradeUi) {
    const mediaChanges = new Map();
    for (const [oldFile, newFile] of Object.entries(IMAGE_REPLACEMENTS)) {
      const digest = crypto
        .createHash('sha256')
        .update(fs.readFileSync(path.join(assetsDirectory(), oldFile)))
        .digest('hex');
      const oldMedia = await strapi.db.query('plugin::upload.file').findMany({
        where: { name: { $in: [oldFile, `topwell-seed-${digest}${path.extname(oldFile)}`] } },
      });
      if (oldMedia.length) {
        const replacement = await upload({ $file: newFile, alt: 'TOP WELL operations' });
        oldMedia.forEach((file) => mediaChanges.set(file.id, replacement));
      }
    }
    function populate(uid) {
      const schema = strapi.contentTypes[uid] || strapi.components[uid];
      const result = {};
      for (const [key, attr] of Object.entries(schema.attributes)) {
        if (attr.type === 'media') result[key] = true;
        if (attr.type === 'component') result[key] = { populate: populate(attr.component) };
        if (attr.type === 'dynamiczone')
          result[key] = {
            on: Object.fromEntries(attr.components.map((c) => [c, { populate: populate(c) }])),
          };
      }
      return result;
    }
    async function serialize(value, uid, changes) {
      const schema = strapi.contentTypes[uid] || strapi.components[uid];
      const result = value.__component ? { __component: value.__component } : {};
      for (const [key, attr] of Object.entries(schema.attributes)) {
        if (
          (strapi.contentTypes[uid] &&
            [
              'id',
              'documentId',
              'createdAt',
              'updatedAt',
              'publishedAt',
              'createdBy',
              'updatedBy',
              'locale',
              'localizations',
            ].includes(key)) ||
          value[key] === undefined
        )
          continue;
        const item = value[key];
        if (attr.type === 'media') {
          const mediaId = (file) => {
            if (!file) return null;
            if (mediaChanges.has(file.id)) changes.value = true;
            return mediaChanges.get(file.id) || file.id;
          };
          result[key] = attr.multiple ? (item || []).map(mediaId) : mediaId(item);
        } else if (attr.type === 'component') {
          result[key] = attr.repeatable
            ? await Promise.all((item || []).map((x) => serialize(x, attr.component, changes)))
            : item
              ? await serialize(item, attr.component, changes)
              : null;
        } else if (attr.type === 'dynamiczone')
          result[key] = await Promise.all(
            (item || []).map((x) => serialize(x, x.__component, changes)),
          );
        else if (attr.type !== 'relation') result[key] = item;
      }
      if (SECTION_ICONS[uid])
        for (const [i, card] of (result.cards || []).entries()) {
          if (!card.icon) {
            card.icon = await transform({
              $file: SECTION_ICONS[uid][i % SECTION_ICONS[uid].length],
              alt: card.title,
            });
            changes.value = true;
          }
        }
      return result;
    }
    const names = [
      'global',
      'footer',
      'site-settings',
      ...Object.keys(CONTENT.pages),
      'service',
      'project',
      'article',
    ];
    for (const name of names) {
      const uid = `api::${name}.${name}`,
        service = strapi.documents(uid);
      const docs = await service.findMany({ populate: populate(uid) });
      for (const doc of docs) {
        const changes = { value: false };
        const data = await serialize(doc, uid, changes);
        if (changes.value) {
          await service.update({ documentId: doc.documentId, data, status: 'published' });
          stats.updated++;
        }
      }
    }
    strapi.log.info(`UI upgrade complete: ${JSON.stringify(stats)}`);
    return stats;
  }
  await ensureLocales(strapi);
  const missing = {};
  for (const code of [
    SOURCE_LOCALE,
    ...LOCALES.map((l) => l.code).filter((c) => c !== SOURCE_LOCALE),
  ]) {
    const localized = localizeContent(CONTENT, code);
    const content = articleRichText(
      structuredClone(code === SOURCE_LOCALE ? CONTENT : localized.content),
    );
    if (code !== SOURCE_LOCALE) missing[code] = localized.missing;
    for (const [group, name] of [
      ['services', 'service'],
      ['projects', 'project'],
      ['articles', 'article'],
    ]) {
      if (include(group))
        for (const item of content[group])
          await upsert(`api::${name}.${name}`, item, item.slug, code);
    }
    for (const name of ['global', 'header', 'site-settings', 'footer'])
      if (include(name)) await upsert(`api::${name}.${name}`, content[name], undefined, code);
    if (include('pages'))
      for (const [name, page] of Object.entries(content.pages).sort(
        ([a], [b]) => Number(a === 'home-page') - Number(b === 'home-page'),
      ))
        await upsert(`api::${name}.${name}`, page, undefined, code);
  }
  if (Object.values(missing).some(Boolean))
    strapi.log.warn(`Untranslated seed strings kept in English: ${JSON.stringify(missing)}`);
  strapi.log.info(
    `Seed complete (${LOCALES.map((l) => l.code).join(', ')}): ${JSON.stringify({ ...expected, ...stats })}`,
  );
  return stats;
}

module.exports = { CONTENT, seed, validateContent, localizeContent, articleRichText };

if (require.main === module) {
  (async () => {
    const args = new Set(process.argv.slice(2));
    for (const arg of args)
      if (!['--replace', '--check', '--ui-upgrade'].includes(arg) && !arg.startsWith('--only='))
        throw new Error(`Unknown option: ${arg}`);
    if (args.has('--check')) {
      console.log(JSON.stringify(validateContent(), null, 2));
      return;
    }
    process.chdir(ROOT);
    // Avoid invoking the optional bootstrap seed a second time during the CLI run.
    process.env.TOPWELL_SEED_CLI = 'true';
    process.env.STRAPI_TELEMETRY_DISABLED = 'true';
    const { createStrapi } = require('@strapi/strapi');
    const app = createStrapi({ appDir: ROOT, distDir: ROOT });
    try {
      await app.load();
      // Strapi 5 dispatches document events through unawaited onCommit callbacks.
      // Track those callbacks so their media-population queries finish before shutdown.
      const pending = new Set();
      const failures = [];
      const transaction = app.db.transaction.bind(app.db);
      app.db.transaction = (callback) =>
        transaction(
          typeof callback !== 'function'
            ? callback
            : (context) =>
                callback({
                  ...context,
                  onCommit: (handler) =>
                    context.onCommit(() => {
                      const job = Promise.resolve().then(handler);
                      pending.add(job);
                      job.then(
                        () => pending.delete(job),
                        (error) => {
                          pending.delete(job);
                          failures.push(error);
                        },
                      );
                    }),
                }),
        );
      try {
        const onlyArg = [...args].find((a) => a.startsWith('--only='));
        await seed(app, {
          replace: args.has('--replace'),
          upgradeUi: args.has('--ui-upgrade'),
          // e.g. --only=articles,services (groups: services, projects, articles, pages, global, header, site-settings, footer)
          only: onlyArg ? new Set(onlyArg.slice(7).split(',')) : null,
        });
      } finally {
        while (pending.size) await Promise.allSettled([...pending]);
        app.db.transaction = transaction;
      }
      if (failures.length) throw failures[0];
    } finally {
      await app.destroy();
    }
  })().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
