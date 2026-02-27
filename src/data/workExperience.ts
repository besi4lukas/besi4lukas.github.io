import { WorkExperience } from '@/types';

export const workExperienceData: WorkExperience[] = [
  {
    company: 'Expedia Group',
    dateRange: '09/2023 - Present',
    responsibilities: [
      'Designed and built Spring Boot REST APIs for multi-brand loyalty offers, enabling travelers to earn and redeem rewards across Expedia, Hotels.com, and Vrbo.',
      'Owned and maintained the Offers Loyalty Service, a gRPC-based core backend service consumed by Expedia Search Results, Product Details pages, and external partner platforms to retrieve traveler membership details, traveler rewards, and loyalty information.',
      'Developed full-stack features for the Loyalty Web Platform using React, TypeScript, Node.js, and Spring Boot to support internal offer management workflows.',
      'Designed and built backend APIs powering internal tools used by over 200 marketing managers to configure traveler reward offers across Expedia and partner programs, including Walmart+, Accor Live Limitless, and HawaiianMiles.',
    ],
  },
  {
    company: 'Expedia Group',
    dateRange: '09/2022 - 09/2023',
    responsibilities: [
      'Built Spring Boot APIs to orchestrate Apache Spark and PySpark jobs supporting internal data processing pipelines.',
      'Designed PostgreSQL schemas and wrote DDL scripts to support job orchestration, execution tracking, and metadata storage.',
      'Developed Airflow DAGs to assess SLA compliance across multiple Airflow clusters, improving reliability and observability of scheduled workloads.',
      'Built Airflow-based ETL pipelines to extract metadata from Trino datasets and publish it to Alation, improving data discoverability for analytics teams.',
      'Deployed backend services to staging and production environments using Spinnaker CI/CD pipelines.',
    ],
  },
  {
    company: 'Goldman Sachs',
    dateRange: '07/2021 - 09/2022',
    responsibilities: [
      'Built production React and TypeScript features for an internal onboarding platform used to onboard new clients with financial assets worth over 10 million dollars into the firm.',
      'Investigated and resolved frontend defects identified during QA and UAT cycles, partnering closely with test engineers to ensure production readiness.',
      'Implemented Jest-based unit tests to validate frontend features and improve release stability.',
      'Deployed frontend features through CI/CD pipelines across QA and UAT environments in a regulated enterprise environment.',
    ],
  },
];
